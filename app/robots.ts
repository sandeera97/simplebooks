import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/** Served at /robots.txt. Mirrors the live site: everything crawlable. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
