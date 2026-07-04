"use client";

import { useState } from "react";

const features = [
  "Add your company logo and brand colours",
  "Customise invoice fields to look professional",
  "Send overdue reminders & record payments",
  "Set recurring invoices to automate billing",
  "Automatic & seamless accounting integration",
  "Send invoices easily via email",
  "Keep track of invoice status",
  "Get access to customer history",
  "Add multiple currencies and countries",
];

export default function PricingToggle() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const monthly = billing === "monthly";

  const planTitle = monthly ? "Basic" : "Basic package";
  const planPrice = monthly ? "Rs. 1,200" : "Rs. 12,000";

  return (
    <>
      {/* toggle */}
      <div style={{ display: "inline-flex", alignItems: "center", padding: 6, border: "1px solid #e4e6f2", borderRadius: 999, marginBottom: 44 }}>
        <button
          onClick={() => setBilling("monthly")}
          style={{ border: "none", cursor: "pointer", fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, padding: "12px 30px", borderRadius: 999, background: monthly ? "#11144d" : "transparent", color: monthly ? "#ffffff" : "#8a8fa6" }}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          style={{ border: "none", cursor: "pointer", fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 600, padding: "12px 30px", borderRadius: 999, background: monthly ? "transparent" : "#11144d", color: monthly ? "#8a8fa6" : "#ffffff" }}
        >
          Yearly
        </button>
      </div>

      {/* plan card */}
      <div style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 20, padding: "40px 44px", boxShadow: "0 16px 44px rgba(17,20,77,0.07)", textAlign: "left" }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#11144d", marginBottom: 14 }}>{planTitle}</div>
        <div style={{ fontSize: 42, fontWeight: 800, color: "#f15f2c", marginBottom: 16 }}>{planPrice}</div>
        <div style={{ fontSize: 16, color: "#6b7290" }}>2-month trial period</div>
        <div style={{ borderTop: "1px solid #eef0f6", margin: "26px 0 24px" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="16 9 11 14 8 11" />
              </svg>
              <span style={{ fontSize: 16, color: "#2b3358" }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* note */}
      <div style={{ background: "#fdf6e3", border: "1px solid #f6e2a8", borderRadius: 14, padding: "22px 28px", margin: "26px 0 40px", fontSize: 15, lineHeight: 1.6, color: "#6b6350" }}>
        If you have registered your business with Simplebooks, you&apos;re entitled to a <span style={{ color: "#f15f2c", fontWeight: 600 }}>12-month trial period</span>. (only applicable to <span style={{ color: "#f15f2c", fontWeight: 600 }}>Premium Pro</span> registrars)
      </div>

      <a href="#get-started" className="sim_bk_btn_orange" style={{ padding: "14px 40px", fontSize: 15 }}>Sign up for free</a>
    </>
  );
}
