"use client";

import { useState, FormEvent } from "react";
import { submitLead, LeadNotConfiguredError } from "@/lib/leads";

const PERKS = [
  "Fixed quote before any work starts",
  "Sinhala, English or Tamil — your choice",
  "One consultant stays with you after setup",
];

const SERVICES = [
  "Business registration",
  "Bookkeeping",
  "Payroll",
  "Tax",
  "Company secretary",
  "Legal",
  "Trademark",
  "General",
];

export default function GetStarted() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFailed(false);

    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    try {
      await submitLead({
        firstName: get("firstName"),
        lastName: get("lastName"),
        email: get("email"),
        phoneCountry: get("phoneCountry"),
        phone: get("phone"),
        service: get("service"),
        language: get("language"),
        message: get("message"),
        source: "/",
      });
      setSent(true);
    } catch (err) {
      /* Showing "Thank you" for an enquiry that never left the browser is
         worse than an error — the visitor stops trying. */
      if (!(err instanceof LeadNotConfiguredError)) console.error(err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="v2_sec v2_sec_pad" id="start">
      <div className="v2_grid_bg" />
      <div className="v2_wrap v2_start_in">
        <div>
          <p className="v2_eyebrow v2_reveal">Get started</p>
          <h2 className="v2_h2 v2_reveal" style={{ marginTop: 16 }}>
            Set up a free consultation<span className="v2_dot">.</span>
          </h2>
          <p className="v2_lead v2_reveal" style={{ marginTop: 22, maxWidth: 480 }}>
            Thirty minutes with a consultant who has done this several thousand times. No
            obligation, no sales script.
          </p>

          <ul className="v2_start_list v2_reveal">
            {PERKS.map((p) => (
              <li key={p}>
                <span className="v2_mark v2_mark_good">✓</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="v2_contact v2_reveal">
            <div>
              <i>CALL</i>
              <b>0117 555 878</b>
            </div>
            <div>
              <i>VISIT</i>
              <b>345 Galle Rd, Colombo 3</b>
            </div>
          </div>
        </div>

        <div className="v2_form v2_reveal">
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <p style={{ fontSize: 44, marginBottom: 14 }}>🎉</p>
              <h3 className="v2_h3" style={{ marginBottom: 8 }}>Thank you!</h3>
              <p className="v2_body">
                We&rsquo;ve received your enquiry and will reply within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <p className="v2_form_req">
                <span>*</span> indicates a required field
              </p>

              <div className="v2_grid2">
                <div className="v2_field">
                  <label htmlFor="v2fn">First name <span>*</span></label>
                  <input id="v2fn" name="firstName" className="v2_input" required placeholder="Nimal" />
                </div>
                <div className="v2_field">
                  <label htmlFor="v2ln">Last name <span>*</span></label>
                  <input id="v2ln" name="lastName" className="v2_input" required placeholder="Perera" />
                </div>
              </div>

              <div className="v2_field">
                <label htmlFor="v2em">Email <span>*</span></label>
                <input id="v2em" type="email" name="email" className="v2_input" required placeholder="you@company.lk" />
              </div>

              <div className="v2_field">
                <label htmlFor="v2ph">Phone <span>*</span></label>
                <div className="v2_phone">
                  <select name="phoneCountry" className="v2_select" aria-label="Country code">
                    <option>🇱🇰 +94</option>
                    <option>🇧🇩 +880</option>
                    <option>🇮🇳 +91</option>
                  </select>
                  <input id="v2ph" type="tel" name="phone" className="v2_input" required placeholder="77 123 4567" />
                </div>
              </div>

              <div className="v2_field">
                <label htmlFor="v2sv">Service required <span>*</span></label>
                <select id="v2sv" name="service" className="v2_select" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="v2_field">
                <label htmlFor="v2lg">Preferred language</label>
                <select id="v2lg" name="language" className="v2_select" defaultValue="English">
                  <option>English</option>
                  <option>Sinhala</option>
                  <option>Tamil</option>
                </select>
              </div>

              <div className="v2_field">
                <label htmlFor="v2ms">Your message (optional)</label>
                <textarea
                  id="v2ms"
                  name="message"
                  className="v2_textarea"
                  placeholder="Tell us a little about the business"
                />
              </div>

              {failed && (
                <p className="v2_leadform_err" role="alert">
                  Sorry — we couldn&rsquo;t send that just now. Please call{" "}
                  <a href="tel:+94117555878">0117 555 878</a> or email{" "}
                  <a href="mailto:info@simplebooks.com">info@simplebooks.com</a>{" "}
                  and we&rsquo;ll pick it up.
                </p>
              )}

              <button type="submit" className="v2_btn v2_btn_primary" disabled={loading}>
                {loading ? "Sending…" : "Set up a free consultation"}
              </button>
              <p className="v2_form_note">We reply within one working day. No spam, ever.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
