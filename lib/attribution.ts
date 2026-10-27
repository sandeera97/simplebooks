/**
 * Ad attribution.
 *
 * Someone clicks a Facebook ad, lands on /business-registration?utm_source=...,
 * reads two or three pages, and only then fills in a form. By that point the
 * query string is long gone — so the parameters are stored the moment they
 * land and read back when they submit. Without that the CRM has no way of
 * knowing which ad paid for the enquiry.
 *
 * localStorage rather than a cookie: nothing rendered on the server depends on
 * this, and a cookie would be sent with every single request for no reason.
 */

export const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];

export interface Attribution {
  params: Partial<Record<AttributionParam, string>>;
  /** First page of the visit, query string included. */
  landingPage?: string;
  /** Whatever sent them here, when the browser says. */
  referrer?: string;
  /** When it was captured, so stale attribution can be dropped. */
  capturedAt?: string;
}

const STORAGE_KEY = "sb_attribution";

/** An ad click that becomes an enquiry does so within days. 90 is generous. */
const MAX_AGE_DAYS = 90;

/* Pipedrive varchar fields hold 255 characters and silently truncate past it,
   so values are cut here where it is visible. */
const MAX_VALUE = 255;
const MAX_URL = 500;

function trim(value: unknown, limit: number): string | undefined {
  if (typeof value !== "string") return undefined;
  /* Control characters would break the note's HTML and read as corruption in
     the CRM. */
  const clean = value.replace(/[\u0000-\u001f\u007f]/g, "").trim();
  return clean ? clean.slice(0, limit) : undefined;
}

/**
 * Keep only the parameters we track, trimmed to what Pipedrive will hold.
 * Used on the client when capturing and again on the server, which must not
 * trust anything a browser posts.
 */
export function sanitizeAttribution(input: unknown): Attribution | undefined {
  if (!input || typeof input !== "object") return undefined;
  const raw = input as Record<string, unknown>;
  const source = (raw.params && typeof raw.params === "object" ? raw.params : raw) as Record<string, unknown>;

  const params: Attribution["params"] = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const value = trim(source[key], MAX_VALUE);
    if (value) params[key] = value;
  }

  const landingPage = trim(raw.landingPage, MAX_URL);
  const referrer = trim(raw.referrer, MAX_URL);
  const capturedAt = trim(raw.capturedAt, 40);

  if (!Object.keys(params).length && !landingPage && !referrer) return undefined;
  return { params, landingPage, referrer, capturedAt };
}

export function hasAttribution(a: Attribution | undefined): boolean {
  return Boolean(a && Object.keys(a.params).length);
}

/* ---------------------------------------------------------------- client ---
   Every localStorage call is guarded: Safari in private mode throws on access
   rather than returning null, which would take the whole form down with it. */

function store(): Storage | undefined {
  try {
    return typeof window === "undefined" ? undefined : window.localStorage;
  } catch {
    return undefined;
  }
}

/**
 * Record the ad parameters on the current URL, if there are any.
 *
 * A visitor who arrives from a second, different ad should be credited to that
 * newer campaign, so a fresh set of parameters replaces what was stored. A page
 * with no parameters leaves the stored set alone — otherwise simply browsing to
 * the next page would wipe it.
 */
export function captureAttribution(): Attribution | undefined {
  const ls = store();
  if (!ls) return undefined;

  const query = new URLSearchParams(window.location.search);
  const params: Attribution["params"] = {};
  for (const key of ATTRIBUTION_PARAMS) {
    const value = trim(query.get(key), MAX_VALUE);
    if (value) params[key] = value;
  }
  if (!Object.keys(params).length) return readAttribution();

  const attribution: Attribution = {
    params,
    landingPage: trim(window.location.href, MAX_URL),
    /* An internal referrer is just the previous page of this visit. */
    referrer: trim(document.referrer, MAX_URL)?.startsWith(window.location.origin)
      ? undefined
      : trim(document.referrer, MAX_URL),
    capturedAt: new Date().toISOString(),
  };

  try {
    ls.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    /* Storage full or blocked. The submission still carries this visit's
       parameters in memory; only the cross-page memory is lost. */
  }
  return attribution;
}

export function readAttribution(): Attribution | undefined {
  const ls = store();
  if (!ls) return undefined;

  let stored: unknown;
  try {
    const text = ls.getItem(STORAGE_KEY);
    if (!text) return undefined;
    stored = JSON.parse(text);
  } catch {
    return undefined;
  }

  const attribution = sanitizeAttribution(stored);
  if (!attribution) return undefined;

  /* Attribution older than the window is noise — an unrelated visit months
     later should not be credited to it. */
  if (attribution.capturedAt) {
    const age = Date.now() - Date.parse(attribution.capturedAt);
    if (Number.isFinite(age) && age > MAX_AGE_DAYS * 86_400_000) {
      clearAttribution();
      return undefined;
    }
  }
  return attribution;
}

/** Called once a submission has been accepted, so the next enquiry starts clean. */
export function clearAttribution(): void {
  try {
    store()?.removeItem(STORAGE_KEY);
  } catch {
    /* Nothing to do; the age check above will drop it eventually. */
  }
}
