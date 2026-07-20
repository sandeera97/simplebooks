import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "SSCL | Simplebooks",
};

const basicFeatures = [
  "SSCL registration",
  "Monthly payment processing",
  "Quarterly return filing",
  "Basic compliance monitoring",
  "Email support",
];

const proFeatures = [
  "Everything in Basic",
  "Liable turnover optimization",
  "Penalty prevention alerts",
  "Monthly compliance reports",
  "Phone & email support",
  "IRD liaison services",
];

const enterpriseFeatures = [
  "Everything in Professional",
  "Dedicated account manager",
  "Custom compliance strategies",
  "Priority support",
  "Quarterly business reviews",
  "Multi-entity management",
];

export default function SsclPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#14143d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section style={{ background: "linear-gradient(120deg, #c9d0fb 0%, #d4d0f7 100%)" }}>
          <div className="sim_bk_split" style={{ gap: 56, padding: "66px 0 60px" }}>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 540 }}>
              <h1 style={{ fontSize: 48, lineHeight: 1.12, fontWeight: 800, margin: "0 0 22px", letterSpacing: "-1px", color: "#14143d" }}>SSCL Tax Compliance Made Simple</h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#454a68", margin: "0 0 32px" }}>Navigate Sri Lanka&apos;s Social Security Contribution Levy with confidence. From liable turnover calculations to penalty avoidance, Simplebooks ensures your business stays compliant with SSCL requirements.</p>
              <div className="hero-btns" style={{ display: "flex", gap: 16, marginBottom: 26 }}>
                <a href="#get-started" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontSize: 16, padding: "15px 30px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get SSCL Guidance</a>
                <a href="#turnover" style={{ textDecoration: "none", color: "#14143d", fontWeight: 600, fontSize: 16, padding: "15px 30px", background: "#ffffff", border: "1.5px solid #ffffff", borderRadius: 10 }}>Calculate Liable Turnover</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#454a68" }}><span style={{ color: "#1bbf6a" }}>✓</span> Expert SSCL Guidance</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#454a68" }}><span style={{ color: "#1bbf6a" }}>✓</span> Penalty Prevention</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#454a68" }}><span style={{ color: "#1bbf6a" }}>✓</span> Full Compliance</div>
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <div style={{ width: "100%", maxWidth: 460, aspectRatio: "4 / 3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ SSCL tax compliance illustration ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SSCL COMPLIANCE CHALLENGES ============ */}
        <section style={{ background: "#ffffff", padding: "74px 0 84px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 18px", color: "#14143d" }}>SSCL Compliance Challenges</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: 0 }}>The Social Security Contribution Levy presents complex challenges for Sri Lankan businesses, from understanding liable turnover percentages to managing strict compliance deadlines.</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1050, margin: "0 auto", gap: 40 }}>

              <div style={{ textAlign: "center" }}>
                <div style={{ width: 68, height: 68, margin: "0 auto 24px", borderRadius: "50%", background: "#fde4e4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ef3d3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="9" y2="10" /><line x1="12" y1="10" x2="13" y2="10" /><line x1="8" y1="14" x2="9" y2="14" /><line x1="12" y1="14" x2="13" y2="14" /><line x1="8" y1="18" x2="9" y2="18" /></svg>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 14px", color: "#14143d" }}>Complex Calculations</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: "0 auto", maxWidth: 300 }}>Different liable turnover percentages for different business types make SSCL calculations confusing and error-prone.</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ width: 68, height: 68, margin: "0 auto 24px", borderRadius: "50%", background: "#fde4e4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ef3d3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 14px", color: "#14143d" }}>Strict Deadlines</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: "0 auto", maxWidth: 300 }}>Monthly payments and quarterly filings with tight deadlines that can result in significant penalties if missed.</p>
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{ width: 68, height: 68, margin: "0 auto 24px", borderRadius: "50%", background: "#fde4e4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ef3d3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 14px", color: "#14143d" }}>Heavy Penalties</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: "0 auto", maxWidth: 300 }}>Non-compliance can result in penalties up to Rs. 50,000 plus compound interest, severely impacting your business.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ UNDERSTANDING LIABLE TURNOVER ============ */}
        <section id="turnover" style={{ background: "#f5f6fd", padding: "74px 0 84px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>Understanding Liable Turnover</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>SSCL applies at 2.5% but the effective rate varies based on your business type&apos;s liable turnover percentage</p>
            </div>
            <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", gap: 56, padding: 0 }}>
              <div style={{ flex: 1.1, minWidth: 0 }}>
                <div style={{ background: "#ffffff", borderRadius: 18, padding: "36px 34px", boxShadow: "0 12px 40px rgba(17,20,77,0.07)" }}>
                  <h3 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 26px", color: "#14143d" }}>SSCL Liable Turnover Rates by Business Type</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#fdeef0", borderRadius: 12, padding: "18px 22px" }}>
                      <div><div style={{ fontSize: 17, fontWeight: 700, color: "#14143d" }}>Importers &amp; Service Providers</div><div style={{ fontSize: 14, color: "#8a8fa6", marginTop: 2 }}>100% of turnover liable</div></div>
                      <div style={{ textAlign: "right" }}><div style={{ fontSize: 22, fontWeight: 800, color: "#ef3d3d" }}>2.5%</div><div style={{ fontSize: 12, color: "#8a8fa6" }}>Effective Rate</div></div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#fdf1e6", borderRadius: 12, padding: "18px 22px" }}>
                      <div><div style={{ fontSize: 17, fontWeight: 700, color: "#14143d" }}>Manufacturers</div><div style={{ fontSize: 14, color: "#8a8fa6", marginTop: 2 }}>50% of turnover liable</div></div>
                      <div style={{ textAlign: "right" }}><div style={{ fontSize: 22, fontWeight: 800, color: "#f15f2c" }}>1.25%</div><div style={{ fontSize: 12, color: "#8a8fa6" }}>Effective Rate</div></div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#fdf7de", borderRadius: 12, padding: "18px 22px" }}>
                      <div><div style={{ fontSize: 17, fontWeight: 700, color: "#14143d" }}>Retailers</div><div style={{ fontSize: 14, color: "#8a8fa6", marginTop: 2 }}>50% of turnover liable</div></div>
                      <div style={{ textAlign: "right" }}><div style={{ fontSize: 22, fontWeight: 800, color: "#e0a413" }}>1.25%</div><div style={{ fontSize: 12, color: "#8a8fa6" }}>Effective Rate</div></div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#e7f7ee", borderRadius: 12, padding: "18px 22px" }}>
                      <div><div style={{ fontSize: 17, fontWeight: 700, color: "#14143d" }}>Wholesale Distributors (Local)</div><div style={{ fontSize: 14, color: "#8a8fa6", marginTop: 2 }}>25% of turnover liable</div></div>
                      <div style={{ textAlign: "right" }}><div style={{ fontSize: 22, fontWeight: 800, color: "#17a35f" }}>0.625%</div><div style={{ fontSize: 12, color: "#8a8fa6" }}>Effective Rate</div></div>
                    </div>

                    <div style={{ background: "#eaeefb", borderRadius: 12, padding: "22px 24px", marginTop: 6 }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#14143d", marginBottom: 12 }}>Current Thresholds (2024)</div>
                      <div style={{ fontSize: 15, lineHeight: 1.9, color: "#5f6f9a" }}>
                        • <strong style={{ color: "#14143d" }}>Quarterly:</strong> Rs. 15 million<br />
                        • <strong style={{ color: "#14143d" }}>Annual:</strong> Rs. 60 million<br />
                        • <strong style={{ color: "#14143d" }}>Registration:</strong> Within 15 days of exceeding threshold
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 420, aspectRatio: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ Liable turnover calculation illustration ]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SSCL PENALTY STRUCTURE ============ */}
        <section style={{ background: "#ffffff", padding: "74px 0 84px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>SSCL Penalty Structure</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Understand the financial consequences of SSCL non-compliance</p>
            </div>
            <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", gap: 56, padding: 0 }}>
              <div style={{ flex: 1.1, minWidth: 0, display: "flex", flexDirection: "column", gap: 20 }}>

                <div style={{ borderLeft: "5px solid #ef3d3d", background: "#ffffff", borderRadius: "0 12px 12px 0", padding: "22px 26px", boxShadow: "0 6px 20px rgba(17,20,77,0.05)" }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#ef3d3d" }}>Registration Failures</h3>
                  <p style={{ fontSize: 15, color: "#14143d", margin: "0 0 8px" }}>Late registration penalty: <strong style={{ color: "#ef3d3d" }}>Up to Rs. 25,000</strong></p>
                  <p style={{ fontSize: 14, color: "#8a8fa6", margin: 0 }}>Applied when registration is not completed within 15 days of exceeding threshold</p>
                </div>

                <div style={{ borderLeft: "5px solid #f15f2c", background: "#ffffff", borderRadius: "0 12px 12px 0", padding: "22px 26px", boxShadow: "0 6px 20px rgba(17,20,77,0.05)" }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#f15f2c" }}>Filing Failures</h3>
                  <p style={{ fontSize: 15, color: "#14143d", margin: "0 0 8px" }}>Missed quarterly returns: <strong style={{ color: "#f15f2c" }}>Up to Rs. 50,000</strong></p>
                  <p style={{ fontSize: 14, color: "#8a8fa6", margin: 0 }}>Applied for each missed or late quarterly return filing</p>
                </div>

                <div style={{ borderLeft: "5px solid #e0a413", background: "#ffffff", borderRadius: "0 12px 12px 0", padding: "22px 26px", boxShadow: "0 6px 20px rgba(17,20,77,0.05)" }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#d99b0f" }}>Payment Defaults</h3>
                  <p style={{ fontSize: 15, color: "#14143d", margin: "0 0 6px" }}>Initial penalty: <strong style={{ color: "#d99b0f" }}>10% of levy amount</strong></p>
                  <p style={{ fontSize: 15, color: "#14143d", margin: "0 0 8px" }}>Monthly compound penalty: <strong style={{ color: "#d99b0f" }}>2% per month</strong></p>
                  <p style={{ fontSize: 14, color: "#8a8fa6", margin: 0 }}>Penalties compound monthly until payment is made</p>
                </div>

                <div style={{ borderLeft: "5px solid #17a35f", background: "#ffffff", borderRadius: "0 12px 12px 0", padding: "22px 26px", boxShadow: "0 6px 20px rgba(17,20,77,0.05)" }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#17a35f" }}>Maximum Penalty Cap</h3>
                  <p style={{ fontSize: 15, color: "#14143d", margin: "0 0 8px" }}>Total penalties cannot exceed: <strong style={{ color: "#17a35f" }}>100% of levy amount</strong></p>
                  <p style={{ fontSize: 14, color: "#8a8fa6", margin: 0 }}>Provides some protection against excessive penalty accumulation</p>
                </div>

              </div>
              <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 420, aspectRatio: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ SSCL penalty structure illustration ]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ OUR SSCL SERVICES ============ */}
        <section style={{ background: "#f5f6fd", padding: "74px 0 84px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Our SSCL Services</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Comprehensive SSCL compliance solutions tailored to your business needs</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", gap: 26 }}>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f1f2f8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="20" x2="6" y2="13" /><line x1="12" y1="20" x2="12" y2="8" /><line x1="18" y1="20" x2="18" y2="4" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>SSCL Registration</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>Complete SSCL registration process including threshold monitoring and timely registration with IRD.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Threshold monitoring</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Registration form completion</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>IRD liaison</div>
                </div>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f1f2f8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="11" x2="9" y2="11" /><line x1="12" y1="11" x2="13" y2="11" /><line x1="8" y1="15" x2="9" y2="15" /><line x1="12" y1="15" x2="13" y2="15" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Liable Turnover Calculation</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>Accurate calculation of liable turnover based on your business type and SSCL regulations.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Business type classification</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Accurate rate application</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Monthly calculations</div>
                </div>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f1f2f8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Monthly Payments</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>Timely monthly SSCL payments with proper documentation and deadline management.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Payment processing</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Deadline reminders</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Receipt management</div>
                </div>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f1f2f8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="12" height="18" rx="2" /><rect x="9" y="1.5" width="6" height="3.5" rx="1" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Quarterly Returns</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>Complete quarterly return preparation and filing with accurate turnover reporting.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Return preparation</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Accurate reporting</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Timely filing</div>
                </div>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f1f2f8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Penalty Prevention</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>Proactive compliance monitoring to prevent costly penalties and interest charges.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Compliance monitoring</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Deadline tracking</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Risk assessment</div>
                </div>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f1f2f8", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Expert Consultation</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>Professional advice on SSCL matters, exemptions, and compliance strategies.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Expert guidance</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Exemption analysis</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4a78" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>Strategic planning</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ SSCL SERVICE PACKAGES ============ */}
        <section style={{ background: "#f5f6fd", padding: "74px 0 90px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>SSCL Service Packages</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Choose the right SSCL compliance package for your business</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", gap: 26, alignItems: "start" }}>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 18, padding: "40px 34px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Basic SSCL</h3>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: "#8a8fa6", margin: "0 0 22px" }}>Essential SSCL compliance for small businesses</p>
                <div style={{ marginBottom: 26 }}><span style={{ fontSize: 34, fontWeight: 800, color: "#14143d" }}>LKR 25,000</span><span style={{ fontSize: 15, color: "#8a8fa6" }}>/year</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 15, marginBottom: 30 }}>
                  {basicFeatures.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "#3a4a78" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>{f}</div>
                  ))}
                </div>
                <a href="#get-started" className="sim_bk_btn_dark" style={{ display: "block", textAlign: "center", padding: 15, background: "#14143d", borderRadius: 10 }}>Choose Basic</a>
              </div>

              <div className="sim_bk_hover_lift" style={{ position: "relative", background: "#ffffff", border: "2px solid #f15f2c", borderRadius: 18, padding: "40px 34px", boxShadow: "0 18px 44px rgba(241,95,44,0.14)" }}>
                <span style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", background: "#f15f2c", color: "#fff", fontSize: 13, fontWeight: 700, padding: "7px 22px", borderRadius: 999, whiteSpace: "nowrap" }}>Most Popular</span>
                <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Professional SSCL</h3>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: "#8a8fa6", margin: "0 0 22px" }}>Comprehensive SSCL management for growing businesses</p>
                <div style={{ marginBottom: 26 }}><span style={{ fontSize: 34, fontWeight: 800, color: "#14143d" }}>LKR 45,000</span><span style={{ fontSize: 15, color: "#8a8fa6" }}>/year</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 15, marginBottom: 30 }}>
                  {proFeatures.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "#3a4a78" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>{f}</div>
                  ))}
                </div>
                <a href="#get-started" className="sim_bk_btn_orange sim_bk_rad10" style={{ display: "block", textAlign: "center", padding: 15 }}>Choose Professional</a>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 18, padding: "40px 34px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Enterprise SSCL</h3>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: "#8a8fa6", margin: "0 0 22px" }}>Full-service SSCL solution for large enterprises</p>
                <div style={{ marginBottom: 26 }}><span style={{ fontSize: 34, fontWeight: 800, color: "#14143d" }}>LKR 75,000</span><span style={{ fontSize: 15, color: "#8a8fa6" }}>/year</span></div>
                <div style={{ display: "flex", flexDirection: "column", gap: 15, marginBottom: 30 }}>
                  {enterpriseFeatures.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "#3a4a78" }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>{f}</div>
                  ))}
                </div>
                <a href="#get-started" className="sim_bk_btn_dark" style={{ display: "block", textAlign: "center", padding: 15, background: "#14143d", borderRadius: 10 }}>Choose Enterprise</a>
              </div>

            </div>
          </div>
        </section>

        {/* ============ GET EXPERT TAX HELP FORM ============ */}
        <section id="get-started" style={{ background: "#eef0fb", padding: "80px 0 90px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 800, margin: "0 0 46px", color: "#14143d" }}>Get Expert Tax Help Today</h2>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div style={{ marginBottom: 22 }}>
                <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: "#14143d", marginBottom: 10 }}>Name <span style={{ color: "#f0395b" }}>*</span></label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="e.g. John Doe" style={{ width: "100%", padding: "17px 20px", border: "1px solid #e2e5f0", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                  <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", width: 28, height: 20, background: "#e63838", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, letterSpacing: 1 }}>•••</span>
                </div>
              </div>
              <div className="form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px 24px", marginBottom: 22 }}>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: "#14143d", marginBottom: 10 }}>Email <span style={{ color: "#f0395b" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <input type="email" placeholder="e.g. john.doe@example.com" style={{ width: "100%", padding: "17px 20px", border: "1px solid #e2e5f0", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                    <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 15 }}>⌖</span>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: "#14143d", marginBottom: 10 }}>Phone number <span style={{ color: "#f0395b" }}>*</span></label>
                  <input type="tel" placeholder="e.g. +94 77 123 4567" style={{ width: "100%", padding: "17px 20px", border: "1px solid #e2e5f0", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: "#14143d", marginBottom: 10 }}>Does your company&apos;s turnover exceed LKR 15 million per quarter or LKR 60 million per annum? <span style={{ color: "#f0395b" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select style={{ width: "100%", padding: "17px 20px", border: "1px solid #e2e5f0", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#6b7290", appearance: "none", WebkitAppearance: "none" }} defaultValue="">
                      <option value="">Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Not sure</option>
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#8a8fa6", fontSize: 12, pointerEvents: "none" }}>▾</span>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: "#14143d", marginBottom: 10 }}>Preferred Language <span style={{ color: "#f0395b" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select style={{ width: "100%", padding: "17px 20px", border: "1px solid #e2e5f0", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#6b7290", appearance: "none", WebkitAppearance: "none" }} defaultValue="">
                      <option value="">Select a language</option>
                      <option>English</option>
                      <option>Sinhala</option>
                      <option>Tamil</option>
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#8a8fa6", fontSize: 12, pointerEvents: "none" }}>▾</span>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 30 }}>
                <label style={{ display: "block", fontSize: 15, fontWeight: 600, color: "#14143d", marginBottom: 10 }}>Your message (Optional)</label>
                <textarea placeholder="Tell us about your specific needs..." rows={4} style={{ width: "100%", padding: "17px 20px", border: "1px solid #e2e5f0", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", resize: "vertical" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="sim_bk_btn_orange" style={{ border: "none", cursor: "pointer", fontWeight: 700, fontSize: 16, padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Set up Free Consultation</button>
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
