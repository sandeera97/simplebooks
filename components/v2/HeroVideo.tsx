"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's looping service animation.
 *
 * Muted and silent by design — the file carries no audio track at all — so it
 * loops without ever needing a control. It is decorative: the headline beside
 * it already says what the business does, so the video is aria-hidden rather
 * than described twice to a screen reader.
 *
 * A 45s loop is a lot of movement to put in front of someone who has asked
 * their system for less of it, so under prefers-reduced-motion it holds on the
 * poster frame instead of playing.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        el.pause();
        el.removeAttribute("autoplay");
      } else if (el.paused) {
        /* Autoplay can still be refused (low power mode, data saver). The
           poster stays up in that case, which is a fine outcome. */
        void el.play().catch(() => {});
      }
    };

    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      className="v2_hero_video"
      src="/video/hero.mp4"
      poster="/images/v2/hero-video-poster.jpg"
      width={1080}
      height={1080}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
