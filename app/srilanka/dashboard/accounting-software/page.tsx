import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Faq2Accordion from "@/components/dashboard/Faq2Accordion";
import PricingToggle from "./PricingToggle";
import GetStartedForm from "./GetStartedForm";
import YouTubeEmbed from "@/components/video/YouTubeEmbed";
import { VIDEOS } from "@/components/video/videos";
import { avatarFor } from "@/components/avatars";

export const metadata: Metadata = {
  title: "Invoicing Streamlined, Payments Boosted | Simplebooks",
  description:
    "Elevate your business with our user-friendly dashboard. Create professional invoices and ensure swift, accurate payments. Try free for 2 months!",
};

/* ---------- content data ---------- */
const createChecks = [
  "Add your company logo and brand colors",
  "Customise invoice fields to provide additional details",
  "Add multiple currencies and countries",
];

const testimonials: { quote: string; name: string; role: string }[] = [
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

const faqs: { q: string; a: string }[] = [
  { q: "How do I sign up?", a: "Click any 'Sign Up' or 'Try free trial' button, enter your details, and you'll get instant access to your Simplebooks dashboard — no credit card required." },
  { q: "How do I credit an invoice?", a: "Open the invoice from your dashboard, select 'Credit note', and confirm. The credit is recorded against the original invoice automatically." },
  { q: "Can I create invoices in a foreign currency?", a: "Yes. You can issue invoices in multiple currencies and countries, and the totals are calculated for you." },
  { q: "How do I delete a customer invoice?", a: "Draft invoices can be deleted directly. Published invoices are cancelled with a credit note to keep your records compliant." },
  { q: "How do I edit a published invoice?", a: "Published invoices are locked for compliance. You can issue a credit note and create a corrected invoice in a few clicks." },
  { q: "How to send a reminder to a customer?", a: "Open the invoice and click 'Send reminder', or set automated overdue reminders so customers are nudged without you lifting a finger." },
  { q: "How to add a customer?", a: "Go to Customers → Add customer, fill in their name and contact details, and they'll be ready to invoice instantly." },
  { q: "How to register the payment of a customer invoice?", a: "Open the invoice, click 'Record payment', enter the amount and date, and the status updates to Paid automatically." },
  { q: "How to create an estimate?", a: "Select 'New estimate', add your items and pricing, and send it to your customer. It can be converted to an invoice with one click." },
  { q: "How to create a recurring invoice?", a: "When creating an invoice, enable 'Recurring', choose the frequency, and Simplebooks will generate and send it on schedule." },
  { q: "Is my data secure?", a: "Yes. Your data is encrypted and stored securely, with regular backups and strict access controls." },
  { q: "Can my accountant or bookkeeper use it?", a: "Absolutely. You can invite your accountant or bookkeeper to collaborate directly in your dashboard." },
];

const blogs: { overlay: string; title: string; meta: string }[] = [
  { overlay: "How to Issue or Transfer Shares in a Company", title: "Form 6 – How to issue or transfer shares in a Private Limited Company | Step-by-Step Guide", meta: "July 24, 2025 | 3 Comments" },
  { overlay: "File Annual Returns in Sri Lanka", title: "How to File Form 15 in Sri Lanka – Annual Returns", meta: "July 14, 2025 | 7 Comments" },
  { overlay: "Why You Need a Company Secretary in Sri Lanka", title: "Company Secretary in Sri Lanka: Documents Done Right, On Time. Complete Guide 2025", meta: "June 30, 2025 | 4 Comments" },
];

const bookkeeping = [
  "Track your income and expenses with profit & loss statements",
  "Double-entry accounting software to balance your transactions",
  "Accounting dashboard to get a bigger picture of your business",
];

const payroll = [
  "Stay up to date with the Employee Registrar",
  "Process payroll with pay runs",
  "Download or email payslips",
  "View monthly reports and summaries for EPF/ETF, tax, and employee leave",
];

const tax = [
  "File for Individual and Company taxes",
  "Submit all your forms and documents online",
  "Super free and simple process",
];

const ctaChecks = [
  "100% safe and secure",
  "No credit card required",
  "Four month trial period and cancel anytime",
  "No commitments!",
];

/* ---------- small helpers ---------- */
function BptCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#f15f2c" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="11" />
      <polyline points="17 8.5 10.5 15.5 7 12" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AccountingSoftwarePage() {
  return (
    <>
      <Header />
      <main>
        {/* ============ HERO ============ */}
        <section className="sim_bk_split" style={{ gap: 56, paddingTop: 70, paddingBottom: 80 }}>
          <div className="sim_bk_split_text">
            <h1 style={{ fontSize: 50, lineHeight: 1.1, fontWeight: 800, margin: "0 0 24px", letterSpacing: "-1px", color: "#11144d" }}>Invoicing Streamlined, Payments Boosted</h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8a8fa6", margin: "0 0 34px" }}>Elevate your business with our user-friendly dashboard. Create professional invoices and ensure <strong style={{ color: "#11144d", fontWeight: 700 }}>swift, accurate</strong> payments. Try free for 2 months!</p>
            <p style={{ fontSize: 16, color: "#8a8fa6", margin: "0 0 18px" }}>Trusted by over <strong style={{ color: "#2f6bef", fontWeight: 700 }}>5000 businesses</strong> in Sri Lanka</p>
            <div className="rating-hero" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 34 }}>
              <span style={{ fontSize: 24, fontWeight: 800 }}><span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span></span>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#11144d" }}>4.9 Rating</span>
              <span style={{ color: "#f5b921", letterSpacing: 1, fontSize: 18 }}>★★★★★</span>
              <span style={{ fontSize: 14, color: "#2f6bef" }}>(800+ cutomer reviews)</span>
            </div>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 16, padding: "15px 40px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Try free trial</a>
            <p style={{ fontSize: 13, fontStyle: "italic", color: "#8a8fa6", margin: "22px 0 0" }}>Full access for free. 2 month free trial. No credit card required.</p>
          </div>
          <div className="sim_bk_split_img">
            <YouTubeEmbed
              id={VIDEOS.invoicing.id}
              title={VIDEOS.invoicing.title}
              style={{ width: 520, maxWidth: "100%" }}
            />
          </div>
        </section>

        {/* ============ CREATE & CUSTOMIZE (timeline) ============ */}
        <section className="sim_bk_split" style={{ gap: 70, paddingTop: 40, paddingBottom: 90 }}>
          <div className="sim_bk_split_img" style={{ justifyContent: "center" }}>
            <img src="/images/invoicing/01.png" alt="Professional invoice preview mockups from the Simplebooks invoicing tool" style={{ width: 480, height: 520, objectFit: "contain", borderRadius: 14, display: "block" }} />
          </div>
          <div className="sim_bk_split_text">

            {/* node 1 (active) */}
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", border: "5px solid #2f6bef", background: "#ffffff", flexShrink: 0 }} />
                <div style={{ flex: 1, width: 2, background: "#2f3a7a" }} />
              </div>
              <div style={{ paddingBottom: 44 }}>
                <h2 style={{ fontSize: 30, fontWeight: 800, margin: "-6px 0 16px", color: "#11144d" }}>Create and customize professional invoices</h2>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: "0 0 20px" }}>Maintaining your brand image by sending professional invoices is important for your business.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {createChecks.map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#fde4d8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <span style={{ fontSize: 16, color: "#6b7290" }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* node 2 */}
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#11144d", flexShrink: 0, marginTop: 4 }} />
                <div style={{ flex: 1, width: 2, background: "#2f3a7a" }} />
              </div>
              <div style={{ paddingBottom: 44 }}>
                <h2 style={{ fontSize: 30, fontWeight: 800, margin: "-6px 0 0", color: "#11144d" }}>Send it to your customers effortlessly</h2>
              </div>
            </div>

            {/* node 3 */}
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#11144d", flexShrink: 0, marginTop: 4 }} />
              </div>
              <div>
                <h2 style={{ fontSize: 30, fontWeight: 800, margin: "-6px 0 0", color: "#11144d" }}>Get Paid Faster</h2>
              </div>
            </div>

          </div>
        </section>

        {/* ============ WHAT MORE (feature band) ============ */}
        <section style={{ background: "#f5f6fd", padding: "66px 0 74px", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 10px", color: "#11144d" }}>What more can you do with Simplebooks Dashboard?</h2>
          <p style={{ fontSize: 16, color: "#6b7db0", margin: "0 0 52px" }}>Your shortcut to smooth payments</p>
          <div className="whatmore-grid" style={{ maxWidth: 1080, margin: "0 auto 46px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 30 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5z" /><circle cx="12" cy="11" r="4" fill="#2f6bef" stroke="none" /><polyline points="10.3 11 11.6 12.3 13.9 9.7" stroke="#fff" strokeWidth="1.6" /></svg>
              </div>
              <div style={{ fontSize: 18, fontWeight: 500, color: "#2b3358", maxWidth: 220, lineHeight: 1.4 }}>100% Safe and Secure</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /><rect x="6" y="12" width="4" height="3" fill="#c9d4f5" stroke="none" /></svg>
              </div>
              <div style={{ fontSize: 18, fontWeight: 500, color: "#2b3358", maxWidth: 220, lineHeight: 1.4 }}>Four-Month Trial Period and Cancel Anytime</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /><circle cx="18" cy="16" r="5" fill="#2f6bef" stroke="none" /><line x1="16.3" y1="14.3" x2="19.7" y2="17.7" stroke="#fff" strokeWidth="1.6" /><line x1="19.7" y1="14.3" x2="16.3" y2="17.7" stroke="#fff" strokeWidth="1.6" /></svg>
              </div>
              <div style={{ fontSize: 18, fontWeight: 500, color: "#2b3358", maxWidth: 220, lineHeight: 1.4 }}>No Credit Card Required</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><line x1="15" y1="15" x2="21" y2="21" /></svg>
              </div>
              <div style={{ fontSize: 18, fontWeight: 500, color: "#2b3358", maxWidth: 220, lineHeight: 1.4 }}>No Commitments</div>
            </div>
          </div>
          <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 34px" }}>Sign Up for free</a>
        </section>

        {/* ============ PRICING ============ */}
        <section style={{ padding: "84px 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 40px", color: "#11144d" }}>All-inclusive pricing to register your business</h2>
            <PricingToggle />
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
              <a href="/srilanka/testimonials" className="sim_bk_btn_orange" style={{ fontSize: 14, padding: "13px 34px" }}>View more</a>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section style={{ padding: "80px 0 90px", background: "#eceefb" }}>
          <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 800, margin: "0 0 54px", color: "#11144d" }}>Frequently Asked Questions</h2>
          <Faq2Accordion faqs={faqs} />
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

        {/* ============ BOOKKEEPING / PAYROLL / TAX ============ */}
        <section style={{ padding: "40px 0 90px", background: "#ffffff" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, margin: "0 0 60px", color: "#11144d" }}>What more can you do with Simplebooks Dashboard?</h2>
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
                    <BptCheck />
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "#2b3358" }}>{i}</span>
                  </div>
                ))}
              </div>
              <span style={{ display: "inline-block", color: "#b6bacb", fontWeight: 600, fontSize: 15, padding: "13px 30px", background: "#f1f2f6", borderRadius: 999 }}>Coming soon</span>
            </div>

            <div>
              <div style={{ width: 46, height: 46, borderRadius: 10, background: "#f15f2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4" /></svg>
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 20px", color: "#11144d" }}>Payroll</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7290", margin: "0 0 26px" }}>Digitise your payroll and pay salaries on time with Simplebooks Payroll.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 34 }}>
                {payroll.map((i, idx) => (
                  <div key={idx} style={{ display: "flex", gap: 12 }}>
                    <BptCheck />
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "#2b3358" }}>{i}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "13px 30px" }}>Use Payroll Tool</a>
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
                    <BptCheck />
                    <span style={{ fontSize: 15, lineHeight: 1.5, color: "#2b3358" }}>{i}</span>
                  </div>
                ))}
              </div>
              <span style={{ display: "inline-block", color: "#b6bacb", fontWeight: 600, fontSize: 15, padding: "13px 30px", background: "#f1f2f6", borderRadius: 999 }}>Coming soon</span>
            </div>

          </div>
        </section>

        {/* ============ GET STARTED CTA BAND ============ */}
        <section style={{ padding: "80px 0", background: "#eceefb", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, margin: "0 0 22px", color: "#11144d" }}>Get started with Simplebooks Invoicing<br />for free</h2>
          <p style={{ fontSize: 16, color: "#6b7db0", margin: "0 0 40px" }}>Get access to all our features for four months, and see the difference it can make for your business.</p>
          <div className="checks-2col" style={{ maxWidth: 760, margin: "0 auto 42px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 40px", textAlign: "left" }}>
            {ctaChecks.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#f15f2c" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" /><polyline points="17 8.5 10.5 15.5 7 12" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontSize: 16, color: "#2b3358" }}>{c}</span>
              </div>
            ))}
          </div>
          <a href="#get-started" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 34px" }}>Sign up for free</a>
        </section>

        {/* ============ GET STARTED FORM ============ */}
        <section id="get-started" style={{ position: "relative", padding: "80px 0 100px", background: "#f5f6fd", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 40, bottom: 40, width: 150, height: 220, background: "repeating-linear-gradient(45deg, #eceefb, #eceefb 10px, #e3e6f7 10px, #e3e6f7 20px)", borderRadius: 12, display: "none", alignItems: "center", justifyContent: "center" }} />
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#11144d" }}>Get Started</h2>
            <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
          </div>
          <GetStartedForm />
          <div style={{ position: "absolute", right: 40, bottom: 40, width: 130, height: 190, background: "repeating-linear-gradient(45deg, #eceefb, #eceefb 10px, #e3e6f7 10px, #e3e6f7 20px)", borderRadius: 12, display: "none" }} />
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
