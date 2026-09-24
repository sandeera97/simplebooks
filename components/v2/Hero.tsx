import Link from "next/link";

const TRUST_FACES = [
  "/images/avatars/sarath-senanayake.jpg",
  "/images/avatars/dhanushka.jpg",
  "/images/avatars/damith-menaka.jpg",
  "/images/avatars/bhanuka-harischandra.jpg",
];

export default function Hero() {
  return (
    <section className="v2_sec v2_hero">
      <div className="v2_grid_bg" />
      <div
        className="v2_blob v2_blob_a"
        style={{ width: 838, height: 838, top: -260, left: -220 }}
      />
      <div
        className="v2_blob v2_blob_b"
        style={{ width: 785, height: 785, top: -140, right: -260 }}
      />

      <div className="v2_wrap v2_hero_in">
        <div>
          <p className="v2_kicker v2_reveal">EST. 2014 · COLOMBO · DHAKA · BENGALURU</p>
          <p className="v2_pill_note v2_reveal">Company formation and compliance for South Asia</p>

          <h1 className="v2_h1 v2_reveal">
            The right place to start your business<span className="v2_dot">.</span>
          </h1>

          <p className="v2_lead v2_hero_p v2_reveal">
            We&rsquo;ve helped over 4,500 business owners set up, run and grow — from incorporation
            and bookkeeping to payroll, tax and legal. One team, one platform, across South Asia.
          </p>

          <div className="v2_hero_cta v2_reveal">
            <Link className="v2_btn v2_btn_primary" href="/srilanka/contact">
              Start now <span className="v2_arrow">→</span>
            </Link>
            <Link className="v2_btn v2_btn_ghost" href="/srilanka/contact">
              Talk to an expert
            </Link>
          </div>

          <div className="v2_namecheck v2_reveal">
            <p className="v2_namecheck_label">Free company name check</p>
            <form
              className="v2_namecheck_row"
              action="/srilanka/company-name-check"
              method="get"
            >
              <input
                type="text"
                name="name"
                placeholder="Your company name"
                aria-label="Your company name"
              />
              <button type="submit" className="v2_btn v2_btn_navy v2_btn_sm">
                Check
              </button>
            </form>
          </div>

          <div className="v2_trust v2_reveal">
            <div className="v2_trust_faces">
              {TRUST_FACES.map((f) => (
                <img key={f} src={f} alt="" width={36} height={36} loading="lazy" />
              ))}
            </div>
            <div>
              <p className="v2_trust_a">4.9 / 5 across 400+ Google reviews</p>
              <p className="v2_trust_b">4,500+ businesses registered since 2014</p>
            </div>
          </div>
        </div>

        <div className="v2_hero_art v2_reveal">
          <div className="v2_hero_card">
            <img
              src="/images/v2/hero-team.png"
              alt="The Simplebooks team celebrating a completed registration"
              width={768}
              height={768}
              fetchPriority="high"
            />
            <div className="v2_hero_foot">
              <span className="v2_hero_foot_live">14 companies registered this week</span>
              <span>Avg. 3 working days</span>
            </div>
          </div>

          <div className="v2_float v2_float_payroll">
            <p className="v2_float_k">Payroll run</p>
            <p className="v2_float_v">42 employees paid</p>
          </div>
          <div className="v2_float v2_float_filing">
            <p className="v2_float_k">Filing</p>
            <p className="v2_float_v">Annual return · Done</p>
          </div>
        </div>
      </div>
    </section>
  );
}
