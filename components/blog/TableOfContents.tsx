"use client";

import { useEffect, useState } from "react";

export type Heading = { id: string; label: string };

const SELECTOR = ".blog-post-content h2[id]";

/**
 * The "In this article" sidebar.
 *
 * `headings` is passed for the posts migrated from WordPress, where they are
 * known at build time. Everything else falls back to reading them out of the
 * rendered article — which is a race: this sits above the article in the tree,
 * and on a long post the first look can come back empty, leaving the sidebar
 * blank. So a fruitless first scan is retried when the article appears rather
 * than being taken as the final answer.
 */
export default function TableOfContents({ headings: given }: { headings?: Heading[] }) {
  const [scanned, setScanned] = useState<Heading[]>([]);
  const [active, setActive] = useState("");
  const headings = given ?? scanned;

  useEffect(() => {
    if (given) return;

    const scan = () => {
      const found = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
      if (!found.length) return false;
      setScanned(found.map((h) => ({ id: h.id, label: h.textContent ?? "" })));
      return true;
    };

    if (scan()) return;

    const observer = new MutationObserver(() => {
      if (scan()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [given]);

  /* Highlights whichever heading the reader is level with. Re-run when the
     list changes, since the elements are not around until then. */
  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -70% 0px" },
    );
    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  /* A few posts have no sub-headings; an empty box is worse than no box. */
  if (!headings.length) return null;

  return (
    <nav className="blog-toc" aria-label="On this page">
      <p>In this article</p>
      <ol>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={active === heading.id ? "active" : ""}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                history.replaceState(null, "", `#${heading.id}`);
              }}
            >
              {heading.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
