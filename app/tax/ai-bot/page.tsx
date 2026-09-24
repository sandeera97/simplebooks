import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, CheckSplit, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "WhatsApp AI Tax Bot | Simplebooks",
  description:
    "File your taxes in one WhatsApp chat. Ask any tax question instantly, get a free computation, and pay only if you file.",
};

const HOW = [
  { t: "Instant calculations", d: "Get accurate computations instantly via a simple query.", tags: ["Instant"] },
  { t: "Reviewed by human experts", d: "Built on Sri Lankan tax rules and verified by experts.", tags: ["Verified"] },
  { t: "Try free", d: "Compute your taxes for free and file instantly. You only need to pay when you file.", tags: ["Free to try"] },
];

const POCKET = [
  "Tuned for Sri Lankan taxes and available 24/7 on WhatsApp",
  "Verified by tax experts",
  "Instant, accurate answers to any tax question",
  "Tax computation calculated within WhatsApp itself",
  "Free computation — pay only when you file",
];

export default function TaxAiBotPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="AI-powered tax assistant"
        title="File your taxes in one WhatsApp chat"
        lead="Ask any tax question instantly, get a free computation, and pay only if you file — reviewed by tax specialists."
        primary={{ label: "Chat on WhatsApp", href: "https://wa.me/94117555878" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
        stats={[
          { n: "24/7", l: "Available" },
          { n: "100%", l: "Secure" },
          { n: "Free", l: "Computation" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="What it does"
            title="What does the WhatsApp AI chatbot do"
            lead="Tax filing and compliance confusing you and stressing you out? Our Simplebooks TaxBot gives instant answers for questions about individual income tax filing, accurate calculations verified by human consultants, and hassle-free filing. One chat is all it takes to stay compliant and relaxed without leaving WhatsApp."
          />
          <FeatureGrid items={HOW} cols={3} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="Always on"
            title="Your tax expert in your pocket"
            lead="Your Simplebooks AI tax agent is tuned for Sri Lankan taxes and available 24/7 on WhatsApp."
            items={POCKET}
            cta={{ label: "Chat on WhatsApp", href: "https://wa.me/94117555878" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">See it in action</p>
                <div className="v2_panel_row"><b>Tax computation</b><span>In WhatsApp</span></div>
                <div className="v2_panel_row"><b>Any tax question</b><span>Instant answer</span></div>
                <div className="v2_panel_row"><b>Human review</b><span className="ok">Included</span></div>
                <div className="v2_panel_row"><b>Cost to try</b><span className="ok">Free</span></div>
              </div>
            }
          />
        </div>
      </section>

      <CtaBand
        title="Stop guessing at your tax"
        lead="Experience how our AI tax agent helps Sri Lankan taxpayers with instant calculations and expert guidance through WhatsApp."
        primary={{ label: "Chat on WhatsApp", href: "https://wa.me/94117555878" }}
        secondary={{ label: "File with the tax tool", href: "/tax/income-tax" }}
      />
    </PageShell>
  );
}
