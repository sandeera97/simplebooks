import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, CtaBand } from "@/components/v2/blocks";
import FaqGroups from "./FaqGroups";
import { faqGroups } from "./content";

export const metadata: Metadata = {
  title: "FAQ - Sri Lanka",
  description:
    "Answers to common questions about company registration, bookkeeping and working with Simplebooks in Sri Lanka.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Your questions, answered"
        title="Frequently asked questions"
        lead="The questions we answer every day, grouped by what you're trying to do."
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <FaqGroups groups={faqGroups} />
        </div>
      </section>

      <CtaBand
        title="Still stuck on something"
        lead="If your question isn't here, ask us directly. A consultant will get back to you within one working day."
        primary={{ label: "Ask us yours", href: "/srilanka/contact" }}
      />
    </PageShell>
  );
}
