"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; label: string };

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".blog-post-content h2[id]"),
    );
    const frame = requestAnimationFrame(() => {
      setHeadings(
        elements.map((heading) => ({
          id: heading.id,
          label: heading.textContent ?? "",
        })),
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -70% 0px" },
    );
    elements.forEach((heading) => observer.observe(heading));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

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
