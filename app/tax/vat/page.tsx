import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq, { FaqItem } from "./Faq";

export const metadata: Metadata = {
  title: "VAT Compliance | Simplebooks",
};

const steps = [
  {
    n: "1",
    title: "Expert Registration & Setup",
    desc: "Complete VAT registration within 2 working days (Premier) or 2 weeks (Basic). We handle everything from document preparation to RAMIS portal setup.",
  },
  {
    n: "2",
    title: "Ongoing Return Preparation",
    desc: "Professional VAT schedule preparation and electronic submission through RAMIS portal. Starting at LKR 25,000 per quarter with payment coordination.",
  },
  {
    n: "3",
    title: "Continuous Compliance Support",
    desc: "Regular updates on VAT regulation changes, deadline reminders, and professional guidance for complex scenarios. Your long-term compliance partner.",
  },
];

const deserve = [
  {
    title: "Expert Registration & Setup",
    desc: "Complete VAT registration process within 2 working days. Full document preparation, RAMIS portal setup, and compliance guidance from day one.",
  },
  {
    title: "Professional Return Management",
    desc: "Professional VAT schedule preparation and electronic submission through RAMIS portal. Payment coordination and deadline management included.",
  },
  {
    title: "Year-Round Partnership",
    desc: "Not just seasonal panic — ongoing support, quarterly check-ins, and proactive guidance throughout the year.",
  },
  {
    title: "Real People Who Care",
    desc: "Actual humans who respond, explain, and solve problems. No more being ignored or passed around.",
  },
];

const success = [
  {
    title: "No More Deadline Panic",
    desc: "Your VAT returns are prepared months in advance. Deadlines become non-events because everything is already handled.",
  },
  {
    title: "Reliable Partner, Not Ghost",
    desc: "Your questions get answered within hours, not weeks. You have a dedicated team that knows your business.",
  },
  {
    title: "Complete Peace of Mind",
    desc: "Sleep well knowing your compliance is bulletproof. Audit-ready documentation and expert backing.",
  },
];

const premierFeatures = [
  "Priority handling & expedited processing",
  "Full document preparation & submission",
  "IRD coordination and compliance guidance",
  "Perfect for urgent deadline needs",
];

const basicFeatures = [
  "Full document preparation & submission",
  "IRD coordination and compliance guidance",
  "Standard timeline processing",
  "Perfect for standard timeline needs",
];

const included = [
  "Professional VAT schedule preparation",
  "Electronic submission through RAMIS portal",
  "Payment coordination and deadline management",
  "Quarterly 10-minute consultation included",
];

const benefits = [
  "100% compliance guarantee",
  "Regular updates on regulation changes",
  "Proactive deadline reminders",
  "Expert guidance for complex scenarios",
];

const faqs: FaqItem[] = [
  {
    q: "What is Value Added Tax (VAT)?",
    a: "VAT is a consumption tax charged on the value added to goods and services at each stage of the supply chain. Registered businesses collect it on sales and remit it to the IRD.",
  },
  {
    q: "How much do VAT penalties cost?",
    a: "Late payments can incur 10% penalties plus 2% monthly interest. For example, a LKR 100,000 payment 3 months late can cost around LKR 16,000 in penalties.",
  },
  {
    q: "What is VAT exemption?",
    a: "Certain goods and services are exempt from VAT, meaning no VAT is charged on them. We help you determine which of your supplies qualify.",
  },
  {
    q: "How to calculate VAT in Sri Lanka?",
    a: "VAT is calculated at the current rate (18%) on your taxable supplies, less input VAT you&apos;ve paid. We handle the full computation for you.",
  },
  {
    q: "How does VAT work for imports and exports?",
    a: "Imports are generally subject to VAT at the point of entry, while exports are typically zero-rated. We guide you through the correct treatment.",
  },
  {
    q: "What is the current VAT rate in Sri Lanka (2025)?",
    a: "The standard VAT rate is currently 18%. Rates change periodically, so we keep your filings aligned with the latest regulations.",
  },
];

const painCards = [
  {
    iconBg: "#fdf3d6",
    stroke: "#e0a83a",
    icon: (
      <>
        <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12" y2="17" />
      </>
    ),
    title: "Complex RAMIS Portal",
    desc: "Navigation and electronic filing requirements that are confusing and time-consuming. The April 11, 2025 deadline is approaching fast.",
  },
  {
    iconBg: "#fde3e3",
    stroke: "#f15f2c",
    icon: (
      <>
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
    title: "Severe Penalties",
    desc: "Risk of 10% penalties plus 2% monthly interest for late payments. On a LKR 100,000 payment, 3 months late = LKR 16,000 in penalties!",
  },
  {
    iconBg: "#dde7fb",
    stroke: "#2f6bef",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </>
    ),
    title: "Strict Deadlines",
    desc: "Monthly/quarterly return deadlines with strict 20th-of-month payment schedules. Missing deadlines can be devastating.",
  },
  {
    iconBg: "#fde3d6",
    stroke: "#f15f2c",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12" y2="17" />
      </>
    ),
    title: "Constant Changes",
    desc: "VAT regulations and rates (now 18%) keep changing, making compliance difficult without professional guidance.",
  },
];

export default function VatCompliancePage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section style={{ background: "linear-gradient(135deg, #cdd8fb 0%, #c3d0fa 100%)" }}>
          <div
            className="sim_bk_split"
            style={{ gap: 56, padding: "58px 0 62px", maxWidth: 1250, margin: "0 auto" }}
          >
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 540 }}>
              <h1 style={{ fontSize: 44, lineHeight: 1.14, fontWeight: 800, margin: "0 0 18px", letterSpacing: "-0.5px", color: "#11144d" }}>Transform Your VAT Compliance Journey</h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4b5578", margin: "0 0 28px" }}>Stop letting VAT complications drain your energy and resources. We&apos;ll guide you to compliance confidence with 100% guaranteed accuracy.</p>
              <div className="hero-btns" style={{ display: "flex", gap: 14, marginBottom: 26 }}>
                <a href="#contact" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 28px", borderRadius: 8, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Free VAT Assessment</a>
                <a href="#contact" className="btn-white-o" style={{ textDecoration: "none", color: "#11144d", fontWeight: 600, fontSize: 15, padding: "14px 28px", background: "transparent", border: "1.5px solid #11144d", borderRadius: 8 }}>Schedule Consultation</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>100% Compliance Guaranteed</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>2,500+ Clients Served</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Save Time &amp; Focus on Growth</span>
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <div style={{ width: "100%", maxWidth: 440, height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ VAT compliance illustration ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRUSTED PARTNER (3 steps) ============ */}
        <section style={{ padding: "74px 0 40px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 20px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Your Trusted VAT Compliance Partner</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 18px" }}>We understand your struggles. Having worked with over 2,500 businesses across Sri Lanka, we&apos;ve seen how VAT compliance can overwhelm even the most successful entrepreneurs.</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#f15f2c", margin: 0 }}>Simple 3-Step process</p>
            </div>
            <div className="steps3" style={{ maxWidth: 1150, margin: "0 auto 28px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
              {steps.map((s) => (
                <div key={s.n} className="step-card" style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 16, padding: "36px 34px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                  <div style={{ width: "100%", maxWidth: 220, height: 150, margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
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

        {/* ============ VAT CHAOS (2x2 pain cards) ============ */}
        <section style={{ padding: "66px 0 80px", background: "#f5f6fd" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>VAT Compliance Chaos Is Stealing Your Success</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Complex regulations, tight deadlines, and severe penalties are overwhelming your business operations</p>
            </div>
            <div className="pain-grid" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {painCards.map((p) => (
                <div key={p.title} className="pain-card" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "30px 30px", boxShadow: "0 6px 22px rgba(17,20,77,0.03)", display: "flex", gap: 18 }}>
                  <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: 10, background: p.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={p.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px", color: "#11144d" }}>{p.title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHAT YOU DESERVE ============ */}
        <section style={{ padding: "80px 0", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>What You Deserve Instead</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>What if you had one trusted partner who handled it all — with clarity, accuracy, and care?</p>
            </div>
            <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", gap: 60, padding: 0 }}>
              <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 540 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {deserve.map((d) => (
                    <div key={d.title} style={{ display: "flex", gap: 14 }}>
                      <span style={{ width: 28, height: 28, flexShrink: 0, borderRadius: 7, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
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
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ VAT certification illustration ]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT SUCCESS LOOKS LIKE ============ */}
        <section style={{ padding: "74px 0 84px", background: "#f5f6fd" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>What Success Looks Like</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Imagine your business running smoothly while your VAT compliance handles itself</p>
            </div>
            <div className="succ-grid" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
              {success.map((s) => (
                <div key={s.title} className="succ-card" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 34px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
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

        {/* ============ INVESTMENT / PRICING ============ */}
        <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Investment in Your Success</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Choose the timeline that works for your business</p>
            </div>
            <div className="price-grid" style={{ maxWidth: 960, margin: "0 auto 30px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, alignItems: "start" }}>

              <div style={{ position: "relative", background: "linear-gradient(160deg, #fdeee7, #fff6f2)", border: "2px solid #f15f2c", borderRadius: 18, padding: "44px 34px 34px", boxShadow: "0 16px 40px rgba(241,95,44,0.14)" }}>
                <span style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", display: "inline-flex", alignItems: "center", gap: 6, background: "#f15f2c", color: "#fff", fontSize: 12, fontWeight: 700, padding: "7px 18px", borderRadius: 999, whiteSpace: "nowrap" }}>🔥 BEST VALUE</span>
                <h3 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, margin: "0 0 10px", color: "#11144d", letterSpacing: "0.3px" }}>PREMIER PACKAGE</h3>
                <div style={{ textAlign: "center", fontSize: 34, fontWeight: 800, color: "#f15f2c", marginBottom: 14 }}>LKR 40,000</div>
                <p style={{ textAlign: "center", fontSize: 14.5, color: "#6b7290", margin: "0 0 26px" }}>VAT registration completed within 2 working days</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                  {premierFeatures.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#2b3358" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="sim_bk_btn_orange" style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 15, padding: 15, borderRadius: 8 }}>Choose Premier</a>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 18, padding: "44px 34px 34px", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                <h3 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, margin: "0 0 10px", color: "#11144d", letterSpacing: "0.3px" }}>BASIC PACKAGE</h3>
                <div style={{ textAlign: "center", fontSize: 34, fontWeight: 800, color: "#11144d", marginBottom: 14 }}>LKR 30,000</div>
                <p style={{ textAlign: "center", fontSize: 14.5, color: "#6b7290", margin: "0 0 26px" }}>VAT registration completed within 2 weeks</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                  {basicFeatures.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#2b3358" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="btn-navy-o" style={{ display: "block", textAlign: "center", textDecoration: "none", color: "#100f42", fontWeight: 700, fontSize: 15, padding: 15, background: "#ffffff", border: "1.5px solid #100f42", borderRadius: 8 }}>Choose Basic</a>
              </div>

            </div>

            <div style={{ maxWidth: 960, margin: "0 auto", background: "#f5f6fd", borderRadius: 18, padding: "40px 44px" }}>
              <div style={{ textAlign: "center", marginBottom: 30 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 8px", color: "#11144d" }}>🏆 ONGOING VAT RETURN SERVICE</h3>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#1f2a6b", marginBottom: 8 }}>Starting at LKR 25,000</div>
                <p style={{ fontSize: 14.5, color: "#8a8fa6", margin: 0 }}>Per Quarter (Pricing varies based on transaction volume and complexity)</p>
              </div>
              <div className="ongoing-cols" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 18px", color: "#11144d" }}>What&apos;s Included:</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {included.map((i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 14.5, color: "#4b5578" }}>{i}</span></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 18px", color: "#11144d" }}>Additional Benefits:</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {benefits.map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 14.5, color: "#4b5578" }}>{b}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ READY CTA (blue) ============ */}
        <section style={{ padding: "74px 0", background: "linear-gradient(120deg, #2f4bd6 0%, #3b57e0 100%)", textAlign: "center" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 18px", color: "#ffffff" }}>Ready to End Your VAT Compliance Stress?</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#d7ddfb", maxWidth: 640, margin: "0 auto 34px" }}>Don&apos;t let VAT compliance stress steal another moment of your entrepreneurial journey. The April 11, 2025 deadline is approaching—let&apos;s start your transformation today.</p>
            <div className="ready-btns" style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 34 }}>
              <a href="#contact" className="sim_bk_btn_orange" style={{ fontWeight: 700, fontSize: 15, padding: "15px 30px", borderRadius: 8, boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}>Free VAT Assessment</a>
              <a href="#contact" className="btn-white-o" style={{ textDecoration: "none", color: "#ffffff", fontWeight: 600, fontSize: 15, padding: "15px 30px", background: "transparent", border: "1.5px solid #ffffff", borderRadius: 8 }}>Schedule Consultation</a>
            </div>
            <p style={{ fontSize: 15, fontWeight: 600, color: "#ffffff", margin: "0 0 14px" }}>Contact Simplebooks Tax Today</p>
            <div style={{ display: "flex", gap: 30, justifyContent: "center", flexWrap: "wrap" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#d7ddfb" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d7ddfb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></svg>taxteam@simplebooks.com</span>
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#d7ddfb" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d7ddfb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></svg>dinithi@simplebooks.com</span>
            </div>
          </div>
        </section>

        {/* ============ CONTACT FORM ============ */}
        <section id="contact" style={{ padding: "80px 0", background: "#eef0fb" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 44px", color: "#11144d" }}>Get Expert Tax Help Today</h2>
            <div style={{ maxWidth: 780, margin: "0 auto" }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Name <span style={{ color: "#f15f2c" }}>*</span></label>
                <input type="text" placeholder="e.g. John Doe" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
              </div>
              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Email <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="email" placeholder="e.g. john.doe@example.com" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Phone number <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="tel" placeholder="e.g. +94 77 123 4567" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
              </div>
              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Are you VAT registered? <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option>Select an option</option>
                      <option>Yes, already registered</option>
                      <option>No, need to register</option>
                      <option>Not sure</option>
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 12, pointerEvents: "none" }}>▾</span>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Preferred Language <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option>Select a language</option>
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
                <button className="sim_bk_btn_orange" style={{ fontWeight: 700, fontSize: 15, padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Set up Free Consultation</button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "80px 0 90px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>Frequently Asked Questions</h2>
            <Faq items={faqs} />
            <div style={{ textAlign: "center" }}>
              <a href="#" className="sim_bk_btn_orange" style={{ fontWeight: 700, fontSize: 15, padding: "14px 34px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Call Now: 077 270 5624</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
