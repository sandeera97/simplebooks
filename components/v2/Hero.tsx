import Hero3D from "./Hero3D";
import { HERO_CHAPTERS } from "./heroChapters";
import "./hero3d.css";

const TRUST_FACES = [
  "/images/avatars/sarath-senanayake.jpg",
  "/images/avatars/dhanushka.jpg",
  "/images/avatars/damith-menaka.jpg",
  "/images/avatars/bhanuka-harischandra.jpg",
];

/**
 * The headline is the four services, one per line, so a visitor knows what the
 * company does before reading anything else. Hero3D lights each line as the
 * video reaches that chapter.
 *
 * Entrances here are CSS (.h3d_rise) rather than the JS-driven .v2_reveal used
 * further down the page: this is the largest paint on the site, and it should
 * not sit invisible until the page hydrates.
 */
export default function Hero() {
  return (
    <section className="v2_sec v2_hero h3d_hero">
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
          <p className="v2_kicker h3d_rise" style={{ "--d": 0 } as React.CSSProperties}>
            EST. 2016 · COLOMBO · DHAKA · BENGALURU
          </p>
          <p className="v2_pill_note h3d_rise" style={{ "--d": 1 } as React.CSSProperties}>
            The right place to start your business
          </p>

          <h1 className="v2_h1 h3d_h1 h3d_rise_solid" data-hero-lines>
            {HERO_CHAPTERS.map((c, i) => (
              <span key={c.line} className="h3d_line" data-hero-line={i}>
                {c.line}
              </span>
            ))}
          </h1>

          <p className="v2_lead v2_hero_p h3d_rise" style={{ "--d": 3 } as React.CSSProperties}>
            One team and one platform behind 10000+ businesses since 2016, with tax and
            compliance handled alongside, across Sri Lanka, Bangladesh and India.
          </p>

          <div className="v2_hero_cta h3d_rise" style={{ "--d": 4 } as React.CSSProperties}>
            {/* Start now opens the dashboard, where registration begins.
                Talk to an expert stays on this page: #start is the form below. */}
            <a className="v2_btn v2_btn_primary" href="https://dashboard.simplebooks.com">
              Start now <span className="v2_arrow">→</span>
            </a>
            <a className="v2_btn v2_btn_ghost" href="#start">
              Talk to an expert
            </a>
          </div>

          <div className="v2_namecheck h3d_rise" style={{ "--d": 5 } as React.CSSProperties}>
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

          <div className="v2_trust h3d_rise" style={{ "--d": 6 } as React.CSSProperties}>
            <div className="v2_trust_faces">
              {TRUST_FACES.map((f) => (
                <img key={f} src={f} alt="" width={36} height={36} loading="lazy" />
              ))}
            </div>
            <div>
              <p className="v2_trust_a">4.9 / 5 across 1400+ Google reviews</p>
              <p className="v2_trust_b">10000+ businesses registered since 2016</p>
            </div>
          </div>
        </div>

        <Hero3D />
      </div>
    </section>
  );
}
