import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, Steps, FeatureGrid, CheckSplit, ReviewStrip, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Payroll Management Services | Simplebooks",
  description:
    "All-in-one payroll management. We are here to help you effectively manage your payroll — EPF/ETF, reports and returns handled for you.",
};

const STEPS = [
  { t: "We'll handle your paperwork", d: "Send us the changes and we take the paperwork off your desk." },
  { t: "Process all your documents", d: "Your employee records and monthly inputs are processed by our team." },
  { t: "Generate your reports", d: "Payroll summaries and cash requirements, ready when you need them." },
  { t: "Pay your employees' EPF/ETF", d: "Contributions calculated and paid on the right dates." },
  { t: "File your EPF/ETF returns", d: "The returns are prepared and filed so nothing sits waiting." },
];

const WHY = [
  { t: "We're a one stop shop solution", d: "With Simplebooks, you're not just limited to payroll management. We can take care of all your finance needs.", tags: ["All in one"] },
  { t: "You can reduce your cost with us", d: "Managing payroll can get quite expensive as your team grows. With Simplebooks, you can pay less as you hire more.", tags: ["Scales"] },
  { t: "Our prices are transparent", d: "Simplebooks pricing is simple and straightforward. Know exactly what you're paying for beforehand.", tags: ["Transparent"] },
  { t: "We are a steady payroll manager", d: "Hire a consistent team for all your payroll needs. Never worry about hiring and training in-house talent again.", tags: ["Consistent"] },
];

const NEED = [
  "Employee name and number",
  "Employee allowances",
  "Your employee's basic salary",
  "Ad-hoc or monthly deductions",
];

const REVIEWS = [
  { q: "Excellent service from the entire simplebooks team. Registering my company was quick and stress-free.", name: "Travel with Wife", role: "@travelwithwife" },
  { q: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.", name: "Damith Menaka", role: "Director, Animspire" },
  { q: "Very friendly and Professional. Highly recommended. Just went to collect the documents. Simple as that.", name: "Sandul Perera", role: "Director" },
];

export default function PayrollServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Payroll services"
        title="All-in-one payroll management"
        lead="We are here to help you effectively manage your payroll."
        primary={{ label: "Get a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "See the payroll tool", href: "/srilanka/dashboard/payroll-management-system" }}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="How it works"
            title="Don't worry about payroll management anymore"
            lead="Let Simplebooks take on the hassle."
          />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Why simplebooks"
            title="Running a business is not easy — let us handle the repetitive tasks"
          />
          <FeatureGrid items={WHY} cols={4} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <CheckSplit
            eyebrow="What we need"
            title="What do we need from you"
            lead="Meeting your monthly payroll deadlines is crucial to avoiding unnecessary penalties. Have the team track your deadlines and remind you beforehand."
            items={NEED}
            cta={{ label: "Book a free consultation", href: "/srilanka/contact" }}
            aside={
              <div className="v2_panel">
                <p className="v2_panel_h">Personalised reminders</p>
                <div className="v2_panel_row"><b>Monthly payroll run</b><span className="ok">Tracked</span></div>
                <div className="v2_panel_row"><b>EPF / ETF payment</b><span className="ok">Tracked</span></div>
                <div className="v2_panel_row"><b>EPF / ETF returns</b><span className="ok">Tracked</span></div>
                <div className="v2_panel_row"><b>Missed deadlines</b><span className="ok">0</span></div>
              </div>
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Customers"
            title="Hear it straight from the people who use Simplebooks payroll"
          />
          <ReviewStrip items={REVIEWS} />
        </div>
      </section>

      <CtaBand
        title="Want a quotation for payroll"
        lead="Tell us your headcount and we'll price it today. You pay less as you hire more."
        primary={{ label: "Talk to the team", href: "/srilanka/contact" }}
        secondary={{ label: "See all services", href: "/srilanka/services" }}
      />
    </PageShell>
  );
}
