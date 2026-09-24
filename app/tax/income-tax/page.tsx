import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, Steps, FeatureGrid, CheckSplit, Pricing, Faq, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Income Tax Filing | Simplebooks",
  description:
    "Upload your forms, answer a few simple questions, and get your tax return done — 100% accurate with all eligible deductions applied, and expert support every step of the way.",
};

const STEPS = [
  { t: "Quick pick", d: "Select your sources of income — salary, freelance, or other." },
  { t: "Review your computation", d: "Get a clear breakdown and advice from our human experts." },
  { t: "File your tax return", d: "Get your return manually reviewed before you file." },
];

const WHY = [
  { t: "Stop overpaying for tax help", d: "File your taxes confidently without spending thousands on third-party consultants.", tags: ["Fixed fee"] },
  { t: "See everything, understand everything", d: "You'll always know exactly how your return is calculated — no mystery steps, no confusing math.", tags: ["Transparent"] },
  { t: "Real support from real experts", d: "Got a question? Our expert team is just a click away via live chat, phone, or email.", tags: ["Live chat", "Phone"] },
  { t: "Smarter deductions, bigger savings", d: "We'll automatically apply the right deductions so you don't miss out on money that's yours.", tags: ["Deductions"] },
];

const FEATURES = [
  "Getting started is easy — just answer a few simple questions",
  "Snap, upload, done — send your forms as photos",
  "Expert support, every step of the way",
  "Always IRD-compliant",
  "No tax knowledge? No problem",
  "Submit your return online",
];

const PLANS = [
  {
    name: "Income tax return",
    price: "Rs. 4,999",
    blurb: "Regular price Rs. 20,000. Instant tax results, real human review, IRD e-filing — all inclusive, no hidden fees.",
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
  { q: "SUPERB!!! I highly recommend this place to everyone. Starting my business was the easiest thing — SimpleBooks handled the whole process with just a few emails 😍", name: "Chanux Bro", role: "Director, Chanux Bro" },
  { q: "Excellent and stress-free experience. The team guided me through my tax filing and answered every question patiently. Highly recommended!", name: "Damith Menaka", role: "Director, Animspire" },
  { q: "Fast, professional and transparent. I finally understand my own taxes. Will use Simplebooks again next year for sure.", name: "Sandul Perera", role: "Director" },
];

const FAQS = [
  { q: "Is this IRD compliant?", a: "Yes. Every return is prepared to IRD requirements and filed through IRD e-filing. Our tax advisors have filed over 2,500 returns for Sri Lankans." },
  { q: "Do I need tax knowledge to use it?", a: "No. You answer a few plain questions about your income and we handle the computation, the rules and the filing." },
  { q: "What if I need help?", a: "Our expert team is a click away via live chat, phone or email, and a human reviews your return before it is filed." },
  { q: "Can I upload my T-10 forms?", a: "Yes. Snap a photo or upload the file — we read the figures off it so you don't have to retype anything." },
  { q: "Will it help with deductions?", a: "Yes. We automatically apply the deductions you're entitled to, so you don't miss out on money that's yours." },
  { q: "Can I use this if I'm self-employed or have foreign income?", a: "Yes. Select those as your income sources at the start and we handle the relevant rules, including foreign income and any relief you're due." },
];

export default function IncomeTaxPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Income tax"
        title="File your own taxes with confidence"
        lead="Upload your forms, answer a few simple questions, and get your tax return done — 100% accurate with all eligible deductions applied, and expert support by your side every step of the way."
        primary={{ label: "Get free computation", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
        note="No credit card until final review."
        stats={[
          { n: "1,000+", l: "Individuals in Sri Lanka" },
          { n: "2,500+", l: "Returns filed by our advisors" },
          { n: "4.9★", l: "Google rating" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="WhatsApp assistant"
            title="Sri Lanka's first free AI-powered WhatsApp tax assistant"
            lead="Chat with our AI, get your computations, file your taxes and much more — all from your WhatsApp."
            items={[
              "Built with 1,000+ pages of tax rules and gazettes",
              "Updated with the latest information",
              "Verified by certified tax advisors at Simplebooks",
              "Our advisors have filed over 2,500 returns for Sri Lankans",
            ]}
            cta={{ label: "Try now for free", href: "https://wa.me/94117555878" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">What it knows</p>
                <div className="v2_panel_row"><b>Tax rules &amp; gazettes</b><span>1,000+ pages</span></div>
                <div className="v2_panel_row"><b>Returns filed</b><span>2,500+</span></div>
                <div className="v2_panel_row"><b>Verified by</b><span>Certified advisors</span></div>
                <div className="v2_panel_row"><b>Cost</b><span className="ok">Free</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Three simple steps to file your tax return"
            lead="Just answer a few simple questions — we'll take care of the rest."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="Do your taxes right"
            title="Without the stress"
            lead="From answering your questions along the way to a final review before you file, our experts ensure your return is 100% accurate."
            items={FEATURES}
            cta={{ label: "Book a demo now", href: "/srilanka/contact" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">Your return</p>
                <div className="v2_panel_row"><b>Guided questions</b><span className="ok">Answered</span></div>
                <div className="v2_panel_row"><b>Deductions applied</b><span className="ok">Automatic</span></div>
                <div className="v2_panel_row"><b>Human review</b><span className="ok">Before filing</span></div>
                <div className="v2_panel_row"><b>IRD e-filing</b><span className="ok">Included</span></div>
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
            lead="Instant tax results, real human review, IRD e-filing — all inclusive, no hidden fees."
          />
          <Pricing plans={PLANS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Why simplebooks"
            title="File right, save more"
            lead="With clear steps and expert support."
          />
          <FeatureGrid items={WHY} cols={4} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="Real people, real results" />
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
        title="File your taxes today"
        lead="See your computation before you pay anything. If it doesn't look right, a human will walk you through it."
        primary={{ label: "Start your tax filing now", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
      />
    </PageShell>
  );
}
