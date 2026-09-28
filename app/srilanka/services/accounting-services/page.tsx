import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import LeadForm from "@/components/v2/LeadForm";
import { leadFormFor } from "@/lib/leadForms";
import {
  PageHero, SecHead, Steps, FeatureGrid, CheckSplit, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Bookkeeping & Accounting Services | Simplebooks",
  description:
    "A professional bookkeeper on call at an affordable price. Get powerful insights about your business and grow the right way.",
};

const STEPS = [
  { t: "Tell us about your business", d: "What you do, how you bill, and where your records live today." },
  { t: "Migrate your documents", d: "We move your existing paperwork across so nothing starts from zero." },
  { t: "We'll process your paperwork", d: "Your dedicated bookkeeper works through the records each month." },
  { t: "Deliver tax ready financials", d: "Financials prepared so tax season is a formality, not a scramble." },
  { t: "Bookkeeping meetings", d: "Regular check-ins to walk through your numbers with a real person." },
  { t: "Help you with taxation", d: "We carry the same records straight into your tax filing." },
];

const WHY = [
  { t: "Incredibly affordable", d: "We're incredibly affordable for new businesses.", tags: ["Affordable"] },
  { t: "One on one support", d: "We provide one on one support for whenever you need us.", tags: ["1-to-1"] },
  { t: "One stop solution", d: "We're a one stop solution for all your financial and legal needs.", tags: ["All in one"] },
  { t: "Online processes", d: "Go paperless and transition seamlessly into our online processes.", tags: ["Paperless"] },
];

const NEED = [
  "Invoices",
  "Invoice receipts",
  "Payroll details",
  "Bill payments",
  "Bills",
  "Petty cash expenses",
  "Bank statements",
];

const REVIEWS = [
  { q: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { q: "I have worked with Simplebooks team for several years and I'm quite happy about their attention to detail, follow-ups and overall knowledge of the field and pricing.", name: "Kalana Muthumuni", role: "" },
  { q: "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone in need of the services they provide.", name: "Ratta", role: "Founder, Studio Ratta" },
];

export default function BookkeepingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Bookkeeping"
        title="Don't worry about bookkeeping and accounting services"
        lead="We'll take care of it for you. A professional bookkeeper on call at an affordable price. Get powerful insights about your business and grow the right way."
        primary={{ label: "Get a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See the dashboard", href: "/srilanka/dashboard/accounting-tool" }}
        note="24-7 bookkeeping and accounting services."
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="A clearly defined, transparent process"
            lead="Don't worry about complex bookkeeping or accounting processes anymore. Enjoy the luxury of a dedicated bookkeeper for your company at an affordable price point."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The advantage"
            title="A stress free tax season"
            lead="Focus on growing your business. Let us worry about tax season — from preparing your documentation to meeting your tax deadlines."
          />
          <FeatureGrid items={WHY} cols={4} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="What we need"
            title="What does Simplebooks need from you"
            lead="Let our team comb through your paperwork and organise your books. We'll pair you up with an experienced bookkeeper based on your unique needs."
            items={NEED}
            cta={{ label: "Contact our team", href: "/srilanka/contact" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">Accounting software we work with</p>
                <div className="v2_panel_row"><b>QuickBooks</b><span className="ok">Supported</span></div>
                <div className="v2_panel_row"><b>Zoho Books</b><span className="ok">Supported</span></div>
                <div className="v2_panel_row"><b>Xero</b><span className="ok">Supported</span></div>
                <div className="v2_panel_row"><b>Simplebooks dashboard</b><span className="ok">Included</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="Hear more success stories" />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Want a quotation for your books"
        lead="Get in touch with our team today and we'll price it around what your business actually needs."
        primary={{ label: "Talk to the team", href: "/srilanka/contact" }}
        secondary={{ label: "See all services", href: "/srilanka/services" }}
      />

      <LeadForm source="/srilanka/services/accounting-services" {...leadFormFor("/srilanka/services/accounting-services")!} />

    </PageShell>
  );
}
