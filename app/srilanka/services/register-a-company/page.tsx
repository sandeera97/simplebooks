import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ServiceForm from "@/components/services/ServiceForm";
import { VIDEOS } from "@/components/video/videos";

export const metadata: Metadata = {
  title: "Register Your Business with Us | Simplebooks",
};

/* ============================================================
   Data (ported from the reference renderVals())
   ============================================================ */

const checklist: string[] = [
  "Hassle free business registration",
  "All your documents in one place",
  "Real-time status updates",
  "Make changes in a few clicks",
  "Get rid of multiple contact points",
];

type SidebarItem = {
  name: string;
  caret: string;
  bg: string;
  color: string;
  weight: number;
  dot: string;
};

const dashSidebar: SidebarItem[] = (
  [
    { name: "Incorporation", active: true },
    { name: "Users" },
    { name: "Secretary" },
    { name: "Sales", caret: "▾" },
    { name: "Purchases", caret: "▾" },
    { name: "Accounting", caret: "▾" },
    { name: "Legal" },
    { name: "Payroll", caret: "▾" },
    { name: "Audit" },
    { name: "Tax" },
  ] as { name: string; active?: boolean; caret?: string }[]
).map((d) => ({
  name: d.name,
  caret: d.caret || "",
  bg: d.active ? "#fdeee7" : "transparent",
  color: d.active ? "#f15f2c" : "#6b7290",
  weight: d.active ? 700 : 500,
  dot: d.active ? "#f15f2c" : "#c4c8db",
}));

type StepDot = {
  label: string;
  mark: string;
  bg: string;
  border: string;
  fg: string;
  labelColor: string;
};

const dashSteps: StepDot[] = (
  [
    { label: "Submit details", done: true },
    { label: "Payment", done: true },
    { label: "Processing details", done: true },
    { label: "Sign documents", done: true },
    { label: "Authorization", done: false },
    { label: "Final documents", done: false },
  ] as { label: string; done: boolean }[]
).map((s) => ({
  label: s.label,
  mark: s.done ? "✓" : "S",
  bg: s.done ? "#f15f2c" : "#ffffff",
  border: s.done ? "#f15f2c" : "#d3d7ea",
  fg: s.done ? "#ffffff" : "#b0b4c8",
  labelColor: s.done ? "#f15f2c" : "#b0b4c8",
}));

type DashForm = {
  title: string;
  body: string;
  status: string;
  statusColor: string;
  dl: string;
  action: string;
};

const dashForms: DashForm[] = [
  { title: "Form 01", body: "Error quo autem a omnis. Non ea error. Quisquam maiores accusamus.", status: "Successful", statusColor: "#1bbf6a", dl: "", action: "" },
  { title: "Form 18", body: "Doloremque nobis praesentium qui quidem quasi minus adit amet.", status: "Failed", statusColor: "#e0416b", dl: "⤓ Download", action: "Click here to re-upload" },
  { title: "Form 19", body: "Nam illum voluptas nostrum. Quas sed quo rerum consequatur tempora.", status: "Pending", statusColor: "#e59a2b", dl: "", action: "" },
  { title: "Articles of association", body: "Saepe cum dicta sed similique molestias consequatur minima aliquam.", status: "Pending", statusColor: "#e59a2b", dl: "", action: "" },
];

type Step = { n: string; title: string; desc: string; lineDisplay: "block" | "none"; art: string; alt: string };

const steps: Step[] = [
  {
    n: "1",
    title: "Approve your business name",
    desc: "We will check the availability, reserve and approve your business name for you.",
    lineDisplay: "block",
    art: "/images/register-a-company/svg-02-Done-pana.svg",
    alt: "Illustration of a business name approved with a large check mark",
  },
  {
    n: "2",
    title: "Submit your registration form",
    desc: "Let the team fill out and submit your registration forms. This includes Form 01, 18 and 19.",
    lineDisplay: "block",
    art: "/images/register-a-company/svg-03-Accept-terms-pana-3.svg",
    alt: "Illustration of a person accepting terms and submitting a registration form",
  },
  {
    n: "3",
    title: "Submit articles of association",
    desc: "Get the team to help you create and submit your new company's articles of association.",
    lineDisplay: "block",
    art: "/images/register-a-company/svg-04-Development-pana-1-1.svg",
    alt: "Illustration of a person drafting company documents on a computer",
  },
  {
    n: "4",
    title: "Help open your bank accounts",
    desc: "Once your company has been approved, we'll help you with opening your bank accounts.",
    lineDisplay: "block",
    art: "/images/register-a-company/svg-05-Savings-pana-1.svg",
    alt: "Illustration of savings and a bank account being opened",
  },
  {
    n: "5",
    title: "Make sure you're compliant",
    desc: "We will help you ensure that you're conducting your business according to the Sri Lankan law.",
    lineDisplay: "none",
    art: "/images/register-a-company/svg-06-Business-deal-pana-4.svg",
    alt: "Illustration of two people shaking hands over a compliant business deal",
  },
];

type DetailCol = { title: string; items: string[] };

const detailCols: DetailCol[] = [
  { title: "Company", items: ["Name of your business", "Activities the company will undertake", "Permanent address of the business", "Grama seva division of the business", "The email address of the company"] },
  { title: "Shareholder", items: ["Distribution of shares", "Full names of shareholders", "Permanent addresses of shareholders", "Contact details of shareholders", "NIC/passport copies of shareholders"] },
  { title: "Director", items: ["Number of directors", "Full names of directors", "Permanent addresses of directors", "Contact details of the directors", "NIC/passport (scans) of directors"] },
];

const coreRows: string[] = [
  "Name of approval",
  "Articles of association",
  "Form 1",
  "Form 18",
  "Form 19",
  "Certified form 1",
  "Certified articles of association",
  "Certified Form BO 1",
  "Certified Form BO 5",
];

type ExtrasRaw = { label: string; prem?: string; pro?: string; text?: boolean };

const extrasRaw: ExtrasRaw[] = [
  { label: "Corporate bank account" },
  { label: "Company incorporation advice" },
  { label: "Paper notice and gazette" },
  { label: "Free Invoicing and Purchase Tool(Rs 14,400 value)", prem: "6 months", pro: "12 months", text: true },
  { label: "Free Payroll Tool", prem: "4 months", pro: "6 months", text: true },
  { label: "Free TIN Registration (Rs 7,500 value)" },
  { label: "Share certificate" },
  { label: "Director seal" },
  { label: "Pre-ink seal" },
  { label: "Minute book" },
  { label: "Share register" },
  { label: "Integrated with PAYable - First-year subscription fee waived off" },
  { label: "20% off any individual Loku Business Course" },
  { label: "Get your domain names checked & purchased - With exclusive discounts" },
  { label: "Exclusive Discounted Telemedicine & Healthcare Services via Flash Health" },
  { label: "Get Exclusive Dialog Enterprise Solutions Through Simplebooks" },
];

type ExtrasRow = {
  label: string;
  prem: string;
  pro: string;
  premText: boolean;
  proText: boolean;
  premCheck: boolean;
  proCheck: boolean;
};

const extrasRows: ExtrasRow[] = extrasRaw.map((r) => ({
  label: r.label,
  prem: r.prem || "",
  pro: r.pro || "",
  premText: !!r.text,
  proText: !!r.text,
  premCheck: !r.text,
  proCheck: !r.text,
}));

const secretaryLeft: string[] = [
  "Change company name & address",
  "Annual report",
  "Amend your articles of association",
  "Issue of shares",
  "Transfer of shares",
  "Change company secretary",
];

const secretaryRight: string[] = [
  "Add or remove company director/s",
  "Change the details of a company director",
  "File the resignation of a company director",
  "Open bank account",
  "Online banking facilities",
];

type Testimonial = { quote: string; name: string; role: string; img?: string };

const testimonials: Testimonial[] = [
  { quote: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife", img: "/images/register-a-company/02.jpg" },
  { quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.", name: "Damith Menaka", role: "Director, Animspire", img: "/images/register-a-company/03.jpg" },
  { quote: "Thanks you simplebooks team for the amazing support on my company registration. Givantha, Moiz and other team members were very helpful. Keep up the quick service. Highly recommended this hassle-free service 👍", name: "NAWRAN", role: "Director, Social Media Academy", img: "/images/register-a-company/04.jpg" },
  { quote: "They took the time to explain what they were doing every step of the way. This took a lot of stress away. I deeply appreciate their professionality and will always recommend Simplebooks to any in need of the services they provide. I couldn't have wished for anything better.", name: "Ratta", role: "Founder, Studio Ratta", img: "/images/register-a-company/05.jpg" },
  { quote: "SUPER!!! It's the best place to ever do business with. Dream team!", name: "Chanux Bro", role: "Director, Chanux Bro", img: "/images/register-a-company/06.jpg" },
  { quote: "They provided exactly what I needed. Very responsive and professional team to work with.", name: "Wickramawardena", role: "Manager" },
  { quote: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, followups and overall knowledge of the field and pricing. Clearly an industry leader for Company secretarial work in Sri lanka.", name: "Kalana Muthumuni", role: "", img: "/images/register-a-company/16.jpg" },
  { quote: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director", img: "/images/register-a-company/17.jpg" },
  { quote: "It's a superb experience that I got from Simple Books. I got the contract through on line. from there onwards up to now – I came to collect my documents - they gave me very good service. Responding via mails for my queries, updating the process etc ..everything is good.", name: "Sarath Senanayake", role: "Director", img: "/images/register-a-company/18.jpg" },
  { quote: "I've registered over 10 businesses with Simplebooks over the years and I would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global", img: "/images/register-a-company/19.jpg" },
];

type Blog = { overlay: string; title: string; meta: string };

const blogs: Blog[] = [
  { overlay: "New update to company registration law: Beneficial Ownership", title: "New update to company registration law: Beneficial Ownership", meta: "April 20, 2026 | No Comments" },
  { overlay: "How to Register an NGO in Sri Lanka", title: "NGO Registration in Sri Lanka – A Step by Step Guide", meta: "October 9, 2025 | 2 Comments" },
  { overlay: "How to Register a Business in Sri Lanka", title: "Business Registration in Sri Lanka: The Simple Handbook", meta: "October 7, 2025 | No Comments" },
];

/* Green check svg reused in pricing + checklist */
function GreenCheck({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const priceBorder = "1.5px solid rgba(241,95,44,0.5)";

export default function RegisterACompanyPage() {
  return (
    <>
      {/* Page-scoped responsive rules mirroring the reference media queries.
         globals.css is not edited; these only target this page's classes. */}
      <style>{`
        @media (max-width: 1120px) {
          .sim_bk_steps5 { grid-template-columns: repeat(3, 1fr) !important; row-gap: 50px !important; }
          .sim_bk_step_line { display: none !important; }
        }
        @media (max-width: 920px) {
          .sim_bk_details_grid { grid-template-columns: 1fr !important; max-width: 460px !important; margin-left: auto !important; margin-right: auto !important; }
          .sim_bk_adv_inner { flex-direction: column !important; gap: 34px !important; padding: 34px !important; }
          .sim_bk_inc_grid { grid-template-columns: 1fr !important; max-width: 460px !important; margin-left: auto !important; margin-right: auto !important; }
          .sim_bk_sec_lists { flex-direction: column !important; gap: 4px !important; }
          .sim_bk_form_illus { display: none !important; }
        }
        @media (max-width: 620px) {
          .sim_bk_steps5 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <Header />

      {/* ============ HERO ============ */}
      <section className="sim_bk_split" style={{ gap: 56, padding: "70px 0 80px" }}>
        <div className="sim_bk_split_text" style={{ maxWidth: 520 }}>
          <h1 style={{ fontSize: 52, lineHeight: 1.12, fontWeight: 800, margin: "0 0 22px", letterSpacing: "-1px" }}>
            <span style={{ color: "#f15f2c" }}>Register Your Business</span>
            <br />
            <span style={{ color: "#14143d" }}>with Us Today</span>
          </h1>
          <p style={{ fontSize: 17, color: "#6b7db0", margin: "0 0 36px" }}>We&apos;ll guide you through the entire process.</p>
          <a href="#free-consultation" className="sim_bk_btn_orange" style={{ fontSize: 16, padding: "15px 38px", boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>
            Get a Free Consultation
          </a>
        </div>
        <div className="sim_bk_split_img">
          <img
            src="/images/register-a-company/svg-01-Certification-pana-1.svg"
            alt="Business registration illustration - company incorporation certificate being awarded"
            style={{ width: 500, height: 360, maxWidth: "100%", borderRadius: 14, objectFit: "contain", display: "block" }}
          />
        </div>
      </section>

      {/* ============ INTRODUCING DASHBOARD ============ */}
      <section style={{ background: "#f0f1fb", padding: "74px 0 84px" }}>
        <div className="sim_bk_split" style={{ padding: 0, gap: 60 }}>
          <div className="sim_bk_split_text" style={{ maxWidth: 500 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.15, margin: "0 0 24px", color: "#14143d" }}>Introducing Simplebooks Dashboard</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: "0 0 26px" }}>Make an account for zero cost and get started on your online journey to register your company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 34 }}>
              {checklist.map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ flexShrink: 0, display: "inline-flex" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1bbf6a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 16, color: "#2b3358" }}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#free-consultation" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 30px" }}>Sign up for free</a>
              <a href={`https://youtu.be/${VIDEOS.registerCompany.id}`} target="_blank" rel="noopener noreferrer" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 30px" }}>Watch demo</a>
            </div>
          </div>

          <div style={{ flex: 1.05, minWidth: 0 }}>
            {/* dashboard mock */}
            <div style={{ width: "100%", background: "#ffffff", border: "1px solid #e7e9f5", borderRadius: 12, overflow: "hidden", boxShadow: "0 18px 50px rgba(17,20,77,0.10)" }}>
              <div style={{ background: "#12123f", padding: 12, textAlign: "center", color: "#ffffff", fontWeight: 700, fontSize: 14 }}>simplebooks</div>
              <div style={{ display: "flex" }}>
                {/* sidebar */}
                <div style={{ width: 128, flexShrink: 0, borderRight: "1px solid #eef0f6", padding: "10px 0" }}>
                  {dashSidebar.map((d, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6, padding: "8px 12px", background: d.bg }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 10.5, fontWeight: d.weight, color: d.color }}>
                        <span style={{ width: 9, height: 9, borderRadius: 2, background: d.dot, flexShrink: 0 }} />
                        {d.name}
                      </span>
                      <span style={{ fontSize: 8, color: "#b7bcd0" }}>{d.caret}</span>
                    </div>
                  ))}
                </div>
                {/* main */}
                <div style={{ flex: 1, minWidth: 0, padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    {dashSteps.map((s, i) => (
                      <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, position: "relative" }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: s.bg, border: `1.5px solid ${s.border}`, color: s.fg, fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{s.mark}</div>
                        <span style={{ fontSize: 7.5, color: s.labelColor, textAlign: "center", lineHeight: 1.2 }}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#14143d", marginBottom: 4 }}>Document authorization status</div>
                  <div style={{ fontSize: 8.5, color: "#9aa0b4", lineHeight: 1.4, marginBottom: 12 }}>You will see authorization status of each document below. If it fails, you need to sign again and re-upload the failed document.</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {dashForms.map((f, i) => (
                      <div key={i} style={{ border: "1px solid #eef0f6", borderRadius: 7, padding: "10px 11px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontSize: 10, fontWeight: 700, color: "#14143d" }}>📄 {f.title}</span>
                          <span style={{ fontSize: 8, color: "#9aa0b4" }}>{f.dl}</span>
                        </div>
                        <div style={{ fontSize: 8, color: "#b0b4c8", lineHeight: 1.45, marginBottom: 6 }}>{f.body}</div>
                        <div style={{ fontSize: 9, color: "#6b7290" }}>
                          Status: <span style={{ color: f.statusColor, fontWeight: 600 }}>{f.status}</span> <span style={{ color: "#f15f2c" }}>{f.action}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REGISTER YOUR BUSINESS TODAY (5 steps) ============ */}
      <section style={{ padding: "78px 0 84px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 12px", color: "#14143d" }}>Register Your Business Today</h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Take a look at our guided process</p>
          </div>
          <div className="sim_bk_steps5" style={{ margin: "0 auto 46px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#f15f2c", color: "#fff", fontSize: 19, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>{s.n}</div>
                  <div className="sim_bk_step_line" style={{ display: s.lineDisplay, position: "absolute", left: "calc(50% + 40px)", right: "calc(-50% + 40px)", top: "50%", borderTop: "2px dashed #f5a37e" }} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.35, margin: "0 0 16px", color: "#3a4a78", minHeight: 46 }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8a8fa6", margin: "0 auto 22px", maxWidth: 210 }}>{s.desc}</p>
                <img
                  src={s.art}
                  alt={s.alt}
                  style={{ width: 130, height: 120, margin: "0 auto", maxWidth: "100%", borderRadius: 12, objectFit: "contain", display: "block" }}
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#free-consultation" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 40px" }}>Get Started</a>
          </div>
        </div>
      </section>

      {/* ============ DETAILS WE NEED ============ */}
      <section style={{ padding: "74px 0 84px", background: "#f0f1fb" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>
            The details we need from you to
            <br />
            get started
          </h2>
          <div className="sim_bk_details_grid" style={{ margin: "0 auto 44px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
            {detailCols.map((col, i) => (
              <div key={i} style={{ background: "#ffffff", borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 26px rgba(17,20,77,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#e7e9f3", padding: "16px 22px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#8b90ad">
                    <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" />
                  </svg>
                  <span style={{ fontSize: 17, fontWeight: 700, color: "#14143d" }}>{col.title}</span>
                </div>
                <div style={{ padding: "6px 22px 12px" }}>
                  {col.items.map((it, j) => (
                    <div key={j} style={{ fontSize: 15, color: "#5f6f9a", padding: "16px 0", borderBottom: "1px solid #eef0f6" }}>{it}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="#free-consultation" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "14px 38px" }}>Contact Our Team</a>
          </div>
        </div>
      </section>

      {/* ============ ADVANTAGE ============ */}
      <section style={{ padding: "80px 0 84px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, lineHeight: 1.25, margin: "0 0 48px", color: "#14143d" }}>
            The Simplebooks Business Registration
            <br />
            Advantage
          </h2>
          <div className="sim_bk_adv_inner" style={{ margin: "0 auto", border: "1px solid #f2e0d8", borderRadius: 18, padding: "40px 48px", display: "flex", alignItems: "center", gap: 56, boxShadow: "0 10px 34px rgba(17,20,77,0.04)" }}>
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img src="/images/company-secretary/03.svg" alt="Two business people shaking hands" style={{ width: "100%", maxWidth: 420, height: 300, objectFit: "contain", borderRadius: 14, display: "block" }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 26, fontWeight: 800, margin: "0 0 16px", color: "#14143d" }}>We have helped over 5,000+ others.</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6b7db0", margin: 0 }}>Register your company with an experienced team of company secretaries that have successfully helped so many other before you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INCLUDED SERVICES ============ */}
      <section style={{ padding: "74px 0 84px", background: "#f0f1fb" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>
            Register your company with these
            <br />
            included services
          </h2>
          <div className="sim_bk_inc_grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 34px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <path d="M8 3h9l4 4v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                <polyline points="17 3 17 7 21 7" />
                <path d="M3 8a4 4 0 0 0 0 8" />
                <rect x="10" y="13" width="2.5" height="4" />
                <rect x="14" y="10.5" width="2.5" height="6.5" />
              </svg>
              <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>We will keep you educated and up-to-date</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Stay educated about your finances and bookkeeping through our educational videos and blogs.</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 34px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <rect x="6" y="2" width="9" height="13" rx="1.5" />
                <line x1="8.5" y1="5.5" x2="12.5" y2="5.5" />
                <line x1="8.5" y1="8.5" x2="9" y2="8.5" />
                <line x1="11" y1="8.5" x2="11.5" y2="8.5" />
                <line x1="8.5" y1="11" x2="9" y2="11" />
                <line x1="11" y1="11" x2="11.5" y2="11" />
                <circle cx="17" cy="16" r="5" />
                <path d="M17 13.5v5M14.8 16h4.4" />
              </svg>
              <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>Access tax calculators and accounting tools</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Access easy-to-follow tools and calculators to know about your taxes and employee salary slips.</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 34px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <path d="M12 3a4 4 0 0 0-4 4v3H7a3 3 0 0 0 0 6h1v-3" />
                <path d="M8 13a4 4 0 0 0 8 0V7a4 4 0 0 0-4-4" />
                <rect x="14.5" y="4" width="7" height="5" rx="1" />
                <path d="M16.5 9v2l2-2" />
              </svg>
              <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>We are your integrated, one stop solution</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>All in one support system for your growing businesses. Get access to our lawyers, bookkeepers and more!</p>
            </div>

            <div className="sim_bk_hover_lift" style={{ background: "#ffffff", borderRadius: 16, padding: "36px 34px", boxShadow: "0 8px 30px rgba(17,20,77,0.05)" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 22 }}>
                <path d="M4 13a3 3 0 0 1 3-1.5l3 1a4 4 0 0 0 1.8 0" />
                <path d="M3 12l3.5-3.5a3 3 0 0 1 4 0L14 12" />
                <path d="M4 13l5 4.5a2 2 0 0 0 2.6 0L20 11l1-1" />
                <circle cx="12" cy="7" r="2.4" />
              </svg>
              <h3 style={{ fontSize: 21, fontWeight: 700, margin: "0 0 12px", color: "#14143d" }}>We are the most affordable service provider</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7db0", margin: 0 }}>Don&apos;t worry about outright payments. Choose from our instalment plans and pay as you earn!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section style={{ padding: "78px 0 40px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 800, margin: "0 0 54px", color: "#14143d" }}>Get the most affordable rates</h2>
          <div style={{ overflowX: "auto", padding: "22px 0 6px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", columnGap: 26, rowGap: 0, maxWidth: 1040, minWidth: 720, margin: "0 auto", alignItems: "stretch" }}>
              {/* header row */}
              <div />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "32px 12px 22px", borderLeft: priceBorder, borderRight: priceBorder, borderTop: priceBorder, borderRadius: "14px 14px 0 0", position: "relative" }}>
                <span style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", background: "#f15f2c", color: "#fff", fontSize: 13, fontWeight: 700, padding: "7px 22px", borderRadius: 8, whiteSpace: "nowrap" }}>Popular</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#f15f2c" }}>Premium</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#14143d" }}>LKR 42,410</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "32px 12px 22px", borderLeft: priceBorder, borderRight: priceBorder, borderTop: priceBorder, borderRadius: "14px 14px 0 0" }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "#f15f2c" }}>Premium Pro</span>
                <span style={{ fontSize: 24, fontWeight: 800, color: "#14143d" }}>LKR 47,410</span>
              </div>

              {/* core rows */}
              {coreRows.map((r, i) => (
                <div key={`core-${i}`} style={{ display: "contents" }}>
                  <div style={{ display: "flex", alignItems: "center", padding: "12px 4px", fontSize: 15, color: "#6b7290", lineHeight: 1.4 }}>{r}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 8px", borderLeft: priceBorder, borderRight: priceBorder }}>
                    <GreenCheck />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 8px", borderLeft: priceBorder, borderRight: priceBorder }}>
                    <GreenCheck />
                  </div>
                </div>
              ))}

              {/* Extras heading row */}
              <div style={{ display: "flex", alignItems: "center", padding: "22px 4px 12px", fontSize: 18, fontWeight: 800, color: "#14143d" }}>Extras</div>
              <div style={{ borderLeft: priceBorder, borderRight: priceBorder }} />
              <div style={{ borderLeft: priceBorder, borderRight: priceBorder }} />

              {/* extras rows */}
              {extrasRows.map((r, i) => (
                <div key={`extra-${i}`} style={{ display: "contents" }}>
                  <div style={{ display: "flex", alignItems: "center", padding: "12px 4px", fontSize: 15, color: "#6b7290", lineHeight: 1.4 }}>{r.label}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 8px", borderLeft: priceBorder, borderRight: priceBorder }}>
                    {r.premCheck && <GreenCheck />}
                    {r.premText && <span style={{ fontSize: 15, fontWeight: 500, color: "#3a4a78" }}>{r.prem}</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 8px", borderLeft: priceBorder, borderRight: priceBorder }}>
                    {r.proCheck && <GreenCheck />}
                    {r.proText && <span style={{ fontSize: 15, fontWeight: 500, color: "#3a4a78" }}>{r.pro}</span>}
                  </div>
                </div>
              ))}

              {/* footer row */}
              <div />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "26px 12px 34px", borderLeft: priceBorder, borderRight: priceBorder, borderBottom: priceBorder, borderRadius: "0 0 14px 14px" }}>
                <a href="#free-consultation" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "13px 34px" }}>Get Started</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "26px 12px 34px", borderLeft: priceBorder, borderRight: priceBorder, borderBottom: priceBorder, borderRadius: "0 0 14px 14px" }}>
                <a href="#free-consultation" className="sim_bk_btn_orange" style={{ fontSize: 15, padding: "13px 34px" }}>Get Started</a>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 26 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid #d3d7ea", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#6b7290" }}>+</div>
          </div>
        </div>
      </section>

      {/* ============ ANNUAL SECRETARY SERVICE ============ */}
      <section style={{ padding: "30px 0 60px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <div style={{ background: "#ffffff", border: "1px solid #eef0f6", borderRadius: 16, padding: "40px 44px", boxShadow: "0 12px 40px rgba(17,20,77,0.06)" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: "#14143d" }}>Annual Secretary Service</h3>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#f15f2c", marginBottom: 28 }}>Rs. 15,000</div>
            <div className="sim_bk_sec_lists" style={{ display: "flex", gap: 56 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
                {secretaryLeft.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="16 9.5 11 14.5 8.5 12" />
                    </svg>
                    <span style={{ fontSize: 16, fontWeight: 500, color: "#2b3358" }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
                {secretaryRight.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f15f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="16 9.5 11 14.5 8.5 12" />
                    </svg>
                    <span style={{ fontSize: 16, fontWeight: 500, color: "#2b3358" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: 16, lineHeight: 1.7, color: "#6b7db0", maxWidth: 780, margin: "34px auto 18px" }}>We have helped register some of your favourite artists like Tehan Perera&apos;s Hot Chocolate, Lahiru Perera&apos;s Interperfume, Pettah Effect, Sri Gag, Chanux Bro, Ratta and industry frontrunners like Surge Global, Exchange Pub and Theewra.</p>
          <p style={{ textAlign: "center", fontSize: 15, fontWeight: 600, color: "#f15f2c", margin: 0 }}>*Terms and Conditions apply</p>
        </div>
      </section>

      {/* ============ ORANGE CTA ============ */}
      <section style={{ padding: "40px 0 80px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto", background: "#f15f2c", borderRadius: 18, padding: "60px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 16px", color: "#ffffff" }}>
            Registering your company
            <br />
            has never been easier
          </h2>
          <p style={{ fontSize: 16, color: "#ffe0d3", margin: "0 0 34px" }}>Get in touch with our team today</p>
          <a href="#free-consultation" className="sim_bk_btn_dark" style={{ fontSize: 15, padding: "15px 34px", background: "#12123f" }}>Get a Free Consultation</a>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section style={{ background: "#f0f1fb", padding: "80px 0 90px" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 50px", color: "#14143d" }}>
            People are talking, hear what they
            <br />
            have to say
          </h2>
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
            <a href="#" className="sim_bk_btn_dark" style={{ fontSize: 15, padding: "14px 40px", background: "#12123f" }}>View More</a>
          </div>
        </div>
      </section>

      {/* ============ BLOG / CURIOUS ============ */}
      <section style={{ padding: "80px 0 90px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 54 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.25, margin: "0 0 14px", color: "#14143d" }}>
              Curious about business
              <br />
              registrations?
            </h2>
            <p style={{ fontSize: 16, color: "#6b7db0", margin: 0 }}>Read our blog</p>
          </div>
          <div className="sim_bk_grid3">
            {blogs.map((b, i) => (
              <div key={i} className="sim_bk_hover_lift" style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 30px rgba(17,20,77,0.06)", background: "#ffffff" }}>
                <div style={{ height: 230, background: "repeating-linear-gradient(45deg, #2b3168, #2b3168 12px, #333a75 12px, #333a75 24px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center" }}>
                  <span style={{ fontSize: 23, fontWeight: 800, color: "#ffffff", lineHeight: 1.25 }}>{b.overlay}</span>
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

      {/* ============ FREE CONSULTATION FORM ============ */}
      <section id="free-consultation" style={{ position: "relative", padding: "80px 0 90px", background: "#f0f1fb", overflow: "hidden" }}>
        <div className="sim_bk_form_illus" style={{ position: "absolute", left: 40, bottom: 0, width: 200, height: 300, background: "repeating-linear-gradient(45deg, #e7e9f6, #e7e9f6 10px, #eef0fa 10px, #eef0fa 20px)", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ mail ]</span>
        </div>
        <div className="sim_bk_form_illus" style={{ position: "absolute", right: 40, bottom: 0, width: 200, height: 300, background: "repeating-linear-gradient(45deg, #e7e9f6, #e7e9f6 10px, #eef0fa 10px, #eef0fa 20px)", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4" }}>[ mailbox ]</span>
        </div>
        <div style={{ textAlign: "center", marginBottom: 34, position: "relative", zIndex: 2 }}>
          <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#14143d" }}>Free consultation</h2>
          <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
        </div>
        <ServiceForm centeredConsent />
      </section>

      <Footer />
      <ChatWidget />
    </>
  );
}
