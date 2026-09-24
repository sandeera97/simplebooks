"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

/* Real reviews, taken from the live site. */
const QUOTES = [
  {
    q: "It's a superb experience that I got from Simplebooks. I got the contract through on time, very good service. Responding via mail to my queries, updating the process — everything is good.",
    name: "Sarath Senanayake",
    role: "Director",
  },
  {
    q: "The entire process was quick, simple and most importantly the team was always willing to answer any queries I had. I would no doubt recommend their services to anyone looking for help in registering their business.",
    name: "Dhanushka",
    role: "Director, Sama Escapes",
  },
  {
    q: "I've registered over 10 businesses with Simplebooks over the years and I would recommend them every step of the way.",
    name: "Bhanuka Harischandra",
    role: "Founder, Surge Global",
  },
  {
    q: "A very professional service by a dynamic and efficient team. The simplebooks team took over the hassle of registering my business and kept me posted on every step of the process.",
    name: "Aqib Aslam",
    role: "Director",
  },
  {
    q: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, followups and overall knowledge of the field and pricing.",
    name: "Kalana Muthumuni",
    role: "",
  },
  {
    q: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.",
    name: "Damith Menaka",
    role: "Director, Animspire",
  },
];

const MINI = [
  { q: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chanux Bro", role: "Director" },
  { q: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
  { q: "Fantastic service, very prompt in communication. Will be coming back to them for my next venture!", name: "Ahamed Nizar", role: "Founder" },
];

const FACES = [
  "/images/avatars/sarath-senanayake.jpg",
  "/images/avatars/dhanushka.jpg",
  "/images/avatars/bhanuka-harischandra.jpg",
  "/images/avatars/damith-menaka.jpg",
];

const DELAY = 6000;

export default function Customers() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((d: 1 | -1) => {
    setDir(d);
    setI((p) => (p + d + QUOTES.length) % QUOTES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    timer.current = window.setTimeout(() => go(1), DELAY);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
    // re-arms on every slide change, so a manual click restarts the countdown
  }, [i, paused, go]);

  // don't keep cycling in a background tab
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const cur = QUOTES[i];

  return (
    <section className="v2_cust" id="customers">
      <div className="v2_wrap">
        <div className="v2_cust_in">
          <div>
            <p className="v2_eyebrow v2_reveal">Customers</p>
            <h2 className="v2_h2 v2_reveal" style={{ marginTop: 16 }}>
              Thousands of repeat customers can&rsquo;t all be wrong<span className="v2_dot">.</span>
            </h2>

            <div className="v2_score v2_reveal">
              <div>
                <p className="v2_score_n">4.9</p>
                <p className="v2_stars">★★★★★</p>
                <p className="v2_score_s">400+ Google reviews</p>
              </div>
              <div>
                <p className="v2_score_n">4,500+</p>
                <p className="v2_score_s" style={{ marginTop: 12 }}>Businesses served</p>
              </div>
            </div>

            <div className="v2_avatars v2_reveal">
              {FACES.map((f) => (
                <img key={f} src={f} alt="" loading="lazy" width={36} height={36} />
              ))}
              <span className="v2_score_s" style={{ marginLeft: 14 }}>Read their words</span>
            </div>
          </div>

          <div
            className="v2_quote v2_reveal"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <p className="v2_quote_mark">&ldquo;</p>

            <div className="v2_quote_stage" aria-live="polite">
              {/* keyed so each slide remounts and replays the enter animation */}
              <div key={i} className={`v2_quote_slide ${dir === 1 ? "from_right" : "from_left"}`}>
                <p className="v2_quote_t">{cur.q}</p>
                <div className="v2_quote_who">
                  <b>{cur.name}</b>
                  {cur.role && <span>{cur.role}</span>}
                </div>
              </div>
            </div>

            <div className="v2_quote_nav">
              <button type="button" onClick={() => go(-1)} aria-label="Previous review">←</button>
              <button type="button" onClick={() => go(1)} aria-label="Next review">→</button>

              <div className="v2_dots" role="tablist" aria-label="Reviews">
                {QUOTES.map((_, n) => (
                  <button
                    key={n}
                    type="button"
                    role="tab"
                    aria-selected={n === i}
                    aria-label={`Review ${n + 1}`}
                    className={`v2_dot_btn${n === i ? " is_on" : ""}`}
                    onClick={() => {
                      setDir(n > i ? 1 : -1);
                      setI(n);
                    }}
                  >
                    <span
                      className="v2_dot_fill"
                      style={{ animationDuration: `${DELAY}ms`, animationPlayState: paused ? "paused" : "running" }}
                    />
                  </button>
                ))}
              </div>

              <span className="v2_quote_count">
                {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="v2_mini">
          {MINI.map((m) => (
            <article key={m.name} className="v2_mini_c v2_reveal">
              <p className="v2_stars">★★★★★</p>
              <p>{m.q}</p>
              <b>{m.name}</b>
              <span>{m.role}</span>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link className="v2_btn v2_btn_ghost" href="/srilanka/testimonials">
            View more reviews <span className="v2_arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
