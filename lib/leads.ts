/**
 * The one place a lead submission leaves the site.
 *
 * Every consultation form on every page funnels through submitLead(). When we
 * pick a provider — Formspree, HubSpot, a Google Apps Script, an API route,
 * whatever — it gets wired in HERE and every form starts working at once.
 * Nothing else needs to change.
 *
 * Until then this deliberately THROWS rather than pretending to succeed. The
 * old contact form faked an 800ms delay and showed "Thank you!" while dropping
 * the enquiry on the floor, which is worse than an honest error: the visitor
 * believes they have reached us and stops trying.
 */

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
}

export class LeadNotConfiguredError extends Error {
  constructor() {
    super("Lead submission is not configured yet.");
    this.name = "LeadNotConfiguredError";
  }
}

/** True once a provider is wired up, so forms can warn during development. */
export const LEADS_CONFIGURED = false;

export async function submitLead(lead: Lead): Promise<void> {
  if (!LEADS_CONFIGURED) {
    // Keep the payload visible while we are still wiring this up, so a form can
    // be exercised end to end and the shape checked against the provider.
    if (process.env.NODE_ENV !== "production") {
      console.info("[lead] would submit:", lead);
    }
    throw new LeadNotConfiguredError();
  }

  // ---------------------------------------------------------------------
  // Wire the provider in here. For example, an API route:
  //
  //   const res = await fetch("/api/leads", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(lead),
  //   });
  //   if (!res.ok) throw new Error(`Lead submission failed: ${res.status}`);
  // ---------------------------------------------------------------------
}
