import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import { PageHero, SecHead, Steps, FeatureGrid, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "VAT Compliance | Simplebooks",
  description:
    "Transform your VAT compliance journey. We'll guide you to compliance confidence with 100% guaranteed accuracy — registration, returns and ongoing support.",
};

const STEPS = [
  { t: "Expert registration & setup", d: "Complete VAT registration within 2 working days (Premier) or 2 weeks (Basic). We handle everything from document preparation to RAMIS portal setup." },
  { t: "Ongoing return preparation", d: "Professional VAT schedule preparation and electronic submission through the RAMIS portal. Starting at LKR 25,000 per quarter with payment coordination." },
  { t: "Continuous compliance support", d: "Regular updates on VAT regulation changes, deadline reminders, and professional guidance for complex scenarios. Your long-term compliance partner." },
];

const PAIN = [
  { t: "Complex RAMIS portal", d: "Navigation and electronic filing requirements that are confusing and time-consuming.", tags: ["RAMIS"] },
  { t: "Severe penalties", d: "Risk of significant fines for late or incorrect filings that compound quickly.", tags: ["Penalties"] },
  { t: "Tight deadlines", d: "Quarterly cycles that arrive faster than your schedules are ready.", tags: ["Deadlines"] },
  { t: "Regulation changes", d: "Rules that move, with no one telling you until you're already non-compliant.", tags: ["Changes"] },
];

export default function VatPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="VAT compliance"
        title="Transform your VAT compliance journey"
        lead="Stop letting VAT complications drain your energy and resources. We'll guide you to compliance confidence with 100% guaranteed accuracy."
        primary={{ label: "Free VAT assessment", href: "/srilanka/contact" }}
        secondary={{ label: "Schedule consultation", href: "/srilanka/contact" }}
        stats={[
          { n: "100%", l: "Compliance guaranteed" },
          { n: "2,500+", l: "Clients served" },
          { n: "2 days", l: "Registration (Premier)" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="A simple 3-step process"
            lead="We understand your struggles. Having worked with over 2,500 businesses across Sri Lanka, we've seen how VAT compliance can overwhelm even the most successful entrepreneurs."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The problem"
            title="VAT compliance chaos is stealing your success"
            lead="Complex regulations, tight deadlines, and severe penalties are overwhelming your business operations."
          />
          <FeatureGrid items={PAIN} cols={4} />
        </div>
      </section>

      <CtaBand
        title="Get your VAT under control"
        lead="A free assessment tells you where you stand and what the next quarter needs."
        primary={{ label: "Free VAT assessment", href: "/srilanka/contact" }}
        secondary={{ label: "See the VAT tool", href: "/srilanka/services/value-added-tax-filling" }}
      />

      <LeadForm source="/tax/vat" {...leadFormFor("/tax/vat")!} />

    </PageShell>
  );
}
