#!/usr/bin/env node
/**
 * Pull the blog across from the live WordPress site.
 *
 *   node scripts/migrate-blog.mjs            # posts + images
 *   node scripts/migrate-blog.mjs --no-images
 *
 * The live site exposes the WordPress REST API, so this reads structured posts
 * rather than scraping pages — title, body, author, tags and featured image all
 * arrive as data, and a re-run picks up anything newly published.
 *
 * Posts keep their live URLs (/srilanka/<slug>, and /srilanka/si/<slug> for the
 * Sinhala ones). Those are the URLs Google has indexed, so changing them would
 * throw away the ranking this content has built up.
 *
 * Output:
 *   content/blog/index.json         archive listing, no bodies — keeps the
 *                                   index page cheap to render
 *   content/blog/posts/<slug>.json  one file per post, body included
 *   public/blog/<slug>/<file>       every image, pulled local
 *
 * Two posts are skipped: they were hand-built earlier with their own FAQ
 * components and are better than a straight import.
 */

import { writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const API = "https://simplebooks.com/srilanka/wp-json/wp/v2/posts";
const SITE = "https://simplebooks.com";
const ROOT = path.resolve(import.meta.dirname, "..");
const CONTENT = path.join(ROOT, "content", "blog");
const POSTS_DIR = path.join(CONTENT, "posts");
const IMAGE_DIR = path.join(ROOT, "public", "blog");

const WITH_IMAGES = !process.argv.includes("--no-images");

/* Already built by hand, with FAQ blocks an import cannot reproduce. */
const SKIP = new Set([
  "new-update-to-company-registration-law-beneficial-ownership",
  "tin-registration-in-sri-lanka-latest-update",
]);

/**
 * The live site tags posts far more finely than the archive filters, so the
 * long tail is folded into the buckets the filter actually offers. Left
 * unmapped, a tag simply becomes "Other" rather than a filter nobody can click.
 */
const CATEGORY_BY_TAG = {
  Tax: "Tax",
  "Income Tax": "Tax",
  "Income tax deduction": "Tax",
  "Tax Calculation": "Tax",
  "Business Registration": "Business Registration",
  "Secretarial Service": "Secretarial Service",
  "Payroll Management": "Payroll Management",
  "Legal Services": "Legal Services",
  Bookkeeping: "Bookkeeping",
};

/**
 * When the live tags say nothing useful, read the slug.
 *
 * A third of the posts are tagged only "General", "Trending" or "Uncategorized"
 * — budget updates, the VAT registration guide, the APIT filing guide. Left as
 * tagged they all pile into "Other" and the archive filter stops being worth
 * clicking. The slug is matched rather than the title because the seven Sinhala
 * posts have Sinhala titles and English slugs.
 *
 * Keywords match whole slug words, not substrings: "apit" must not fire on
 * "working-capital-loan". A trailing * matches a word that starts with it, so
 * "tax*" covers taxes and taxation. Order matters — the first bucket wins.
 */
const KEYWORDS = [
  ["Payroll Management", ["payroll", "epf", "etf", "salary", "salaries", "gratuity", "wages"]],
  ["Secretarial Service", [
    "form-6", "form-13", "form-15", "form-20", "annual-return*", "registered-office",
    "articles-of-association", "company-secretary", "liquidation", "close-a-business",
    "director*", "share*",
  ]],
  ["Bookkeeping", ["bookkeeping", "accountant*", "accounting", "quickbooks", "audit*", "invoic*"]],
  ["Legal Services", [
    "agreement*", "contract*", "power-of-attorney", "mou", "labour-law", "land",
    "trademark*", "drafting",
  ]],
  ["Tax", [
    "tax*", "vat", "svat", "sscl", "apit", "paye", "withholding", "budget", "ird",
    "stamp-duty", "capital-gain*", "tin", "levy", "deadline", "customs",
  ]],
  ["Business Registration", [
    "registration", "register*", "registering", "sole-proprietorship*", "partnership*",
    "boi", "ngo", "fdi", "incorporat*", "start-a-business", "business-ideas",
    "name-a-business", "company-name", "overseas-company", "dashboard",
  ]],
];

/**
 * True when every word of `keyword` appears, in order, as whole words in the
 * hyphen-delimited `haystack`.
 */
function hasKeyword(haystack, keyword) {
  const prefix = keyword.endsWith("*");
  const body = prefix ? keyword.slice(0, -1) : keyword;
  const pattern = `-${body}${prefix ? "[a-z0-9]*" : ""}-`;
  return haystack.includes(pattern) || new RegExp(pattern).test(haystack);
}

/* Most specific first: a post tagged both "Trending" and "Tax" is a tax post. */
const TAG_PRIORITY = [
  "Tax",
  "Income Tax",
  "Income tax deduction",
  "Tax Calculation",
  "Business Registration",
  "Secretarial Service",
  "Payroll Management",
  "Legal Services",
  "Bookkeeping",
];

const ENTITIES = {
  "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#039;": "'",
  "&#39;": "'", "&apos;": "'", "&nbsp;": " ", "&#8211;": "–", "&#8212;": "—",
  "&#8216;": "‘", "&#8217;": "’", "&#8220;": "“", "&#8221;": "”",
  "&#8230;": "…", "&hellip;": "…", "&rsquo;": "’", "&lsquo;": "‘",
  "&ldquo;": "“", "&rdquo;": "”", "&ndash;": "–", "&mdash;": "—",
};

function decode(s = "") {
  return s
    .replace(/&[a-z]+;|&#\d+;/gi, (m) => ENTITIES[m] ?? m)
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
}

function stripTags(s = "") {
  return decode(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

async function fetchAllPosts() {
  const all = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`${API}?per_page=100&page=${page}&_embed=1`);
    if (res.status === 400) break; // past the last page
    if (!res.ok) throw new Error(`WP API page ${page}: ${res.status}`);
    const batch = await res.json();
    all.push(...batch);
    const total = Number(res.headers.get("x-wp-totalpages") || 1);
    if (page >= total) break;
  }
  return all;
}

/** "https://simplebooks.com/srilanka/si/epf-etf-sinhala" -> "si/epf-etf-sinhala" */
function routeFor(post) {
  const after = post.link.split("/srilanka/")[1] ?? post.slug;
  return after.replace(/\/+$/, "");
}

/** A route used as one path segment on disk: "si/x" -> "si__x". */
const flat = (route) => route.replace(/\//g, "__");

function categoryFor(post) {
  const tags = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((t) => t?.taxonomy === "post_tag")
    .map((t) => t.name);
  for (const want of TAG_PRIORITY) {
    if (tags.includes(want)) return CATEGORY_BY_TAG[want];
  }

  /* Nothing specific on the post itself, so fall back to the slug. */
  /* Delimited with hyphens so a keyword can be matched as a whole word. */
  const haystack = `-${routeFor(post)}-${stripTags(post.title?.rendered ?? "")}-`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
  for (const [category, words] of KEYWORDS) {
    if (words.some((w) => hasKeyword(haystack, w))) return category;
  }
  return "Other";
}

function imageName(url, taken) {
  let base = decodeURIComponent(url.split("?")[0].split("/").pop() || "image");
  base = base.replace(/[^a-zA-Z0-9._-]/g, "-").slice(-80);
  if (!/\.(png|jpe?g|gif|webp|svg|avif)$/i.test(base)) base += ".jpg";
  let name = base;
  for (let i = 2; taken.has(name); i++) {
    name = base.replace(/(\.[^.]+)$/, `-${i}$1`);
  }
  taken.add(name);
  return name;
}

async function download(url, dest) {
  if (existsSync(dest)) return true;
  try {
    const res = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0 simplebooks-migration" },
      signal: AbortSignal.timeout(45_000),
    });
    if (!res.ok) return false;
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    return true;
  } catch {
    return false;
  }
}

/**
 * WordPress markup into something this site can serve.
 *
 * Images are rewritten to the copies pulled local — the live site hotlinks 22
 * of them straight from googleusercontent.com, which would rot on its own
 * regardless of what happens to the WordPress install.
 */
function cleanHtml(html, imageMap, route, headings) {
  let out = html;
  const headingIds = new Set();

  /* A Divi wrapper the editor leaves behind as literal text. */
  out = out.replace(/\[\/?et_pb_section[^\]]*\]/g, "");

  /* srcset points at WordPress's resized variants, none of which were pulled
     local. Dropping it leaves src, which was. */
  out = out.replace(/\s(?:srcset|sizes|data-srcset|data-lazy-srcset)="[^"]*"/g, "");

  out = out.replace(/<img([^>]*)>/g, (m, attrs) => {
    const src = attrs.match(/\ssrc="([^"]*)"/);
    if (!src) return m;
    /* Rebuilt rather than patched in place: the editor writes these as
       self-closing, and splicing around the src left the trailing slash
       stranded mid-tag (<img alt=""/ src="…">). */
    const rest = attrs
      .replace(src[0], "")
      .replace(/\s(?:loading|decoding)="[^"]*"/g, "")
      .replace(/\s*\/\s*$/, "")
      .trim();
    if (imageMap.get(src[1]) === null) return "";
    const local = imageMap.get(src[1]) ?? src[1];
    return `<img${rest ? ` ${rest}` : ""} src="${local}" loading="lazy" decoding="async">`;
  });

  /* The YouTube plugin ships a wall of player parameters and a numbered id.
     Keep the video, drop the plugin. */
  out = out.replace(/<iframe([^>]*?)src="([^"]+)"([^>]*)><\/iframe>/g, (m, pre, src, post) => {
    const clean = src.replace(/\?.*$/, "");
    const title = (`${pre}${post}`.match(/title="([^"]*)"/) || [, "Video"])[1];
    return (
      `<iframe src="${clean}" title="${title}" loading="lazy" ` +
      `frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; ` +
      `gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
  });

  /* Absolute links back to the site become relative, so they keep working on
     staging and on whatever domain this ends up on. */
  out = out.replace(new RegExp(`(href=")${SITE}(/[^"]*)"`, "g"), "$1$2\"");
  /* The live site has at least one link written without the slash —
     href="https://simplebooks.comcontact/" — which 404s there too. */
  out = out.replace(new RegExp(`(href=")${SITE}(?!/)([^"]*)"`, "g"), '$1/srilanka/$2"');
  out = out.replace(/(href="\/srilanka\/[^"]*?)\/"/g, '$1"');

  /* Headings need a unique id: the contents sidebar keys off it and in-page
     anchors target it. WordPress numbers them, but not always and not always
     uniquely — three posts ship the same id twice, which is a bug on the live
     site too. The first use of a duplicate keeps the id, so any existing
     "#9" link still lands exactly where it used to; later ones are renamed.
     A heading with no id gets one from its text, falling back to its position
     when that slugifies to nothing, as the Sinhala headings do. */
  let headingNo = 0;
  out = out.replace(/<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/g, (m, tag, attrs, inner) => {
    headingNo++;
    const existing = attrs.match(/\sid="([^"]*)"/);

    if (existing) {
      const id = existing[1];
      if (!headingIds.has(id)) {
        headingIds.add(id);
        if (tag === "h2") headings.push({ id, label: headingLabel(inner) });
        return m;
      }
      const unique = `${id}-${headingNo}`;
      headingIds.add(unique);
      if (tag === "h2") headings.push({ id: unique, label: headingLabel(inner) });
      return `<${tag}${attrs.replace(existing[0], ` id="${unique}"`)}>${inner}</${tag}>`;
    }

    const text = decode(inner.replace(/<[^>]+>/g, ""));
    let id =
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60) || `section-${headingNo}`;
    if (headingIds.has(id)) id = `${id}-${headingNo}`;
    headingIds.add(id);
    if (tag === "h2") headings.push({ id, label: headingLabel(inner) });
    return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
  });

  /* The editor leaves runs of blank lines between blocks. */
  out = out.replace(/\n{3,}/g, "\n\n").trim();

  return out;
}

const headingLabel = (inner) => stripTags(inner).slice(0, 110);

async function main() {
  console.log("Fetching posts from the live site…");
  const posts = await fetchAllPosts();
  console.log(`  ${posts.length} posts`);

  await mkdir(POSTS_DIR, { recursive: true });
  await mkdir(IMAGE_DIR, { recursive: true });

  const index = [];
  let imagesOk = 0;
  let imagesFailed = [];

  for (const post of posts) {
    const route = routeFor(post);
    if (SKIP.has(route)) {
      console.log(`  skip (hand-built)  ${route}`);
      continue;
    }

    const key = flat(route);
    const html = post.content?.rendered ?? "";
    const featured = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

    /* Collect every image this post references, then pull them all local. */
    const urls = new Set();
    for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      if (m[1].startsWith("http")) urls.add(m[1]);
    }
    if (featured?.startsWith("http")) urls.add(featured);

    const imageMap = new Map();
    if (WITH_IMAGES && urls.size) {
      const dir = path.join(IMAGE_DIR, key);
      await mkdir(dir, { recursive: true });
      const taken = new Set();
      for (const url of urls) {
        const name = imageName(url, taken);
        const ok = await download(url, path.join(dir, name));
        if (ok) {
          imageMap.set(url, `/blog/${key}/${name}`);
          imagesOk++;
        } else {
          /* null, not absent: cleanHtml drops the tag rather than leaving a
             broken image. All three of these already 404 on the live site. */
          imageMap.set(url, null);
          imagesFailed.push(url);
        }
      }
    }

    /* Collected while ids are assigned, so the contents sidebar can be rendered
       from data instead of scanning the DOM — see components/blog/TableOfContents. */
    const headings = [];
    const cleaned = cleanHtml(html, imageMap, route, headings);

    const record = {
      route,
      slug: route.split("/").pop(),
      title: decode(post.title?.rendered ?? ""),
      excerpt: stripTags(post.excerpt?.rendered ?? "").slice(0, 300),
      date: post.date,
      modified: post.modified,
      author: post._embedded?.author?.[0]?.name ?? "Team simplebooks",
      category: categoryFor(post),
      image: (featured && imageMap.get(featured)) || featured,
      seoTitle: decode(post.yoast_head_json?.title ?? ""),
      seoDescription: decode(post.yoast_head_json?.description ?? ""),
      headings,
      html: cleaned,
    };

    await writeFile(
      path.join(POSTS_DIR, `${key}.json`),
      JSON.stringify(record, null, 2) + "\n"
    );

    const { html: _body, headings: _h, seoTitle: _st, seoDescription: _sd, ...summary } = record;
    index.push(summary);
  }

  /* Newest first, which is how the archive reads. */
  index.sort((a, b) => b.date.localeCompare(a.date));
  await writeFile(path.join(CONTENT, "index.json"), JSON.stringify(index, null, 2) + "\n");

  console.log(`\nWrote ${index.length} posts to content/blog/`);
  console.log(`Images: ${imagesOk} saved, ${imagesFailed.length} failed`);
  for (const u of imagesFailed.slice(0, 12)) console.log(`   failed: ${u}`);

  const byCat = {};
  for (const p of index) byCat[p.category] = (byCat[p.category] ?? 0) + 1;
  console.log("Categories:", byCat);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
