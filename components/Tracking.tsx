import Script from "next/script";
import {
  GTM_ID,
  CHATBASE_ID,
  CONVERTFUL_OWNER,
  TIKTOK_PIXEL,
  REDTRACK_CAMPAIGN,
  AMPLITUDE_KEY,
  trackingEnabled,
} from "@/lib/tracking";

/**
 * Site-wide tags. See lib/tracking.ts for what each one is and why it is
 * here. Renders nothing outside production.
 *
 * Loading order is about cost: GTM, TikTok and RedTrack need to see the
 * visit, so they load straight after hydration; the chat bubble and the
 * Convertful pop-ups are not needed in the first seconds, so they wait for
 * the browser to go idle and stay out of the page's load time.
 */
export default function Tracking() {
  if (!trackingEnabled()) return null;
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>

      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};ttq.load('${TIKTOK_PIXEL}');ttq.page();}(window,document,'ttq');`}
      </Script>

      <Script
        id="redtrack"
        src={`https://track.simplebooks.com/track.js?rtkcmpid=${REDTRACK_CAMPAIGN}`}
        strategy="afterInteractive"
      />

      <Script id="chatbase-config" strategy="lazyOnload">
        {`window.chatbaseConfig = { chatbotId: "${CHATBASE_ID}" };`}
      </Script>
      {/* Chatbase reads its bot id from the script element's own id. */}
      <Script id={CHATBASE_ID} src="https://www.chatbase.co/embed.min.js" strategy="lazyOnload" />

      <Script
        id="convertful-api"
        src={`https://app.convertful.com/Convertful.js?owner=${CONVERTFUL_OWNER}`}
        strategy="lazyOnload"
      />
    </>
  );
}

/** The GTM fallback for visitors without JavaScript; goes first in <body>. */
export function GtmNoScript() {
  if (!trackingEnabled()) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

/**
 * Amplitude analytics with session replay, as the old /business-registration/
 * landing page ran it. Only that page used it, so only that page loads it.
 * The two libraries must load in order before init, hence one small loader.
 */
export function AmplitudeBR() {
  if (!trackingEnabled()) return null;
  return (
    <Script id="amplitude-br" strategy="afterInteractive">
      {`(function(){function l(s,cb){var e=document.createElement('script');e.src=s;e.crossOrigin='anonymous';e.onload=cb;document.head.appendChild(e);}l('https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz',function(){l('https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.25.15-min.js.gz',function(){if(!window.amplitude||!window.sessionReplay)return;window.amplitude.add(window.sessionReplay.plugin({sampleRate:1}));window.amplitude.init('${AMPLITUDE_KEY}',{autocapture:{elementInteractions:true}});});});})();`}
    </Script>
  );
}
