import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, Pricing, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Company Secretarial Services | Simplebooks",
  description:
    "Hire your very own company secretary in Sri Lanka and have your paperwork done right, on time. Secretary registration number RCS2000335.",
};

const WHAT = [
  { t: "Tidy up your documents", d: "Do you have a backlog of messy files and records? Well, not anymore.", tags: ["Backlog"] },
  { t: "A dedicated company secretary", d: "Think of us as a super efficient extension to your existing team. We're always around.", tags: ["Dedicated"] },
  { t: "Guaranteed compliance", d: "Avoid exhaustive legal complications with Simplebooks watching your back.", tags: ["Compliance"] },
  { t: "Your resolutions in one place", d: "We'll organize and store all your company resolutions in one easy-to-access place.", tags: ["Resolutions"] },
  { t: "Continuous deadline tracking", d: "Have Simplebooks track and remind you of all your deadlines. We'll make sure you're on time.", tags: ["Reminders"] },
  { t: "Easy company changes", d: "Focus on running your business while Simplebooks handles all your company changes.", tags: ["Changes"] },
];

const STEPS = [
  { t: "We'll register your company for you", d: "If you're looking to register your company hassle free, you've come to the right place. We'll take over from here on." },
  { t: "Take care of all your company changes", d: "Need to make some changes to your company details post registration? Don't worry, we'll take care of that too." },
  { t: "File your annual returns", d: "Keep your focus on running your business and let Simplebooks take care of preparing and filing your Annual Returns." },
  { t: "Help you open bank accounts", d: "Forgo the fuss of having to deal with the banks yourself. We'll step in and help you open all of your bank accounts." },
  { t: "We'll even liaise with the ROC for you", d: "We'll communicate all your company changes and developments to the ROC so you don't have to worry about it." },
];

const SWITCH = [
  { t: "Talk to the team", d: "Tell us who your current secretary is and where your records sit. We'll take it from there." },
  { t: "Fill out the documentation", d: "A short set of forms to appoint us and release your records. We prepare them for you." },
  { t: "Have Simplebooks take over", d: "We handle the handover with your previous secretary and pick up your deadlines." },
];

const PLANS = [
  {
    name: "Company secretarial services",
    price: "LKR 20,000",
    per: "annually",
    blurb: "Say hello to transparent pricing. One fee, everything the role covers.",
    features: [
      "A dedicated company secretary",
      "Annual return preparation and filing",
      "All company changes handled",
      "Resolutions stored in one place",
      "Continuous deadline tracking",
      "We liaise with the ROC on your behalf",
    ],
    featured: true,
    cta: "Get a free consultation",
  },
];

const REVIEWS = [
  { q: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, follow-ups and overall knowledge of the field and pricing. Clearly an industry leader for company secretarial work in Sri Lanka.", name: "Kalana Muthumuni", role: "" },
  { q: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.", name: "Damith Menaka", role: "Director, Animspire" },
  { q: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
];

export default function CompanySecretaryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company secretary"
        title="Company secretarial services for hire"
        lead="Hire your very own company secretary in Sri Lanka and have your paperwork done right, on time."
        primary={{ label: "Get a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See all services", href: "/srilanka/services" }}
        note="Secretary registration number: RCS2000335"
        stats={[
          { n: "5,000+", l: "Businesses registered" },
          { n: "LKR 20,000", l: "Annually, all in" },
          { n: "RCS2000335", l: "Registration number" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="What we do"
            title="What Simplebooks company secretarial services can do for you"
          />
          <FeatureGrid items={WHAT} cols={3} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="The role" title="What we handle for you" />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Pricing"
            title="Transparent pricing"
            lead="How much do our company secretarial services cost? One annual fee, with instalment plans available through Commercial Bank, HNB and Nations Trust Bank."
          />
          <Pricing
            plans={PLANS}
            note="Pay easy with our exclusive instalment plans — up to 48 months with Commercial Bank, 36 months with Nations Trust Bank and 24 months with HNB."
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Switching"
            title="Looking to hire new talent? We have the right secretary for you"
            lead="Have the team at Simplebooks help you out with the transition process."
          />
          <Steps items={SWITCH} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="What our customers say" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Get your paperwork done right"
        lead="Thirty minutes with a consultant who has done this several thousand times. No obligation, no sales script."
        primary={{ label: "Get started now", href: "/srilanka/contact" }}
        secondary={{ label: "Register a company", href: "/srilanka/services/register-a-company" }}
      />
    </PageShell>
  );
}
