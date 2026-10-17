import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderV2 from "@/components/v2/HeaderV2";
import Reveal from "@/components/v2/Reveal";
import { FooterV2 } from "@/components/v2/Sections";
import BlogLeadForm from "@/components/blog/BlogLeadForm";
import { getArticle, getArticles } from "@/lib/cms";
import "@/app/home-v2.css";
import "@/components/blog/blog-post.css";

export const revalidate = 60;

/** Pre-render what exists at build time; anything newer renders on demand. */
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found — Simplebooks" };

  return {
    title: article.seoTitle || `${article.title} | Simplebooks`,
    description: article.seoDescription || article.excerpt,
    alternates: { canonical: `https://simplebooks.com/srilanka/blog/${article.slug}` },
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: article.image ? [article.image] : undefined,
      type: "article",
    },
  };
}

export default async function CmsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const published = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className="sim_bk_v2">
      <HeaderV2 />
      <main className="blog-page">
        <header className="blog-hero">
          <div className="blog-hero-inner">
            <p className="blog-post-tag">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="blog-byline">
              {article.authorName && <>by {article.authorName}</>}
              {published && (
                <>
                  <span>|</span>
                  {published}
                </>
              )}
              {article.readTime && (
                <>
                  <span>|</span>
                  {article.readTime}
                </>
              )}
            </p>
          </div>
        </header>

        <div className="blog-shell">
          <aside className="blog-left" />

          <article className="blog-post-content">
            {article.image && (
              <Image
                className="blog-feature-image"
                src={article.image}
                alt=""
                width={1440}
                height={810}
                priority
                sizes="(max-width: 820px) calc(100vw - 44px), 720px"
              />
            )}

            <p className="blog-intro">{article.excerpt}</p>

            {/* Strapi's richtext field is Markdown-ish plain text. Rendering it
                as paragraphs keeps it safe — no dangerouslySetInnerHTML — and
                is enough for the posts this CMS is for. */}
            {(article.body ?? "")
              .split(/\n{2,}/)
              .map((block) => block.trim())
              .filter(Boolean)
              .map((block, i) =>
                block.startsWith("## ") ? (
                  <h2 key={i}>{block.replace(/^##\s+/, "")}</h2>
                ) : block.startsWith("### ") ? (
                  <h3 key={i}>{block.replace(/^###\s+/, "")}</h3>
                ) : (
                  <p key={i}>{block}</p>
                )
              )}

            <div className="blog-author">
              <div className="blog-author-avatar">
                {(article.authorName ?? "S").charAt(0)}
              </div>
              <div className="blog-author-details">
                <span>Written by</span>
                <strong>{article.authorName || "Simplebooks"}</strong>
                {article.authorRole && (
                  <div className="blog-author-role">{article.authorRole}</div>
                )}
              </div>
            </div>

            <p className="blog-share">
              <span>More reading</span>
              <Link href="/srilanka/blog">Back to the blog</Link>
            </p>
          </article>

          <div className="blog-right">
            <BlogLeadForm />
          </div>
        </div>
      </main>
      <FooterV2 />
      <Reveal />
    </div>
  );
}
