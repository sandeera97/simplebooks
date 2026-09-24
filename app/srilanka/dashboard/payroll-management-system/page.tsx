import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, CheckSplit, Faq, CtaBand, ReviewStrip,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Payroll Made Simple | Simplebooks",
  description:
    "A guided payroll tool with a professional touch. EPF and ETF, payslips and bank files handled in full accordance with Sri Lankan labour law.",
};

const STEPS = [
  { t: "Enter data", d: "Our team enters your employee details into the system — you don't have to learn the software first." },
  { t: "Calculation", d: "The system calculates within five minutes, and our team of experts then verifies every figure." },
  { t: "Access reports", d: "Payroll summaries, cash requirements and EPF/ETF schedules, all in the tool." },
  { t: "Upload to the bank", d: "We upload the bank files and the EPF/ETF files to the relevant institutions for you." },
];

const FEATURES = [
  { t: "EPF and ETF handled", d: "Contributions calculated, scheduled and filed on time, every month, without you chasing the dates.", tags: ["EPF", "ETF"] },
  { t: "Payslips your team trusts", d: "Clear, itemised payslips delivered to each employee — no more spreadsheet emails.", tags: ["Payslips", "Email"] },
  { t: "Bonuses and adjustments", d: "One-off payments, arrears, no-pay and overtime handled without breaking the monthly run.", tags: ["Bonuses", "Overtime"] },
  { t: "Compliant by default", d: "In full accordance with Sri Lankan labour law and the Shop and Office Act.", tags: ["Labour law", "Shop & Office"] },
];

const WHY = [
  "A real team checks the numbers before anything is paid",
  "EPF and ETF filed on time, every month",
  "Bank upload files prepared and submitted for you",
  "Payslips your employees can actually read",
  "One month free, no credit card required",
];

const ALSO = [
  { t: "Bookkeeping", d: "Experience pain-free accounting with the Simplebooks dashboard." },
  { t: "Invoicing", d: "Save time and collect payments faster with Simplebooks Invoice." },
  { t: "Tax", d: "Sign up on the Simplebooks dashboard and file your taxes online." },
];

const REVIEWS = [
  { q: "What should you do after hiring employees? Simplebooks made the whole payroll side straightforward for us.", name: "Sandul Perera", role: "Director" },
  { q: "Very friendly and professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "NAWRAN", role: "Director, Social Media Academy" },
  { q: "I have worked with Simplebooks for several years and I'm quite happy about their attention to detail and follow-ups.", name: "Kalana Muthumuni", role: "" },
];

const FAQS = [
  { q: "What are the current EPF and ETF rates?", a: "EPF is 8% from the employee and 12% from the employer, and ETF is 3% from the employer. We apply the current rates automatically and update them when the law changes." },
  { q: "Do you file the returns as well?", a: "Yes. We prepare and submit the EPF and ETF returns and upload the bank files, so the whole monthly cycle is handled end to end." },
  { q: "How many employees can I run?", a: "There's no hard cap. Pricing scales with headcount, and the process is the same whether you have five people or five hundred." },
  { q: "What if someone joins or leaves mid-month?", a: "Tell us and we pro-rate it. Joiners, leavers, no-pay days and arrears are all handled inside the normal monthly run." },
  { q: "Is my employee data secure?", a: "Yes. Data is encrypted, access is restricted to the consultants working on your file, and nothing is shared outside your company." },
];

export default function PayrollPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Payroll"
        title="Payroll made simple, with a professional touch"
        lead="A guided payroll tool backed by a real team. You send the changes, we handle the calculations, the filings and the bank files."
        primary={{ label: "Try free for a month", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "Talk to an expert", href: "/srilanka/contact" }}
        note="Full access for free. No credit card required."
        stats={[
          { n: "5,000+", l: "Businesses in Sri Lanka" },
          { n: "5 min", l: "To calculate a run" },
          { n: "100%", l: "Labour-law compliant" },
        ]}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Don't worry about payroll anymore"
            lead="Four steps a month. Most of them are ours, not yours."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="What you get" title="Everything the monthly run needs" />
          <FeatureGrid items={FEATURES} cols={4} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="Why simplebooks payroll"
            title="Peace of mind on payday"
            lead="Payroll is the one thing you cannot get wrong. This is the part where a person checks the machine's work."
            items={WHY}
            cta={{ label: "Start free", href: "https://dashboard.simplebooks.com" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">March payroll run</p>
                <div className="v2_panel_row"><b>42 employees</b><span className="ok">Calculated</span></div>
                <div className="v2_panel_row"><b>Expert verification</b><span className="ok">Approved</span></div>
                <div className="v2_panel_row"><b>Payslips issued</b><span className="ok">Sent</span></div>
                <div className="v2_panel_row"><b>Bank file uploaded</b><span className="ok">Done</span></div>
                <div className="v2_panel_row"><b>EPF / ETF remittance</b><span>Due 01 Apr</span></div>
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
            lead="Payroll sits beside the rest of your admin, not in a separate system."
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
        title="Hand payroll over this month"
        lead="Tell us your headcount and we'll tell you exactly what it costs and what we need to start."
        primary={{ label: "Set up a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See the dashboard", href: "/srilanka/dashboard/accounting-tool" }}
      />
    </PageShell>
  );
}
