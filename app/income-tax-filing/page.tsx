import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq2Accordion from "@/components/dashboard/Faq2Accordion";
import Accordion from "./Accordion";
import ReviewsScroller from "./ReviewsScroller";
import YouTubeEmbed from "@/components/video/YouTubeEmbed";
import { VIDEOS } from "@/components/video/videos";

export const metadata: Metadata = {
  title: "File Your Own Taxes with Confidence | Simplebooks",
};

const accData = [
  { title: "Getting Started is Easy", body: "Just answer a few simple questions — we’ll take care of the rest. Your tax return will be 100% accurate, with all eligible deductions applied." },
  { title: "Snap. Upload. Done.", body: "Simply snap a photo or upload your tax forms. Our tool reads the details for you, so there’s no tedious manual data entry." },
  { title: "Expert Support, Every Step of the Way", body: "Our team of tax experts is available whenever you need help — by live chat, phone or email — so you’re never stuck." },
  { title: "Always IRD-Compliant", body: "Every return is prepared in full compliance with the latest IRD rules and Sri Lankan tax regulations." },
  { title: "No Tax Knowledge? No Problem", body: "You don’t need to understand tax law. We translate everything into plain, simple questions and handle the calculations." },
  { title: "Submit Your Return Online", body: "Once reviewed, file your return online directly through Simplebooks — no printing, no queues, no office visits." },
];

const pricingPerks = ["Instant tax results", "Real human review", "IRD e-filing", "All-inclusive - no hidden fees"];

const reviews = [
  { text: "SUPERB!!! I highly recommend this place to everyone. Starting my business was the easiest thing — SimpleBooks handled the whole process with just a few emails 😍", name: "Chanux Bro", role: "Director, Chanux Bro", initial: "C" },
  { text: "Very good service, very happy with your assistance.", name: "Jeevan Mendis", role: "Director", initial: "J" },
  { text: "They took the time to explain what they were doing every step of the way. This took a lot of stress away. I deeply appreciate their professionality and will always recommend Simplebooks to anyone in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta", initial: "R" },
  { text: "Honest review! Thank you simplebooks team for the amazing support on my company registration. Givantha, Moiz and other team members were very helpful. Keep up the quick service. Highly recommended this hassle-free service 👍", name: "NAWRAN", role: "Director, Social Media Academy", initial: "N" },
  { text: "Excellent and stress-free experience. The team guided me through my tax filing and answered every question patiently. Highly recommended!", name: "Damith Menaka", role: "Director, Animspire", initial: "D" },
  { text: "Fast, professional and transparent. I finally understand my own taxes. Will use Simplebooks again next year for sure.", name: "Sandul Perera", role: "Director", initial: "S" },
];

const faqData = [
  { q: "Is this IRD compliant?", a: "Yes. Every return prepared through Simplebooks follows the latest IRD rules and guidelines, so you can file with confidence." },
  { q: "Do I need tax knowledge to use it?", a: "Not at all. We ask simple questions in plain language and handle all the calculations and tax logic for you." },
  { q: "What if I need help?", a: "Our expert team is available via live chat, phone or email at every step, and reviews your return before you file." },
  { q: "Can I upload my T-10 forms?", a: "Yes. Simply snap a photo or upload your T-10 and other forms — the tool reads the details automatically." },
  { q: "Will it help with deductions?", a: "Absolutely. We automatically identify and apply every eligible deduction so you don’t miss out on savings." },
  { q: "Can I use this if I’m self-employed or have foreign income?", a: "Yes. Simplebooks supports salary, freelance, business and foreign income, and our experts guide you on anything unusual." },
];

export default function IncomeTaxFilingPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section
          className="sim_bk_split"
          style={{ gap: 56, padding: "70px 0 80px", maxWidth: 1250, margin: "0 auto" }}
        >
          <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 560 }}>
            <h1 style={{ fontSize: 48, lineHeight: 1.12, fontWeight: 800, margin: "0 0 24px", letterSpacing: "-1px", color: "#11144d" }}>File Your Own Taxes with Confidence</h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", margin: "0 0 28px" }}>Upload your forms, answer a few simple questions, and get your tax return done — 100% accurate with all eligible deductions applied, and expert support by your side every step of the way.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 30 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontSize: 16, color: "#2b3358" }}>Step-by-step guided process</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontSize: 16, color: "#2b3358" }}>Expert human support, anytime</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontSize: 16, color: "#2b3358" }}>100% IRD-compliant filing</span>
              </div>
            </div>
            <p style={{ fontSize: 16, color: "#8a8fa6", margin: "0 0 16px" }}>Trusted by over <strong style={{ color: "#2f6bef", fontWeight: 700 }}>1000 individuals</strong> in Sri Lanka</p>
            <div className="sim_bk_rating_hero" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30 }}>
              <span style={{ fontSize: 24, fontWeight: 800 }}><span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span></span>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#11144d" }}>4.9 Rating</span>
              <span style={{ color: "#f5b921", letterSpacing: "1px", fontSize: 18 }}>★★★★★</span>
            </div>
            <a href="#faq" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontSize: 16, padding: "15px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get free Computation</a>
            <p style={{ fontSize: 13, fontStyle: "italic", color: "#8a8fa6", margin: "20px 0 0" }}>*No credit card until final review</p>
          </div>
          <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <YouTubeEmbed
              id={VIDEOS.taxTool.id}
              title={VIDEOS.taxTool.title}
              style={{ width: 520, maxWidth: "100%", borderRadius: 14 }}
            />
          </div>
        </section>

        {/* ============ WHATSAPP AI ASSISTANT ============ */}
        <section style={{ background: "#f5f6fd", padding: "70px 0 80px" }}>
          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 48px" }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 16px", color: "#11144d" }}>Sri Lanka&apos;s first ever Free AI-powered Whatsapp Tax Assistant</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Chat with our AI, get your computations, file your taxes and much more – all from your WhatsApp</p>
          </div>
          <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", gap: 60, padding: 0 }}>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div style={{ width: 280, height: 420, background: "#22252f", borderRadius: 32, border: "8px solid #15161d", overflow: "hidden" }}>
                <img src="/images/tax-tool/01.png" alt="WhatsApp Tax Assistant on iPhone" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 520 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 26, marginBottom: 34 }}>
                <div style={{ display: "flex", gap: 14 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1bbf6a" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="11" /><polyline points="17 8.5 10.5 15.5 7 12" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#11144d" }}>Built with 1000+ pages of Tax rules, Gazette</div>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1bbf6a" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="11" /><polyline points="17 8.5 10.5 15.5 7 12" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#11144d", marginBottom: 8 }}>Updated with the latest info</div>
                    <div style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6" }}>Verified by certified tax advisors at Simplebooks who have filed over 2,500+ returns for Sri Lankans</div>
                  </div>
                </div>
              </div>
              <a href="#faq" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontSize: 15, padding: "14px 34px" }}>Try now for Free</a>
            </div>
          </div>
        </section>

        {/* ============ DO YOUR TAXES RIGHT (accordion) ============ */}
        <section style={{ padding: "84px 0 90px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 38, fontWeight: 800, margin: "0 0 56px", color: "#11144d" }}>Do Your Taxes Right — Without the Stress</h2>
          <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", alignItems: "flex-start", gap: 56, padding: 0 }}>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: "none" }}>
              <Accordion items={accData} />
              <a href="#faq" className="sim_bk_btn_orange sim_bk_rad10" style={{ marginTop: 30, fontSize: 15, padding: "14px 34px" }}>Try now for Free</a>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "block" }}>
              <div style={{ width: "100%", height: 460, background: "#eef0fb", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 13, color: "#9aa0b4" }}>[ easy tax filing illustration ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ 3 SIMPLE STEPS ============ */}
        <section style={{ padding: "66px 0 80px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#fbe0d4", color: "#11144d", fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 999, marginBottom: 18 }}>How It Works</div>
            <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 56px", color: "#11144d" }}>3 Simple Steps to File Your <span style={{ color: "#f15f2c" }}>Tax Return</span></h2>
            <div className="sim_bk_steps3" style={{ gap: 20 }}>

              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
                  <div style={{ width: 76, height: 76, borderRadius: 14, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 22px rgba(17,20,77,0.06)" }}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="11" rx="2" /><circle cx="12" cy="12.5" r="2.5" /><path d="M6 4l3 3M18 4l-3 3" /></svg>
                  </div>
                  <div className="sim_bk_step_line" style={{ position: "absolute", left: "calc(50% + 56px)", right: "calc(-50% + 56px)", top: "50%", borderTop: "2px dashed #f0a582" }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Quick Pick</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 300 }}>Select your sources of income - salary, freelance, or other.</p>
              </div>

              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
                  <div style={{ width: 76, height: 76, borderRadius: 14, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 22px rgba(17,20,77,0.06)" }}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="7" height="18" rx="1.5" /><rect x="13" y="3" width="7" height="18" rx="1.5" /><line x1="6" y1="7" x2="9" y2="7" /><line x1="15" y1="7" x2="18" y2="7" /></svg>
                  </div>
                  <div className="sim_bk_step_line" style={{ position: "absolute", left: "calc(50% + 56px)", right: "calc(-50% + 56px)", top: "50%", borderTop: "2px dashed #f0a582" }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Review Your Computation</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 300 }}>Get a clear breakdown and advice from our human experts.</p>
              </div>

              <div style={{ textAlign: "center", position: "relative" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
                  <div style={{ width: 76, height: 76, borderRadius: 14, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 22px rgba(17,20,77,0.06)" }}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><polyline points="8 8 10 10 13 6" /><line x1="8" y1="14" x2="16" y2="14" /><line x1="8" y1="17" x2="13" y2="17" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>File Your Tax Return</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 300 }}>Get your return manually reviewed before you file.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ EXPERT ASSISTANCE ============ */}
        <section style={{ padding: "80px 0 90px", background: "#ffffff", textAlign: "center" }}>
          <div style={{ width: "100%", maxWidth: 620, height: 300, margin: "0 auto 50px", background: "#eef0fb", borderRadius: 18, overflow: "hidden" }}>
            <img src="/images/tax-tool/02.jpg" alt="Expert Support" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 18 }} />
          </div>
          <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 18px", color: "#11144d" }}>File Your Taxes Confidently with Expert Assistance</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#8a8fa6", maxWidth: 640, margin: "0 auto 34px" }}>From answering your questions along the way to a final review before you file, our experts ensure your return is 100% accurate.</p>
          <a href="#faq" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontSize: 15, padding: "15px 36px" }}>Book a Demo Now</a>
        </section>

        {/* ============ PRICING (dark) ============ */}
        <section style={{ padding: "20px 0 90px", background: "#ffffff" }}>
          <div className="sim_bk_pricing_split" style={{ maxWidth: 1250, margin: "0 auto", background: "#12123f", borderRadius: 22, padding: "54px 0", display: "flex", alignItems: "center", gap: 50 }}>
            <div style={{ flex: 1.1 }}>
              <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 18px", color: "#ffffff" }}>Simple Pricing, No Surprises</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#b9bdd6", margin: "0 0 28px" }}>Instant tax results, Real human review, IRD e-filing, All-inclusive - no hidden fees</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 30, flexWrap: "wrap" }}>
                <span style={{ fontSize: 46, fontWeight: 800, color: "#f15f2c" }}>Rs. 4,999</span>
                <span style={{ fontSize: 17, color: "#8388b5", textDecoration: "line-through" }}>(Regular Price = Rs. 20,000)</span>
              </div>
              <a href="#faq" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontWeight: 700, fontSize: 16, padding: "16px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}>Begin Filing Your Return</a>
              <p style={{ fontSize: 13, color: "#8388b5", margin: "22px 0 0" }}>*Offer valid till August 15th 2025</p>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: "#1b1b52", borderRadius: 16, padding: "36px 38px", display: "flex", flexDirection: "column", gap: 22 }}>
                {pricingPerks.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1bbf6a" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" /><polyline points="17 8.5 10.5 15.5 7 12" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span style={{ fontSize: 18, fontWeight: 700, color: "#ffffff" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FILE RIGHT, SAVE MORE ============ */}
        <section style={{ padding: "80px 0 90px", background: "#eef0fb" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>File Right, Save More — With Clear Steps &amp; Expert Support</h2>
          <div className="sim_bk_grid4" style={{ maxWidth: 1200, margin: "0 auto 44px", gap: 24 }}>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /><circle cx="18" cy="8" r="2.4" fill="#f5b921" stroke="none" /></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: "#11144d" }}>Stop Overpaying for Tax Help</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>File your taxes confidently without spending thousands on third-party consultants.</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z" /><path d="M7 11l4-8a2 2 0 0 1 2 2v3h5.5a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 17.3 20H7" /><circle cx="19" cy="6" r="3.4" fill="#f5b921" stroke="none" /></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: "#11144d" }}>See Everything, Understand Everything</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>You&apos;ll always know exactly how your return is calculated - no mystery steps, no confusing math.</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12a8 8 0 0 1 16 0" /><rect x="3" y="12" width="4" height="6" rx="1.5" /><rect x="17" y="12" width="4" height="6" rx="1.5" /><circle cx="12" cy="8" r="3" /></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: "#11144d" }}>Real Support from Real Experts</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Got a question? Our expert team is just a click away via live chat, phone, or email.</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14l4-2a6 6 0 0 1 3 0l5 1.5a1.5 1.5 0 0 1-.4 3l-4-1" /><path d="M13 14l5-2 2 .8" /><path d="M8 8.5a3.5 3.5 0 1 0 7 0c0-2-1.6-3.5-3.5-4.5C9.6 5 8 6.5 8 8.5z" fill="#f5b921" stroke="none" /><text x="11" y="10" fontSize="5" fill="#11144d" textAnchor="middle">$</text></svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: "#11144d" }}>Smarter Deductions, Bigger Savings</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>We&apos;ll automatically apply the right deductions so you don&apos;t miss out on money that&apos;s yours.</p>
            </div>

          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#faq" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontSize: 15, padding: "14px 34px" }}>Start Your Tax Filing Now</a>
          </div>
        </section>

        {/* ============ REAL PEOPLE, REAL RESULTS ============ */}
        <section style={{ padding: "80px 0 90px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>Real People, Real Results</h2>
          <ReviewsScroller reviews={reviews} />
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="#" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "13px 34px" }}>View More</a>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" style={{ padding: "80px 0 90px", background: "#eef0fb" }}>
          <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 800, margin: "0 0 54px", color: "#11144d" }}>Frequently Asked Questions</h2>
          <div style={{ marginBottom: 44 }}>
            <Faq2Accordion faqs={faqData} />
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontSize: 15, padding: "14px 34px" }}>File Your Taxes Today</a>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
