import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ServiceForm from "@/components/services/ServiceForm";
import { avatarFor } from "@/components/avatars";

export const metadata: Metadata = {
  title: "Auditing Made Easy | Simplebooks",
};

/* ---------- Data (from reference renderVals) ---------- */
const steps: { n: string; title: string; contactDisplay: string; art: string; alt: string }[] = [
  {
    n: "1",
    title: "Contact the Simplebooks team",
    contactDisplay: "inline-block",
    art: "/images/auditing/svg-01-Call-center-pana-1-1.svg",
    alt: "Illustration of a support agent with a headset taking a customer call",
  },
  {
    n: "2",
    title: "Documentation hand-over",
    contactDisplay: "none",
    art: "/images/auditing/svg-02-Accept-terms-pana-1.svg",
    alt: "Illustration of a person accepting terms and handing over signed documents",
  },
  {
    n: "3",
    title: "Present your source documents to auditors",
    contactDisplay: "none",
    art: "/images/auditing/svg-03-Projections-pana-1.svg",
    alt: "Illustration of financial projections and charts being presented",
  },
  {
    n: "4",
    title: "Auditing process begins",
    contactDisplay: "none",
    art: "/images/auditing/svg-04-Development-pana-1.svg",
    alt: "Illustration of an auditor working through the books at a desk",
  },
  {
    n: "5",
    title: "Access your audited accounts",
    contactDisplay: "none",
    art: "/images/auditing/svg-05-Business-deal-pana-1.svg",
    alt: "Illustration of two people shaking hands over completed audited accounts",
  },
];

const partners: { name: string; img?: string }[] = [
  { name: "iits", img: "/images/auditing/20.png" },
  { name: "Ceylon Guide" },
  { name: "Sama", img: "/images/auditing/21.png" },
  { name: "Almond Tree", img: "/images/auditing/22.png" },
  { name: "Victory Information" },
  { name: "The Grind Coffeehouse", img: "/images/auditing/23.png" },
  { name: "KuleAir", img: "/images/auditing/24.png" },
  { name: "OE", img: "/images/auditing/25.png" },
];

const installments: { months: string; name: string }[] = [
  { months: "48 MONTHS", name: "Commercial Bank" },
  { months: "24 MONTHS", name: "HNB" },
  { months: "36 MONTHS", name: "Nations TrustBank" },
  { months: "36 MONTHS", name: "Seylan Bank" },
  { months: "36 MONTHS", name: "Sampath Bank" },
];

const blogs: { overlay: string; title: string; meta: string }[] = [
  {
    overlay: "TIN Registration in Sri Lanka (2026): Everything You Need to Know",
    title: "TIN Registration in Sri Lanka (2026): Everything You Need to Know",
    meta: "March 15, 2026 | No Comments",
  },
  {
    overlay: "Corporate Income Tax in Sri Lanka - A Simple Guide (2025)",
    title: "Corporate Income Tax in Sri Lanka- A Simple Guide (2025)",
    meta: "August 15, 2025 | No Comments",
  },
  {
    overlay: "VAT Essentials for Startups",
    title: "What is VAT Sri Lanka? Here's everything you need to know",
    meta: "July 21, 2025 | No Comments",
  },
];

const testimonials: { quote: string; name: string; role: string }[] = [
  { quote: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply the saver.", name: "Damith Menaka", role: "Director, Animspire" },
  { quote: "Honest review. Thanks you simplebooks team for the amazing support on my company registration. Highly recommended this hassle-free service \u{1F44D}", name: "NAWRAN", role: "Director, Social Media Academy" },
  { quote: "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta" },
  { quote: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chathura", role: "Director" },
  { quote: "They provided exactly what I needed. Very responsive and professional team to work with.", name: "Wickramawardena", role: "Manager" },
  { quote: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, follow-ups and overall knowledge of the field and pricing. Clearly an industry leader for company secretarial work in Sri Lanka.", name: "Kalana Muthumuni", role: "" },
  { quote: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
  { quote: "It's a superb experience that I got from Simple Books. I got the contract through on time, very good service. Responding via mails for my queries, updating the process etc. everything is good.", name: "Sarath Senanayake", role: "Director" },
  { quote: "I've registered over a dozen companies with simplebooks and would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
];

export default function AuditingPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#11144d", background: "#ffffff", overflowX: "hidden" }}>

        {/* ============ HERO ============ */}
        <section
          className="sim_bk_split"
          style={{ gap: 56, padding: "60px 0 70px", maxWidth: 1250, margin: "0 auto" }}
        >
          <div className="sim_bk_split_text" style={{ flex: 1, maxWidth: 520 }}>
            <h1 style={{ fontSize: 52, lineHeight: 1.1, fontWeight: 800, margin: "0 0 26px", letterSpacing: "-1px" }}>
              <span style={{ color: "#17c39a" }}>Auditing</span>
              <br />
              <span style={{ color: "#14143d" }}>made easy</span>
            </h1>
            <p style={{ fontSize: 17, fontWeight: 600, color: "#5f6f9a", margin: "0 0 18px" }}>Company audits stressing you out? We can fix that!</p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", margin: "0 0 34px" }}>Make the right decisions about your company by having access to the right metric.</p>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ display: "inline-block", fontSize: 16, padding: "15px 38px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Get Audit Help</a>
          </div>
          <div className="sim_bk_split_img" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <img
              src="/images/auditing/01.png"
              alt="Auditing illustration - analyst reviewing charts and reports"
              style={{ width: 500, height: 360, maxWidth: "100%", objectFit: "contain", borderRadius: 14, display: "block" }}
            />
          </div>
        </section>

        {/* ============ HOW DOES IT HELP (5 steps) ============ */}
        <section style={{ padding: "70px 0 80px", background: "#eef0fb" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 14px", color: "#14143d" }}>How does Simplebooks help you run<br />your audits?</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Take a look at our guided process</p>
          </div>
          <div className="sim_bk_steps4" style={{ maxWidth: 1200, margin: "0 auto 46px", gridTemplateColumns: "repeat(5, 1fr)" }}>
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div style={{ width: 48, height: 48, margin: "0 auto 22px", borderRadius: "50%", background: "#17c39a", color: "#fff", fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.n}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.4, margin: "0 0 22px", color: "#3a4a78", minHeight: 44 }}>{s.title}</h3>
                <img
                  src={s.art}
                  alt={s.alt}
                  style={{ width: 130, height: 110, margin: "0 auto", maxWidth: "100%", borderRadius: 12, objectFit: "contain", display: "block" }}
                />
                <a href="#get-started" className="sim_bk_readmore" style={{ display: s.contactDisplay, marginTop: 16, fontSize: 15, fontWeight: 600, color: "#14143d" }}>Contact Now</a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ display: "inline-block", fontSize: 15, padding: "14px 34px" }}>Get Audit Help</a>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section style={{ padding: "80px 0 90px", background: "#eef0fb" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#14143d" }}>Enjoy the Benefits of Audits<br />with Simplebooks</h2>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="sim_bk_grid3" style={{ gap: 26, marginBottom: 26 }}>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17c39a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.4" stroke="#f15f2c" /><path d="M15.5 20a5 5 0 0 1 6.5-4.8" stroke="#f15f2c" /></svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>We work closely with your team</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>We collaborate with your internal team to ensure accuracy</p>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17c39a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}><path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z" /><path d="M7 11l4-8a2 2 0 0 1 2 2v3h5.5a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 17.3 20H7" stroke="#f15f2c" /></svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Professionally executed audits</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>Have experienced, reliable auditors vet your books for you</p>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17c39a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}><circle cx="12" cy="13" r="8" /><polyline points="12 9 12 13 15 15" stroke="#f15f2c" /><path d="M5 3 2 6M19 3l3 3" /></svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Delivered on deadline</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>Say goodbye to hefty penalties from the government.</p>
              </div>

            </div>
            <div className="sim_bk_grid3" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: 26, maxWidth: 740, margin: "0 auto" }}>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17c39a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}><path d="M11 3H4v7h3v-2a2 2 0 0 1 2-2h2z" /><path d="M21 11h-7v-2a2 2 0 0 0-2-2h-2v4h4v3h-2v4h7z" stroke="#f15f2c" /></svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Enhanced process with technology</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>Skip the messy piles of documents and organize your paperwork online with us</p>
              </div>

              <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 32px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#17c39a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}><circle cx="13" cy="12" r="8" /><polyline points="13 8 13 12 16 14" stroke="#f15f2c" /><line x1="2" y1="9" x2="6" y2="9" stroke="#f15f2c" /><line x1="1" y1="13" x2="5" y2="13" stroke="#f15f2c" /></svg>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Efficient process and accurate results</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#7a86a8", margin: 0 }}>Follow a guided process that ensures accurately audited financials</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section style={{ background: "#eef0fb", padding: "40px 0 90px" }}>
          <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#14143d" }}>Here&apos;s what our 1000+ repeat customers have<br />to say about us</h2>
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
                      <div style={{ fontSize: 11, color: "#9aa0b4" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <a href="/srilanka/testimonials" className="sim_bk_btn_dark" style={{ display: "inline-block", fontSize: 14, padding: "13px 34px", background: "#15151f" }}>View more</a>
            </div>
          </div>
        </section>

        {/* ============ TRUSTED PARTNERS ============ */}
        <section style={{ padding: "74px 0 30px", background: "#ffffff", textAlign: "center" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.3, margin: "0 0 50px", color: "#14143d" }}>One of Sri Lanka&apos;s most trusted auditing<br />service provider</h2>
          <div style={{ maxWidth: 1150, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "40px 44px" }}>
            {partners.map((p, i) =>
              p.img ? (
                <img
                  key={i}
                  src={p.img}
                  alt={`${p.name} logo`}
                  style={{ width: 120, height: 56, objectFit: "contain", borderRadius: 8, display: "block" }}
                />
              ) : (
                <div key={i} className="ph-img" style={{ width: 120, height: 56, background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 8px, #eceefa 8px, #eceefa 16px)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4", textAlign: "center", padding: "0 6px" }}>{p.name}</span>
                </div>
              )
            )}
          </div>
        </section>

        {/* ============ GREEN QUOTE CTA ============ */}
        <section style={{ padding: "50px 0 60px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto", background: "#17c39a", borderRadius: 18, padding: "60px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#0d3b32" }}>Want to get a quote for our<br />Auditing Services?</h2>
            <p style={{ fontSize: 16, color: "#114b40", margin: "0 0 34px" }}>Get in touch with our team for helpful audit advice</p>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ display: "inline-block", fontSize: 15, padding: "15px 36px", boxShadow: "0 10px 24px rgba(241,95,44,0.3)" }}>Get Audit Advice</a>
          </div>
        </section>

        {/* ============ INSTALLMENT PLANS ============ */}
        <section style={{ padding: "40px 0 80px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 24, fontWeight: 800, margin: "0 0 44px", color: "#14143d" }}>Pay easy with our exclusive installment plans</h2>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 30, flexWrap: "wrap" }}>
            {installments.map((inst, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#14143d", marginBottom: 16 }}>{inst.months}</div>
                <div style={{ borderTop: "1px solid #e4e6f2", paddingTop: 22, display: "flex", justifyContent: "center" }}>
                  <div className="ph-img" style={{ width: 130, height: 48, background: "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 8px, #eceefa 8px, #eceefa 16px)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4", textAlign: "center", padding: "0 6px" }}>{inst.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ LEARN MORE (blogs) ============ */}
        <section style={{ padding: "60px 0 90px", background: "#ffffff" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 14px", color: "#14143d" }}>Learn more about auditing</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Need a nudge in the right direction? Start here!</p>
          </div>
          <div className="sim_bk_grid3" style={{ maxWidth: 1180, margin: "0 auto" }}>
            {blogs.map((b, i) => (
              <div key={i} className="sim_bk_hover_lift" style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(17,20,77,0.06)", background: "#ffffff" }}>
                <div style={{ height: 220, background: "repeating-linear-gradient(45deg, #2b3168, #2b3168 12px, #333a75 12px, #333a75 24px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center" }}>
                  <span style={{ fontSize: 21, fontWeight: 800, color: "#ffffff", lineHeight: 1.25 }}>{b.overlay}</span>
                </div>
                <div style={{ padding: "26px 24px 28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35, margin: "0 0 18px", color: "#11144d" }}>{b.title}</h3>
                  <div style={{ fontSize: 13, color: "#9aa0b4", marginBottom: 14 }}>{b.meta}</div>
                  <a href="#" className="sim_bk_readmore" style={{ fontSize: 14, fontWeight: 600, color: "#f15f2c" }}>READ MORE ›</a>
                </div>
              </div>
            ))}
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
