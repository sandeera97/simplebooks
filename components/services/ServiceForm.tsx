"use client";

import { useState, FormEvent } from "react";

/* Shared "Get Started" / "Free consultation" lead form used across service pages.
   White inputs with soft shadow. Renders only the fields + submit; the page
   supplies the surrounding heading/section. */
export default function ServiceForm({ centeredConsent = false }: { centeredConsent?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  }

  const input: React.CSSProperties = {
    width: "100%",
    padding: "19px 22px",
    border: "none",
    borderRadius: 12,
    background: "#ffffff",
    fontFamily: "var(--font-poppins), sans-serif",
    fontSize: 15,
    color: "#11144d",
    boxShadow: "0 4px 16px rgba(17,20,77,0.05)",
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ fontSize: 46, marginBottom: 12 }}>🎉</div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: "#14143d", margin: "0 0 8px" }}>Thank you!</h3>
        <p style={{ color: "#6b7db0" }}>We&apos;ve received your enquiry and will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <div className="sim_bk_name_grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={{ position: "relative" }}>
          <input type="text" required placeholder="First name" style={input} />
          <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", width: 30, height: 22, background: "#e63838", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, letterSpacing: 1 }}>•••</span>
        </div>
        <input type="text" required placeholder="Last name" style={input} />
      </div>

      <div style={{ position: "relative", marginBottom: 16 }}>
        <input type="email" required placeholder="Email address" style={input} />
        <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 16 }}>⌖</span>
      </div>

      <div style={{ display: "flex", marginBottom: 16, borderRadius: 12, background: "#ffffff", boxShadow: "0 4px 16px rgba(17,20,77,0.05)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "19px 16px", background: "#f1f2f8", fontSize: 15, color: "#11144d", whiteSpace: "nowrap" }}>🇱🇰 +94 <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span></div>
        <input type="tel" required placeholder="Phone Number" style={{ flex: 1, minWidth: 0, padding: "19px 18px", border: "none", background: "transparent", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
      </div>

      <div style={{ position: "relative", marginBottom: 22 }}>
        <select defaultValue="" style={{ ...input, appearance: "none", WebkitAppearance: "none" }}>
          <option value="" disabled>Preferred Language</option>
          <option>English</option>
          <option>Sinhala</option>
          <option>Tamil</option>
        </select>
        <span style={{ position: "absolute", right: 22, top: "50%", transform: "translateY(-50%)", color: "#f15f2c", fontSize: 12, pointerEvents: "none" }}>▼</span>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30, cursor: "pointer", justifyContent: centeredConsent ? "center" : "flex-start" }}>
        <input type="checkbox" style={{ width: 18, height: 18, accentColor: "#f15f2c" }} />
        <span style={{ fontSize: 14, color: "#6b7290" }}>I agree to receive your marketing and promotional emails</span>
      </label>

      <div style={{ textAlign: "center" }}>
        <button type="submit" className="sim_bk_btn_orange" disabled={loading} style={{ fontWeight: 700, fontSize: 15, padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>
          {loading ? "Sending..." : "Set up a Free Consultation"}
        </button>
      </div>
    </form>
  );
}
