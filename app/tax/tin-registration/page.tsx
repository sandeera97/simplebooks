import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq from "./Faq";

export const metadata: Metadata = {
  title: "TIN Registration | Simplebooks",
};

const steps = [
  { n: "1", title: "Document Collection", img: "/images/tax-tin/01.png", desc: "We guide you through gathering all required documents and ensure everything is complete and accurate." },
  { n: "2", title: "Application Processing", img: "/images/tax-tin/02.png", desc: "Our experts handle all the paperwork, forms, and submissions to the Inland Revenue Department." },
  { n: "3", title: "TIN Certificate Delivery", img: "/images/tax-tin/03.png", desc: "Receive your official TIN certificate and all necessary documentation for your business operations." },
];

const challenges = [
  "Complex government forms and requirements",
  "Long queues and waiting times at IRD offices",
  "Confusing documentation requirements",
  "Risk of application rejection due to errors",
  "Time-consuming back-and-forth processes",
  "Lack of expert guidance and support",
];

const solutions = [
  "Expert document review and preparation",
  "Direct submission to IRD on your behalf",
  "Real-time status updates and tracking",
  "100% accuracy guarantee",
  "Fast-track processing options",
  "Dedicated support throughout the process",
];

const whatYouGet: { title: string; desc: string; img?: string }[] = [
  { title: "Fast Processing", img: "/images/tax-tin/06.png", desc: "Get your TIN certificate in record time with our streamlined process and IRD connections." },
  { title: "100% Accuracy", desc: "Our experts ensure all forms and documents are completed correctly the first time." },
  { title: "Ongoing Support", desc: "Get continued assistance even after your TIN registration is complete." },
];

const basicFeatures = [
  "Document review and preparation",
  "TIN application submission",
  "Basic support via email",
  "Certificate delivery",
  "Standard processing time",
];

const premiumFeatures = [
  "Everything in Basic Package",
  "Priority processing",
  "Dedicated phone support",
  "Real-time status updates",
  "Express delivery",
  "30-day post-registration support",
];

const enterpriseFeatures = [
  "Everything in Premium Package",
  "Create IRD Credentials",
  "10 minutes Free consultation",
  "Custom documentation",
  "Compliance guidance",
  "90-day ongoing support",
];

const faqs = [
  { q: "What documents do I need for TIN registration?", a: "Typically your NIC or passport, business registration details (if applicable), and proof of address. We give you an exact checklist based on your registration type." },
  { q: "How long does the TIN registration process take?", a: "Most registrations are completed within a few working days. Our Premium package includes priority processing for even faster turnaround." },
  { q: "What if my application gets rejected?", a: "We review everything before submission to prevent rejections. In the rare event of an issue, we handle the corrections and resubmission at no extra cost." },
  { q: "Do you provide ongoing tax compliance support?", a: "Yes. Our Premium and Enterprise packages include post-registration support, and our team can help you stay compliant year-round." },
  { q: "Can you help with TIN registration for all business types?", a: "Absolutely — individuals, sole proprietors, partnerships and private limited companies. Just tell us your type and we&apos;ll handle the rest." },
];

export default function TinRegistrationPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section style={{ background: "linear-gradient(135deg, #d3ddff 0%, #c7d3fb 100%)" }}>
          <div className="sim_bk_split" style={{ gap: 56, padding: "60px 0 66px", maxWidth: 1250, margin: "0 auto" }}>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 520 }}>
              <h1 style={{ fontSize: 46, lineHeight: 1.14, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-1px", color: "#11144d" }}>TIN Registration Made Simple</h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4b5578", margin: "0 0 30px" }}>Get your Tax Identification Number registered quickly and correctly with expert guidance. No stress, no confusion, just results.</p>
              <div className="sim_bk_hero_btns" style={{ display: "flex", gap: 14, marginBottom: 24 }}>
                <a href="#contact" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 28px", borderRadius: 8, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Start Your TIN Registration</a>
                <a href="#contact" style={{ textDecoration: "none", color: "#2f4bd6", fontWeight: 600, fontSize: 15, padding: "14px 28px", background: "#ffffff", border: "1.5px solid #2f4bd6", borderRadius: 8 }}>Free Consultation</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>100% Accuracy Guaranteed</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Fast Processing</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Expert Support</span>
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <div style={{ position: "relative", width: 500, maxWidth: "100%", borderRadius: 14, overflow: "hidden", boxShadow: "0 16px 44px rgba(17,20,77,0.2)" }}>
                <div style={{ width: "100%", height: 300, background: "#1a1c3a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ 2025 updates TIN Number registration guide video ]</span>
                </div>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 66, height: 66, borderRadius: "50%", background: "#ff0000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 0, height: 0, borderTop: "13px solid transparent", borderBottom: "13px solid transparent", borderLeft: "22px solid #fff", marginLeft: 5 }} />
                </div>
                <span style={{ position: "absolute", bottom: 12, right: 14, fontSize: 12, color: "#fff", background: "rgba(0,0,0,0.5)", padding: "5px 10px", borderRadius: 5 }}>▶ Watch on YouTube</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRUSTED PARTNER (3 steps) ============ */}
        <section style={{ background: "#ffffff", padding: "74px 0 40px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 20px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Your Trusted TIN Registration Partner</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 18px" }}>We eliminate all the hassles and ensure your TIN registration is completed smoothly and efficiently with our expert guidance.</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#f15f2c", margin: 0 }}>Simple 3-Step process</p>
            </div>
            <div className="sim_bk_steps3" style={{ maxWidth: 1150, margin: "0 auto 30px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
              {steps.map((s, i) => (
                <div key={i} className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 16, padding: "40px 34px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                  <img src={s.img} alt={`${s.title} illustration`} style={{ width: "100%", maxWidth: 200, height: 150, margin: "0 auto 24px", borderRadius: 12, objectFit: "contain", display: "block" }} />
                  <div style={{ width: 46, height: 46, margin: "0 auto 22px", borderRadius: "50%", background: "#1f5cb5", color: "#fff", fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 14px", color: "#11144d" }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 18, fontWeight: 700, color: "#f15f2c", margin: 0 }}>It&apos;s that simple!</p>
          </div>
        </section>

        {/* ============ CHALLENGES ============ */}
        <section style={{ background: "#f5f6fd", padding: "74px 0" }}>
          <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", gap: 60 }}>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 520 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 16px", color: "#11144d" }}>TIN Registration Challenges</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 26px" }}>Many businesses struggle with the TIN registration process, leading to delays and complications.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {challenges.map((c, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                    <span style={{ fontSize: 15, color: "#4b5578" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img src="/images/tax-tin/04.png" alt="Frustrated business owner with paperwork" style={{ width: "100%", maxWidth: 420, height: 320, borderRadius: 16, objectFit: "contain", display: "block" }} />
            </div>
          </div>
        </section>

        {/* ============ SOLUTION ============ */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div className="sim_bk_split sim_bk_split_rev" style={{ maxWidth: 1150, margin: "0 auto", gap: 60 }}>
            <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img src="/images/tax-tin/05.png" alt="Expert support" style={{ width: "100%", maxWidth: 420, height: 320, borderRadius: 16, objectFit: "contain", display: "block" }} />
            </div>
            <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 520 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 16px", color: "#11144d" }}>Our TIN Registration Solution</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 26px" }}>We eliminate all the hassles and ensure your TIN registration is completed smoothly and efficiently.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                {solutions.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>
                    <span style={{ fontSize: 15, color: "#4b5578" }}>{s}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="sim_bk_btn_orange" style={{ display: "inline-block", fontSize: 15, padding: "14px 32px", borderRadius: 8, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get Started Today</a>
            </div>
          </div>
        </section>

        {/* ============ WHAT YOU GET ============ */}
        <section style={{ background: "#f5f6fd", padding: "74px 0 84px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>What You Get</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Complete TIN registration service with professional support</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", gap: 26 }}>
              {whatYouGet.map((g, i) => (
                <div key={i} className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 34px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                  {g.img ? (
                    <img src={g.img} alt={`${g.title} illustration`} style={{ width: "100%", maxWidth: 180, height: 130, margin: "0 auto 24px", objectFit: "contain", display: "block" }} />
                  ) : (
                    <div style={{ width: "100%", maxWidth: 180, height: 130, margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9aa0b4" }}>[ {g.title} illustration ]</span>
                    </div>
                  )}
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>{g.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PACKAGES ============ */}
        <section style={{ background: "#ffffff", padding: "78px 0 90px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>TIN Registration Packages</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Choose the package that best fits your needs</p>
            </div>
            <div className="sim_bk_price_grid" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26, alignItems: "start" }}>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 18, padding: "40px 32px", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                <h3 style={{ textAlign: "center", fontSize: 21, fontWeight: 700, margin: "0 0 16px", color: "#11144d" }}>Basic Package</h3>
                <div style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#11144d" }}>LKR 5,000</div>
                <div style={{ textAlign: "center", fontSize: 14, color: "#8a8fa6", margin: "8px 0 28px" }}>One-time fee</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
                  {basicFeatures.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#4b5578" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="sim_bk_btn_orange" style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 8 }}>Choose Basic</a>
              </div>

              <div className="sim_bk_hover_lift" style={{ position: "relative", background: "#ffffff", border: "2px solid #2f4bd6", borderRadius: 18, padding: "44px 32px 40px", boxShadow: "0 16px 40px rgba(47,75,214,0.16)" }}>
                <span style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", background: "#2f4bd6", color: "#fff", fontSize: 12, fontWeight: 700, padding: "7px 20px", borderRadius: 999, whiteSpace: "nowrap" }}>Most Popular</span>
                <h3 style={{ textAlign: "center", fontSize: 21, fontWeight: 700, margin: "0 0 16px", color: "#11144d" }}>Premium Package</h3>
                <div style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#11144d" }}>LKR 7,500</div>
                <div style={{ textAlign: "center", fontSize: 14, color: "#8a8fa6", margin: "8px 0 28px" }}>One-time fee</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
                  {premiumFeatures.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#4b5578" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="sim_bk_btn_orange" style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 8 }}>Choose Premium</a>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 18, padding: "40px 32px", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                <h3 style={{ textAlign: "center", fontSize: 21, fontWeight: 700, margin: "0 0 16px", color: "#11144d" }}>Enterprise Package</h3>
                <div style={{ textAlign: "center", fontSize: 36, fontWeight: 800, color: "#11144d" }}>LKR 10,000</div>
                <div style={{ textAlign: "center", fontSize: 14, color: "#8a8fa6", margin: "8px 0 28px" }}>One-time fee</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
                  {enterpriseFeatures.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#4b5578" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="sim_bk_btn_orange" style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 14, padding: 14, borderRadius: 8 }}>Choose Enterprise</a>
              </div>

            </div>
          </div>
        </section>

        {/* ============ CONTACT FORM ============ */}
        <section id="contact" style={{ background: "linear-gradient(135deg, #eef0fb 0%, #e7e9fb 100%)", padding: "80px 0" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 44px", color: "#11144d" }}>Get Expert Tax Help Today</h2>
            <div style={{ maxWidth: 780, margin: "0 auto" }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Name <span style={{ color: "#f15f2c" }}>*</span></label>
                <input type="text" placeholder="e.g. John Doe" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
              </div>
              <div className="sim_bk_form_2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Email <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="email" placeholder="e.g. john.doe@example.com" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Phone number <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="tel" placeholder="e.g. +94 77 123 4567" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
              </div>
              <div className="sim_bk_form_2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>What type of TIN registration do you need? <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select defaultValue="" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "var(--font-poppins), sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option value="">Select an option</option>
                      <option>Individual</option>
                      <option>Sole Proprietorship</option>
                      <option>Partnership</option>
                      <option>Private Limited Company</option>
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
                <button className="sim_bk_btn_orange" style={{ border: "none", cursor: "pointer", fontWeight: 700, fontSize: 15, fontFamily: "var(--font-poppins), sans-serif", padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Set up Free Consultation</button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ background: "#ffffff", padding: "80px 0 90px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>Frequently Asked Questions</h2>
            <Faq faqs={faqs} />
            <div style={{ textAlign: "center" }}>
              <a href="#" className="sim_bk_btn_orange" style={{ display: "inline-block", fontWeight: 700, fontSize: 15, padding: "14px 34px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Call Now: 077 270 5624</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
