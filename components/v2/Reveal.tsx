"use client";

import { useEffect } from "react";

/**
 * Adds .is_in to every .v2_reveal as it scrolls into view, with a small
 * stagger between siblings — the redesign's staggered fade-up.
 * Anything already on screen at mount is revealed immediately so the hero
 * never flashes empty.
 */
export default function Reveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".v2_reveal"));
    if (!nodes.length) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach((n) => n.classList.add("is_in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []);
          const i = siblings.indexOf(el);
          el.style.transitionDelay = `${Math.min(i, 6) * 0.06}s`;
          el.classList.add("is_in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight) n.classList.add("is_in");
      else io.observe(n);
    });

    /* An in-page jump ("Get a free consultation" -> #consultation) used to land
       on a blank section that faded in for a second. Reveal the target's
       contents as the jump starts, with no stagger. */
    const showTarget = (hash: string) => {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      const inside = [target, ...Array.from(target.querySelectorAll<HTMLElement>(".v2_reveal"))];
      inside.forEach((n) => {
        if (!n.classList.contains("v2_reveal")) return;
        n.style.transitionDelay = "0s";
        n.classList.add("is_in");
        io.unobserve(n);
      });
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (a?.hash) showTarget(a.hash);
    };
    if (location.hash) showTarget(location.hash);
    document.addEventListener("click", onClick);

    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
