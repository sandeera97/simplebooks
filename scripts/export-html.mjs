import { load } from "cheerio";
import { mkdirSync, writeFileSync } from "fs";

const BASE = "https://simplebooks-sandeeratech-2147s-projects.vercel.app";
const OUT = "/Users/dileepasandeera/Desktop/All Projects 2026/Web projects automate website/simplebooks-html-export";

// route -> friendly output file name (also used as the image filename prefix)
const ROUTES = [
  ["/", "index"],
  ["/business-registration", "business-registration"],
  ["/srilanka/services", "services"],
  ["/srilanka/services/auditing", "auditing"],
  ["/srilanka/services/accounting-services", "bookkeeping"],
  ["/srilanka/services/register-a-company", "register-a-company"],
  ["/srilanka/services/company-secretary", "company-secretary"],
  ["/srilanka/services/payroll-managment", "payroll-services"],
  ["/srilanka/services/trademark-registration", "trademark"],
  ["/srilanka/legal", "legal"],
  ["/srilanka/dashboard/accounting-software", "invoicing"],
  ["/srilanka/dashboard/payroll-management-system", "payroll-tool"],
  ["/income-tax-filing", "tax-tool"],
  ["/srilanka/dashboard/accounting-tool", "accounting-tool"],
  ["/srilanka/services/value-added-tax-filling", "vat-tool"],
];

const FONT_LINK =
  '<link rel="preconnect" href="https://fonts.googleapis.com">' +
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
  '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">';

const FONT_STYLE =
  ":root{--font-poppins:'Poppins';--font-inter:'Poppins'}body{font-family:'Poppins',sans-serif}";

const slug = (s) =>
  s.replace(/[[\]]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "image";

const cssUrls = new Set();
const manifest = {}; // page -> [{file, alt}]

async function fetchText(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return await r.text();
}

async function processPage(route, name) {
  const html = await fetchText(BASE + route);
  const $ = load(html);

  // collect stylesheet URLs (to bundle into one styles.css later)
  $('link[rel="stylesheet"]').each((_, el) => {
    const href = $(el).attr("href");
    if (href) cssUrls.add(href.startsWith("http") ? href : BASE + href);
  });

  // strip Next.js runtime + noise
  $("script").remove();
  $("template").remove();
  $('link[rel="preload"]').remove();
  $('link[rel="prefetch"]').remove();
  $('link[rel="stylesheet"]').remove();
  $("next-route-announcer").remove();
  $("[hidden]").each((_, el) => { if ($(el).attr("id")?.startsWith("__next")) $(el).remove(); });

  // head: fonts + local stylesheet + font override
  $("head").append(FONT_LINK);
  $("head").append('<link rel="stylesheet" href="styles.css">');
  $("head").append(`<style>${FONT_STYLE}</style>`);

  // inject <img> into every bracketed placeholder box
  const imgs = [];
  let n = 0;
  $("span").each((_, el) => {
    const $s = $(el);
    const text = $s.text().trim();
    if (!/^\[.*\]$/.test(text)) return;
    const $box = $s.parent();
    if (!$box || $box.length === 0) return;
    if ($box.find("img").length > 0) return; // already has one
    n += 1;
    const alt = text.replace(/[[\]]/g, "").trim();
    const file = `${name}-${String(n).padStart(2, "0")}-${slug(text)}.jpg`;
    // ensure the box positions the overlay image
    const style = ($box.attr("style") || "") + ";position:relative;overflow:hidden";
    $box.attr("style", style);
    $box.prepend(
      `<img src="images/${file}" alt="${alt}" ` +
        `style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block" ` +
        `onerror="this.style.display='none'">`
    );
    imgs.push({ file, alt });
  });
  manifest[name] = imgs;

  const out = "<!DOCTYPE html>\n" + $.html();
  writeFileSync(`${OUT}/${name}.html`, out);
  console.log(`  ${name}.html  (${imgs.length} image slots)`);
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(`${OUT}/images`, { recursive: true });

  console.log("Exporting pages:");
  for (const [route, name] of ROUTES) {
    try { await processPage(route, name); }
    catch (e) { console.log(`  !! ${name}: ${e.message}`); }
  }

  // bundle all unique CSS into one styles.css
  console.log(`Bundling ${cssUrls.size} css file(s) -> styles.css`);
  let css = "";
  for (const u of cssUrls) {
    try { css += `/* ${u} */\n` + (await fetchText(u)) + "\n"; }
    catch (e) { console.log(`  !! css ${u}: ${e.message}`); }
  }
  writeFileSync(`${OUT}/styles.css`, css);

  // manifest / instructions for the designer
  let md = "# Simplebooks — image slots\n\n";
  md += "Drop each image file into the `images/` folder using the EXACT filename below\n";
  md += "(or change the matching `<img src>` in the HTML). Each page's file is `<name>.html`.\n\n";
  let total = 0;
  for (const [, name] of ROUTES) {
    const list = manifest[name] || [];
    total += list.length;
    md += `\n## ${name}.html  (${list.length} images)\n`;
    for (const { file, alt } of list) md += `- images/${file}  —  ${alt}\n`;
  }
  md = md.replace("# Simplebooks — image slots\n", `# Simplebooks — image slots (${total} total)\n`);
  writeFileSync(`${OUT}/IMAGES.md`, md);

  console.log(`\nDone. ${total} image slots across ${ROUTES.length} pages.`);
  console.log(`Output: ${OUT}`);
}

main();
