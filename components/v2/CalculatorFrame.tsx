"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "./calculators.css";

/* Each calculator app's back arrow is a plain link to the tools team's hub,
   https://calculators.simplebooks.com. Inside this frame, that loads their
   hub in here, and their hub, finding itself framed, posts
   { type: "simplebooks:homepage-loaded" } to the page around it. Their own
   hub answers by going to its home page; this site goes to its own list of
   calculators instead, so the visitor stays here. */
const HUB_ORIGINS = new Set(["https://calculators.simplebooks.com", "https://simplebooks-calculators.lovable.app"]);

export default function CalculatorFrame({ src, title }: { src: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      if (!HUB_ORIGINS.has(e.origin)) return;
      if ((e.data as { type?: unknown } | null)?.type !== "simplebooks:homepage-loaded") return;
      /* replace, not push: the frame's own navigation already added a history
         entry, and Back should return to the calculator, not to their hub. */
      router.replace("/calculators");
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

  return (
    <iframe
      ref={frame}
      className="v2_calc_frame"
      src={src}
      title={title}
      allow="clipboard-write; fullscreen"
    />
  );
}
