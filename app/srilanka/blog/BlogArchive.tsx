"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { CATEGORIES as categories, LEGACY_POSTS, type ArchivePost } from "./posts";



export default function BlogArchive({ posts = LEGACY_POSTS as readonly ArchivePost[] }: { posts?: readonly ArchivePost[] }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    "All Categories",
  );
  const [query, setQuery] = useState("");

  const visiblePosts = useMemo(() => {
    const search = query.trim().toLowerCase();
    return posts.filter((post) => {
      const categoryMatches =
        activeCategory === "All Categories" || post.category === activeCategory;
      const searchMatches =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search);
      return categoryMatches && searchMatches;
    });
  }, [activeCategory, query]);

  return (
    <>
      <section className="blog-index-hero">
        <div className="blog-index-container">
          <h1>Knowledge center</h1>
          <p>
            Find an array of resources to help you find the perfect solution to all
            your problems. Or, better yet, search for it and start learning today!
          </p>
          <label className="blog-index-search">
            <span className="blog-index-sr-only">Search articles</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m16.2 16.2 4 4" />
            </svg>
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
      </section>

      <main className="blog-index-main">
        <div className="blog-index-container">
          <div className="blog-index-filters" aria-label="Filter articles by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {visiblePosts.length ? (
            <div className="blog-index-grid">
              {visiblePosts.map((post) => (
                <article className="blog-index-card" key={post.href}>
                  <Link href={post.href} className="blog-index-image" tabIndex={-1}>
                    {/* A CMS post may have no cover yet; the tinted block keeps
                        the card's shape rather than leaving a broken image. */}
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt=""
                        width={1024}
                        height={538}
                        sizes="(max-width: 620px) calc(100vw - 32px), (max-width: 900px) 50vw, 397px"
                      />
                    ) : (
                      <span className="blog-index-image_empty" aria-hidden="true" />
                    )}
                  </Link>
                  <div className="blog-index-card-body">
                    <h2>
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    <p>{post.excerpt}</p>
                    <Link href={post.href} className="blog-index-read-more">
                      Read More <span aria-hidden="true">›</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="blog-index-empty">No articles match your search.</p>
          )}
        </div>
      </main>
    </>
  );
}
