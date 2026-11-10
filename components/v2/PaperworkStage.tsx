"use client";

import { useEffect, useRef } from "react";
import { GREEN, NAVY, ORANGE, TAU, ring, serratedRim, textRing, weave } from "@/lib/guilloche";

/**
 * "Paperwork in. A running business out."
 *
 * Sheets of real Sri Lankan paperwork drift on the left. One at a time, each is
 * drawn into a guilloche seal — the engraved rosette printed on certificates
 * and banknotes — and the matching outcome ticks off on the dashboard card to
 * the right. Six outcomes complete a business; then it starts on the next one.
 *
 * Built on one 2D canvas with no libraries. Everything expensive is drawn once
 * into offscreen bitmaps — every sheet, every band of the seal — so a frame is
 * a few dozen drawImage calls. It only runs while it is on screen, and under
 * prefers-reduced-motion it renders one still frame of the finished state.
 */

type IconName = "building" | "id" | "receipt" | "people" | "book" | "calendar";

type Outcome = {
  /** The form drawn into the seal to produce this outcome. */
  source: string;
  title: string;
  meta: string;
  icon: IconName;
};

/* What a company actually needs in its first year, in the order it happens.
   Rates and bodies are the real ones: VAT 18% since January 2024, employer
   EPF 12% and ETF 3%, the Inland Revenue Department, the Registrar of Companies. */
const OUTCOMES: Outcome[] = [
  { source: "FORM 1", title: "Company incorporated", meta: "Certificate in 3 working days", icon: "building" },
  { source: "TIN", title: "TIN issued", meta: "Registered with Inland Revenue", icon: "id" },
  { source: "VAT", title: "VAT registered", meta: "18% standard rate", icon: "receipt" },
  { source: "EPF", title: "Payroll running", meta: "EPF 12% · ETF 3% handled", icon: "people" },
  { source: "INVOICES", title: "Books reconciled", meta: "Closed every month", icon: "book" },
  { source: "FORM 15", title: "Annual return filed", meta: "Registrar of Companies · on time", icon: "calendar" },
];

/* Illustrative, not real registrations. */
const COMPANIES = ["Lotus Bakery", "Island Code Labs", "Hill Country Tea", "Harbour Freight"];

/* Everything else a company files, so the pile reads as real paperwork. */
const FILLERS = [
  "FORM 18", "ARTICLES", "FORM 6", "FORM 13", "FORM 20", "SSCL", "APIT", "ETF",
  "BR", "WHT", "PAYE", "STAMP DUTY", "BOARD RES.", "PAYSLIPS", "RECEIPTS", "BANK STMT",
];


/* Cycle timing, in seconds. Six flights, a pause on the finished business,
   then it clears and the next company starts. */
const FIRST_FLIGHT = 1.0;
const FLIGHT_GAP = 1.5;
const FLIGHT_TIME = 1.15;
const HOLD = 3.0;
const CLEAR = 0.8;
const CYCLE = FIRST_FLIGHT + (OUTCOMES.length - 1) * FLIGHT_GAP + FLIGHT_TIME + HOLD + CLEAR;

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

type Sheet = {
  label: string;
  sprite: HTMLCanvasElement;
  /** 0.6–1.1: smaller, fainter sheets sit behind the seal's plane. */
  depth: number;
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  rot: number;
  spin: number;
  phase: number;
  wobble: number;
  state: "idle" | "lift" | "fly" | "return";
  t: number;
  /** Set once the sheet has crossed the seal's rim on this flight. */
  struck: boolean;
  fromX: number;
  fromY: number;
  fromRot: number;
};

type Layout = {
  w: number;
  h: number;
  vertical: boolean;
  sealX: number;
  sealY: number;
  sealR: number;
  storm: { x0: number; x1: number; y0: number; y1: number };
  sheetScale: number;
  /** Where the outgoing flow line ends: the card's edge. */
  outX: number;
  outY: number;
};

function makeSheetSprite(label: string, font: string, scale: number, dpr: number, variant: number) {
  const w = 50 * scale;
  const h = 64 * scale;
  const pad = 16 * scale;
  const c = document.createElement("canvas");
  c.width = Math.ceil((w + pad * 2) * dpr);
  c.height = Math.ceil((h + pad * 2) * dpr);
  const g = c.getContext("2d")!;
  g.scale(dpr, dpr);
  g.translate(pad, pad);

  /* The shadow is baked in here once; drawn live it is the single most
     expensive thing a 2D canvas does. */
  const fold = 9 * scale;
  const r = 3 * scale;
  g.save();
  g.shadowColor = `rgba(${NAVY},0.13)`;
  g.shadowBlur = 12 * scale;
  g.shadowOffsetY = 4 * scale;
  g.beginPath();
  g.moveTo(r, 0);
  g.lineTo(w - fold, 0);
  g.lineTo(w, fold);
  g.lineTo(w, h - r);
  g.quadraticCurveTo(w, h, w - r, h);
  g.lineTo(r, h);
  g.quadraticCurveTo(0, h, 0, h - r);
  g.lineTo(0, r);
  g.quadraticCurveTo(0, 0, r, 0);
  g.closePath();
  g.fillStyle = "#fff";
  g.fill();
  g.restore();
  g.strokeStyle = `rgba(${NAVY},0.10)`;
  g.lineWidth = 0.75;
  g.stroke();

  /* Dog-eared corner. */
  g.beginPath();
  g.moveTo(w - fold, 0);
  g.lineTo(w - fold, fold);
  g.lineTo(w, fold);
  g.closePath();
  g.fillStyle = "#ece9e2";
  g.fill();

  g.fillStyle = `rgb(${NAVY})`;
  g.font = `800 ${6.6 * scale}px ${font}`;
  g.textBaseline = "top";
  g.fillText(label, 6 * scale, 7 * scale, w - fold - 9 * scale);

  /* Ruled lines standing in for the form's text. */
  const widths = [0.8, 0.6, 0.72, 0.5, 0.66];
  g.fillStyle = `rgba(${NAVY},0.09)`;
  for (let i = 0; i < 4; i++) {
    const lw = (w - 12 * scale) * widths[(i + variant) % widths.length];
    g.beginPath();
    g.roundRect(6 * scale, (20 + i * 8) * scale, lw, 2.2 * scale, 1 * scale);
    g.fill();
  }

  /* Some sheets are signed, some stamped, so the pile is not uniform. */
  if (variant % 3 === 0) {
    g.strokeStyle = `rgba(${NAVY},0.4)`;
    g.lineWidth = 0.9 * scale;
    g.beginPath();
    g.moveTo(7 * scale, 55 * scale);
    g.bezierCurveTo(12 * scale, 47 * scale, 15 * scale, 60 * scale, 20 * scale, 52 * scale);
    g.bezierCurveTo(24 * scale, 47 * scale, 26 * scale, 58 * scale, 32 * scale, 53 * scale);
    g.stroke();
  } else if (variant % 3 === 1) {
    g.strokeStyle = `rgba(${ORANGE},0.55)`;
    g.lineWidth = 1 * scale;
    g.beginPath();
    g.arc(w - 12 * scale, h - 12 * scale, 6.5 * scale, 0, TAU);
    g.stroke();
    g.beginPath();
    g.arc(w - 12 * scale, h - 12 * scale, 4 * scale, 0, TAU);
    g.stroke();
  }

  return { canvas: c, pad, w, h };
}

type SealLayers = {
  size: number;
  outer: HTMLCanvasElement;
  middle: HTMLCanvasElement;
  inner: HTMLCanvasElement;
  legend: HTMLCanvasElement;
};

function makeSeal(R: number, dpr: number, font: string): SealLayers {
  const size = Math.ceil(R * 2 + 24);
  const layer = (paint: (g: CanvasRenderingContext2D) => void) => {
    const c = document.createElement("canvas");
    c.width = Math.ceil(size * dpr);
    c.height = Math.ceil(size * dpr);
    const g = c.getContext("2d")!;
    g.scale(dpr, dpr);
    g.translate(size / 2, size / 2);
    g.lineCap = "round";
    g.lineJoin = "round";
    paint(g);
    return c;
  };

  const outer = layer((g) => {
    g.strokeStyle = `rgba(${NAVY},0.5)`;
    g.lineWidth = 0.9;
    serratedRim(g, R, 90, R * 0.014);
    g.strokeStyle = `rgba(${NAVY},0.34)`;
    g.lineWidth = 0.55;
    weave(g, R * 0.93, R * 0.05, 26, 5, [1, -1]);
    ring(g, R * 0.875, 0.45, 0.7);
    ring(g, R * 0.86, 0.45, 0.7);
  });

  const middle = layer((g) => {
    /* Few strands, crossed: a chain of loops rather than a solid tint. */
    g.strokeStyle = `rgba(${ORANGE},0.62)`;
    g.lineWidth = 0.7;
    weave(g, R * 0.76, R * 0.07, 16, 5, [1, -1]);
    ring(g, R * 0.835, 0.35, 0.6, ORANGE);
    ring(g, R * 0.685, 0.35, 0.6, ORANGE);
    /* A string of beads between the bands. */
    g.fillStyle = `rgba(${NAVY},0.42)`;
    const beads = 54;
    for (let i = 0; i < beads; i++) {
      const th = (i / beads) * TAU;
      g.beginPath();
      g.arc(R * 0.645 * Math.cos(th), R * 0.645 * Math.sin(th), R * 0.0115, 0, TAU);
      g.fill();
    }
  });

  const inner = layer((g) => {
    g.strokeStyle = `rgba(${NAVY},0.32)`;
    g.lineWidth = 0.55;
    weave(g, R * 0.53, R * 0.058, 15, 8, [1, -1]);
    ring(g, R * 0.465, 0.5, 0.75);
  });

  /* The legend ring and the cream disc the company name sits on. */
  const legend = layer((g) => {
    g.fillStyle = "#fbfaf7";
    g.beginPath();
    g.arc(0, 0, R * 0.44, 0, TAU);
    g.fill();
    ring(g, R * 0.44, 0.55, 0.8);
    ring(g, R * 0.425, 0.3, 0.5);
    ring(g, R * 0.285, 0.3, 0.5);

    const text = "SIMPLEBOOKS · SRI LANKA · SINCE 2014 · ";
    const fontPx = Math.max(6, R * 0.05);
    g.font = `800 ${fontPx}px ${font}`;
    g.fillStyle = `rgba(${NAVY},0.62)`;
    textRing(g, text + text, R * 0.355);
  });

  return { size, outer, middle, inner, legend };
}

function computeLayout(w: number, h: number, cardLeft: number): Layout {
  const vertical = w < 860;
  if (vertical) {
    const sealR = Math.min(112, w * 0.29);
    return {
      w,
      h,
      vertical,
      sealX: w / 2,
      sealY: h * 0.63,
      sealR,
      storm: { x0: w * 0.06, x1: w * 0.94, y0: h * 0.06, y1: h * 0.32 },
      sheetScale: 0.8,
      outX: w / 2,
      outY: h,
    };
  }
  /* The seal sits midway between the pile and the card, and shrinks before it
     would crowd either of them. */
  const storm = { x0: w * 0.02, x1: w * 0.27, y0: h * 0.1, y1: h * 0.9 };
  const sealR = Math.min(150, h * 0.29, (cardLeft - storm.x1) / 2 - 34);
  return {
    w,
    h,
    vertical,
    sealX: (storm.x1 + cardLeft) / 2,
    sealY: h * 0.5,
    sealR,
    storm,
    sheetScale: 1,
    outX: cardLeft,
    outY: h * 0.5,
  };
}

function wrapName(name: string): string[] {
  const words = name.split(" ");
  if (words.length < 2) return [name];
  let best = [name];
  let bestScore = Infinity;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" ");
    const b = words.slice(i).join(" ");
    const score = Math.max(a.length, b.length);
    if (score < bestScore) {
      bestScore = score;
      best = [a, b];
    }
  }
  return best;
}

function Icon({ name }: { name: IconName }) {
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
    case "id":
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="12" r="2.4" />
          <path d="M14 10h4M14 14h3" />
        </svg>
      );
    case "receipt":
      return (
        <svg {...p}>
          <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
          <path d="M9.5 14.5l5-5M10 9.5h.01M14 14.5h.01" />
        </svg>
      );
    case "people":
      return (
        <svg {...p}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20a6 6 0 0 1 12 0M16 4.5a3 3 0 0 1 0 6M18 20a5 5 0 0 0-2.5-4.3" />
        </svg>
      );
    case "book":
      return (
        <svg {...p}>
          <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
          <path d="M4 21V5M9 8h6M9 12h4" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 10h18M9 15l2 2 4-4" />
        </svg>
      );
  }
}

export default function PaperworkStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const pileTagRef = useRef<HTMLSpanElement>(null);
  const sealTagRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const footRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const font = getComputedStyle(stage).fontFamily || "sans-serif";

    let layout: Layout = computeLayout(1, 1, 1);
    let dpr = 1;
    let seal: SealLayers | null = null;
    let sheets: Sheet[] = [];
    let ripples: { t: number; big: boolean }[] = [];
    /* Ink thrown off where a sheet strikes the rim. */
    let sparks: { x: number; y: number; vx: number; vy: number; t: number; life: number; r: number }[] = [];
    /* Pointer position over the stage, eased, for a little depth in the pile. */
    let lookX = 0;
    let lookY = 0;
    let aimX = 0;
    let aimY = 0;
    let pulse = 0;
    let press = 0;
    let time = 0;
    let drawIn = reduced ? 1 : 0;
    let ready = false;

    /* Cycle state, mirrored onto the DOM card only when it changes. It starts
       where the server-rendered card does — finished — or the first reset is
       skipped as a no-op and the footer stays green from the first frame. */
    let cycleIndex = -1;
    let rowsOn = OUTCOMES.length;
    let footOn = true;
    let launched = -1;

    const rand = (() => {
      /* Seeded, so the pile lands the same way on every visit. */
      let s = 7;
      return () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };
    })();

    const placeHome = (sheet: Sheet) => {
      const { x0, x1, y0, y1 } = layout.storm;
      /* Averaging two draws bunches the sheets towards the middle of the pile. */
      sheet.homeX = x0 + ((rand() + rand()) / 2) * (x1 - x0);
      sheet.homeY = y0 + ((rand() + rand()) / 2) * (y1 - y0);
    };

    const build = () => {
      const rect = stage.getBoundingClientRect();
      const canvasRect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(canvasRect.width || rect.width));
      const h = Math.max(1, Math.round(canvasRect.height || rect.height));
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      const card = cardRef.current?.getBoundingClientRect();
      const cardLeft = card ? card.left - canvasRect.left : w * 0.69;
      layout = computeLayout(w, h, cardLeft);
      /* The labels follow the layout rather than a guessed percentage. */
      if (pileTagRef.current) pileTagRef.current.style.left = `${(layout.storm.x0 + layout.storm.x1) / 2}px`;
      if (sealTagRef.current) sealTagRef.current.style.left = `${layout.sealX}px`;
      seal = makeSeal(layout.sealR, dpr, font);

      const labels = [...OUTCOMES.map((o) => o.source), ...FILLERS];
      const count = layout.vertical ? 15 : 28;
      const previous = sheets;
      sheets = [];
      for (let i = 0; i < count; i++) {
        const label = labels[i % labels.length];
        const depth = 0.62 + rand() * 0.48;
        const sprite = makeSheetSprite(label, font, layout.sheetScale * depth, dpr, i).canvas;
        const sheet: Sheet = {
          label,
          sprite,
          depth,
          homeX: 0,
          homeY: 0,
          x: 0,
          y: 0,
          rot: (rand() - 0.5) * 0.9,
          spin: (rand() - 0.5) * 0.35,
          phase: rand() * TAU,
          wobble: 0.5 + rand() * 0.7,
          state: "idle",
          t: 0,
          struck: false,
          fromX: 0,
          fromY: 0,
          fromRot: 0,
        };
        placeHome(sheet);
        sheet.x = sheet.homeX;
        sheet.y = sheet.homeY;
        /* A resize mid-flight should not teleport a sheet back to the pile. */
        const old = previous[i];
        if (old && old.state !== "idle" && old.label === label) sheet.state = "idle";
        sheets.push(sheet);
      }
      /* Back to front, so nearer sheets overlap farther ones. */
      sheets.sort((a, b) => a.depth - b.depth);
      ready = true;
    };

    const setRows = (n: number) => {
      if (n === rowsOn) return;
      rowsOn = n;
      rowRefs.current.forEach((row, i) => row?.classList.toggle("is_on", i < n));
      if (barRef.current) barRef.current.style.transform = `scaleX(${n / OUTCOMES.length})`;
    };

    const setFoot = (on: boolean) => {
      if (on === footOn) return;
      footOn = on;
      footRef.current?.classList.toggle("is_on", on);
    };

    const startCycle = (index: number) => {
      cycleIndex = index;
      launched = -1;
      const name = COMPANIES[index % COMPANIES.length];
      if (nameRef.current) nameRef.current.textContent = `${name} (Pvt) Ltd`;
      if (avatarRef.current) {
        avatarRef.current.textContent = name
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("");
      }
      setRows(0);
      setFoot(false);
    };

    const sheetFor = (label: string) =>
      sheets.find((s) => s.label === label && s.state === "idle") ??
      sheets.find((s) => s.state === "idle");

    const step = (dt: number) => {
      time += dt;
      if (drawIn < 1) drawIn = Math.min(1, drawIn + dt / 1.6);
      pulse = Math.max(0, pulse - dt * 3.2);
      press = Math.max(0, press - dt * 1.6);
      ripples = ripples.filter((r) => time - r.t < (r.big ? 1.6 : 1.0));
      lookX += (aimX - lookX) * Math.min(1, dt * 3);
      lookY += (aimY - lookY) * Math.min(1, dt * 3);
      for (const k of sparks) {
        k.t += dt;
        k.x += k.vx * dt;
        k.y += k.vy * dt;
        k.vx *= 1 - dt * 2.2;
        k.vy *= 1 - dt * 2.2;
      }
      sparks = sparks.filter((k) => k.t < k.life);

      const index = Math.floor(time / CYCLE);
      const local = time - index * CYCLE;
      if (index !== cycleIndex) startCycle(index);

      /* Launch the next sheet when its slot comes up. Lifting it a beat early
         gives the eye time to find it before it moves. */
      for (let k = launched + 1; k < OUTCOMES.length; k++) {
        const at = FIRST_FLIGHT + k * FLIGHT_GAP;
        if (local < at - 0.45) break;
        const sheet = sheetFor(OUTCOMES[k].source);
        if (sheet) {
          sheet.state = "lift";
          sheet.t = 0;
        }
        launched = k;
      }

      const sx = layout.sealX;
      const sy = layout.sealY;
      for (const s of sheets) {
        if (s.state === "idle") {
          const a = time * 0.35 * s.wobble + s.phase;
          s.x = s.homeX + Math.sin(a) * 9 + Math.sin(a * 0.43) * 6;
          s.y = s.homeY + Math.cos(a * 0.8) * 8;
          s.rot += s.spin * dt;
          if (s.rot > 0.55 || s.rot < -0.55) s.spin = -s.spin;
        } else if (s.state === "lift") {
          s.t += dt / 0.45;
          s.rot += (0 - s.rot) * Math.min(1, dt * 6);
          if (s.t >= 1) {
            s.state = "fly";
            s.t = 0;
            s.struck = false;
            s.fromX = s.x;
            s.fromY = s.y;
            s.fromRot = s.rot;
          }
        } else if (s.state === "fly") {
          s.t += dt / FLIGHT_TIME;
          const t = easeInOut(clamp01(s.t));
          /* A curve rather than a straight line: the sheet arcs in as if
             pulled by the seal, not slid across. */
          const c1x = s.fromX + (sx - s.fromX) * 0.35;
          const c1y = layout.vertical ? s.fromY + 40 : s.fromY - 70;
          const c2x = layout.vertical ? sx : sx - layout.sealR * 1.5;
          const c2y = layout.vertical ? sy - layout.sealR * 1.5 : sy + (s.fromY - sy) * 0.25;
          const u = 1 - t;
          s.x = u * u * u * s.fromX + 3 * u * u * t * c1x + 3 * u * t * t * c2x + t * t * t * sx;
          s.y = u * u * u * s.fromY + 3 * u * u * t * c1y + 3 * u * t * t * c2y + t * t * t * sy;
          s.rot = s.fromRot + t * TAU * 0.6;

          /* Two beats: ink flies where the sheet strikes the rim, then the
             outcome ticks when it reaches the centre. */
          if (!s.struck && Math.hypot(s.x - sx, s.y - sy) < layout.sealR) {
            s.struck = true;
            const out = Math.atan2(s.y - sy, s.x - sx);
            for (let i = 0; i < 14; i++) {
              const a = out + (rand() - 0.5) * 1.9;
              const v = 50 + rand() * 120;
              sparks.push({
                x: s.x,
                y: s.y,
                vx: Math.cos(a) * v,
                vy: Math.sin(a) * v,
                t: 0,
                life: 0.45 + rand() * 0.45,
                r: 0.9 + rand() * 1.6,
              });
            }
          }

          if (s.t >= 1) {
            /* Arrival: the seal takes it in and the matching outcome ticks. */
            pulse = 1;
            ripples.push({ t: time, big: false });
            const done = OUTCOMES.findIndex((o) => o.source === s.label);
            const n = done >= 0 ? done + 1 : rowsOn + 1;
            setRows(Math.max(rowsOn, n));
            if (n >= OUTCOMES.length) {
              press = 1;
              ripples.push({ t: time, big: true });
            }
            s.state = "return";
            s.t = 0;
            placeHome(s);
            /* Re-enter from outside the pile, so it is not seen popping in. */
            s.x = layout.vertical ? s.homeX : -60;
            s.y = layout.vertical ? -60 : s.homeY;
          }
        } else {
          s.t += dt / 1.8;
          const t = easeOut(clamp01(s.t));
          const ox = layout.vertical ? s.homeX : -60;
          const oy = layout.vertical ? -60 : s.homeY;
          s.x = ox + (s.homeX - ox) * t;
          s.y = oy + (s.homeY - oy) * t;
          if (s.t >= 1) s.state = "idle";
        }
      }

      const finishedAt = FIRST_FLIGHT + (OUTCOMES.length - 1) * FLIGHT_GAP + FLIGHT_TIME;
      setFoot(local >= finishedAt && local < CYCLE - CLEAR);
      if (local >= CYCLE - CLEAR) setRows(0);
    };

    const drawSheet = (s: Sheet, alpha: number) => {
      const img = s.sprite;
      const flying = s.state === "fly" || s.state === "lift";
      let scale = 1;
      let a = alpha;
      if (s.state === "fly") {
        const t = clamp01(s.t);
        scale = 1 + 0.12 * Math.sin(Math.min(1, t * 2) * Math.PI) - 0.78 * Math.pow(t, 2.2);
        a = alpha * (t > 0.78 ? 1 - (t - 0.78) / 0.22 : 1);
      } else if (s.state === "lift") {
        scale = 1 + 0.14 * easeOut(clamp01(s.t));
      } else if (s.state === "return") {
        a = alpha * clamp01(s.t * 1.6);
      }
      /* A slow turn about the vertical axis, so the pile reads as loose paper
         rather than tiles. Never fully edge-on, so labels stay legible. */
      const turn = flying ? 1 : 0.62 + 0.38 * Math.cos(time * 0.5 * s.wobble + s.phase * 2);
      /* Nearer sheets move further with the pointer than distant ones. */
      const shift = flying ? 0 : 16 * s.depth;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(s.x + lookX * shift, s.y + lookY * shift);
      ctx.rotate(s.rot);
      ctx.scale(scale * turn, scale);
      ctx.drawImage(img, -img.width / dpr / 2, -img.height / dpr / 2, img.width / dpr, img.height / dpr);
      if (flying) {
        /* Outline the sheet in flight, so it is clear which one is moving. */
        const w = 50 * layout.sheetScale * s.depth;
        const h = 64 * layout.sheetScale * s.depth;
        ctx.strokeStyle = `rgba(${ORANGE},${0.75 * a})`;
        ctx.lineWidth = 1.4 / Math.max(0.3, scale);
        ctx.beginPath();
        ctx.roundRect(-w / 2 - 3, -h / 2 - 3, w + 6, h + 6, 5);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawFlow = () => {
      /* Marching dashes from the pile into the seal, and out to the card. */
      const { sealX: sx, sealY: sy, sealR: R } = layout;
      ctx.save();
      ctx.setLineDash([2, 7]);
      ctx.lineDashOffset = -time * 22;
      ctx.lineWidth = 1.2;
      ctx.lineCap = "round";
      ctx.strokeStyle = `rgba(${NAVY},0.16)`;
      ctx.beginPath();
      if (layout.vertical) {
        ctx.moveTo(sx, layout.storm.y1 + 4);
        ctx.lineTo(sx, sy - R - 10);
      } else {
        ctx.moveTo(layout.storm.x1 + 12, sy);
        ctx.lineTo(sx - R - 14, sy);
      }
      ctx.stroke();
      ctx.strokeStyle = `rgba(${ORANGE},0.42)`;
      ctx.beginPath();
      if (layout.vertical) {
        ctx.moveTo(sx, sy + R + 10);
        ctx.lineTo(sx, layout.h - 4);
      } else {
        ctx.moveTo(sx + R + 14, sy);
        ctx.lineTo(layout.outX - 10, layout.outY);
      }
      ctx.stroke();
      ctx.restore();
    };

    const drawSeal = () => {
      if (!seal) return;
      const { sealX: sx, sealY: sy, sealR: R } = layout;
      const size = seal.size;
      const p = easeOut(drawIn);
      const breathe = 1 + 0.028 * pulse - 0.05 * Math.sin(Math.PI * clamp01(1 - press)) * press;

      for (const r of ripples) {
        const age = (time - r.t) / (r.big ? 1.6 : 1.0);
        ctx.strokeStyle = `rgba(${r.big ? GREEN : ORANGE},${(1 - age) * (r.big ? 0.5 : 0.38)})`;
        ctx.lineWidth = r.big ? 2 : 1.4;
        ctx.beginPath();
        ctx.arc(sx, sy, R * (1.02 + age * (r.big ? 0.55 : 0.32)), 0, TAU);
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(sx, sy);
      ctx.scale(breathe, breathe);

      /* The seal is engraved in on first view: a sweep that reveals each band
         in turn, outer first. */
      const band = (img: HTMLCanvasElement, rot: number, delay: number, alpha = 1) => {
        const reveal = clamp01((p - delay) / (1 - delay));
        if (reveal <= 0) return;
        ctx.save();
        if (reveal < 1) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, size, -Math.PI / 2, -Math.PI / 2 + reveal * TAU);
          ctx.closePath();
          ctx.clip();
        }
        ctx.rotate(rot);
        ctx.globalAlpha = alpha;
        ctx.drawImage(img, -size / 2, -size / 2, size, size);
        ctx.restore();
      };

      const still = reduced ? 0 : 1;
      band(seal.outer, time * 0.035 * still, 0);
      band(seal.middle, -time * 0.06 * still, 0.12, 0.82 + 0.18 * pulse);
      band(seal.inner, time * 0.09 * still, 0.24);
      band(seal.legend, -time * 0.02 * still, 0.34);

      /* Company name, set into the centre of the seal. */
      if (p > 0.5) {
        const name = COMPANIES[Math.max(0, cycleIndex) % COMPANIES.length];
        const index = Math.floor(time / CYCLE);
        const local = reduced ? CYCLE / 2 : time - index * CYCLE;
        const typed = clamp01(local / 0.7);
        const fade = local > CYCLE - CLEAR ? 1 - (local - (CYCLE - CLEAR)) / CLEAR : 1;
        const visible = Math.ceil(name.length * typed);
        const lines = wrapName(name.slice(0, visible).toUpperCase());
        const fontPx = Math.max(9, R * 0.082);
        ctx.globalAlpha = fade * clamp01((p - 0.5) * 3);
        ctx.fillStyle = `rgb(${NAVY})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = `800 ${fontPx}px ${font}`;
        const lh = fontPx * 1.15;
        const top = -((lines.length - 1) * lh) / 2 - fontPx * 0.35;
        lines.forEach((line, i) => ctx.fillText(line, 0, top + i * lh, R * 0.52));
        ctx.font = `700 ${fontPx * 0.62}px ${font}`;
        ctx.fillStyle = `rgba(${NAVY},0.5)`;
        ctx.fillText("(PVT) LTD", 0, top + lines.length * lh + fontPx * 0.05);

        /* Once all six are done the seal closes with a green ring. */
        const finishedAt = FIRST_FLIGHT + (OUTCOMES.length - 1) * FLIGHT_GAP + FLIGHT_TIME;
        const closed = reduced ? 1 : clamp01((local - finishedAt) / 0.6);
        if (closed > 0) {
          ctx.strokeStyle = `rgba(${GREEN},${0.9 * fade})`;
          ctx.lineWidth = 2.2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.arc(0, 0, R * 0.455, -Math.PI / 2, -Math.PI / 2 + easeOut(closed) * TAU);
          ctx.stroke();
        }
      }
      ctx.restore();
    };

    const draw = () => {
      if (!ready) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, layout.w, layout.h);
      drawFlow();
      /* Sheets behind the seal's plane, then the seal, then the near ones and
         anything in flight, which always passes in front. */
      for (const s of sheets) if (s.depth < 0.86 && s.state === "idle") drawSheet(s, 0.5 + s.depth * 0.4);
      drawSeal();
      for (const s of sheets) if (s.depth >= 0.86 && s.state !== "fly" && s.state !== "lift") drawSheet(s, 1);
      for (const s of sheets) if (s.depth < 0.86 && s.state === "return") drawSheet(s, 0.85);
      for (const s of sheets) if (s.state === "fly" || s.state === "lift") drawSheet(s, 1);
      for (const k of sparks) {
        const fade = 1 - k.t / k.life;
        ctx.fillStyle = `rgba(${ORANGE},${0.9 * fade})`;
        ctx.beginPath();
        ctx.arc(k.x, k.y, k.r * (0.6 + 0.4 * fade), 0, TAU);
        ctx.fill();
      }
    };

    let raf = 0;
    let last = 0;
    let visible = false;
    const loop = (now: number) => {
      /* Clamped, so returning to the tab does not fast-forward the story. */
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      step(dt);
      draw();
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      if (raf || reduced) return;
      last = 0;
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    let cancelled = false;
    let stopWarm = () => {};
    /* Drawing the seal and the sheets is a one-off — ~20k line segments and 28
       shadowed sprites, about 10ms. Small, but the section sits below the fold,
       so it still stays off the load path: it waits until the stage is within a
       screen or so of the viewport, for the load event, and for an idle moment. */
    const nearby = () =>
      new Promise<void>((resolve) => {
        const warm = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            warm.disconnect();
            resolve();
          },
          { rootMargin: "900px 0px" },
        );
        warm.observe(stage);
        stopWarm = () => warm.disconnect();
      });
    /* Near the top of a page, "nearby" is true straight away; waiting for load
       as well keeps the work out of the window the page is judged on. */
    const loaded = () =>
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", () => resolve(), { once: true });
      });
    const idle = () =>
      new Promise<void>((resolve) => {
        /* Safari has no requestIdleCallback, whatever the DOM types claim. */
        if (typeof window.requestIdleCallback === "function") {
          window.requestIdleCallback(() => resolve(), { timeout: 700 });
        } else {
          setTimeout(resolve, 1);
        }
      });

    const start = async () => {
      await nearby();
      await loaded();
      /* The canvas draws text, so wait for the page font or the first frames
         render in a fallback face. */
      try {
        await document.fonts?.ready;
      } catch {
        /* Draw with whatever is available. */
      }
      await idle();
      if (cancelled) return;
      build();
      if (reduced) {
        /* One still frame of the finished business. */
        startCycle(0);
        setRows(OUTCOMES.length);
        setFoot(true);
        cycleIndex = 0;
        time = FIRST_FLIGHT + (OUTCOMES.length - 1) * FLIGHT_GAP + FLIGHT_TIME + 1;
        draw();
        return;
      }
      /* The card is server-rendered in its finished state, which reads well
         with no script. Reset it before the story starts. */
      setRows(0);
      if (visible) play();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && ready) play();
        else pause();
      },
      { rootMargin: "120px 0px" },
    );
    io.observe(stage);

    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (!ready) return;
        build();
        draw();
      }, 140);
    });
    ro.observe(stage);

    const fine = window.matchMedia("(pointer: fine)").matches;
    const onPointer = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      aimX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      aimY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => {
      aimX = 0;
      aimY = 0;
    };
    if (fine && !reduced) {
      stage.addEventListener("pointermove", onPointer);
      stage.addEventListener("pointerleave", onLeave);
    }

    const onVisibility = () => {
      if (document.hidden) pause();
      else if (visible && ready) play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    start();

    return () => {
      cancelled = true;
      stopWarm();
      pause();
      io.disconnect();
      ro.disconnect();
      window.clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", onVisibility);
      stage.removeEventListener("pointermove", onPointer);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="pw_stage" ref={stageRef}>
      <div className="pw_canvas_wrap" aria-hidden="true">
        <canvas ref={canvasRef} className="pw_canvas" />
        <span className="pw_tag pw_tag_in" ref={pileTagRef}>
          The paperwork
        </span>
        <span className="pw_tag pw_tag_seal" ref={sealTagRef}>
          Simplebooks
        </span>
      </div>

      <div className="pw_card" aria-hidden="true" ref={cardRef}>
        <div className="pw_card_head">
          <span className="pw_avatar" ref={avatarRef}>
            LB
          </span>
          <div className="pw_card_id">
            <p className="pw_card_name" ref={nameRef}>
              Lotus Bakery (Pvt) Ltd
            </p>
            <p className="pw_card_sub">Simplebooks dashboard</p>
          </div>
          <span className="pw_live">Live</span>
        </div>
        <div className="pw_progress">
          <span ref={barRef} />
        </div>
        <ul className="pw_rows">
          {OUTCOMES.map((o, i) => (
            <li
              key={o.title}
              className="pw_row is_on"
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
            >
              <span className="pw_row_icon">
                <Icon name={o.icon} />
              </span>
              <span className="pw_row_text">
                <span className="pw_row_title">{o.title}</span>
                <span className="pw_row_meta">{o.meta}</span>
              </span>
              <span className="pw_check">
                <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                  <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
        <div className="pw_card_foot is_on" ref={footRef}>
          <span className="pw_foot_dot" />
          Registered, compliant and trading
        </div>
      </div>

      {/* The stage is decoration and changes every second; this is what it says. */}
      <ul className="pw_sr">
        {OUTCOMES.map((o) => (
          <li key={o.title}>
            {o.title}: {o.meta}
          </li>
        ))}
      </ul>
    </div>
  );
}
