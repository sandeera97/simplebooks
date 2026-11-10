import Link from "next/link";
import styles from "./registration-pricing.module.css";

const PLANS = [
  { name: "Basic", price: "49,940", features: ["Name Approval", "Articles of Association", "Form 1, Form 18, Form 19", "Certified Form 1", "Certified Article of Association", "Register BO 01 & BO 5 Forms", "Corporate Bank Account", "Company Incorporation Advice", "Director Seal"] },
  { name: "Premium", price: "59,940", featured: true, features: ["Everything in Basic", "Domain Check & Purchase", "Minute Book", "Share Certificate", "Pre-ink Seal", "TIN Registration", "Free 6 months Invoicing Tool", "Free 4 months Payroll Tool", "Get Exclusive Dialog Enterprise Solutions Through Simplebooks"] },
  { name: "Premium Pro", price: "64,940", features: ["Everything in Premium", "Free 12 months Invoicing Tool", "Free 6 months Payroll Tool"] },
];

const PERKS = ["PAYable integration (First-year subscription fee waived)", "20% off any individual Loku Business Course", "Domain name check & purchase with exclusive discounts", "Exclusive discounts via Flash Health for Healthcare & Telemedicine"];
const DIALOG = [
  ["⌁", "Fixed Broadband", "High speed internet for your business"],
  ["▤", "Fixed Data - ILL/VPN", "Dedicated data lines and secure business connectivity"],
  ["☎", "Fixed Voice", "Enterprise grade voice solutions"],
  ["☁", "IDC & Cloud", "Hosting, Cloud & Data Centre Services"],
  ["⬡", "Security", "Cyber Security and network protection"],
  ["▯", "Mobile", "Business mobile connections"],
];

export default function RegistrationPricing() {
  return (
    <div className={styles.pricing}>
      <p className={styles.intro}>Choose the best plan for your business registration</p>
      <div className={styles.plans}>
        {PLANS.map(plan => (
          <article key={plan.name} className={`${styles.plan} ${plan.featured ? styles.featured : ""}`}>
            {plan.featured && <span className={styles.badge}>★ Most popular</span>}
            <h3>{plan.name}</h3>
            <p className={styles.price}>{plan.price}<span>LKR</span></p>
            <ul className={styles.features}>{plan.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
            <div className={styles.footer}><p>Pay in instalments via <strong className={styles.koko}>KOKO</strong></p><Link href="#consultation" className={styles.cta}>Choose {plan.name} <span aria-hidden="true">→</span></Link></div>
          </article>
        ))}
      </div>
      <div className={styles.perks}>
        <article className={styles.perkPanel}>
          <h3><span className={styles.star} aria-hidden="true">★</span> Exclusive Perks</h3>
          <p>Included in Premium &amp; Premium Pro</p>
          <ul className={styles.features}>{PERKS.map(perk => <li key={perk}><span aria-hidden="true">✓</span>{perk}</li>)}</ul>
        </article>
        <article className={styles.perkPanel}>
          <h3><span className={styles.dialog}>Dialog</span> Dialog Exclusive Perks <span className={styles.partner}>Partner</span></h3>
          <p>Exclusive business services with Dialog Enterprise</p>
          <div className={styles.dialogGrid}>{DIALOG.map(([icon, title, detail]) => <div key={title}><h4><span aria-hidden="true">{icon}</span>{title}</h4><p>{detail}</p></div>)}</div>
        </article>
      </div>
    </div>
  );
}
