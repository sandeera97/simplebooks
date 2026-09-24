import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, CheckSplit, Faq, CtaBand, ReviewStrip,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Invoicing Streamlined, Payments Boosted | Simplebooks",
  description:
    "Create professional invoices, send them in seconds and get paid faster with the Simplebooks dashboard. Free for two months, no credit card required.",
};

const FEATURES = [
  { t: "Create and customise invoices", d: "Maintaining your brand image by sending professional invoices matters. Set your logo, colours and terms once.", tags: ["Branded", "Templates"] },
  { t: "Send them effortlessly", d: "Email an invoice straight from the dashboard, or share a payment link over WhatsApp in a couple of taps.", tags: ["Email", "WhatsApp"] },
  { t: "Get paid faster", d: "Online payment links, automatic reminders and a clear record of who has paid and who hasn't.", tags: ["Reminders", "Payment links"] },
  { t: "Track every receipt", d: "Purchases and expenses sit alongside your invoices, so your books are half-done before your accountant asks.", tags: ["Purchases", "Expenses"] },
];

const STEPS = [
  { t: "Set up your details", d: "Add your logo, address and payment terms once. Every invoice after that is pre-filled." },
  { t: "Create the invoice", d: "Pick the customer, add the lines, and the totals and taxes calculate themselves." },
  { t: "Send and get paid", d: "Email or WhatsApp it with a payment link, then watch the status change from sent to paid." },
];

const WHY = [
  "Free for the first two months, no credit card required",
  "Your invoices carry your branding, not ours",
  "Automatic reminders chase the invoice so you don't have to",
  "Everything syncs with bookkeeping, payroll and tax in the same dashboard",
  "Support in Sinhala, English or Tamil when you need a hand",
];

const ALSO = [
  { t: "Bookkeeping", d: "Experience pain-free accounting with the Simplebooks dashboard." },
  { t: "Payroll", d: "Digitise your payroll and pay salaries on time with Simplebooks Payroll." },
  { t: "Tax", d: "Sign up on the Simplebooks dashboard and file your taxes online." },
];

const REVIEWS = [
  { q: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { q: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.", name: "Damith Menaka", role: "Director, Animspire" },
  { q: "I've registered over 10 businesses with Simplebooks over the years and I would recommend them every step of the way.", name: "Bhanuka Harischandra", role: "Founder, Surge Global" },
];

const FAQS = [
  { q: "Is it really free for two months?", a: "Yes — full access to invoicing for two months, no credit card required. You only decide whether to continue at the end of the trial." },
  { q: "Can I use my own branding?", a: "Yes. Upload your logo and set your colours and payment terms once, and every invoice you send carries them." },
  { q: "Can my customers pay online?", a: "Yes. Invoices can carry a payment link, and the dashboard marks them paid automatically when the money lands." },
  { q: "Does it handle VAT?", a: "It does. Set your VAT registration once and the tax lines are calculated and shown correctly on every invoice." },
  { q: "Can I export my data?", a: "Any time. Invoices, purchases and customer records can be exported, and your accountant can be given their own access." },
];

export default function InvoicingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Invoicing"
        title="Invoicing streamlined, payments boosted"
        lead="Create professional invoices and get paid faster, from a dashboard your whole team can actually use."
        primary={{ label: "Try free for 2 months", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
        note="Full access for free. No credit card required."
        stats={[
          { n: "5,000+", l: "Businesses in Sri Lanka" },
          { n: "2 months", l: "Free, no card needed" },
          { n: "4.9★", l: "Across 400+ reviews" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="What you get"
            title="Everything an invoice needs to do"
            lead="From the first draft to the money landing in your account."
          />
          <FeatureGrid items={FEATURES} cols={4} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="How it works" title="Three steps to getting paid" />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="Why simplebooks"
            title="Your shortcut to smooth payments"
            lead="Invoicing is where most small businesses lose time and money. This is the part we made boring on purpose."
            items={WHY}
            cta={{ label: "Start free", href: "https://dashboard.simplebooks.com" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">Recent invoices</p>
                <div className="v2_panel_row"><b>INV-0184 · Ceylon Tea Co.</b><span className="ok">Paid</span></div>
                <div className="v2_panel_row"><b>INV-0183 · Lanka Digital</b><span className="ok">Paid</span></div>
                <div className="v2_panel_row"><b>INV-0182 · Surge Global</b><span>Sent</span></div>
                <div className="v2_panel_row"><b>INV-0181 · Studio Ratta</b><span>Reminder sent</span></div>
                <div className="v2_panel_row"><b>INV-0180 · Animspire</b><span className="ok">Paid</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead
            eyebrow="One dashboard"
            title="What else you can do here"
            lead="Invoicing is one tool in the dashboard. The rest of your admin lives beside it."
          />
          <FeatureGrid items={ALSO} cols={3} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="Trusted by 5,000 Sri Lankan businesses" />
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
        title="Get started with Simplebooks invoicing"
        lead="Full access to every feature for two months. See the difference it makes before you pay anything."
        primary={{ label: "Create your account", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
      />
    </PageShell>
  );
}
