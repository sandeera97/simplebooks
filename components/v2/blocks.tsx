"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { avatarFor } from "@/components/avatars";

/* Headings end in the brand's orange full stop, unless the copy already
   ends in its own punctuation ("…secretary?" would otherwise read "?."). */
const ENDS_PUNCTUATED = /[?!.]$/;
const brandDot = (title: string) => !ENDS_PUNCTUATED.test(title.trim());

/* ============================ Hero ============================ */
export function PageHero({
  eyebrow,
  title,
  dot = true,
  lead,
  note,
  primary,
  secondary,
  stats,
  visual,
  children,
}: {
  eyebrow: string;
  title: string;
  dot?: boolean;
  lead?: string;
  note?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  stats?: { n: string; l: string }[];
  /** An image beside the text (website audit: "break the grid"). The page's
   *  own illustration from the live site, framed, with one short fact. */
  visual?: HeroVisual;
  children?: React.ReactNode;
}) {
  const text = (
    <>
      <p className="v2_eyebrow v2_reveal">{eyebrow}</p>
      <h1 className="v2_h1 v2_reveal">
        {title}
        {dot && brandDot(title) && <span className="v2_dot">.</span>}
      </h1>
      {lead && <p className="v2_lead v2_phero_lead v2_reveal">{lead}</p>}

      {(primary || secondary) && (
        <div className="v2_phero_cta v2_reveal">
          {primary && (
            <Link className="v2_btn v2_btn_primary" href={primary.href}>
              {primary.label} <span className="v2_arrow">→</span>
            </Link>
          )}
          {secondary && (
            <Link className="v2_btn v2_btn_ghost" href={secondary.href}>
              {secondary.label}
            </Link>
          )}
        </div>
      )}

      {note && <p className="v2_phero_note v2_reveal">{note}</p>}

      {stats && (
        <div className="v2_phero_stats v2_reveal">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="v2_phero_stat_n">{s.n}</p>
              <p className="v2_phero_stat_l">{s.l}</p>
            </div>
          ))}
        </div>
      )}

      {children}
    </>
  );

  return (
    <section className={`v2_sec v2_phero${visual ? " v2_phero_split" : ""}`}>
      <div className="v2_grid_bg" />
      <div className="v2_blob v2_blob_a" style={{ width: 760, height: 760, top: -300, left: -220 }} />
      <div className="v2_blob v2_blob_b" style={{ width: 680, height: 680, top: -180, right: -240 }} />

      <div className="v2_wrap v2_phero_in">
        {visual ? (
          <>
            <div className="v2_phero_text">{text}</div>
            <HeroFigure {...visual} />
          </>
        ) : (
          text
        )}
      </div>
    </section>
  );
}

export type HeroVisual = { src: string; w: number; h: number; alt?: string; chip?: string };

/* Not a .v2_reveal: this is usually the largest paint on the page, so it
   must not wait for hydration to become visible. It rises in with CSS. */
function HeroFigure({ src, w, h, alt = "", chip }: HeroVisual) {
  return (
    <figure className="v2_phero_visual">
      <div className="v2_phero_frame">
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          sizes="(max-width: 1000px) 86vw, 520px"
          fetchPriority="high"
          loading="eager"
        />
      </div>
      {chip && (
        <figcaption className="v2_phero_chip">
          <i aria-hidden="true" />
          {chip}
        </figcaption>
      )}
    </figure>
  );
}

/* ====================== Section heading ======================= */
export function SecHead({
  eyebrow,
  title,
  lead,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "v2_sec_head_center" : "v2_sec_head_left"}>
      {eyebrow && <p className="v2_eyebrow v2_reveal">{eyebrow}</p>}
      <h2 className="v2_h2 v2_reveal">
        {title}
        {brandDot(title) && <span className="v2_dot">.</span>}
      </h2>
      {lead && <p className="v2_lead v2_reveal" style={{ marginTop: 18 }}>{lead}</p>}
    </div>
  );
}

/* ======================= Feature cards ======================== */
export function FeatureGrid({
  items,
  cols = 3,
}: {
  items: { t: string; d: string; tags?: string[] }[];
  cols?: 2 | 3 | 4;
}) {
  return (
    <div className={`v2_cards v2_cards_${cols}`}>
      {items.map((f, i) => (
        // Cycles four brand tints so a row of cards doesn't read as one block (website audit).
        <article key={f.t} className={`v2_card v2_card_fg v2_fg_c${i % 4} v2_reveal`}>
          <div className="v2_card_top">
            <span className="v2_card_num">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="v2_h3">{f.t}</h3>
          <p className="v2_body">{f.d}</p>
          {f.tags && (
            <div className="v2_tags">
              {f.tags.map((t) => (
                <span key={t} className="v2_tag">{t}</span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

/* ========================== Steps ============================= */
export function Steps({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className={`v2_steps${items.length === 4 ? " v2_steps_4" : ""}`}>
      {items.map((s, i) => (
        <article key={s.t} className="v2_step v2_reveal">
          <div className="v2_step_top">
            <span className="v2_step_n">{i + 1}</span>
            <span className="v2_step_line" />
          </div>
          <h3>{s.t}</h3>
          <p className="v2_body">{s.d}</p>
        </article>
      ))}
    </div>
  );
}

/* ====================== Checklist split ======================= */
export function CheckSplit({
  eyebrow,
  title,
  lead,
  items,
  cta,
  aside,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items: string[];
  cta?: { label: string; href: string };
  aside?: React.ReactNode;
}) {
  return (
    <div className="v2_why_in">
      <div>
        <p className="v2_eyebrow v2_reveal">{eyebrow}</p>
        <h2 className="v2_h2 v2_reveal" style={{ marginTop: 16 }}>
          {title}
          {brandDot(title) && <span className="v2_dot">.</span>}
        </h2>
        {lead && (
          <p className="v2_lead v2_reveal" style={{ margin: "22px 0 26px", maxWidth: 520 }}>
            {lead}
          </p>
        )}
        <ul className="v2_start_list v2_reveal" style={{ margin: "0 0 30px" }}>
          {items.map((t) => (
            <li key={t}>
              <span className="v2_mark v2_mark_good">✓</span>
              {t}
            </li>
          ))}
        </ul>
        {cta && (
          <Link className="v2_btn v2_btn_navy v2_reveal" href={cta.href}>
            {cta.label} <span className="v2_arrow">→</span>
          </Link>
        )}
      </div>
      <div className="v2_reveal">{aside}</div>
    </div>
  );
}

/* ====================== Before / after ======================== */
export function Compare({
  badTitle,
  bad,
  goodTitle,
  good,
}: {
  badTitle: string;
  bad: string[];
  goodTitle: string;
  good: string[];
}) {
  return (
    <div className="v2_compare">
      <div className="v2_col v2_col_bad v2_reveal">
        <p className="v2_col_h">{badTitle}</p>
        <ul>
          {bad.map((t) => (
            <li key={t}><span className="v2_mark v2_mark_bad">✕</span>{t}</li>
          ))}
        </ul>
      </div>
      <div className="v2_col v2_col_good v2_reveal">
        <p className="v2_col_h">{goodTitle}</p>
        <ul>
          {good.map((t) => (
            <li key={t}><span className="v2_mark v2_mark_good">✓</span>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ========================= Pricing ============================ */
export function Pricing({
  plans,
  note,
  href = "/srilanka/contact",
}: {
  plans: { name: string; price: string; per?: string; blurb?: string; features: string[]; featured?: boolean; cta?: string }[];
  note?: string;
  /** Where the plan buttons go. A page with a lead form passes "#consultation". */
  href?: string;
}) {
  return (
    <>
      <div className={`v2_price v2_price_${plans.length}`}>
        {plans.map((p) => (
          <article key={p.name} className={`v2_plan v2_reveal${p.featured ? " is_featured" : ""}`}>
            {p.featured && <span className="v2_plan_flag">Most popular</span>}
            <p className="v2_plan_name">{p.name}</p>
            <p className="v2_plan_price">
              {p.price}
              {p.per && <span>{p.per}</span>}
            </p>
            {p.blurb && <p className="v2_plan_blurb">{p.blurb}</p>}
            <ul className="v2_plan_list">
              {p.features.map((f) => (
                <li key={f}><span className="v2_mark v2_mark_good">✓</span>{f}</li>
              ))}
            </ul>
            <Link
              href={href}
              className={`v2_btn ${p.featured ? "v2_btn_primary" : "v2_btn_ghost"}`}
            >
              {p.cta ?? "Get started"} <span className="v2_arrow">→</span>
            </Link>
          </article>
        ))}
      </div>
      {note && <p className="v2_price_note v2_reveal">{note}</p>}
    </>
  );
}

/* =========================== FAQ ============================== */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="v2_faq2">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`v2_faq2_item v2_reveal${isOpen ? " is_open" : ""}`}>
            <button
              type="button"
              className="v2_faq2_q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <span className="v2_faq2_s" aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            <div className="v2_faq2_wrap">
              <div className="v2_faq2_inner">
                <p className="v2_faq2_a">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ========================= CTA band =========================== */
export function CtaBand({
  title,
  lead,
  primary,
  secondary,
}: {
  title: string;
  lead?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="v2_sec v2_ctaband">
      <div className="v2_grid_bg" style={{ opacity: 0.4 }} />
      <div className="v2_blob v2_blob_a" style={{ width: 560, height: 560, top: -220, right: 40 }} />
      <div className="v2_wrap v2_ctaband_in">
        <h2 className="v2_h2 v2_reveal">
          {title}
          {brandDot(title) && <span className="v2_dot">.</span>}
        </h2>
        {lead && <p className="v2_ctaband_lead v2_reveal">{lead}</p>}
        <div className="v2_phero_cta v2_reveal" style={{ justifyContent: "center" }}>
          <Link className="v2_btn v2_btn_primary" href={primary.href}>
            {primary.label} <span className="v2_arrow">→</span>
          </Link>
          {secondary && (
            <Link className="v2_btn v2_btn_ghost v2_btn_on_dark" href={secondary.href}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/* ========================= Reviews ============================ */
/* The customer's own photo from the live site when we have one, otherwise
   their initial. Never a stand-in face. */
function ReviewAvatar({ name }: { name: string }) {
  const src = avatarFor(name);
  if (src) {
    return <img className="v2_mini_av" src={src} alt="" width={44} height={44} loading="lazy" decoding="async" />;
  }
  return (
    <span className="v2_mini_av v2_mini_av_i" aria-hidden="true">
      {name.trim().charAt(0).toUpperCase()}
    </span>
  );
}

export function ReviewStrip({
  items,
}: {
  items: { q: string; name: string; role?: string }[];
}) {
  return (
    <div className="v2_mini">
      {items.map((m) => (
        <article key={m.name + m.q.slice(0, 12)} className="v2_mini_c v2_reveal">
          <p className="v2_stars">★★★★★</p>
          <p>{m.q}</p>
          <div className="v2_mini_who">
            <ReviewAvatar name={m.name} />
            <div>
              <b>{m.name}</b>
              {m.role && <span>{m.role}</span>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* =================== Alternating service section =================== */
export function SplitSection({
  eyebrow,
  title,
  paras,
  bullets,
  cta,
  flip = false,
  aside,
}: {
  eyebrow?: string;
  title: string;
  paras: string[];
  bullets?: string[];
  cta?: { label: string; href: string };
  flip?: boolean;
  aside?: React.ReactNode;
}) {
  return (
    <div className={`v2_split${flip ? " is_flip" : ""}`}>
      <div className="v2_split_copy">
        {eyebrow && <p className="v2_eyebrow v2_reveal">{eyebrow}</p>}
        <h2 className="v2_h2 v2_split_h v2_reveal">
          {title}
          {brandDot(title) && <span className="v2_dot">.</span>}
        </h2>
        {paras.map((t) => (
          <p key={t.slice(0, 24)} className="v2_lead v2_split_p v2_reveal">
            {t}
          </p>
        ))}
        {bullets && (
          <ul className="v2_chips v2_reveal">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {cta && (
          <Link className="v2_btn v2_btn_navy v2_reveal" href={cta.href} style={{ marginTop: 26 }}>
            {cta.label} <span className="v2_arrow">→</span>
          </Link>
        )}
      </div>
      {aside && <div className="v2_split_aside v2_reveal">{aside}</div>}
    </div>
  );
}
