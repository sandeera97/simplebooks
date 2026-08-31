import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq from "./Faq";
import { avatarFor } from "@/components/avatars";

export const metadata: Metadata = {
  title: "Foreign Income Tax | Simplebooks",
  description:
    "Navigate Sri Lanka's new USD tax regulations with confidence. Simplebooks helps freelancers and remote employees earning USD achieve full compliance while maximizing savings.",
};

/* ---------- data ---------- */
const pathSteps = [
  { n: "1", title: "Complete Tax Assessment", desc: "15-minute consultation to identify your specific compliance gaps and opportunities" },
  { n: "2", title: "Strategic Tax Planning", desc: "Personalized remittance strategy with quantified savings projections" },
  { n: "3", title: "Automated Compliance", desc: "Ongoing support with deadline tracking and error-free filing" },
];

const basicPlan = [
  "Monthly/Quarterly tax filing",
  "Basic tax calculations",
  "Payment processing support",
  "Email support",
  "Deadline reminders",
];
const proPlan = [
  "Everything in Basic Plan",
  "Tax optimization strategies",
  "Foreign tax credit claims",
  "Business expense optimization",
  "Monthly consultation calls",
  "Priority support",
];
const premiumPlan = [
  "Everything in Professional Plan",
  "Dedicated tax advisor",
  "Advanced tax planning",
  "Multi-country tax coordination",
  "24/7 support access",
  "Annual tax strategy review",
];

const testimonials = [
  { quote: "The new USD regulations had me completely lost. Simplebooks made compliance effortless and even reduced my tax bill.", name: "Chanux Bro", role: "Freelance Developer" },
  { quote: "Very good service, very happy with your assistance. They handle my quarterly filing so I can focus on clients.", name: "Jeevan Mendis", role: "Consultant" },
  { quote: "They took the time to explain every step of my USD income tax. No more stress, no more guesswork.", name: "Ratta", role: "Founder, Studio Ratta" },
  { quote: "Honest review! Thank you simplebooks team. Fast, professional and transparent with foreign income filing. 👍", name: "NAWRAN", role: "Remote Employee" },
  { quote: "Excellent and stress-free experience. My foreign tax credits were maximised and everything was filed on time.", name: "Damith Menaka", role: "Director, Animspire" },
  { quote: "I finally understand my USD tax obligations. The team is responsive and genuinely helpful.", name: "Sandul Perera", role: "Freelancer" },
  { quote: "Superb service from start to finish. Responding via mail for my queries and updating the process throughout.", name: "Sarath Senanayake", role: "Remote Employee" },
  { quote: "Recommended every step of the way. They've handled my remittance planning for years.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
];

const faqs = [
  { q: "Do I need to pay tax monthly or quarterly?", a: "It depends on your classification. Remote employees typically pay APIT monthly, while freelancers and consultants pay quarterly. We'll confirm your schedule and handle every deadline." },
  { q: "Can I claim foreign tax credits?", a: "Yes. If tax was withheld abroad, you may be eligible for foreign tax credits. We analyse your eligibility and prepare the documentation to maximise your claim." },
  { q: "What expenses can I deduct as a freelancer?", a: "Business-related expenses — equipment, software, home office, professional services and more — can often be deducted. We help you categorise and document everything correctly." },
  { q: "What happens if I miss a payment deadline?", a: "Missed deadlines can trigger a 10% penalty plus monthly interest. Our proactive tracking and reminders ensure you never miss a payment." },
  { q: "How do I know if I'm classified as an employee or freelancer?", a: "It comes down to how your income is earned and reported. Our experts assess your situation and confirm the correct classification during your free assessment." },
];

export default function ForeignIncomePage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "'Poppins', sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section style={{ background: "linear-gradient(135deg, #cdd8fb 0%, #c3d0fa 100%)" }}>
          <div className="sim_bk_split" style={{ alignItems: "center", justifyContent: "space-between", gap: 56, padding: "58px 0 62px", maxWidth: 1250 }}>
            <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
              <h1 style={{ fontSize: 42, lineHeight: 1.16, fontWeight: 800, margin: "0 0 18px", letterSpacing: "-0.5px", color: "#11144d" }}>Navigate Sri Lanka&apos;s New USD Tax Regulations with Confidence</h1>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#4b5578", margin: "0 0 28px" }}>From April 2025, freelancers and remote employees earning in USD now face 15% tax regulations. Don&apos;t let confusion cost you thousands in penalties.</p>
              <div className="hero-btns" style={{ display: "flex", gap: 14, marginBottom: 26 }}>
                <a href="#contact" className="sim_bk_btn_orange sim_bk_rad10" style={{ padding: "14px 28px", fontSize: 15, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get Free Tax Assessment</a>
                <a href="#contact" className="btn-white-o" style={{ textDecoration: "none", color: "#11144d", fontWeight: 600, fontSize: 15, padding: "14px 28px", background: "transparent", border: "1.5px solid #11144d", borderRadius: 8 }}>Free Consultation</a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>USD-specialized guidance</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>1,000+ USD earners helped</span>
                <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: "#4b5578" }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Zero penalty track record</span>
              </div>
            </div>
            <div className="sim_bk_split_img" style={{ display: "flex", justifyContent: "flex-end" }}>
              <img src="/images/tax-foreign/01.png" alt="USD tax team" style={{ width: "100%", maxWidth: 440, height: 320, borderRadius: 12, objectFit: "contain", display: "block" }} />
            </div>
          </div>
        </section>

        {/* ============ USD TAX CHALLENGES ============ */}
        <section style={{ padding: "70px 0 40px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>The USD Tax Challenges You&apos;re Facing Right Now</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>New 15% tax regulations on USD earnings are creating confusion and stress for thousands of Sri Lankan freelancers and remote workers.</p>
            </div>
            <div className="grid4" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>

              <div className="plain-card" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "32px 26px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 52, height: 52, margin: "0 auto 20px", borderRadius: "50%", background: "#fdece2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Tax Rate Confusion</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Complex 15% tax calculations on USD bank remittances requiring professional guidance</p>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "32px 26px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 52, height: 52, margin: "0 auto 20px", borderRadius: "50%", background: "#fdece2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /></svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Compliance Deadlines</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Critical payment deadlines with varying requirements causing compliance risks</p>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "32px 26px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 52, height: 52, margin: "0 auto 20px", borderRadius: "50%", background: "#fdece2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="9" y2="10" /><line x1="12" y1="10" x2="13" y2="10" /><line x1="8" y1="14" x2="9" y2="14" /><line x1="12" y1="14" x2="13" y2="14" /></svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Complex Calculations</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Intricate cumulative income calculations and foreign tax credit considerations</p>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "32px 26px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.03)" }}>
                <div style={{ width: 52, height: 52, margin: "0 auto 20px", borderRadius: "50%", background: "#fdece2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Regulatory Compliance</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Potential IRD penalties and regulatory risks requiring expert oversight</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ 3-STEP PATH ============ */}
        <section style={{ padding: "40px 0 74px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ maxWidth: 1150, margin: "0 auto", background: "#eef0fb", borderRadius: 18, padding: "50px 40px" }}>
              <h2 style={{ textAlign: "center", fontSize: 26, fontWeight: 800, margin: "0 0 44px", color: "#11144d" }}>Your Simple 3-Step Path to Tax Confidence</h2>
              <div className="steps3" style={{ maxWidth: 980, margin: "0 auto 24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                {pathSteps.map((s) => (
                  <div key={s.n} style={{ textAlign: "center", position: "relative" }}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#f15f2c", color: "#fff", fontSize: 17, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{s.n}</div>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 10px", color: "#11144d" }}>{s.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto", maxWidth: 260 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: "center", fontSize: 17, fontWeight: 700, color: "#2f6bef", margin: 0 }}>It&apos;s that simple!</p>
            </div>
          </div>
        </section>

        {/* ============ WHICH CATEGORY ============ */}
        <section style={{ padding: "40px 0 74px", background: "linear-gradient(180deg, #ffffff, #f7f8fd)" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 50px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Which Category Describes You Best?</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Understanding your tax classification is the first step toward proper compliance and optimization</p>
            </div>
            <div className="cat-grid" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

              {/* Freelancer card */}
              <div style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 18, padding: "40px 36px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <div style={{ textAlign: "center", marginBottom: 26 }}>
                  <img src="/images/tax-foreign/02.png" alt="Freelancer" style={{ width: 110, height: 110, borderRadius: "50%", background: "#fdeee7", margin: "0 auto 18px", objectFit: "contain", display: "block" }} />
                  <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Freelancer / Consultant</h3>
                  <span style={{ display: "inline-block", background: "#f15f2c", color: "#fff", fontSize: 13, fontWeight: 700, padding: "6px 18px", borderRadius: 999 }}>Business Income</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>Key Characteristics</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Business income classification</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Quarterly tax payments</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Expense deductions available</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Self-assessment system</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>Common Challenges</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Multiple client management</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Complex expense documentation</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Quarterly calculation complexity</div>
                </div>
                <div style={{ background: "#fdf3ef", borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /></svg>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>Freelancer Tax Calculator</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7290", margin: "0 0 16px" }}>Optimize your quarterly tax obligations and maximize deductions with our specialized calculator.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Quarterly tax calculations</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Business expense deductions</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Foreign tax credit optimization</div>
                  </div>
                  <a href="#contact" className="sim_bk_btn_orange sim_bk_rad10" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 700, fontSize: 14, padding: 14 }}>Use Freelancer Calculator ↗</a>
                </div>
              </div>

              {/* Employee card */}
              <div style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 18, padding: "40px 36px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <div style={{ textAlign: "center", marginBottom: 26 }}>
                  <img src="/images/tax-foreign/03.png" alt="Remote Employee" style={{ width: 110, height: 110, borderRadius: "50%", background: "#eef0f6", margin: "0 auto 18px", objectFit: "contain", display: "block" }} />
                  <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Remote Employee</h3>
                  <span style={{ display: "inline-block", background: "#14143d", color: "#fff", fontSize: 13, fontWeight: 700, padding: "6px 18px", borderRadius: 999 }}>Employment Income</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>Key Characteristics</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 26 }}>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Employment income classification</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Monthly APIT payments</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Limited expense deductions</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Cumulative income calculation</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>Common Challenges</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Monthly payment pressure</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Employer compliance confusion</div>
                  <div style={{ fontSize: 14.5, color: "#6b7290" }}>Limited deduction opportunities</div>
                </div>
                <div style={{ background: "#f4f5fb", borderRadius: 14, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /></svg>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#11144d" }}>Employee Tax Calculator</span>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b7290", margin: "0 0 16px" }}>Calculate your monthly APIT obligations and track cumulative income tax liability.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Monthly APIT calculations</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Cumulative income tracking</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Annual tax projections</div>
                  </div>
                  <a href="#contact" className="btn-navy" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, textDecoration: "none", color: "#ffffff", fontWeight: 700, fontSize: 14, padding: 14, background: "#14143d", borderRadius: 8 }}>Use Employee Calculator ↗</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ STILL NOT SURE ============ */}
        <section style={{ padding: "20px 0 74px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ maxWidth: 1150, margin: "0 auto", background: "linear-gradient(120deg, #fdeee7, #f4f2fb)", borderRadius: 18, padding: "50px 40px", textAlign: "center" }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Still Not Sure Which Category You Belong To?</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 30px" }}>Our tax experts can help you determine your correct classification and develop a personalized compliance strategy.</p>
              <a href="#contact" className="sim_bk_btn_orange" style={{ padding: "14px 32px", fontSize: 15, boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}>Get Free Tax Assessment</a>
            </div>
          </div>
        </section>

        {/* ============ TRUSTED GUIDE ============ */}
        <section style={{ padding: "40px 0 74px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Your Trusted Guide Through Sri Lanka&apos;s Tax Maze</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>We understand the overwhelming stress of new tax regulations</p>
            </div>
            <div className="sim_bk_split" style={{ maxWidth: 1150, padding: 0, alignItems: "center", justifyContent: "space-between", gap: 60 }}>
              <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
                <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 16px", color: "#11144d", lineHeight: 1.3 }}>Navigating Sri Lanka&apos;s complex tax landscape shouldn&apos;t be a solo journey</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 30px" }}>At Simplebooks, we&apos;ve helped thousands of USD earners just like you achieve complete compliance while maximizing their savings. Our expertise in foreign income taxation ensures you never face penalties or miss valuable deductions.</p>
                <div className="stat-row" style={{ display: "flex", gap: 16 }}>
                  <div style={{ flex: 1, background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "22px 18px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#f15f2c" }}>1,000+</div>
                    <div style={{ fontSize: 13, color: "#8a8fa6", marginTop: 4 }}>Successful USD tax clients</div>
                  </div>
                  <div style={{ flex: 1, background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "22px 18px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#11144d" }}>99.9%</div>
                    <div style={{ fontSize: 13, color: "#8a8fa6", marginTop: 4 }}>Compliance rate with IRD</div>
                  </div>
                  <div style={{ flex: 1, background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "22px 18px", textAlign: "center", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "#1bbf6a" }}>Zero</div>
                    <div style={{ fontSize: 13, color: "#8a8fa6", marginTop: 4 }}>Penalty incidents for active clients</div>
                  </div>
                </div>
              </div>
              <div className="sim_bk_split_img" style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/tax-foreign/04.png" alt="Tax Compliance Team" style={{ width: "100%", maxWidth: 420, height: 320, borderRadius: 12, objectFit: "contain", display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ============ LIFE AFTER TAX STRESS ============ */}
        <section style={{ padding: "74px 0 84px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Picture Your Life After Tax Stress</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Real results from our USD income tax compliance services</p>
            </div>
            <div className="grid4" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 22px", borderRadius: "50%", background: "#fdece2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Peace of Mind</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Guaranteed compliance with all IRD requirements</p>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 22px", borderRadius: "50%", background: "#dcf6e6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Average 25% Tax Reduction</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Through strategic optimization and legal deductions</p>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 22px", borderRadius: "50%", background: "#e7e9f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 8 12 12 15 14" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>15+ Hours Monthly Savings</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Focus on your business, not paperwork</p>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 28px", textAlign: "center", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 22px", borderRadius: "50%", background: "#fdf3d6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0a83a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="21 11 21 7 17 7" /></svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Expert Guidance</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: 0 }}>Professional support for all USD tax matters</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ COST OF DOING NOTHING ============ */}
        <section style={{ padding: "74px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 44px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>The Cost of Doing Nothing</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Understanding the real financial impact of non-compliance</p>
            </div>
            <div className="cost-split" style={{ maxWidth: 1150, margin: "0 auto", display: "flex", gap: 30, alignItems: "stretch" }}>
              <div style={{ flex: 1, border: "1px solid #eef0f6", borderRadius: 16, padding: 30, boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                <h3 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, margin: "0 0 20px", color: "#11144d" }}>How Tax Penalties Escalate</h3>
                <img src="/images/tax-foreign/05.png" alt="Tax Penalty Escalation Chart" style={{ width: "100%", height: 300, borderRadius: 10, marginBottom: 20, objectFit: "contain", display: "block" }} />
                <div style={{ background: "#fdeef0", borderRadius: 10, padding: 16, textAlign: "center", fontSize: 15, fontWeight: 700, color: "#e0416b" }}>Rs. 500,000 tax becomes Rs. 1,040,000 in just 12 months</div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ borderLeft: "4px solid #f04438", background: "#fdfbfb", borderRadius: 12, padding: "26px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "#11144d" }}>Specific Consequences:</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: "50%", background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></span><span style={{ fontSize: 15, color: "#4b5578" }}>10% immediate penalty + 1.5% monthly interest</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: "50%", background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg></span><span style={{ fontSize: 15, color: "#4b5578" }}>IRD audit exposure and investigations</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: "50%", background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="16" y2="11" /><line x1="8" y1="15" x2="12" y2="15" /></svg></span><span style={{ fontSize: 15, color: "#4b5578" }}>Business limitation and financing restrictions</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: "50%", background: "#fde3e3", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /></svg></span><span style={{ fontSize: 15, color: "#4b5578" }}>Professional reputation damage</span></div>
                  </div>
                </div>
                <div style={{ borderLeft: "4px solid #e0a83a", background: "#fdf9ed", borderRadius: 12, padding: "22px 26px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8892a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#8a6d1f" }}>Don&apos;t Wait Until It&apos;s Too Late</span>
                  </div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#8a7a4f", margin: "0 0 12px" }}>Every month you delay compliance increases your financial risk exponentially. The new USD tax regulations are already in effect, and the IRD is actively monitoring compliance.</p>
                  <p style={{ fontSize: 13.5, fontWeight: 700, color: "#c8892a", margin: 0 }}>Act now to avoid joining the thousands facing penalties and interest charges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ USD INCOME TAX SERVICES ============ */}
        <section style={{ padding: "74px 0 84px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 50px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Our USD Income Tax Services</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Comprehensive solutions for freelancers and remote employees earning USD income</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1150, margin: "0 auto", gap: 26 }}>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fdece2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="11" x2="9" y2="11" /><line x1="12" y1="11" x2="13" y2="11" /></svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Tax Assessment &amp; Planning</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 18px" }}>Complete analysis of your USD income tax obligations and strategic planning.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Income classification analysis</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Tax optimization strategies</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Remittance planning</div>
                </div>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e7e9f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><polyline points="14 3 14 7 18 7" /></svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Monthly/Quarterly Filing</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 18px" }}>Professional tax return preparation and submission for both employee and business income.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>APIT monthly returns</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Quarterly business returns</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Deadline management</div>
                </div>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#dcf6e6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b9f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Payment Processing</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 18px" }}>Streamlined tax payment processing with proper documentation and tracking.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Online payment setup</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Payment scheduling</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Receipt management</div>
                </div>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#dde7fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2f6bef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Foreign Tax Credits</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 18px" }}>Maximize your savings through proper foreign tax credit claims and documentation.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Credit eligibility analysis</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Documentation preparation</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Credit optimization</div>
                </div>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#ece0fb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b3fe0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 17 9 11 13 15 21 7" /><polyline points="21 11 21 7 17 7" /></svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Business Expense Optimization</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 18px" }}>Identify and claim all eligible business expenses to minimize your tax liability.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Expense categorization</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Documentation guidance</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Deduction maximization</div>
                </div>
              </div>

              <div className="plain-card" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 30px", boxShadow: "0 8px 26px rgba(17,20,77,0.04)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#fdf3d6", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0a83a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3z" /><path d="M3 19a2 2 0 0 0 2 2h1v-7H3z" /></svg>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 12px", color: "#11144d" }}>Ongoing Support</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 18px" }}>Continuous guidance and support for all your USD income tax matters.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Expert consultation</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>Regulatory updates</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#6b7290" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9.5 11 14.5 8 11.5" /></svg>24/7 support access</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============ PACKAGES ============ */}
        <section style={{ padding: "78px 0 40px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>USD Income Tax Service Packages</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Choose the perfect plan for your USD income tax compliance needs</p>
            </div>
            <div className="price-grid" style={{ maxWidth: 1150, margin: "0 auto 34px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26, alignItems: "start" }}>

              <div style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 18, padding: "40px 32px", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                <h3 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Basic Compliance</h3>
                <div style={{ textAlign: "center", fontSize: 34, fontWeight: 800, color: "#f15f2c" }}>LKR 15,000</div>
                <div style={{ textAlign: "center", fontSize: 14, color: "#8a8fa6", margin: "8px 0 28px" }}>Per month</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
                  {basicPlan.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#2b3358" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="sim_bk_btn_orange sim_bk_rad10" style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 14, padding: 14 }}>Choose Basic Plan</a>
              </div>

              <div style={{ position: "relative", background: "#ffffff", border: "2px solid #2f4bd6", borderRadius: 18, padding: "44px 32px 40px", boxShadow: "0 16px 40px rgba(47,75,214,0.16)" }}>
                <span style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", background: "#2f4bd6", color: "#fff", fontSize: 12, fontWeight: 700, padding: "7px 20px", borderRadius: 999, whiteSpace: "nowrap" }}>Most Popular</span>
                <h3 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Professional</h3>
                <div style={{ textAlign: "center", fontSize: 34, fontWeight: 800, color: "#2f4bd6" }}>LKR 25,000</div>
                <div style={{ textAlign: "center", fontSize: 14, color: "#8a8fa6", margin: "8px 0 28px" }}>Per month</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
                  {proPlan.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#2b3358" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="btn-blue" style={{ display: "block", textAlign: "center", textDecoration: "none", color: "#ffffff", fontWeight: 700, fontSize: 14, padding: 14, background: "#2f4bd6", borderRadius: 8 }}>Choose Professional Plan</a>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #eaedf7", borderRadius: 18, padding: "40px 32px", boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
                <h3 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Premium</h3>
                <div style={{ textAlign: "center", fontSize: 34, fontWeight: 800, color: "#f15f2c" }}>LKR 40,000</div>
                <div style={{ textAlign: "center", fontSize: 14, color: "#8a8fa6", margin: "8px 0 28px" }}>Per month</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
                  {premiumPlan.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}><span style={{ color: "#1bbf6a", fontWeight: 700, flexShrink: 0 }}>✓</span><span style={{ fontSize: 15, color: "#2b3358" }}>{f}</span></div>
                  ))}
                </div>
                <a href="#contact" className="sim_bk_btn_orange sim_bk_rad10" style={{ display: "block", textAlign: "center", fontWeight: 700, fontSize: 14, padding: 14 }}>Choose Premium Plan</a>
              </div>

            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "#8a8fa6", margin: "0 0 22px" }}>All plans include free access to our tax calculators and regulatory updates.</p>
            <div className="hero-btns" style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              <a href="#contact" className="btn-navy" style={{ textDecoration: "none", color: "#ffffff", fontWeight: 600, fontSize: 15, padding: "14px 30px", background: "#14143d", borderRadius: 8 }}>Schedule Free Consultation</a>
              <a href="#" className="btn-navy-o" style={{ textDecoration: "none", color: "#14143d", fontWeight: 600, fontSize: 15, padding: "14px 30px", background: "#ffffff", border: "1.5px solid #14143d", borderRadius: 8 }}>Compare All Plans</a>
            </div>
          </div>
        </section>

        {/* ============ REAL PEOPLE ============ */}
        <section style={{ padding: "70px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>Real People, Real Results</h2>
            <div style={{ maxWidth: 1250, margin: "0 auto" }}>
              <div className="grid4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
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
          </div>
        </section>

        {/* ============ CONTACT FORM ============ */}
        <section id="contact" style={{ padding: "80px 0", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 44px", color: "#11144d" }}>Get Expert Tax Help Today</h2>
            <div style={{ maxWidth: 780, margin: "0 auto" }}>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Name <span style={{ color: "#f15f2c" }}>*</span></label>
                <input type="text" placeholder="e.g. John Doe" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#11144d" }} />
              </div>
              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Email <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="email" placeholder="e.g. john.doe@example.com" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Phone number <span style={{ color: "#f15f2c" }}>*</span></label>
                  <input type="tel" placeholder="e.g. +94 77 123 4567" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#11144d" }} />
                </div>
              </div>
              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Are you an employee or freelancer? <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select defaultValue="" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option value="" disabled>Select an option</option>
                      <option>Freelancer / Consultant</option>
                      <option>Remote Employee</option>
                      <option>Not sure</option>
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#9aa0b4", fontSize: 12, pointerEvents: "none" }}>▾</span>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#11144d", marginBottom: 8 }}>Preferred Language <span style={{ color: "#f15f2c" }}>*</span></label>
                  <div style={{ position: "relative" }}>
                    <select defaultValue="" style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#11144d", appearance: "none", WebkitAppearance: "none" }}>
                      <option value="" disabled>Select a language</option>
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
                <textarea placeholder="Tell us about your specific needs..." rows={4} style={{ width: "100%", padding: "16px 18px", border: "1px solid #e2e5f2", borderRadius: 10, background: "#ffffff", fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#11144d", resize: "vertical" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <button className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "16px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Set up Free Consultation</button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "80px 0 90px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 50px", color: "#11144d" }}>Frequently Asked Questions</h2>
            <Faq items={faqs} />
            <div style={{ textAlign: "center" }}>
              <a href="#" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 34px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Call Now: 077 270 5624</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
