/**
 * Reads blog posts from Strapi.
 *
 * The two posts that predate the CMS keep their own hand-built pages — they
 * carry a table of contents, FAQ accordions and a video embed that a richtext
 * field cannot express — so they stay where they are and are merged into the
 * archive here. Anything published in Strapi renders through
 * /srilanka/blog/[slug].
 *
 * Every call is wrapped so the blog degrades to those two posts rather than
 * erroring if the CMS is down, still booting, or not yet configured.
 */

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  body?: string;
  image?: string;
  category: string;
  authorName?: string;
  authorRole?: string;
  readTime?: string;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
}

/** A post is either from the CMS or one of the originals, which own their URL. */
export interface ArchivePost {
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  category: string;
}

const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, "") ?? "";

/** How long a page may serve cached CMS content before refetching. */
const REVALIDATE_SECONDS = 60;

function mediaUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  /* Strapi returns a relative path for local uploads and an absolute one once
     an S3-style provider is configured. */
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

type StrapiArticle = {
  title: string;
  slug: string;
  excerpt: string;
  body?: string;
  category: string;
  authorName?: string;
  authorRole?: string;
  readTime?: string;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  cover?: { url?: string } | null;
};

function toArticle(entry: StrapiArticle): Article {
  return {
    title: entry.title,
    slug: entry.slug,
    excerpt: entry.excerpt,
    body: entry.body,
    image: mediaUrl(entry.cover?.url),
    category: entry.category,
    authorName: entry.authorName,
    authorRole: entry.authorRole,
    readTime: entry.readTime,
    publishedAt: entry.publishedAt,
    seoTitle: entry.seoTitle,
    seoDescription: entry.seoDescription,
  };
}

async function cmsFetch<T>(path: string): Promise<T | null> {
  if (!STRAPI_URL) return null;
  try {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
      headers: process.env.STRAPI_TOKEN
        ? { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }
        : undefined,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    /* Never let the CMS take the blog down with it. */
    return null;
  }
}

export async function getArticles(): Promise<Article[]> {
  const json = await cmsFetch<{ data: StrapiArticle[] }>(
    "/articles?populate=cover&sort=publishedAt:desc&pagination[pageSize]=100"
  );
  return json?.data?.map(toArticle) ?? [];
}

export async function getArticle(slug: string): Promise<Article | null> {
  const json = await cmsFetch<{ data: StrapiArticle[] }>(
    `/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=cover`
  );
  const entry = json?.data?.[0];
  return entry ? toArticle(entry) : null;
}

export function articleToArchivePost(a: Article): ArchivePost {
  return {
    title: a.title,
    excerpt: a.excerpt,
    href: `/srilanka/blog/${a.slug}`,
    image: a.image,
    category: a.category,
  };
}
