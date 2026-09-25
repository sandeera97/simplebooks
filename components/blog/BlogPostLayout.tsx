import type { ReactNode } from "react";
import Image from "next/image";
import HeaderV2 from "@/components/v2/HeaderV2";
import Reveal from "@/components/v2/Reveal";
import { FooterV2 } from "@/components/v2/Sections";
import "@/app/home-v2.css";
import BlogLeadForm from "./BlogLeadForm";
import TableOfContents from "./TableOfContents";
import "./blog-post.css";

type BlogPostLayoutProps = {
  title: string;
  author: string;
  authorUrl?: string;
  date: string;
  tag: string;
  canonical: string;
  authorInitials?: string;
  authorImage?: string;
  authorRole?: string;
  authorBio?: string;
  children: ReactNode;
};

export default function BlogPostLayout({
  title,
  author,
  authorUrl,
  date,
  tag,
  canonical,
  authorInitials,
  authorImage,
  authorRole,
  authorBio,
  children,
}: BlogPostLayoutProps) {
  return (
    <div className="sim_bk_v2">
      <HeaderV2 />
      <main className="blog-page">
        <header className="blog-hero">
          <div className="blog-hero-inner">
            <div className="blog-post-tag">{tag}</div>
            <p className="blog-byline">
              by{" "}
              {authorUrl ? <a href={authorUrl}>{author}</a> : <strong>{author}</strong>}
              <span>|</span> {date}
            </p>
            <h1>{title}</h1>
            <div className="blog-language">
              <span>Read in</span>
              <a href={canonical}>English</a>
            </div>
          </div>
        </header>

        <div className="blog-shell">
          <aside className="blog-left">
            <TableOfContents />
          </aside>

          <article className="blog-post-content">
            {children}

            <div className="blog-author">
              <div className="blog-author-avatar">
                {authorImage ? (
                  <Image
                    src={authorImage}
                    alt={author}
                    width={50}
                    height={50}
                    sizes="50px"
                  />
                ) : (
                  authorInitials ?? author.slice(0, 2)
                )}
              </div>
              <div className="blog-author-details">
                <span>Written by</span>
                <strong>{author}</strong>
                {authorRole && <span className="blog-author-role">{authorRole}</span>}
                {authorBio && <p>{authorBio}</p>}
              </div>
            </div>

            <div className="blog-share">
              <span>Share this post</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonical)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonical)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </article>

          <aside className="blog-right">
            <BlogLeadForm />
          </aside>
        </div>
      </main>
      <FooterV2 />
      <Reveal />
    </div>
  );
}
