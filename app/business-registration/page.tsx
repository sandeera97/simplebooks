import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, CheckSplit, Pricing, Faq, CtaBand, ReviewStrip,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Register Your Business in Sri Lanka — 100% Online | Simplebooks",
  description:
    "Launch your business with zero hassle. Simplebooks handles your entire company registration — from name approval to certification — so you can focus on what matters.",
};

const WHY = [
  { t: "Instant company name check", d: "Check if your company name is available in seconds, before you commit to anything." , tags: ["ROC search", "Instant"] },
  { t: "Real-time progress tracking", d: "You stay informed at every stage — no chasing updates or guessing what comes next.", tags: ["Dashboard", "Status"] },
  { t: "Digital signing & upload", d: "Upload and sign your documents online — fast, secure, and hassle-free.", tags: ["E-sign", "Secure"] },
  { t: "Simple, guided forms", d: "Fill in your company details step by step with clear guidance at every stage.", tags: ["Guided", "No jargon"] },
];

const STEPS = [
  { t: "Check your name", d: "Search the ROC register from your dashboard and reserve a name that is actually available." },
  { t: "Fill the guided forms", d: "Company details, directors and shareholders, step by step. We review everything before filing." },
  { t: "Sign digitally", d: "Upload and sign your incorporation documents online. No printing, no courier, no queue." },
  { t: "Receive your certificate", d: "We file with the ROC and your certificate lands in your dashboard, ready for the bank." },
];

const INCLUDED = [
  { t: "Invoicing & purchase tool", d: "In the Simplebooks dashboard — Rs 14,400 value, free for 12 months." },
  { t: "TIN registration", d: "Rs 7,500 value, included with your registration." },
  { t: "Payroll tool", d: "In the Simplebooks dashboard, free for 6 months." },
  { t: "Integrated with PAYable", d: "First-year subscription fee waived off." },
  { t: "Loku Business Course", d: "20% off courses to improve your management and marketing skills." },
  { t: "Domain names", d: "Get your domains checked and purchased with exclusive discounts." },
];

const NEED = [
  "Proposed company name (and two alternates)",
  "Full names and NICs of all directors",
  "Full names and NICs of all shareholders, with share split",
  "Registered business address",
  "A brief description of what the business does",
];

const PLANS = [
  {
    name: "Basic",
    price: "Rs 19,000",
    per: "/ year",
    blurb: "Registration at cost, with secretarial service billed monthly.",
    features: ["Company incorporation", "Company secretary for 12 months", "Annual return filing", "Rs 1,583 per month"],
  },
  {
    name: "Premium",
    price: "Rs 15,000",
    per: "/ year",
    blurb: "Our most popular plan — better rate, all the perks.",
    features: ["Everything in Basic", "Rs 1,250 per month", "Invoicing tool free for 12 months", "TIN registration included", "Payroll tool free for 6 months"],
    featured: true,
  },
  {
    name: "Premium Pro",
    price: "Talk to us",
    blurb: "For groups, multiple entities and foreign shareholding.",
    features: ["Everything in Premium", "Foreign shareholding support", "Multiple entity discounts", "Dedicated consultant"],
    cta: "Talk to a consultant",
  },
];

const REVIEWS = [
  { q: "Thanks to Simplebooks team for the amazing support on my company registration. Very helpful and quick service!", name: "NAWRAN", role: "Director, Social Media Academy" },
  { q: "They explained every step of the way. I deeply appreciate their professionality. Highly recommend!", name: "Ratta", role: "Founder, Studio Ratta" },
  { q: "SUPERB! I highly recommend this place to everyone. simplebooks makes starting a business so easy! 😍", name: "Chanux Bro", role: "Director" },
];

const FAQS = [
  { q: "How long does registration take?", a: "Most registrations are completed within 3–5 working days once we have your documents and the ROC approves your company name. We keep you updated at every stage through your dashboard." },
  { q: "What is the minimum number of directors?", a: "A private limited company needs at least one director. A public company needs a minimum of two." },
  { q: "Do I need an office address to register?", a: "It isn't necessary to have a separate office when starting out — you can register at your residential address and change it later if you need to." },
  { q: "Can a foreigner own 100% of the company?", a: "Yes, for most business categories. Some sectors are restricted or need BOI approval — we'll flag that on your first call." },
  { q: "Do I need a company secretary?", a: "Yes. Every company registered with the ROC must have a company secretary. As a registered secretary, Simplebooks acts as yours." },
  { q: "What does the government fee cover?", a: "The ROC charges a separate incorporation fee, and an additional Rs 2,900 applies for each extra director beyond the standard filing." },
];

export default function BusinessRegistrationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Business registration"
        title="Register your business in Sri Lanka, entirely online"
        lead="Launch with zero hassle. We handle the whole registration — name approval to certificate — so you can get on with the business."
        primary={{ label: "Start registration", href: "/srilanka/contact" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
        note="No paperwork. No queues. No confusion."
        stats={[
          { n: "4,500+", l: "Companies registered" },
          { n: "3–5 days", l: "Typical turnaround" },
          { n: "4.9★", l: "Across 400+ reviews" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Why simplebooks"
            title="Registration shouldn't be complicated"
            lead="We combine technology with expert review, so you register the right way the first time."
          />
          <FeatureGrid items={WHY} cols={4} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="How it works" title="Four steps, start to certificate" />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="What we'll need"
            title="Information we'll ask you for"
            lead="To keep the filing smooth we'll request the following. We guide you on what to submit and review everything before it goes to the ROC."
            items={NEED}
            cta={{ label: "Start your registration", href: "/srilanka/contact" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">Registration progress</p>
                <div className="v2_panel_row"><b>Name approval</b><span className="ok">Approved</span></div>
                <div className="v2_panel_row"><b>Form 1 prepared</b><span className="ok">Signed</span></div>
                <div className="v2_panel_row"><b>Articles of association</b><span className="ok">Signed</span></div>
                <div className="v2_panel_row"><b>Filed with ROC</b><span>In review</span></div>
                <div className="v2_panel_row"><b>Certificate issued</b><span>Pending</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead
            eyebrow="What's included"
            title="More than just registration"
            lead="Register with us and you also get the secretarial service — everything from invoicing to deadline tracking."
          />
          <FeatureGrid items={INCLUDED} cols={3} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Pricing"
            title="Choose the plan that fits"
            lead="Registration is done at cost. What you pay for is the company secretary you're legally required to have."
          />
          <Pricing
            plans={PLANS}
            note="An additional Rs 2,900 government fee applies for each extra director. Flexible KOKO payment plans are available."
          />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="Our reviews" title="What founders say" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Your questions, answered" title="Frequently asked questions" />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Ready to register your company"
        lead="Thirty minutes with a consultant who has done this several thousand times. No obligation, no sales script."
        primary={{ label: "Set up a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "Check a company name", href: "/srilanka/company-name-check" }}
      />
    </PageShell>
  );
}
