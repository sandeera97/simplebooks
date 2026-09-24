import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, SecHead, FeatureGrid, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Company Name Check & Domain Availability Check in Sri Lanka",
  description:
    "Enter your company name to check its availability at the Registrar of Companies and whether the matching domain is free — instantly.",
};

const TIPS = [
  { t: "Names must be distinctive", d: "The ROC will reject a name that is identical or too similar to one already on the register.", tags: ["ROC rule"] },
  { t: "Some words need approval", d: "Words like bank, insurance or university need clearance from the relevant authority first.", tags: ["Restricted"] },
  { t: "Check the domain too", d: "A free company name is worth less if the matching .lk or .com is already taken.", tags: ["Domain"] },
  { t: "Have alternates ready", d: "Give us two or three options. If the first is rejected we file the next without losing days.", tags: ["Alternates"] },
];

export default function CompanyNameCheckPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company name check"
        title="Check your company name and domain, instantly"
        lead="Enter the name you have in mind. We check it against the Registrar of Companies and tell you whether the matching domain is free."
      >
        <div className="v2_namecheck_embed v2_reveal">
          <iframe
            src="https://name-checker-wp.pages.dev/"
            title="Company name and domain availability checker"
            loading="lazy"
          />
        </div>
      </PageHero>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Before you file"
            title="What makes a name pass"
            lead="Most rejections come down to the same handful of reasons. Here's what to watch for."
          />
          <FeatureGrid items={TIPS} cols={4} />
        </div>
      </section>

      <CtaBand
        title="Found a name that's free"
        lead="We can reserve it and have your company registered in three working days."
        primary={{ label: "Start registration", href: "/business-registration" }}
        secondary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
      />
    </PageShell>
  );
}
