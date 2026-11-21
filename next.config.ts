import type { NextConfig } from "next";

/* Covers uploaded to Strapi are served from wherever the CMS runs, so
   next/image has to be told that host is allowed. */
const strapiHost = process.env.STRAPI_URL ? new URL(process.env.STRAPI_URL) : undefined;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: strapiHost
      ? [
          {
            protocol: strapiHost.protocol.replace(":", "") as "http" | "https",
            hostname: strapiHost.hostname,
            port: strapiHost.port || undefined,
            pathname: "/uploads/**",
          },
        ]
      : [],
  },


  /**
   * Permanent redirects for URLs the live simplebooks.com serves today but
   * this rebuild does not, so nothing that currently ranks 404s at cutover.
   *
   * The tax pages are the bulk of it: live serves them from the domain root
   * (/vat, /sscl, /corporate-tax) and from /srilanka/tax/*, where ours sit
   * under /tax/*. Verified against the live Yoast sitemaps and by fetching
   * each page.
   */
  async redirects() {
    const map: Record<string, string> = {
      // Tax pages — live root-level URLs
      "/corporate-tax": "/tax/corporate-tax",
      "/vat": "/tax/vat",
      "/sscl": "/tax/sscl",
      "/capital-gain-tax": "/tax/capital-gains",
      "/foreign-income-tax": "/tax/foreign-income",
      "/tin-registration": "/tax/tin-registration",
      "/webinar": "/tax/webinar",
      "/whatsapp-ai-chatbot": "/tax/ai-bot",

      // Tax pages — live /srilanka/tax/* URLs
      "/srilanka/tax/apit": "/tax/apit",
      "/srilanka/tax/income-tax": "/tax/income-tax",
      "/srilanka/tax/corporate-tax": "/tax/corporate-tax",
      "/srilanka/tax/vat": "/tax/vat",

      // Live service URLs that moved
      "/srilanka/services/apit-landing-page": "/tax/apit",
      "/srilanka/services/income-tax": "/tax/income-tax",
      "/srilanka/dashboard/business-registration": "/business-registration",
      "/srilanka/dashboard/simplebooks-tax-tool": "/income-tax-filing",

      // Calculators now live under /tools
      "/srilanka/salary-calculator": "/tools/payroll/salary-calculator-sri-lanka",
      "/srilanka/tax-calculator": "/tools/tax-calculators/local-income",

      // The Sri Lanka landing page is this site's home
      "/srilanka": "/",

      // Old addresses that the migrated blog articles still link to. These
      // first ten are where WordPress itself redirects them.
      "/srilanka/advance-personal-income-tax": "/srilanka/apit-tax",
      "/srilanka/contact-us": "/srilanka/contact",
      "/srilanka/file-form-15-in-sri-lanka": "/srilanka/file-form-15-in-sri-lanka-annual-returns",
      "/srilanka/form-13": "/srilanka/form-13-how-to-change-your-registered-office-address",
      "/srilanka/form-20": "/srilanka/form-20-make-changes-to-directors",
      "/srilanka/services/legal": "/srilanka/legal",
      "/srilanka/sole-proprietorships-sinhala": "/srilanka/si/sole-proprietorships-sinhala",
      "/srilanka/terms-and-conditions": "/srilanka/terms-conditions",
      "/srilanka/trademark-registration": "/srilanka/services/trademark-registration",
      "/srilanka/working-capital-loan": "/srilanka/working-capital-loan-sri-lanka",
      // These were already dead on WordPress (404 or a redirect loop), so
      // they go to the closest page this site has rather than a 404.
      "/srilanka/company-registration-requirements": "/srilanka/services/register-a-company",
      "/bookkeeping-pricing": "/srilanka/services/accounting-services",
      "/srilanka/covid-19-business-strategy": "/srilanka/how-to-protect-your-business-from-covid-19-crisis",
      "/srilanka/how-to-close-your-company-a-step-by-step-guide": "/srilanka/close-a-business",
      "/srilanka/how-to-come-up-with-business-ideas-in-sri-lanka-5-great-small-business-ideas": "/srilanka/business-ideas-in-sri-lanka",
      "/srilanka/labour-law-in-sri-lanka-an-easy-guide-to-the-shop-and-office-act": "/srilanka/labour-law-in-sri-lanka",
      "/srilanka/nbt-tax": "/tax/vat",
      "/srilanka/pricing": "/srilanka/services/register-a-company",
    };

    return Object.entries(map).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  async rewrites() {
    return {
      /**
       * The Simplebooks free-tools calculators are a separate Next app that the
       * tools team maintains. It is exported statically (with basePath /tools)
       * and dropped into public/tools, so none of its code lives in this app —
       * see external/free-tools/README-INTEGRATION.md.
       *
       * The export is directory-per-route (tools/wht-calculator/index.html), and
       * serving from public/ matches files by exact path only. These rewrites
       * map a directory URL onto its index.html.
       *
       * afterFiles is what makes this safe: real files are matched first, so
       * /tools/_next/... assets resolve normally and never hit these rules.
       */
      afterFiles: [
        { source: "/tools", destination: "/tools/index.html" },
        { source: "/tools/:path*", destination: "/tools/:path*/index.html" },
      ],
      beforeFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
