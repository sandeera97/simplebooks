import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Terms & Conditions - Sri Lanka",
  description:
    "Simplebooks terms and conditions — company registration at cost, and our Basic and Premium company secretarial packages.",
};

const DUTIES = [
  "We will help you with your company incorporation and maintain important documents like: incorporation papers, director agreements and shareholder agreements.",
  "Help you pass resolutions and maintain minutes of the business in order to open bank accounts, obtain leases and etc.",
  "We will maintain your share register, minute books, issue share certificates and help you file your annual returns.",
  "Communicate and liaise with the Registrar of Companies on your behalf.",
  "We will help you register and file for company changes such as; director changes, company name changes, address changes, share transfers and share issues.",
];

export default function TermsConditionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Terms &amp; conditions"
        dot={false}
        lead="Thank you for selecting Simplebooks to register your business. As your registrar, we register your company at cost."
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <div className="v2_prose2 v2_reveal">
            <p>
              You will always need a company secretary to register with the ROC. As a registered
              company secretary, Simplebooks will act as your Secretary. Our charges for these
              secretarial services are pretty simple.
            </p>

            <h2>Basic package</h2>
            <p>
              If you register your company through our basic package, you will be charged Rs 1,583
              per month. This will be billed Rs 19,000 for a year for 365 degree secretarial service.
            </p>

            <h2>Premium package</h2>
            <p>
              When you register with our Premium Package, you will be billed Rs 1,250 per month for
              our 365 degree secretarial services. This adds up to Rs 15,000 for the entire year.
            </p>

            <h2>What the secretarial service covers</h2>
            <ul>
              {DUTIES.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions about the terms"
        lead="If anything here is unclear, ask us before you sign. We would rather explain it twice than have you guess."
        primary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
      />
    </PageShell>
  );
}
