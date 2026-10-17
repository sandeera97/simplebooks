import type { Lead } from "./leads";
import { navItems, type NavItem } from "@/components/layout/navData";

/**
 * Pipedrive sync.
 *
 * Simplebooks runs two Pipedrive accounts — one for business registration and
 * one for tax — so every submission is routed by the page it came from before
 * it is sent.
 *
 * Each submission becomes a Person plus a Lead, with the rest of the answers
 * attached as a Note. The note matters: lead custom fields are identified by
 * per-account hashed ids, so writing to them would mean configuring a field
 * map for each account before anything worked. A note carries every answer
 * with no setup at all, and fields can be mapped later if they want them.
 */

const API_BASE = process.env.PIPEDRIVE_API_BASE || "https://api.pipedrive.com/v1";

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

async function call<T>(
  account: PipedriveAccount,
  path: string,
  body: unknown
): Promise<T> {
  const token = tokenFor(account);
  if (!token) throw new PipedriveError(`No API token for the ${account} account.`);

  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-token": token,
    },
    body: JSON.stringify(body),
    // Never let a slow CRM hold a visitor's form open.
    signal: AbortSignal.timeout(10_000),
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

/** Everything the form captured, as a readable note. */
function noteBody(lead: Lead): string {
  const rows: [string, string | undefined][] = [
    ["Name", fullName(lead)],
    ["Email", lead.email],
    ["Phone", phoneOf(lead)],
    ["Service", lead.service],
    [lead.question?.label ?? "", lead.question?.answer],
    ["Areas of interest", lead.interests?.join(", ")],
    ["Preferred language", lead.language],
    ["Message", lead.message],
    ["Marketing consent", lead.marketingConsent === undefined ? undefined : lead.marketingConsent ? "Yes" : "No"],
    ["Submitted from", `${pageLabel(lead.source)} (${lead.source})`],
  ];
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

/** Lead title as it appears in the Pipedrive inbox. */
function leadTitle(lead: Lead): string {
  return `${fullName(lead)} — ${lead.service || pageLabel(lead.source)}`.slice(0, 255);
}

export interface SyncResult {
  account: PipedriveAccount;
  personId: number;
  leadId: string;
  noteAttached: boolean;
}

export async function sendToPipedrive(lead: Lead): Promise<SyncResult> {
  const account = accountFor(lead.source);

  const person = await call<{ id: number }>(account, "/persons", {
    name: fullName(lead),
    email: lead.email ? [{ value: lead.email, primary: true, label: "work" }] : undefined,
    phone: phoneOf(lead) ? [{ value: phoneOf(lead), primary: true, label: "work" }] : undefined,
  });

  const createdLead = await call<{ id: string }>(account, "/leads", {
    title: leadTitle(lead),
    person_id: person.id,
  });

  /* The lead exists at this point. If the note fails the enquiry is still in
     their inbox, so this is reported rather than thrown. */
  let noteAttached = false;
  try {
    await call(account, "/notes", { content: noteBody(lead), lead_id: createdLead.id });
    noteAttached = true;
  } catch {
    noteAttached = false;
  }

  return { account, personId: person.id, leadId: createdLead.id, noteAttached };
}
