import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ServiceForm from "@/components/services/ServiceForm";

export const metadata: Metadata = {
  title: "Trademark Registration | Simplebooks",
};

/* ---------- Why trademark cards (2x2) ---------- */
const featCards: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 24 }}>
        <path d="M4 4h11l1.5 1.5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <line x1="6" y1="7" x2="10" y2="7" />
        <line x1="6" y1="9.5" x2="9" y2="9.5" />
        <circle cx="7.5" cy="14" r="2.6" stroke="#f15f2c" />
        <path d="M8.8 12.9a1.4 1.4 0 1 0 0 2.2" stroke="#f15f2c" />
        <path d="M18 6l3 1.5-1 8-3 1.5-1-8z" />
        <path d="M17 17l-1 3 2.5-1.4L20 20l-1-3" stroke="#f15f2c" />
      </svg>
    ),
    title: "Own your brand",
    desc: "Your name, logo, and slogans all belong to you.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 24 }}>
        <rect x="4" y="3" width="8" height="11" rx="1.5" />
        <circle cx="8" cy="7" r="1.8" stroke="#f15f2c" />
        <path d="M8 6.2v1.6M7.3 7h1.4" stroke="#f15f2c" />
        <path d="M7 18v-4l1.5.8a2 2 0 0 0 1 .2H12a1 1 0 0 1 0 2h-1.5" />
        <path d="M16 6h4M16 6l1.5-1.5M16 6l1.5 1.5" stroke="#f15f2c" />
        <path d="M20 9h-4M20 9l-1.5-1.5M20 9l-1.5 1.5" stroke="#f15f2c" />
      </svg>
    ),
    title: "Sell or transfer",
    desc: "Sell or transfer your trademarks whenever.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 24 }}>
        <path d="M7 3h9a1 1 0 0 1 1 1v15a2 2 0 0 1-2 2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M6 3a1 1 0 0 0-1 1v2h2" />
        <path d="M11 6.5l1.6.7v1.6c0 1.4-.9 2.2-1.6 2.5-.7-.3-1.6-1.1-1.6-2.5V7.2z" stroke="#f15f2c" />
        <line x1="9" y1="14" x2="14" y2="14" />
        <line x1="9" y1="16.5" x2="13" y2="16.5" />
      </svg>
    ),
    title: "Legal protection",
    desc: "If anyone copies you, you can take legal action.",
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#14143d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 24 }}>
        <path d="M6 4h8l4 4v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <path d="M14 4v4h4" />
        <line x1="7.5" y1="12" x2="12" y2="12" />
        <line x1="7.5" y1="14.5" x2="11" y2="14.5" />
        <circle cx="9" cy="7" r="2.4" stroke="#f15f2c" />
        <polyline points="8 7 8.8 7.8 10.2 6.2" stroke="#f15f2c" />
        <path d="M15 12l4 4-2 2-4-4z" stroke="#f15f2c" />
      </svg>
    ),
    title: "License it out",
    desc: "Temporarily license your trademark to others.",
  },
];

/* ---------- Registration steps (5) ---------- */
const steps: { n: string; title: string; lineDisplay: "block" | "none"; img: string; alt: string }[] = [
  { n: "1", title: "Tell us about your trademark", lineDisplay: "block", img: "/images/trademark/svg-06-Call-center-pana-6-1.svg", alt: "Support agent on a call taking down trademark details" },
  { n: "2", title: "Submit the necessary details", lineDisplay: "block", img: "/images/trademark/svg-07-Accept-terms-pana-6-1.svg", alt: "Client submitting the required trademark details on a form" },
  { n: "3", title: "We'll fill in and file the documentation", lineDisplay: "block", img: "/images/trademark/svg-08-Personal-files-pana-6.svg", alt: "Filing trademark documentation into a cabinet" },
  { n: "4", title: "Simplebooks will process your documents", lineDisplay: "block", img: "/images/trademark/svg-09-Development-pana-6-1.svg", alt: "Team member processing trademark documents at a desk" },
  { n: "5", title: "Collect your Trademark certificate", lineDisplay: "none", img: "/images/trademark/svg-10-Business-deal-pana-6-1.svg", alt: "Handshake on handing over the trademark certificate" },
];

/* ---------- Logos (8) ---------- */
const logos: { label: string; img?: string }[] = [
  { label: "The Ceylon Guide" },
  { label: "Sama", img: "/images/trademark/01.png" },
  { label: "Almond Tree", img: "/images/trademark/02.png" },
  { label: "Victory Information" },
  { label: "iits", img: "/images/trademark/03.png" },
  { label: "The Grind Coffeehouse", img: "/images/trademark/04.png" },
  { label: "KuleAir", img: "/images/trademark/05.png" },
  { label: "OE", img: "/images/trademark/06.png" },
];

/* ---------- Installment banks (5) ---------- */
const banks: { months: string; name: string }[] = [
  { months: "48 MONTHS", name: "Commercial Bank" },
  { months: "24 MONTHS", name: "HNB" },
  { months: "36 MONTHS", name: "Nations Trust Bank" },
  { months: "36 MONTHS", name: "Seylan Bank" },
  { months: "36 MONTHS", name: "Sampath Bank" },
];

/* ---------- Testimonials (10) ---------- */
const testimonials: { quote: string; name: string; role: string }[] = [
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
];

/* ---------- Blogs (3) ---------- */
const blogs: { overlay: string; title: string; meta: string }[] = [
  { overlay: "How to Name Your Company", title: "Naming Your Company in Sri Lanka: The Definitive 2025 Guide to Creative Strategy & Legal Compliance", meta: "June 23, 2025 | 2 Comments" },
  { overlay: "Payment Gateway Sri Lanka", title: "How to integrate with a payment gateway in Sri Lanka: A comprehensive guide", meta: "December 5, 2021 | No Comments" },
  { overlay: "Quickbooks Sri Lanka: The Definitive Guide", title: "Quickbooks Sri Lanka: The Definitive Guide", meta: "November 22, 2021 | 1 Comments" },
];

export default function TrademarkRegistrationPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section className="sim_bk_split" style={{ gap: 56, padding: "60px 0 76px" }}>
          <div className="sim_bk_split_text" style={{ maxWidth: 500 }}>
            <h1 style={{ fontSize: 50, lineHeight: 1.14, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-1px" }}>
              <span style={{ color: "#46516f" }}>Trademark </span>
              <span style={{ color: "#14143d" }}>your<br />name, logo, or slogan</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 34px" }}>
              Protect your brand from copycat competitors.
            </p>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 16, padding: "15px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>
              Get a Free Consultation
            </a>
          </div>
          <div className="sim_bk_split_img">
            <img
              src="/images/trademark/svg-01-Signing-a-contract-pana-6.svg"
              alt="Business owner signing a brand trademark contract with an oversized pen"
              style={{ width: 500, height: 360, maxWidth: "100%", borderRadius: 14, objectFit: "contain", display: "block" }}
            />
          </div>
        </section>

        {/* ============ WHY TRADEMARK (4 cards) ============ */}
        <section style={{ background: "#eef0fb", padding: "74px 0 84px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 50px", color: "#14143d" }}>
              Why should you Trademark your brand?
            </h2>
            <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
              {featCards.map((card, i) => (
                <div key={i} className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "40px 38px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                  {card.icon}
                  <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>{card.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ TRADEMARK REGISTRATION (5 steps) ============ */}
        <section style={{ background: "#eef0fb", padding: "40px 0 84px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 12px", color: "#14143d" }}>
                Trademark registration with<br />Simplebooks
              </h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>How does it work?</p>
            </div>
            <div style={{ maxWidth: 1200, margin: "0 auto 46px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#14143d", color: "#fff", fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{s.n}</div>
                    <div style={{ display: s.lineDisplay, position: "absolute", left: "calc(50% + 38px)", right: "calc(-50% + 38px)", top: "50%", borderTop: "2px dashed #2a2a3d" }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35, margin: "0 0 22px", color: "#3a4a78", minHeight: 44 }}>{s.title}</h3>
                  <img
                    src={s.img}
                    alt={s.alt}
                    style={{ width: 130, height: 120, margin: "0 auto", maxWidth: "100%", borderRadius: 12, objectFit: "contain", display: "block" }}
                  />
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 40px" }}>
                Reach out to us
              </a>
            </div>
          </div>
        </section>

        {/* ============ LOGOS ============ */}
        <section style={{ padding: "74px 0 40px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>5,000+ businesses trust Simplebooks</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>We&apos;ve helped dozens of businesses protect their brand</p>
            </div>
            <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "44px 30px" }}>
              {logos.map((l, i) => (
                <div key={i} className="sim_bk_hover_lift_sm" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {l.img ? (
                    <img
                      src={l.img}
                      alt={`${l.label} logo`}
                      style={{ width: 150, height: 80, borderRadius: 8, objectFit: "contain", display: "block" }}
                    />
                  ) : (
                    <div style={{ width: 150, height: 80, background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 9px, #eceefa 9px, #eceefa 18px)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4", textAlign: "center", padding: "0 6px" }}>{l.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section style={{ padding: "60px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 12px", color: "#14143d" }}>Trademark Registration at the most affordable rate</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Hassle free registration with Simplebooks</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
              <div style={{ background: "#14143d", borderRadius: 14, padding: "34px 80px", textAlign: "center", boxShadow: "0 16px 40px rgba(17,20,77,0.22)" }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>LKR 28,920</div>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 15, fontStyle: "italic", color: "#6b7db0", margin: "0 0 50px" }}>T&amp;C applied</p>
            <p style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#14143d", margin: "0 0 40px" }}>Pay easy with our exclusive installment plans</p>
            <div style={{ maxWidth: 1050, margin: "0 auto 44px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 30 }}>
              {banks.map((b, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 16 }}>{b.months}</div>
                  <div style={{ borderTop: "1px solid #e4e6f2", paddingTop: 22, display: "flex", justifyContent: "center" }}>
                    <div style={{ width: 150, height: 52, background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 8px, #eceefa 8px, #eceefa 16px)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4", textAlign: "center", padding: "0 6px" }}>{b.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 40px" }}>
                Talk to the Team
              </a>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section style={{ background: "#eef0fb", padding: "80px 0 90px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>
              People trust our work, hear<br />what they have to say.
            </h2>
            <div>
              <div className="sim_bk_tg">
                {testimonials.map((t, i) => (
                  <div key={i} style={{ background: "#ffffff", borderRadius: 14, padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200, boxShadow: "0 6px 22px rgba(17,20,77,0.05)" }}>
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
                <a href="#" className="sim_bk_btn_dark" style={{ fontSize: 15, padding: "14px 40px", background: "#12123f" }}>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DARK CTA ============ */}
        <section style={{ padding: "60px 0 70px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", background: "#17171b", borderRadius: 18, padding: "66px 40px", textAlign: "center" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#ffffff" }}>
                Do you want to get your<br />trademark registered?
              </h2>
              <p style={{ fontSize: 16, color: "#b9bcc4", margin: "0 0 36px" }}>Get in touch with our team today</p>
              <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "15px 36px" }}>
                Contact our team of experts
              </a>
            </div>
          </div>
        </section>

        {/* ============ BLOGS ============ */}
        <section style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 14px", color: "#14143d" }}>
                Learn how Trademark<br />registration works
              </h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Need a nudge in the right direction? Start here!</p>
            </div>
            <div className="sim_bk_grid3" style={{ maxWidth: 1180, margin: "0 auto" }}>
              {blogs.map((b, i) => (
                <div key={i} className="sim_bk_hover_lift" style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(17,20,77,0.06)", background: "#ffffff" }}>
                  <div style={{ height: 230, background: "repeating-linear-gradient(45deg, #2b3168, #2b3168 12px, #333a75 12px, #333a75 24px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center" }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: "#ffffff", lineHeight: 1.3 }}>{b.overlay}</span>
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

        {/* ============ GET STARTED FORM ============ */}
        <section id="get-started" style={{ position: "relative", padding: "80px 0 90px", background: "#eef0fb", overflow: "hidden" }}>
          <div className="sim_bk_form_illus" style={{ position: "absolute", left: 40, bottom: 0, width: 200, height: 300, background: "repeating-linear-gradient(45deg, #e7e9f6, #e7e9f6 10px, #eef0fa 10px, #eef0fa 20px)", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ mail ]</span>
          </div>
          <div className="sim_bk_form_illus" style={{ position: "absolute", right: 40, bottom: 0, width: 200, height: 300, background: "repeating-linear-gradient(45deg, #e7e9f6, #e7e9f6 10px, #eef0fa 10px, #eef0fa 20px)", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ mailbox ]</span>
          </div>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 34, position: "relative", zIndex: 2 }}>
              <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Get Started</h2>
              <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
            </div>
            <ServiceForm centeredConsent />
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
