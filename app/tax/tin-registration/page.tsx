import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, Steps, Compare, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "TIN Registration | Simplebooks",
  description:
    "Get your Tax Identification Number registered quickly and correctly with expert guidance. No stress, no confusion, just results.",
};

const STEPS = [
  { t: "Document collection", d: "We guide you through gathering all required documents and ensure everything is complete and accurate." },
  { t: "Application processing", d: "Our experts handle all the paperwork, forms, and submissions to the Inland Revenue Department." },
  { t: "TIN certificate delivery", d: "Receive your official TIN certificate and all necessary documentation for your business operations." },
];

const CHALLENGES = [
  "Complex government forms and requirements",
  "Long queues and waiting times at IRD offices",
  "Confusing documentation requirements",
  "Risk of application rejection due to errors",
  "Time-consuming back-and-forth processes",
  "Lack of expert guidance and support",
];

const SOLUTION = [
  "Expert document review and preparation",
  "Direct submission to IRD on your behalf",
  "Real-time status updates and tracking",
  "100% accuracy guaranteed",
  "Fast processing without the queues",
  "Expert support throughout",
];

export default function TinRegistrationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="TIN registration"
        title="TIN registration made simple"
        lead="Get your Tax Identification Number registered quickly and correctly with expert guidance. No stress, no confusion, just results."
        primary={{ label: "Start your TIN registration", href: "/srilanka/contact" }}
        secondary={{ label: "Free consultation", href: "/srilanka/contact" }}
        note="2025 updates TIN number registration guide."
        stats={[
          { n: "100%", l: "Accuracy guaranteed" },
          { n: "Fast", l: "Processing" },
          { n: "Expert", l: "Support" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="A simple 3-step process"
            lead="Your trusted TIN registration partner — we eliminate all the hassles and ensure your registration is completed smoothly and efficiently."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The difference"
            title="TIN registration challenges, solved"
            lead="Many businesses struggle with the TIN registration process, leading to delays and complications."
          />
          <Compare
            badTitle="Doing it alone"
            bad={CHALLENGES}
            goodTitle="Our TIN registration solution"
            good={SOLUTION}
          />
        </div>
      </section>

      <CtaBand
        title="Get your TIN sorted"
        lead="Tell us about your business and we'll tell you exactly what the registration needs."
        primary={{ label: "Start your TIN registration", href: "/srilanka/contact" }}
        secondary={{ label: "See all tax services", href: "/tax/income-tax" }}
      />
    </PageShell>
  );
}
