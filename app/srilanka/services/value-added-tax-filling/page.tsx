import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import FaqSingle from "./FaqSingle";
import WaitlistForm from "./WaitlistForm";

export const metadata: Metadata = {
  title: "VAT Filing Made Simple for Sri Lankan Accountants | Simplebooks",
};

/* ---------- shared SVG props ---------- */
const svgBase = {
  fill: "none" as const,
  stroke: "#f15f2c",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ---------- Comparison table data ---------- */
const cmpCol = "0.85fr 1.35fr 1.35fr";

const cmpRows: { icon: React.ReactNode; title: string; old: string; sb: string }[] = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...svgBase}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Schedule Creation",
    old: "Copying data from scattered sources, juggling TINs and invoice details across spreadsheets.",
    sb: "Upload your existing documents and map columns in seconds. We handle the rest.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...svgBase}>
        <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" />
        <polyline points="9 12 11 14 15 9.5" />
      </svg>
    ),
    title: "Instant Validation",
    old: "A simple submission feels like an endless loop; upload your schedule, find out errors, fix discrepancies, and resubmit.",
    sb: "Validation runs instantly. Errors are highlighted on-screen — fix them on the spot.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...svgBase}>
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12" y2="17" />
      </svg>
    ),
    title: "Missing Field Detection",
    old: "Missing fields slip through, causing rejections and delays at the IRD.",
    sb: "Every missing field is flagged before you proceed. Nothing slips through the cracks.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...svgBase}>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    title: "Direct IRD Filing",
    old: "Manually entering data into the slow RAMIS portal, one field at a time.",
    sb: "File directly to IRD in minutes. No more portal struggles.",
  },
];

/* ---------- How It Works data ---------- */
const howItems: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Upload",
    desc: "Drop your existing documents — invoices, TIN lists, anything. No reformatting needed.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="11" cy="11" r="3" />
        <line x1="15" y1="15" x2="13.2" y2="13.2" />
      </svg>
    ),
    title: "Review & Fix",
    desc: "Auto-validation highlights every error and missing field. Fix them in-place in seconds.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 -.2z" />
        <path d="M12 15 9 12a11 11 0 0 1 5-8 8 8 0 0 1 6-2 8 8 0 0 1-2 6 11 11 0 0 1-8 5z" />
        <path d="M15 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    ),
    title: "File",
    desc: "Submit directly to IRD with one click. We always ask for your consent before proceeding.",
  },
];

/* ---------- Why Accountants Love It data ---------- */
const loveCards: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    ),
    title: "Hours → Minutes",
    desc: "What used to take a full day now takes minutes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}>
        <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" />
        <polyline points="9 12 11 14 15 9.5" />
      </svg>
    ),
    title: "Zero Missed Fields",
    desc: "Every field is validated before submission.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "No More RAMIS Headaches",
    desc: "Skip the portal. File directly to IRD.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...svgBase}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Your Data, Your Control",
    desc: "We always ask before proceeding. Full transparency.",
  },
];

export default function VatFilingPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============ HERO (dark) ============ */}
        <section style={{ position: "relative", background: "#14143d", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -60, width: 320, height: 320, borderRadius: "50%", background: "#1b1b52", opacity: 0.5 }} />
          <div style={{ position: "absolute", bottom: -120, left: -80, width: 300, height: 300, borderRadius: "50%", background: "#1b1b52", opacity: 0.4 }} />
          <div
            className="sim_bk_split"
            style={{ position: "relative", zIndex: 2, gap: 56, padding: "80px 56px 90px" }}
          >
            <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
              <h1 style={{ fontSize: 58, lineHeight: 1.08, fontWeight: 800, margin: "0 0 26px", letterSpacing: "-1.5px", color: "#ffffff" }}>
                VAT Filing Shouldn&apos;t Take <span style={{ color: "#f15f2c" }}>All Day</span>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#b9bdd6", margin: "0 0 36px" }}>
                Simplebooks turns hours of manual schedule creation, validation headaches, and RAMIS
                portal struggles into a few clicks. Built for Sri Lankan accountants.
              </p>
              <a
                href="#waitlist"
                className="sim_bk_btn_orange sim_bk_rad10"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 16, padding: "15px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}
              >
                Join Waitlist <span>→</span>
              </a>
              <p style={{ fontSize: 14, color: "#7e83ad", margin: "20px 0 0" }}>
                Be the first to know when we launch. No spam, ever.
              </p>
            </div>
            <div className="sim_bk_split_img">
              <div style={{ width: "100%", maxWidth: 480, background: "#1a1a48", border: "1px solid #2a2a63", borderRadius: 18, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 600, color: "#d7d9ee", marginBottom: 22 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8f94c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  VAT Schedule Preview
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "#23245a", borderRadius: 12, padding: "16px 18px" }}>
                    <span style={{ fontSize: 14, color: "#e5e7f5" }}>Schedule 01 — Output Schedule</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#43d18a" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#43d18a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="16 9.5 11 14.5 8 11.5" />
                      </svg>
                      Validated
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "#23245a", borderRadius: 12, padding: "16px 18px" }}>
                    <span style={{ fontSize: 14, color: "#e5e7f5" }}>Schedule 02 — Local Input Schedule</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#43d18a" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#43d18a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="16 9.5 11 14.5 8 11.5" />
                      </svg>
                      Validated
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "#23245a", borderRadius: 12, padding: "16px 18px" }}>
                    <span style={{ fontSize: 14, color: "#e5e7f5" }}>Schedule 03 — Input Schedule for Imports</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#f15f2c" }}>⚡ Auto-fixing</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "rgba(241,95,44,0.14)", border: "1px solid rgba(241,95,44,0.35)", borderRadius: 12, padding: "16px 18px", marginTop: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#f5793f" }}>Ready to file to IRD</span>
                    <span style={{ color: "#f5793f", fontSize: 16 }}>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OLD WAY VS SIMPLEBOOKS WAY ============ */}
        <section style={{ padding: "84px 56px 90px", background: "#fbfbfd" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>
              The Old Way vs. <span style={{ color: "#f15f2c" }}>The Simplebooks Way</span>
            </h2>
            <p style={{ fontSize: 16, color: "#8a8fa6", margin: 0 }}>
              Every pain point Sri Lankan accountants face with VAT filing — solved.
            </p>
          </div>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: cmpCol, gap: 24, marginBottom: 18 }}>
              <div />
              <div style={{ background: "#fde3e3", color: "#e0416b", fontSize: 16, fontWeight: 700, textAlign: "center", padding: 14, borderRadius: 12 }}>✕ The Old Way</div>
              <div style={{ background: "#ddf3e6", color: "#17a35f", fontSize: 16, fontWeight: 700, textAlign: "center", padding: 14, borderRadius: 12 }}>✓ The Simplebooks Way</div>
            </div>

            {cmpRows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: cmpCol,
                  gap: 24,
                  alignItems: "center",
                  padding: "22px 0",
                  borderBottom: i < cmpRows.length - 1 ? "1px solid #eef0f6" : undefined,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: "#fde4d8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {row.icon}
                  </div>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>{row.title}</span>
                </div>
                <div style={{ background: "#fdeef0", borderRadius: 12, padding: "18px 20px", fontSize: 14.5, lineHeight: 1.55, color: "#6b7290" }}>{row.old}</div>
                <div style={{ background: "#e9f6ee", borderRadius: 12, padding: "18px 20px", fontSize: 14.5, lineHeight: 1.55, color: "#3a6b52" }}>{row.sb}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section style={{ padding: "70px 56px 84px", background: "#eef0f4" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>How It Works</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Three steps. That&apos;s all it takes.</p>
          </div>
          <div className="sim_bk_grid3" style={{ maxWidth: 1000, margin: "0 auto" }}>
            {howItems.map((item, i) => (
              <div key={i} className="sim_bk_hover_lift_sm" style={{ textAlign: "center" }}>
                <div style={{ width: 66, height: 66, margin: "0 auto 24px", borderRadius: 16, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>{item.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 280 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ WHY ACCOUNTANTS LOVE IT ============ */}
        <section style={{ padding: "80px 56px 90px", background: "#fbfbfd" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 54px", color: "#11144d" }}>
            Why Accountants Love It
          </h2>
          <div className="sim_bk_grid4" style={{ maxWidth: 1150, margin: "0 auto", gap: 24 }}>
            {loveCards.map((card, i) => (
              <div
                key={i}
                className="sim_bk_hover_lift"
                style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "34px 26px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.03)" }}
              >
                <div style={{ width: 52, height: 52, margin: "0 auto 24px", borderRadius: 12, background: "#fdece2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>{card.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "80px 56px 90px", background: "#eef0f4" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Everything you need to know about Simplebooks VAT filing.</p>
          </div>
          <FaqSingle />
        </section>

        {/* ============ WAITLIST (dark) ============ */}
        <WaitlistForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
