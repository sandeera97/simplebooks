import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import "@/app/home-v2.css";
import RegistrationPricing from "@/components/business-registration/RegistrationPricing";
import ServiceJourney from "@/components/v2/ServiceJourney";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import {
  PageHero, SecHead, Steps, FeatureGrid, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = pageMetadata("/srilanka/services/register-a-company");

const DASH = [
  { t: "Hassle free business registration", d: "Make an account for zero cost and get started on your online journey to register your company.", tags: ["Free account"] },
  { t: "All your documents in one place", d: "Forms, articles and certificates stored together rather than scattered across email.", tags: ["One vault"] },
  { t: "Real-time status updates", d: "See exactly which stage your registration is at, without asking anyone.", tags: ["Live status"] },
  { t: "Make changes in a few clicks", d: "Company changes after registration handled from the same dashboard.", tags: ["Self-serve"] },
  { t: "Get rid of multiple contact points", d: "One consultant on the record instead of a different person each time.", tags: ["One contact"] },
];

const STEPS = [
  { t: "Get your business name approved", d: "We will check the availability of your business name and submit it to the Registrar of Companies for approval. The final approval is issued by the Registrar." },
  { t: "Submit your company details", d: "Fill in and submit your company details, and let the team prepare the registration documents for you to sign. This includes Forms 01, 18 and 19." },
  { t: "Get your articles of association", d: "Let the team prepare customised Articles of Association for your company, based on your business objectives." },
  { t: "Prepare your bank documents", d: "Once the company is approved, we will help you prepare the bank documents your selected bank requires." },
  { t: "Make sure you're compliant", d: "We will help you ensure that you're conducting your business according to Sri Lankan law." },
];

const NEED_COMPANY = [
  "Name of your business",
  "Activities the company will undertake",
  "Permanent address of the business",
  "Grama seva division of the business",
  "The email address of the company",
];
const NEED_SHAREHOLDER = [
  "Distribution of shares",
  "Full names of shareholders",
  "Permanent addresses of shareholders",
  "Contact details of shareholders",
  "NIC/passport copies of shareholders",
];
const NEED_DIRECTOR = [
  "Number of directors",
  "Full names of directors",
  "Permanent addresses of directors",
  "Contact details of the directors",
  "NIC/passport (scans) of directors",
];

const ADVANTAGE = [
  { t: "We will keep you educated and up-to-date", d: "Stay educated about your finances and bookkeeping through our educational videos and blogs.", tags: ["Videos", "Blog"] },
  { t: "Access tax calculators and accounting tools", d: "Access easy-to-follow tools and calculators to know about your taxes and employee salary slips.", tags: ["Calculators"] },
  { t: "We are your integrated, one stop solution", d: "All in one support system for your growing business. Get access to our lawyers, bookkeepers and more.", tags: ["One stop"] },
  { t: "We are the most affordable service provider", d: "Don't worry about outright payments. Choose from our instalment plans and pay as you earn.", tags: ["Instalments"] },
];



const SECRETARY = [
  "Change company name & address",
  "Annual report",
  "Amend your articles of association",
  "Issue of shares",
  "Transfer of shares",
  "Change company secretary",
  "Add or remove company directors",
];

const REVIEWS = [
  { q: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { q: "Thanks you simplebooks team for the amazing support on my company registration. Givantha, Moiz and other team members were very helpful.", name: "NAWRAN", role: "Director, Social Media Academy" },
  { q: "I've registered over 10 businesses with Simplebooks over the years and I would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
];

function NeedPanel({ label, items }: { label: string; items: string[] }) {
  return (
    <article className="v2_card v2_reveal">
      <div className="v2_card_top">
        <span className="v2_card_num">{label}</span>
      </div>
      <ul className="v2_plan_list" style={{ margin: 0 }}>
        {items.map((i) => (
          <li key={i}>
            <span className="v2_mark v2_mark_good">✓</span>
            {i}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function RegisterACompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Business registration"
        title="Register your business with us today"
        lead="We'll guide you through the entire process. Register with an experienced team of company secretaries who have successfully helped over 10000+ business owners before you."
        primary={{ label: "Get a free consultation", href: "#consultation" }}
        secondary={{ label: "Sign up for free", href: "https://dashboard.simplebooks.com" }}
        stats={[
          { n: "10000+", l: "Businesses registered" },
          { n: "5–6 weeks", l: "Subject to Registrar approval" },
          { n: "4.9★", l: "Across 1400+ Google reviews" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The dashboard"
            title="Introducing the Simplebooks dashboard"
            lead="Make an account for zero cost and get started on your online journey to register your company."
          />
          <FeatureGrid items={DASH} cols={3} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Register your business today"
            lead="Take a look at our guided process."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="What we need"
            title="The details we need from you to get started"
          />
          <div className="v2_cards v2_cards_3">
            <NeedPanel label="Company" items={NEED_COMPANY} />
            <NeedPanel label="Shareholder" items={NEED_SHAREHOLDER} />
            <NeedPanel label="Director" items={NEED_DIRECTOR} />
          </div>
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The advantage"
            title="The Simplebooks business registration advantage"
            lead="We have helped over 10000+ business owners. Register with included services that carry on long after the certificate arrives."
          />
          <FeatureGrid items={ADVANTAGE} cols={4} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Pricing" title="Get the most affordable rates" />
          <RegistrationPricing />
          <p className="v2_price_note">Add the annual secretary service for Rs 15,000, covering company name and address changes, annual report, amendments to your articles, share issues and transfers, secretary changes and director changes.</p>
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Annual secretary service"
            title="What the Rs 15,000 covers"
          />
          <div className="v2_cards v2_cards_3">
            <article className="v2_card v2_reveal" style={{ gridColumn: "1 / -1" }}>
              <ul className="v2_plan_list" style={{ margin: 0, columnCount: 2, columnGap: 40 }}>
                {SECRETARY.map((i) => (
                  <li key={i} style={{ breakInside: "avoid" }}>
                    <span className="v2_mark v2_mark_good">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="v2_price_note">Note: Government charges will be applied for each change.</p>
        </div>
      </section>

      <ServiceJourney />

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="What founders say" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Start your company registration today"
        lead="Thirty minutes with a consultant who has done this several thousand times. No obligation, no sales script."
        primary={{ label: "Get a free consultation", href: "#consultation" }}
        secondary={{ label: "Check a company name", href: "/srilanka/company-name-check" }}
      />

      <LeadForm source="/srilanka/services/register-a-company" {...leadFormFor("/srilanka/services/register-a-company")!} />

    </PageShell>
  );
}
