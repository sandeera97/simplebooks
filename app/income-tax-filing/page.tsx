import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, CheckSplit, Pricing, Faq, CtaBand, ReviewStrip,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "File Your Own Taxes with Confidence | Simplebooks",
  description:
    "Answer a few simple questions and file an accurate return with every eligible deduction applied — reviewed by a human before it goes to the IRD.",
};

const STEPS = [
  { t: "Quick pick", d: "Select your sources of income — salary, freelance, rent or other. That's the whole questionnaire." },
  { t: "Review your computation", d: "Get a clear breakdown of how the figure was reached, with advice from our human experts." },
  { t: "File your return", d: "Your return is manually reviewed before it goes anywhere, then filed with the IRD." },
];

const WHY = [
  { t: "Stop overpaying for tax help", d: "File confidently without spending thousands on a third-party consultant every year.", tags: ["Fixed fee"] },
  { t: "See everything, understand everything", d: "You always know exactly how your return is calculated — no mystery steps, no confusing math.", tags: ["Transparent"] },
  { t: "Real support from real experts", d: "Got a question? Our team is a click away via live chat, phone or email.", tags: ["Live chat", "Phone"] },
  { t: "Smarter deductions", d: "We apply the right deductions automatically, so you don't miss out on money that's yours.", tags: ["Deductions"] },
];

const INCLUDED = [
  "Instant tax computation as you answer",
  "A real human reviews the return before filing",
  "IRD e-filing handled for you",
  "Every eligible deduction applied automatically",
  "All-inclusive — no hidden fees",
];

const PLANS = [
  {
    name: "Income tax return",
    price: "Rs. 4,999",
    blurb: "Regular price Rs. 20,000. Instant tax results, real human review and IRD e-filing.",
    features: [
      "Instant tax results",
      "Real human review",
      "IRD e-filing",
      "All-inclusive — no hidden fees",
    ],
    featured: true,
    cta: "Begin filing your return",
  },
];

const REVIEWS = [
  { q: "SUPERB!!! Starting my business was the easiest thing — Simplebooks handled the whole process with just a few emails 😍", name: "Chanux Bro", role: "Director" },
  { q: "Very good service, very happy with your assistance.", name: "Cricketer Jeevan Mendis", role: "Director" },
  { q: "Fast, professional and transparent. I finally understand my own taxes. Will use Simplebooks again next year.", name: "Osanda Gamage", role: "Founder" },
];

const FAQS = [
  { q: "Who needs to file an income tax return?", a: "If you have a tax file, or your assessable income crosses the threshold for the year of assessment, you're required to file — even if tax was already deducted at source." },
  { q: "When is the deadline?", a: "Returns for a year of assessment are due by 30 November following the end of that year. Filing late attracts penalties, so we start reminding you well before." },
  { q: "Does a human actually check my return?", a: "Yes. Every return is manually reviewed by one of our tax people before it is filed. The tool does the arithmetic; a person checks the judgement calls." },
  { q: "What if I have foreign income?", a: "That's covered on the Assisted plan. We handle the foreign income rules and any double-tax relief you're entitled to." },
  { q: "What if my return is wrong?", a: "If we make an error we correct it and deal with the IRD on your behalf at no extra cost. That's what the review step is for." },
];

export default function TaxToolPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Tax tool"
        title="File your own taxes with confidence"
        lead="Answer a few simple questions — we take care of the rest. Your return is accurate, every eligible deduction applied, and a human checks it before it's filed."
        primary={{ label: "Start your return", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
        note="No credit card until final review."
        stats={[
          { n: "1,000+", l: "Individuals filed" },
          { n: "100%", l: "Human reviewed" },
          { n: "4.9★", l: "Across 400+ reviews" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Three simple steps to file"
            lead="Most people finish the questionnaire in under fifteen minutes."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Why simplebooks"
            title="File right, save more"
            lead="Clear steps, expert support, and no surprises on the invoice."
          />
          <FeatureGrid items={WHY} cols={4} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="What's included"
            title="Everything, in one fee"
            lead="From answering your questions along the way to a final review before you file, our experts make sure the return is right."
            items={INCLUDED}
            cta={{ label: "Start your return", href: "https://dashboard.simplebooks.com" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">Your computation</p>
                <div className="v2_panel_row"><b>Employment income</b><span>Rs 4,200,000</span></div>
                <div className="v2_panel_row"><b>Personal relief</b><span>Rs 1,200,000</span></div>
                <div className="v2_panel_row"><b>Qualifying payments</b><span>Rs 180,000</span></div>
                <div className="v2_panel_row"><b>Taxable income</b><span>Rs 2,820,000</span></div>
                <div className="v2_panel_row"><b>APIT already paid</b><span className="ok">Rs 246,000</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Pricing"
            title="Simple pricing, no surprises"
            lead="One fee, everything included. You only pay after you've seen your computation."
          />
          <Pricing plans={PLANS} note="Price is per year of assessment and includes IRD e-filing." />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="Real people, real results" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="Your questions, answered" title="Frequently asked questions" />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Get your return done properly this year"
        lead="See your computation before you pay anything. If it doesn't look right, a human will walk you through it."
        primary={{ label: "Start your return", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
      />
    </PageShell>
  );
}
