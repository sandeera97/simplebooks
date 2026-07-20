import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "Corporate Tax | Simplebooks",
};

const steps = [
  { n: "1", title: "Get Financially Clear", desc: "We start with your books, audit status, and real-time cash flows. Fix bookkeeping gaps and align audited financials for Y/A 2024/25." },
  { n: "2", title: "File with Confidence", desc: "We prepare your full tax pack, handle income, WHT, foreign earnings, and optimize every deduction with complete accuracy." },
  { n: "3", title: "Stay Compliant All Year", desc: "We don't vanish after March. Year-round support with quarterly consults, regulatory alerts, and proactive guidance." },
];

const deserve = [
  { title: "Fully Integrated Solutions", desc: "Bookkeeping, audit coordination, and tax filing — all seamlessly connected. No more juggling multiple vendors." },
  { title: "Year-Round Partnership", desc: "Not just seasonal panic — ongoing support, quarterly check-ins, and proactive guidance throughout the year." },
  { title: "Transparent Pricing", desc: "Clear, upfront pricing with no hidden fees. You know exactly what you're paying for and when." },
  { title: "Real People Who Care", desc: "Actual humans who respond, explain, and solve problems. No more being ignored or passed around." },
];

const success = [
  { title: "No More Deadline Panic", desc: "Your VAT returns are prepared months in advance. Deadlines become non-events because everything is already handled." },
  { title: "Reliable Partner, Not Ghost", desc: "Your questions get answered within hours, not weeks. You have a dedicated team that knows your business." },
  { title: "Complete Peace of Mind", desc: "Sleep well knowing your compliance is bulletproof. Audit-ready documentation and expert backing." },
];

export default function CorporateTaxPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section style={{ background: "linear-gradient(135deg, #eef1fc 0%, #e7ebfa 100%)" }}>
          <div className="sim_bk_split" style={{ gap: 56, padding: "60px 0 66px", maxWidth: 1250, margin: "0 auto" }}>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 540 }}>
              <h1 style={{ fontSize: 42, lineHeight: 1.16, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.5px", color: "#11144d" }}>Corporate Tax Made Simple for Sri Lankan Businesses</h1>
              <p style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.5, color: "#f15f2c", margin: "0 0 20px" }}>Complete financial back office • Year-round compliance • Focus on growth</p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4b5578", margin: "0 0 24px" }}>Stop fighting the system. Get your business back on track with our complete financial back office solution.</p>
              <p style={{ fontSize: 16, color: "#4b5578", margin: "0 0 12px" }}>Trusted by over <strong style={{ color: "#2f6bef", fontWeight: 700 }}>500+ corporate clients</strong> in Sri Lanka</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 30 }}>
                <span style={{ fontSize: 22, fontWeight: 800 }}><span style={{ color: "#4285F4" }}>G</span></span>
                <span style={{ color: "#f5b921", letterSpacing: "1px", fontSize: 16 }}>★★★★★</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#11144d" }}>98% client retention rate</span>
              </div>
              <a href="#contact" className="sim_bk_btn_orange sim_bk_rad10" style={{ display: "inline-block", fontSize: 15, padding: "14px 30px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Talk to our Expertise</a>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <div style={{ width: "100%", maxWidth: 460, height: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ Corporate tax partnership illustration ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINANCIAL BACK OFFICE (3 steps) ============ */}
        <section style={{ padding: "74px 0 40px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 20px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Your Complete Financial Back Office: Simplebooks Corporate</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 18px" }}>Not just a tax service — your complete financial back office for seamless business operations.</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#f15f2c", margin: 0 }}>Simple 3-Step process</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto 28px", gap: 26 }}>
              {steps.map((s, i) => (
                <div key={i} className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 16, padding: "36px 34px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                  <div style={{ width: "100%", maxWidth: 220, height: 160, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ {s.title} illustration ]</span>
                  </div>
                  <div style={{ width: 46, height: 46, margin: "0 auto 22px", borderRadius: "50%", background: "#1f5cb5", color: "#fff", fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px", color: "#11144d" }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 18, fontWeight: 700, color: "#2f6bef", margin: 0 }}>It&apos;s that simple!</p>
          </div>
        </section>

        {/* ============ FIGHTING A SYSTEM (pain cards) ============ */}
        <section style={{ padding: "66px 0 80px", background: "#f5f6fd" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 48px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Fighting a System That Wasn&apos;t Built for You</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Corporate tax compliance in Sri Lanka feels like an uphill battle — blindfolded</p>
            </div>
            <div className="sim_bk_grid4" style={{ maxWidth: 1180, margin: "0 auto", gap: 24 }}>

              <div className="sim_bk_hover_lift_sm" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "30px 26px", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d", lineHeight: 1.3 }}>RAMIS Crashes When You Need It</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Deadlines approach, but the system goes down. You&apos;re left waiting while penalties loom.</p>
              </div>

              <div className="sim_bk_hover_lift_sm" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "30px 26px", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d", lineHeight: 1.3 }}>Audit Demands with Zero Notice</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Auditors request dozens of documents immediately. No preparation time, no guidance.</p>
              </div>

              <div className="sim_bk_hover_lift_sm" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "30px 26px", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d", lineHeight: 1.3 }}>Massive Penalty Exposure</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>One calculation error can trigger Rs. 400,000+ in penalties. No forgiveness, no second chances.</p>
              </div>

              <div className="sim_bk_hover_lift_sm" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "30px 26px", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 10, background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d", lineHeight: 1.3 }}>Zero Guidance or Support</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Complex regulations change constantly, but there&apos;s no clear guidance. You&apos;re expected to navigate alone.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ WHAT YOU DESERVE ============ */}
        <section style={{ padding: "80px 0", background: "#ffffff" }}>
          <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", gap: 60, padding: 0 }}>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 540 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>What You Deserve Instead</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 30px" }}>What if you had one trusted partner who handled it all — with clarity, accuracy, and care?</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {deserve.map((d, i) => (
                  <div key={i} style={{ display: "flex", gap: 14 }}>
                    <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: "50%", background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 6px", color: "#11144d" }}>{d.title}</h3>
                      <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%", maxWidth: 440, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ Financial growth dashboard illustration ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT SUCCESS LOOKS LIKE ============ */}
        <section style={{ padding: "74px 0 84px", background: "#f5f6fd" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>What Success Looks Like</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Imagine your business running smoothly while your taxes handle themselves</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", gap: 26 }}>
              {success.map((s, i) => (
                <div key={i} className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 34px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                  <div style={{ width: "100%", maxWidth: 160, height: 120, margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ {s.title} illustration ]</span>
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BOOK CONSULTATION (dark) ============ */}
        <section style={{ padding: "74px 0 84px", background: "#100f42" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#ffffff" }}>Book Your Free Consultation Today</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#b9bdd6", margin: 0 }}>Take control of your corporate tax compliance and get back to growing your business</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto 40px", gap: 26 }}>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fde3d6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Schedule Your Call</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#6b7290", margin: "0 0 26px", flex: 1 }}>15-minute consultation with our corporate tax experts. Get immediate clarity on your situation.</p>
                <a href="#contact" className="sim_bk_btn_orange" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 999 }}>Book Now →</a>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e7e9f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Download Checklist</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#6b7290", margin: "0 0 26px", flex: 1 }}>Complete corporate tax compliance checklist for Y/A 2024/25. Start organizing today.</p>
                <a href="#contact" className="sim_bk_btn_dark" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 999, background: "#100f42" }}>Get Free Guide →</a>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fde3d6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Chat with Our Team</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#6b7290", margin: "0 0 26px", flex: 1 }}>Have questions? Chat with our experts in English, Sinhala, or Tamil. Get answers today.</p>
                <a href="#contact" className="sim_bk_btn_orange" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 999 }}>Start Chat →</a>
              </div>

            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: 15, color: "#b9bdd6", margin: "0 0 8px" }}>Don&apos;t wait until tax season to get organized</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#f15f2c", margin: "0 auto", maxWidth: 620, lineHeight: 1.5 }}>The earlier you start, the more opportunities we can identify to save you time and money</p>
            </div>
          </div>
        </section>

        {/* ============ CONTACT FORM ============ */}
        <section id="contact" style={{ padding: "80px 0", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 44px", color: "#11144d" }}>Get Expert Tax Help Today</h2>
            <div style={{ maxWidth: 780, margin: "0 auto" }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Name <span style={{ color: "#f15f2c" }}>*</span></label>
                <input type="text" placeholder="e.g. John Doe" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Email <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="email" placeholder="e.g. john.doe@example.com" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Phone number <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="tel" placeholder="e.g. +94 77 123 4567" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Is your business registered as a Private Limited Company? <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select defaultValue="" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option value="">Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Not sure</option>
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 12, pointerEvents: "none" }}>▾</span>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Preferred Language <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select defaultValue="" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option value="">Select a language</option>
                      <option>English</option>
                      <option>Sinhala</option>
                      <option>Tamil</option>
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 12, pointerEvents: "none" }}>▾</span>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: 30 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Your message (Optional)</label>
                <textarea placeholder="Tell us about your specific needs..." rows={4} style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", resize: "vertical" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="sim_bk_btn_orange" style={{ border: "none", cursor: "pointer", fontWeight: 700, fontSize: 15, fontFamily: "var(--font-poppins), sans-serif", padding: "16px 40px", borderRadius: 999, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Set up Free Consultation</button>
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
