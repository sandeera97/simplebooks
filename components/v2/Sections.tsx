import Link from "next/link";

/* ---------------- Banking partners ---------------- */
export function BankStrip() {
  return (
    <section className="v2_banks">
      <div className="v2_wrap v2_banks_in">
        <p className="v2_banks_label">Banking partners</p>
        <div className="v2_banks_logos">
          <img src="/images/v2/bank-seylan.png" alt="Seylan Bank" width={800} height={450} loading="lazy" />
          <img src="/images/v2/bank-sampath.png" alt="Sampath Bank" width={1987} height={1118} loading="lazy" />
        </div>
        <p className="v2_banks_note">Corporate accounts opened in days, not weeks.</p>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
const STATS = [
  { n: "4,500", plus: true, l: "Businesses registered" },
  { n: "12", plus: true, l: "Years of practice" },
  { n: "3", plus: false, l: "Countries, local offices" },
  { n: "4.9", star: true, l: "Average customer rating" },
];

export function Stats() {
  return (
    <section className="v2_sec v2_stats">
      <div
        className="v2_blob v2_blob_a"
        style={{ width: 620, height: 620, top: -280, right: 80 }}
      />
      <div className="v2_wrap v2_stats_in">
        {STATS.map((s) => (
          <div key={s.l} className="v2_reveal">
            <p className="v2_stat_n">
              {s.n}
              {s.plus && <span>+</span>}
              {s.star && <span>★</span>}
            </p>
            <p className="v2_stat_l">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- What we do ---------------- */
const SERVICES = [
  {
    n: "01",
    t: "Business setup",
    d: "We guide you through registering your business from A–Z. We've set up 4,500 companies covering every industry imaginable.",
    tags: ["Private Ltd", "Sole proprietor", "Name approval"],
    href: "/srilanka/services/register-a-company",
  },
  {
    n: "02",
    t: "Online bookkeeping",
    d: "Your own finance team looking after the books, while you focus on capturing invoices, receipts and bills. It's simple.",
    tags: ["Monthly books", "Reconciliations", "Management reports"],
    href: "/srilanka/services/accounting-services",
  },
  {
    n: "03",
    t: "Legal services",
    d: "Protect your trademarks and intellectual property, or get your contracts in order — with someone who specialises in it.",
    tags: ["Contracts", "Trademarks", "IP"],
    href: "/srilanka/legal",
  },
  {
    n: "04",
    t: "Payroll management",
    d: "As your team grows, so does the paperwork. We make sure the busy work is handled, so you can grow and train your team.",
    tags: ["EPF / ETF", "Payslips", "Bonuses"],
    href: "/srilanka/services/payroll-managment",
  },
  {
    n: "05",
    t: "Dedicated support",
    d: "Most of our new customers are referred by old ones. You'll always have more than one way to get in touch and stay in touch.",
    tags: ["Sinhala", "English", "Tamil", "WhatsApp"],
    href: "/srilanka/contact",
  },
  {
    n: "06",
    t: "Technology platform",
    d: "We're not just here to do the paperwork. We build the tools, apps and capabilities that make running your business easier.",
    tags: ["Dashboard", "E-signing", "Deadline alerts"],
    href: "/srilanka/dashboard/accounting-tool",
    dark: true,
  },
];

export function WhatWeDo() {
  return (
    <section className="v2_sec v2_sec_pad">
      <div className="v2_wrap">
        <div className="v2_sec_head">
          <div>
            <p className="v2_eyebrow v2_reveal">What we do</p>
            <h2 className="v2_h2 v2_reveal">
              Everything your business needs, under one roof<span className="v2_dot">.</span>
            </h2>
          </div>
          <p className="v2_lead v2_reveal">
            One team of accountants, company secretaries and lawyers — so you&rsquo;re never handed
            off to a stranger halfway through.
          </p>
        </div>

        <div className="v2_cards">
          {SERVICES.map((s) => (
            <Link
              key={s.n}
              href={s.href}
              className={`v2_card v2_reveal${s.dark ? " v2_card_dark" : ""}`}
            >
              <div className="v2_card_top">
                <span className="v2_card_num">{s.n}</span>
                <span className="v2_card_go">→</span>
              </div>
              <h3 className="v2_h3">{s.t}</h3>
              <p className="v2_body">{s.d}</p>
              <div className="v2_tags">
                {s.tags.map((t) => (
                  <span key={t} className="v2_tag">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
const STEPS = [
  {
    n: 1,
    t: "Tell us about the business",
    d: "A 15-minute call. Name, shareholders, what you actually do. We'll flag anything that needs a licence.",
  },
  {
    n: 2,
    t: "We prepare and file",
    d: "Name approval, Form 1, articles, secretary appointment — drafted, signed digitally and filed by our team.",
  },
  {
    n: 3,
    t: "You trade, we keep you compliant",
    d: "Certificates land in your dashboard, the bank account opens, and bookkeeping, payroll and tax carry on from there.",
  },
];

export function HowItWorks() {
  return (
    <section className="v2_how" id="how">
      <div className="v2_wrap">
        <div className="v2_sec_head_center">
          <p className="v2_eyebrow v2_reveal">How it works</p>
          <h2 className="v2_h2 v2_reveal">
            Registered in three working days<span className="v2_dot">.</span>
          </h2>
        </div>
        <div className="v2_steps">
          {STEPS.map((s) => (
            <article key={s.n} className="v2_step v2_reveal">
              <div className="v2_step_top">
                <span className="v2_step_n">{s.n}</span>
                <span className="v2_step_line" />
              </div>
              <h3>{s.t}</h3>
              <p className="v2_body">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Simplebooks ---------------- */
const ALONE = [
  "Chasing name approval and form corrections yourself",
  "Documents scattered across email, WhatsApp and drawers",
  "Deadlines discovered after the penalty notice",
  "A different person on the phone every single time",
];
const WITH_US = [
  "Name approval to incorporation handled end to end",
  "Every certificate and filing in one searchable vault",
  "A compliance calendar that chases you first",
  "One consultant who already knows your file",
];

export function WhySimplebooks() {
  return (
    <section className="v2_sec v2_sec_pad" id="why">
      <div className="v2_wrap">
        <div className="v2_why_in">
          <div>
            <p className="v2_eyebrow v2_reveal">Why simplebooks</p>
            <h2 className="v2_h2 v2_reveal" style={{ marginTop: 16 }}>
              The difference between filing it and forgetting it<span className="v2_dot">.</span>
            </h2>
            <p className="v2_lead v2_reveal" style={{ margin: "24px 0 30px", maxWidth: 520 }}>
              Registration is the easy part. What breaks most businesses is everything after it —
              the returns, the renewals, the resolutions nobody reminded you about. We hold all of
              it in one place, with one team.
            </p>
            <Link className="v2_btn v2_btn_navy v2_reveal" href="/srilanka/contact">
              Talk to a consultant <span className="v2_arrow">→</span>
            </Link>
          </div>

          <div className="v2_why_media v2_reveal">
            {/* The redesign leaves this slot for a team photo. */}
            <div className="v2_why_ph">Photo of the team at work</div>
            <div className="v2_why_badge">
              <p className="v2_float_k">Compliance calendar</p>
              <p className="v2_float_v">0 missed deadlines this year</p>
            </div>
          </div>
        </div>

        <div className="v2_compare">
          <div className="v2_col v2_col_bad v2_reveal">
            <p className="v2_col_h">Doing it alone</p>
            <ul>
              {ALONE.map((t) => (
                <li key={t}>
                  <span className="v2_mark v2_mark_bad">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="v2_col v2_col_good v2_reveal">
            <p className="v2_col_h">With simplebooks</p>
            <ul>
              {WITH_US.map((t) => (
                <li key={t}>
                  <span className="v2_mark v2_mark_good">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ marquee ---------------- */
const QUESTION_ROWS = [
  [
    "How long does registration take?",
    "What's the minimum number of directors?",
    "Can a foreigner own 100% of a company?",
    "Do I need a company secretary?",
    "How does ROC name approval work?",
  ],
  [
    "When is my annual return due?",
    "Do I need to register for VAT?",
    "What are the EPF and ETF rates?",
    "Can I convert my sole proprietorship?",
    "How do I issue new shares?",
  ],
  [
    "What does monthly bookkeeping cost?",
    "How do I open a corporate bank account?",
    "Can you register my trademark?",
    "What happens if I file late?",
    "Can you set up a Bangladeshi entity?",
  ],
];

export function FaqMarquee() {
  return (
    <section className="v2_faq">
      <div className="v2_wrap">
        <div className="v2_sec_head_center">
          <p className="v2_eyebrow v2_reveal">Your questions, answered</p>
          <h2 className="v2_h2 v2_reveal">
            The questions we answer every day<span className="v2_dot">.</span>
          </h2>
        </div>
      </div>

      {QUESTION_ROWS.map((row, i) => (
        <div key={i} className="v2_marquee v2_marquee_row" aria-hidden={i > 0}>
          {/* duplicated once so the -50% translate loops seamlessly */}
          {[0, 1].map((copy) => (
            <div key={copy} className="v2_marquee_track">
              {row.map((q) => (
                <span key={q} className="v2_q">
                  {q}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}

      <div className="v2_wrap v2_faq_cta">
        <Link className="v2_btn v2_btn_navy" href="/srilanka/faq">
          Ask us yours <span className="v2_arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function FooterV2() {
  return (
    <footer className="v2_foot">
      <div className="v2_wrap">
        <div className="v2_news">
          <div>
            <h2>Stay informed.</h2>
            <p>
              Registrar changes, tax deadlines and practical guides — once a month, nothing else.
            </p>
          </div>
          <form className="v2_news_form" action="/srilanka/contact" method="get">
            <input type="email" name="email" placeholder="you@company.lk" aria-label="Your email" />
            <button type="submit" className="v2_btn v2_btn_primary">
              Subscribe
            </button>
          </form>
        </div>

        <div className="v2_foot_cols">
          <div>
            <span className="v2_logo" style={{ color: "#fff" }}>simplebooks</span>
            <p className="v2_foot_about">
              Simplebooks helps small business owners and entrepreneurs grow through financial
              consulting, registrations and legal services. Backed by local knowledge from our
              offices in Sri Lanka, Bangladesh and India.
            </p>
            <div className="v2_socials">
              <a href="https://facebook.com/simplebooks" aria-label="Facebook">f</a>
              <a href="https://instagram.com/simplebooks" aria-label="Instagram">IG</a>
              <a href="https://youtube.com/@simplebooks" aria-label="YouTube">▶</a>
              <a href="https://wa.me/94117555878" aria-label="WhatsApp">WA</a>
            </div>
          </div>

          <div>
            <p className="v2_foot_h">Services</p>
            <ul>
              <li><Link href="/srilanka/services/register-a-company">Company registration</Link></li>
              <li><Link href="/srilanka/services/accounting-services">Accounting services</Link></li>
              <li><Link href="/srilanka/services/payroll-managment">Payroll management</Link></li>
              <li><Link href="/srilanka/services/company-secretary">Company secretary</Link></li>
              <li><Link href="/srilanka/legal">Legal &amp; trademarks</Link></li>
            </ul>
          </div>

          <div>
            <p className="v2_foot_h">Company</p>
            <ul>
              <li><Link href="/srilanka/dashboard/accounting-tool">Platform</Link></li>
              <li><a href="#how">How it works</a></li>
              <li><Link href="/srilanka/testimonials">Customer stories</Link></li>
              <li><a href="#why">Why simplebooks</a></li>
              <li><Link href="/srilanka/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="v2_foot_h">Offices</p>
            <p className="v2_office">
              Simplebooks (Pvt) Ltd<br />
              Millennium Tower, 2nd Floor,<br />
              345 Galle Rd, Colombo 00300,<br />
              Sri Lanka · 0117 555 878
            </p>
            <p className="v2_office">
              REGUS – Crystal Palace, House 22,<br />
              Gulshan Ave, Gulshan-1,<br />
              Dhaka 1212, Bangladesh<br />
              +880 1312 329255
            </p>
          </div>
        </div>

        <div className="v2_foot_bot">
          <p>© {new Date().getFullYear()} Simplebooks (Pvt) Ltd. All rights reserved.</p>
          <nav>
            <a href="https://simplebooks.com/privacy-policy/">Privacy policy</a>
            <Link href="/srilanka/terms-conditions">Terms &amp; conditions</Link>
            <a href="https://simplebooks.com/srilanka/no-claim-certification/">No claim certification</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
