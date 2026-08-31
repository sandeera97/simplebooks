import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import YouTubeEmbed from "@/components/video/YouTubeEmbed";
import { WEBINARS } from "@/components/video/videos";

export const metadata: Metadata = {
  title: "Tax Webinar | Simplebooks",
};

const topics = [
  {
    title: "Individual Income Tax",
    desc: "Personal income tax calculation, thresholds, deductions, and compliance requirements",
    forWho: "Employees, freelancers, self-employed individuals",
    points: [
      "Tax-free threshold (LKR 1.8 million annually)",
      "Progressive tax rates (6% to 36%)",
      "Personal relief and deductions",
      "PAYE system for employees",
    ],
  },
  {
    title: "Corporate Income Tax",
    desc: "Company tax obligations, rates, and compliance procedures",
    forWho: "Business owners, corporate finance teams, accountants",
    points: [
      "Standard rate 30% for most companies",
      "Concessionary rates for SMEs (14%)",
      "Quarterly payment system",
      "Annual return filing requirements",
    ],
  },
  {
    title: "VAT (Value Added Tax)",
    desc: "VAT registration, filing, and compliance procedures",
    forWho: "Business owners, VAT registered entities, finance staff",
    points: [
      "Current VAT rate: 18%",
      "Registration threshold: LKR 60 million annually",
      "Monthly/quarterly filing requirements",
      "Input tax credits and output tax",
    ],
  },
  {
    title: "Foreign Income & USD Earnings",
    desc: "Taxation of foreign-sourced income and foreign currency earnings",
    forWho: "Freelancers, remote workers, exporters, digital service providers",
    points: [
      "New 15% tax on foreign income (from April 2025)",
      "Foreign tax credit provisions",
      "Service export taxation",
      "Remittance requirements through banks",
    ],
  },
  {
    title: "Tax Planning & Strategies",
    desc: "Legal tax optimization and compliance strategies",
    forWho: "Business owners, tax professionals, financial advisors",
    points: [
      "Legitimate tax saving opportunities",
      "Business structure optimization",
      "Timing of income and expenses",
      "Available incentives and concessions",
    ],
  },
  {
    title: "MSME Tax Compliance",
    desc: "Tax issues specific to micro, small, and medium enterprises",
    forWho: "Small business owners, startup founders, entrepreneurs",
    points: [
      "SME tax rates and benefits",
      "Record keeping requirements",
      "Simplified compliance procedures",
      "Available tax concessions",
    ],
  },
];

const corpSteps = [
  { n: "1", text: "Click here and send your Webinar request (Explain your requirement in the Message box)" },
  { n: "2", text: "Assign a convenient date and time for your staff" },
  { n: "3", text: "Make your payment online" },
  { n: "4", text: "Participate in the webinar from anywhere in the world" },
];

const corpFeatures = [
  "Every participant will liaise with a facilitator through their mobiles and laptops",
  "Q & A Sessions",
  "Interactive learning experience",
];

const videos = [
  { title: "Complete Guide to Filing APIT Returns", desc: "Everything You Need to Know about Filing APIT Returns in Sri Lanka" },
  { title: "A-Z Guide to Simplebooks Tax Tool", desc: "The Simplest Way to Handle Your Taxes in Sri Lanka" },
  { title: "Filing 2024 Income Tax Returns: Companies & Individuals", desc: "How to File Income Tax Returns for Companies and Individuals in 2024" },
  { title: "Complete overview of the Individual Income Tax", desc: "Everything You Need To Know About Individual Income Tax" },
  { title: "VAT & SSCL Updates", desc: "Recent Amendments To The VAT And SSCL Tax" },
  { title: "Registering a Business Made Simple", desc: "Everything You Need to Know About Business Registration" },
];

const freeReasons = [
  "Stay updated with latest tax law changes",
  "Learn practical compliance tips",
  "Ask questions to tax experts",
  "Network with professionals",
];

const interests = ["Individual Tax", "Corporate Tax", "VAT Compliance", "Foreign Income"];

export default function TaxWebinarPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#14143d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section style={{ background: "linear-gradient(180deg, #c9d4fb 0%, #d7dcfb 100%)" }}>
          <div className="sim_bk_split" style={{ gap: 56, padding: "64px 0 66px" }}>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 560 }}>
              <h1 style={{ fontSize: 52, lineHeight: 1.1, fontWeight: 800, margin: "0 0 24px", letterSpacing: "-1px", color: "#14143d" }}>Master Sri Lankan Tax Compliance with Expert-Led Webinars</h1>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4a5578", margin: "0 0 32px" }}>Choose from specialized tax topics tailored to your business needs. Organizations can select specific tax areas they want to focus on - from individual income tax to USD earnings taxation.</p>
              <div className="sim_bk_hero_btns" style={{ display: "flex", gap: 16, marginBottom: 26 }}>
                <a href="#topics" className="sim_bk_btn_orange sim_bk_rad10" style={{ textAlign: "center", fontWeight: 700, fontSize: 16, padding: "15px 34px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Browse Tax Topics</a>
                <a href="#previous" style={{ textAlign: "center", textDecoration: "none", color: "#2f4bd6", fontWeight: 700, fontSize: 16, padding: "15px 34px", background: "#ffffff", border: "1.5px solid #ffffff", borderRadius: 10, boxShadow: "0 6px 18px rgba(17,20,77,0.08)" }}>View Past Webinars</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 26, flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#46516f" }}><span style={{ color: "#1bbf6a", fontWeight: 700 }}>✓</span> Expert-Led Sessions</span>
                <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#46516f" }}><span style={{ color: "#1bbf6a", fontWeight: 700 }}>✓</span> Interactive Learning</span>
                <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#46516f" }}><span style={{ color: "#1bbf6a", fontWeight: 700 }}>✓</span> Multi-Device Access</span>
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <img src="/images/tax-webinar/01.png" alt="Expert-led webinar" style={{ width: "100%", maxWidth: 480, aspectRatio: "4 / 3", borderRadius: 14, objectFit: "contain", display: "block" }} />
            </div>
          </div>
        </section>

        {/* ============ WHY TAX WEBINARS ============ */}
        <section style={{ padding: "74px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 50px", color: "#14143d" }}>Why Tax Webinars?</h2>
            <div className="sim_bk_split" style={{ maxWidth: 1150, gap: 60, padding: 0 }}>
              <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 540 }}>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6b7db0", margin: "0 0 40px" }}>To provide Sri Lankans with the first ever digital tax experience through webinars. The uniqueness of our webinars is that they connect the user with the facilitator through a laptop, desktop or their smart mobile phones to give them a real time experience filled with fun and knowledge.</p>
                <div className="sim_bk_grid3" style={{ gap: 24 }}>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, margin: "0 auto 18px", borderRadius: "50%", background: "#fdece4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></svg>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>Multi-Device Access</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Connect from anywhere using your laptop, desktop, or mobile phone</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, margin: "0 auto 18px", borderRadius: "50%", background: "#fdece4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="#f15f2c" stroke="none" /></svg>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>Customizable Topics</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Organizations can choose specific tax areas they want to focus on</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, margin: "0 auto 18px", borderRadius: "50%", background: "#fdece4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 6.5a2.6 2.6 0 0 1 0 5" /><path d="M18 19a5.2 5.2 0 0 0-3-4.7" /></svg>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 10px", color: "#14143d" }}>Interactive Learning</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Real-time interaction with expert facilitators</p>
                  </div>

                </div>
              </div>
              <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                <img src="/images/tax-webinar/02.png" alt="Online Learning" style={{ width: "100%", maxWidth: 420, aspectRatio: "5 / 4", borderRadius: 14, objectFit: "contain", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ============ CHOOSE YOUR TAX TOPIC ============ */}
        <section id="topics" style={{ padding: "74px 0 90px", background: "#f5f6fd" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>Choose Your Tax Topic</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Select the tax area that&apos;s most relevant to your organization&apos;s needs</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1160, margin: "0 auto", gap: 26 }}>
              {topics.map((t, ti) => (
                <div key={ti} className="sim_bk_hover_lift" style={{ display: "flex", flexDirection: "column", background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "32px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                  <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 14px", color: "#14143d" }}>{t.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>{t.desc}</p>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#6b7290", margin: "0 0 20px" }}><span style={{ color: "#f15f2c", fontWeight: 700 }}>For:</span> {t.forWho}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 26 }}>
                    {t.points.map((p, pi) => (
                      <div key={pi} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
                        <span style={{ fontSize: 14, lineHeight: 1.5, color: "#5f6f9a" }}>{p}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#notify" className="sim_bk_btn_orange" style={{ marginTop: "auto", textAlign: "center", fontSize: 14, padding: 13, borderRadius: 8 }}>Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CORPORATE EVENTS ============ */}
        <section style={{ padding: "78px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 50px", color: "#14143d" }}>Corporate Events</h2>
            <div className="sim_bk_split" style={{ maxWidth: 1150, gap: 60, padding: 0 }}>
              <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 560 }}>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 18px" }}>Do you want to train your staff on any specific area of taxation in Sri Lanka?</p>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 30px" }}>Now you can arrange a webinar exclusively catered for the need of your organization through Simplebooks</p>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 22px", color: "#14143d" }}>How does it work?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 34 }}>
                  {corpSteps.map((s, si) => (
                    <div key={si} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                      <div style={{ width: 28, height: 28, flexShrink: 0, borderRadius: "50%", background: "#f15f2c", color: "#fff", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</div>
                      <span style={{ fontSize: 15, lineHeight: 1.5, color: "#5f6f9a", paddingTop: 3 }}>{s.text}</span>
                    </div>
                  ))}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 18px", color: "#14143d" }}>Special Features</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 34 }}>
                  {corpFeatures.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12" /></svg>
                      <span style={{ fontSize: 15, lineHeight: 1.5, color: "#5f6f9a" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#notify" className="sim_bk_btn_dark sim_bk_rad10" style={{ background: "#12123f", fontSize: 15, padding: "15px 34px" }}>Request Corporate Webinar</a>
              </div>
              <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                <img src="/images/tax-webinar/03.png" alt="Corporate Training" style={{ width: "100%", maxWidth: 420, aspectRatio: "1 / 1", borderRadius: 14, objectFit: "contain", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ============ PREVIOUS WEBINARS ============ */}
        <section id="previous" style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>Our Previous Webinars</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Watch recordings of our expert-led tax webinars</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1180, margin: "0 auto", gap: 30 }}>
              {WEBINARS.map((w, vi) => (
                <div key={w.id} className="sim_bk_hover_lift" style={{ border: "1px solid #eef0f6", borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 26px rgba(17,20,77,0.05)", background: "#ffffff" }}>
                  <YouTubeEmbed id={w.id} title={w.title} style={{ borderRadius: 0 }} />
                  <div style={{ padding: "22px 22px 26px" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.35, margin: "0 0 10px", color: "#14143d" }}>{w.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{videos[vi].desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FREE WEBINARS ============ */}
        <section style={{ padding: "74px 0 40px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
              <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 18px", color: "#14143d" }}>FREE WEBINARS</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: 0 }}>Simplebooks organizes free webinars to help Sri Lankan businesses and individuals stay updated with the latest tax regulations and compliance requirements.</p>
            </div>
            <div className="sim_bk_split" style={{ maxWidth: 1000, gap: 60, padding: 0 }}>
              <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <img src="/images/tax-webinar/04.png" alt="Free Webinar Notifications" style={{ width: "100%", maxWidth: 380, aspectRatio: "4 / 3", borderRadius: 14, objectFit: "contain", display: "block" }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 24px", color: "#14143d" }}>Why Join Our Free Webinars?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {freeReasons.map((r, ri) => (
                    <div key={ri} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 26, height: 26, flexShrink: 0, borderRadius: "50%", background: "#1bbf6a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </span>
                      <span style={{ fontSize: 16, color: "#2b3358" }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ NOTIFY FORM ============ */}
        <section id="notify" style={{ padding: "60px 0 90px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>Get Notified About Our Next Free Webinar</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Sign up to receive notifications when we schedule our next free tax webinar.</p>
            </div>
            <div style={{ maxWidth: 980, margin: "0 auto" }}>
              <label style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 10 }}>Name <span style={{ color: "#f15f2c" }}>*</span></label>
              <div style={{ position: "relative", marginBottom: 24 }}>
                <input type="text" placeholder="e.g. John Doe" style={{ width: "100%", padding: "17px 22px", border: "1px solid #e0e3f0", borderRadius: 12, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", width: 28, height: 20, background: "#e63838", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 10, letterSpacing: 1 }}>•••</span>
              </div>

              <div className="sim_bk_form_row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 10 }}>Email <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <input type="email" placeholder="e.g. john.doe@example.com" style={{ width: "100%", padding: "17px 22px", border: "1px solid #e0e3f0", borderRadius: 12, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                    <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 15 }}>⌖</span>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 10 }}>Phone number <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="tel" placeholder="e.g. +94 77 123 4567" style={{ width: "100%", padding: "17px 22px", border: "1px solid #e0e3f0", borderRadius: 12, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
              </div>

              <div className="sim_bk_form_row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 14 }}>Areas of Interest <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div className="sim_bk_interest_grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px" }}>
                    {interests.map((i, ii) => (
                      <label key={ii} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                        <input type="checkbox" style={{ width: 17, height: 17, accentColor: "#f15f2c" }} />
                        <span style={{ fontSize: 15, color: "#3a4a78" }}>{i}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 14 }}>Preferred Language <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select defaultValue="" style={{ width: "100%", padding: "17px 22px", border: "1px solid #e0e3f0", borderRadius: 12, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option value="">Select a language</option>
                      <option>English</option>
                      <option>Sinhala</option>
                      <option>Tamil</option>
                    </select>
                    <span style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 11, pointerEvents: "none" }}>▼</span>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 22 }}>
                <label style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 10 }}>Your message (Optional)</label>
                <textarea placeholder="Tell us about your specific needs..." rows={4} style={{ width: "100%", padding: "17px 22px", border: "1px solid #e0e3f0", borderRadius: 12, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", resize: "vertical" }} />
              </div>

              <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 14, color: "#8a8fa6", margin: "0 0 26px" }}><span style={{ color: "#f15f2c" }}>🔔</span> We&apos;ll only send you notifications about free webinars. No spam, unsubscribe anytime.</p>
              <div style={{ textAlign: "center" }}>
                <button className="sim_bk_btn_orange" style={{ fontWeight: 700, fontSize: 16, padding: "16px 42px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Sign up for Free Webinar</button>
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
