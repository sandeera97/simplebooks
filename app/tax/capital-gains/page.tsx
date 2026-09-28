import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import { PageHero, SecHead, Steps, FeatureGrid, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Capital Gains Tax | Simplebooks",
  description:
    "Expert CGT compliance and filing support that protects your investments and keeps you penalty-free — from property sales to share transactions.",
};

const CHALLENGES = [
  { t: "Complex calculations", d: "CGT calculations involve cost basis, improvements, selling costs, and exemptions that are easy to get wrong.", tags: ["Cost basis"] },
  { t: "Tight deadlines", d: "CGT must be filed and paid within 30 days of asset realization — miss it and face heavy penalties.", tags: ["30 days"] },
  { t: "Missed exemptions", d: "Without expert guidance, you might miss valuable exemptions and pay more tax than necessary.", tags: ["Exemptions"] },
];

const STEPS = [
  { t: "Share your details", d: "Tell us about your asset sale and we'll assess your CGT obligations and potential exemptions." },
  { t: "We prepare & submit", d: "Our experts calculate your gains, prepare all documentation, and file with IRD within deadlines." },
  { t: "You succeed", d: "Stay compliant, avoid penalties, and maximise your exemptions with ongoing expert support." },
];

export default function CapitalGainsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Capital gains tax"
        title="Navigate Sri Lanka's capital gains tax without the stress"
        lead="Get expert CGT compliance and filing support that protects your investments and keeps you penalty-free. From property sales to share transactions, we ensure full compliance with Sri Lankan tax regulations."
        primary={{ label: "Get CGT assessment", href: "/srilanka/contact" }}
        secondary={{ label: "Learn about CGT", href: "/srilanka/contact" }}
        stats={[
          { n: "5,000+", l: "Satisfied clients" },
          { n: "30 days", l: "Filing window" },
          { n: "Maximum", l: "Exemptions applied" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The problem"
            title="Capital gains tax confusion is costing you money"
            lead="Over 5,000 satisfied clients rely on us for seamless, accurate, and compliant tax returns. Don't let CGT complexities put your investments at risk."
          />
          <FeatureGrid items={CHALLENGES} cols={3} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="How it works" title="3 easy steps to CGT success" />
          <Steps items={STEPS} />
        </div>
      </section>

      <CtaBand
        title="Sold an asset? Start the clock properly"
        lead="CGT is due within 30 days of realization. Tell us about the sale and we'll handle the rest."
        primary={{ label: "Get CGT assessment", href: "/srilanka/contact" }}
        secondary={{ label: "See all tax services", href: "/tax/income-tax" }}
      />

      <LeadForm source="/tax/capital-gains" {...leadFormFor("/tax/capital-gains")!} />

    </PageShell>
  );
}
