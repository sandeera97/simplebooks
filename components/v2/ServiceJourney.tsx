import Link from "next/link";
import "./journey.css";

/**
 * "What happens after business registration?": the four services a new
 * company moves through, as a vertical timeline (from the website audit's
 * mockup). Server-rendered and static; the rows fade in with the site's
 * usual .v2_reveal.
 *
 * Step 1's time matches the registration timeline used everywhere else on
 * the site: 5–6 working weeks, subject to the Registrar.
 */
type Icon = "doc" | "chart" | "shield";

const STEPS: {
  title: string;
  summary: string;
  detail: string;
  items: string[];
  time: string;
  icon: Icon;
}[] = [
  {
    title: "Business registration",
    summary: "Start your company with expert guidance from name reservation to incorporation.",
    detail: "We guide you through the entire business registration process, from name reservation to incorporation.",
    items: ["Name reservation", "Company incorporation", "Registration guidance"],
    time: "5–6 working weeks",
    icon: "doc",
  },
  {
    title: "Tax support",
    summary: "Get your company tax-ready with the right registrations and guidance.",
    detail: "We help you complete the necessary tax registrations and set up your tax profile for compliance.",
    items: ["TIN registration", "Tax profile setup", "Basic tax guidance"],
    time: "1–3 working days",
    icon: "doc",
  },
  {
    title: "Bookkeeping and payroll",
    summary: "Set up your financial operations for smooth day-to-day business management.",
    detail: "Get your business operations running with reliable bookkeeping and payroll support.",
    items: ["Monthly bookkeeping", "Payroll setup", "Record-keeping support"],
    time: "Launch-ready",
    icon: "chart",
  },
  {
    title: "Legal services",
    summary: "Stay compliant with ongoing legal and statutory support as your business grows.",
    detail: "We provide ongoing legal support to keep your business compliant and ready for growth.",
    items: ["Company secretary service", "Annual return support", "Statutory compliance support"],
    time: "Ongoing",
    icon: "shield",
  },
];

function StepIcon({ name }: { name: Icon }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M6 20V13" />
        <path d="M12 20V8" />
        <path d="M18 20V4" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Clock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

/* Section backgrounds alternate down each page; pick the one that differs
   from the sections either side. */
const TONE = { plain: "v2_sec v2_sec_pad", white: "v2_band_white", band: "v2_band" } as const;

export default function ServiceJourney({ tone = "plain" }: { tone?: keyof typeof TONE }) {
  return (
    <section className={`${TONE[tone]} sj`} aria-labelledby="sj-title">
      <div className="v2_wrap">
        <div className="sj_head">
          <p className="sj_badge v2_reveal">
            <span className="sj_badge_tick" aria-hidden="true">
              <Check />
            </span>
            Your Simplebooks service journey
          </p>
          <h2 className="v2_h2 v2_reveal" id="sj-title">
            What happens after business registration?
          </h2>
          <p className="v2_lead v2_reveal">
            Simplebooks helps you move from incorporation to launch, step by step.
          </p>
        </div>

        <ol className="sj_steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="sj_step v2_reveal">
              <div className="sj_side">
                <span className="sj_label">Step {i + 1}</span>
                <h3 className="sj_title">{s.title}</h3>
                <p className="sj_summary">{s.summary}</p>
              </div>
              <span className="sj_node" aria-hidden="true" />
              <div className="sj_card">
                <span className="sj_icon">
                  <StepIcon name={s.icon} />
                </span>
                <div>
                  <p className="sj_detail">{s.detail}</p>
                  <ul className="sj_items">
                    {s.items.map((it) => (
                      <li key={it}>
                        <span className="sj_check">
                          <Check />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p className="sj_time">
                    <Clock />
                    {s.time}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="sj_cta v2_reveal">
          <div>
            <p className="sj_cta_k">Ready for what&rsquo;s next?</p>
            <h3 className="sj_cta_h">Let&rsquo;s get your business up and running.</h3>
            <p className="sj_cta_p">
              Talk to our team and get personalised guidance on tax, banking, compliance and more.
            </p>
          </div>
          <div className="sj_cta_btns">
            {/* Two different places: the form on this page, or a WhatsApp chat. */}
            <Link className="v2_btn v2_btn_primary" href="#consultation">
              Book a free consultation <span className="v2_arrow">→</span>
            </Link>
            <a className="v2_btn v2_btn_ghost" href="https://wa.me/94117555878">
              Talk to our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
