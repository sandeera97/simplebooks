import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import FaqAccordion from "@/components/business-registration/FaqAccordion";
import GetStartedForm from "@/components/business-registration/GetStartedForm";
import {
  whyPoints, nameCheckPoints, trackingPoints, docPoints, formsPoints, steps,
  infoPoints, includedPoints, includedCards, basicFeatures, premiumFeatures,
  proFeatures, exclusivePerks, dialogPerks, secretaryItems, partners, reviews,
} from "@/components/business-registration/content";

export const metadata: Metadata = {
  title: "Register Your Business in Sri Lanka — 100% Online | Simplebooks",
  description:
    "Register your company in Sri Lanka 100% online with Simplebooks. Name approval to certification, real-time tracking, digital signing. Trusted by 8,000+ businesses.",
};

/* ---------- small helpers ---------- */
function Check({ stroke = "#f15f2c", size = 12 }: { stroke?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CheckList({ items, dark = false }: { items: { title: string; desc: string }[]; dark?: boolean }) {
  return (
    <div className="sim_bk_check_list">
      {items.map((p, i) => (
        <div key={i} className="sim_bk_check_item">
          <div className={dark ? "sim_bk_check_ico_solid" : "sim_bk_check_ico"}>
            <Check stroke={dark ? "#fff" : "#f15f2c"} size={dark ? 13 : 12} />
          </div>
          <div>
            <div className={`sim_bk_check_title ${dark ? "sim_bk_check_title_white" : ""}`}>{p.title}</div>
            <div className={`sim_bk_check_desc ${dark ? "sim_bk_check_desc_white" : ""}`}>{p.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="sim_bk_bullet_list">
      {items.map((p, i) => (
        <div key={i} className="sim_bk_bullet_item">
          <span className="sim_bk_bullet_dot" />
          <span className="sim_bk_bullet_text">{p}</span>
        </div>
      ))}
    </div>
  );
}

function PhImg({ label, light = true, style }: { label: string; light?: boolean; style?: React.CSSProperties }) {
  const bg = light
    ? "repeating-linear-gradient(45deg, #f4f5fb, #f4f5fb 10px, #eceefa 10px, #eceefa 20px)"
    : "repeating-linear-gradient(45deg, #1a1f55, #1a1f55 10px, #232a66 10px, #232a66 20px)";
  return (
    <div className="sim_bk_ph_img" style={{ background: bg, ...style }}>
      <span className="sim_bk_ph_label" style={{ color: light ? "#9aa0b4" : "#7e84b5" }}>{label}</span>
    </div>
  );
}

const orangeBtn: React.CSSProperties = { padding: "14px 34px", fontSize: 15 };

function FeatIcon({ icon, stroke }: { icon: string; stroke: string }) {
  const p = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "file": return (<svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>);
    case "book": return (<svg {...p} width={26} height={26}><path d="M4 2h16v20l-3-2-2 2-2-2-2 2-2-2-3 2z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" /></svg>);
    case "users": return (<svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
    case "card": return (<svg {...p}><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>);
    case "globe": return (<svg {...p}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>);
    case "loku": return (<div style={{ width: 34, height: 34, borderRadius: 6, background: "#f5d020", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#11144d" }}>LOKU</div>);
    default: return null;
  }
}

export default function BusinessRegistrationPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="sim_bk_split" style={{ paddingTop: 70, paddingBottom: 80 }}>
          <div className="sim_bk_split_text">
            <h1 className="sim_bk_h1">Register Your Business in Sri Lanka — 100% Online</h1>
            <p className="sim_bk_lead">Launch your business with zero hassle. Simplebooks handles your entire company registration — from name approval to certification — so you can focus on what matters.</p>
            <p className="sim_bk_lead">Our <strong className="sim_bk_accent">online platform</strong> and <strong className="sim_bk_accent">expert team</strong> guide you through every step. No paperwork. No queues. No confusion.</p>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#11144d", margin: "0 0 32px" }}>👉 Simple, guided registration — from start to finish.</p>
            <a href="#get-started" className="sim_bk_btn_orange" style={{ padding: "15px 38px", fontSize: 16, boxShadow: "0 10px 24px rgba(241,95,44,0.28)" }}>Register Your Business With us</a>
          </div>
          <div className="sim_bk_split_img">
            <PhImg label="[ person + dashboard ]" style={{ width: 460, height: 460 }} />
          </div>
        </section>

        {/* WHY CHOOSE (dark) */}
        <section className="sim_bk_dark_bg">
          <div className="sim_bk_split">
            <div className="sim_bk_split_text">
              <h2 className="sim_bk_h2 sim_bk_h2_white">Why Choose Simplebooks for Business Registration?</h2>
              <p className="sim_bk_lead sim_bk_lead_white">Business registration doesn&apos;t have to be complicated or time-consuming. We combine technology + expert review so you can register your company the right way — the first time.</p>
              <BulletList items={whyPoints} />
              <p className="sim_bk_lead sim_bk_lead_white" style={{ marginBottom: 30 }}>You stay informed at every stage — no chasing updates or guessing what comes next.</p>
              <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Contact Us</a>
            </div>
            <div className="sim_bk_split_img">
              <PhImg label="[ person photo ]" light={false} style={{ width: 420, height: 480 }} />
            </div>
          </div>
        </section>

        {/* INSTANT NAME CHECK (white) */}
        <section className="sim_bk_split" style={{ paddingTop: 90, paddingBottom: 90 }}>
          <div className="sim_bk_split_img" style={{ justifyContent: "flex-start" }}>
            <PhImg label="[ name-check dashboard ]" style={{ width: "100%", height: 380 }} />
          </div>
          <div className="sim_bk_split_text" style={{ maxWidth: 520 }}>
            <h2 className="sim_bk_h2">Instant Company Name Check</h2>
            <p className="sim_bk_lead" style={{ marginBottom: 28 }}>Check if your company name is available in seconds.</p>
            <CheckList items={nameCheckPoints} />
            <div className="sim_bk_namecheck_row">
              <input type="text" placeholder="Enter Company Name" className="sim_bk_namecheck_input" />
              <button className="sim_bk_namecheck_btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                Check Availability
              </button>
            </div>
          </div>
        </section>

        {/* REAL-TIME TRACKING (dark) */}
        <section className="sim_bk_dark_bg">
          <div className="sim_bk_split">
            <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
              <h2 className="sim_bk_h2 sim_bk_h2_white" style={{ marginBottom: 30 }}>Real-time progress tracking</h2>
              <CheckList items={trackingPoints} dark />
              <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Contact Us</a>
            </div>
            <div className="sim_bk_split_img">
              <PhImg label="[ progress dashboard ]" light={false} style={{ width: 480, height: 360 }} />
            </div>
          </div>
        </section>

        {/* DIGITAL DOC SIGNING (white) */}
        <section className="sim_bk_split" style={{ paddingTop: 90, paddingBottom: 90 }}>
          <div className="sim_bk_split_img" style={{ justifyContent: "flex-start" }}>
            <PhImg label="[ documents dashboard ]" style={{ width: "100%", height: 380 }} />
          </div>
          <div className="sim_bk_split_text" style={{ maxWidth: 520 }}>
            <h2 className="sim_bk_h2">Digital Document Signing &amp; Upload</h2>
            <p className="sim_bk_lead" style={{ marginBottom: 28 }}>Upload and sign your documents online — fast, secure, and hassle-free.</p>
            <CheckList items={docPoints} />
            <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Register with the Dashboard</a>
          </div>
        </section>

        {/* SIMPLE GUIDED FORMS (dark) */}
        <section className="sim_bk_dark_bg">
          <div className="sim_bk_split">
            <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
              <h2 className="sim_bk_h2 sim_bk_h2_white">Simple &amp; Guided Online Forms.</h2>
              <p className="sim_bk_lead sim_bk_lead_white" style={{ marginBottom: 30 }}>Fill in your company details step by step with clear guidance at every stage.</p>
              <CheckList items={formsPoints} dark />
              <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Register with the Dashboard</a>
            </div>
            <div className="sim_bk_split_img">
              <PhImg label="[ forms dashboard ]" light={false} style={{ width: 480, height: 380 }} />
            </div>
          </div>
        </section>

        {/* REGISTER YOUR COMPANY ONLINE (white) */}
        <section className="sim_bk_section">
          <div className="sim_bk_section_inner">
            <div className="sim_bk_section_head">
              <h2>Register Your Company Online</h2>
              <p>Want to create a legal business entity without the hassle of commuting to Colombo and back? Our dashboard allows you to reserve your company name and submit your documents online, to register your private company without having to visit the ROC repeatedly.</p>
              <p>Do you have any questions? You can always consult your team of experts at any time!</p>
              <p style={{ fontWeight: 700, color: "#f15f2c" }}>Trusted by 8,000+ businesses in Sri Lanka with a 4.95 Star Rating.</p>
            </div>
            <div className="sim_bk_split" style={{ alignItems: "flex-start", padding: 0 }}>
              <div className="sim_bk_split_text" style={{ flex: 1.2, maxWidth: "none" }}>
                <h3 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 28px", color: "#11144d" }}>How registration works through the dashboard?</h3>
                <div className="sim_bk_steps">
                  {steps.map((s) => (
                    <div key={s.n} className="sim_bk_step_card">
                      <div className="sim_bk_step_num">{s.n}</div>
                      <div>
                        <div className="sim_bk_step_title">{s.title}</div>
                        <div className="sim_bk_step_desc">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sim_bk_split_img" style={{ justifyContent: "center" }}>
                <div className="sim_bk_ph_img" style={{ width: 360, height: 460, background: "repeating-linear-gradient(45deg, #1d2a86, #1d2a86 12px, #25309a 12px, #25309a 24px)", borderRadius: 18, flexDirection: "column", justifyContent: "flex-end", paddingBottom: 36 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 12, color: "#aeb6ff", marginBottom: 14 }}>[ video thumbnail ]</span>
                  <span style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Assured compliance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMATION WE'LL NEED (dark) */}
        <section className="sim_bk_dark_bg">
          <div className="sim_bk_split">
            <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
              <h2 className="sim_bk_h2 sim_bk_h2_white">Information We&apos;ll Need From You</h2>
              <p className="sim_bk_lead sim_bk_lead_white" style={{ marginBottom: 26 }}>To ensure a smooth registration, we&apos;ll request:</p>
              <BulletList items={infoPoints} />
              <p className="sim_bk_lead sim_bk_lead_white" style={{ marginBottom: 30 }}>Don&apos;t worry — we clearly guide you on what to submit and review everything before filing.</p>
              <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Contact Us</a>
            </div>
            <div className="sim_bk_split_img">
              <PhImg label="[ person photo ]" light={false} style={{ width: 420, height: 480 }} />
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED (white) */}
        <section className="sim_bk_split" style={{ paddingTop: 90, paddingBottom: 90 }}>
          <div className="sim_bk_split_img" style={{ justifyContent: "flex-start" }}>
            <PhImg label="[ person photo ]" style={{ width: "100%", height: 480 }} />
          </div>
          <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
            <h2 className="sim_bk_h2">What&apos;s Included in the Service</h2>
            <p className="sim_bk_lead" style={{ marginBottom: 30 }}>When you register your business with Simplebooks, you get more than just paperwork filing.</p>
            <CheckList items={includedPoints} />
            <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Get a Free Consultation</a>
          </div>
        </section>

        {/* MORE THAN JUST REGISTRATION (cards) */}
        <section className="sim_bk_section" style={{ background: "#fcfcff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="sim_bk_section_head" style={{ maxWidth: 720 }}>
              <h2 style={{ fontSize: 38 }}>More than just registration — all included</h2>
              <p>We also provide secretarial services for those who register with us, covering everything you need from invoicing to continuous deadline tracking.</p>
            </div>
            <div className="sim_bk_included_grid">
              {includedCards.map((c, i) => (
                <div key={i} className="sim_bk_feat_card">
                  <div className="sim_bk_feat_icon" style={{ background: c.iconBg }}>
                    <span className="sim_bk_feat_dot" style={{ background: c.dot }} />
                    <FeatIcon icon={c.icon} stroke={c.stroke} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="sim_bk_section" style={{ background: "#edeefb", paddingTop: 80, paddingBottom: 90 }}>
          <div className="sim_bk_section_inner">
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 14px", color: "#11144d" }}>Pricing Plans</h2>
              <p style={{ fontSize: 16, color: "#8a8fa6", margin: 0 }}>Choose the best plan for your business registration</p>
            </div>

            <div className="sim_bk_price_grid">
              {/* Basic */}
              <div className="sim_bk_price_card">
                <div className="sim_bk_price_name" style={{ color: "#11144d" }}>Basic</div>
                <div style={{ marginBottom: 22 }}><span className="sim_bk_price_amount" style={{ color: "#11144d" }}>47,410</span> <span style={{ fontSize: 15, color: "#8a8fa6" }}>LKR</span></div>
                <div className="sim_bk_price_list" style={{ borderTop: "1px solid #eef0f6" }}>
                  {basicFeatures.map((f, i) => (
                    <div key={i} className="sim_bk_price_row" style={{ alignItems: "center" }}>
                      <Check stroke="#2f6bef" size={16} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="sim_bk_price_koko" style={{ borderTop: "1px solid #eef0f6", color: "#8a8fa6" }}>
                  *Pay in installments via <span className="sim_bk_koko_word">KOKO</span>
                </div>
              </div>

              {/* Premium */}
              <div className="sim_bk_price_card_dark">
                <div className="sim_bk_price_badge">★ MOST POPULAR</div>
                <div className="sim_bk_price_name" style={{ color: "#fff" }}>Premium</div>
                <div style={{ marginBottom: 22 }}><span className="sim_bk_price_amount" style={{ color: "#f15f2c" }}>57,410</span> <span style={{ fontSize: 15, color: "#b9bdd6" }}>LKR</span></div>
                <div className="sim_bk_price_list" style={{ borderTop: "1px solid #2a3066" }}>
                  {premiumFeatures.map((f, i) => (
                    <div key={i} className="sim_bk_price_row">
                      <span style={{ marginTop: 3, flexShrink: 0 }}><Check stroke="#f15f2c" size={16} /></span>
                      <span style={{ color: "#e5e7f2" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="sim_bk_price_koko" style={{ borderTop: "1px solid #2a3066", color: "#b9bdd6" }}>
                  *Pay in installments via <span style={{ background: "#fff", borderRadius: 6, padding: "4px 8px", fontWeight: 800, color: "#e0359a" }}>KOKO</span>
                </div>
              </div>

              {/* Premium Pro */}
              <div className="sim_bk_price_card">
                <div className="sim_bk_price_name" style={{ color: "#11144d" }}>Premium Pro</div>
                <div style={{ marginBottom: 22 }}><span className="sim_bk_price_amount" style={{ color: "#11144d" }}>62,410</span> <span style={{ fontSize: 15, color: "#8a8fa6" }}>LKR</span></div>
                <div className="sim_bk_price_list" style={{ borderTop: "1px solid #eef0f6" }}>
                  {proFeatures.map((f, i) => (
                    <div key={i} className="sim_bk_price_row" style={{ alignItems: "center" }}>
                      <Check stroke="#2f6bef" size={16} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="sim_bk_price_koko" style={{ borderTop: "1px solid #eef0f6", color: "#8a8fa6" }}>
                  *Pay in installments via <span className="sim_bk_koko_word">KOKO</span>
                </div>
              </div>
            </div>

            {/* Perks row */}
            <div className="sim_bk_perks_grid">
              <div className="sim_bk_perk_card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ color: "#f5b921", fontSize: 20 }}>★</span>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>Exclusive Perks</h3>
                </div>
                <p style={{ fontSize: 13, color: "#b9bdd6", margin: "0 0 24px" }}>Included in Premium &amp; Premium Pro</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {exclusivePerks.map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#3a2f1a", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                        <Check stroke="#f5b921" size={12} />
                      </div>
                      <span style={{ fontSize: 15, color: "#e5e7f2" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sim_bk_perk_card">
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                  <span style={{ background: "#fff", borderRadius: 6, padding: "3px 7px", fontSize: 11, fontWeight: 800, color: "#e30613" }}>Dialog</span>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0 }}>Dialog Exclusive Perks</h3>
                  <span style={{ background: "#e30613", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6 }}>PARTNER</span>
                </div>
                <p style={{ fontSize: 13, color: "#b9bdd6", margin: "0 0 24px" }}>Exclusive Business services with Dialog Enterprise</p>
                <div className="sim_bk_dialog_grid">
                  {dialogPerks.map((d, i) => (
                    <div key={i} className="sim_bk_dialog_card">
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{d.title}</div>
                      <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "#aeb3d6" }}>{d.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", fontSize: 26, color: "#11144d", margin: "0 0 32px" }}>+</div>

            {/* Annual secretary */}
            <div className="sim_bk_secretary">
              <div style={{ fontSize: 18, fontWeight: 700, color: "#11144d" }}>Annual Secretary Service</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#f15f2c", margin: "6px 0 26px" }}>Rs. 15,000</div>
              <div className="sim_bk_sec_cols">
                {secretaryItems.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Check stroke="#f15f2c" size={16} />
                    <span style={{ fontSize: 15, color: "#2b3358" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ textAlign: "center", fontSize: 15, lineHeight: 1.6, color: "#6b7290", maxWidth: 760, margin: "0 auto 14px" }}>You will always need a company secretary to register with the ROC. As a registered company secretary, Simplebooks will act as your Secretary.</p>
            <p style={{ textAlign: "center", fontSize: 14, fontStyle: "italic", color: "#f15f2c", margin: 0 }}>*An additional fee of Rs 2,900 will be incurred by the government to add extra directors.</p>
          </div>
        </section>

        {/* KOKO PAYMENT (white) */}
        <section className="sim_bk_split" style={{ gap: 60 }}>
          <div className="sim_bk_split_img" style={{ justifyContent: "center" }}>
            <div className="sim_bk_koko_card">
              <div style={{ width: 180, height: 180, margin: "0 auto 28px", background: "repeating-linear-gradient(45deg, #aac3ec, #aac3ec 10px, #b6ccef 10px, #b6ccef 20px)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#5c6f96" }}>[ KOKO illustration ]</span>
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#11144d" }}>Pay with KOKO</div>
            </div>
          </div>
          <div className="sim_bk_split_text" style={{ maxWidth: 540 }}>
            <h2 className="sim_bk_h2">Flexible KOKO Payment Plans for a Confident Start</h2>
            <p className="sim_bk_lead" style={{ lineHeight: 1.7, marginBottom: 32 }}>We offer flexible KOKO payment plans, allowing you to spread your cost into easy monthly installments. Our experienced team carefully reviews every document to ensure full compliance, so you can move forward with confidence.</p>
            <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Contact Us</a>
          </div>
        </section>

        {/* GOOGLE RATING BAR */}
        <section className="sim_bk_dark_bg" style={{ padding: "28px 56px" }}>
          <div className="sim_bk_rating_bar">
            <span style={{ fontSize: 26, fontWeight: 800 }}>
              <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span><span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span><span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
            </span>
            <span>4.9 Rating</span>
            <span style={{ color: "#f5b921", letterSpacing: 2 }}>★★★★★</span>
            <span style={{ color: "#f15f2c", fontWeight: 600 }}>(800+ customer reviews)</span>
          </div>
        </section>

        {/* OUR PARTNERS */}
        <section className="sim_bk_section" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 12px", color: "#11144d" }}>Our Partners</h2>
          <p style={{ fontSize: 16, color: "#8a8fa6", margin: "0 0 48px" }}>Working together to empower businesses across Sri Lanka.</p>
          <div className="sim_bk_partners_row">
            {partners.map((p, i) => (
              <div key={i} style={{ width: 150 }}>
                <div className="sim_bk_partner_card">
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "#9aa0b4", textAlign: "center", padding: "0 8px" }}>{p.logo}</span>
                </div>
                <div style={{ fontSize: 15, color: "#5a607a" }}>{p.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR REVIEWS (dark) */}
        <section className="sim_bk_dark_bg sim_bk_section" style={{ textAlign: "center", paddingTop: 80, paddingBottom: 90 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 12px", color: "#fff" }}>Our Reviews</h2>
          <p style={{ fontSize: 16, color: "#b9bdd6", margin: "0 0 50px" }}>Testimonials from our customers</p>
          <div className="sim_bk_reviews_grid">
            {reviews.map((r, i) => (
              <div key={i} className="sim_bk_review_card">
                <div className="sim_bk_review_avatar">
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: "#9aa0b4" }}>photo</span>
                </div>
                <div style={{ fontSize: 19, fontWeight: 800, color: "#11144d", marginBottom: 14 }}>{r.name}</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#6b7290", margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>
          <a href="#get-started" className="sim_bk_btn_orange" style={orangeBtn}>Get Free Consultation</a>
        </section>

        {/* GET STARTED FORM */}
        <section id="get-started" className="sim_bk_section" style={{ paddingTop: 80, paddingBottom: 90 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 10px", color: "#11144d" }}>Get Started</h2>
            <p style={{ fontSize: 14, color: "#f0395b", margin: 0 }}>&quot;*&quot; indicates required fields</p>
          </div>
          <GetStartedForm />
        </section>

        {/* FAQ (dark) */}
        <section className="sim_bk_dark_bg sim_bk_section" style={{ paddingTop: 80, paddingBottom: 90 }}>
          <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 800, margin: "0 0 50px", color: "#fff" }}>Frequently Asked Questions</h2>
          <FaqAccordion />
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
