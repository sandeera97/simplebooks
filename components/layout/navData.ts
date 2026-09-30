export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  external?: boolean;
}

/**
 * Mirrors the header on simplebooks.com as restructured in September 2026.
 *
 * The old Dashboard / Services / Resources grouping is gone. Services was
 * split by job-to-be-done (Start a Business, Accounting & Payroll, Legal),
 * Tax was promoted to its own top-level menu, and Resources became Free Tools
 * plus Learn. Contact and Pay Online were dropped from the header entirely —
 * Contact is still reachable from the footer, the announcement bar and every
 * page's CTA.
 *
 * Hrefs are our own routes, not the live URLs. Several live slugs differ from
 * ours (the live Tax menu points at /corporate-tax, /sscl, /capital-gain-tax
 * and so on, where ours live under /tax/*), so this is a mapping, not a copy.
 */
export const navItems: NavItem[] = [
  {
    label: "Start a Business",
    children: [
      { label: "Business Registration", href: "/srilanka/services/register-a-company" },
      { label: "Business Registration Dashboard", href: "/business-registration" },
      { label: "Company Name Check", href: "/srilanka/company-name-check" },
      { label: "Company Secretary", href: "/srilanka/services/company-secretary" },
      { label: "Trademark Registration", href: "/srilanka/services/trademark-registration" },
    ],
  },
  {
    label: "Tax",
    children: [
      { label: "Tax AI Bot", href: "/tax/ai-bot" },
      /* Live points this at the filing tool, the same URL as "Tax Tool" below.
         That looks like a slip in their menu config, and following it would
         orphan our own /tax/income-tax page, so this points at ours. */
      { label: "Income Tax", href: "/tax/income-tax" },
      { label: "TIN Registration", href: "/tax/tin-registration" },
      { label: "Corporate Tax", href: "/tax/corporate-tax" },
      { label: "VAT", href: "/tax/vat" },
      { label: "VAT Invoice Generator", href: "/vat-invoice" },
      { label: "APIT", href: "/tax/apit" },
      { label: "Foreign Income", href: "/tax/foreign-income" },
      { label: "SSCL", href: "/tax/sscl" },
      { label: "Capital Gains Tax", href: "/tax/capital-gains" },
      { label: "Tax Tool", href: "/income-tax-filing" },
      { label: "Webinar", href: "/tax/webinar" },
    ],
  },
  {
    label: "Accounting & Payroll",
    children: [
      /* Live reads "Accounting Toll" and "Payroll Managment"; both are typos in
         their menu, so the labels are corrected here. The payroll SLUG really
         is "payroll-managment" — that one is not a typo we can fix. */
      { label: "Accounting Tool", href: "/srilanka/dashboard/accounting-tool" },
      { label: "Bookkeeping", href: "/srilanka/services/accounting-services" },
      { label: "Invoicing Tool", href: "/srilanka/dashboard/accounting-software" },
      { label: "Payroll Tool", href: "/srilanka/dashboard/payroll-management-system" },
      { label: "Payroll Management", href: "/srilanka/services/payroll-managment" },
      { label: "Auditing", href: "/srilanka/services/auditing" },
      { label: "OODOX", href: "/oodox" },
    ],
  },
  {
    label: "Legal",
    children: [
      { label: "Legal Services", href: "/srilanka/legal" },
      { label: "Company Secretary", href: "/srilanka/services/company-secretary" },
      { label: "Trademark Registration", href: "/srilanka/services/trademark-registration" },
    ],
  },
  {
    label: "Free Tools",
    children: [
      { label: "Local APIT Calculator", href: "/tools/tax-calculators/local-income" },
      { label: "Foreign APIT Calculator", href: "/tools/tax-calculators/foreign-income" },
      { label: "Cumulative Income Calculator", href: "/tools/tax-calculators/cumulative-income" },
      { label: "Bonus APIT Calculator", href: "/tools/tax-calculators/bonus-tax-calculator" },
      { label: "WHT Calculator", href: "/tools/wht-calculator" },
      { label: "VAT Calculator", href: "/tools/vat-calculator-sri-lanka" },
      { label: "Salary Slip Calculator", href: "/tools/payroll/salary-calculator-sri-lanka" },
      { label: "EPF/ETF Calculator", href: "/tools/payroll/epf-calculator" },
      { label: "Gratuity Calculator", href: "/tools/payroll/gratuity-calculator-sri-lanka" },
      { label: "VAT Tool", href: "/srilanka/services/value-added-tax-filling" },
      { label: "VAT Invoice Generator", href: "/vat-invoice" },
    ],
  },
  {
    label: "Learn",
    children: [
      { label: "Blog", href: "/srilanka/blog" },
      { label: "Videos", href: "/srilanka/videos" },
    ],
  },
];

/** Live now offers Sri Lanka only; the other regions were removed. */
export const regions = [{ label: "Sri Lanka", href: "/srilanka" }];
