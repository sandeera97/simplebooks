/**
 * The four chapters of the hero video (/video/hero.mp4), and what the rest of
 * the hero shows while each one plays.
 *
 * Kept out of the client component on purpose: the server-rendered headline
 * reads `line`, and a server component cannot import plain values from a
 * "use client" module.
 *
 * Times were measured off the video itself: each chapter's title holds for
 * about ten seconds with a half-second blank between them, and the switch
 * happens in the middle of that blank.
 */

export type HeroIcon = "building" | "chart" | "scale" | "people";

export type HeroChapter = {
  /** Seconds into the video where this chapter takes over. */
  start: number;
  /** Where a tab jumps to — just past the blank frames before the title. */
  seek: number;
  /** One line of the headline. Together the four say what the company does. */
  line: string;
  tab: string;
  card: { icon: HeroIcon; title: string; meta: string };
};

export const HERO_CHAPTERS: HeroChapter[] = [
  {
    start: 0,
    seek: 0,
    line: "Register your company.",
    tab: "Business setup",
    card: { icon: "building", title: "Company registered", meta: "In 5–6 working weeks" },
  },
  {
    start: 10.4,
    seek: 10.6,
    line: "Keep your books.",
    tab: "Bookkeeping",
    card: { icon: "chart", title: "Books up to date", meta: "VAT filed on time" },
  },
  {
    start: 20.9,
    seek: 21.1,
    line: "Protect your business.",
    tab: "Legal",
    card: { icon: "scale", title: "Contract signed", meta: "Drafted by our lawyers" },
  },
  {
    start: 31.4,
    seek: 31.6,
    line: "Pay your team.",
    tab: "Payroll",
    card: { icon: "people", title: "Payroll sent", meta: "EPF & ETF remitted" },
  },
];

/** The closing "One team, one platform" frames, where every service shows at once. */
export const HERO_FINALE = 41.9;

/** Which chapter is playing at `t` seconds; HERO_CHAPTERS.length means the finale. */
export function chapterAt(t: number): number {
  if (t >= HERO_FINALE) return HERO_CHAPTERS.length;
  for (let i = HERO_CHAPTERS.length - 1; i >= 0; i--) {
    if (t >= HERO_CHAPTERS[i].start) return i;
  }
  return 0;
}
