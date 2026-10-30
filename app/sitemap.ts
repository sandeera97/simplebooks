import type { MetadataRoute } from "next";
import { PAGE_SEO, SITE_URL } from "@/lib/seo";
import { getArticles } from "@/lib/cms";
import { LEGACY_POSTS } from "@/app/srilanka/blog/posts";
import { getPostIndex } from "@/lib/blogPosts";

/** Served at /sitemap.xml. The live site has one; we had none. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const priorityFor = (route: string) => {
    if (route === "/") return 1;
    if (route.startsWith("/srilanka/services") || route.startsWith("/tax/")) return 0.8;
    if (route.startsWith("/srilanka/dashboard") || route === "/business-registration") return 0.8;
    if (/terms-conditions|thank-you|payment-complete/.test(route)) return 0.3;
    return 0.6;
  };

  const pages: MetadataRoute.Sitemap = Object.keys(PAGE_SEO).map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priorityFor(route),
  }));

  /* The two originals own their own URLs; CMS posts live under /blog/. */
  const legacy: MetadataRoute.Sitemap = LEGACY_POSTS.map((p) => ({
    url: `${SITE_URL}${p.href}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  /* Wrapped in lib/cms.ts, so a CMS outage yields an empty list rather than
     breaking the sitemap. */
  const articles = await getArticles();
  const fromCms: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/srilanka/blog/${a.slug}`,
    lastModified: a.publishedAt ? new Date(a.publishedAt) : undefined,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  /* The 93 posts migrated from WordPress, at the URLs the live site uses —
     these carry the bulk of the site's organic traffic. */
  const migrated: MetadataRoute.Sitemap = getPostIndex().map((post) => ({
    url: `${SITE_URL}/srilanka/${post.route}`,
    lastModified: new Date(post.modified),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...pages, ...legacy, ...migrated, ...fromCms];
}
