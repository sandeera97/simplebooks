"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
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
        <input type="text" required placeholder="First name *" className="sim_bk_input" style={{ marginBottom: 0 }} />
        <input type="text" required placeholder="Last name *" className="sim_bk_input" style={{ marginBottom: 0 }} />
      </div>

      <input type="email" required placeholder="Email *" className="sim_bk_input" />

      <div className="sim_bk_phone_row">
        <select className="sim_bk_phone_code" aria-label="Country code">
          <option>🇱🇰 +94</option>
          <option>🇧🇩 +880</option>
          <option>🇮🇳 +91</option>
        </select>
        <input type="tel" required placeholder="Phone number *" className="sim_bk_phone_input" />
      </div>

      <div className="sim_bk_field" style={{ marginBottom: 16 }}>
        <select required defaultValue="" className="sim_bk_select">
          <option value="" disabled>Services required *</option>
          <option>Business Setup</option>
          <option>Online Bookkeeping</option>
          <option>Legal Services</option>
          <option>Payroll Management</option>
        </select>
        <span className="sim_bk_select_arrow">▼</span>
      </div>

      <div className="sim_bk_field" style={{ marginBottom: 16 }}>
        <select defaultValue="" className="sim_bk_select">
          <option value="" disabled>Preferred Language</option>
          <option>English</option>
          <option>Sinhala</option>
          <option>Tamil</option>
        </select>
        <span className="sim_bk_select_arrow">▼</span>
      </div>

      <textarea placeholder="Your message (Optional)" rows={4} className="sim_bk_textarea" />

      <div className="sim_bk_form_submit">
        <button type="submit" className="sim_bk_btn_orange" disabled={loading}>
          {loading ? "Sending..." : "Set up a Free Consultation"}
        </button>
      </div>
    </form>
  );
}
