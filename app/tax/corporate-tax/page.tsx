import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import { PageHero, SecHead, Steps, FeatureGrid, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Corporate Tax | Simplebooks",
  description:
    "Corporate tax made simple for Sri Lankan businesses. A complete financial back office with year-round compliance so you can focus on growth.",
};

const STEPS = [
  { t: "Get financially clear", d: "We start with your books, audit status, and real-time cash flows. Fix bookkeeping gaps and align audited financials for Y/A 2024/25." },
  { t: "File with confidence", d: "We prepare your full tax pack, handle income, WHT, foreign earnings, and optimise every deduction with complete accuracy." },
  { t: "Stay compliant all year", d: "We don't vanish after March. Year-round support with quarterly consults, regulatory alerts, and proactive guidance." },
];

const PAIN = [
  { t: "RAMIS crashes when you need it", d: "Deadlines approach, but the system goes down. You're left waiting while penalties loom.", tags: ["RAMIS"] },
  { t: "Audit demands with zero notice", d: "Auditors request dozens of documents immediately. No preparation time, no guidance.", tags: ["Audit"] },
  { t: "Massive penalty exposure", d: "One calculation error can trigger significant penalties that eat into your margins.", tags: ["Penalties"] },
  { t: "No one to call", d: "Most tax services disappear after filing season, right when the questions start.", tags: ["Support"] },
];

export default function CorporateTaxPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Corporate tax"
        title="Corporate tax made simple for Sri Lankan businesses"
        lead="Stop fighting the system. Get your business back on track with our complete financial back office solution — year-round compliance so you can focus on growth."
        primary={{ label: "Talk to our expertise", href: "/srilanka/contact" }}
        secondary={{ label: "See all tax services", href: "/tax/income-tax" }}
        stats={[
          { n: "500+", l: "Corporate clients in Sri Lanka" },
          { n: "98%", l: "Client retention rate" },
          { n: "4.9★", l: "Google rating" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="A simple 3-step process"
            lead="Your complete financial back office — not just a tax service, but the whole operation behind seamless business compliance."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The problem"
            title="Fighting a system that wasn't built for you"
            lead="Corporate tax compliance in Sri Lanka feels like an uphill battle — blindfolded."
          />
          <FeatureGrid items={PAIN} cols={4} />
        </div>
      </section>

      <CtaBand
        title="Get your corporate tax under control"
        lead="Tell us where your books stand and we'll tell you exactly what the year needs."
        primary={{ label: "Talk to our expertise", href: "/srilanka/contact" }}
        secondary={{ label: "See bookkeeping", href: "/srilanka/services/accounting-services" }}
      />

      <LeadForm source="/tax/corporate-tax" {...leadFormFor("/tax/corporate-tax")!} />

    </PageShell>
  );
}
