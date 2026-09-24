import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, CheckSplit, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "On-demand Legal Services | Simplebooks",
  description:
    "Ensure legal compliance in your company with Simplebooks as your legal counsel. Commission, review and close contracts without complications.",
};

const WHY = [
  { t: "Legal help for busy entrepreneurs", d: "We have years of experience in helping companies stay legally compliant.", tags: ["Experienced"] },
  { t: "Friendly and affordable", d: "If you're looking for sound legal advice for your startup at an affordable rate, we're the perfect fit.", tags: ["Affordable"] },
  { t: "Online legal services", d: "Skip the company visits and postal services and do everything online.", tags: ["Online"] },
  { t: "Dedicated lawyers that are specialised", d: "Our highly competent lawyers will be available for your needs.", tags: ["Specialised"] },
  { t: "We are solution-oriented experts", d: "We're focused on providing specialized solutions for your unique needs.", tags: ["Solutions"] },
  { t: "Dedicated to meet deadlines", d: "Our services ensure that your legal needs are met on deadline.", tags: ["On time"] },
];

const STEPS = [
  { t: "Contact the Simplebooks team", d: "Tell us what you're trying to do and when you need it by." },
  { t: "Communicate your legal needs", d: "We scope the work with you so there are no surprises on either side." },
  { t: "Solution discussion", d: "A specialised lawyer walks you through the options before anything is drafted." },
  { t: "Hand over details and documentation", d: "Send what you have. We tell you exactly what else is needed." },
  { t: "Receive deliverables", d: "Your documents, drafted or reviewed, delivered on the agreed date." },
];

const HELP = [
  "Land title search",
  "Lease agreements",
  "Partnership agreements",
  "Director agreements",
  "Title reports",
  "Employment contracts",
  "Share transfer agreements",
  "Non Disclosure Agreements (NDA)",
  "Affidavits",
  "Contract review",
  "Investment and profit sharing agreement",
  "Memorandum of Understanding (MoU)",
];

const REVIEWS = [
  { q: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { q: "They took the time to explain what they were doing every step of the way. This took a lot of stress away.", name: "Ratta", role: "Founder, Studio Ratta" },
  { q: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail and follow-ups.", name: "Kalana Muthumuni", role: "" },
];

export default function LegalPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal services"
        title="On-demand legal services"
        lead="Ensure legal compliance in your company with Simplebooks as your legal counsel. Commission, review and close contracts without complications."
        primary={{ label: "Get a free legal consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See all services", href: "/srilanka/services" }}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Why simplebooks" title="Why choose Simplebooks" />
          <FeatureGrid items={WHY} cols={3} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Get started with Simplebooks right away"
            lead="Follow our easy guided process."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="What we cover"
            title="What can we help you with today"
            lead="From a single contract review to the paperwork behind a funding round — drafted or reviewed by lawyers who work with growing businesses."
            items={HELP}
            cta={{ label: "Reach out to us", href: "/srilanka/contact" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">Instalment plans</p>
                <div className="v2_panel_row"><b>Commercial Bank</b><span>48 months</span></div>
                <div className="v2_panel_row"><b>Nations Trust Bank</b><span>36 months</span></div>
                <div className="v2_panel_row"><b>Seylan Bank</b><span>36 months</span></div>
                <div className="v2_panel_row"><b>Sampath Bank</b><span>36 months</span></div>
                <div className="v2_panel_row"><b>HNB</b><span>24 months</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="We help you succeed" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Need a quotation for legal services"
        lead="Get in touch with our team today and we'll scope it properly before quoting."
        primary={{ label: "Talk to the team", href: "/srilanka/contact" }}
        secondary={{ label: "Register a trademark", href: "/srilanka/services/trademark-registration" }}
      />
    </PageShell>
  );
}
