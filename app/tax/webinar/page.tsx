import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import { PageHero, SecHead, FeatureGrid, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Tax Webinar | Simplebooks",
  description:
    "Master Sri Lankan tax compliance with expert-led webinars. Choose from specialised tax topics tailored to your business needs.",
};

const WHY = [
  { t: "Multi-device access", d: "Connect from anywhere using your laptop, desktop, or mobile phone.", tags: ["Any device"] },
  { t: "Customizable topics", d: "Organizations can choose specific tax areas they want to focus on.", tags: ["Your choice"] },
  { t: "Interactive learning", d: "Real-time interaction with expert facilitators.", tags: ["Live"] },
];

const TOPICS = [
  {
    t: "Individual income tax",
    d: "Personal income tax calculation, thresholds, deductions, and compliance requirements. For employees, freelancers and self-employed individuals.",
    tags: ["LKR 1.8m threshold", "6%–36% rates", "Personal relief", "PAYE"],
  },
  {
    t: "Corporate tax",
    d: "Company tax obligations, allowable deductions and the year-round compliance cycle for Sri Lankan businesses.",
    tags: ["Deductions", "Filing cycle"],
  },
  {
    t: "VAT compliance",
    d: "Registration, schedules, RAMIS filing and the quarterly cycle — what your finance team needs to get right.",
    tags: ["RAMIS", "Quarterly"],
  },
  {
    t: "USD earnings taxation",
    d: "The rules that apply to foreign income and remittances for freelancers and remote employees.",
    tags: ["Foreign income", "Remittances"],
  },
];

export default function WebinarPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tax webinars"
        title="Master Sri Lankan tax compliance with expert-led webinars"
        lead="Choose from specialized tax topics tailored to your business needs. Organizations can select specific tax areas they want to focus on — from individual income tax to USD earnings taxation."
        primary={{ label: "Browse tax topics", href: "/srilanka/contact" }}
        secondary={{ label: "View past webinars", href: "/srilanka/videos" }}
        stats={[
          { n: "Expert-led", l: "Sessions" },
          { n: "Interactive", l: "Learning" },
          { n: "Multi-device", l: "Access" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Why webinars"
            title="The first ever digital tax experience in Sri Lanka"
            lead="The uniqueness of our webinars is that they connect the user with the facilitator through a laptop, desktop or smart mobile phone to give them a real-time experience filled with fun and knowledge."
          />
          <FeatureGrid items={WHY} cols={3} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Topics"
            title="Choose your tax topic"
            lead="Select the tax area that's most relevant to your organization's needs."
          />
          <FeatureGrid items={TOPICS} cols={4} />
        </div>
      </section>

      <CtaBand
        title="Book a session for your team"
        lead="Tell us which areas your organisation needs and we'll build the session around them."
        primary={{ label: "Browse tax topics", href: "/srilanka/contact" }}
        secondary={{ label: "Watch past sessions", href: "/srilanka/videos" }}
      />

      <LeadForm source="/tax/webinar" {...leadFormFor("/tax/webinar")!} />

    </PageShell>
  );
}
