export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  external?: boolean;
}

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    children: [
      { label: "Business Registration", href: "/business-registration" },
      { label: "Invoicing", href: "/srilanka/dashboard/accounting-software" },
      { label: "Payroll", href: "/srilanka/dashboard/payroll-management-system" },
      { label: "Tax Tool", href: "/income-tax-filing" },
      { label: "Accounting Tool", href: "/srilanka/dashboard/accounting-tool" },
      { label: "VAT Tool", href: "/srilanka/services/value-added-tax-filling" },
    ],
  },
  {
    label: "Company Name Check",
    href: "/srilanka/company-name-check",
  },
  {
    label: "Services",
    children: [
      { label: "Auditing", href: "/srilanka/services/auditing" },
      { label: "Bookkeeping", href: "/srilanka/services/accounting-services" },
      { label: "Business Registration", href: "/srilanka/services/register-a-company" },
      { label: "Company Secretary", href: "/srilanka/services/company-secretary" },
      {
        label: "Tax Services",
        children: [
          { label: "Tax AI Bot", href: "/whatsapp-ai-chatbot" },
          { label: "Income Tax", href: "/income-tax-filing" },
          { label: "TIN Registration", href: "/tin-registration" },
          { label: "Corporate Tax", href: "/corporate-tax" },
          { label: "VAT", href: "/vat" },
          { label: "VAT Invoice Generator", href: "/vat-invoice" },
          { label: "APIT", href: "/srilanka/apit-landing-page" },
          { label: "Foreign Income Tax", href: "/foreign-income-tax" },
          { label: "SSCL", href: "/sscl" },
          { label: "Capital Gains Tax", href: "/capital-gain-tax" },
          { label: "Webinar", href: "/webinar" },
        ],
      },
      { label: "Legal", href: "/srilanka/legal" },
      {
        label: "Payroll",
        children: [
          { label: "Payroll Services", href: "/srilanka/services/payroll-managment" },
          { label: "OODOX", href: "/oodox" },
        ],
      },
      { label: "Trademark Registration", href: "/srilanka/services/trademark-registration" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/srilanka/blog" },
      { label: "Videos", href: "/srilanka/videos" },
      {
        label: "Tax Calculators",
        children: [
          { label: "Local APIT Calculator", href: "/tools/tax-calculators/local-income" },
          { label: "Foreign APIT Calculator", href: "/tools/tax-calculators/foreign-income" },
          { label: "Cumulative Income", href: "/tools/tax-calculators/cumulative-income" },
          { label: "Bonus APIT Calculator", href: "/tools/tax-calculators/bonus-tax-calculator" },
          { label: "WHT Calculator", href: "/tools/wht-calculator" },
          { label: "VAT Calculator", href: "/tools/vat-calculator-sri-lanka" },
        ],
      },
      {
        label: "Payroll Calculators",
        children: [
          { label: "Salary Slip Calculator", href: "/tools/payroll/salary-calculator-sri-lanka" },
          { label: "EPF/ETF Calculator", href: "/tools/payroll/epf-calculator" },
          { label: "Gratuity Calculator", href: "/tools/payroll/gratuity-calculator-sri-lanka" },
        ],
      },
      { label: "Pay Online", href: "https://dashboard.simplebooks.com/pay-online", external: true },
    ],
  },
  {
    label: "Contact",
    href: "/srilanka/contact",
  },
];

export const regions = [
  { label: "Sri Lanka", href: "/srilanka" },
  { label: "Bangladesh", href: "/bangladesh" },
  { label: "India", href: "#" },
];
