import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import BlogFaq from "@/components/blog/BlogFaq";
import { getPost, getPostIndex, formatPostDate } from "@/lib/blogPosts";
import { SITE_URL } from "@/lib/seo";

/**
 * The blog posts brought across from the live WordPress site.
 *
 * A catch-all because seven of them are Sinhala translations nested a level
 * deeper (/srilanka/si/epf-etf-sinhala). Next matches static segments before
 * dynamic ones, so /srilanka/contact and the rest are untouched by this.
 *
 * dynamicParams: false means a path that is not a migrated post 404s instead of
 * being rendered on demand — without it this route would answer for every
 * unknown URL under /srilanka/.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostIndex().map((post) => ({ slug: post.route.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug.join("/"));
  if (!post) return { title: "Article not found — Simplebooks" };

  /* These URLs are the ones Google has indexed, so they stay exactly as the
     live site has them, trailing slash included. */
  const seo = post.seo;
  const canonical = seo?.canonical ?? `${SITE_URL}/srilanka/${post.route}/`;
  const description = seo ? post.seoDescription || null : post.seoDescription || post.excerpt;

  return {
    title: post.seoTitle || `${post.title} | Simplebooks`,
    description,
    alternates: { canonical },
    ...(seo && {
      authors: [{ name: post.author }],
      robots: Object.values(seo.robots).join(", "),
      other: seo.twitter_misc && Object.fromEntries(
        Object.entries(seo.twitter_misc).flatMap(([label, value], index) => [
          [`twitter:label${index + 1}`, label],
          [`twitter:data${index + 1}`, value],
        ])
      ),
    }),
    openGraph: {
      type: "article",
      url: seo?.og_url ?? canonical,
      title: seo?.og_title ?? post.title,
      description: seo?.og_description ?? description ?? undefined,
      locale: seo?.og_locale,
      siteName: seo?.og_site_name,
      publishedTime: seo?.article_published_time ?? post.date,
      modifiedTime: seo?.article_modified_time ?? post.modified,
      authors: seo ? undefined : [post.author],
      images: seo?.og_image ?? (post.image ? [post.image] : undefined),
    },
    twitter: seo ? { card: "summary_large_image" } : {
      card: "summary_large_image",
      title: post.title,
      description: description ?? undefined,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function MigratedBlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = slug.join("/");
  const post = getPost(route);
  if (!post) notFound();

  return (
    <BlogPostLayout
      title={post.title}
      author={post.author}
      authorImage={post.authorImage}
      date={formatPostDate(post.date)}
      tag={post.categories?.[0]?.name ?? post.category}
      canonical={post.seo?.canonical ?? `${SITE_URL}/srilanka/${post.route}/`}
      headings={post.headings}
    >
      {post.seo?.article_publisher && (
        <meta property="article:publisher" content={post.seo.article_publisher} />
      )}
      {post.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {post.image && (
        /* The hero image is the largest paint on the page, so it is eager and
           prioritised rather than lazy like the images inside the body. */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="blog-feature-image"
          src={post.image}
          alt={post.title}
          fetchPriority="high"
          decoding="async"
        />
      )}
      {/* Our own editorial content, exported from our own CMS — not anything a
          visitor can supply. */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {post.faq && <BlogFaq items={post.faq} />}
    </BlogPostLayout>
  );
}
