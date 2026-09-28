import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import { PageHero, SecHead, Steps, FeatureGrid, ReviewStrip, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Auditing Made Easy | Simplebooks",
  description:
    "Company audits stressing you out? We can fix that. Make the right decisions about your company by having access to the right metrics.",
};

const STEPS = [
  { t: "Contact the Simplebooks team", d: "Tell us about your company and your financial year. We'll tell you exactly what the audit needs." },
  { t: "Documentation hand-over", d: "Hand over your records once. We organise them so the auditors aren't chasing you for pieces." },
  { t: "Present your source documents to auditors", d: "Your source documents go to the auditors in the form they expect, not a shoebox of receipts." },
  { t: "Auditing process begins", d: "Experienced auditors vet your books while we stay in the middle, answering their queries." },
  { t: "Access your audited accounts", d: "Your audited financials land with you, on deadline — ready for the bank, the ROC or an investor." },
];

const BENEFITS = [
  { t: "We work closely with your team", d: "We collaborate with your internal team to ensure accuracy.", tags: ["Collaborative"] },
  { t: "Professionally executed audits", d: "Have experienced, reliable auditors vet your books for you.", tags: ["Experienced"] },
  { t: "Delivered on deadline", d: "Say goodbye to hefty penalties from the government.", tags: ["On time"] },
  { t: "Enhanced process with technology", d: "Skip the messy piles of documents and organize your paperwork online with us.", tags: ["Online"] },
  { t: "Efficient process and accurate results", d: "Follow a guided process that ensures accurately audited financials.", tags: ["Guided"] },
];

const REVIEWS = [
  { q: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, follow-ups and overall knowledge of the field and pricing.", name: "Kalana Muthumuni", role: "" },
  { q: "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta" },
  { q: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
];

export default function AuditingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Auditing"
        title="Auditing made easy"
        lead="Company audits stressing you out? We can fix that. Make the right decisions about your company by having access to the right metrics."
        primary={{ label: "Get audit help", href: "/srilanka/contact" }}
        secondary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="How Simplebooks helps you run your audits"
            lead="Take a look at our guided process."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="Benefits" title="Enjoy the benefits of audits with Simplebooks" />
          <FeatureGrid items={BENEFITS} cols={3} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="What our 1,000+ repeat customers say" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Get your audit moving"
        lead="Tell us your financial year end and we'll tell you what the audit needs and what it costs."
        primary={{ label: "Get audit help", href: "/srilanka/contact" }}
        secondary={{ label: "See all services", href: "/srilanka/services" }}
      />

      <LeadForm source="/srilanka/services/auditing" {...leadFormFor("/srilanka/services/auditing")!} />

    </PageShell>
  );
}
