import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ServiceForm from "@/components/services/ServiceForm";
import { avatarFor } from "@/components/avatars";

export const metadata: Metadata = {
  title: "On-demand Legal Services | Simplebooks",
  description:
    "Ensure legal compliance with Simplebooks as your legal counsel. Commission, review and close contracts online — lease agreements, NDAs, contract review and more.",
};

const RED = "#f4364f";

const features = [
  {
    title: "Legal help for busy entrepreneurs",
    desc: "We have years of experience in helping companies stay legally compliant.",
    icon: (
      <>
        <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M14 3v4h4" />
        <path d="M9.5 13.5l4-4 2 2-4 4z" />
        <path d="M8 18h5" />
        <path d="M8.5 17l1-1 1.5 1.5-1 1z" />
      </>
    ),
  },
  {
    title: "Friendly and affordable",
    desc: "If you're looking for sound legal advice for your startup at an affordable rate, we're the perfect fit.",
    icon: (
      <>
        <path d="M3 9l4-2a4 4 0 0 1 2.4 0l2 .7" />
        <path d="M3 9l5 4a3 3 0 0 0 3.4.2L15 11" />
        <path d="M21 13l-4 2a4 4 0 0 1-2.4 0L12 14" />
        <circle cx="12" cy="6.5" r="2.6" />
        <path d="M12 5.2v2.6M10.9 6.5h2.2" />
      </>
    ),
  },
  {
    title: "Online legal services",
    desc: "Skip the company visits and postal services and do everything online.",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="12" cy="9.5" r="2.6" />
        <polyline points="10.9 9.5 11.8 10.4 13.3 8.7" />
      </>
    ),
  },
  {
    title: "Dedicated lawyers that are specialized",
    desc: "Our highly competent lawyers will be available for your needs",
    icon: (
      <>
        <path d="M3 13l3-1.5a3 3 0 0 1 2.6 0L11 13a3 3 0 0 0 2.6 0L17 11a3 3 0 0 1 2.6 0L22 12" />
        <path d="M6 11.5V9a3 3 0 0 1 3-3h1.5" />
        <path d="M18 12.5V9a3 3 0 0 0-3-3h-1.5" />
        <path d="M9 6l1.5-1.5a2 2 0 0 1 2.8 0L15 6" />
      </>
    ),
  },
  {
    title: "We are solution-oriented experts",
    desc: "We're focused on providing specialized solutions for your unique needs.",
    icon: (
      <>
        <path d="M11 4.5a2 2 0 0 1 2.8 0l.7.7a2 2 0 0 0 1.4.6h.1a2 2 0 0 1 2 2v.1a2 2 0 0 0 .6 1.4l.7.7a2 2 0 0 1 0 2.8l-.7.7a2 2 0 0 0-.6 1.4V16" />
        <path d="M14 14l-3 3a2 2 0 0 1-2.8 0l-.7-.7a2 2 0 0 0-1.4-.6H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h1a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2" />
      </>
    ),
  },
  {
    title: "Dedicated to meet deadlines",
    desc: "Our services ensure that your legal needs are met on deadline.",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="12" cy="10" r="3.2" />
        <polyline points="12 8.2 12 10 13.4 11" />
      </>
    ),
  },
];

const steps = [
  { n: "1", title: "Contact the Simplebooks team", line: true, img: "/images/legal/svg-07-Call-center-pana-4.svg", alt: "Support agent on a call with a client" },
  { n: "2", title: "Communicate your legal needs", line: true, img: "/images/legal/svg-08-Accept-terms-pana-4.svg", alt: "Client presenting a legal document alongside a gavel" },
  { n: "3", title: "Solution discussion", line: true, img: "/images/legal/svg-09-Conversation-pana-4.svg", alt: "Two people discussing a legal solution" },
  { n: "4", title: "Hand over details and documentation", line: true, img: "/images/legal/svg-10-Personal-files-pana-4.svg", alt: "Lawyer filing client documentation into a cabinet" },
  { n: "5", title: "Receive deliverables", line: false, img: "/images/legal/svg-11-Business-deal-pana-4-1.svg", alt: "Handshake on delivering the completed legal work" },
];

const helpList = [
  "Land title search", "Lease agreements", "Partnership agreements", "Director agreements",
  "Title Reports", "Employment contracts", "Share transfer agreements",
  "Non Disclosure Agreements (NDA)", "Affidavits", "Contract review",
  "Investment and profit sharing agreement", "Memorandum of Understanding (MoU)",
];

const banks = [
  { months: "48 MONTHS", name: "Commercial Bank" },
  { months: "24 MONTHS", name: "HNB" },
  { months: "36 MONTHS", name: "Nations Trust Bank" },
  { months: "36 MONTHS", name: "Seylan Bank" },
  { months: "36 MONTHS", name: "Sampath Bank" },
];

const testimonials = [
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

const blogs = [
  { overlay: "Labour Law in Sri Lanka", title: "Labour Law in Sri Lanka – An Easy Guide to the Shop and Office Act", meta: "February 22, 2021 | 2 Comments" },
  { overlay: "Set Terms, Secure Invesments Transfer Partnerships", title: "Set terms, secure investments, transfer partnerships via partnership agreements", meta: "October 21, 2018 | No Comments" },
  { overlay: "When Does Power of Attorney Takes Effect?", title: "When does power of attorney take effect?", meta: "October 21, 2018 | No Comments" },
];

const featCard: React.CSSProperties = { background: "#ffffff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" };

export default function LegalPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="sim_bk_split" style={{ paddingTop: 66, paddingBottom: 76 }}>
          <div className="sim_bk_split_text" style={{ maxWidth: 500 }}>
            <h1 style={{ fontSize: 52, lineHeight: 1.12, fontWeight: 800, margin: "0 0 22px", letterSpacing: "-1px" }}>
              <span style={{ color: "#14143d" }}>On-demand </span><span style={{ color: RED }}>legal services</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 34px" }}>
              Ensure legal compliance in your company with Simplebooks as your legal counsel. Commission, review and close contracts without complications.
            </p>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ padding: "15px 36px", fontSize: 16, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get a free Legal Consultation</a>
          </div>
          <div className="sim_bk_split_img">
            <img
              src="/images/legal/svg-01-Signing-a-contract-pana-4.svg"
              alt="Legal contract ready for signature beside a judge's gavel"
              style={{ width: 500, height: 360, maxWidth: "100%", borderRadius: 14, objectFit: "contain", display: "block" }}
            />
          </div>
        </section>

        {/* WHY CHOOSE (6 cards) */}
        <section style={{ background: "#eef0fb", padding: "74px 0 60px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, margin: "0 0 50px", color: "#14143d" }}>Why choose Simplebooks?</h2>
            <div className="sim_bk_feat_grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
              {features.map((f, i) => (
                <div key={i} className="sim_bk_hover_lift" style={featCard}>
                  <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                    {f.icon}
                  </svg>
                  <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>{f.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GET STARTED RIGHT-AWAY (5 steps) */}
        <section style={{ background: "#eef0fb", padding: "40px 0 84px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>Get started with Simplebooks right-away</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Follow our easy guided process</p>
            </div>
            <div className="sim_bk_steps5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 46 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                    <div style={{ width: 46, height: 46, borderRadius: "50%", background: RED, color: "#fff", fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{s.n}</div>
                    {s.line && <div className="sim_bk_step_line" style={{ position: "absolute", left: "calc(50% + 38px)", right: "calc(-50% + 38px)", top: "50%", borderTop: "2px dashed #f7a3b0" }} />}
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
              <a href="#get-started" className="sim_bk_btn_orange" style={{ padding: "14px 40px", fontSize: 15 }}>Get expert help</a>
            </div>
          </div>
        </section>

        {/* WHAT CAN WE HELP (list) */}
        <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, lineHeight: 1.25, margin: "0 0 44px", color: "#14143d" }}>What can we help you<br />with today?</h2>
            <div style={{ marginBottom: 42 }}>
              {helpList.map((h, i) => (
                <div key={i} className="sim_bk_pointer" style={{ fontSize: 17, color: "#5f6f9a", padding: "20px 4px", borderBottom: "1px solid #f7dbe1" }}>{h}</div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="#get-started" className="sim_bk_btn_orange" style={{ padding: "14px 40px", fontSize: 15 }}>Reach out to us</a>
            </div>
          </div>
        </section>

        {/* RED CTA */}
        <section style={{ padding: "20px 0 70px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", background: RED, borderRadius: 18, padding: "62px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#ffffff" }}>Do you need a quotation for our<br />legal services?</h2>
            <p style={{ fontSize: 16, color: "#ffd7dd", margin: "0 0 36px" }}>Get in touch with our team today</p>
            <a href="#get-started" className="sim_bk_btn_dark" style={{ padding: "15px 36px", fontSize: 15, background: "#12123f" }}>Talk to the Team</a>
          </div>
        </section>

        {/* INSTALLMENT BANKS */}
        <section style={{ padding: "40px 0 84px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1050, margin: "0 auto" }}>
            <p style={{ textAlign: "center", fontSize: 16, fontWeight: 700, color: "#14143d", margin: "0 0 40px" }}>Pay easy with our exclusive installment plans</p>
            <div className="sim_bk_banks_row" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 30 }}>
              {banks.map((b, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 16 }}>{b.months}</div>
                  <div style={{ borderTop: "1px solid #e4e6f2", paddingTop: 22, display: "flex", justifyContent: "center" }}>
                    <div className="sim_bk_ph_img" style={{ width: 150, height: 52, background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 8px, #eceefa 8px, #eceefa 16px)", borderRadius: 6 }}>
                      <span className="sim_bk_ph_label" style={{ fontSize: 10, textAlign: "center", padding: "0 6px" }}>{b.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: "#eef0fb", padding: "80px 0 90px" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>We help you succeed.<br />Hear what people have to say about us!</h2>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            <div className="sim_bk_tg">
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "#ffffff", borderRadius: 14, padding: "22px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200, boxShadow: "0 6px 22px rgba(17,20,77,0.05)" }}>
                  <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#5a607a", margin: "0 0 18px" }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {avatarFor(t.name) ? (
                      <img src={avatarFor(t.name)!} alt={t.name} style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", flexShrink: 0, display: "block" }} />
                    ) : (
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#d9dcee", flexShrink: 0 }} />
                    )}
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 700, color: "#11144d" }}>{t.name}</div>
                      {t.role && <div style={{ fontSize: 11, color: "#9aa0b4" }}>{t.role}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <a href="/srilanka/testimonials" className="sim_bk_btn_dark" style={{ padding: "14px 40px", fontSize: 15, background: "#12123f" }}>View more</a>
            </div>
          </div>
        </section>

        {/* STAY INFORMED (blogs) */}
        <section style={{ padding: "80px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 54 }}>
              <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Stay informed to stay ahead</h2>
              <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Need a nudge in the right direction? Start here!</p>
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

        {/* GET STARTED FORM */}
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
