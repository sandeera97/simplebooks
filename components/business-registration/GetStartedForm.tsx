"use client";

import { useState, FormEvent } from "react";

export default function GetStartedForm() {
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
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 46, marginBottom: 12 }}>🎉</div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--sim-navy)", margin: "0 0 8px" }}>Thank you!</h3>
        <p style={{ color: "var(--sim-muted)" }}>We&apos;ve received your enquiry and will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 760, margin: "0 auto" }}>
      <div className="sim_bk_name_grid">
        <input type="text" required placeholder="First Name *" className="sim_bk_input_peach" style={{ marginBottom: 0 }} />
        <input type="text" required placeholder="Last Name *" className="sim_bk_input_peach" style={{ marginBottom: 0 }} />
      </div>

      <input type="email" required placeholder="Email Address *" className="sim_bk_input_peach" />

      <input type="tel" required placeholder="Phone Number * (e.g., +94761234567)" className="sim_bk_input_peach" />

      <div className="sim_bk_field" style={{ marginBottom: 16 }}>
        <select required defaultValue="" className="sim_bk_select_peach">
          <option value="" disabled>Have you decided on a company name? *</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure yet</option>
        </select>
        <span className="sim_bk_select_arrow" style={{ color: "#6b7290" }}>▾</span>
      </div>

      <div className="sim_bk_field" style={{ marginBottom: 28 }}>
        <select required defaultValue="" className="sim_bk_select_peach">
          <option value="" disabled>Preferred Language *</option>
          <option>English</option>
          <option>Sinhala</option>
          <option>Tamil</option>
        </select>
        <span className="sim_bk_select_arrow" style={{ color: "#6b7290" }}>▾</span>
      </div>

      <div style={{ textAlign: "center" }}>
        <button type="submit" className="sim_bk_btn_orange" disabled={loading} style={{ fontWeight: 700, fontSize: 15, padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>
          {loading ? "Sending..." : "Set up a Free Consultation"}
        </button>
      </div>
    </form>
  );
}
