import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import CalculatorHub from "@/components/v2/CalculatorHub";
import { CtaBand } from "@/components/v2/blocks";
import { pageMetadata } from "@/lib/seo";

/**
 * Every Simplebooks calculator in one place: the eighteen the tools team
 * publishes at calculators.simplebooks.com (each opens at
 * /calculators/<slug>), plus the nine older ones under /tools.
 */
export const metadata: Metadata = pageMetadata("/calculators");

const IRD_APIT_GUIDANCE =
  "https://www.ird.gov.lk/en/Type%20of%20Taxes/SitePages/Advance%20Personal%20Income%20Tax%20%28APIT%29.aspx";

/* Their hub's explainer, word for word: it is the tools team's own copy. */
const ABOUT = [
  "Type your income and see your tax in seconds with the free simplebooks Sri Lanka tax calculators. Understanding income tax starts with knowing where your money comes from: a salary, freelance work, business profits, rent or investments. The tax treatment can differ for each source. Start with the question that matches your situation, then use your income figures to explore an estimate before making financial decisions.",
  "Income tax is not necessarily calculated on every rupee you receive. Taxable income depends on how receipts are classified and which exemptions, reliefs or deductions apply. Employment income, business income and investment income are distinct categories under Sri Lankan tax law. Keep the relevant assessment year in mind when comparing figures, because a change in tax rules can affect the result even when your income stays the same.",
  "For salaried employees, Advance Personal Income Tax, or APIT, is income tax deducted by an employer when paying employment income. A useful salary tax check considers your pay and relevant allowances or bonuses alongside the tax already deducted. Review your payslips and employer records rather than relying only on the amount arriving in your bank account. A final payment when leaving a job, such as gratuity, needs a separate check.",
  "Freelancers and business owners need to distinguish money received from the profit used for tax purposes. A business expense is not automatically deductible just because it was paid while working. Keep invoices, receipts and records showing what an expense was for. Understanding allowable expenses, the difference between operating as a sole trader and a company, and potential quarterly tax payments helps you plan cash flow without confusing sales with take-home income.",
  "Investment income deserves its own review. Bank interest, dividends and rental income can involve different tax rules, and tax withheld at payment should be recorded separately from the income received. A deduction by a bank does not, by itself, establish whether you qualify for a refund. For rent, keep records of receipts and relevant property expenses. Selling property or shares raises a different question about gains, rather than regular monthly income.",
  "Foreign income can add another layer to your tax position. Working for an overseas client does not alone determine how that income is taxed in Sri Lanka. Your tax residency, the nature of the income and any applicable relief need to be considered. Keep contracts, payment records and evidence of any tax paid abroad. Where double taxation relief may apply, check the requirements before assuming that foreign tax removes a local obligation.",
  "Filing an income tax return and paying income tax are related but separate responsibilities. Check whether you need to file, which assessment year the return covers, and the relevant filing and payment deadlines. Gather salary statements, business records, bank interest certificates and other evidence of income and tax already paid. Comparing your estimated liability with recorded payments can help you understand a possible balance due or refund, subject to the applicable rules.",
];

export default function CalculatorsPage() {
  const [intro, ...rest] = ABOUT;

  return (
    <PageShell>
      <CalculatorHub />

      <section className="v2_sec v2_calc_about" aria-labelledby="calc-about-h">
        <div className="v2_wrap v2_calc_about_in">
          <h2 id="calc-about-h" className="v2_calc_about_h">
            Understanding income tax in Sri Lanka
          </h2>
          <p>{intro}</p>
          <details className="v2_calc_more">
            <summary>
              <span className="v2_calc_more_open">Read more</span>
              <span className="v2_calc_more_close">Show less</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            {rest.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <p>
              These calculators provide estimates, not formal tax advice or a substitute for filing a return. Check
              the tax year and assumptions shown in the calculator before relying on a result. For official
              employment tax guidance, refer to the{" "}
              <a href={IRD_APIT_GUIDANCE} target="_blank" rel="noopener noreferrer">
                Inland Revenue Department’s APIT guidance
              </a>
              . If your income spans several categories or your circumstances are unusual, seek qualified advice and
              confirm the rules that apply to you.
            </p>
          </details>
        </div>
      </section>

      <CtaBand
        title="Want an expert to handle it for you?"
        lead="The calculators give you an estimate. Our tax team can check your figures and file your return with the IRD for you."
        primary={{ label: "File your tax return", href: "/income-tax-filing" }}
        secondary={{ label: "Talk to a tax expert", href: "/tax/income-tax#consultation" }}
      />
    </PageShell>
  );
}
