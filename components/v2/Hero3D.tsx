"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { HERO_CHAPTERS, HERO_FINALE, chapterAt, type HeroIcon } from "./heroChapters";
import { NAVY, ORANGE, TAU, ring, serratedRim, textRing, weave } from "@/lib/guilloche";

/**
 * The homepage hero's 3D scene.
 *
 * A glass app window floats over an engraved seal lying on the floor, with
 * the explainer video playing on its screen and the four services hanging in
 * the space around it at different depths. As the video moves through each
 * chapter, that service's card comes forward and its line of the headline
 * lights up — so the hero says what Simplebooks does whether you read it,
 * watch it, or just glance at it.
 *
 * Built in CSS 3D rather than WebGL. A 3D library would cost 150KB+ above the
 * fold, and every label here is real text: it stays crisp at any angle and
 * remains readable to search engines and screen readers. The browser does the
 * perspective on the GPU; the script only eases the scene's rotation, keeps
 * the page in step with the video, and draws the floor seal once.
 */

/* The drifting sheets: the paperwork the service takes off your hands. */
const PAPERS = [
  { label: "FORM 1", x: -250, z: -120, dx: 40, dur: 15, delay: 0, r0: -14, r1: 22 },
  { label: "TIN", x: 255, z: 60, dx: -30, dur: 17, delay: -6, r0: 10, r1: -18 },
  { label: "VAT", x: -150, z: 170, dx: 25, dur: 19, delay: -11, r0: 6, r1: 30 },
  { label: "EPF", x: 140, z: -210, dx: -35, dur: 16, delay: -3, r0: -8, r1: -26 },
  { label: "FORM 15", x: 300, z: -80, dx: 20, dur: 21, delay: -14, r0: 12, r1: -10 },
  { label: "ARTICLES", x: -310, z: 40, dx: -20, dur: 18, delay: -8, r0: -18, r1: 14 },
  { label: "PAYSLIP", x: 40, z: 230, dx: 30, dur: 20, delay: -17, r0: 4, r1: 24 },
];

/* Where each service card hangs, around the window. The two on the right sit
   in front of its plane and the two on the left behind it, so turning the
   scene shows the depth between them — and the cards nearest the viewer, which
   perspective draws largest, are the ones furthest from the headline.

   `pop` is how far a card comes forward while its chapter plays. The window is
   turned 17°, which swings its left edge ~50px towards the viewer, so a card on
   the left has to travel further to clear it than one on the right. */
const CARD_POS = [
  { x: -248, y: -176, z: -10, pop: 125 },
  { x: 238, y: -198, z: 100, pop: 70 },
  { x: -258, y: 112, z: -40, pop: 135 },
  { x: 226, y: 150, z: 130, pop: 60 },
];

function CardIcon({ name }: { name: HeroIcon }) {
  const p = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "building":
      return (
        <svg {...p}>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-5h6v5M9 10h.01M15 10h.01M3 21h18" />
        </svg>
      );
    case "chart":
      return (
        <svg {...p}>
          <path d="M4 20V4M4 20h16" />
          <path d="M8 16v-4M12 16V8M16 16v-6" />
        </svg>
      );
    case "scale":
      return (
        <svg {...p}>
          <path d="M12 4v16M7 20h10M5 8h14" />
          <path d="M5 8l-2.5 6a2.5 2.5 0 0 0 5 0zM19 8l-2.5 6a2.5 2.5 0 0 0 5 0z" />
        </svg>
      );
    case "people":
      return (
        <svg {...p}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20a6 6 0 0 1 12 0M16 4.5a3 3 0 0 1 0 6M18 20a5 5 0 0 0-2.5-4.3" />
        </svg>
      );
  }
}

/** The seal that lies on the floor of the scene. Drawn once. */
function drawFloorSeal(canvas: HTMLCanvasElement, font: string) {
  const size = canvas.clientWidth || 660;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(size * dpr);
  canvas.height = Math.round(size * dpr);
  const g = canvas.getContext("2d");
  if (!g) return;
  g.scale(dpr, dpr);
  g.translate(size / 2, size / 2);
  g.lineCap = "round";
  g.lineJoin = "round";
  const R = size / 2 - 6;

  g.strokeStyle = `rgba(${NAVY},0.34)`;
  g.lineWidth = 1;
  serratedRim(g, R, 120, R * 0.012);
  g.strokeStyle = `rgba(${NAVY},0.2)`;
  g.lineWidth = 0.8;
  weave(g, R * 0.92, R * 0.05, 30, 6, [1, -1]);
  ring(g, R * 0.86, 0.3, 0.9);
  ring(g, R * 0.845, 0.3, 0.9);
  g.strokeStyle = `rgba(${ORANGE},0.42)`;
  g.lineWidth = 0.9;
  weave(g, R * 0.74, R * 0.075, 18, 5, [1, -1]);
  ring(g, R * 0.655, 0.28, 0.8, ORANGE);
  g.fillStyle = `rgba(${NAVY},0.28)`;
  for (let i = 0; i < 72; i++) {
    const th = (i / 72) * TAU;
    g.beginPath();
    g.arc(R * 0.62 * Math.cos(th), R * 0.62 * Math.sin(th), R * 0.008, 0, TAU);
    g.fill();
  }
  g.strokeStyle = `rgba(${NAVY},0.2)`;
  g.lineWidth = 0.8;
  weave(g, R * 0.5, R * 0.06, 16, 7, [1, -1]);
  ring(g, R * 0.42, 0.3, 1);
  g.font = `800 ${Math.max(9, R * 0.034)}px ${font}`;
  g.fillStyle = `rgba(${NAVY},0.34)`;
  textRing(g, "SIMPLEBOOKS · ONE TEAM, ONE PLATFORM · SINCE 2016 · ", R * 0.37);
}

const POSTER = "/images/v2/hero-video-poster.jpg";

export default function Hero3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sealRef = useRef<HTMLCanvasElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const barRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const scene = sceneRef.current;
    const video = videoRef.current;
    if (!stage || !scene || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)").matches;
    const hero = stage.closest("section") ?? stage;
    const h1 = hero.querySelector<HTMLElement>("[data-hero-lines]");
    const lines = Array.from(hero.querySelectorAll<HTMLElement>("[data-hero-line]"));

    /* ---------- keeping the page in step with the video ---------- */

    let current = -1;
    const show = (index: number) => {
      if (index === current) return;
      current = index;
      const finale = index >= HERO_CHAPTERS.length;
      h1?.classList.toggle("is_all", finale);
      lines.forEach((line, i) => line.classList.toggle("is_on", finale || i === index));
      cardRefs.current.forEach((card, i) => {
        card?.classList.toggle("is_active", i === index);
        card?.classList.toggle("is_done", finale || i < index);
      });
      tabRefs.current.forEach((tab, i) => {
        tab?.classList.toggle("is_active", i === index);
        tab?.classList.toggle("is_done", finale || i < index);
        tab?.setAttribute("aria-pressed", String(i === index));
      });
    };

    const progress = () => {
      const t = video.currentTime;
      const index = chapterAt(t);
      show(index);
      if (index < HERO_CHAPTERS.length) {
        const start = HERO_CHAPTERS[index].start;
        const end = HERO_CHAPTERS[index + 1]?.start ?? HERO_FINALE;
        const bar = barRefs.current[index];
        if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, (t - start) / (end - start)))})`;
      }
      barRefs.current.forEach((bar, i) => {
        if (bar && i !== index) bar.style.transform = `scaleX(${i < index ? 1 : 0})`;
      });
    };

    /* The server renders every line of the headline at full strength, so it
       reads as a complete list with no script. Dimming the rest only starts
       once the video can drive which one is lit. */
    if (!reduced.matches) h1?.classList.add("is_synced");
    progress();

    /* ---------- the scene's turn: pointer, or a slow sway ---------- */

    let rx = 0;
    let ry = 0;
    let aimX = 0;
    let aimY = 0;
    let pointerActive = false;
    let clock = 0;

    const onPointer = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      pointerActive = true;
      aimX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      aimY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      pointerActive = false;
    };

    let raf = 0;
    let last = 0;
    const frame = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      clock += dt;
      const still = reduced.matches;
      /* Following the pointer turns the scene up to ~14°; left alone it sways
         a few degrees on its own, so it still reads as 3D on a phone. */
      const targetY = still ? 0 : pointerActive ? aimX * 14 : Math.sin(clock * 0.32) * 7;
      const targetX = still ? 0 : pointerActive ? -aimY * 7 : Math.sin(clock * 0.23) * 2.5;
      ry += (targetY - ry) * Math.min(1, dt * 3.2);
      rx += (targetX - rx) * Math.min(1, dt * 3.2);
      scene.style.transform = `rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg)`;
      progress();
      raf = requestAnimationFrame(frame);
    };
    const run = () => {
      if (raf) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    /* ---------- the video ---------- */

    const play = () => {
      if (reduced.matches) return;
      /* Autoplay can still be refused (low power mode, data saver). The poster
         stays up then, and the page keeps showing the first chapter. */
      void video.play().catch(() => {});
    };
    const applyMotion = () => {
      if (reduced.matches) {
        video.pause();
        video.removeAttribute("autoplay");
        scene.style.transform = "";
        h1?.classList.remove("is_synced");
      } else {
        h1?.classList.add("is_synced");
        play();
      }
    };
    applyMotion();
    reduced.addEventListener("change", applyMotion);

    /* Nothing runs, and the video does not decode, while the hero is off screen. */
    let onScreen = true;
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) {
        run();
        play();
      } else {
        stop();
        video.pause();
      }
    });
    io.observe(hero);

    const onVisibility = () => {
      if (document.hidden) {
        stop();
        video.pause();
      } else if (onScreen) {
        run();
        play();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (fine) {
      hero.addEventListener("pointermove", onPointer);
      hero.addEventListener("pointerleave", onLeave);
    }
    video.addEventListener("seeked", progress);

    /* The video stays transparent over the poster until it is showing real
       frames. Paused at zero it would show its opening frame, which is nearly
       blank; the poster is the payoff of the first chapter. So the poster stays
       up until playback starts — or, with motion reduced, until a tab is used
       to jump to a chapter. */
    const reveal = () => video.classList.add("is_live");
    video.addEventListener("playing", reveal);
    video.addEventListener("seeked", reveal);

    /* ---------- the floor seal: drawn once, off the load path ---------- */

    let cancelled = false;
    const drawSeal = async () => {
      if (document.readyState !== "complete") {
        await new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));
      }
      try {
        await document.fonts?.ready;
      } catch {
        /* Draw with whatever is available. */
      }
      await new Promise<void>((resolve) => {
        if (typeof window.requestIdleCallback === "function") {
          window.requestIdleCallback(() => resolve(), { timeout: 900 });
        } else {
          setTimeout(resolve, 1);
        }
      });
      const canvas = sealRef.current;
      if (cancelled || !canvas) return;
      drawFloorSeal(canvas, getComputedStyle(stage).fontFamily || "sans-serif");
      canvas.classList.add("is_drawn");
    };
    void drawSeal();

    return () => {
      cancelled = true;
      stop();
      io.disconnect();
      reduced.removeEventListener("change", applyMotion);
      document.removeEventListener("visibilitychange", onVisibility);
      hero.removeEventListener("pointermove", onPointer);
      hero.removeEventListener("pointerleave", onLeave);
      video.removeEventListener("seeked", progress);
      video.removeEventListener("playing", reveal);
      video.removeEventListener("seeked", reveal);
    };
  }, []);

  const jump = (i: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = HERO_CHAPTERS[i].seek;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) void video.play().catch(() => {});
  };

  return (
    <div className="h3d_wrap">
      <div className="h3d" ref={stageRef}>
        <div className="h3d_rig">
        <div className="h3d_scene" ref={sceneRef}>
          <div className="h3d_floor" aria-hidden="true">
            <canvas className="h3d_seal" ref={sealRef} />
            <span className="h3d_floor_glow" />
          </div>

          {PAPERS.map((p) => (
            <span
              key={p.label}
              className="h3d_paper"
              aria-hidden="true"
              style={
                {
                  "--x": `${p.x}px`,
                  "--z": `${p.z}px`,
                  "--dx": `${p.dx}px`,
                  "--r0": `${p.r0}deg`,
                  "--r1": `${p.r1}deg`,
                  animationDuration: `${p.dur}s`,
                  animationDelay: `${p.delay}s`,
                } as React.CSSProperties
              }
            >
              <b>{p.label}</b>
              <i />
              <i />
              <i />
            </span>
          ))}

          <div className="h3d_device">
            <div className="h3d_device_float">
              <div className="h3d_window">
                <div className="h3d_bar" aria-hidden="true">
                  <span className="h3d_dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="h3d_url">dashboard.simplebooks.com</span>
                </div>
                <div className="h3d_screen">
                  {/* The poster as a real image, under the video, rather than the
                      video's poster attribute. On desktop it is the page's
                      largest paint — bigger in perspective than the headline —
                      and a poster attribute is fetched late and at low priority.
                      An <img> is found by the preload scanner in the first bytes
                      of HTML, and next/image serves it resized. */}
                  <Image
                    className="h3d_poster"
                    src={POSTER}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 220px, 360px"
                    fetchPriority="high"
                    loading="eager"
                  />
                  <video
                    ref={videoRef}
                    className="h3d_video"
                    src="/video/hero.mp4"
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
                </div>
              </div>
              <i className="h3d_edge h3d_edge_t" />
              <i className="h3d_edge h3d_edge_r" />
              <i className="h3d_edge h3d_edge_b" />
              <i className="h3d_edge h3d_edge_l" />
            </div>
          </div>

          {HERO_CHAPTERS.map((c, i) => (
            <div
              key={c.tab}
              className={`h3d_card${i === 0 ? " is_active" : ""}`}
              aria-hidden="true"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={
                {
                  "--x": `${CARD_POS[i].x}px`,
                  "--y": `${CARD_POS[i].y}px`,
                  "--z": `${CARD_POS[i].z}px`,
                  "--pop": `${CARD_POS[i].pop}px`,
                  "--i": i,
                } as React.CSSProperties
              }
            >
              <div className="h3d_card_in">
                <div className="h3d_card_body">
                  <span className="h3d_card_icon">
                    <CardIcon name={c.card.icon} />
                  </span>
                  <span className="h3d_card_text">
                    <span className="h3d_card_title">{c.card.title}</span>
                    <span className="h3d_card_meta">{c.card.meta}</span>
                  </span>
                  <span className="h3d_card_check">
                    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                      <path
                        d="M3.5 8.5l3 3 6-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="h3d_chip" aria-hidden="true">
            <span className="h3d_chip_dot" />
            14 companies registered this week
            <span className="h3d_chip_sub">5–6 week turnaround</span>
          </div>
        </div>
        </div>
      </div>

      {/* Flat and outside the 3D scene, so they hold still under the pointer. */}
      <div className="h3d_tabs" role="group" aria-label="Watch a service">
        {HERO_CHAPTERS.map((c, i) => (
          <button
            key={c.tab}
            type="button"
            className={`h3d_tab${i === 0 ? " is_active" : ""}`}
            aria-pressed={i === 0}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => jump(i)}
          >
            <span className="h3d_tab_n">0{i + 1}</span>
            <span className="h3d_tab_label">{c.tab}</span>
            <i className="h3d_tab_bar">
              <b
                ref={(el) => {
                  barRefs.current[i] = el;
                }}
              />
            </i>
          </button>
        ))}
      </div>
    </div>
  );
}
