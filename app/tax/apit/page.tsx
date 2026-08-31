import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq from "./Faq";
import YouTubeEmbed from "@/components/video/YouTubeEmbed";
import { VIDEOS } from "@/components/video/videos";
import { avatarFor } from "@/components/avatars";

export const metadata: Metadata = {
  title: "APIT Filing | Simplebooks",
};

const steps = [
  { n: "1", title: "Free Consultation", hasLine: true },
  { n: "2", title: "We Handle the Filing", hasLine: true },
  { n: "3", title: "Stay Compliant & Stress-Free", hasLine: false },
];

const testimonials = [
  { quote: "APIT filing used to eat away at my time every month. Simplebooks took it off my plate entirely — smooth and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.", name: "Damith Menaka", role: "Director, Animspire" },
  { quote: "Honest review! Thank you simplebooks team for the amazing support. Keep up the quick service. Highly recommended this hassle-free service 👍", name: "NAWRAN", role: "Director, Social Media Academy" },
  { quote: "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta" },
  { quote: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chanux Bro", role: "Director, Chanux Bro" },
  { quote: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
  { quote: "It's a superb experience that I got from Simple Books. Very good service, responsive via mails for my queries and updating the process.", name: "Sarath Senanayake", role: "Director" },
  { quote: "I've registered over 10 businesses with Simplebooks over the years and I would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
];

const faqs = [
  { q: "Who is responsible for filing APIT?", a: "The employer is responsible for deducting APIT from employees' remuneration and remitting it to the IRD. We handle the entire process on your behalf." },
  { q: "What happens if I fail to deduct APIT?", a: "Failure to deduct or remit APIT can result in penalties and interest from the IRD. Our proactive service ensures you stay fully compliant and on time." },
  { q: "Do all employees need to pay APIT?", a: "APIT applies to employees whose remuneration exceeds the tax-free threshold. We assess each employee against the latest tax tables for you." },
  { q: "How can I check if my APIT return was submitted correctly?", a: "We provide confirmation and documentation for every submission, and our team is available to walk you through your filing status anytime." },
];

export default function ApitPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section
          className="sim_bk_split"
          style={{ gap: 56, padding: "56px 0 74px", maxWidth: 1250, margin: "0 auto" }}
        >
          <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 520 }}>
            <h1 style={{ fontSize: 44, lineHeight: 1.14, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.5px", color: "#11144d" }}>Sri Lanka&apos;s Most Trusted APIT Filing Service Provider</h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", margin: "0 0 28px" }}>Don&apos;t let APIT filing slow your business down – let the #1 service provider take care of it!</p>
            <p style={{ fontSize: 16, color: "#8a8fa6", margin: "0 0 14px" }}>Trusted by over <strong style={{ color: "#2f6bef", fontWeight: 700 }}>5000 businesses</strong> in Sri Lanka</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30 }}>
              <span style={{ fontSize: 22, fontWeight: 800 }}><span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span></span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>4.9 Rating</span>
              <span style={{ color: "#f5b921", letterSpacing: "1px", fontSize: 16 }}>★★★★★</span>
              <span style={{ fontSize: 13, color: "#2f6bef" }}>(500+ customer reviews)</span>
            </div>
            <a href="#get-started" className="sim_bk_btn_orange sim_bk_rad10" style={{ fontSize: 16, padding: "15px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get Free Consultation</a>
          </div>
          <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <YouTubeEmbed
              id={VIDEOS.apit.id}
              title={VIDEOS.apit.title}
              style={{ width: 500, maxWidth: "100%", borderRadius: 14, boxShadow: "0 16px 44px rgba(17,20,77,0.18)" }}
            />
          </div>
        </section>

        {/* ============ FACING CHALLENGES ============ */}
        <section style={{ padding: "70px 0 84px", background: "#eef0fb" }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 56px" }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Facing Challenges In APIT Filing?</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Let our experts handle your tax filing complexities with precision and care.</p>
          </div>
          <div className="sim_bk_perks_grid" style={{ maxWidth: 1050, margin: "0 auto", gap: "44px 60px" }}>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: 58, height: 58, borderRadius: 12, background: "#cfe0fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#14143d"><path d="M10 2h4a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2zm0 4h4V4h-4z" /></svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Struggling with the IRD e-Service Platform?</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>We handle the entire submission process for you!</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: 58, height: 58, borderRadius: 12, background: "#cfe0fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#14143d"><rect x="5" y="2" width="14" height="20" rx="2" /><rect x="7.5" y="4.5" width="9" height="3" rx="0.6" fill="#cfe0fb" /><circle cx="9" cy="11" r="1" /><circle cx="12" cy="11" r="1" /><circle cx="15" cy="11" r="1" /><circle cx="9" cy="14.5" r="1" /><circle cx="12" cy="14.5" r="1" /><circle cx="15" cy="14.5" r="1" /><circle cx="9" cy="18" r="1" /><circle cx="12" cy="18" r="1" /><circle cx="15" cy="18" r="1" /></svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Unsure about Tax deductions &amp; Rates?</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>We use the latest tax tables to ensure 100% accuracy.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: 58, height: 58, borderRadius: 12, background: "#cfe0fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#14143d"><rect x="2" y="5" width="20" height="14" rx="2" /><rect x="4.5" y="8" width="6" height="5" rx="0.8" fill="#cfe0fb" /><line x1="12.5" y1="9" x2="19" y2="9" stroke="#cfe0fb" strokeWidth="1.6" strokeLinecap="round" /><line x1="12.5" y1="12" x2="19" y2="12" stroke="#cfe0fb" strokeWidth="1.6" strokeLinecap="round" /><line x1="4.5" y1="15.5" x2="19" y2="15.5" stroke="#cfe0fb" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Missed Deadlines &amp; Late Penalties?</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Our proactive approach ensures you never miss a deadline.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ width: 58, height: 58, borderRadius: 12, background: "#cfe0fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3l7 7-3.5 3.5-7-7z" /><line x1="10.5" y1="6.5" x2="17.5" y2="13.5" /><line x1="3" y1="21" x2="12" y2="21" /><path d="M6 17l4-4" /></svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Confused about T10 Certificates &amp; Documentation?</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>We manage all records, certificates, and compliance requirements for you!</p>
            </div>

          </div>
        </section>

        {/* ============ STRESS BANNER ============ */}
        <section style={{ padding: "50px 0", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto", background: "linear-gradient(120deg, #cdd8fb, #dfe6fc)", borderRadius: 18, padding: "56px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.3, margin: "0 auto 28px", color: "#2f4bd6", maxWidth: 640 }}>Stop stressing over APIT filing – let our experts take care of it!</h2>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 32px", boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}>Set up a free consultation</a>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section style={{ padding: "60px 0 84px", background: "#eef0fb" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Features of Our APIT Filing Service</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>What Simplebooks APIT filing service covers</p>
          </div>
          <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto 44px", gap: 26 }}>

            <div className="feat-card sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2f4bd6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.2 2.2 3-.3 1 2.9 2.6 1.6-1 2.9 1 2.9-2.6 1.6-1 2.9-3-.3L12 22l-2.2-2.2-3 .3-1-2.9L3.2 15.6l1-2.9-1-2.9 2.6-1.6 1-2.9 3 .3z" /><polyline points="9 12 11 14 15 9.5" /></svg>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>End-to-End APIT Filing &amp; Submission</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>From data collection to final submission—we handle the entire APIT process for you.</p>
            </div>

            <div className="feat-card sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2f4bd6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="11" r="6" /><polyline points="9.5 11 11 12.5 14.5 9" /><path d="M9 16l-1.5 5 4.5-2.5 4.5 2.5L15 16" /></svg>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>100% Accurate Tax Calculations</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>We use the latest IRD rates and guidelines to deliver fully accurate tax figures.</p>
            </div>

            <div className="feat-card sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2f4bd6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5V4a1 1 0 0 1 1-1h2" /><path d="M17 3h2a1 1 0 0 1 1 1v1" /><path d="M20 19v1a1 1 0 0 1-1 1h-2" /><path d="M7 21H5a1 1 0 0 1-1-1v-1" /><line x1="4" y1="12" x2="20" y2="12" /></svg>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Compliance Check &amp; Penalty Prevention</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Stay ahead of deadlines and avoid fines with our proactive compliance monitoring.</p>
            </div>

            <div className="feat-card sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2f4bd6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><polyline points="12 8 12 12 15 14" /><path d="M16 16l3 3" /></svg>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Personalized Tax Consultation</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Get one-on-one expert advice tailored to your business and income structure.</p>
            </div>

            <div className="feat-card sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2f4bd6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><polyline points="14 3 14 7 18 7" /><line x1="5" y1="9" x2="5" y2="19" /></svg>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Record-Keeping &amp; Documentation</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>We maintain organized records and files to ensure smooth audits and future references.</p>
            </div>

            <div className="feat-card sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 32px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
              <div style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2f4bd6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><polyline points="14 3 14 7 18 7" /><circle cx="15" cy="16" r="3" /><path d="M13.5 18.5L12 22l3-1.6L18 22l-1.5-3.5" /></svg>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 14px", color: "#11144d", lineHeight: 1.3 }}>Full Compliance</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Your APIT filings will always align with current Inland Revenue regulations—guaranteed.</p>
            </div>

          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 34px" }}>Get free consultation now</a>
          </div>
        </section>

        {/* ============ 3-STEP PROCESS ============ */}
        <section style={{ padding: "74px 0 40px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, lineHeight: 1.25, margin: "0 0 56px", color: "#11144d" }}>Our Simple 3-Step Process for APIT<br />Filing</h2>
          <div className="sim_bk_steps3" style={{ maxWidth: 1000, margin: "0 auto", gap: 20 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#14143d", color: "#fff", fontSize: 17, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{s.n}</div>
                  {s.hasLine && (
                    <div className="sim_bk_step_line" style={{ position: "absolute", left: "calc(50% + 40px)", right: "calc(-50% + 40px)", top: "50%", borderTop: "2px dashed #14143d" }} />
                  )}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 20px", color: "#2f4b8a" }}>{s.title}</h3>
                <div style={{ width: "100%", maxWidth: 160, height: 130, margin: "0 auto", background: "#eef0fb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ {s.title} illustration ]</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ SUCCESS STORIES ============ */}
        <section style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>Hear More Success Stories</h2>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div className="sim_bk_grid4" style={{ gap: 20 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 210, boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                  <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#5a607a", margin: "0 0 18px" }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {avatarFor(t.name) ? (
                      <img src={avatarFor(t.name)!} alt={t.name} style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", flexShrink: 0, display: "block" }} />
                    ) : (
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#d9dcee", flexShrink: 0 }} />
                    )}
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 700, color: "#11144d" }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "#9aa0b4" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/srilanka/testimonials" className="sim_bk_btn_orange" style={{ fontSize: 14, padding: "13px 34px" }}>View more</a>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "80px 0 90px", background: "#eef0fb" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>Frequently Asked Questions</h2>
          <Faq items={faqs} />
          <div style={{ textAlign: "center" }}>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ fontWeight: 700, fontSize: 15, padding: "14px 34px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get Free Consultation Now</a>
          </div>
        </section>

        {/* ============ GET STARTED FORM ============ */}
        <section id="get-started" style={{ position: "relative", padding: "80px 0 100px", background: "#ffffff", overflow: "hidden" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 40px", color: "#11144d" }}>Get Started</h2>
          <div style={{ maxWidth: 620, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <p style={{ fontSize: 13, color: "#f0395b", margin: "0 0 18px" }}>* indicates required fields</p>
            <div className="sim_bk_name_grid">
              <input type="text" placeholder="First name" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
              <input type="text" placeholder="Last name" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
            </div>
            <input type="email" placeholder="Email address" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", marginBottom: 16 }} />
            <div style={{ display: "flex", marginBottom: 16, border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "16px 16px", background: "#f1f2f8", fontSize: 15, color: "#11144d", whiteSpace: "nowrap" }}>🇱🇰 +94 <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span></div>
              <input type="tel" placeholder="Phone number" style={{ flex: 1, minWidth: 0, padding: "16px 18px", border: "none", background: "transparent", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
            </div>
            <div style={{ position: "relative", marginBottom: 16 }}>
              <select defaultValue="" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                <option value="">Have you already chosen a name for your company?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#f15f2c", fontSize: 12, pointerEvents: "none" }}>▾</span>
            </div>
            <div style={{ position: "relative", marginBottom: 26 }}>
              <select defaultValue="" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                <option value="">Preferred Language</option>
                <option>English</option>
                <option>Sinhala</option>
                <option>Tamil</option>
              </select>
              <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#f15f2c", fontSize: 12, pointerEvents: "none" }}>▾</span>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="sim_bk_btn_orange" style={{ fontWeight: 700, fontSize: 15, padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Set up a Free Consultation</button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
