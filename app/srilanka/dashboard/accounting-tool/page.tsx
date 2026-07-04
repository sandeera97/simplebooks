import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq2Accordion from "@/components/dashboard/Faq2Accordion";
import CovTabs from "./CovTabs";

export const metadata: Metadata = {
  title: "All-in-One Accounting Tool | Simplebooks",
};

const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.",
    name: "Travel with Wife",
    role: "@travelwithwife",
  },
  {
    quote:
      "Company registration is a hectic process in Sri Lanka. Simplebooks is simply the saver.",
    name: "Damith Menaka",
    role: "Director, Animspire",
  },
  {
    quote:
      "Honest review. Thanks you simplebooks team for the amazing support on my company registration. Highly recommended this hassle-free service 👍",
    name: "NAWRAN",
    role: "Director, Social Media Academy",
  },
  {
    quote:
      "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone in need of the services they provide.",
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

const faqData: { q: string; a: string }[] = [
  {
    q: "Is my financial data secure with Simplebooks Accounting Tool?",
    a: "Yes. Your data is encrypted and stored securely, with strict access controls and regular backups to keep your finances safe.",
  },
  {
    q: "Is the Accounting Tool suitable for small and large businesses?",
    a: "Absolutely. Simplebooks scales with you — from sole proprietors and startups to established companies with larger accounting needs.",
  },
  {
    q: "Can I manage both vendors and customers with the accounting tool?",
    a: "Yes. You can manage customers and invoices as well as vendors, bills and purchases, all from one simple dashboard.",
  },
  {
    q: "How long does it take to set up the Accounting Tool?",
    a: "Just minutes. Sign up, add your business details, and you can start recording transactions right away.",
  },
  {
    q: "Can I generate key financial statements with the accounting tool?",
    a: "Yes. Generate P&L statements, balance sheets and transaction reports instantly, ready to view, download or share.",
  },
  {
    q: "Is Simplebooks Accounting Tool compliant with Sri Lankan accounting standards?",
    a: "Yes. The tool is built to align with local accounting standards and regulations, so your records stay compliant.",
  },
];

export default function AccountingToolPage() {
  return (
    <>
      <Header />
      <main
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: "#11144d",
          background: "#ffffff",
          overflowX: "hidden",
        }}
      >
        {/* ============ HERO ============ */}
        <section
          className="sim_bk_split"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 56,
            padding: "70px 56px 80px",
            maxWidth: 1250,
            margin: "0 auto",
          }}
        >
          <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 540 }}>
            <h1
              style={{
                fontSize: 48,
                lineHeight: 1.12,
                fontWeight: 800,
                margin: "0 0 24px",
                letterSpacing: "-1px",
                color: "#11144d",
              }}
            >
              All-in-One Accounting tool Simplify Your Business
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#8a8fa6",
                margin: "0 0 34px",
              }}
            >
              Manage invoices, expenses, and financial records securely while
              generating insightful reports to guide smart business
              decisions—all in one tool
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#8a8fa6",
                margin: "0 0 16px",
              }}
            >
              Trusted by over{" "}
              <strong style={{ color: "#2f6bef", fontWeight: 700 }}>
                5000 businesses
              </strong>{" "}
              in Sri Lanka
            </p>
            <div
              className="rating-hero"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 32,
              }}
            >
              <span style={{ fontSize: 24, fontWeight: 800 }}>
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
              </span>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#11144d" }}>
                4.9 Rating
              </span>
              <span
                style={{ color: "#f5b921", letterSpacing: "1px", fontSize: 18 }}
              >
                ★★★★★
              </span>
              <span style={{ fontSize: 14, color: "#2f6bef" }}>
                (800+ cutomer reviews)
              </span>
            </div>
            <a
              href="#faq"
              className="sim_bk_btn_orange sim_bk_rad10"
              style={{
                display: "inline-block",
                fontSize: 16,
                padding: "15px 40px",
                boxShadow: "0 10px 24px rgba(241,95,44,0.28)",
              }}
            >
              Start My Free Trial
            </a>
          </div>
          <div
            className="sim_bk_split_img"
            style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <div
              className="ph-img"
              style={{
                width: 500,
                height: 400,
                background:
                  "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 10px, #eceefa 10px, #eceefa 20px)",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 13,
                  color: "#9aa0b4",
                }}
              >
                [ accounting dashboard illustration ]
              </span>
            </div>
          </div>
        </section>

        {/* ============ WE'VE GOT YOU COVERED (tabs) ============ */}
        <section
          className="sec-pad"
          style={{ padding: "40px 56px 90px", background: "#ffffff" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: 34,
              fontWeight: 800,
              margin: "0 0 50px",
              color: "#11144d",
            }}
          >
            We&apos;ve got you covered
          </h2>
          <CovTabs />
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section
          className="sec-pad"
          style={{ padding: "40px 56px 90px", background: "#ffffff" }}
        >
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontSize: 34,
                fontWeight: 800,
                margin: "0 0 14px",
                color: "#11144d",
              }}
            >
              How It Works
            </h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>
              Three Clicks to Financial Success
            </p>
          </div>
          <div
            className="sim_bk_steps3"
            style={{ maxWidth: 1100, margin: "0 auto" }}
          >
            <div style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "#2f4bd6",
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1
                </div>
                <div
                  className="step-line"
                  style={{
                    position: "absolute",
                    left: "calc(50% + 42px)",
                    right: "calc(-50% + 42px)",
                    top: "50%",
                    borderTop: "2px dashed #a9b6ee",
                  }}
                ></div>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  margin: "0 0 14px",
                  color: "#11144d",
                }}
              >
                Record Your Transactions
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#8a8fa6",
                  margin: "0 auto",
                  maxWidth: 300,
                }}
              >
                Record all income, expenses, invoices, and purchase transactions
              </p>
            </div>

            <div style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "#2f4bd6",
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  2
                </div>
                <div
                  className="step-line"
                  style={{
                    position: "absolute",
                    left: "calc(50% + 42px)",
                    right: "calc(-50% + 42px)",
                    top: "50%",
                    borderTop: "2px dashed #a9b6ee",
                  }}
                ></div>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  margin: "0 0 14px",
                  color: "#11144d",
                }}
              >
                Reconcile Accounts
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#8a8fa6",
                  margin: "0 auto",
                  maxWidth: 300,
                }}
              >
                Easily reconcile your bank statements and track your cash flow in
                real time
              </p>
            </div>

            <div style={{ textAlign: "center", position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "#2f4bd6",
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  3
                </div>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  margin: "0 0 14px",
                  color: "#11144d",
                }}
              >
                Generate Reports
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#8a8fa6",
                  margin: "0 auto",
                  maxWidth: 300,
                }}
              >
                Access detailed reports for insights into business performance,
                including P&amp;L, balance sheet, and transaction reports.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE BAND ============ */}
        <section
          className="sec-pad"
          style={{
            background: "#f5f6fd",
            padding: "70px 56px 80px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              margin: "0 0 16px",
              color: "#11144d",
            }}
          >
            Why Choose Simplebooks for Effortless Accounting?
          </h2>
          <p style={{ fontSize: 16, color: "#6b7db0", margin: "0 0 56px" }}>
            Save time, simplify finances, and ensure accuracy with our
            easy-to-use accounting tool—expert support included.
          </p>
          <div
            className="sim_bk_grid4"
            style={{ maxWidth: 1080, margin: "0 auto 46px" }}
          >
            <div
              className="why-item sim_bk_hover_lift_sm"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2f4bd6"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" />
                <polyline points="8.5 12 11 14.5 15.5 9.5" />
              </svg>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#2b3358",
                  maxWidth: 200,
                  lineHeight: 1.4,
                }}
              >
                Trusted by Thousands
              </div>
            </div>

            <div
              className="why-item sim_bk_hover_lift_sm"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2f4bd6"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2h9l4 4v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                <polyline points="14 2 14 7 19 7" />
                <line x1="8" y1="10" x2="14" y2="10" />
                <circle cx="15.5" cy="18" r="3" />
                <path d="M14 20.5 13 23l2.5-1.4L18 23l-1-2.5" />
              </svg>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#2b3358",
                  maxWidth: 200,
                  lineHeight: 1.4,
                }}
              >
                Seamless Financial Management
              </div>
            </div>

            <div
              className="why-item sim_bk_hover_lift_sm"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2f4bd6"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <polyline points="11 6 11 11 14 13" />
                <path d="M16 17.5 18 19.5 22 15.5" />
              </svg>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#2b3358",
                  maxWidth: 200,
                  lineHeight: 1.4,
                }}
              >
                Real-Time Financial Insights.
              </div>
            </div>

            <div
              className="why-item sim_bk_hover_lift_sm"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
              }}
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2f4bd6"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l2.4 1.8 3 -.3 1 2.8 2.6 1.5 -1 2.9 1 2.9 -2.6 1.5 -1 2.8 -3 -.3L12 22l-2.4-1.8-3 .3-1-2.8-2.6-1.5 1-2.9-1-2.9 2.6-1.5 1-2.8 3 .3z" />
                <polyline points="8.5 12 11 14.5 15.5 9.5" />
              </svg>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#2b3358",
                  maxWidth: 200,
                  lineHeight: 1.4,
                }}
              >
                Compliance with Local Financial Laws: audits.
              </div>
            </div>
          </div>
          <a
            href="#faq"
            className="sim_bk_btn_orange"
            style={{
              display: "inline-block",
              fontSize: 15,
              padding: "14px 34px",
            }}
          >
            Streamline Your Finances Today
          </a>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section
          className="sec-pad"
          style={{ background: "#ffffff", padding: "80px 56px 90px" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 780,
              margin: "0 auto 50px",
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                lineHeight: 1.3,
                margin: "0 0 16px",
                color: "#11144d",
              }}
            >
              Join over 5,000 Sri Lankan businesses that trust us to drive their
              success.
            </h2>
            <p style={{ fontSize: 16, color: "#8a8fa6", margin: 0 }}>
              See how Simplebooks helps thousands of Sri Lankan businesses manage
              their finances effortlessly.
            </p>
          </div>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div className="sim_bk_tg">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #eef0f6",
                    borderRadius: 14,
                    padding: "22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 200,
                    boxShadow: "0 6px 22px rgba(17,20,77,0.04)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.6,
                      color: "#5a607a",
                      margin: "0 0 18px",
                    }}
                  >
                    {t.quote}
                  </p>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "#d9dcee",
                        flexShrink: 0,
                      }}
                    ></div>
                    <div>
                      <div
                        style={{
                          fontSize: 12.5,
                          fontWeight: 700,
                          color: "#11144d",
                        }}
                      >
                        {t.name}
                      </div>
                      <div style={{ fontSize: 11, color: "#9aa0b4" }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a
                href="#"
                className="sim_bk_btn_orange"
                style={{
                  display: "inline-block",
                  fontSize: 14,
                  padding: "13px 34px",
                }}
              >
                View more
              </a>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section
          id="faq"
          className="sec-pad"
          style={{ padding: "80px 56px 90px", background: "#eceefb" }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: 40,
              fontWeight: 800,
              margin: "0 0 54px",
              color: "#11144d",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: 1180, margin: "0 auto 44px" }}>
            <Faq2Accordion faqs={faqData} />
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="#"
              className="sim_bk_btn_orange"
              style={{
                display: "inline-block",
                fontSize: 15,
                padding: "14px 34px",
              }}
            >
              Set up a Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
