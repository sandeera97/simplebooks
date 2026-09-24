import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, SecHead, FeatureGrid, Compare, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "APIT Filing | Simplebooks",
  description:
    "Sri Lanka's most trusted APIT filing service provider. Don't let APIT filing slow your business down — let the #1 service provider take care of it.",
};

const FEATURES = [
  { t: "End-to-end APIT filing & submission", d: "From data collection to final submission — we handle the entire APIT process for you.", tags: ["End to end"] },
  { t: "100% accurate tax calculations", d: "We use the latest IRD rates and guidelines to deliver fully accurate tax figures.", tags: ["Latest rates"] },
  { t: "Compliance check & penalty prevention", d: "Stay ahead of deadlines and avoid fines with our proactive compliance monitoring.", tags: ["Proactive"] },
  { t: "Personalised tax consultation", d: "Get one-on-one expert advice tailored to your business.", tags: ["1-to-1"] },
];

const CHALLENGES = [
  "Struggling with the IRD e-Service platform",
  "Unsure about tax deductions and rates",
  "Missed deadlines and late penalties",
  "Confused about T10 certificates and documentation",
];

const SOLVED = [
  "We handle the entire submission process for you",
  "We use the latest tax tables to ensure 100% accuracy",
  "Our proactive approach ensures you never miss a deadline",
  "We manage all records, certificates and compliance requirements",
];

export default function ApitPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="APIT filing"
        title="Sri Lanka's most trusted APIT filing service provider"
        lead="Don't let APIT filing slow your business down — let the #1 service provider take care of it."
        primary={{ label: "Get free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See all tax services", href: "/tax/income-tax" }}
        note="APIT tax update 2025."
        stats={[
          { n: "5,000+", l: "Businesses in Sri Lanka" },
          { n: "4.9★", l: "Google rating" },
          { n: "500+", l: "Customer reviews" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The challenge"
            title="Facing challenges in APIT filing"
            lead="Let our experts handle your tax filing complexities with precision and care."
          />
          <Compare
            badTitle="What's slowing you down"
            bad={CHALLENGES}
            goodTitle="How we solve it"
            good={SOLVED}
          />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="What's covered"
            title="Features of our APIT filing service"
            lead="What the Simplebooks APIT filing service covers."
          />
          <FeatureGrid items={FEATURES} cols={4} />
        </div>
      </section>

      <CtaBand
        title="Stop stressing over APIT filing"
        lead="Let our experts take care of it. Set up a free consultation and we'll tell you exactly what's needed."
        primary={{ label: "Set up a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See payroll services", href: "/srilanka/services/payroll-managment" }}
      />
    </PageShell>
  );
}
