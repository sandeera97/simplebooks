import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, SplitSection, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Our Services | Simplebooks",
  description:
    "Business registration, bookkeeping, legal consulting, trademarks, tax and payroll — one team of accountants, company secretaries and lawyers.",
};

const LEGAL_DOCS = [
  "Lease Agreements",
  "Collective Agreements",
  "Power of Attorney",
  "Loan Agreements",
  "Employee Contracts",
  "Sales Agreements",
  "Memorandum of Understanding",
  "Affidavits",
  "Non Disclosure Agreements",
];

function Panel({ label, rows }: { label: string; rows: [string, string][] }) {
  return (
    <div className="v2_panel">
      <p className="v2_panel_h">{label}</p>
      {rows.map(([k, v]) => (
        <div key={k} className="v2_panel_row">
          <b>{k}</b>
          <span>{v}</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What we do"
        title="Everything your business needs, under one roof"
        lead="One team of accountants, company secretaries and lawyers — so you're never handed off to a stranger halfway through."
        primary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
        secondary={{ label: "See the dashboard", href: "/srilanka/dashboard/accounting-tool" }}
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SplitSection
            eyebrow="Service"
            title="Business registration"
            paras={[
              "Our team of business registration consultants have helped set up legal entities for founders, entrepreneurs and conglomerates. Regardless of where you are in the stage of your business, lean on the experience and insight generated from incorporating over 3,000+ organizations across South Asia.",
              "Leverage the learnings and insight from other business owners to avoid making the same mistakes and setting yourself up for success. Whether you're launching your Small Business, Non-Profit or raising capital for your Tech Startup, speak to an advisor and set yourself up for success.",
            ]}
            cta={{ label: "Register your business", href: "/srilanka/services/register-a-company" }}
            aside={
              <Panel
                label="Registration"
                rows={[
                  ["Entities incorporated", "3,000+"],
                  ["Typical turnaround", "3–5 days"],
                  ["Markets covered", "South Asia"],
                  ["Name approval", "Included"],
                ]}
              />
            }
          />

          <SplitSection
            eyebrow="Service"
            title="Bookkeeping"
            flip
            paras={[
              "We allow you to focus on what you do best. Sign up with our book-keeping team to ensure that you have the right talent and flexibility to continue growing your business without worrying about finances.",
              "At Simplebooks, real people handle your bookkeeping: there's always someone here if you need to talk about your business, your accounts, and your numbers. Get access to a dedicated bookkeeper and manager, and CPA who are on your team at a fraction of the cost of hiring inhouse talent that's hard to train and retain.",
            ]}
            cta={{ label: "See bookkeeping", href: "/srilanka/services/accounting-services" }}
            aside={
              <Panel
                label="Your finance team"
                rows={[
                  ["Dedicated bookkeeper", "Yes"],
                  ["Account manager", "Yes"],
                  ["CPA oversight", "Yes"],
                  ["Cost vs in-house", "A fraction"],
                ]}
              />
            }
          />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SplitSection
            eyebrow="Service"
            title="Flexible legal consulting"
            paras={[
              "Growing businesses shouldn't have to be bogged down with complex and expensive legal work. We've partnered up with Lawyers that understand the challenges you face. Whether you need to create legal documents for your business, or need help staying compliant, we're here to help your business grow. We specialise in areas like corporate law, commercial law, employment law, intellectual property law, and commercial property law currently limited to Sri Lanka.",
            ]}
            bullets={LEGAL_DOCS}
            cta={{ label: "See legal services", href: "/srilanka/legal" }}
          />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SplitSection
            eyebrow="Service"
            title="Contract review"
            paras={[
              "Ensure fair representation on all legal contracts you sign. Whether you need help drafting the right deal or advice on whether you should sign, our legal team will help you guide and navigate the most important decisions along your business journey.",
              "Our team of legal experts frequently deal with Confidentiality Agreement/NDAs, Consultant Agreements, Statements of Work, Employment Contracts, Commercial Property Lease Agreements, Software/App Development Agreement, Software Licence Agreement, Shareholder Agreement, Supply of Services Contract, and Website Terms and Conditions.",
            ]}
            cta={{ label: "Talk to the legal team", href: "/srilanka/legal" }}
            aside={
              <Panel
                label="Frequently reviewed"
                rows={[
                  ["NDAs & confidentiality", "Reviewed"],
                  ["Employment contracts", "Reviewed"],
                  ["Lease agreements", "Reviewed"],
                  ["Software & licence", "Reviewed"],
                ]}
              />
            }
          />

          <SplitSection
            eyebrow="Service"
            title="Trademark"
            flip
            paras={[
              "We make it easy to file your trademark and protect your assets. We serve thousands of growing businesses around Sri Lanka and help them protect their most valuable assets.",
              "Manage The Entire Process From Filing To Registration. Legally protects your company name and logo so no one else can claim it.",
            ]}
            cta={{ label: "Register a trademark", href: "/srilanka/services/trademark-registration" }}
            aside={
              <Panel
                label="Trademark filing"
                rows={[
                  ["Search & clearance", "Included"],
                  ["Filing to registration", "Managed"],
                  ["Name & logo", "Protected"],
                  ["Renewals", "Tracked"],
                ]}
              />
            }
          />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SplitSection
            eyebrow="Service"
            title="Shareholder agreements"
            paras={[
              "Avoid potential disputes and set up your business for success by making sure all the shareholders see eye-to-eye on all the details.",
              "Greater protection to shareholders over and above the standard articles of association both in terms of how the company is run, decision making, minority shareholder and majority shareholder rights.",
            ]}
            cta={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
            aside={
              <Panel
                label="What it settles"
                rows={[
                  ["How the company is run", "Agreed"],
                  ["Decision making", "Agreed"],
                  ["Minority rights", "Protected"],
                  ["Majority rights", "Protected"],
                ]}
              />
            }
          />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SplitSection
            eyebrow="Service"
            title="Tax &amp; financial consulting"
            paras={[
              "Ensure that decisions you're making around money are the best possible ones. Our team of financial and tax consultants have worked across industries, businesses segments and helped navigate hundreds of deals to benefit our clients. From preparing investor materials, financial models to ensuring your organization has been set up in the most efficient way to reduce your tax burden. The right accounting team can help you avoid costly mistakes and put you on the path to profitable growth.",
            ]}
            cta={{ label: "See tax services", href: "/tax/income-tax" }}
            aside={
              <Panel
                label="Where we help"
                rows={[
                  ["Investor materials", "Prepared"],
                  ["Financial models", "Built"],
                  ["Structure & efficiency", "Reviewed"],
                  ["Deals navigated", "Hundreds"],
                ]}
              />
            }
          />

          <SplitSection
            eyebrow="Service"
            title="Payroll services"
            flip
            paras={[
              "Our Small business payroll services help hundreds of business owners save time and money by helping them focus on the important things.",
              "Our Payroll services have been designed from the learnings working together with 100s of Sri Lankan small businesses. Ensure that you're compliant with labour laws and regulations and your team gets paid on time with the support of our experts.",
            ]}
            cta={{ label: "See payroll", href: "/srilanka/services/payroll-managment" }}
            aside={
              <Panel
                label="Every month"
                rows={[
                  ["EPF / ETF", "Filed"],
                  ["Payslips", "Issued"],
                  ["Bank files", "Uploaded"],
                  ["Labour law", "Compliant"],
                ]}
              />
            }
          />
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need"
        lead="Thirty minutes with a consultant who has done this several thousand times. No obligation, no sales script."
        primary={{ label: "Set up a free consultation", href: "/srilanka/contact" }}
        secondary={{ label: "Check a company name", href: "/srilanka/company-name-check" }}
      />
    </PageShell>
  );
}
