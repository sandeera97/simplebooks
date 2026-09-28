#!/usr/bin/env node
/**
 * Links our 2026 theme overlay into the exported free-tools pages.
 *
 * The tools team's code is never edited — we drop one extra stylesheet next to
 * their export and add a <link> to it at the very end of each <head>, so it
 * wins on order against everything their build emitted. Running this twice is
 * harmless; the link is replaced, not stacked.
 *
 * scripts/update-free-tools.sh calls this after publishing, which is what makes
 * the restyle survive a new drop.
 */
import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = join(ROOT, "styles", "tools-v2-theme.css");
const PUBLISH_DIR = join(ROOT, "public", "tools");
const THEME_NAME = "tools-v2-theme.css";
const MARKER = "data-sb-theme";

if (!existsSync(PUBLISH_DIR)) {
  console.error(`No export at ${PUBLISH_DIR} — publish it before theming.`);
  process.exit(1);
}
if (!existsSync(SOURCE)) {
  console.error(`Missing ${SOURCE}`);
  process.exit(1);
}

/* A cache-busting suffix so a changed theme is never served stale behind the
   long-lived caching the rest of /tools gets. */
const stamp = statSync(SOURCE).mtimeMs.toString(36);
copyFileSync(SOURCE, join(PUBLISH_DIR, THEME_NAME));

const LINK = `<link rel="stylesheet" href="/tools/${THEME_NAME}?v=${stamp}" ${MARKER}>`;
const EXISTING = new RegExp(`\\s*<link[^>]*${MARKER}[^>]*>`, "g");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (entry.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = walk(PUBLISH_DIR);
let touched = 0;
let skipped = 0;

for (const file of files) {
  let html = readFileSync(file, "utf8");
  html = html.replace(EXISTING, "");
  if (!html.includes("</head>")) { skipped++; continue; }
  html = html.replace("</head>", `${LINK}</head>`);
  writeFileSync(file, html);
  touched++;
}

console.log(`Theme linked into ${touched} page${touched === 1 ? "" : "s"}.`);
if (skipped) console.log(`Skipped ${skipped} file(s) with no <head>.`);
