import Link from "next/link";
import styles from "./registration-pricing.module.css";

const PLANS = [
  { name: "Basic", price: "49,940", features: ["Name Approval", "Articles of Association", "Form 1, Form 18, Form 19", "Certified Form 1", "Certified Article of Association", "Register BO 01 & BO 5 Forms", "Corporate Bank Account", "Company Incorporation Advice", "Director Seal"] },
  { name: "Premium", price: "59,940", featured: true, features: ["Everything in Basic", "Domain Check & Purchase", "Minute Book", "Share Certificate", "Pre-ink Seal", "TIN Registration", "Free 6 months Invoicing Tool", "Free 4 months Payroll Tool", "Get Exclusive Dialog Enterprise Solutions Through Simplebooks"] },
  { name: "Premium Pro", price: "64,940", features: ["Everything in Premium", "Free 12 months Invoicing Tool", "Free 6 months Payroll Tool"] },
];

const PERKS = ["PAYable integration (First-year subscription fee waived)", "20% off any individual Loku Business Course", "Domain name check & purchase with exclusive discounts", "Exclusive discounts via Flash Health for Healthcare & Telemedicine"];

type DialogIcon = "broadband" | "data" | "voice" | "cloud" | "security" | "mobile";
const DIALOG: [DialogIcon, string, string][] = [
  ["broadband", "Fixed Broadband", "High speed internet for your business"],
  ["data", "Fixed Data - ILL/VPN", "Dedicated data lines and secure business connectivity"],
  ["voice", "Fixed Voice", "Enterprise grade voice solutions"],
  ["cloud", "IDC & Cloud", "Hosting, Cloud & Data Centre Services"],
  ["security", "Security", "Cyber Security and network protection"],
  ["mobile", "Mobile", "Business mobile connections"],
];

/* One stroked set, drawn for these tiles, in place of the mixed Unicode
   glyphs (⌁ ▤ ☎ ☁ ⬡ ▯) that rendered at different sizes on every OS. */
function TileIcon({ name }: { name: DialogIcon }) {
  const paths: Record<DialogIcon, React.ReactNode> = {
    broadband: (
      <>
        <path d="M4.5 9.6a10.6 10.6 0 0 1 15 0" />
        <path d="M7.6 12.8a6.2 6.2 0 0 1 8.8 0" />
        <path d="M10.6 15.9a2 2 0 0 1 2.8 0" />
        <circle cx="12" cy="19" r="0.6" fill="currentColor" />
      </>
    ),
    data: (
      <>
        <rect x="4" y="4.5" width="16" height="6" rx="2" />
        <rect x="4" y="13.5" width="16" height="6" rx="2" />
        <path d="M8 7.5h.01M8 16.5h.01" />
      </>
    ),
    voice: (
      <path d="M7.2 4h2.6l1.4 3.6-1.8 1.2a9.5 9.5 0 0 0 5.8 5.8l1.2-1.8 3.6 1.4v2.6a2 2 0 0 1-2.1 2A15 15 0 0 1 5.2 6.1 2 2 0 0 1 7.2 4z" />
    ),
    cloud: <path d="M7.5 18.5h9a4 4 0 0 0 .6-7.95 5.5 5.5 0 0 0-10.6 1.2A3.4 3.4 0 0 0 7.5 18.5z" />,
    security: (
      <>
        <path d="M12 3.5l7 2.7v5.3c0 4.3-2.9 7.5-7 8.9-4.1-1.4-7-4.6-7-8.9V6.2z" />
        <path d="M9.2 12.1l2 2 3.8-3.9" />
      </>
    ),
    mobile: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2.5" />
        <path d="M11 17.5h2" />
      </>
    ),
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/**
 * The three registration plans, the perks and the Dialog partner services.
 * `note` is the page's add-on and fee line; it sits straight under the prices
 * it qualifies rather than after the perks.
 */
export default function RegistrationPricing({ note }: { note?: React.ReactNode }) {
  return (
    <div className={styles.pricing}>
      <p className={styles.intro}>Choose the best plan for your business registration</p>
      <div className={styles.plans}>
        {PLANS.map(plan => (
          <article key={plan.name} className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}>
            {plan.featured && <span className={styles.badge}>Most popular</span>}
            <h3>{plan.name}</h3>
            <p className={styles.price}>{plan.price}<span>LKR</span></p>
            <ul className={styles.features}>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
            <div className={styles.footer}><p>Pay in instalments via <strong className={styles.koko}>KOKO</strong></p><Link href="#consultation" className={styles.cta}>Choose {plan.name} <span aria-hidden="true">→</span></Link></div>
          </article>
        ))}
      </div>
      {note && <p className={styles.note}>{note}</p>}
      <div className={styles.perks}>
        <article className={styles.perkPanel}>
          <h3><span className={styles.star} aria-hidden="true">★</span> Exclusive Perks</h3>
          <p>Included in Premium &amp; Premium Pro</p>
          <ul className={styles.features}>{PERKS.map(perk => <li key={perk}><span aria-hidden="true">✓</span>{perk}</li>)}</ul>
        </article>
        <article className={styles.perkPanel}>
          <h3>Dialog Exclusive Perks <span className={styles.partner}>Partner</span></h3>
          <p>Exclusive business services with Dialog Enterprise</p>
          <div className={styles.dialogGrid}>{DIALOG.map(([icon, title, detail]) => <div key={title}><h4><TileIcon name={icon} />{title}</h4><p>{detail}</p></div>)}</div>
        </article>
      </div>
    </div>
  );
}
