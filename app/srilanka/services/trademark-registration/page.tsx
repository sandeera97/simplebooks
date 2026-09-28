import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import {
  PageHero, SecHead, FeatureGrid, Steps, Pricing, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Trademark Registration | Simplebooks",
  description:
    "Trademark your name, logo or slogan and protect your brand from copycat competitors. Hassle free registration with Simplebooks.",
};

const WHY = [
  { t: "Own your brand", d: "Your name, logo, and slogans all belong to you.", tags: ["Ownership"] },
  { t: "Sell or transfer", d: "Sell or transfer your trademarks whenever.", tags: ["Transferable"] },
  { t: "Legal protection", d: "If anyone copies you, you can take legal action.", tags: ["Enforceable"] },
  { t: "License it out", d: "Temporarily license your trademark to others.", tags: ["Licensing"] },
];

const STEPS = [
  { t: "Tell us about your trademark", d: "The name, logo or slogan you want protected, and the classes it should cover." },
  { t: "Submit the necessary details", d: "We tell you exactly what's needed — no guessing at forms." },
  { t: "We'll fill in and file the documentation", d: "Our team prepares and files the application on your behalf." },
  { t: "Simplebooks will process your documents", d: "We manage the process from filing through to registration." },
  { t: "Collect your trademark certificate", d: "Your certificate lands with you, and we track the renewal dates." },
];

const PLANS = [
  {
    name: "Trademark registration",
    price: "LKR 28,920",
    blurb: "Trademark registration at the most affordable rate. Hassle free registration with Simplebooks.",
    features: [
      "Entire process managed from filing to registration",
      "Your name and logo legally protected",
      "We prepare and file the documentation",
      "Renewal dates tracked for you",
      "T&C applied",
    ],
    featured: true,
    cta: "Talk to the team",
  },
];

const REVIEWS = [
  { q: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { q: "Thanks you simplebooks team for the amazing support on my company registration. Givantha, Moiz and other team members were very helpful. Keep up the quick service.", name: "NAWRAN", role: "Director, Social Media Academy" },
  { q: "They took the time to explain what they were doing every step of the way. This took a lot of stress away. I deeply appreciate their professionality.", name: "Ratta", role: "Founder, Studio Ratta" },
];

export default function TrademarkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trademark registration"
        title="Trademark your name, logo, or slogan"
        lead="Protect your brand from copycat competitors."
        primary={{ label: "Get a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See all services", href: "/srilanka/services" }}
        stats={[
          { n: "5,000+", l: "Businesses trust Simplebooks" },
          { n: "LKR 28,920", l: "Registration, all in" },
          { n: "4.9★", l: "Across 400+ reviews" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Why trademark" title="Why should you trademark your brand" />
          <FeatureGrid items={WHY} cols={4} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Trademark registration with Simplebooks"
            lead="We've helped dozens of businesses protect their brand."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Pricing" title="Registration at the most affordable rate" />
          <Pricing
            plans={PLANS}
            note="Pay easy with our exclusive instalment plans — up to 48 months with Commercial Bank, 36 months with Nations Trust, Seylan and Sampath, and 24 months with HNB."
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="People trust our work" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Protect your brand"
        lead="Tell us the name or logo you want covered and we'll check it before you file."
        primary={{ label: "Talk to the team", href: "/srilanka/contact" }}
        secondary={{ label: "Check a company name", href: "/srilanka/company-name-check" }}
      />

      <LeadForm source="/srilanka/services/trademark-registration" {...leadFormFor("/srilanka/services/trademark-registration")!} />

    </PageShell>
  );
}
