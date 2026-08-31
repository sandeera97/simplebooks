import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ServiceForm from "@/components/services/ServiceForm";

export const metadata: Metadata = {
  title: "Payroll Management Services | Simplebooks",
};

/* ---------- renderVals(): data from the reference DC script ---------- */
function renderVals() {
  return {
    steps: [
      {
        n: "1",
        title: "We'll handle your paperwork",
        lineDisplay: "block",
        art: "/images/payroll-services/svg-02-Documents-pana-5.svg",
        alt: "Illustration of a person filing payroll paperwork into a cabinet",
      },
      {
        n: "2",
        title: "Process all your documents",
        lineDisplay: "block",
        art: "/images/payroll-services/svg-03-Development-pana-5.svg",
        alt: "Illustration of a person processing payroll documents at a computer",
      },
      {
        n: "3",
        title: "Generate your reports",
        lineDisplay: "block",
        art: "/images/payroll-services/svg-04-Accept-terms-pana-5.svg",
        alt: "Illustration of a person reviewing a generated payroll report",
      },
      {
        n: "4",
        title: "Pay your employees' EPF/ETF",
        lineDisplay: "block",
        art: "/images/payroll-services/svg-05-Business-deal-pana-5.svg",
        alt: "Illustration of two people shaking hands over an EPF/ETF payment",
      },
      {
        n: "5",
        title: "File your EPF/ETF returns",
        lineDisplay: "none",
        art: "/images/payroll-services/svg-06-Attached-files-pana-5.svg",
        alt: "Illustration of a person filing EPF/ETF returns online with attached files",
      },
    ],

    needList: [
      "Employee name and number",
      "Employee allowances",
      "Your employee's basic salary",
      "Ad-hoc or monthly deductions",
    ],

    testimonials: [
      { quote: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
      { quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.", name: "Damith Menaka", role: "Director, Animspire" },
      { quote: "Thanks you simplebooks team for the amazing support on my company registration. Givantha, Moiz and other team members were very helpful. Keep up the quick service. Highly recommended this hassle-free service 👍", name: "NAWRAN", role: "Director, Social Media Academy" },
      { quote: "They took the time to explain what they were doing every step of the way. This took a lot of stress away. I deeply appreciate their professionality and will always recommend Simplebooks to any in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta" },
      { quote: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chanux Bro", role: "Director, Chanux Bro" },
      { quote: "They provided exactly what I needed. Very responsive and professional team to work with.", name: "Wickramawardena", role: "Manager" },
      { quote: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, followups and overall knowledge of the field and pricing. Clearly an industry leader for Company secretarial work in Sri lanka.", name: "Kalana Muthumuni", role: "" },
      { quote: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
      { quote: "It's a superb experience that I got from Simple Books. I got the contract through on line. from there onwards up to now – I came to collect my documents - they gave me very good service. Responding via mails for my queries, updating the process etc ..everything is good.", name: "Sarath Senanayake", role: "Director" },
      { quote: "I've registered over 10 businesses with Simplebooks over the years and I would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
    ],

    blogs: [
      { overlay: "EPF & ETF in Sri Lanka", title: "Employee Provident Fund & Trust Fund (EPF & ETF) – What you need to know", meta: "January 15, 2025 | 9 Comments" },
      { overlay: "Salary Sheets, Salary Slips and Salary Slip Formats in Sri Lanka", title: "A-Z Guide on Salary Sheets, Salary Slips, and Salary Slip Formats in Sri Lanka", meta: "January 10, 2025 | 3 Comments" },
      { overlay: "Your Go-to Guide to Payroll Systems in Sri Lanka", title: "Your Go-to Guide to Payroll Systems in Sri Lanka", meta: "December 2, 2024 | No Comments" },
    ],
  };
}

export default function PayrollManagementPage() {
  const { steps, needList, testimonials, blogs } = renderVals();

  return (
    <>
      <Header />

      {/* ============ HERO ============ */}
      <section
        className="sim_bk_split"
        style={{ gap: 56, padding: "60px 0 76px" }}
      >
        <div className="sim_bk_split_text" style={{ maxWidth: 500 }}>
          <h1 style={{ fontSize: 52, lineHeight: 1.12, fontWeight: 800, margin: "0 0 22px", letterSpacing: "-1px" }}>
            <span style={{ color: "#14143d" }}>All-in-one </span>
            <span style={{ color: "#3b4bd8" }}>payroll management</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 34px" }}>
            We are here to help you effectively manage your payroll.
          </p>
          <a
            href="#get-started"
            className="sim_bk_btn_orange"
            style={{ display: "inline-block", fontSize: 16, padding: "15px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}
          >
            Get a Free Consultation
          </a>
        </div>
        <div className="sim_bk_split_img">
          <img
            src="/images/payroll-services/02.png"
            alt="Illustration of payroll calculation with a calculator and salary documents"
            style={{
              width: 500,
              height: 380,
              borderRadius: 14,
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* ============ 5 STEPS ============ */}
      <section style={{ background: "#eef0fb", padding: "70px 0 60px" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 12px", color: "#14143d" }}>
              Don&apos;t worry about payroll management anymore — we are here to help!
            </h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Let Simplebooks take on the hassle</p>
          </div>
          <div
            className="sim_bk_steps5"
            style={{ maxWidth: 1200, margin: "0 auto 46px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}
          >
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      background: "#3b4bd8",
                      color: "#fff",
                      fontSize: 18,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="sim_bk_step_line"
                    style={{
                      display: s.lineDisplay,
                      position: "absolute",
                      left: "calc(50% + 38px)",
                      right: "calc(-50% + 38px)",
                      top: "50%",
                      borderTop: "2px dashed #a9b3ee",
                    }}
                  />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35, margin: "0 0 22px", color: "#3a4a78", minHeight: 44 }}>
                  {s.title}
                </h3>
                <img
                  src={s.art}
                  alt={s.alt}
                  style={{
                    width: 130,
                    height: 120,
                    margin: "0 auto",
                    maxWidth: "100%",
                    borderRadius: 12,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="#get-started"
              className="sim_bk_btn_orange"
              style={{ display: "inline-block", fontSize: 15, padding: "14px 40px" }}
            >
              Talk to the Team
            </a>
          </div>
        </div>
      </section>

      {/* ============ REPETITIVE TASKS (4 cards) ============ */}
      <section style={{ background: "#eef0fb", padding: "40px 0 84px" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>
            Running a business is not easy. Let us<br />handle the repetitive tasks!
          </h2>
          <div
            className="sim_bk_feat_grid"
            style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}
          >
            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "38px 36px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3b4bd8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <path d="M7 3h8l4 4v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M15 3v4h4" />
                <rect x="7.5" y="8" width="5" height="6" rx="1" stroke="#f15f2c" />
                <line x1="9" y1="10" x2="11" y2="10" stroke="#f15f2c" />
                <line x1="9" y1="12" x2="11" y2="12" stroke="#f15f2c" />
                <circle cx="16" cy="15.5" r="2.6" stroke="#f15f2c" />
                <path d="M16 14.4v2.2M15.2 15.5h1.6" stroke="#f15f2c" />
              </svg>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>We&apos;re a one stop shop solution</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>With Simplebooks, you&apos;re not just limited to payroll management. We can take care of all your finance needs!</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "38px 36px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3b4bd8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <line x1="4" y1="20" x2="4" y2="12" />
                <line x1="9" y1="20" x2="9" y2="9" />
                <line x1="14" y1="20" x2="14" y2="14" />
                <path d="M13 9l4 4 4-5" stroke="#f15f2c" />
                <polyline points="21 8 21 11.5 17.5 11.5" stroke="#f15f2c" />
                <circle cx="7.5" cy="5.5" r="2.6" stroke="#f15f2c" />
                <path d="M7.5 4.4v2.2M6.7 5.5h1.6" stroke="#f15f2c" />
              </svg>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>You can reduce your cost with us</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Managing payroll can get quite expensive as your team grows. With Simplebooks, you can pay less as you hire more!</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "38px 36px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3b4bd8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <rect x="4" y="4" width="10" height="8" rx="1.5" />
                <polyline points="6 9 8 7 10 9 12 6" />
                <circle cx="12" cy="15" r="4.5" stroke="#f15f2c" />
                <line x1="15.4" y1="18.4" x2="19" y2="22" stroke="#f15f2c" />
                <path d="M12 13.4v3.2M11 15h2" stroke="#f15f2c" />
              </svg>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Our prices are transparent</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Simplebooks pricing is simple and straightforward. Know exactly what you&apos;re paying for beforehand.</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "38px 36px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3b4bd8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <circle cx="12" cy="8" r="3" />
                <path d="M6.5 20a5.5 5.5 0 0 1 11 0" />
                <circle cx="5" cy="10" r="2.2" />
                <path d="M1.5 18a3.5 3.5 0 0 1 3.5-3.4" />
                <circle cx="19" cy="10" r="2.2" />
                <path d="M22.5 18a3.5 3.5 0 0 0-3.5-3.4" />
                <path d="M10 3.5l1 1 2-2" stroke="#f15f2c" />
              </svg>
              <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>We are a steady payroll manager</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Hire a consistent team for all your payroll need. Never worry about your hiring and training in house talent again!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT DO WE NEED (list) ============ */}
      <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 44px", color: "#14143d" }}>
            What do we need from you?
          </h2>
          <div style={{ maxWidth: 900, margin: "0 auto 42px" }}>
            {needList.map((n) => (
              <div
                key={n}
                className="sim_bk_need_row sim_bk_pointer"
                style={{ fontSize: 17, color: "#5f6f9a", padding: "20px 4px", borderBottom: "1px solid #e7e9f5" }}
              >
                {n}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="#get-started"
              className="sim_bk_btn_orange"
              style={{ display: "inline-block", fontSize: 15, padding: "14px 40px" }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ============ PERSONALIZED REMINDERS ============ */}
      <section style={{ padding: "20px 0 80px", background: "#ffffff" }}>
        <div
          className="sim_bk_rem_inner"
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            border: "1px solid #e7e9f5",
            borderRadius: 18,
            padding: "44px 52px",
            display: "flex",
            alignItems: "center",
            gap: 56,
            boxShadow: "0 10px 34px rgba(17,20,77,0.04)",
          }}
        >
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="/images/payroll-services/01.png"
              alt="Illustration of a person tracking payroll deadlines on a calendar with a stopwatch"
              style={{
                width: "100%",
                maxWidth: 400,
                height: 300,
                borderRadius: 14,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, color: "#6d3fe0", marginBottom: 14 }}>PERSONALIZED REMINDERS</div>
            <h3 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.3, margin: "0 0 18px", color: "#14143d" }}>
              You will never miss another payroll deadline again. We&apos;ll be there to remind you.
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: 0 }}>
              Meeting your monthly payroll deadlines are crucial to avoiding unnecessary penalties. Have the team track your deadlines and remind you beforehand.
            </p>
          </div>
        </div>
      </section>

      {/* ============ BLUE CTA ============ */}
      <section style={{ padding: "20px 0 80px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", background: "#3b4bd8", borderRadius: 18, padding: "62px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#ffffff" }}>
            Do you want a quotation for our<br />payroll services?
          </h2>
          <p style={{ fontSize: 16, color: "#cdd3f7", margin: "0 0 36px" }}>Get in touch with our team today!</p>
          <a
            href="#get-started"
            className="sim_bk_btn_dark"
            style={{ display: "inline-block", fontSize: 15, padding: "15px 36px", background: "#12123f" }}
          >
            Talk to the Team
          </a>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section style={{ background: "#eef0fb", padding: "80px 0 90px" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>
            Hear it straight from the people who use<br />Simplebooks Payroll Management
          </h2>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
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
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <a
                href="#"
                className="sim_bk_btn_dark"
                style={{ display: "inline-block", fontSize: 15, padding: "14px 40px", background: "#12123f" }}
              >
                View more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAY INFORMED (blogs) ============ */}
      <section style={{ padding: "80px 0 60px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Stay informed to stay ahead</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Read our blog</p>
          </div>
          <div className="sim_bk_grid3" style={{ maxWidth: 1180, margin: "0 auto" }}>
            {blogs.map((b, i) => (
              <div
                key={i}
                className="sim_bk_hover_lift"
                style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(17,20,77,0.06)", background: "#ffffff" }}
              >
                <div
                  style={{
                    height: 230,
                    background: "repeating-linear-gradient(45deg, #2b3168, #2b3168 12px, #333a75 12px, #333a75 24px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 24,
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 21, fontWeight: 800, color: "#ffffff", lineHeight: 1.3 }}>{b.overlay}</span>
                </div>
                <div style={{ padding: "26px 24px 28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, margin: "0 0 18px", color: "#11144d" }}>{b.title}</h3>
                  <div style={{ fontSize: 13, color: "#9aa0b4", marginBottom: 14 }}>{b.meta}</div>
                  <a href="#" className="sim_bk_readmore" style={{ fontSize: 14, fontWeight: 600, color: "#f15f2c" }}>Read More ›</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FREE TOOLS ============ */}
      <section style={{ padding: "40px 0 84px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 44px", color: "#14143d" }}>
            Try one of our unique free tools
          </h2>
          <div
            className="sim_bk_tools_inner"
            style={{ maxWidth: 1150, margin: "0 auto", background: "#3b4bd8", borderRadius: 18, padding: "54px 40px", display: "flex", alignItems: "stretch" }}
          >
            <div style={{ flex: 1, textAlign: "center", padding: "0 34px" }}>
              <h3 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#ffffff" }}>
                Simplebooks Salary<br />Slip Calculator
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#cdd3f7", margin: "0 0 30px" }}>
                Calculate your employees&apos; payable salary and produce presentable salary slip for your growing team
              </p>
              <a
                href="#"
                className="sim_bk_btn_orange"
                style={{ display: "inline-block", fontSize: 15, padding: "14px 30px" }}
              >
                Check Salary Slip Calculator
              </a>
            </div>
            <div className="sim_bk_tools_div" style={{ width: 1, background: "rgba(255,255,255,0.28)", flexShrink: 0 }} />
            <div style={{ flex: 1, textAlign: "center", padding: "0 34px" }}>
              <h3 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#ffffff" }}>
                Simplebooks Tax<br />Calculator
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#cdd3f7", margin: "0 0 30px" }}>
                Compute your team&apos;s Advanced Personal Income (APIT) Tax and make sure your never miss another payment
              </p>
              <a
                href="#"
                className="sim_bk_btn_orange"
                style={{ display: "inline-block", fontSize: 15, padding: "14px 30px" }}
              >
                Check Tax Calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GET STARTED FORM ============ */}
      <section id="get-started" style={{ position: "relative", padding: "80px 0 90px", background: "#eef0fb", overflow: "hidden" }}>
        <div
          className="sim_bk_form_illus"
          style={{
            position: "absolute",
            left: 40,
            bottom: 0,
            width: 200,
            height: 300,
            background: "repeating-linear-gradient(45deg, #e7e9f6, #e7e9f6 10px, #eef0fa 10px, #eef0fa 20px)",
            borderRadius: "12px 12px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ mail ]</span>
        </div>
        <div
          className="sim_bk_form_illus"
          style={{
            position: "absolute",
            right: 40,
            bottom: 0,
            width: 200,
            height: 300,
            background: "repeating-linear-gradient(45deg, #e7e9f6, #e7e9f6 10px, #eef0fa 10px, #eef0fa 20px)",
            borderRadius: "12px 12px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ mailbox ]</span>
        </div>
        <div style={{ textAlign: "center", marginBottom: 34, position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Get Started</h2>
          <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
        </div>
        <ServiceForm centeredConsent />
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
