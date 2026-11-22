import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import type { BlogFaqItem } from "@/components/blog/BlogFaq";

/**
 * The blog posts migrated across from the live WordPress site.
 *
 * They are read off disk rather than imported, so the bodies — about 1.5MB of
 * HTML across 93 posts — never reach a JavaScript bundle. Every page that uses
 * them is statically generated, so this all happens at build time.
 *
 * Written by scripts/migrate-blog.mjs; re-run it to pick up newly published
 * posts until the Strapi CMS takes over.
 */

export interface PostSummary {
  /** Path under /srilanka/, e.g. "vat-registration-guide" or "si/epf-etf-sinhala". */
  route: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified: string;
  author: string;
  category: string;
  image: string | null;
}

export interface MigratedPost extends PostSummary {
  authorImage?: string;
  seoTitle: string;
  seoDescription: string;
  categories?: { id: number; name: string; slug: string }[];
  tags?: { id: number; name: string; slug: string }[];
  seo?: {
    canonical: string;
    robots: Record<string, string>;
    og_locale: string;
    og_title: string;
    og_description?: string;
    og_url: string;
    og_site_name: string;
    og_image?: { url: string; width: number; height: number; type: string }[];
    article_publisher?: string;
    article_published_time: string;
    article_modified_time: string;
    twitter_misc?: Record<string, string>;
  };
  schema?: Record<string, unknown>;
  faq?: BlogFaqItem[];
  /** The post's h2s, for the contents sidebar. */
  headings: { id: string; label: string }[];
  html: string;
}

const CONTENT = path.join(process.cwd(), "content", "blog");

/** A route is one file on disk, so "si/x" is stored as "si__x.json". */
const fileFor = (route: string) => `${route.replace(/\//g, "__")}.json`;

function read<T>(file: string): T | null {
  const full = path.join(CONTENT, file);
  if (!existsSync(full)) return null;
  try {
    return JSON.parse(readFileSync(full, "utf8")) as T;
  } catch {
    return null;
  }
}

/**
 * Every post, newest first, without bodies.
 *
 * Cached for the process: the archive and the sitemap both want the whole list,
 * and during a build so does every one of the 93 pages.
 */
let cachedIndex: PostSummary[] | null = null;

export function getPostIndex(): PostSummary[] {
  if (!cachedIndex) cachedIndex = read<PostSummary[]>("index.json") ?? [];
  return cachedIndex;
}

export function getPost(route: string): MigratedPost | null {
  const post = read<MigratedPost>(path.join("posts", fileFor(route)));
  if (!post) return null;

  // The imported markup can contain links and emphasis inside answers.
  // Keep those and the original anchors when turning each block into an accordion.
  const faqItem = /<div class="schema-faq-section" id="([^"]+)"><strong class="schema-faq-question">([\s\S]*?)<\/strong>\s*(<p class="schema-faq-answer">[\s\S]*?<\/p>)\s*<\/div>/g;
  let group = 0;
  const html = post.html.replace(
    /<div class="schema-faq wp-block-yoast-faq-block">([\s\S]*?<\/p>\s*<\/div>)\s*<\/div>/g,
    (block, items: string) => {
      if (items.replace(faqItem, "").trim()) return block;
      const name = `imported-blog-faq-${++group}`;
      let first = true;
      const sections = items.replace(faqItem, (_, id, question, answer) => {
        const open = first ? " open" : "";
        first = false;
        return `<details id="${id}" name="${name}"${open}><summary><span>${question}</span><span class="blog-faq-icon" aria-hidden="true"></span></summary><div class="blog-faq-answer">${answer}</div></details>`;
      });
      return `<div class="blog-faq">${sections}</div>`;
    }
  );
  return { ...post, html };
}

/** "2025-01-16T23:23:00" -> "Jan 16, 2025", matching the hand-built posts. */
export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
