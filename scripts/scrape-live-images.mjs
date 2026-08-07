/* Scout + download images from the live WP site into public/images/<page>/.
   Writes a manifest (JSON + MD) mapping each downloaded file to its page,
   alt text, dimensions and source URL. */
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { execFileSync } from "child_process";

const LIVE = "https://simplebooks.com";
const ROOT = "/Users/dileepasandeera/Desktop/All Projects 2026/Web projects automate website/simplebooks";
const OUT = `${ROOT}/public/images`;

// our route -> live page URL (page key = folder name under public/images/)
const PAGES = {
  "home":              `${LIVE}/`,
  "business-registration": `${LIVE}/business-registration/`,
  "services":          `${LIVE}/srilanka/services/`,
  "auditing":          `${LIVE}/srilanka/services/auditing/`,
  "bookkeeping":       `${LIVE}/srilanka/services/accounting-services/`,
  "register-a-company":`${LIVE}/srilanka/services/register-a-company/`,
  "company-secretary": `${LIVE}/srilanka/services/company-secretary/`,
  "payroll-services":  `${LIVE}/srilanka/services/payroll-managment/`,
  "trademark":         `${LIVE}/srilanka/services/trademark-registration/`,
  "legal":             `${LIVE}/srilanka/legal/`,
  "invoicing":         `${LIVE}/srilanka/dashboard/accounting-software/`,
  "payroll-tool":      `${LIVE}/srilanka/dashboard/payroll-management-system/`,
  "accounting-tool":   `${LIVE}/srilanka/dashboard/accounting-tool/`,
  "tax-tool":          `${LIVE}/income-tax-filing/`,
  "vat-tool":          `${LIVE}/srilanka/services/value-added-tax-filling/`,
  "tax-ai-bot":        `${LIVE}/whatsapp-ai-chatbot/`,
  "tax-tin":           `${LIVE}/tin-registration/`,
  "tax-corporate":     `${LIVE}/corporate-tax/`,
  "tax-vat":           `${LIVE}/vat/`,
  "tax-apit":          `${LIVE}/srilanka/apit-landing-page/`,
  "tax-foreign":       `${LIVE}/foreign-income-tax/`,
  "tax-sscl":          `${LIVE}/sscl/`,
  "tax-capital-gains": `${LIVE}/capital-gain-tax/`,
  "tax-webinar":       `${LIVE}/webinar/`,
};

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";

async function fetchText(url) {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return await r.text();
}

/* Extract candidate image URLs from a WP page, in DOM order. */
function extractImages(html) {
  const seen = new Set();
  const out = [];
  const imgRe = /<img\b[^>]*>/gi;
  let m;
  while ((m = imgRe.exec(html))) {
    const tag = m[0];
    const attr = (name) => {
      const am = tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, "i"));
      return am ? am[1] : "";
    };
    // prefer largest srcset entry, then data-src, then src
    let url = "";
    const srcset = attr("data-srcset") || attr("srcset");
    if (srcset) {
      const entries = srcset.split(",").map((e) => e.trim().split(/\s+/));
      let best = null, bestW = -1;
      for (const [u, w] of entries) {
        const wv = w ? parseInt(w) : 0;
        if (wv > bestW) { bestW = wv; best = u; }
      }
      url = best || "";
    }
    if (!url) url = attr("data-src") || attr("src");
    if (!url || url.startsWith("data:")) continue;
    if (url.startsWith("//")) url = "https:" + url;
    if (url.startsWith("/")) url = LIVE + url;
    // only this site's uploads/assets
    if (!/simplebooks\.com/i.test(url)) continue;
    // skip obvious junk
    if (/emoji|spinner|loading|blank|pixel/i.test(url)) continue;
    const w = parseInt(attr("width") || "0");
    const h = parseInt(attr("height") || "0");
    if (w && h && (w < 40 || h < 40)) continue; // spacers/icons
    if (seen.has(url)) continue;
    seen.add(url);
    out.push({ url, alt: attr("alt"), width: w || null, height: h || null, cls: attr("class").slice(0, 80) });
  }
  return out;
}

function extForUrl(u) {
  const m = u.match(/\.(png|jpe?g|webp|gif|svg|avif)(\?|$)/i);
  return m ? m[1].toLowerCase().replace("jpeg", "jpg") : "img";
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const manifest = {};
  let totalDl = 0, totalFail = 0;

  for (const [page, liveUrl] of Object.entries(PAGES)) {
    let html;
    try { html = await fetchText(liveUrl); }
    catch (e) { console.log(`!! ${page}: page fetch failed (${e.message})`); manifest[page] = { liveUrl, error: e.message, images: [] }; continue; }
    const imgs = extractImages(html);
    const dir = `${OUT}/${page}`;
    mkdirSync(dir, { recursive: true });
    const rows = [];
    let n = 0;
    for (const img of imgs) {
      n += 1;
      const file = `${String(n).padStart(2, "0")}.${extForUrl(img.url)}`;
      const dest = `${dir}/${file}`;
      if (!existsSync(dest)) {
        try {
          execFileSync("curl", ["-sfL", "--max-time", "60", "-A", UA, "-o", dest, img.url], { stdio: "pipe" });
          totalDl += 1;
        } catch {
          totalFail += 1;
          rows.push({ ...img, file: null, failed: true });
          continue;
        }
      }
      rows.push({ ...img, file: `images/${page}/${file}` });
    }
    manifest[page] = { liveUrl, images: rows };
    console.log(`${page.padEnd(22)} ${rows.filter(r=>r.file).length} images`);
  }

  writeFileSync(`${OUT}/manifest.json`, JSON.stringify(manifest, null, 2));
  // human-readable summary
  let md = "# Live-site images manifest\n";
  for (const [page, info] of Object.entries(manifest)) {
    md += `\n## ${page}  (${info.liveUrl})\n`;
    for (const r of info.images || []) {
      md += `- ${r.file || "FAILED"}  ${r.width || "?"}x${r.height || "?"}  alt: "${r.alt}"\n`;
    }
  }
  writeFileSync(`${OUT}/manifest.md`, md);
  console.log(`\ndownloaded=${totalDl} failed=${totalFail}`);
}

main();
