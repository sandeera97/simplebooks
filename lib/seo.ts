import type { Metadata } from "next";

/**
 * Per-page SEO, in one place.
 *
 * Titles are taken from the live simplebooks.com page wherever one exists,
 * because those are the titles currently ranking and this site replaces them
 * at the same URLs. Where the live page has no title of its own, ours stands.
 *
 * Descriptions are NOT mirrored blindly: 19 of the 38 live pages have no meta
 * description at all, so copying the live site exactly would strip working
 * descriptions off half the site. Live description wins when there is one,
 * ours fills the gap when there is not.
 *
 * Canonicals are generated for every page. The live site is missing them on
 * eleven pages; that is a gap to close, not a thing to copy.
 */

export const SITE_URL = "https://simplebooks.com";

interface PageSeo {
  title: string;
  description: string;
  /** true when the title came from the live page rather than from us. */
  fromLive?: boolean;
}

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "simplebooks - The right place to start your business",
    description: "simplebooks helps small business owners and entrepreneurs grow their businesses through financial consulting, registrations and legal services.",
    fromLive: true,
  },
  "/business-registration": {
    title: "Simplebooks - Register Your Business in Sri Lanka Online",
    description: "Register your business in Sri Lanka 100% online. Simplebooks handles company registration from name approval to certification.",
    fromLive: true,
  },
  "/income-tax-filing": {
    title: "Simplebooks | Sri Lanka Income Tax Filing Tool",
    description: "Answer a few simple questions and file an accurate return with every eligible deduction applied — reviewed by a human before it goes to the IRD.",
    fromLive: true,
  },
  "/srilanka/blog": {
    title: "Blog - Sri Lanka",
    description: "Explore Simplebooks guides and updates on tax, business registration, payroll, and company compliance in Sri Lanka.",
    fromLive: true,
  },
  "/srilanka/company-name-check": {
    title: "Company Name Check & Domain Availability Check in Sri Lanka",
    description: "Instantly check if your Company & Domain names are available for registration in Sri Lanka. Launch your business effortlessly with Simplebooks.",
    fromLive: true,
  },
  "/srilanka/contact": {
    title: "Contact Us - Sri Lanka",
    description: "Drop us a message and we'll set up a free consultation. Simplebooks helps Sri Lankan businesses with registration, bookkeeping, payroll, tax and legal services.",
    fromLive: true,
  },
  "/srilanka/dashboard/accounting-software": {
    title: "Accounting software sri lanka - Simplebooks",
    description: "Accounting software that saves time and gets payments faster",
    fromLive: true,
  },
  "/srilanka/dashboard/accounting-tool": {
    title: "Accounting Tool | Sri Lanka",
    description: "Hassle-free online company registration in srilanka",
    fromLive: true,
  },
  "/srilanka/dashboard/payroll-management-system": {
    title: "Run your payroll online in less than 5 minutes | simplebooks",
    description: "Tailor-made for Sri Lankan businesses, you can automate your EPF/ETFand taxes, get easy access to payroll reports and payslip downloading.",
    fromLive: true,
  },
  "/srilanka/faq": {
    title: "FAQ - Sri Lanka",
    description: "Answers to common questions about company registration, bookkeeping and working with Simplebooks in Sri Lanka.",
    fromLive: true,
  },
  "/srilanka/karma": {
    title: "Simplebooks - Loyalty Program",
    description: "We’ve helped over 1,500 business owners set up, run and grow their business across south asia from set up, finance to legal",
    fromLive: true,
  },
  "/srilanka/legal": {
    title: "On-demand legal services - Simplebooks",
    description: "Ensure legal compliance in your company with Simplebooks as your legal counsel. Commission, review and close contracts without complications.",
    fromLive: true,
  },
  "/srilanka/new-update-to-company-registration-law-beneficial-ownership": {
    title: "New update to company registration law: Beneficial Ownership - Sri Lanka",
    /* The live page has no meta description, and the page's own excerpt ends in
       a truncated "[…]". Written fresh rather than mirroring either. */
    description:
      "From 30 March 2026 every newly incorporated Sri Lankan company must disclose its beneficial owners to the Registrar of Companies. What the rule covers and how to file.",
    fromLive: true,
  },
  "/srilanka/payable": {
    title: "PAYABLE - Sri Lanka",
    description: "Simplebooks is now integrated with Payable — no setup fee, free for the first year, market-leading rates and transparent percentage-based pricing.",
    fromLive: true,
  },
  "/srilanka/payment-complete": {
    title: "Payment complete - Sri Lanka",
    description: "Your payment was successful. Thank you for choosing Simplebooks.",
    fromLive: true,
  },
  "/srilanka/services": {
    title: "Simplebooks - Finance, HR and legal services across Sri Lanka",
    description: "Helping small busiensses manage their finances, legal and human reserources with customized services",
    fromLive: true,
  },
  "/srilanka/services/accounting-services": {
    title: "Don’t worry about bookkeeping - Simplebooks",
    description: "Are your challenges with bookkeeping and accounting services getting hard to control? Outsource your bookkeeping and accounting services to Simplebooks and never miss a deadline again!",
    fromLive: true,
  },
  "/srilanka/services/auditing": {
    title: "Auditing - Sri Lanka",
    description: "Company audits stressing you out? We can fix that. Make the right decisions about your company by having access to the right metrics.",
    fromLive: true,
  },
  "/srilanka/services/company-secretary": {
    title: "Hire a Company Secretary Easily With Us | Simplebooks",
    description: "Are you on the lookout for company secretarial services? Get a free consultation with Simplebooks to find the right fit for your business.",
    fromLive: true,
  },
  "/srilanka/services/payroll-managment": {
    title: "Payroll Managment - Sri Lanka",
    description: "All-in-one payroll management. We are here to help you effectively manage your payroll — EPF/ETF, reports and returns handled for you.",
    fromLive: true,
  },
  "/srilanka/services/register-a-company": {
    title: "Registering a business has never been this easy! - Simplebooks",
    description: "Registering your company is the most important and basic step of starting your own business. We’ll guide you through the entire process.",
    fromLive: true,
  },
  "/srilanka/services/trademark-registration": {
    title: "Trademark Registration - Sri Lanka",
    description: "Trademark your name, logo or slogan and protect your brand from copycat competitors. Hassle free registration with Simplebooks.",
    fromLive: true,
  },
  "/srilanka/services/value-added-tax-filling": {
    title: "Manage your taxes better, minimize your tax liability - Simplebooks",
    description: "Did you know? Planning and managing your taxes efficiently can lead to lower tax rates.",
    fromLive: true,
  },
  "/srilanka/terms-conditions": {
    title: "Terms & Conditions - Sri Lanka",
    description: "Simplebooks terms and conditions — company registration at cost, and our Basic and Premium company secretarial packages.",
    fromLive: true,
  },
  "/srilanka/testimonials": {
    title: "Simplebooks - Trusted by Sri Lankan customers",
    description: "We’ve helped over 1,500 business owners set up, run and grow their business across south asia from set up, finance to legal",
    fromLive: true,
  },
  "/srilanka/thank-you": {
    title: "Thank You - Sri Lanka",
    description: "Your request has been submitted. The Simplebooks team will be in touch shortly.",
    fromLive: true,
  },
  "/srilanka/tin-registration-in-sri-lanka-latest-update": {
    title: "TIN Registration in Sri Lanka: Complete 2026 Guide",
    description: "Learn how to register for a TIN in Sri Lanka in 2025 — online, offline, or via your bank. Updated with April 2025 WHT rules, new income threshold & FAQs.",
    fromLive: true,
  },
  "/srilanka/videos": {
    title: "Videos - Sri Lanka",
    description: "The Simplebooks channel — business registration, tax, payroll, company law, bookkeeping and case studies, in English and Sinhala.",
    fromLive: true,
  },
  "/tax/ai-bot": {
    title: "Simplebooks Tax Bot - AI-Powered Tax Assistant",
    description: "File your taxes in one WhatsApp chat. Ask any tax question instantly, get a free computation, and pay only if you file.",
    fromLive: true,
  },
  "/tax/apit": {
    title: "APIT Landing Page - Sri Lanka",
    description: "Sri Lanka's most trusted APIT filing service provider. Don't let APIT filing slow your business down — let the #1 service provider take care of it.",
    fromLive: true,
  },
  "/tax/capital-gains": {
    title: "Capital Gains Tax - Simplebooks",
    description: "Expert CGT compliance and filing support that protects your investments and keeps you penalty-free — from property sales to share transactions.",
    fromLive: true,
  },
  "/tax/corporate-tax": {
    title: "Corporate Tax Services - simplebooks",
    description: "Professional Corporate Tax Services by simplebooks - Expert tax compliance, planning, and advisory services for businesses in Sri Lanka",
    fromLive: true,
  },
  "/tax/foreign-income": {
    title: "USD Income Tax Services - SimplBooks",
    description: "Professional USD Income Tax services for individuals and businesses. Expert tax preparation, compliance, and consultation services.",
    fromLive: true,
  },
  "/tax/income-tax": {
    title: "Simplebooks | Sri Lanka Income Tax Filing Tool",
    description: "Upload your forms, answer a few simple questions, and get your tax return done — 100% accurate with all eligible deductions applied, and expert support every step of the way.",
    fromLive: true,
  },
  "/tax/sscl": {
    title: "SSCL-Tax-Compliance",
    description: "SSCL Tax Compliance Made Simple",
    fromLive: true,
  },
  "/tax/tin-registration": {
    title: "TIN Registration - simplebooks | Tax Identification Number Sri Lanka",
    description: "Get your TIN Registration done hassle-free with simplebooks. Expert guidance, fast processing, and complete tax compliance for your business in Sri Lanka.",
    fromLive: true,
  },
  "/tax/vat": {
    title: "VAT Compliance Services - Simplebooks",
    description: "Transform your VAT compliance journey. We'll guide you to compliance confidence with 100% guaranteed accuracy — registration, returns and ongoing support.",
    fromLive: true,
  },
  "/tax/webinar": {
    title: "Tax Webinar",
    description: "Master Sri Lankan tax compliance with expert-led webinars. Choose from specialised tax topics tailored to your business needs.",
    fromLive: true,
  },
};

/** Builds the full Metadata object for a route, canonical and OG included. */
export function pageMetadata(route: string, overrides: Metadata = {}): Metadata {
  const seo = PAGE_SEO[route];
  const url = `${SITE_URL}${route === "/" ? "" : route}`;

  return {
    title: seo?.title,
    description: seo?.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_LK",
      siteName: "Simplebooks",
      url,
      title: seo?.title,
      description: seo?.description,
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.title,
      description: seo?.description,
    },
    ...overrides,
  };
}
