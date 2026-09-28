import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import { PageHero, SecHead, FeatureGrid, Pricing, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "SSCL | Simplebooks",
  description:
    "Navigate Sri Lanka's Social Security Contribution Levy with confidence. From liable turnover calculations to penalty avoidance, we keep your business compliant.",
};

const CHALLENGES = [
  { t: "Complex calculations", d: "Different liable turnover percentages for different business types make SSCL calculations confusing and error-prone.", tags: ["Liable turnover"] },
  { t: "Strict deadlines", d: "Monthly payments and quarterly filings with tight deadlines that can result in significant penalties if missed.", tags: ["Monthly", "Quarterly"] },
  { t: "Heavy penalties", d: "Non-compliance can result in penalties up to Rs. 50,000 plus compound interest, severely impacting your business.", tags: ["Rs. 50,000"] },
];

const RATES = [
  {
    name: "Importers & service providers",
    price: "2.5%",
    per: "effective rate",
    blurb: "100% of turnover liable.",
    features: ["100% of turnover liable", "SSCL applies at 2.5%", "Monthly payments", "Quarterly filings"],
    featured: true,
    cta: "Get SSCL guidance",
  },
  {
    name: "Manufacturers",
    price: "1.25%",
    per: "effective rate",
    blurb: "50% of turnover liable.",
    features: ["50% of turnover liable", "SSCL applies at 2.5%", "Monthly payments", "Quarterly filings"],
    cta: "Get SSCL guidance",
  },
  {
    name: "Retailers",
    price: "1.25%",
    per: "effective rate",
    blurb: "50% of turnover liable.",
    features: ["50% of turnover liable", "SSCL applies at 2.5%", "Monthly payments", "Quarterly filings"],
    cta: "Get SSCL guidance",
  },
];

export default function SsclPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="SSCL"
        title="SSCL tax compliance made simple"
        lead="Navigate Sri Lanka's Social Security Contribution Levy with confidence. From liable turnover calculations to penalty avoidance, Simplebooks ensures your business stays compliant with SSCL requirements."
        primary={{ label: "Get SSCL guidance", href: "/srilanka/contact" }}
        secondary={{ label: "Calculate liable turnover", href: "/srilanka/contact" }}
        stats={[
          { n: "Expert", l: "SSCL guidance" },
          { n: "Penalty", l: "Prevention" },
          { n: "Full", l: "Compliance" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The challenge"
            title="SSCL compliance challenges"
            lead="The Social Security Contribution Levy presents complex challenges for Sri Lankan businesses, from understanding liable turnover percentages to managing strict compliance deadlines."
          />
          <FeatureGrid items={CHALLENGES} cols={3} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Liable turnover"
            title="SSCL liable turnover rates by business type"
            lead="SSCL applies at 2.5%, but the effective rate varies based on your business type's liable turnover percentage."
          />
          <Pricing plans={RATES} />
        </div>
      </section>

      <CtaBand
        title="Get your SSCL right"
        lead="We'll work out your liable turnover and keep the monthly and quarterly cycle on track."
        primary={{ label: "Get SSCL guidance", href: "/srilanka/contact" }}
        secondary={{ label: "See all tax services", href: "/tax/income-tax" }}
      />

      <LeadForm source="/tax/sscl" {...leadFormFor("/tax/sscl")!} />

    </PageShell>
  );
}
