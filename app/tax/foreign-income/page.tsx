import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import { PageHero, SecHead, Steps, FeatureGrid, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Foreign Income Tax | Simplebooks",
  description:
    "From April 2025, freelancers and remote employees earning in USD face 15% tax regulations. Don't let confusion cost you thousands in penalties.",
};

const CHALLENGES = [
  { t: "Tax rate confusion", d: "Complex 15% tax calculations on USD bank remittances requiring professional guidance.", tags: ["15%"] },
  { t: "Compliance deadlines", d: "Critical payment deadlines with varying requirements causing compliance risks.", tags: ["Deadlines"] },
  { t: "Complex calculations", d: "Intricate cumulative income calculations and foreign tax credit considerations.", tags: ["Cumulative"] },
  { t: "Regulatory compliance", d: "Potential IRD penalties and regulatory risks requiring expert oversight.", tags: ["IRD"] },
];

const STEPS = [
  { t: "Complete tax assessment", d: "15-minute consultation to identify your specific compliance gaps and opportunities." },
  { t: "Strategic tax planning", d: "Personalised remittance strategy with quantified savings projections." },
  { t: "Automated compliance", d: "Ongoing support with deadline tracking and error-free filing." },
];

export default function ForeignIncomePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Foreign income tax"
        title="Navigate Sri Lanka's new USD tax regulations with confidence"
        lead="From April 2025, freelancers and remote employees earning in USD now face 15% tax regulations. Don't let confusion cost you thousands in penalties."
        primary={{ label: "Get free tax assessment", href: "/srilanka/contact" }}
        secondary={{ label: "Free consultation", href: "/srilanka/contact" }}
        stats={[
          { n: "1,000+", l: "USD earners helped" },
          { n: "Zero", l: "Penalty track record" },
          { n: "15%", l: "On USD remittances" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The challenge"
            title="The USD tax challenges you're facing right now"
            lead="New 15% tax regulations on USD earnings are creating confusion and stress for thousands of Sri Lankan freelancers and remote workers."
          />
          <FeatureGrid items={CHALLENGES} cols={4} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="How it works" title="Your simple 3-step path to tax confidence" />
          <Steps items={STEPS} />
        </div>
      </section>

      <CtaBand
        title="Get your USD earnings sorted"
        lead="A 15-minute assessment tells you exactly where you stand under the new rules."
        primary={{ label: "Get free tax assessment", href: "/srilanka/contact" }}
        secondary={{ label: "File your return", href: "/tax/income-tax" }}
      />

      <LeadForm source="/tax/foreign-income" {...leadFormFor("/tax/foreign-income")!} />

    </PageShell>
  );
}
