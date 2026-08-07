import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ServiceForm from "@/components/services/ServiceForm";

export const metadata: Metadata = {
  title: "Company Secretarial Services | Simplebooks",
};

/* ---------- What can Simplebooks do (6 feature cards) ---------- */
const featCards: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v3" />
        <path d="M3 7v10a2 2 0 0 0 2 2h8" />
        <path d="M17 14l4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4z" stroke="#f15f2c" />
      </svg>
    ),
    title: "Tidy up your documents",
    desc: "Do you have a backlog of messy files and records? Well, not anymore",
  },
  {
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M19 4l.8 1.8L21.6 6.6 19.8 7.4 19 9.2 18.2 7.4 16.4 6.6 18.2 5.8z" stroke="#f15f2c" />
      </svg>
    ),
    title: "A dedicated company secretary",
    desc: "Think of us as a super efficient extension to your existing team. We're always around",
  },
  {
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
        <path d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M18 6h2M18 10h2M18 14h2" />
        <polyline points="9 4 10.5 5.5 13 3" stroke="#f5a623" />
      </svg>
    ),
    title: "Guaranteed compliance",
    desc: "Avoid exhaustive legal complications with Simplebooks watching your back",
  },
  {
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <rect x="9" y="1.5" width="6" height="3.5" rx="1" />
        <polyline points="8.5 11 10 12.5 12 9.5" stroke="#f15f2c" />
        <line x1="13" y1="11" x2="16" y2="11" />
        <polyline points="8.5 16 10 17.5 12 14.5" stroke="#f15f2c" />
        <line x1="13" y1="16" x2="16" y2="16" />
      </svg>
    ),
    title: "Your resolutions in one place",
    desc: "We'll organize and store all your company resolutions in one easy-to access place",
  },
  {
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
        <rect x="3" y="4" width="14" height="13" rx="2" />
        <line x1="3" y1="8" x2="17" y2="8" />
        <line x1="7" y1="2" x2="7" y2="6" />
        <line x1="13" y1="2" x2="13" y2="6" />
        <circle cx="17.5" cy="16.5" r="4.5" stroke="#f15f2c" />
        <polyline points="17.5 14.5 17.5 16.5 19 17.8" stroke="#f15f2c" />
      </svg>
    ),
    title: "Continuous deadline tracking",
    desc: "Have Simplebooks track and remind you of all your deadline. We'll make sure you're on time",
  },
  {
    icon: (
      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
        <path d="M3 21h18" />
        <path d="M5 21V9l5-3v15" />
        <path d="M13 21V11l6 3v7" />
        <polyline points="14 6 17 3 20 6" stroke="#f15f2c" />
        <line x1="17" y1="3" x2="17" y2="9" stroke="#f15f2c" />
      </svg>
    ),
    title: "Easy company changes",
    desc: "Focus on running your business while Simplebooks handles all your company changes",
  },
];

/* ---------- What can we do for you (5 steps) ---------- */
const steps: { n: string; title: string; desc: string; lineDisplay: "block" | "none"; img: string; alt: string }[] = [
  { n: "1", title: "We'll register your company for you", desc: "If you're looking to register your company hassle free, you've come to the right place. We'll take over from here on", lineDisplay: "block", img: "/images/company-secretary/svg-02-Attached-files-pana-1-2.svg", alt: "Attaching company registration documents to an email" },
  { n: "2", title: "Take care of all your company changes", desc: "Need to make some changes to your company details post registration? Don't worry, we'll take care of that too", lineDisplay: "block", img: "/images/company-secretary/svg-03-Meeting-pana-1.svg", alt: "Team meeting to discuss company changes" },
  { n: "3", title: "File your Annual Returns", desc: "Keep your focus on running your business and let Simplebooks take care of preparing and filing your Annual Returns", lineDisplay: "block", img: "/images/company-secretary/svg-04-Development-pana-2.svg", alt: "Preparing and filing annual returns at a desk" },
  { n: "4", title: "Help you open bank accounts", desc: "Forgo the fuss of having to deal with the banks yourself. We'll step in and help you open all of your bank accounts", lineDisplay: "block", img: "/images/company-secretary/svg-05-Accept-terms-pana-1-1.svg", alt: "Reviewing and signing bank account paperwork" },
  { n: "5", title: "We'll even liaison with the ROC for you", desc: "We'll communicate all your company changes and developments to the ROC so you don't have to worry about it", lineDisplay: "none", img: "/images/company-secretary/svg-06-Personal-files-pana.svg", alt: "Organising company files to liaise with the ROC" },
];

/* ---------- Pricing installment banks (5) ---------- */
const banks: { months: string; name: string; logo?: string }[] = [
  { months: "48 MONTHS", name: "Commercial Bank" },
  { months: "24 MONTHS", name: "HNB" },
  { months: "36 MONTHS", name: "Nations Trust Bank" },
  { months: "36 MONTHS", name: "Seylan Bank", logo: "/images/home/03.png" },
  { months: "36 MONTHS", name: "Sampath Bank", logo: "/images/home/04.png" },
];

/* ---------- Hire talent steps (3) ---------- */
const hireCards: { label: string; img: string }[] = [
  { label: "Talk to the team", img: "/images/company-secretary/01.svg" },
  { label: "Fill out the documentation", img: "/images/company-secretary/02.svg" },
  { label: "Have Simplebooks take over", img: "/images/company-secretary/03.svg" },
];

/* ---------- Testimonials (10) ---------- */
const testimonials: { quote: string; name: string; role: string; img?: string }[] = [
  { quote: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife", img: "/images/company-secretary/04.jpg" },
  { quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.", name: "Damith Menaka", role: "Director, Animspire", img: "/images/company-secretary/05.jpg" },
  { quote: "Thanks you simplebooks team for the amazing support on my company registration. Givantha, Moiz and other team members were very helpful. Keep up the quick service. Highly recommended this hassle-free service 👍", name: "NAWRAN", role: "Director, Social Media Academy", img: "/images/company-secretary/06.jpg" },
  { quote: "They took the time to explain what they were doing every step of the way. This took a lot of stress away. I deeply appreciate their professionality and will always recommend Simplebooks to any in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta", img: "/images/company-secretary/07.jpg" },
  { quote: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chanux Bro", role: "Director, Chanux Bro", img: "/images/company-secretary/08.jpg" },
  { quote: "They provided exactly what I needed. Very responsive and professional team to work with.", name: "Wickramawardena", role: "Manager", img: "/images/company-secretary/10.jpg" },
  { quote: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, followups and overall knowledge of the field and pricing. Clearly an industry leader for Company secretarial work in Sri lanka.", name: "Kalana Muthumuni", role: "", img: "/images/company-secretary/18.jpg" },
  { quote: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director", img: "/images/company-secretary/19.jpg" },
  { quote: "It's a superb experience that I got from Simple Books. I got the contract through on line. from there onwards up to now – I came to collect my documents - they gave me very good service. Responding via mails for my queries, updating the process etc ..everything is good.", name: "Sarath Senanayake", role: "Director", img: "/images/company-secretary/20.jpg" },
  { quote: "I've registered over 10 businesses with Simplebooks over the years and I would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global", img: "/images/company-secretary/21.jpg" },
];

/* ---------- Stay informed blogs (3) ---------- */
const blogs: { overlay: string; title: string; meta: string }[] = [
  { overlay: "How to Issue or Transfer Shares in a Company", title: "Form 6 – How to issue or transfer shares in a Private Limited Company | Step-by-Step Guide", meta: "July 24, 2025 | 3 Comments" },
  { overlay: "File Annual Returns in Sri Lanka", title: "How to File Form 15 in Sri Lanka – Annual Returns", meta: "July 14, 2025 | 7 Comments" },
  { overlay: "Why You Need a Company Secretary in Sri Lanka", title: "Company Secretary in Sri Lanka | Your Documents Done Right, On Time – Complete Guide 2025", meta: "June 30, 2025 | 4 Comments" },
];

export default function CompanySecretaryPage() {
  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section className="sim_bk_split" style={{ gap: 56, padding: "60px 0 76px" }}>
          <div className="sim_bk_split_text" style={{ maxWidth: 500 }}>
            <h1 style={{ fontSize: 52, lineHeight: 1.12, fontWeight: 800, margin: "0 0 22px", letterSpacing: "-1px" }}>
              <span style={{ color: "#f5a623" }}>Company Secretarial Services </span>
              <span style={{ color: "#14143d" }}>For Hire</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 32px" }}>
              Hire your very own company secretary in Sri Lanka and have your paperwork done right, on time.
            </p>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 16, padding: "15px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>
              Get a Free Consultation
            </a>
            <div style={{ marginTop: 40 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#f5a623" }}>5,000+</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#14143d", marginTop: 2 }}>Businesses registered</div>
              <div style={{ fontSize: 15, color: "#6b7db0", marginTop: 18 }}>
                Secretary registration number: <strong style={{ color: "#14143d" }}>RCS2000335</strong>
              </div>
            </div>
          </div>
          <div className="sim_bk_split_img">
            <img
              src="/images/company-secretary/svg-01-Documents-pana-3.svg"
              alt="Company secretary organising company documents and files"
              style={{ width: 500, height: 400, borderRadius: 14, objectFit: "contain", display: "block" }}
            />
          </div>
        </section>

        {/* ============ WHAT CAN SIMPLEBOOKS DO (6 cards) ============ */}
        <section style={{ background: "#eef0fb", padding: "74px 0 60px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#14143d" }}>
              What can Simplebooks<br />Company Secretarial Services do for you?
            </h2>
            <div className="sim_bk_grid3" style={{ gap: 26 }}>
              {featCards.map((card, i) => (
                <div key={i} className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                  {card.icon}
                  <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>{card.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHAT CAN WE DO (5 steps) ============ */}
        <section style={{ background: "#eef0fb", padding: "40px 0 84px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 56px", color: "#14143d" }}>What can we do for you?</h2>
            <div className="sim_bk_steps5" style={{ margin: "0 auto 46px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", background: "#f5a623", color: "#fff", fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{s.n}</div>
                    <div className="sim_bk_step_line" style={{ display: s.lineDisplay, position: "absolute", left: "calc(50% + 38px)", right: "calc(-50% + 38px)", top: "50%", borderTop: "2px dashed #f5c877" }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35, margin: "0 0 16px", color: "#3a4a78", minHeight: 44 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto 22px", maxWidth: 200 }}>{s.desc}</p>
                  <img
                    src={s.img}
                    alt={s.alt}
                    style={{ width: 130, height: 120, margin: "0 auto", borderRadius: 12, objectFit: "contain", display: "block" }}
                  />
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 40px" }}>Let&apos;s Get Started</a>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============ */}
        <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1050, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 42px" }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 14px", color: "#14143d" }}>Say hello to transparent pricing with Simplebooks</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>How much does our Company Secretarial Services cost?</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
              <div style={{ background: "#f5a623", borderRadius: 14, padding: "34px 70px", textAlign: "center", boxShadow: "0 14px 34px rgba(245,166,35,0.32)" }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>LKR 20,000</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#14143d", marginTop: 12 }}>Annually!</div>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#14143d", margin: "0 0 40px" }}>Pay easy with our exclusive installment plans</p>
            <div className="sim_bk_banks_row" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 30 }}>
              {banks.map((b, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 16 }}>{b.months}</div>
                  <div style={{ borderTop: "1px solid #e4e6f2", paddingTop: 22, display: "flex", justifyContent: "center" }}>
                    {b.logo ? (
                      <img src={b.logo} alt={b.name} style={{ width: 150, height: 52, objectFit: "contain", borderRadius: 6, display: "block" }} />
                    ) : (
                      <div style={{ width: 150, height: 52, background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 8px, #eceefa 8px, #eceefa 16px)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4", textAlign: "center", padding: "0 6px" }}>{b.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HIRE TALENT (gold CTA) ============ */}
        <section style={{ padding: "20px 0 80px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", background: "#f5a623", borderRadius: 18, padding: "56px 48px 62px", textAlign: "center" }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#14143d" }}>Looking to hire new talent? We<br />have the right secretary for you!</h2>
            <p style={{ fontSize: 16, color: "#5c6390", margin: "0 0 44px" }}>Have the team at Simplebooks help you out with the transition process!</p>
            <div className="sim_bk_hire_grid" style={{ display: "flex", alignItems: "stretch", justifyContent: "center", gap: 0 }}>
              {hireCards.map((card, i) => (
                <div key={i} style={{ display: "contents" }}>
                  {i > 0 && (
                    <div className="sim_bk_hire_chev" style={{ display: "flex", alignItems: "center", padding: "0 18px", fontSize: 30, color: "#14143d", fontWeight: 700 }}>›</div>
                  )}
                  <div className="sim_bk_hover_lift_sm" style={{ flex: 1, maxWidth: 340, background: "#f9dd94", borderRadius: 14, padding: "30px 26px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={card.img} alt={card.label} style={{ width: "100%", height: 150, objectFit: "contain", borderRadius: 10, marginBottom: 22, display: "block" }} />
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#14143d" }}>{card.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#get-started" className="sim_bk_btn_dark" style={{ marginTop: 42, fontSize: 15, padding: "15px 36px", background: "#12123f" }}>Get Started Now</a>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section style={{ background: "#eef0fb", padding: "80px 0 90px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>People are talking, hear what they<br />have to say</h2>
            <div className="sim_bk_tg">
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "#ffffff", borderRadius: 14, padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200, boxShadow: "0 6px 22px rgba(17,20,77,0.05)" }}>
                  <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#5a607a", margin: "0 0 18px" }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {t.img ? (
                      <img src={t.img} alt={t.name} style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", flexShrink: 0, display: "block" }} />
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
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <a href="#" className="sim_bk_btn_dark" style={{ fontSize: 15, padding: "14px 40px", background: "#12123f" }}>View more</a>
            </div>
          </div>
        </section>

        {/* ============ STAY INFORMED (blogs) ============ */}
        <section style={{ padding: "80px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Stay informed to stay ahead</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Read our blog</p>
            </div>
            <div className="sim_bk_grid3">
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
          <div style={{ textAlign: "center", marginBottom: 34, position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Get Started</h2>
            <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
          </div>
          <ServiceForm centeredConsent />
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
