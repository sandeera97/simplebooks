"use client";

import { useEffect, useRef } from "react";

/**
 * "Paperwork in. A running business out."
 *
 * Three labelled steps, read left to right (top to bottom on phones):
 *   1. Your paperwork: a pile of the real forms a Sri Lankan company files.
 *   2. We handle it: one at a time, a form flies onto the Simplebooks desk,
 *      runs through its three steps and gets stamped.
 *   3. A business, running: a tick flies across to the company's dashboard
 *      card and that outcome lights up. Six outcomes make a running business;
 *      then the pile refills and the next company starts.
 *
 * The client found the old version's engraved seal puzzling ("not sure what
 * the purpose is"), so every element now says what it is.
 *
 * Plain DOM moved by one requestAnimationFrame loop: every frame is computed
 * from the time within the cycle, so it can pause, resume and resize without
 * drifting. Only transforms, opacity and a few class flips per frame. It runs
 * only while on screen; with reduced motion it shows one still frame.
 */

type IconName = "building" | "id" | "receipt" | "people" | "book" | "calendar";

type Doc = {
  /** Printed at the top of the sheet. */
  code: string;
  /** The sheet's subtitle. */
  sheet: string;
  /** What the desk shows while handling it. */
  task: string;
  authority: string;
  steps: [string, string, string];
  stamp: string;
  /** Accent on the sheet: o, b, g, v, s, n. */
  accent: string;
  outcome: { title: string; meta: string; icon: IconName };
};

/* What a company actually needs in its first year, in the order it happens.
   Rates and bodies are the real ones: VAT 18% since January 2024, employer
   EPF 12% and ETF 3%, the Inland Revenue Department, the Registrar of Companies. */
const DOCS: Doc[] = [
  {
    code: "FORM 1", sheet: "Application for incorporation", task: "Company incorporation",
    authority: "Registrar of Companies", steps: ["Prepared", "Signed", "Filed"], stamp: "Filed", accent: "o",
    outcome: { title: "Company incorporated", meta: "Within 5–6 working weeks", icon: "building" },
  },
  {
    code: "TIN", sheet: "Taxpayer registration", task: "Taxpayer registration",
    authority: "Inland Revenue", steps: ["Prepared", "Submitted", "Issued"], stamp: "Issued", accent: "b",
    outcome: { title: "TIN issued", meta: "Registered with Inland Revenue", icon: "id" },
  },
  {
    code: "VAT", sheet: "VAT registration", task: "VAT registration",
    authority: "Inland Revenue", steps: ["Checked", "Submitted", "Registered"], stamp: "Registered", accent: "g",
    outcome: { title: "VAT registered", meta: "18% standard rate", icon: "receipt" },
  },
  {
    code: "EPF · ETF", sheet: "Monthly contributions", task: "Payroll",
    authority: "EPF and ETF", steps: ["Calculated", "Paid", "Payslips sent"], stamp: "Paid", accent: "v",
    outcome: { title: "Payroll running", meta: "EPF 12% · ETF 3% handled", icon: "people" },
  },
  {
    code: "INVOICES", sheet: "Bills and receipts", task: "Monthly bookkeeping",
    authority: "Your accounts", steps: ["Collected", "Reconciled", "Closed"], stamp: "Reconciled", accent: "s",
    outcome: { title: "Books reconciled", meta: "Closed every month", icon: "book" },
  },
  {
    code: "FORM 15", sheet: "Annual return", task: "Annual return",
    authority: "Registrar of Companies", steps: ["Prepared", "Signed", "Filed"], stamp: "Filed", accent: "n",
    outcome: { title: "Annual return filed", meta: "Registrar of Companies · on time", icon: "calendar" },
  },
];

/* Illustrative, not real registrations. */
const COMPANIES = [
  { name: "Lotus Bakery (Pvt) Ltd", initials: "LB" },
  { name: "Island Code Labs (Pvt) Ltd", initials: "IC" },
  { name: "Hill Country Tea (Pvt) Ltd", initials: "HT" },
  { name: "Harbour Freight (Pvt) Ltd", initials: "HF" },
];

const N = DOCS.length;

/* ---------- Timing, in seconds ---------- */
const INTRO = 0.8; // the pile settles before the first sheet lifts
const STEP = 1.75; // a new document every STEP seconds
const LIFT = 0.3;
const FLY = 0.8;
const DOCKED = LIFT + FLY; // 1.1
const STEP_AT = [1.2, 1.5, 1.8]; // each step completes here, after a 0.28s fill
const STAMP_AT = 1.98;
const LEAVE_AT = 2.32;
const TOKEN_FLY = 0.55;
const ROW_AT = LEAVE_AT + TOKEN_FLY;
const DONE_AT = INTRO + (N - 1) * STEP + ROW_AT;
const HOLD = 3.4;
const CLEAR_AT = DONE_AT + HOLD;
const CLEAR = 1.2;
const CYCLE = CLEAR_AT + CLEAR;
const startOf = (i: number) => INTRO + i * STEP;

/* Where each sheet rests in the pile; level 0 is the bottom. Doc 0 is on top. */
const REST = [
  { dx: -9, dy: 10, r: -7 },
  { dx: 7, dy: 6, r: 5 },
  { dx: -5, dy: 2, r: -3 },
  { dx: 8, dy: -2, r: 6 },
  { dx: -6, dy: -6, r: -4 },
  { dx: 3, dy: -10, r: 2 },
];
const levelOf = (i: number) => N - 1 - i;

/* The still frame for reduced motion: payroll being stamped, three done and
   two forms still waiting, so all three steps have something in them. */
const STILL_T = startOf(3) + 2.1;

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeIn = (t: number) => t * t * t;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutBack = (t: number) => {
  const c = 1.7;
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Pt = { x: number; y: number };
function bezier(a: Pt, b: Pt, c: Pt, d: Pt, t: number): Pt {
  const u = 1 - t;
  return {
    x: u * u * u * a.x + 3 * u * u * t * b.x + 3 * u * t * t * c.x + t * t * t * d.x,
    y: u * u * u * a.y + 3 * u * u * t * b.y + 3 * u * t * t * c.y + t * t * t * d.y,
  };
}
/* Two control points that arc the path to one side: up over a sideways
   journey, out to the right over a downward one. */
function arc(a: Pt, d: Pt, lift: number): [Pt, Pt] {
  const dx = d.x - a.x;
  const dy = d.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  let nx = -dy / len;
  let ny = dx / len;
  if (Math.abs(dx) >= Math.abs(dy) ? ny > 0 : nx < 0) {
    nx = -nx;
    ny = -ny;
  }
  const h = Math.min(lift, len * 0.4);
  return [
    { x: a.x + dx * 0.3 + nx * h, y: a.y + dy * 0.3 + ny * h },
    { x: a.x + dx * 0.72 + nx * h, y: a.y + dy * 0.72 + ny * h },
  ];
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

const Tick = ({ size = 12 }: { size?: number }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
    <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Lines of "text" on each sheet, as percentages of its width. */
const SHEET_LINES = [92, 78, 86, 64, 80];

export default function PaperworkStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const pileRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);
  const busyRef = useRef<HTMLSpanElement>(null);
  const taskRef = useRef<HTMLElement>(null);
  const authorityRef = useRef<HTMLSpanElement>(null);
  const stampRef = useRef<HTMLSpanElement>(null);
  const stampTextRef = useRef<HTMLSpanElement>(null);
  const tokenRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLSpanElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const footRef = useRef<HTMLDivElement>(null);
  const pathInRef = useRef<SVGPathElement>(null);
  const pathOutRef = useRef<SVGPathElement>(null);
  const sheetRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);
  const checkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const pile = pileRef.current;
    const dock = dockRef.current;
    if (!stage || !pile || !dock) return;
    const sheets = sheetRefs.current as HTMLDivElement[];
    const steps = stepRefs.current as HTMLLIElement[];
    const rows = rowRefs.current as HTMLLIElement[];
    const checks = checkRefs.current as HTMLSpanElement[];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- Geometry, measured on mount and on resize ---------- */
    let pileC: Pt = { x: 0, y: 0 }; // stage coords
    let dockOff: Pt = { x: 0, y: 0 }; // dock centre relative to the pile centre
    let dockC: Pt = { x: 0, y: 0 }; // stage coords
    let dockScale = 0.8;
    let rowsC: Pt[] = [];
    let sheetW = 176;

    function measure() {
      const s = stage!.getBoundingClientRect();
      const p = pile!.getBoundingClientRect();
      const d = dock!.getBoundingClientRect();
      pileC = { x: p.left - s.left + p.width / 2, y: p.top - s.top + p.height / 2 };
      dockC = { x: d.left - s.left + d.width / 2, y: d.top - s.top + d.height / 2 };
      dockOff = { x: dockC.x - pileC.x, y: dockC.y - pileC.y };
      sheetW = sheets[0]?.offsetWidth || 176;
      const sheetH = sheets[0]?.offsetHeight || 226;
      dockScale = Math.min((d.width - 26) / sheetW, (d.height - 22) / sheetH, 1);
      rowsC = checks.map((c) => {
        const r = c.getBoundingClientRect();
        return { x: r.left - s.left + r.width / 2, y: r.top - s.top + r.height / 2 };
      });
      /* Dotted "conveyor" lines between the steps. */
      const e = engineRef.current!.getBoundingClientRect();
      const card = stage!.querySelector(".pw_card")!.getBoundingClientRect();
      const across = e.left - p.right > 20; // three columns, not a stack
      const pIn = across
        ? [p.right - s.left - 6, pileC.y, e.left - s.left + 6, dockC.y]
        : [pileC.x, p.bottom - s.top - 6, dockC.x, e.top - s.top + 6];
      const pOut = across
        ? [e.right - s.left - 6, dockC.y, card.left - s.left + 6, card.top - s.top + card.height / 2]
        : [dockC.x, e.bottom - s.top - 6, card.left - s.left + card.width / 2, card.top - s.top + 6];
      const line = ([x1, y1, x2, y2]: number[]) =>
        across
          ? `M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}`
          : `M${x1},${y1} C${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2} ${x2},${y2}`;
      pathInRef.current?.setAttribute("d", line(pIn));
      pathOutRef.current?.setAttribute("d", line(pOut));
    }

    /* ---------- One frame, from the time within the cycle ---------- */
    let shownCompany = -1;
    let shownDoc = -3;
    const rowOn: boolean[] = Array(N).fill(false);
    const stepState: string[] = ["", "", ""];
    let lastPill = "";
    let lastFoot = false;
    let lastIn = false;
    let lastIdle: boolean | null = null;
    let lastOut = false;

    function setDoc(i: number) {
      if (i === shownDoc) return;
      shownDoc = i;
      const d = i >= 0 ? DOCS[i] : null;
      if (taskRef.current) taskRef.current.textContent = d ? d.task : i === -2 ? "All six handled" : "Waiting for paperwork";
      if (authorityRef.current) authorityRef.current.textContent = d ? d.authority : i === -2 ? "Nothing left to file" : "Next form is on its way";
      steps.forEach((el, k) => {
        const label = el.querySelector(".pw_step_label");
        if (label) label.textContent = d ? d.steps[k] : ["Prepared", "Signed", "Filed"][k];
      });
      if (stampTextRef.current && d) stampTextRef.current.textContent = d.stamp;
    }

    function frame(t: number, cycle: number) {
      const clearing = t >= CLEAR_AT;

      /* Sheets */
      for (let i = 0; i < N; i++) {
        const el = sheets[i];
        if (!el) continue;
        const lvl = levelOf(i);
        const rest = REST[lvl];
        const s0 = startOf(i);
        let x = rest.dx;
        let y = rest.dy;
        let r = rest.r;
        let sc = 1;
        let op = 1;
        let z = 10 + lvl;
        if (clearing) {
          /* A fresh pile drops in, bottom sheet first. */
          const e = clamp01((t - CLEAR_AT - 0.35 - lvl * 0.08) / 0.5);
          op = e;
          y = rest.dy - (1 - easeOut(e)) * 30;
        } else if (t < s0) {
          y += Math.sin(t * 1.6 + lvl * 1.3) * 1.3;
        } else if (t < s0 + LIFT) {
          const e = easeOut((t - s0) / LIFT);
          y -= 16 * e;
          sc = 1 + 0.05 * e;
          r = rest.r * (1 - 0.4 * e);
          z = 40;
        } else if (t < s0 + DOCKED) {
          const e = easeInOut((t - s0 - LIFT) / FLY);
          const a = { x: rest.dx, y: rest.dy - 16 };
          const [c1, c2] = arc(a, dockOff, 130);
          const pt = bezier(a, c1, c2, dockOff, e);
          x = pt.x;
          y = pt.y;
          sc = lerp(1.05, dockScale, e);
          r = lerp(rest.r * 0.6, 0, e) + Math.sin(e * Math.PI) * 6;
          z = 40;
        } else if (t < s0 + LEAVE_AT) {
          const k = (t - s0 - DOCKED) / 0.28;
          x = dockOff.x;
          y = dockOff.y;
          sc = dockScale * (k < 1 ? 1 + Math.sin(k * Math.PI) * 0.035 : 1);
          r = 0;
          z = 30;
        } else if (t < s0 + LEAVE_AT + 0.24) {
          const e = easeIn((t - s0 - LEAVE_AT) / 0.24);
          x = dockOff.x;
          y = dockOff.y;
          sc = dockScale * (1 - 0.75 * e);
          op = 1 - e;
          z = 30;
        } else {
          op = 0;
        }
        el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) rotate(${r.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
        el.style.opacity = op.toFixed(3);
        el.style.zIndex = String(z);
      }

      /* What the desk shows: the form on it, else the one flying in. The next
         form only takes over once the last one has left, so a stamp is never
         cut short. */
      let docked = -1;
      let flying = -1;
      for (let i = 0; i < N; i++) {
        const s0 = startOf(i);
        if (t >= s0 + DOCKED - 0.05 && t < s0 + LEAVE_AT + 0.24) docked = i;
        else if (t >= s0 + LIFT && t < s0 + DOCKED - 0.05) flying = i;
      }
      const active = docked >= 0 ? docked : flying;
      const allDone = t >= DONE_AT && !clearing;
      setDoc(active >= 0 ? active : allDone ? -2 : -1);
      dock!.classList.toggle("is_full", docked >= 0);
      hintRef.current?.classList.toggle("is_hidden", active >= 0);
      /* With all six handled the desk says so, rather than "Working". */
      if (allDone !== lastIdle) {
        lastIdle = allDone;
        busyRef.current?.classList.toggle("is_idle", allDone);
        if (busyRef.current?.lastChild) busyRef.current.lastChild.textContent = allDone ? "All done" : "Working";
        if (hintRef.current) hintRef.current.textContent = allDone ? "All done" : "Next form";
      }

      /* Steps */
      for (let k = 0; k < 3; k++) {
        let st = "";
        if (allDone) st = "is_done";
        else if (docked >= 0) {
          const at = startOf(docked) + STEP_AT[k];
          if (t >= at) st = "is_done";
          else if (t >= at - 0.28) st = "is_live";
        }
        if (st !== stepState[k]) {
          stepState[k] = st;
          const el = steps[k];
          el?.classList.toggle("is_done", st === "is_done");
          el?.classList.toggle("is_live", st === "is_live");
        }
      }

      /* Stamp, and the desk's thump when it lands */
      const stamp = stampRef.current;
      let thump = 0;
      if (stamp) {
        let sop = 0;
        let ssc = 1;
        if (docked >= 0) {
          const ts = t - (startOf(docked) + STAMP_AT);
          const out = t - (startOf(docked) + LEAVE_AT);
          if (ts >= 0 && out < 0.14) {
            const e = clamp01(ts / 0.22);
            sop = out > 0 ? 1 - out / 0.14 : clamp01(ts / 0.1);
            ssc = lerp(1.9, 1, easeOutBack(e));
            if (ts > 0.16 && ts < 0.34) thump = Math.sin(((ts - 0.16) / 0.18) * Math.PI);
          }
        }
        stamp.style.opacity = sop.toFixed(3);
        stamp.style.transform = `translate3d(${dockC.x.toFixed(1)}px,${dockC.y.toFixed(1)}px,0) translate(-50%,-50%) rotate(-9deg) scale(${ssc.toFixed(3)})`;
      }
      if (engineRef.current) engineRef.current.style.transform = thump ? `translateY(${(thump * 2).toFixed(2)}px)` : "";

      /* The tick that carries the outcome across */
      const token = tokenRef.current;
      if (token) {
        let tx = dockC.x;
        let ty = dockC.y;
        let top = 0;
        let tsc = 1;
        for (let i = 0; i < N; i++) {
          const a = t - (startOf(i) + LEAVE_AT + 0.04);
          if (a >= 0 && a < TOKEN_FLY && rowsC[i]) {
            const e = easeInOut(a / TOKEN_FLY);
            const [c1, c2] = arc(dockC, rowsC[i], 70);
            const pt = bezier(dockC, c1, c2, rowsC[i], e);
            tx = pt.x;
            ty = pt.y;
            top = a < 0.08 ? a / 0.08 : 1;
            tsc = a < 0.12 ? lerp(0.4, 1, easeOut(a / 0.12)) : lerp(1, 0.7, e);
          }
        }
        token.style.opacity = top.toFixed(3);
        token.style.transform = `translate3d(${tx.toFixed(1)}px,${ty.toFixed(1)}px,0) translate(-50%,-50%) scale(${tsc.toFixed(3)})`;
      }

      /* The conveyor lines glow while something travels along them */
      let flyIn = false;
      let flyOut = false;
      for (let i = 0; i < N; i++) {
        const s0 = startOf(i);
        if (t >= s0 + LIFT && t < s0 + DOCKED) flyIn = true;
        if (t >= s0 + LEAVE_AT && t < s0 + ROW_AT) flyOut = true;
      }
      if (flyIn !== lastIn) pathInRef.current?.classList.toggle("is_hot", (lastIn = flyIn));
      if (flyOut !== lastOut) pathOutRef.current?.classList.toggle("is_hot", (lastOut = flyOut));

      /* The company card */
      let done = 0;
      for (let i = 0; i < N; i++) {
        const on = !clearing && t >= startOf(i) + ROW_AT;
        if (on) done++;
        if (on !== rowOn[i]) {
          rowOn[i] = on;
          rows[i]?.classList.toggle("is_on", on);
        }
      }
      if (barRef.current) barRef.current.style.transform = `scaleX(${(done / N).toFixed(3)})`;
      const pill = done === N ? "up" : "setup";
      if (pill !== lastPill && pillRef.current) {
        lastPill = pill;
        pillRef.current.classList.toggle("is_up", pill === "up");
        pillRef.current.lastChild!.textContent = pill === "up" ? "Up and running" : "Setting up";
      }
      if (allDone !== lastFoot) {
        lastFoot = allDone;
        footRef.current?.classList.toggle("is_on", allDone);
      }

      /* The next company arrives while the pile refills */
      const company = (cycle + (clearing && t >= CLEAR_AT + 0.45 ? 1 : 0)) % COMPANIES.length;
      const fading = clearing && t >= CLEAR_AT + 0.15 && t < CLEAR_AT + 0.45;
      nameRef.current?.parentElement?.classList.toggle("is_swapping", fading);
      if (company !== shownCompany) {
        shownCompany = company;
        if (nameRef.current) nameRef.current.textContent = COMPANIES[company].name;
        if (avatarRef.current) avatarRef.current.textContent = COMPANIES[company].initials;
      }
    }

    /* ---------- Clock ---------- */
    let t = 0;
    let cycle = 0;
    let raf = 0;
    let last = 0;
    let visible = false;
    let started = false;

    function loop(now: number) {
      /* Capped so a dropped frame or a slow phone doesn't jump the scene. */
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      t += dt;
      if (t >= CYCLE) {
        t -= CYCLE;
        cycle++;
      }
      frame(t, cycle);
      raf = requestAnimationFrame(loop);
    }
    function play() {
      if (raf || reduced) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }
    function pause() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    measure();
    frame(reduced ? STILL_T : 0, 0);
    stage.classList.add("is_ready");

    /* Development only: jump to any moment, e.g. __pwSeek(4.2), to check a
       frame. Removed from production builds. */
    if (process.env.NODE_ENV === "development") {
      (window as unknown as { __pwSeek?: (s: number, c?: number) => void }).__pwSeek = (s, c = 0) => {
        pause();
        t = s;
        cycle = c;
        frame(s, c);
      };
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !started) {
          /* Start from the top the first time it is seen. */
          started = true;
          t = 0;
        }
        if (visible && !document.hidden) play();
        else pause();
      },
      { threshold: 0.2 },
    );
    io.observe(stage);

    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        measure();
        frame(reduced ? STILL_T : t, cycle);
      }, 120);
    });
    ro.observe(stage);

    const onVisibility = () => {
      if (document.hidden) pause();
      else if (visible) play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      pause();
      io.disconnect();
      ro.disconnect();
      window.clearTimeout(resizeTimer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="pw_stage" ref={stageRef}>
      <svg className="pw_lines" aria-hidden="true">
        <path ref={pathInRef} />
        <path ref={pathOutRef} />
      </svg>

      {/* 1. The paperwork */}
      <div className="pw_col pw_col_in" aria-hidden="true">
        <p className="pw_label">
          <b>1</b> Your paperwork
        </p>
        <div className="pw_pile" ref={pileRef}>
          {DOCS.map((d, i) => {
            const lvl = levelOf(i);
            const rest = REST[lvl];
            return (
              <div
                key={d.code}
                className={`pw_sheet pw_acc_${d.accent}`}
                ref={(el) => {
                  sheetRefs.current[i] = el;
                }}
                style={{
                  zIndex: 10 + lvl,
                  transform: `translate3d(${rest.dx}px,${rest.dy}px,0) rotate(${rest.r}deg)`,
                }}
              >
                <div className="pw_sheet_top">
                  <span className="pw_sheet_crest" />
                  <span className="pw_sheet_code">{d.code}</span>
                </div>
                <p className="pw_sheet_title">{d.sheet}</p>
                {SHEET_LINES.map((w, k) => (
                  <span key={k} className="pw_sheet_ln" style={{ width: `${w - ((i + k) % 3) * 6}%` }} />
                ))}
                <div className="pw_sheet_sign">
                  <span />
                  <span />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Simplebooks handles it */}
      <div className="pw_col pw_col_mid" aria-hidden="true">
        <p className="pw_label">
          <b>2</b> We handle it
        </p>
        <div className="pw_engine" ref={engineRef}>
          <div className="pw_engine_head">
            <span className="pw_logo">sb</span>
            <div className="pw_engine_id">
              <p className="pw_engine_t">Simplebooks</p>
              <p className="pw_engine_s">Your team handles every form</p>
            </div>
            <span className="pw_busy" ref={busyRef}>
              <i />
              <span>Working</span>
            </span>
          </div>
          <div className="pw_dock" ref={dockRef}>
            <span className="pw_dock_hint" ref={hintRef}>
              Next form
            </span>
          </div>
          <p className="pw_task">
            <b ref={taskRef}>Waiting for paperwork</b>
            <span ref={authorityRef}>Next form is on its way</span>
          </p>
          <ol className="pw_steps">
            {["Prepared", "Signed", "Filed"].map((s, k) => (
              <li
                key={k}
                className="pw_step"
                ref={(el) => {
                  stepRefs.current[k] = el;
                }}
              >
                <span className="pw_step_dot">
                  <Tick size={10} />
                </span>
                <span className="pw_step_label">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* 3. The running business */}
      <div className="pw_col pw_col_out" aria-hidden="true">
        <p className="pw_label">
          <b>3</b> A business, running
        </p>
        <div className="pw_card">
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
            <span className="pw_pill" ref={pillRef}>
              <i />
              <span>Setting up</span>
            </span>
          </div>
          <div className="pw_progress">
            <span ref={barRef} />
          </div>
          <ul className="pw_rows">
            {DOCS.map((d, i) => (
              <li
                key={d.outcome.title}
                className="pw_row"
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
              >
                <span className="pw_row_icon">
                  <Icon name={d.outcome.icon} />
                </span>
                <span className="pw_row_text">
                  <span className="pw_row_title">{d.outcome.title}</span>
                  <span className="pw_row_meta">{d.outcome.meta}</span>
                </span>
                <span
                  className="pw_check"
                  ref={(el) => {
                    checkRefs.current[i] = el;
                  }}
                >
                  <Tick />
                </span>
              </li>
            ))}
          </ul>
          <div className="pw_card_foot" ref={footRef}>
            <span className="pw_foot_dot" />
            Registered, compliant and trading
          </div>
        </div>
      </div>

      {/* Above everything: the stamp on the desk and the tick in flight. */}
      <span className="pw_stamp" ref={stampRef} aria-hidden="true">
        <Tick size={14} />
        <span ref={stampTextRef}>Filed</span>
      </span>
      <span className="pw_token" ref={tokenRef} aria-hidden="true">
        <Tick size={13} />
      </span>

      {/* The stage is decoration and changes every second; this is what it says. */}
      <ul className="pw_sr">
        {DOCS.map((d) => (
          <li key={d.code}>
            {d.code} ({d.task}): {d.outcome.title}, {d.outcome.meta}
          </li>
        ))}
      </ul>
    </div>
  );
}
