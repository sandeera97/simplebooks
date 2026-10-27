import type { Lead } from "./leads";
import { navItems, type NavItem } from "@/components/layout/navData";
import { ATTRIBUTION_PARAMS, type Attribution } from "./attribution";
import { ACCOUNT_FIELDS } from "./pipedriveFields";

/**
 * Pipedrive sync.
 *
 * Simplebooks runs two Pipedrive accounts — Simplebooks Limited for business
 * registration and Simplebooks Pvt Ltd for tax — so every submission is routed
 * by the page it came from before it is sent.
 *
 * Each submission becomes a Person, a Deal in the first stage of that account's
 * working pipeline, and a Note. Deals rather than Leads: both accounts already
 * carry a full set of custom DEAL fields from the live Gravity Forms setup, and
 * their pipelines ("Need to Call" -> "Follow up" -> "Payment Received") are
 * where the team works. A Lead would sit in a separate inbox that nothing else
 * in their process touches.
 *
 * Answers are written into their existing fields (see lib/pipedriveFields.ts)
 * AND repeated in the note. The duplication is deliberate — the note is the
 * complete record, so an answer with no field to go to is still never lost.
 */

const API_BASE = process.env.PIPEDRIVE_API_BASE || "https://api.pipedrive.com/v1";

/* Four calls at most, and the visitor is waiting on all of them. Short enough
   that the worst case still fits inside the route's own time limit. */
const CALL_TIMEOUT_MS = 6_000;

export type PipedriveAccount = "tax" | "business";

/** Tax pages go to the tax account; everything else to business registration. */
export function accountFor(source: string): PipedriveAccount {
  return source.startsWith("/tax/") ? "tax" : "business";
}

function tokenFor(account: PipedriveAccount): string | undefined {
  const token =
    account === "tax"
      ? process.env.PIPEDRIVE_TOKEN_TAX
      : process.env.PIPEDRIVE_TOKEN_BUSINESS;
  return token && token.trim() ? token.trim() : undefined;
}

export function isConfigured(account: PipedriveAccount): boolean {
  return Boolean(tokenFor(account));
}

export class PipedriveError extends Error {
  constructor(message: string, readonly status?: number) {
    super(message);
    this.name = "PipedriveError";
  }
}

async function request<T>(
  account: PipedriveAccount,
  method: "GET" | "POST",
  path: string,
  body?: unknown
): Promise<T> {
  const token = tokenFor(account);
  if (!token) throw new PipedriveError(`No API token for the ${account} account.`);

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      "x-api-token": token,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    // Never let a slow CRM hold a visitor's form open.
    signal: AbortSignal.timeout(CALL_TIMEOUT_MS),
  });

  const text = await res.text();
  let json: { success?: boolean; data?: T; error?: string } = {};
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    throw new PipedriveError(`Unreadable response from ${path}: ${text.slice(0, 160)}`, res.status);
  }

  if (!res.ok || json.success === false) {
    throw new PipedriveError(json.error || `${path} failed (${res.status})`, res.status);
  }
  return json.data as T;
}

function fullName(lead: Lead): string {
  return [lead.firstName, lead.lastName].filter(Boolean).join(" ").trim() || "Website enquiry";
}

function phoneOf(lead: Lead): string {
  /* The country select reads "🇱🇰 +94"; the flag is decoration for the form and
     would only be noise in the CRM, so keep the dial code and drop the rest. */
  const dial = (lead.phoneCountry.match(/\+\d+/) ?? [""])[0];
  return [dial, lead.phone].filter(Boolean).join(" ").trim();
}

/* The header already names every page a form sits on, so reuse those labels
   rather than keeping a second list that would drift. */
const PAGE_LABELS: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  const walk = (items: NavItem[]) => {
    for (const item of items) {
      if (item.href?.startsWith("/") && !map[item.href]) map[item.href] = item.label;
      if (item.children) walk(item.children);
    }
  };
  walk(navItems);
  return map;
})();

/** "register-a-company" -> "Register a company", for anything not in the nav. */
function labelFromPath(source: string): string {
  const slug = source.split("/").filter(Boolean).pop() ?? "Website";
  const words = slug.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function pageLabel(source: string): string {
  return PAGE_LABELS[source] ?? labelFromPath(source);
}

/**
 * Is `lead.service` a service name, or the answer to a second dropdown?
 *
 * The payroll page asks "How are you currently managing your payroll?" in the
 * service slot, and "Nimal Perera — Manual processing (Eg: spreadsheets)" would
 * be a poor deal title.
 */
function serviceIsAnswer(account: PipedriveAccount, source: string): boolean {
  return Boolean(ACCOUNT_FIELDS[account].serviceAnswerByRoute?.[source]);
}

/** Deal title as it appears in the pipeline. */
function dealTitle(account: PipedriveAccount, lead: Lead): string {
  const what = serviceIsAnswer(account, lead.source)
    ? pageLabel(lead.source)
    : lead.service || pageLabel(lead.source);
  return `${fullName(lead)} — ${what}`.slice(0, 255);
}

/** Everything the form captured, as a readable note. */
function noteBody(account: PipedriveAccount, lead: Lead): string {
  const a = lead.attribution;
  const rows: [string, string | undefined][] = [
    ["Name", fullName(lead)],
    ["Email", lead.email],
    ["Phone", phoneOf(lead)],
    [
      serviceIsAnswer(account, lead.source) ? "How are you currently managing your payroll?" : "Service",
      lead.service,
    ],
    [lead.question?.label ?? "", lead.question?.answer],
    ["Areas of interest", lead.interests?.join(", ")],
    ["Preferred language", lead.language],
    ["Message", lead.message],
    [
      "Marketing consent",
      lead.marketingConsent === undefined ? undefined : lead.marketingConsent ? "Yes" : "No",
    ],
    ["Submitted from", `${pageLabel(lead.source)} (${lead.source})`],
  ];

  /* Ad parameters are repeated here in full. Most have their own field, but the
     business account is at Pipedrive's custom-field limit, so for fbclid, gclid
     and the landing page this note is the only copy. */
  for (const key of ATTRIBUTION_PARAMS) rows.push([key, a?.params[key]]);
  rows.push(["Landing page", a?.landingPage]);
  rows.push(["Referrer", a?.referrer]);

  const lines = rows
    .filter(([label, value]) => label && value)
    .map(([label, value]) => `<b>${escapeHtml(label)}:</b> ${escapeHtml(String(value))}`);
  return `<p>Website form submission</p><p>${lines.join("<br>")}</p>`;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

/**
 * The answers, mapped onto this account's custom deal fields.
 *
 * Anything without a field here is still in the note, so a missing id costs
 * reporting rather than data.
 */
function customFields(account: PipedriveAccount, lead: Lead): Record<string, string | number> {
  const f = ACCOUNT_FIELDS[account];
  const out: Record<string, string | number> = {};
  const set = (key: string | undefined, value: string | number | undefined) => {
    if (key && value !== undefined && value !== "") out[key] = value;
  };

  const a: Attribution | undefined = lead.attribution;
  if (a) {
    for (const key of ATTRIBUTION_PARAMS) set(f.utm[key], a.params[key]);
    set(f.landingPage, a.landingPage);

    /* Facebook names the three levels campaign / ad set / ad. utm_term is the
       ad set by their current URL convention and utm_content the ad — worth
       confirming against a live campaign, since only they can see the setup. */
    set(f.adNames?.campaign, a.params.utm_campaign);
    set(f.adNames?.adset, a.params.utm_term);
    set(f.adNames?.ad, a.params.utm_content);
  }

  set(f.name, fullName(lead));
  set(f.email, lead.email);
  set(f.message, lead.message);

  if (serviceIsAnswer(account, lead.source)) {
    set(f.serviceAnswerByRoute?.[lead.source], lead.service);
  } else if (lead.service) {
    set(f.serviceText, lead.service);
    set(f.servicesSet?.key, f.servicesSet?.options[lead.service]);
  }

  if (lead.language && f.language) {
    /* A pick-list on one account, free text on the other. */
    set(f.language.key, f.language.options ? f.language.options[lead.language] : lead.language);
  }

  if (lead.question?.answer) set(f.questionByRoute?.[lead.source], lead.question.answer);

  if (lead.interests?.length && f.interests) {
    /* Pipedrive takes a multi-select as comma-separated option ids. */
    const ids = lead.interests
      .map((label) => f.interests?.options[label])
      .filter((id): id is number => typeof id === "number");
    if (ids.length) out[f.interests.key] = ids.join(",");
  }

  return out;
}

/**
 * Reuse the Person already on file for this email.
 *
 * Someone who enquires about registration and later about VAT should be one
 * contact with two deals, not two half-contacts. A failed search is not worth
 * losing the enquiry over, so it falls through to creating a new Person.
 */
async function findOrCreatePerson(account: PipedriveAccount, lead: Lead): Promise<number> {
  try {
    const found = await request<{ items?: { item?: { id?: number } }[] }>(
      account,
      "GET",
      `/persons/search?term=${encodeURIComponent(lead.email)}&fields=email&exact_match=true&limit=1`
    );
    const id = found?.items?.[0]?.item?.id;
    if (typeof id === "number") return id;
  } catch {
    /* Fall through and create one. */
  }

  const phone = phoneOf(lead);
  const person = await request<{ id: number }>(account, "POST", "/persons", {
    name: fullName(lead),
    email: lead.email ? [{ value: lead.email, primary: true, label: "work" }] : undefined,
    phone: phone ? [{ value: phone, primary: true, label: "work" }] : undefined,
  });
  return person.id;
}

export interface SyncResult {
  account: PipedriveAccount;
  personId: number;
  dealId: number;
  /** Which custom fields were written, for the server log. */
  fieldsWritten: number;
  noteAttached: boolean;
}

export async function sendToPipedrive(lead: Lead): Promise<SyncResult> {
  const account = accountFor(lead.source);
  const personId = await findOrCreatePerson(account, lead);
  const fields = customFields(account, lead);

  const deal = await request<{ id: number }>(account, "POST", "/deals", {
    title: dealTitle(account, lead),
    person_id: personId,
    stage_id: ACCOUNT_FIELDS[account].stageId,
    ...fields,
  });

  /* The deal exists at this point. If the note fails the enquiry is still in
     their pipeline, so this is reported rather than thrown. */
  let noteAttached = false;
  try {
    await request(account, "POST", "/notes", {
      content: noteBody(account, lead),
      deal_id: deal.id,
    });
    noteAttached = true;
  } catch {
    noteAttached = false;
  }

  return {
    account,
    personId,
    dealId: deal.id,
    fieldsWritten: Object.keys(fields).length,
    noteAttached,
  };
}
