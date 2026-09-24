import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, Steps, FeatureGrid, Pricing, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Register Your Business with Us | Simplebooks",
  description:
    "We'll guide you through the entire process. Register your company with an experienced team of company secretaries who have helped over 5,000 businesses.",
};

const DASH = [
  { t: "Hassle free business registration", d: "Make an account for zero cost and get started on your online journey to register your company.", tags: ["Free account"] },
  { t: "All your documents in one place", d: "Forms, articles and certificates stored together rather than scattered across email.", tags: ["One vault"] },
  { t: "Real-time status updates", d: "See exactly which stage your registration is at, without asking anyone.", tags: ["Live status"] },
  { t: "Make changes in a few clicks", d: "Company changes after registration handled from the same dashboard.", tags: ["Self-serve"] },
  { t: "Get rid of multiple contact points", d: "One consultant on the record instead of a different person each time.", tags: ["One contact"] },
];

const STEPS = [
  { t: "Approve your business name", d: "We will check the availability, reserve and approve your business name for you." },
  { t: "Submit your registration form", d: "Let the team fill out and submit your registration forms. This includes Form 01, 18 and 19." },
  { t: "Submit articles of association", d: "Get the team to help you create and submit your new company's articles of association." },
  { t: "Help open your bank accounts", d: "Once your company has been approved, we'll help you with opening your bank accounts." },
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

const PLANS = [
  {
    name: "Premium",
    price: "LKR 42,410",
    blurb: "Everything you need to incorporate, with the tools bundled in.",
    features: [
      "Name approval",
      "Articles of association",
      "Form 1, Form 18 and Form 19",
      "Certified Form 1 and articles of association",
      "Certified Form BO 1 and BO 5",
      "Corporate bank account",
      "Company incorporation advice",
      "Paper notice and gazette",
      "Free invoicing and purchase tool — 6 months (Rs 14,400 value)",
      "Free payroll tool — 4 months",
    ],
    featured: true,
  },
  {
    name: "Premium Pro",
    price: "LKR 47,410",
    blurb: "The full kit, with longer tool access and the company seals.",
    features: [
      "Everything in Premium",
      "Free invoicing and purchase tool — 12 months",
      "Free payroll tool — 6 months",
      "Free TIN registration (Rs 7,500 value)",
      "Share certificate, director seal and pre-ink seal",
      "Minute book and share register",
      "Integrated with PAYable — first-year fee waived",
      "20% off any individual Loku Business Course",
      "Domain names checked and purchased at a discount",
      "Discounted telemedicine via Flash Health, and Dialog Enterprise solutions",
    ],
  },
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
        lead="We'll guide you through the entire process. Register with an experienced team of company secretaries who have successfully helped over 5,000 others before you."
        primary={{ label: "Get a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "Sign up for free", href: "https://dashboard.simplebooks.com" }}
        stats={[
          { n: "5,000+", l: "Businesses registered" },
          { n: "3–5 days", l: "Typical turnaround" },
          { n: "4.9★", l: "Across 400+ reviews" },
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
            lead="We have helped over 5,000 others. Register with included services that carry on long after the certificate arrives."
          />
          <FeatureGrid items={ADVANTAGE} cols={4} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Pricing" title="Get the most affordable rates" />
          <Pricing
            plans={PLANS}
            note="Add the annual secretary service for Rs 15,000 — covering company name and address changes, annual report, amendments to your articles, share issues and transfers, secretary changes and director changes."
          />
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
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="What founders say" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Register your company this week"
        lead="Thirty minutes with a consultant who has done this several thousand times. No obligation, no sales script."
        primary={{ label: "Get started", href: "/srilanka/contact" }}
        secondary={{ label: "Check a company name", href: "/srilanka/company-name-check" }}
      />
    </PageShell>
  );
}
