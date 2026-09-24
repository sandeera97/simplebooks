import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, CheckSplit, Faq, CtaBand, ReviewStrip,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "All-in-One Accounting Tool | Simplebooks",
  description:
    "Manage invoices, expenses and financial records securely, and generate the reports that guide smart business decisions — all in one tool.",
};

const STEPS = [
  { t: "Record your transactions", d: "Income, expenses, invoices and purchases, captured as they happen rather than at year end." },
  { t: "Reconcile accounts", d: "Match your bank statements and track cash flow in real time, without a spreadsheet in sight." },
  { t: "Generate reports", d: "P&L, balance sheet and transaction reports on demand — the numbers a lender or investor asks for." },
];

const COVERED = [
  { t: "Invoices and purchases", d: "Sales and bills in one ledger, so your revenue and costs are never in two different places.", tags: ["Sales", "Bills"] },
  { t: "Bank reconciliation", d: "Match transactions against your statement and see exactly what is unreconciled.", tags: ["Statements", "Cash flow"] },
  { t: "Financial reports", d: "Profit and loss, balance sheet and transaction detail, generated the moment you need them.", tags: ["P&L", "Balance sheet"] },
  { t: "Expert support included", d: "Real accountants on the other end when the books don't look the way you expect.", tags: ["Accountants", "Support"] },
];

const WHY = [
  "Save time — the records build themselves as you work",
  "Accuracy you can defend to a bank or an auditor",
  "Expert support included, not billed by the hour",
  "Reports ready whenever a lender or investor asks",
  "Works alongside invoicing, payroll and tax in one dashboard",
];

const REVIEWS = [
  { q: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { q: "They took the time to explain what they were doing every step of the way. I recommend simplebooks to anyone.", name: "Ratta", role: "Founder, Studio Ratta" },
  { q: "I have worked with Simplebooks for several years and I'm quite happy about their attention to detail and pricing.", name: "Kalana Muthumuni", role: "" },
];

const FAQS = [
  { q: "Do I need accounting knowledge to use it?", a: "No. The tool is built around what a business owner actually does — raise an invoice, record a bill, match the bank. The accounting happens underneath." },
  { q: "Can my accountant use it too?", a: "Yes. You can give your accountant their own access, so they work in the same records instead of asking you for exports." },
  { q: "Does it produce reports my bank will accept?", a: "Yes. Profit and loss, balance sheet and transaction reports are generated in standard formats that banks and lenders are used to seeing." },
  { q: "Can I import my existing records?", a: "You can. Tell us what you're coming from and we'll help you bring your opening balances and history across." },
  { q: "Is my financial data secure?", a: "Data is encrypted and access is limited to you and anyone you explicitly invite. We never share your records outside your company." },
];

export default function AccountingToolPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Accounting tool"
        title="All-in-one accounting that simplifies your business"
        lead="Manage invoices, expenses and financial records securely, and generate the reports that guide smart decisions — all in one tool."
        primary={{ label: "Explore the dashboard", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
        stats={[
          { n: "5,000+", l: "Businesses in Sri Lanka" },
          { n: "3 clicks", l: "To a full report" },
          { n: "4.9★", l: "Across 400+ reviews" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="What we cover"
            title="We've got you covered"
            lead="The whole cycle, from the first invoice to the year-end report."
          />
          <FeatureGrid items={COVERED} cols={4} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Three clicks to financial clarity"
            lead="Record, reconcile, report. That's the whole loop."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="Why simplebooks"
            title="Effortless accounting, expert backup"
            lead="Save time, simplify your finances and keep the numbers accurate — with real accountants included rather than billed separately."
            items={WHY}
            cta={{ label: "Start free", href: "https://dashboard.simplebooks.com" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">This month</p>
                <div className="v2_panel_row"><b>Income recorded</b><span>Rs 1,840,000</span></div>
                <div className="v2_panel_row"><b>Expenses recorded</b><span>Rs 1,120,000</span></div>
                <div className="v2_panel_row"><b>Bank reconciled</b><span className="ok">100%</span></div>
                <div className="v2_panel_row"><b>Unmatched items</b><span className="ok">0</span></div>
                <div className="v2_panel_row"><b>P&amp;L ready</b><span className="ok">Yes</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead eyebrow="Customers" title="Trusted by 5,000 Sri Lankan businesses" />
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
        title="Put your books on autopilot"
        lead="Join over 5,000 Sri Lankan businesses that trust us to keep their numbers straight."
        primary={{ label: "Explore the dashboard", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
      />
    </PageShell>
  );
}
