import PaperworkStage from "./PaperworkStage";
import "./paperwork.css";

/**
 * Homepage showcase: the forms a Sri Lankan company has to deal with go in,
 * and a registered, compliant business comes out. The heading is rendered on
 * the server; the stage is the animated part.
 */
export default function PaperworkStory() {
  return (
    <section className="pw_sec" aria-labelledby="pw-title">
      <div className="v2_grid_bg" />
      <div className="v2_wrap">
        <div className="pw_head">
          <div>
            <p className="v2_eyebrow v2_reveal">The Simplebooks way</p>
            <h2 id="pw-title" className="v2_h2 v2_reveal">
              Paperwork in. A running business out<span className="v2_dot">.</span>
            </h2>
          </div>
          <p className="v2_lead v2_reveal">
            Form 1, TIN, VAT, EPF, Form 15 — running a company in Sri Lanka comes with a stack of it.
            We take all of it in, and hand you back a business that is registered, compliant and trading.
          </p>
        </div>
        <PaperworkStage />
      </div>
    </section>
  );
}
