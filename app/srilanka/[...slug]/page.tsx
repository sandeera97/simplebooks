import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
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
  const canonical = `${SITE_URL}/srilanka/${post.route}/`;
  const description = post.seoDescription || post.excerpt;

  return {
    title: post.seoTitle || `${post.title} | Simplebooks`,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description,
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
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
      date={formatPostDate(post.date)}
      tag={post.category}
      canonical={`${SITE_URL}/srilanka/${post.route}/`}
      headings={post.headings}
    >
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
    </BlogPostLayout>
  );
}
