"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "18px 22px",
  border: "none",
  borderRadius: 12,
  background: "#f4f5fb",
  fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
  fontSize: 15,
  color: "#11144d",
};

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="waitlist" style={{ background: "#14143d", padding: "80px 0 90px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", color: "#ffffff" }}>
          Ready to Simplify Your VAT Filing?
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "#b9bdd6", margin: "0 0 40px" }}>
          Join the waitlist and be the first to know when Simplebooks VAT Tool launches.
        </p>

        {submitted ? (
          <div
            style={{
              background: "#1a1a48",
              border: "1px solid #2a2a63",
              borderRadius: 16,
              padding: "48px 32px",
              color: "#ffffff",
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>Thank you!</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#b9bdd6", margin: 0 }}>
              You&apos;re on the waitlist. We&apos;ll be in touch as soon as Simplebooks VAT Tool
              launches.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}
          >
            <div style={{ position: "relative" }}>
              <input type="text" placeholder="Name" style={inputStyle} />
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
            <input type="tel" placeholder="Phone number" style={inputStyle} />
            <input type="text" placeholder="Profession (e.g. Chartered Accountant)" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <button
              type="submit"
              className="sim_bk_btn_orange sim_bk_rad12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                width: "100%",
                fontWeight: 700,
                fontSize: 16,
                padding: 17,
                marginTop: 6,
              }}
            >
              Join Waitlist <span>→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
