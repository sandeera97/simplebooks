import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq from "./Faq";

export const metadata: Metadata = {
  title: "WhatsApp AI Tax Bot | Simplebooks",
};

const phones = [
  { title: "Tax Computation", desc: "Calculate taxes within WhatsApp itself", alt: "WhatsApp tax computation chat" },
  { title: "Tax Answers", desc: "Get answers to any questions instantly", alt: "WhatsApp tax answers chat" },
  { title: "Tax Filing", desc: "Submit your tax filings after it has been verified by a tax expert", alt: "WhatsApp tax filing chat" },
];

const steps = [
  { n: "1", title: "Ask anything", desc: "Ask any questions you have regarding tax and get instant expert-backed answers.", lineDisplay: "block" },
  { n: "2", title: "Send your income & deductions", desc: "We compute your taxes in seconds. Just provide your data regarding income and deductions.", lineDisplay: "block" },
  { n: "3", title: "Verified by tax expert", desc: "Your income and deductions will be verified by a tax expert to ensure everything is accurate.", lineDisplay: "block" },
  { n: "4", title: "Tap 'File Now'", desc: "Submit your return for filing directly within WhatsApp. Simple, secure, and IRD-ready.", lineDisplay: "none" },
];

const pricingPerks = ["Instant tax results", "Real human review", "IRD e-filing", "All-inclusive - no hidden fees"];

const faqs = [
  { q: "Is it really free?", a: "Yes — asking questions and computing your taxes is completely free. You only pay when you choose to file your return." },
  { q: "Can I talk to a human?", a: "Absolutely. Every computation is reviewed by our tax specialists, and you can reach a human expert right inside the WhatsApp chat." },
  { q: "Will it handle updates to IRD rules?", a: "Yes. Our TaxBot is built on the latest Sri Lankan tax rules and is kept up to date with IRD changes, verified by certified consultants." },
  { q: "Do I need to download an app?", a: "No. Everything happens inside WhatsApp — no new app, no logins, no downloads. Just start a chat and go." },
];

export default function AiBotPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#14143d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section className="sim_bk_split" style={{ gap: 56, padding: "56px 0 74px" }}>
          <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 500 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fdece4", borderRadius: 999, padding: "9px 18px", marginBottom: 26 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="16" height="12" rx="2" /><path d="M12 3v4M9 12h.01M15 12h.01M9.5 16h5" /><path d="M2 12v3M22 12v3" /></svg>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#14143d" }}>AI-Powered Tax Assistant</span>
            </div>
            <h1 style={{ fontSize: 50, lineHeight: 1.1, fontWeight: 800, margin: "0 0 26px", letterSpacing: "-1px", color: "#14143d" }}>File your taxes in one <span style={{ color: "#f15f2c" }}>WhatsApp Chat</span></h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, color: "#2b3358" }}><span style={{ fontSize: 18 }}>✅</span> Ask any tax question instantly</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, color: "#2b3358" }}><span style={{ fontSize: 18 }}>✅</span> Free computation, pay only if you file</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, color: "#2b3358" }}><span style={{ fontSize: 18 }}>✅</span> Reviewed by tax specialists</div>
            </div>
            <a href="#" className="sim_bk_btn_wa" style={{ padding: "15px 32px", boxShadow: "0 10px 24px rgba(34,189,91,0.3)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.5.2.5.4.1.2.1.7-.1 1.3z" /></svg>
              Chat on WhatsApp
            </a>
            <div style={{ display: "flex", gap: 40, marginTop: 30 }}>
              <div><div style={{ fontSize: 20, fontWeight: 800, color: "#f15f2c" }}>24/7</div><div style={{ fontSize: 13, color: "#8a8fa6" }}>Available</div></div>
              <div><div style={{ fontSize: 20, fontWeight: 800, color: "#f15f2c" }}>100%</div><div style={{ fontSize: 13, color: "#8a8fa6" }}>Secure</div></div>
            </div>
          </div>
          <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 500, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 50px rgba(17,20,77,0.18)" }}>
              <div style={{ width: "100%", aspectRatio: "16 / 10", background: "#2c3245", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ TaxBot animation video ]</span>
              </div>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "linear-gradient(180deg, rgba(20,20,45,0.65), transparent)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#7b5cff", color: "#fff", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>K</div>
                  <div><div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>TaxBot Animation Rev 4</div><div style={{ fontSize: 13, color: "#d5d8ea" }}>Kasun from simplebooks</div></div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#fff" }}>
                  <span style={{ fontSize: 18 }}>🔇</span>
                  <span style={{ fontSize: 12, fontWeight: 700, border: "1px solid rgba(255,255,255,0.6)", borderRadius: 4, padding: "2px 5px" }}>CC</span>
                  <span style={{ fontSize: 16 }}>⚙</span>
                </div>
              </div>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 62, height: 62, borderRadius: "50%", background: "rgba(20,20,45,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", gap: 5 }}><span style={{ width: 6, height: 20, background: "#fff", borderRadius: 2 }} /><span style={{ width: 6, height: 20, background: "#fff", borderRadius: 2 }} /></div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 18px", background: "rgba(20,20,45,0.82)" }}>
                <span style={{ fontSize: 13, color: "#eef", lineHeight: 1.4 }}>Confusing tax rules, endless forms, zero clarity, and you&apos;re stuck</span>
                <span style={{ fontSize: 12, color: "#fff", background: "#ff0000", padding: "5px 10px", borderRadius: 5, whiteSpace: "nowrap" }}>▶ YouTube</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM STATEMENT ============ */}
        <section style={{ padding: "40px 0 74px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fdece4", borderRadius: 999, padding: "9px 20px", marginBottom: 26 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f15f2c" }} />
              <span style={{ fontSize: 14, fontWeight: 700, color: "#14143d" }}>What does the WhatsApp AI chatbot do?</span>
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.2, margin: "0 auto 24px", maxWidth: 760, color: "#14143d" }}>Tax filing and compliance confusing you and stressing you out?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#6b7db0", maxWidth: 700, margin: "0 auto" }}>Our <span style={{ color: "#f15f2c", fontWeight: 700 }}>Simplebooks TaxBot</span> gives instant answers, for questions about individual income tax filing, accurate calculations that have been verified by human consultants, and hassle-free filing. One chat is all it takes to <span style={{ color: "#f15f2c", fontWeight: 700 }}>stay compliant and relaxed without leaving WhatsApp.</span></p>
          </div>
        </section>

        {/* ============ HOW DOES CHAT HELP (3 cards) ============ */}
        <section style={{ padding: "66px 0 80px", background: "#f5f6fd" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 50px", color: "#14143d" }}>How does our WhatsApp Chat help?</h2>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", gap: 26 }}>

              <div className="help-card sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "40px 34px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 24px", borderRadius: 14, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="14" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="10" y2="18" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Instant Calculations</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Get accurate computations instantly via a simple query.</p>
              </div>

              <div className="help-card sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "40px 34px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 24px", borderRadius: 14, background: "#22bd5b", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" /><polyline points="9 12 11 14 15 9.5" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Reviewed by human experts</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Built on Sri Lankan tax rules and verified by experts.</p>
              </div>

              <div className="help-card sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "40px 34px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 24px", borderRadius: 14, background: "#f5b921", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Try free</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Compute your taxes for free and file instantly. You only need to pay when you file.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ TAX EXPERT IN POCKET ============ */}
        <section className="sim_bk_split" style={{ gap: 60, padding: "80px 0" }}>
          <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 500 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 20px", color: "#14143d" }}>Your Tax Expert in Your Pocket</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", margin: "0 0 28px" }}>Your Simplebooks AI tax agent is tuned for Sri Lankan taxes and available 24/7 on WhatsApp.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22bd5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#2b3358" }}>Verified by tax experts</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22bd5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>
                <span style={{ fontSize: 16, fontWeight: 600, color: "#2b3358" }}>Instant, accurate answers to any tax question</span>
              </div>
            </div>
          </div>
          <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: "100%", maxWidth: 460, aspectRatio: "4 / 3", background: "#f5f6fd", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ AI tax robot on WhatsApp illustration ]</span>
            </div>
          </div>
        </section>

        {/* ============ SEE IT IN ACTION ============ */}
        <section style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>See It In Action</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#8a8fa6", maxWidth: 620, margin: "0 auto" }}>Experience how our AI tax agent helps Sri Lankan taxpayers with instant calculations and expert guidance through WhatsApp.</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1080, margin: "0 auto 44px", gap: 40 }}>
              {phones.map((p, i) => (
                <div key={i} className="phone-card" style={{ textAlign: "center" }}>
                  <div style={{ width: "100%", maxWidth: 260, aspectRatio: "9 / 19", margin: "0 auto 24px", background: "#eef0f6", borderRadius: 30, border: "8px solid #14143d", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ {p.alt} ]</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 260 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="#" className="sim_bk_btn_wa" style={{ padding: "15px 32px", boxShadow: "0 10px 24px rgba(34,189,91,0.3)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.5.2.5.4.1.2.1.7-.1 1.3z" /></svg>
                Chat on WhatsApp
              </a>
              <p style={{ fontSize: 14, color: "#8a8fa6", margin: "16px 0 0" }}>Available 24/7 on WhatsApp • Free to try</p>
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS (4 steps) ============ */}
        <section style={{ padding: "40px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>How It Works</h2>
              <p style={{ fontSize: 16, color: "#8a8fa6", margin: 0 }}>Get started with our AI tax agent in four simple steps</p>
            </div>
            <div className="steps4" style={{ maxWidth: 1150, margin: "0 auto 46px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ position: "relative", border: "1px solid #eef0f6", borderRadius: 16, padding: "48px 26px 30px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.03)" }}>
                  <div style={{ position: "absolute", top: -26, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#f15f2c", color: "#fff", fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(241,95,44,0.34)" }}>{s.n}</div>
                  </div>
                  <div className="step-line" style={{ display: s.lineDisplay, position: "absolute", top: 0, left: "calc(50% + 40px)", right: "calc(-50% + 40px)", borderTop: "2px solid #dfe3f7" }} />
                  <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3, margin: "0 0 14px", color: "#14143d", minHeight: 46 }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="#" className="sim_bk_btn_wa" style={{ padding: "15px 32px", boxShadow: "0 10px 24px rgba(34,189,91,0.3)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2.1.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 1.9 1.2 2.2 1.3.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.5.2.5.4.1.2.1.7-.1 1.3z" /></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ============ PRICING (dark) ============ */}
        <section style={{ padding: "80px 0", background: "#100f42" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div className="pricing-split" style={{ maxWidth: 1150, margin: "0 auto", display: "flex", alignItems: "center", gap: 60 }}>
              <div style={{ flex: 1.1 }}>
                <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 20px", color: "#ffffff" }}>Simple Pricing, No Surprises</h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "#b9bdd6", margin: "0 0 28px" }}>Instant tax results, Real human review, IRD e-filing, All-inclusive - no hidden fees.</p>
                <p style={{ fontSize: 17, fontWeight: 700, color: "#ffffff", margin: "0 0 18px" }}>Pay only when you file.</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 52, fontWeight: 800, color: "#f15f2c" }}>Rs. 6,499</span>
                  <span style={{ fontSize: 17, color: "#8388b5", textDecoration: "line-through" }}>(Regular Price = Rs. 20,000)</span>
                </div>
                <a href="#" className="sim_bk_btn_orange sim_bk_rad10" style={{ display: "inline-block", padding: "16px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}>Begin Filing Your Return</a>
                <p style={{ fontSize: 13, color: "#8388b5", margin: "22px 0 0" }}>*Offer valid till September 30th 2025</p>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                {pricingPerks.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: "#1b1a52", border: "1px solid #2a2a63", borderRadius: 12, padding: "20px 24px" }}>
                    <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: "50%", background: "#22bd5b", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span style={{ fontSize: 17, fontWeight: 700, color: "#ffffff" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "80px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Frequently Asked Questions</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Get answers to common questions about our AI tax filing service</p>
            </div>
            <Faq items={faqs} />
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
