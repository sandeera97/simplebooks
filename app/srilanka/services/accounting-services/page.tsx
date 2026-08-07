import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ServiceForm from "@/components/services/ServiceForm";

export const metadata: Metadata = {
  title: "Bookkeeping & Accounting Services | Simplebooks",
};

/* ---------- renderVals() data (ported from reference) ---------- */
const steps: { n: string; title: string; lineDisplay: "block" | "none" }[] = [
  { n: "1", title: "Tell us about your business", lineDisplay: "block" },
  { n: "2", title: "Migrate your documents", lineDisplay: "block" },
  { n: "3", title: "We'll process your paperwork", lineDisplay: "block" },
  { n: "4", title: "Deliver tax ready financials", lineDisplay: "block" },
  { n: "5", title: "Bookkeeping meetings", lineDisplay: "block" },
  { n: "6", title: "Help you with taxation", lineDisplay: "none" },
];

const software: { name: string; img: string }[] = [
  { name: "Quickbooks", img: "/images/bookkeeping/04.png" },
  { name: "Zoho Books", img: "/images/bookkeeping/05.png" },
  { name: "Xero", img: "/images/bookkeeping/06.png" },
];

const needList: string[] = [
  "Invoices",
  "Invoice Receipts",
  "Payroll Details",
  "Bill Payments",
  "Bills",
  "Petty Cash Expenses",
  "Bank Statements",
];

const blogs: { overlay: string; title: string; meta: string }[] = [
  {
    overlay: "What are Source Documents",
    title:
      "8 Source Documents You Should Maintain in Your Private Limited Company | Sri Lanka Accountant Service",
    meta: "April 2, 2021 | No Comments",
  },
  {
    overlay: "The Entrepreneur's Guide to Bookkeeping",
    title: "The Entrepreneur's Guide To Bookkeeping",
    meta: "August 22, 2017 | No Comments",
  },
  {
    overlay: "Bookkeeping Financial Survival Guide",
    title: "Bookkeeping – A Financial Guide for Survival",
    meta: "March 3, 2017 | No Comments",
  },
];

const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.",
    name: "Travel with Wife",
    role: "@travelwithwife",
  },
  {
    quote:
      "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.",
    name: "Damith Menaka",
    role: "Director, Animspire",
  },
  {
    quote:
      "Honest review! Thanks you simplebooks team for the amazing support on my company registration. Highly recommended this hassle-free service 👍",
    name: "NAWRAN",
    role: "Director, Social Media Academy",
  },
  {
    quote:
      "They took the time to explain what they were doing every step of the way. This took a lot of stress away. I recommend simplebooks to anyone in need of the services they provide.",
    name: "Ratta",
    role: "Founder, Studio Ratta",
  },
  {
    quote: "SUPER!!! It's the best place to ever do business with. Dream team!",
    name: "Chathura",
    role: "Director",
  },
  {
    quote:
      "They provided exactly what I needed. Very responsive and professional team to work with.",
    name: "Wickramawardena",
    role: "Manager",
  },
  {
    quote:
      "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, follow-ups and overall knowledge of the field and pricing. Clearly an industry leader for company secretarial work in Sri Lanka.",
    name: "Kalana Muthumuni",
    role: "",
  },
  {
    quote:
      "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.",
    name: "Sandul Perera",
    role: "Director",
  },
  {
    quote:
      "It's a superb experience that I got from Simple Books. I got the contract through on time, very good service. Responding via mails for my queries, updating the process etc. everything is good.",
    name: "Sarath Senanayake",
    role: "Director",
  },
  {
    quote:
      "I've registered over a dozen companies with simplebooks and would recommend them every step of the way.",
    name: "Bhanuka Harischandra",
    role: "Founder, Surge Global",
  },
];

export default function AccountingServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section
          className="sim_bk_split"
          style={{ alignItems: "center", justifyContent: "space-between", gap: 56, padding: "60px 0 70px" }}
        >
          <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
            <h1 style={{ fontSize: 50, lineHeight: 1.14, fontWeight: 800, margin: "0 0 26px", letterSpacing: "-1px" }}>
              <span style={{ color: "#14143d" }}>Don&apos;t worry about</span>
              <br />
              <span style={{ color: "#6d1fe0" }}>bookkeeping</span> <span style={{ color: "#14143d" }}>and</span>
              <br />
              <span style={{ color: "#6d1fe0" }}>accounting services</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", margin: "0 0 34px" }}>
              We&apos;ll take care of it for you. A professional bookkeeper on call at an affordable price. Get
              powerful insights about your business and grow the right way.
            </p>
            <a
              href="#get-started"
              className="sim_bk_btn_orange"
              style={{ display: "inline-block", fontSize: 16, padding: "15px 38px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}
            >
              Get a Free Consultation
            </a>
          </div>
          <div className="sim_bk_split_img">
            <div
              className="sim_bk_ph_img"
              style={{
                width: 500,
                height: 380,
                background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 10px, #eceefa 10px, #eceefa 20px)",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "monospace", fontSize: 13, color: "#9aa0b4" }}>[ bookkeeping illustration ]</span>
            </div>
          </div>
        </section>

        {/* ============ 24-7 STEPS ============ */}
        <section style={{ padding: "70px 0 80px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto 56px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 18px", color: "#14143d" }}>
                24-7 Bookkeeping and Accounting Services
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: "0 0 14px" }}>
                Enjoy the luxury of a dedicated bookkeeper for your company at an affordable price point.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>
                Don&apos;t worry about complex bookkeeping or accounting processes anymore. Here at Simplebooks,
                we&apos;ll walk you through a clearly defined, transparent process.
              </p>
            </div>
            <div className="sim_bk_steps6" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
              {steps.map((s) => (
                <div key={s.n} style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: "#6d1fe0",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        display: s.lineDisplay,
                        position: "absolute",
                        left: "calc(50% + 34px)",
                        right: "calc(-50% + 34px)",
                        top: "50%",
                        borderTop: "2px dashed #c4a8f5",
                      }}
                    />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.4, margin: "0 0 20px", color: "#3a4a78", minHeight: 42 }}>
                    {s.title}
                  </h3>
                  <div
                    className="sim_bk_ph_img"
                    style={{
                      width: 120,
                      height: 100,
                      margin: "0 auto",
                      background: "repeating-linear-gradient(45deg, #e4e7f6, #e4e7f6 9px, #edeffa 9px, #edeffa 18px)",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ art ]</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ADVANTAGE ============ */}
        <section style={{ padding: "84px 0 70px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#14143d" }}>
              The Simplebooks Bookkeeping and
              <br />
              Accounting Advantage
            </h2>
            <div
              className="sim_bk_split"
              style={{
                alignItems: "center",
                gap: 56,
                padding: 48,
                border: "1px solid #e7e3fb",
                borderRadius: 20,
              }}
            >
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <img
                  src="/images/bookkeeping/01.png"
                  alt="Growing business illustration - team reviewing an upward growth chart"
                  style={{ width: "100%", height: 320, objectFit: "contain", borderRadius: 14, display: "block" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, color: "#6d1fe0", marginBottom: 16 }}>
                  A STRESS FREE TAX SEASON
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#14143d" }}>
                  Focus on growing your business. Let us worry about tax season.
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#7a86a8", margin: 0 }}>
                  Ready to feel like it&apos;s Christmas in tax season? We&apos;ll take care of everything from
                  preparing your documentation to meeting your tax deadlines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PURPLE CTA 1 ============ */}
        <section style={{ padding: "30px 0 70px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto", background: "#6d1fe0", borderRadius: 18, padding: "56px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.3, margin: "0 0 18px", color: "#ffffff" }}>
              Need help to get your book up to date?
              <br />
              Our Team is here to help!
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#dcc9fb", margin: "0 0 32px" }}>
              Let our team comb through your paperwork and organize your books. We&apos;ll pair you up with an
              experienced bookkeeper based on your unique needs!
            </p>
            <a
              href="#get-started"
              className="sim_bk_btn_orange"
              style={{ display: "inline-block", fontSize: 15, padding: "15px 34px", boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}
            >
              Get Bookkeeping and Accounting Advice Now!
            </a>
          </div>
        </section>

        {/* ============ WHY PREFER (4 cards) ============ */}
        <section style={{ padding: "70px 0 40px", background: "#eef0fb" }}>
          <div style={{ maxWidth: 940, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#14143d" }}>
              Why do small businesses prefer Simplebooks&apos;s bookkeeping
              <br />
              and accounting services?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#6d1fe0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                  <path d="M3 13l5-2.5a4 4 0 0 1 2.5 0l4.5 1.5a1.5 1.5 0 0 1-.4 3l-3.6-.9" />
                  <path d="M13 13l4.5-2 3.5 1.3" />
                  <circle cx="12" cy="6" r="3" stroke="#f15f2c" />
                  <path d="M12 4.5v3M10.7 6h2.6" stroke="#f15f2c" />
                </svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Incredibly affordable</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>We&apos;re incredibly affordable for new businesses</p>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#6d1fe0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                  <path d="M4 11a8 8 0 0 1 16 0" />
                  <rect x="2" y="11" width="4" height="6" rx="1.5" />
                  <rect x="18" y="11" width="4" height="6" rx="1.5" />
                  <path d="M20 17v1a3 3 0 0 1-3 3h-2" stroke="#f15f2c" />
                  <rect x="11" y="19" width="4" height="2.6" rx="1.3" stroke="#f15f2c" />
                </svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>One on one support</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>We provide one on one support for whenever you need us</p>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#6d1fe0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                  <path d="M9 18h6" />
                  <path d="M10 21h4" />
                  <path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z" />
                  <path d="M12 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" stroke="#f15f2c" />
                  <path d="M12 6v1M12 14v1M9.5 10h1M13.5 10h1" stroke="#f15f2c" />
                </svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>One stop solution</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>We&apos;re a one stop solution for all your financial and legal needs</p>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "34px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#6d1fe0" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <line x1="8" y1="20" x2="16" y2="20" />
                  <line x1="12" y1="16" x2="12" y2="20" />
                  <circle cx="12" cy="9.5" r="2.6" stroke="#f15f2c" />
                  <polyline points="10.9 9.5 11.8 10.4 13.3 8.7" stroke="#f15f2c" />
                </svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Online processes</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>Go paperless and transition seamlessly into our online processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SOFTWARE LOGOS ============ */}
        <section style={{ padding: "40px 0 84px", background: "#eef0fb", textAlign: "center" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>Accounting software backed by real people!</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: "0 0 50px" }}>Here at Simplebooks, we collaborate with:</p>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 90, flexWrap: "wrap" }}>
              {software.map((s) => (
                <div key={s.name} className="sim_bk_hover_lift_sm">
                  <img
                    src={s.img}
                    alt={`${s.name} logo`}
                    style={{
                      width: 150,
                      height: 150,
                      margin: "0 auto 18px",
                      background: "#ffffff",
                      padding: 16,
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                  <div style={{ fontSize: 17, fontWeight: 700, color: "#14143d" }}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHAT WE NEED FROM YOU ============ */}
        <section style={{ padding: "80px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 44px", color: "#14143d" }}>
              What does Simplebooks need
              <br />
              from you?
            </h2>
            <div style={{ marginBottom: 40 }}>
              {needList.map((n) => (
                <div key={n} style={{ fontSize: 17, color: "#5f6f9a", padding: "20px 4px", borderBottom: "1px solid #ece8fb" }}>
                  {n}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="#get-started"
                className="sim_bk_btn_orange"
                style={{ display: "inline-block", fontSize: 15, padding: "14px 34px" }}
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>

        {/* ============ PURPLE CTA 2 ============ */}
        <section style={{ padding: "20px 0 80px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto", background: "#6d1fe0", borderRadius: 18, padding: "60px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.3, margin: "0 0 18px", color: "#ffffff" }}>
              Do you want a quotation for our
              <br />
              bookkeeping and accounting services?
            </h2>
            <p style={{ fontSize: 16, color: "#dcc9fb", margin: "0 0 34px" }}>Get in touch with our team today!</p>
            <a
              href="#get-started"
              className="sim_bk_btn_dark"
              style={{ display: "inline-block", fontSize: 15, padding: "15px 34px", background: "#14143d" }}
            >
              Talk to the Team
            </a>
          </div>
        </section>

        {/* ============ SUCCESS STORIES ============ */}
        <section style={{ background: "#eef0fb", padding: "80px 0 90px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#14143d" }}>
              Hear More Success
              <br />
              Stories
            </h2>
            <div className="sim_bk_tg">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    borderRadius: 14,
                    padding: "22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 200,
                    boxShadow: "0 6px 22px rgba(17,20,77,0.05)",
                  }}
                >
                  <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#5a607a", margin: "0 0 18px" }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#d9dcee", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 700, color: "#11144d" }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "#9aa0b4" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a
                href="#"
                className="sim_bk_btn_dark"
                style={{ display: "inline-block", fontSize: 14, padding: "13px 34px", background: "#14143d" }}
              >
                Hear More Success Stories
              </a>
            </div>
          </div>
        </section>

        {/* ============ BOOKKEEPING BASICS (blogs) ============ */}
        <section style={{ padding: "80px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Get a headstart on bookkeeping basics</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Need a nudge in the right direction? Start here!</p>
            </div>
            <div className="sim_bk_grid3">
              {blogs.map((b, i) => (
                <div
                  key={i}
                  className="sim_bk_hover_lift"
                  style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(17,20,77,0.06)", background: "#ffffff" }}
                >
                  <div
                    style={{
                      height: 220,
                      background: "repeating-linear-gradient(45deg, #2b3168, #2b3168 12px, #333a75 12px, #333a75 24px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 20,
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: 21, fontWeight: 800, color: "#ffffff", lineHeight: 1.25 }}>{b.overlay}</span>
                  </div>
                  <div style={{ padding: "26px 24px 28px" }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, margin: "0 0 18px", color: "#11144d" }}>{b.title}</h3>
                    <div style={{ fontSize: 13, color: "#9aa0b4", marginBottom: 14 }}>{b.meta}</div>
                    <a href="#" className="sim_bk_readmore" style={{ fontSize: 14, fontWeight: 600, color: "#f15f2c" }}>
                      Read More ›
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ GET STARTED FORM ============ */}
        <section id="get-started" style={{ padding: "80px 0 100px", background: "#eef0fb" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Get Started</h2>
            <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
          </div>
          <ServiceForm />
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
