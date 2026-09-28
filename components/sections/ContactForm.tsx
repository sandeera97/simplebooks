"use client";

import { useState, FormEvent } from "react";
import { submitLead, LeadNotConfiguredError } from "@/lib/leads";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
        source: "/srilanka/contact",
      });
      setSubmitted(true);
    } catch (err) {
      /* This form used to fake an 800ms delay and show "Thank you!" while
         dropping the enquiry. Never again. */
      if (!(err instanceof LeadNotConfiguredError)) console.error(err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="sim_bk_form" style={{ textAlign: "center" }}>
        <div style={{ fontSize: 46, marginBottom: 12 }}>🎉</div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--sim-navy)", margin: "0 0 8px" }}>
          Thank you!
        </h3>
        <p style={{ color: "var(--sim-muted)" }}>
          We&apos;ve received your enquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="sim_bk_form" onSubmit={handleSubmit}>
      <p className="sim_bk_form_required"><span>&quot;*&quot;</span> indicates required fields</p>

      <div className="sim_bk_name_grid">
        <input type="text" name="firstName" required placeholder="First name *" className="sim_bk_input" style={{ marginBottom: 0 }} />
        <input type="text" name="lastName" required placeholder="Last name *" className="sim_bk_input" style={{ marginBottom: 0 }} />
      </div>

      <input type="email" name="email" required placeholder="Email *" className="sim_bk_input" />

      <div className="sim_bk_phone_row">
        <select name="phoneCountry" className="sim_bk_phone_code" aria-label="Country code">
          <option>🇱🇰 +94</option>
          <option>🇧🇩 +880</option>
          <option>🇮🇳 +91</option>
        </select>
        <input type="tel" name="phone" required placeholder="Phone number *" className="sim_bk_phone_input" />
      </div>

      <div className="sim_bk_field" style={{ marginBottom: 16 }}>
        <select name="service" required defaultValue="" className="sim_bk_select">
          <option value="" disabled>Services required *</option>
          <option>Business registration</option>
          <option>Bookkeeping</option>
          <option>Payroll</option>
          <option>Tax</option>
          <option>Company secretary</option>
          <option>Legal</option>
          <option>Trademark</option>
          <option>General</option>
        </select>
        <span className="sim_bk_select_arrow">▼</span>
      </div>

      <div className="sim_bk_field" style={{ marginBottom: 16 }}>
        <select name="language" defaultValue="" className="sim_bk_select">
          <option value="" disabled>Preferred Language</option>
          <option>Sinhala</option>
          <option>English</option>
          <option>Tamil</option>
        </select>
        <span className="sim_bk_select_arrow">▼</span>
      </div>

      <textarea name="message" placeholder="Your message (Optional)" rows={4} className="sim_bk_textarea" />

      {failed && (
        <p className="v2_leadform_err" role="alert">
          Sorry — we couldn&apos;t send that just now. Please call{" "}
          <a href="tel:+94117555878">0117 555 878</a> or email{" "}
          <a href="mailto:info@simplebooks.com">info@simplebooks.com</a>{" "}
          and we&apos;ll pick it up.
        </p>
      )}

      <div className="sim_bk_form_submit">
        <button type="submit" className="sim_bk_btn_orange" disabled={loading}>
          {loading ? "Sending..." : "Set up a Free Consultation"}
        </button>
      </div>
    </form>
  );
}
