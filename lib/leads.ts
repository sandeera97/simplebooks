/**
 * The one place a lead submission leaves the site.
 *
 * Every consultation form funnels through submitLead(), which posts to
 * /api/leads. The route holds the Pipedrive tokens server-side and decides
 * which of the two accounts a submission belongs to — see lib/pipedrive.ts.
 *
 * Ad attribution rides along automatically: submitLead() reads whatever was
 * stored when the visitor landed, so no form has to know about it. See
 * lib/attribution.ts.
 *
 * This THROWS on failure rather than pretending to succeed. The old contact
 * form faked an 800ms delay and showed "Thank you!" while dropping the enquiry
 * on the floor, which is worse than an honest error: the visitor believes they
 * have reached us and stops trying.
 */

import { readAttribution, clearAttribution, type Attribution } from "./attribution";

export interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  /** Dial code and number kept apart so a provider can recombine them however it wants. */
  phoneCountry: string;
  phone: string;
  service?: string;
  /** The one qualifying question a page asks, with the visitor's answer. */
  question?: { label: string; answer: string };
  /** Multi-select answers, e.g. the webinar page's "Areas of Interest". */
  interests?: string[];
  language?: string;
  message?: string;
  /** Explicit opt-in for marketing email. Absent means not asked, not "no". */
  marketingConsent?: boolean;
  /** Which page the enquiry came from, e.g. "/srilanka/services/auditing". */
  source: string;
  /** Ad parameters from the visit that brought them here. Attached by submitLead(). */
  attribution?: Attribution;
  /** Honeypot. Hidden from people, so anything here means a bot. */
  company?: string;
}

/** Thrown when the Pipedrive tokens are not in place yet. */
export class LeadNotConfiguredError extends Error {
  constructor(message = "Lead submission is not configured yet.") {
    super(message);
    this.name = "LeadNotConfiguredError";
  }
}

export async function submitLead(lead: Lead): Promise<void> {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    /* Attribution is read here rather than in each form, so every form on the
       site carries it without having to opt in. */
    body: JSON.stringify({ ...lead, attribution: lead.attribution ?? readAttribution() }),
  });

  let payload: { ok?: boolean; error?: string } = {};
  try {
    payload = await res.json();
  } catch {
    /* Fall through to the status check below. */
  }

  if (res.ok && payload.ok) {
    /* Only once it is safely in the CRM. Clearing earlier would mean a visitor
       who hits a network error and resubmits loses the ad that brought them. */
    clearAttribution();
    return;
  }

  /* 503 means the account has no token yet — a setup state, not a bug, so it
     is typed separately from a genuine failure. */
  if (res.status === 503) throw new LeadNotConfiguredError(payload.error);
  throw new Error(payload.error || `Lead submission failed (${res.status}).`);
}
