/**
 * The Simplebooks tax calculators.
 *
 * The tools team builds every calculator as its own small app and publishes a
 * hub for them at https://calculators.simplebooks.com. On their hub, a
 * calculator's page is nothing but a full-screen iframe of that app. This site
 * does the same thing: /calculators lists them and /calculators/<slug> frames
 * the app. So these are always exactly the calculators the tools team ships,
 * kept up to date by them, and none of their code is copied into this repo.
 *
 * Mirrors their hub as of 26 Nov 2026: slugs, titles, app addresses, sections,
 * card art and the situation/type filters. When they add or rename a
 * calculator, update this list to match.
 *
 * The nine older calculators under /tools (the tools team's earlier app,
 * vendored in external/free-tools) are listed here too, so /calculators is
 * the one place that has all of them. See MORE_TOOLS.
 */

export const SECTIONS = ["Featured", "Work & business", "Abroad", "Savings & property", "Filing & dates"] as const;
export type Section = (typeof SECTIONS)[number];

export const SITUATIONS = ["Salary & job", "Freelance & business", "Savings & shares", "Property", "Abroad", "Filing & dates"] as const;
export type Situation = (typeof SITUATIONS)[number];

export const KINDS = ["Calculators", "Checks & guides", "Tax planning"] as const;
export type Kind = (typeof KINDS)[number];

export interface Calculator {
  slug: string;
  /** Their card title, also the page title. */
  title: string;
  /** The calculator app that /calculators/<slug> frames. */
  app: string;
  section: Section;
  /** Which "By situation" and "By type" filters show it, as their hub decides. */
  situation: Situation;
  kind: Kind;
  art: string;
  artAlt: string;
}

/* Card art is served from their hub's asset store (immutable, CORS-open). */
const ART = "https://simplebooks-calculators.lovable.app/__l5e/assets-v1";

export const CALCULATORS: Calculator[] = [
  {
    slug: "apit-salary-tax",
    title: "Am I paying the right amount of tax on my salary?",
    app: "https://lanka-salary-tax-estimator.lovable.app",
    section: "Featured",
    situation: "Salary & job",
    kind: "Calculators",
    art: `${ART}/2decdac9-a5a9-450b-841e-e068f9438558/salary-hand.webp`,
    artAlt: "Hand placing the final letter in SALARY on stacks of coins",
  },
  {
    slug: "do-i-need-to-file",
    title: "Do I need to file a tax return?",
    app: "https://do-i-file-tax-check.lovable.app",
    section: "Featured",
    situation: "Filing & dates",
    kind: "Checks & guides",
    art: `${ART}/b52fb500-e598-4e48-b62d-cb944a488dbc/file-return-art.webp`,
    artAlt: "TAX RETURN letter blocks on bundles of banknotes",
  },
  {
    slug: "which-taxes-apply-to-me",
    title: "What goes on my tax return?",
    app: "https://which-taxes-apply-to-me.lovable.app",
    section: "Featured",
    situation: "Filing & dates",
    kind: "Checks & guides",
    art: `${ART}/4249979d-c168-4352-89dc-bc6a81b8f3ec/tax-return-contents-art.webp`,
    artAlt: "Person using a laptop with tax documents and calculator symbols",
  },
  {
    slug: "income-tax-calculator",
    title: "Check your tax refund or balance",
    app: "https://income-tax-calcu.lovable.app",
    section: "Featured",
    situation: "Filing & dates",
    kind: "Calculators",
    art: `${ART}/e26e1178-6948-4f9e-936f-0d05738f735b/tax-refund-stamp.webp`,
    artAlt: "Green stamp marked TAX REFUND",
  },
  {
    slug: "freelancer-expenses",
    title: "Which expenses can I claim as a freelancer?",
    app: "https://freelance-expenses.lovable.app",
    section: "Featured",
    situation: "Freelance & business",
    kind: "Checks & guides",
    art: `${ART}/742c2869-7090-4579-8e21-b758f21c095d/freelancer-expenses-hand.webp`,
    artAlt: "Freelancer reviewing paperwork at a desk with a laptop",
  },
  {
    slug: "late-filing-penalty",
    title: "What happens if I file late?",
    app: "https://late-filing-calculator.lovable.app",
    section: "Featured",
    situation: "Filing & dates",
    kind: "Checks & guides",
    art: `${ART}/efd944bc-5080-44a8-b759-092bc9c018b7/filing-late-clock.webp`,
    artAlt: "Running alarm clock marked LATE",
  },
  {
    slug: "bank-interest-tax-refund",
    title: "Can I claim a refund on bank interest tax?",
    app: "https://bank-interest-tax-refund.lovable.app",
    section: "Featured",
    situation: "Filing & dates",
    kind: "Calculators",
    art: `${ART}/1454d7f1-4775-447c-af65-948bd3989f1b/bank-interest-art.webp`,
    artAlt: "Percentage blocks on rising coin stacks with an upward arrow",
  },
  {
    slug: "rental-income-tax",
    title: "How much tax do I pay on rental income?",
    app: "https://simplebooks-rental-tax-calculator.lovable.app/",
    section: "Featured",
    situation: "Property",
    kind: "Calculators",
    art: `${ART}/1c551576-ba11-4b80-aa60-0f41b935a91a/rental-income-art.webp`,
    artAlt: "House marked FOR RENT beside coin stacks and an upward arrow",
  },
  {
    slug: "gratuity-and-terminal-benefits-tax",
    title: "Will I pay tax on my gratuity when I leave a job?",
    app: "https://gratuity-and-terminal-benefits-tax.lovable.app/",
    section: "Work & business",
    situation: "Salary & job",
    kind: "Calculators",
    art: `${ART}/78b1c6d0-d7de-4d10-acab-0f78c920cb36/gratuity-art.webp`,
    artAlt: "Hand adding a coin to a savings jar beside stacks of coins",
  },
  {
    slug: "sole-trader-vs-company",
    title: "Sole trader or company for tax purposes?",
    app: "https://solo-trader-or-company.lovable.app/",
    section: "Work & business",
    situation: "Freelance & business",
    kind: "Tax planning",
    art: `${ART}/59feef62-3dd6-4087-a2bd-af6d528f39d3/sole-trader-art.webp`,
    artAlt: "Notebook marked SOLE TRADER beside a pen and calculator",
  },
  {
    slug: "quarterly-tax-planner",
    title: "How much should I set aside for tax?",
    app: "https://quarterly-tax-planner.lovable.app/",
    section: "Work & business",
    situation: "Freelance & business",
    kind: "Tax planning",
    art: `${ART}/8d7fefa9-982c-4c61-81ef-5332100065aa/tax-savings-art.webp`,
    artAlt: "Quarterly Tax notebook with a pen and coins",
  },
  {
    slug: "freelancer-foreign-income-tax",
    title: "How is my foreign freelance income taxed?",
    app: "https://freelance-tax-calcu.lovable.app/",
    section: "Abroad",
    situation: "Abroad",
    kind: "Calculators",
    art: `${ART}/9fb82817-bf87-4cb5-ac93-5b707429508c/foreign-freelance-art.webp`,
    artAlt: "Freelancer working on a laptop at a café table",
  },
  {
    slug: "foreign-tax-credit",
    title: "Do I pay tax twice on foreign income?",
    app: "https://foreign-tax-credit.lovable.app/",
    section: "Abroad",
    situation: "Abroad",
    kind: "Calculators",
    art: `${ART}/dc4b869a-d847-4afa-904b-7e88847a56a5/foreign-income-tax-art.webp`,
    artAlt: "FOREIGN INCOME blocks resting on a calculator",
  },
  {
    slug: "tax-residency-checker",
    title: "Am I a Sri Lankan tax resident?",
    app: "https://tax-residency-checker.lovable.app/",
    section: "Abroad",
    situation: "Abroad",
    kind: "Checks & guides",
    art: `${ART}/e6f2da03-6eee-44a5-9d70-8e41361fe428/tax-resident-art.webp`,
    artAlt: "Wooden house marked TAX RESIDENT with coins and house models",
  },
  {
    slug: "dividend-tax",
    title: "How much tax do I pay on dividends?",
    app: "https://dividend-tax-calculator.lovable.app/",
    section: "Savings & property",
    situation: "Savings & shares",
    kind: "Calculators",
    art: `${ART}/65c3e472-2d28-4010-ba69-2df4340af36e/dividends-art.webp`,
    artAlt: "Money bag marked DIVIDENDS",
  },
  {
    slug: "capital-gains-tax",
    title: "How much tax when I sell property or shares?",
    app: "https://capital-gains-tax-sp.lovable.app/",
    section: "Savings & property",
    situation: "Property",
    kind: "Calculators",
    art: `${ART}/507428d8-9d00-4dab-a270-db45b1d5c8c7/property-shares-tax-art.webp`,
    artAlt: "Two people shaking hands above model houses on a clipboard",
  },
  {
    slug: "tax-deadlines",
    title: "When are my tax deadlines?",
    app: "https://simplebooks-tax-deadline.lovable.app/",
    section: "Filing & dates",
    situation: "Filing & dates",
    kind: "Checks & guides",
    art: `${ART}/104de526-2f7c-4129-8c3f-236a6de58891/tax-deadlines-art.webp`,
    artAlt: "Alarm clock beside blocks reading Don’t miss the Deadline!",
  },
  {
    slug: "tax-documents-checklist",
    title: "What documents do I need?",
    app: "https://tax-documents.lovable.app/",
    section: "Filing & dates",
    situation: "Filing & dates",
    kind: "Checks & guides",
    art: `${ART}/41eb7d28-7b4c-4657-a01d-6ba757889003/tax-documents-art.webp`,
    artAlt: "Stack of clipped documents beside a laptop",
  },
];

export function calculatorBySlug(slug: string): Calculator | undefined {
  return CALCULATORS.find((c) => c.slug === slug);
}

/** "CAL 01" … "CAL 18": the card number on their hub is the list position. */
export function calcNumber(c: Calculator): string {
  return String(CALCULATORS.indexOf(c) + 1).padStart(2, "0");
}

/** The two guides open with "Get started"; everything else "Calculate". */
export function calcAction(c: Calculator): string {
  return c.slug === "tax-deadlines" || c.slug === "tax-documents-checklist" ? "Get started" : "Calculate";
}

/* ---------------------------------------------------------------------------
   The older calculators. These are the tools team's previous app, served as a
   static export under /tools (see external/free-tools/README-INTEGRATION.md).
   The live site still lists them under Free Tools, so they stay, and they are
   searchable on /calculators alongside the new ones.
   ------------------------------------------------------------------------- */
export interface Tool {
  label: string;
  href: string;
  situation: Situation;
  kind: Kind;
  /** Extra words the search box should match. */
  keywords: string;
}

export const MORE_TOOLS: Tool[] = [
  { label: "Local APIT Calculator", href: "/tools/tax-calculators/local-income", situation: "Salary & job", kind: "Calculators", keywords: "apit paye salary employment local monthly" },
  { label: "Foreign APIT Calculator", href: "/tools/tax-calculators/foreign-income", situation: "Abroad", kind: "Calculators", keywords: "apit foreign salary employment overseas" },
  { label: "Cumulative Income Calculator", href: "/tools/tax-calculators/cumulative-income", situation: "Salary & job", kind: "Calculators", keywords: "apit cumulative annual salary" },
  { label: "Bonus APIT Calculator", href: "/tools/tax-calculators/bonus-tax-calculator", situation: "Salary & job", kind: "Calculators", keywords: "apit bonus lump sum salary" },
  { label: "WHT Calculator", href: "/tools/wht-calculator", situation: "Freelance & business", kind: "Calculators", keywords: "withholding tax wht rent professional services" },
  { label: "VAT Calculator", href: "/tools/vat-calculator-sri-lanka", situation: "Freelance & business", kind: "Calculators", keywords: "vat value added tax price invoice" },
  { label: "Salary Slip Calculator", href: "/tools/payroll/salary-calculator-sri-lanka", situation: "Salary & job", kind: "Calculators", keywords: "salary slip payslip net gross take home epf etf apit payroll" },
  { label: "EPF/ETF Calculator", href: "/tools/payroll/epf-calculator", situation: "Salary & job", kind: "Calculators", keywords: "epf etf provident fund contributions payroll" },
  { label: "Gratuity Calculator", href: "/tools/payroll/gratuity-calculator-sri-lanka", situation: "Salary & job", kind: "Calculators", keywords: "gratuity terminal benefits leaving job payroll" },
];

/* ---------------------------------------------------------------------------
   Search, ported from their hub: every word typed must appear somewhere in
   the card's text, its filters or its number ("cal 4", "rent", "apit").
   ------------------------------------------------------------------------- */
const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export function matchesSearch(query: string, text: string): boolean {
  const words = normalise(query).split(/\s+/).filter(Boolean);
  const haystack = normalise(text);
  return words.every((w) => haystack.includes(w));
}

export function calculatorSearchText(c: Calculator): string {
  const n = calcNumber(c);
  const salary = c.title.includes("salary") ? " APIT basic salary allowances" : "";
  return `${c.title}${salary} ${c.situation} ${c.kind} CAL ${n} calculator ${Number(n)}`;
}

export function toolSearchText(t: Tool): string {
  return `${t.label} ${t.keywords} ${t.situation} ${t.kind} calculator`;
}
