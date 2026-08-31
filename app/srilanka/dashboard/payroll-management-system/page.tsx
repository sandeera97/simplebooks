import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq2Accordion from "@/components/dashboard/Faq2Accordion";
import WhyTabs from "./WhyTabs";
import GetStartedForm from "./GetStartedForm";
import YouTubeEmbed from "@/components/video/YouTubeEmbed";
import { VIDEOS } from "@/components/video/videos";
import { avatarFor } from "@/components/avatars";

export const metadata: Metadata = {
  title: "Payroll Made Simple | Simplebooks",
};

/* ---------- data ---------- */
const steps = [
  { n: "1", title: "Enter Data", desc: "Our team will enter your details into our system.", hasLine: true },
  { n: "2", title: "Calculation", desc: "Our system will automatically perform the calculations within 5 minutes. Our team of experts will then verify these calculations.", hasLine: true },
  { n: "3", title: "Access Reports", desc: "Access all reports, such as payroll summaries and cash requirements, through the tool.", hasLine: true },
  { n: "4", title: "Upload Files to the Bank", desc: "Our team will upload the bank files and EPF/ETF files to the relevant bank.", hasLine: false },
];

const pricingTop = [
  "EPF & ETF registration services for company and employees",
  "Access to Monthly Reports.",
  "Computations of Payroll",
];

const pricingSub = [
  "Basic Salaries",
  "All Applicable Taxes for Employees",
  "Other Employee Deductions",
  "EPF/ETF and APIT Applicable to Employees",
  "Bonuses and Benefits",
  "Collection and payment of EPF & ETF",
  "Sending Payslips to Employees",
  "Leave Management",
  "Storage of Employee Documents",
];

const testimonials = [
  { quote: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply the saver.", name: "Damith Menaka", role: "Director, Animspire" },
  { quote: "Honest review. Thanks you simplebooks team for the amazing support on my company registration. Highly recommended this hassle-free service 👍", name: "NAWRAN", role: "Director, Social Media Academy" },
  { quote: "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta" },
  { quote: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chathura", role: "Director" },
  { quote: "They provided exactly what I needed. Very responsive and professional team to work with.", name: "Wickramawardena", role: "Manager" },
  { quote: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, follow-ups and overall knowledge of the field and pricing. Clearly an industry leader for company secretarial work in Sri Lanka.", name: "Kalana Muthumuni", role: "" },
  { quote: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
  { quote: "It's a superb experience that I got from Simple Books. I got the contract through on time, very good service. Responding via mails for my queries, updating the process etc. everything is good.", name: "Sarath Senanayake", role: "Director" },
  { quote: "I've registered over a dozen companies with simplebooks and would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
];

const faqData = [
  { q: "How do I use the payroll tool?", a: "Sign up, add your employees, and run your first pay run in minutes. Our guided dashboard walks you through each step, and our experts verify the calculations." },
  { q: "How to store/add employee data?", a: "Go to Users → Add employee and enter their details, or bulk-import your team. All records are stored securely in your dashboard." },
  { q: "How can I view an employee's leave information?", a: "Open the employee's profile to see their leave balances and history, updated in real time with every pay run." },
  { q: "How to download/view employee leave reports?", a: "Head to Reports → Leave, choose your date range, and view or download the summary for any employee or the whole team." },
  { q: "How to create a pay run?", a: "Select 'New pay run', pick the pay period, review the auto-calculated figures, and confirm. Our team then verifies before finalising." },
  { q: "How to edit your pay run?", a: "Before a pay run is finalised you can adjust salaries, allowances and deductions directly, and the totals recalculate instantly." },
  { q: "How to calculate EPF/ETF and taxes?", a: "The tool computes EPF, ETF and APIT automatically based on the latest rates, fully in line with Sri Lankan labour law." },
  { q: "How to download/email a payslip?", a: "Open any pay run, select an employee, and download the payslip or email it to them directly from the dashboard." },
  { q: "What reports can I generate?", a: "Generate payroll summaries, EPF/ETF and PAYE summaries, cash requirement reports, leave reports and more." },
  { q: "How to generate reports?", a: "Go to Reports, choose the report type and date range, and generate it instantly — ready to view, download or share." },
  { q: "Can I download the reports?", a: "Yes. Every report can be downloaded as a PDF, and key summaries can be emailed straight to your bank or team." },
  { q: "Is my data secure?", a: "Your data is encrypted and stored securely, with strict access controls and regular backups." },
  { q: "Can my accountant or bookkeeper use it?", a: "Absolutely. You can invite your accountant or bookkeeper to collaborate directly within your dashboard." },
];

const blogs = [
  { overlay: "EPF & ETF in Sri Lanka", title: "Employee Provident Fund & Trust Fund (EPF & ETF) – What you need to know", meta: "January 15, 2025 | 9 Comments" },
  { overlay: "Salary Sheets, Salary Slips and Salary Slip Formats in Sri Lanka", title: "A–Z Guide on Salary Sheets, Salary Slips, and Salary Slip Formats in Sri Lanka", meta: "January 10, 2025 | 3 Comments" },
  { overlay: "Your Go-to Guide to Payroll Systems in Sri Lanka", title: "Your Go-to Guide to Payroll Systems in Sri Lanka", meta: "December 2, 2024 | No Comments" },
];

const bookkeeping = [
  "Track your income and expenses with profit & loss statements",
  "Double-entry accounting software to balance your transactions",
  "Accounting dashboard to get a bigger picture of your business",
];

const invoicing = [
  "Create and customise professional invoices",
  "Send it to your customers with ease",
  "Set recurring payment invoices",
  "Follow up with overdue reminders",
];

const tax = [
  "File for Individual and Company taxes",
  "Submit all your forms and documents online",
  "Super free and simple process",
];

/* ---------- reusable check icon for the launching-soon cards ---------- */
function CardCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#f15f2c" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="11" />
      <polyline points="17 8.5 10.5 15.5 7 12" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const comingSoonPill: React.CSSProperties = {
  display: "inline-block",
  color: "#b6bacb",
  fontWeight: 600,
  fontSize: 15,
  padding: "13px 30px",
  background: "#f1f2f6",
  borderRadius: 999,
};

export default function PayrollManagementSystemPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "'Poppins', sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>
        {/* ============ HERO ============ */}
        <section className="sim_bk_split" style={{ alignItems: "center", justifyContent: "space-between", gap: 56, padding: "70px 0 80px", maxWidth: 1250, margin: "0 auto" }}>
          <div className="sim_bk_split_text" style={{ maxWidth: 560 }}>
            <h1 style={{ fontSize: 48, lineHeight: 1.12, fontWeight: 800, margin: "0 0 24px", letterSpacing: "-1px", color: "#11144d" }}>Payroll Made Simple: A Guided Payroll Tool with a Professional Touch</h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", margin: "0 0 34px" }}>Sri Lanka&apos;s only payroll tool offering the perfect blend of automation and expert human compliance support. Experience accurate, fast, and stress-free payroll ensuring complete peace of mind.</p>
            <p style={{ fontSize: 16, color: "#8a8fa6", margin: "0 0 18px" }}>Trusted by over <strong style={{ color: "#2f6bef", fontWeight: 700 }}>5000 businesses</strong> in Sri Lanka</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 34, flexWrap: "wrap" }}>
              <span style={{ fontSize: 24, fontWeight: 800 }}>
                <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
              </span>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#11144d" }}>4.9 Rating</span>
              <span style={{ color: "#f5b921", letterSpacing: 1, fontSize: 18 }}>★★★★★</span>
              <span style={{ fontSize: 14, color: "#2f6bef" }}>(800+ cutomer reviews)</span>
            </div>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ display: "inline-block", padding: "15px 40px", fontSize: 16, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Book a demo</a>
            <p style={{ fontSize: 13, fontStyle: "italic", color: "#8a8fa6", margin: "22px 0 0" }}>Full access for free. 1 month free trial. No credit card required.</p>
          </div>
          <div className="sim_bk_split_img" style={{ justifyContent: "flex-end" }}>
            <YouTubeEmbed
              id={VIDEOS.payrollTool.id}
              title={VIDEOS.payrollTool.title}
              style={{ width: 520, maxWidth: "100%" }}
            />
          </div>
        </section>

        {/* ============ WHY SIMPLEBOOKS (tabs) ============ */}
        <section style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <WhyTabs />
        </section>

        {/* ============ 4-STEP PROCESS ============ */}
        <section style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 64px", color: "#11144d" }}>Don&apos;t worry about payroll management anymore –<br />Let us take on the hassle</h2>
          <div className="sim_bk_steps4" style={{ maxWidth: 1150, margin: "0 auto", position: "relative" }}>
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 30 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#7b2ff7", color: "#fff", fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(123,47,247,0.3)" }}>{s.n}</div>
                  {s.hasLine && (
                    <div style={{ position: "absolute", left: "calc(50% + 40px)", right: "calc(-50% + 40px)", top: "50%", borderTop: "2px dashed #c9b6f5" }} />
                  )}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 14px", color: "#2b3358" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 24px", maxWidth: 240, marginLeft: "auto", marginRight: "auto" }}>{s.desc}</p>
                <div style={{ width: 150, height: 120, margin: "0 auto", background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 9px, #eceefa 9px, #eceefa 18px)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ illustration ]</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ WHY PAYROLL BAND ============ */}
        <section style={{ background: "#f5f6fd", padding: "70px 0 78px", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 16px", color: "#11144d" }}>Why Simplebooks Payroll?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 52px" }}>With Simplebooks Payroll, you can have peace of mind knowing that your payroll is<br />in capable hands</p>
          <div style={{ maxWidth: 1120, margin: "0 auto 46px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" /><circle cx="12" cy="11" r="4" fill="#2f6bef" stroke="none" /><polyline points="10.3 11 11.6 12.3 13.9 9.7" stroke="#fff" strokeWidth="1.6" /></svg>
              <div style={{ fontSize: 17, fontWeight: 500, color: "#2b3358", maxWidth: 170, lineHeight: 1.4 }}>Made for your convenience</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /><rect x="6" y="12" width="4" height="3" fill="#c9d4f5" stroke="none" /></svg>
              <div style={{ fontSize: 17, fontWeight: 500, color: "#2b3358", maxWidth: 170, lineHeight: 1.4 }}>100% online, safe and secure</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /><circle cx="18" cy="16" r="5" fill="#2f6bef" stroke="none" /><line x1="16.3" y1="14.3" x2="19.7" y2="17.7" stroke="#fff" strokeWidth="1.6" /><line x1="19.7" y1="14.3" x2="16.3" y2="17.7" stroke="#fff" strokeWidth="1.6" /></svg>
              <div style={{ fontSize: 17, fontWeight: 500, color: "#2b3358", maxWidth: 170, lineHeight: 1.4 }}>Fully compliant</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /><rect x="12" y="12" width="4" height="3" fill="#c9d4f5" stroke="none" /></svg>
              <div style={{ fontSize: 17, fontWeight: 500, color: "#2b3358", maxWidth: 170, lineHeight: 1.4 }}>Team of Payroll experts available anytime</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><line x1="15" y1="15" x2="21" y2="21" /></svg>
              <div style={{ fontSize: 17, fontWeight: 500, color: "#2b3358", maxWidth: 170, lineHeight: 1.4 }}>One month trial - cancel anytime</div>
            </div>
          </div>
          <a href="#get-started" className="sim_bk_btn_orange" style={{ display: "inline-block", padding: "14px 34px", fontSize: 15 }}>Book a demo</a>
        </section>

        {/* ============ PRICING CARD ============ */}
        <section style={{ padding: "84px 0 90px", background: "#ffffff" }}>
          <div className="sim_bk_split" style={{ maxWidth: 1150, margin: "0 auto", background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 22, padding: "54px 0", boxShadow: "0 16px 44px rgba(17,20,77,0.06)", gap: 60 }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: 38, lineHeight: 1.15, fontWeight: 800, margin: "0 0 22px", color: "#11144d" }}>All-inclusive pricing to register your business</h2>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#11144d", marginBottom: 20 }}>1-month trial period</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 34px" }}>In full accordance with Sri Lankan Labor Law and the Shop and Office Act</p>
              <a href="#get-started" className="sim_bk_btn_orange" style={{ display: "inline-block", padding: "14px 34px", fontSize: 15 }}>Book a demo</a>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 24 }}>
                {pricingTop.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="16 9 11 14 8 11" /></svg>
                    <span style={{ fontSize: 17, fontWeight: 600, color: "#2b3358" }}>{p}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 15, paddingLeft: 6 }}>
                {pricingSub.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f15f2c", flexShrink: 0 }} />
                    <span style={{ fontSize: 16, color: "#2b3358" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section style={{ background: "#ffffff", padding: "40px 0 90px" }}>
          <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#11144d" }}>Help us, help you by being one of the 5000 businesses<br />in Sri Lanka that has relied on us.</h2>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div className="sim_bk_tg">
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 14, padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200, boxShadow: "0 6px 22px rgba(17,20,77,0.04)" }}>
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
              <a href="#" className="sim_bk_btn_orange" style={{ display: "inline-block", fontSize: 14, padding: "13px 34px" }}>View more</a>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "80px 0 90px", background: "#eceefb" }}>
          <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 800, margin: "0 0 54px", color: "#11144d" }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: 1180, margin: "0 auto 44px" }}>
            <Faq2Accordion faqs={faqData} />
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ display: "inline-block", padding: "14px 34px", fontSize: 15 }}>Book a demo</a>
          </div>
        </section>

        {/* ============ BLOG READING ============ */}
        <section style={{ padding: "84px 0 90px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 auto 56px", color: "#11144d", maxWidth: 900 }}>We&apos;re on a mission to empower businesses in Sri Lanka, so here&apos;s some reading to improve your experience.</h2>
          <div className="sim_bk_grid3" style={{ maxWidth: 1180, margin: "0 auto" }}>
            {blogs.map((b, i) => (
              <div key={i} className="sim_bk_hover_lift" style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(17,20,77,0.06)", background: "#ffffff" }}>
                <div style={{ height: 220, background: "repeating-linear-gradient(45deg, #2b3168, #2b3168 12px, #333a75 12px, #333a75 24px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center" }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: "#ffffff", lineHeight: 1.25 }}>{b.overlay}</span>
                </div>
                <div style={{ padding: "26px 24px 28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, margin: "0 0 18px", color: "#11144d" }}>{b.title}</h3>
                  <div style={{ fontSize: 13, color: "#9aa0b4", marginBottom: 14 }}>{b.meta}</div>
                  <a href="#" className="sim_bk_readmore" style={{ fontSize: 14, fontWeight: 600, color: "#f15f2c" }}>Read More ›</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ LAUNCHING SOON ============ */}
        <section style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 60px", color: "#11144d" }}>We&apos;re Launching Soon!</h2>
          <div className="sim_bk_bpt3" style={{ maxWidth: 1120, margin: "0 auto" }}>

            <div>
              <div style={{ width: 46, height: 46, borderRadius: 10, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 2v4h6V2" /><line x1="8" y1="11" x2="16" y2="11" /><line x1="8" y1="15" x2="13" y2="15" /></svg>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 20px", color: "#11144d" }}>Bookkeeping</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7290", margin: "0 0 26px" }}>Experience pain-free accounting with Simplebooks Dashboard</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 34 }}>
                {bookkeeping.map((i, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12 }}>
                    <CardCheck />
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "#2b3358" }}>{i}</span>
                  </div>
                ))}
              </div>
              <span style={comingSoonPill}>Coming soon</span>
            </div>

            <div>
              <div style={{ width: 46, height: 46, borderRadius: 10, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4" /></svg>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 20px", color: "#11144d" }}>Invoicing</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7290", margin: "0 0 26px" }}>Save time and collect payments faster with Simplebooks Invoice</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 34 }}>
                {invoicing.map((i, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12 }}>
                    <CardCheck />
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "#2b3358" }}>{i}</span>
                  </div>
                ))}
              </div>
              <a href="/srilanka/dashboard/accounting-software" className="sim_bk_btn_orange" style={{ display: "inline-block", padding: "13px 30px", fontSize: 15 }}>Use Invoicing Tool</a>
            </div>

            <div>
              <div style={{ width: 46, height: 46, borderRadius: 10, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 20px", color: "#11144d" }}>Tax</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7290", margin: "0 0 26px" }}>Sign up on the Simplebooks Dashboard and file your taxes online!</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 34 }}>
                {tax.map((i, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12 }}>
                    <CardCheck />
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "#2b3358" }}>{i}</span>
                  </div>
                ))}
              </div>
              <span style={comingSoonPill}>Coming soon</span>
            </div>

          </div>
        </section>

        {/* ============ GET STARTED FORM ============ */}
        <section id="get-started" style={{ position: "relative", padding: "80px 0 100px", background: "#f5f6fd", overflow: "hidden" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#11144d" }}>Get Started</h2>
            <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
          </div>
          <GetStartedForm />
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
