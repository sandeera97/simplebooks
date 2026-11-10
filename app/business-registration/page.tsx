import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import RegistrationPricing from "@/components/business-registration/RegistrationPricing";
import {
  PageHero, SecHead, FeatureGrid, Steps, CheckSplit, Faq, CtaBand, ReviewStrip,
} from "@/components/v2/blocks";

export const metadata: Metadata = pageMetadata("/business-registration");

const WHY = [
  { t: "Instant company name check", d: "Check if your company name is available in seconds, before you commit to anything." , tags: ["ROC search", "Instant"] },
  { t: "Real-time progress tracking", d: "You stay informed at every stage, with no chasing updates or guessing what comes next.", tags: ["Dashboard", "Status"] },
  { t: "Digital signing & upload", d: "Upload and sign your documents online. Fast, secure and hassle-free.", tags: ["E-sign", "Secure"] },
  { t: "Simple, guided forms", d: "Fill in your company details step by step with clear guidance at every stage.", tags: ["Guided", "No jargon"] },
];

const STEPS = [
  { t: "Check your name", d: "Search the ROC register from your dashboard and reserve a name that is actually available." },
  { t: "Fill the guided forms", d: "Company details, directors and shareholders, step by step. We review everything before filing." },
  { t: "Sign digitally", d: "Upload and sign your incorporation documents online. No printing, no courier, no queue." },
  { t: "Receive your certificate", d: "We file with the ROC and your certificate lands in your dashboard, ready for the bank." },
];

const INCLUDED = [
  { t: "Invoicing & purchase tool", d: "In the Simplebooks dashboard. Rs 14,400 value, free for 12 months." },
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

const REVIEWS = [
  { q: "Thanks to Simplebooks team for the amazing support on my company registration. Very helpful and quick service!", name: "NAWRAN", role: "Director, Social Media Academy" },
  { q: "They explained every step of the way. I deeply appreciate their professionality. Highly recommend!", name: "Ratta", role: "Founder, Studio Ratta" },
  { q: "SUPERB! I highly recommend this place to everyone. simplebooks makes starting a business so easy! 😍", name: "Chanux Bro", role: "Director" },
];

const FAQS = [
  { q: "How long does registration take?", a: "Most registrations are completed within 5–6 working weeks, subject to the Registrar's approval. We keep you updated at every stage through your dashboard." },
  { q: "What is the minimum number of directors?", a: "A private limited company needs at least one director. A public company needs a minimum of two." },
  { q: "Do I need an office address to register?", a: "It isn't necessary to have a separate office when starting out. You can register at your residential address and change it later if you need to." },
  { q: "Can a foreigner own 100% of the company?", a: "Yes, for most business categories. Some sectors are restricted or need BOI approval, and we'll flag that on your first call." },
  { q: "Do I need a company secretary?", a: "Yes. Every company registered with the ROC must have a company secretary. As a registered secretary, Simplebooks acts as yours." },
  { q: "What does the government fee cover?", a: "The ROC charges a separate incorporation fee, and an additional Rs 2,900 applies for each extra director beyond the standard filing." },
];

export default function BusinessRegistrationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Business registration"
        title="Register your business in Sri Lanka, entirely online"
        lead="Launch with zero hassle. We handle the whole registration, from name approval to certificate, so you can get on with the business."
        primary={{ label: "Start registration", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to an expert", href: "#consultation" }}
        note="No paperwork. No queues. No confusion."
        stats={[
          { n: "10000+", l: "Companies registered" },
          { n: "5–6 weeks", l: "Subject to Registrar approval" },
          { n: "4.9★", l: "Across 1400+ Google reviews" },
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
            cta={{ label: "Start your registration", href: "https://dashboard.simplebooks.com" }}
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
            lead="Register with us and you also get the secretarial service, with everything from invoicing to deadline tracking."
          />
          <FeatureGrid items={INCLUDED} cols={3} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          {/* The same three packages as the live page and /srilanka/services/register-a-company. */}
          <SecHead eyebrow="Pricing" title="Get the most affordable rates" />
          <RegistrationPricing />
          <p className="v2_price_note">
            Add the annual secretary service for Rs 15,000, covering company name and address changes, annual report,
            amendments to your articles, share issues and transfers, secretary changes and director changes. Government
            charges will be applied for each change, and an additional Rs 2,900 government fee applies for each extra director.
          </p>
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
        primary={{ label: "Set up a free consultation", href: "#consultation" }}
        secondary={{ label: "Check a company name", href: "/srilanka/company-name-check" }}
      />

      <LeadForm source="/business-registration" {...leadFormFor("/business-registration")!} />

    </PageShell>
  );
}
