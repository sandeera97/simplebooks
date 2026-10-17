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
