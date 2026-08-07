import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "Capital Gains Tax | Simplebooks",
};

/* ---------------- SVG icon factory (compliance / services cards) ---------------- */
type IconName = "doc" | "card" | "warn" | "calc" | "home" | "trend" | "phone";

function CardIcon({ name }: { name: IconName }) {
  const p = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "doc":
      return (
        <svg {...p}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="13" y2="17" />
        </svg>
      );
    case "card":
      return (
        <svg {...p}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      );
    case "warn":
      return (
        <svg {...p}>
          <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12" y2="17" />
        </svg>
      );
    case "calc":
      return (
        <svg {...p}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="8.01" y2="10" />
          <line x1="12" y1="10" x2="12.01" y2="10" />
          <line x1="16" y1="10" x2="16.01" y2="10" />
          <line x1="8" y1="14" x2="8.01" y2="14" />
          <line x1="12" y1="14" x2="12.01" y2="14" />
          <line x1="16" y1="14" x2="16" y2="18" />
        </svg>
      );
    case "home":
      return (
        <svg {...p}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
        </svg>
      );
    case "trend":
      return (
        <svg {...p}>
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="15 7 21 7 21 13" />
        </svg>
      );
    case "phone":
      return (
        <svg {...p}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
      );
    default:
      return null;
  }
}

/* small green check used inside lists */
function GreenCheck({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1bbf6a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="16 9.5 11 14.5 8 11.5" />
    </svg>
  );
}

/* ---------------- data (from renderVals) ---------------- */
const exemptions: { title: string; items: string[] }[] = [
  {
    title: "Principal Residence Exemption",
    items: [
      "Owned for 3+ years and lived in for 2+ years",
      "Must be your primary residence",
      "Complete exemption from CGT",
    ],
  },
  {
    title: "Threshold Exemptions",
    items: [
      "Gains under Rs. 50,000 per transaction",
      "Annual aggregate under Rs. 600,000",
      "Listed shares on CSE are exempt",
    ],
  },
  {
    title: "Cost Basis Deductions",
    items: [
      "Original purchase price plus improvements",
      "Legal fees, stamp duty, and transfer costs",
      "Agent commissions and selling expenses",
    ],
  },
];

const compliance: { title: string; icon: IconName; items: string[] }[] = [
  {
    title: "Filing Requirements",
    icon: "doc",
    items: [
      "File CGT return within 30 days of asset realization",
      "Submit to IRD with proper documentation",
      "Include sale agreement and cost basis proof",
      "Valid TIN number required for filing",
    ],
  },
  {
    title: "Payment Requirements",
    icon: "card",
    items: [
      "Pay 10% tax on capital gains within 30 days",
      "Use Bank of Ceylon for all CGT payments",
      "Online payment through IRD e-services",
      "Maintain payment receipts for records",
    ],
  },
  {
    title: "Penalties",
    icon: "warn",
    items: [
      "1.5% penalty for first 14 days after deadline",
      "20% penalty after 14 days of missing payment",
      "Additional interest charges on outstanding amounts",
      "Possible legal action for persistent non-compliance",
    ],
  },
];

const services: { title: string; icon: IconName; desc: string; items: string[] }[] = [
  {
    title: "CGT Calculation",
    icon: "calc",
    desc: "Accurate capital gains calculations including cost basis, improvements, and selling expenses.",
    items: ["Gain/loss calculation", "Cost basis optimization", "Exemption analysis"],
  },
  {
    title: "CGT Filing",
    icon: "doc",
    desc: "Complete CGT return preparation and submission to IRD within required deadlines.",
    items: ["Return preparation", "IRD submission", "Deadline management"],
  },
  {
    title: "Payment Processing",
    icon: "card",
    desc: "CGT payment processing through Bank of Ceylon with proper documentation.",
    items: ["BOC payment setup", "Receipt management", "Payment confirmation"],
  },
  {
    title: "Property CGT",
    icon: "home",
    desc: "Specialized CGT services for property sales including exemption analysis.",
    items: ["Residence exemption check", "Improvement cost analysis", "Documentation review"],
  },
  {
    title: "Share CGT",
    icon: "trend",
    desc: "CGT services for unlisted share transactions and private company sales.",
    items: ["Share valuation", "Transaction analysis", "Compliance verification"],
  },
  {
    title: "CGT Consultation",
    icon: "phone",
    desc: "Expert advice on CGT planning, exemptions, and compliance strategies.",
    items: ["Tax planning advice", "Exemption strategies", "Ongoing support"],
  },
];

const pricingFactors: string[] = [
  "Asset type (property, shares, etc.)",
  "Transaction complexity",
  "Documentation requirements",
  "Exemption analysis needed",
];

const includedServices: string[] = [
  "CGT calculation & analysis",
  "Return preparation & filing",
  "Payment processing support",
  "Ongoing compliance support",
];

/* shared form input style */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "17px 22px",
  border: "none",
  borderRadius: 10,
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
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 14,
  fontWeight: 600,
  color: "#14143d",
  marginBottom: 8,
};

export default function CapitalGainsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section style={{ background: "linear-gradient(120deg, #eef1fe 0%, #e7ecff 100%)" }}>
          <div
            className="sim_bk_split"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 56,
              padding: "66px 0 74px",
              maxWidth: 1250,
              margin: "0 auto",
            }}
          >
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 560 }}>
              <h1
                style={{
                  fontSize: 52,
                  lineHeight: 1.12,
                  fontWeight: 800,
                  margin: "0 0 24px",
                  letterSpacing: "-1px",
                  color: "#14143d",
                }}
              >
                Navigate Sri Lanka&apos;s Capital Gains Tax Without the Stress
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5f6f9a", margin: "0 0 34px" }}>
                Get expert CGT compliance and filing support that protects your investments and keeps
                you penalty-free. From property sales to share transactions, we ensure full
                compliance with Sri Lankan tax regulations.
              </p>
              <div className="hero-btns" style={{ display: "flex", gap: 16, marginBottom: 26 }}>
                <a
                  href="#get-started"
                  className="sim_bk_btn_orange sim_bk_rad10"
                  style={{ padding: "15px 32px", fontSize: 16, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}
                >
                  Get CGT Assessment
                </a>
                <a
                  href="#understanding"
                  style={{
                    textDecoration: "none",
                    color: "#2f6bef",
                    fontWeight: 700,
                    fontSize: 16,
                    padding: "15px 32px",
                    background: "#ffffff",
                    border: "1.5px solid #2f6bef",
                    borderRadius: 10,
                  }}
                >
                  Learn About CGT
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, color: "#2b3358" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Expert CGT Guidance
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, color: "#2b3358" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Penalty Prevention
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, color: "#2b3358" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Maximum Exemptions
                </div>
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <img
                src="/images/tax-capital-gains/01.png"
                alt="Capital Gains Tax Investment"
                style={{
                  width: "100%",
                  maxWidth: 460,
                  aspectRatio: "5 / 4",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>

        {/* ============ CONFUSION (3 pains) ============ */}
        <section style={{ padding: "74px 0 60px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 56px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>
                Capital Gains Tax Confusion is Costing You Money
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                Over 5,000 satisfied clients rely on us for seamless, accurate, and compliant tax
                returns. Don&apos;t let CGT complexities put your investments at risk.
              </p>
            </div>
            <div
              className="sim_bk_grid3"
              style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 68,
                    height: 68,
                    margin: "0 auto 24px",
                    borderRadius: "50%",
                    background: "#fde4e4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f0395b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="9" y2="10" />
                    <line x1="12" y1="10" x2="13" y2="10" />
                    <line x1="8" y1="14" x2="9" y2="14" />
                    <line x1="12" y1="14" x2="13" y2="14" />
                    <line x1="8" y1="18" x2="9" y2="18" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 14px", color: "#14143d" }}>Complex Calculations</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                  CGT calculations involve cost basis, improvements, selling costs, and exemptions that
                  are easy to get wrong.
                </p>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 68,
                    height: 68,
                    margin: "0 auto 24px",
                    borderRadius: "50%",
                    background: "#fde4e4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f0395b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 16 14" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 14px", color: "#14143d" }}>Tight Deadlines</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                  CGT must be filed and paid within 30 days of asset realization - miss it and face
                  heavy penalties.
                </p>
              </div>

              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 68,
                    height: 68,
                    margin: "0 auto 24px",
                    borderRadius: "50%",
                    background: "#fde4e4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f0395b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="7" x2="12" y2="12.5" />
                    <path d="M10 15.5h3a1.5 1.5 0 0 0 0-3h-2a1.5 1.5 0 0 1 0-3h3" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 14px", color: "#14143d" }}>Missed Exemptions</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                  Without expert guidance, you might miss valuable exemptions and pay more tax than
                  necessary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 3 EASY STEPS ============ */}
        <section style={{ padding: "20px 0 80px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto", background: "#f5f6f8", borderRadius: 18, padding: "50px 48px 56px" }}>
              <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, margin: "0 0 46px", color: "#14143d" }}>
                3 Easy Steps to CGT Success
              </h2>
              <div className="steps3" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
                <div style={{ flex: 1, textAlign: "center", position: "relative" }}>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#f15f2c",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      1
                    </div>
                    <div className="step-line2" style={{ position: "absolute", left: "calc(50% + 36px)", right: "calc(-50% + 36px)", top: "50%", borderTop: "2px dashed #d8b4a6" }} />
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Share Your Details</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 280 }}>
                    Tell us about your asset sale and we&apos;ll assess your CGT obligations and
                    potential exemptions
                  </p>
                </div>

                <div style={{ flex: 1, textAlign: "center", position: "relative" }}>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#f15f2c",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      2
                    </div>
                    <div className="step-line2" style={{ position: "absolute", left: "calc(50% + 36px)", right: "calc(-50% + 36px)", top: "50%", borderTop: "2px dashed #d8b4a6" }} />
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>We Prepare &amp; Submit</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 280 }}>
                    Our experts calculate your gains, prepare all documentation, and file with IRD
                    within deadlines
                  </p>
                </div>

                <div style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: "#f15f2c",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      3
                    </div>
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>You Succeed</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 280 }}>
                    Stay compliant, avoid penalties, and maximize your exemptions with ongoing expert
                    support
                  </p>
                </div>
              </div>
              <p style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#f15f2c", margin: "40px 0 0" }}>
                It&apos;s that simple!
              </p>
            </div>
          </div>
        </section>

        {/* ============ UNDERSTANDING CGT (table) ============ */}
        <section id="understanding" style={{ padding: "74px 0 84px", background: "#f5f6f8" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 50px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>
                Understanding Capital Gains Tax in Sri Lanka
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                CGT applies at 10% on capital gains from investment asset sales above specified
                thresholds
              </p>
            </div>
            <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", display: "flex", alignItems: "center", gap: 60 }}>
              <div style={{ flex: 1.05 }}>
                <div style={{ background: "#ffffff", borderRadius: 16, padding: "32px 30px", boxShadow: "0 10px 34px rgba(17,20,77,0.06)" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 22px", color: "#14143d" }}>When CGT Applies</h3>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#fdeef0", borderRadius: 12, padding: "18px 22px", marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#14143d" }}>Property Sales</div>
                      <div style={{ fontSize: 14, color: "#8a8fa6" }}>Investment properties &amp; land</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: "#f0395b" }}>10%</div>
                      <div style={{ fontSize: 13, color: "#9aa0b4" }}>On gains</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#fdf1e6", borderRadius: 12, padding: "18px 22px", marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#14143d" }}>Unlisted Shares</div>
                      <div style={{ fontSize: 14, color: "#8a8fa6" }}>Private company shares</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: "#f15f2c" }}>10%</div>
                      <div style={{ fontSize: 13, color: "#9aa0b4" }}>On gains</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#e9f7ef", borderRadius: 12, padding: "18px 22px", marginBottom: 22 }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#14143d" }}>Listed Shares (CSE)</div>
                      <div style={{ fontSize: 14, color: "#8a8fa6" }}>Colombo Stock Exchange</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#17a35f" }}>Exempt</div>
                      <div style={{ fontSize: 13, color: "#9aa0b4" }}>No CGT</div>
                    </div>
                  </div>
                  <div style={{ background: "#eef2fe", borderRadius: 12, padding: "20px 22px" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#14143d", marginBottom: 14 }}>CGT Thresholds</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "#6b7290" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f15f2c", flexShrink: 0, marginTop: 6 }} />
                        <span><strong style={{ color: "#14143d" }}>Per Transaction:</strong> Rs. 50,000 minimum gain</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "#6b7290" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f15f2c", flexShrink: 0, marginTop: 6 }} />
                        <span><strong style={{ color: "#14143d" }}>Annual Total:</strong> Rs. 600,000 aggregate gains</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "#6b7290" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f15f2c", flexShrink: 0, marginTop: 6 }} />
                        <span><strong style={{ color: "#14143d" }}>Filing Deadline:</strong> 30 days from asset realization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <img
                  src="/images/tax-capital-gains/02.png"
                  alt="CGT Calculator"
                  style={{
                    width: "100%",
                    maxWidth: 400,
                    aspectRatio: "1 / 1",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ EXEMPTIONS & DEDUCTIONS ============ */}
        <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 50px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>CGT Exemptions &amp; Deductions</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                Maximize your tax savings with available exemptions and proper cost basis calculations
              </p>
            </div>
            <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", display: "flex", alignItems: "center", gap: 60 }}>
              <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <img
                  src="/images/tax-capital-gains/03.png"
                  alt="Property Sale Exemptions"
                  style={{
                    width: "100%",
                    maxWidth: 420,
                    aspectRatio: "5 / 4",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
              <div style={{ flex: 1.05, display: "flex", flexDirection: "column", gap: 22 }}>
                {exemptions.map((e, i) => (
                  <div key={i} style={{ border: "1px solid #eef0f6", borderRadius: 14, padding: "26px 30px", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                    <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 18px", color: "#14143d" }}>{e.title}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      {e.items.map((it, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <GreenCheck size={20} />
                          <span style={{ fontSize: 15.5, color: "#6b7290" }}>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPLIANCE & PENALTIES ============ */}
        <section style={{ padding: "74px 0 84px", background: "#f5f6f8" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 50px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>
                CGT Compliance Requirements &amp; Penalties
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                Understand the critical deadlines and consequences of non-compliance
              </p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
              {compliance.map((c, i) => (
                <div
                  key={i}
                  className="comp-card"
                  style={{ background: "#ffffff", borderLeft: "4px solid #f15f2c", borderRadius: 12, padding: "30px 30px 34px", boxShadow: "0 8px 26px rgba(17,20,77,0.05)" }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <CardIcon name={c.icon} />
                  </div>
                  <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 20px", color: "#14143d" }}>{c.title}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {c.items.map((it, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f15f2c", flexShrink: 0, marginTop: 8 }} />
                        <span style={{ fontSize: 15, lineHeight: 1.5, color: "#6b7290" }}>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ OUR CGT SERVICES ============ */}
        <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 50px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>Our Capital Gains Tax Services</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>
                Comprehensive CGT solutions from calculation to filing and ongoing compliance
              </p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
              {services.map((s, i) => (
                <div
                  key={i}
                  className="svc-card sim_bk_hover_lift"
                  style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "32px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}
                >
                  <div style={{ width: 50, height: 50, borderRadius: 12, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <CardIcon name={s.icon} />
                  </div>
                  <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>{s.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {s.items.map((it, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <GreenCheck size={18} />
                        <span style={{ fontSize: 14.5, color: "#6b7290" }}>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SUCCESS LOOKS LIKE ============ */}
        <section style={{ padding: "74px 0 84px", background: "#f5f6f8" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 50px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Here&apos;s What Success Looks Like</h2>
              <p style={{ fontSize: 17, color: "#8a8fa6", margin: 0 }}>Real results from our CGT compliance services</p>
            </div>
            <div className="success-grid" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              <div className="success-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 26px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 58, height: 58, margin: "0 auto 22px", borderRadius: "50%", background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="20" x2="6" y2="13" />
                    <line x1="12" y1="20" x2="12" y2="8" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>Accurate Filings</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Get precise calculations and error-free submissions</p>
              </div>

              <div className="success-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 26px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 58, height: 58, margin: "0 auto 22px", borderRadius: "50%", background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="16 9.5 11 14.5 8 11.5" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>IRD Compliance</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Stay fully compliant with all tax requirements</p>
              </div>

              <div className="success-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 26px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 58, height: 58, margin: "0 auto 22px", borderRadius: "50%", background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <path d="M17 6.5H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>Maximized Savings</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Claim all available exemptions and deductions</p>
              </div>

              <div className="success-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 26px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 58, height: 58, margin: "0 auto 22px", borderRadius: "50%", background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>More Time</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Focus on growing your investments, not paperwork</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRICING (custom solutions) ============ */}
        <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 44px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>Capital Gains Tax Services</h2>
              <p style={{ fontSize: 17, color: "#8a8fa6", margin: 0 }}>Professional CGT services tailored to your specific needs</p>
            </div>
            <div style={{ maxWidth: 940, margin: "0 auto", border: "1px solid #eef0f6", borderRadius: 20, padding: "54px 50px 48px", boxShadow: "0 16px 44px rgba(17,20,77,0.06)" }}>
              <div style={{ width: 64, height: 64, margin: "0 auto 24px", borderRadius: "50%", background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="7" width="18" height="13" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="12" />
                  <path d="M3 12h18" />
                </svg>
              </div>
              <h3 style={{ textAlign: "center", fontSize: 26, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>Custom CGT Solutions</h3>
              <p style={{ textAlign: "center", fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", maxWidth: 680, margin: "0 auto 40px" }}>
                Every capital gains situation is unique. Our pricing depends on the complexity of your
                transaction, asset type, and specific requirements. Get a personalized quote based on
                your needs.
              </p>
              <div className="price-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px 60px", maxWidth: 720, margin: "0 auto 40px" }}>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 18px", color: "#14143d" }}>What Affects Pricing:</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {pricingFactors.map((p, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#6b7290" }}>
                        <span style={{ color: "#f15f2c", fontSize: 18, lineHeight: 1 }}>•</span>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 18px", color: "#14143d" }}>Included Services:</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {includedServices.map((p, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#6b7290" }}>
                        <span style={{ color: "#1bbf6a", fontWeight: 700 }}>✓</span>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price-btns" style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 22 }}>
                <a
                  href="#get-started"
                  className="sim_bk_btn_dark sim_bk_rad10"
                  style={{ background: "#12123f", padding: "15px 32px", fontSize: 15 }}
                >
                  Request Free Quote
                </a>
                <a
                  href="#get-started"
                  style={{
                    textDecoration: "none",
                    color: "#f15f2c",
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "15px 32px",
                    background: "#ffffff",
                    border: "1.5px solid #f15f2c",
                    borderRadius: 10,
                  }}
                >
                  Schedule Consultation
                </a>
              </div>
              <p style={{ textAlign: "center", fontSize: 14, color: "#9aa0b4", margin: 0 }}>
                Free initial consultation • No obligation quote • Expert advice included
              </p>
            </div>
          </div>
        </section>

        {/* ============ GET STARTED FORM ============ */}
        <section id="get-started" style={{ padding: "80px 0 100px", background: "#eef1fe" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 800, margin: "0 0 40px", color: "#14143d" }}>
              Get Expert Tax Help Today
            </h2>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div style={{ marginBottom: 18 }}>
                <label style={labelStyle}>Name <span style={{ color: "#f0395b" }}>*</span></label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="e.g. John Doe" style={inputStyle} />
                  <span
                    style={{
                      position: "absolute",
                      right: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 28,
                      height: 20,
                      background: "#e63838",
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 10,
                      letterSpacing: 1,
                    }}
                  >
                    •••
                  </span>
                </div>
              </div>
              <div className="name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
                <div>
                  <label style={labelStyle}>Email <span style={{ color: "#f0395b" }}>*</span></label>
                  <input type="email" placeholder="e.g. john.doe@example.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone number <span style={{ color: "#f0395b" }}>*</span></label>
                  <input type="tel" placeholder="e.g. +94 77 123 4567" style={inputStyle} />
                </div>
              </div>
              <div className="name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
                <div>
                  <label style={labelStyle}>
                    Have you sold or transferred any land, property, or investments during this year?{" "}
                    <span style={{ color: "#f0395b" }}>*</span>
                  </label>
                  <div style={{ position: "relative" }}>
                    <select style={selectStyle} defaultValue="">
                      <option value="">Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Planning to</option>
                    </select>
                    <span style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", color: "#f15f2c", fontSize: 12, pointerEvents: "none" }}>▼</span>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Preferred Language <span style={{ color: "#f0395b" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select style={selectStyle} defaultValue="">
                      <option value="">Select a language</option>
                      <option>English</option>
                      <option>Sinhala</option>
                      <option>Tamil</option>
                    </select>
                    <span style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", color: "#f15f2c", fontSize: 12, pointerEvents: "none" }}>▼</span>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 30 }}>
                <label style={labelStyle}>Your message (Optional)</label>
                <textarea
                  placeholder="Tell us about your specific needs..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  className="sim_bk_btn_orange"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Poppins', sans-serif",
                    padding: "16px 44px",
                    fontSize: 15,
                    boxShadow: "0 10px 24px rgba(241,95,44,0.28)",
                  }}
                >
                  Set up Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
