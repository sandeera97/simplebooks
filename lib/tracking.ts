/**
 * Marketing and analytics tags, copied from the live simplebooks.com
 * (WordPress) so the new site reports into the same accounts.
 *
 * Google Tag Manager carries most of the stack by itself: GA4, the Google
 * Ads conversion tags, the Facebook pixel and SDK, Microsoft Clarity,
 * Hotjar, Inspectlet, Nudgify and the Zapier chatbot all fire from inside
 * container GTM-NBBX9DD. The rest were hard-coded in the WordPress theme
 * (or the old /business-registration/ landing page), so they are loaded
 * here directly. GA4 is deliberately NOT added a second time: WordPress's
 * Site Kit plugin did that, which double-counts every page view.
 *
 * Tags only load on the production deployment (simplebooks-ten.vercel.app
 * today, simplebooks.com after the domain moves). Pull-request previews and
 * local development stay out of the client's analytics and ad conversions.
 * Set FORCE_TRACKING=1 to load them anywhere, e.g. to test with GTM preview.
 */

export const GTM_ID = "GTM-NBBX9DD";
export const CHATBASE_ID = "7LP0IEb5sXUYCZGw2phgT";
export const CONVERTFUL_OWNER = "82790";
export const TIKTOK_PIXEL = "D518OGJC77UDC9ALM0I0";
/** RedTrack (track.simplebooks.com), the click tracker for paid campaigns. */
export const REDTRACK_CAMPAIGN = "69982ed17b717ece8c2f5458";
/** Amplitude project of the old /business-registration/ ad landing page. */
export const AMPLITUDE_KEY = "9df306db914d2f13bb380d7406ba25b9";
/** Google Search Console ownership token from the live site's <head>. */
export const GOOGLE_SITE_VERIFICATION = "cxioEJC8zkf-ovjzAPp_aMnXZju5-6cuYtjCtxJ60ck";

/** Read on the server at build/render time. */
export function trackingEnabled(): boolean {
  return process.env.VERCEL_ENV === "production" || process.env.FORCE_TRACKING === "1";
}

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/**
 * Push an event to GTM. Safe to call when GTM is not on the page (previews,
 * local dev, an ad blocker): the array is just created and ignored.
 */
export function pushToDataLayer(event: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
