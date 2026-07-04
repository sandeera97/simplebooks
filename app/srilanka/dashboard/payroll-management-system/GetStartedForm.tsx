"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "19px 22px",
  border: "none",
  borderRadius: 12,
  background: "#ffffff",
  fontFamily: "'Poppins', sans-serif",
  fontSize: 15,
  color: "#11144d",
  boxShadow: "0 4px 16px rgba(17,20,77,0.05)",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
  WebkitAppearance: "none",
};

const caretStyle: React.CSSProperties = {
  position: "absolute",
  right: 22,
  top: "50%",
  transform: "translateY(-50%)",
  color: "#f15f2c",
  fontSize: 12,
  pointerEvents: "none",
};

export default function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <div className="sim_bk_name_grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div style={{ position: "relative" }}>
          <input type="text" placeholder="First name" style={inputStyle} />
          <span
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              width: 30,
              height: 22,
              background: "#e63838",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 11,
              letterSpacing: 1,
            }}
          >
            •••
          </span>
        </div>
        <input type="text" placeholder="Last name" style={inputStyle} />
      </div>

      <div style={{ position: "relative", marginBottom: 16 }}>
        <input type="email" placeholder="Email address" style={inputStyle} />
        <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 16 }}>⌖</span>
      </div>

      <div
        style={{
          display: "flex",
          marginBottom: 16,
          borderRadius: 12,
          background: "#ffffff",
          boxShadow: "0 4px 16px rgba(17,20,77,0.05)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "19px 16px", background: "#f1f2f8", fontSize: 15, color: "#11144d", whiteSpace: "nowrap" }}>
          🇱🇰 +94 <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span>
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          style={{ flex: 1, minWidth: 0, padding: "19px 18px", border: "none", background: "transparent", fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#11144d" }}
        />
      </div>

      <div style={{ position: "relative", marginBottom: 16 }}>
        <select style={selectStyle} defaultValue="">
          <option value="" disabled>How many employees does your business currently have?</option>
          <option>1 – 10</option>
          <option>11 – 50</option>
          <option>51 – 200</option>
          <option>200+</option>
        </select>
        <span style={caretStyle}>▼</span>
      </div>

      <div style={{ position: "relative", marginBottom: 16 }}>
        <select style={selectStyle} defaultValue="">
          <option value="" disabled>How are you currently managing your payroll?</option>
          <option>Manually / Spreadsheets</option>
          <option>Another software</option>
          <option>Outsourced</option>
          <option>Not managing yet</option>
        </select>
        <span style={caretStyle}>▼</span>
      </div>

      <div style={{ position: "relative", marginBottom: 22 }}>
        <select style={selectStyle} defaultValue="">
          <option value="" disabled>Preferred Language</option>
          <option>English</option>
          <option>Sinhala</option>
          <option>Tamil</option>
        </select>
        <span style={caretStyle}>▼</span>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30, cursor: "pointer" }}>
        <input type="checkbox" style={{ width: 18, height: 18, accentColor: "#f15f2c" }} />
        <span style={{ fontSize: 14, color: "#6b7290" }}>I agree to receive your marketing and promotional emails</span>
      </label>

      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          className="sim_bk_btn_orange"
          style={{ fontWeight: 700, fontSize: 15, fontFamily: "'Poppins', sans-serif", padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}
        >
          Set up a Free Consultation
        </button>
        {submitted && (
          <p style={{ marginTop: 18, fontSize: 15, fontWeight: 600, color: "#11144d" }}>Thank you!</p>
        )}
      </div>
    </form>
  );
}
