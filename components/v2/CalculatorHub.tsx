"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { preconnect } from "react-dom";
import "./calculators.css";
import {
  CALCULATORS,
  KINDS,
  MORE_TOOLS,
  SECTIONS,
  SITUATIONS,
  calcAction,
  calcNumber,
  calculatorSearchText,
  matchesSearch,
  toolSearchText,
  type Calculator,
  type Kind,
  type Situation,
} from "@/lib/calculators";

const ANY_SITUATION = "All";
const ANY_KIND = "All types";
type SituationFilter = Situation | typeof ANY_SITUATION;
type KindFilter = Kind | typeof ANY_KIND;

function SearchIcon() {
  return (
    <svg className="v2_calc_search_icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.34-4.34" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* Open the connection to a calculator's app while the visitor is still on its
   card, as their hub does, so the frame paints sooner after the click. */
const warmUp = (c: Calculator) => preconnect(new URL(c.app).origin);

/**
 * The hero, search, filters and cards of /calculators. One component because
 * the search box in the hero drives the list below it.
 */
export default function CalculatorHub() {
  const [query, setQuery] = useState("");
  const [situation, setSituation] = useState<SituationFilter>(ANY_SITUATION);
  const [kind, setKind] = useState<KindFilter>(ANY_KIND);

  const shows = (s: Situation, k: Kind, text: string) =>
    (situation === ANY_SITUATION || situation === s) &&
    (kind === ANY_KIND || kind === k) &&
    matchesSearch(query, text);

  const groups = SECTIONS.map((name) => ({
    name,
    items: CALCULATORS.filter((c) => c.section === name && shows(c.situation, c.kind, calculatorSearchText(c))),
  })).filter((g) => g.items.length > 0);
  const tools = MORE_TOOLS.filter((t) => shows(t.situation, t.kind, toolSearchText(t)));

  const found = groups.reduce((n, g) => n + g.items.length, 0) + tools.length;
  const filtering = query.trim() !== "" || situation !== ANY_SITUATION || kind !== ANY_KIND;

  const reset = () => {
    setQuery("");
    setSituation(ANY_SITUATION);
    setKind(ANY_KIND);
  };

  const showList = (e: FormEvent) => {
    e.preventDefault();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("calculators")?.scrollIntoView({ behavior: still ? "auto" : "smooth" });
  };

  return (
    <>
      <section className="v2_sec v2_calc_hero">
        <div className="v2_grid_bg" />
        <div className="v2_blob v2_blob_a" style={{ width: 680, height: 680, top: -320, right: -220 }} />

        <div className="v2_wrap v2_calc_hero_in">
          <p className="v2_eyebrow">Free tax calculators</p>
          <h1 className="v2_h1">
            Type your income and see your tax in seconds<span className="v2_dot">.</span>
          </h1>
          <p className="v2_lead v2_calc_lead">
            Find your answer. Know your numbers. {CALCULATORS.length + MORE_TOOLS.length} free calculators and
            checks for salary tax, filing, rent, dividends, freelancing and foreign income in Sri Lanka.
          </p>

          <form role="search" className="v2_calc_search" onSubmit={showList}>
            <SearchIcon />
            <input
              type="search"
              aria-label="Search calculators"
              placeholder="Search calculators…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button type="button" className="v2_calc_clear" aria-label="Clear search" onClick={() => setQuery("")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}
            <button type="submit" className="v2_btn v2_btn_primary v2_calc_find" aria-label="Find calculator">
              <span className="v2_calc_find_label">Find calculator</span>
              <Arrow />
            </button>
          </form>

          <div className="v2_calc_filters">
            <div className="v2_calc_chips" role="group" aria-label="Filter by situation">
              <span className="v2_calc_chips_l">By situation</span>
              {[ANY_SITUATION, ...SITUATIONS].map((s) => (
                <button
                  key={s}
                  type="button"
                  className="v2_calc_chip"
                  aria-pressed={situation === s}
                  onClick={() => setSituation(s as SituationFilter)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="v2_calc_chips" role="group" aria-label="Filter by type">
              <span className="v2_calc_chips_l">By type</span>
              {[ANY_KIND, ...KINDS].map((k) => (
                <button
                  key={k}
                  type="button"
                  className="v2_calc_chip"
                  aria-pressed={kind === k}
                  onClick={() => setKind(k as KindFilter)}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v2_sec v2_calc_list" id="calculators" aria-label="Calculators">
        <div className="v2_wrap">
          <p className="v2_calc_status" role="status">
            {filtering && found > 0 ? `${found} ${found === 1 ? "calculator" : "calculators"} found` : ""}
          </p>

          {groups.map((g) => (
            <div className="v2_calc_group" key={g.name}>
              <h2 className="v2_calc_group_h">{g.name}</h2>
              <div className="v2_calc_grid">
                {g.items.map((c) => {
                  const n = calcNumber(c);
                  return (
                    <Link
                      key={c.slug}
                      href={`/calculators/${c.slug}`}
                      className={`v2_calc_card v2_calc_tint_${(Number(n) - 1) % 3}`}
                      onMouseEnter={() => warmUp(c)}
                      onFocus={() => warmUp(c)}
                      onTouchStart={() => warmUp(c)}
                    >
                      <p className="v2_calc_num">CAL {n}</p>
                      <h3 className="v2_calc_title">{c.title}</h3>
                      <div className="v2_calc_art_slot">
                        {/* Their hub's own art, already small WebP on an immutable CDN,
                            so next/image would only re-encode it. */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="v2_calc_art"
                          src={c.art}
                          alt={c.artAlt}
                          loading={Number(n) <= 3 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </div>
                      <span className="v2_calc_go" aria-hidden="true">
                        {calcAction(c)} <Arrow />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {tools.length > 0 && (
            <div className="v2_calc_group">
              <h2 className="v2_calc_group_h">More free tools</h2>
              <p className="v2_calc_group_lead">Payroll, APIT, VAT and withholding tax calculators.</p>
              <div className="v2_calc_tools">
                {/* Plain links: these pages are the static /tools export, which
                    Next's client router cannot fetch. */}
                {tools.map((t) => (
                  <a key={t.href} className="v2_calc_tool" href={t.href}>
                    {t.label} <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {found === 0 && (
            <div className="v2_calc_empty">
              <p>No calculator matches that.</p>
              <span>Try another word, or clear the search and filters.</span>
              <button type="button" className="v2_btn v2_btn_ghost" onClick={reset}>
                Show all calculators
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
