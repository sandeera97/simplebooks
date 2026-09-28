import type { LeadFormConfig } from "@/components/v2/LeadForm";

/**
 * Which consultation form each page carries, transcribed from the live site.
 *
 * The live site runs two different stacks and they do not share a form:
 *
 *  - The WordPress pages (services, legal, the dashboard tools) use Gravity
 *    Forms. Split first/last name, a marketing-consent checkbox, an optional
 *    Preferred Language, and "Set up a Free Consultation".
 *  - The newer React tax pages use a single "Name", one qualifying question,
 *    a REQUIRED Preferred Language, an optional message, and "Set up Free
 *    Consultation" (note: no "a").
 *
 * Question wording and option lists are quoted from the live pages — they are
 * what the sales team actually qualifies on, so they are not paraphrased.
 *
 * Pages deliberately absent have no form on the live site either; see
 * NO_FORM_ON_LIVE below so that stays a recorded finding rather than a gap.
 */

const YES_NO = ["Yes", "No"];

/** The React tax pages: single name, one question, message box. */
function taxForm(question: { label: string; options?: string[] }): LeadFormConfig {
  return {
    heading: "Get Expert Tax Help Today",
    nameMode: "single",
    question: {
      label: question.label,
      placeholder: "Select an option",
      options: question.options ?? YES_NO,
      required: true,
    },
    showLanguage: true,
    languageRequired: true,
    languagePlaceholder: "Select a language",
    languageOptions: ["English", "Sinhala", "Tamil"],
    showMessage: true,
    showConsent: false,
    buttonLabel: "Set up Free Consultation",
  };
}

/** The Gravity Forms service pages. */
function serviceForm(heading = "Get Started"): LeadFormConfig {
  return {
    heading,
    nameMode: "split",
    showLanguage: true,
    languageRequired: false,
    languagePlaceholder: "Preferred Language",
    languageOptions: ["Sinhala", "English", "Tamil"],
    showMessage: false,
    showConsent: true,
    buttonLabel: "Set up a Free Consultation",
  };
}

export const LEAD_FORMS: Record<string, LeadFormConfig> = {
  /* ---- Gravity Forms service pages ---- */
  "/srilanka/services/register-a-company": serviceForm("Free consultation"),
  "/srilanka/services/auditing": serviceForm(),
  "/srilanka/services/accounting-services": serviceForm(),
  "/srilanka/services/company-secretary": serviceForm(),
  "/srilanka/services/payroll-managment": serviceForm(),
  "/srilanka/services/trademark-registration": serviceForm(),
  "/srilanka/legal": serviceForm(),
  "/srilanka/dashboard/accounting-software": serviceForm(),

  /* The payroll tool qualifies on headcount and current process. */
  "/srilanka/dashboard/payroll-management-system": {
    ...serviceForm(),
    showConsent: false,
    languageRequired: true,
    question: {
      label: "How many employees does your business currently have?",
      placeholder: "How many employees does your business currently have?",
      options: ["1-10", "11-50", "51-100", "100+"],
      required: true,
    },
    services: {
      label: "How are you currently managing your payroll?",
      placeholder: "How are you currently managing your payroll?",
      options: [
        "Manual processing (Eg: spreadsheets)",
        "Outsourced to an external provider",
        "Payroll software",
      ],
      required: true,
    },
  },

  /* ---- Business registration (its own React page) ---- */
  "/business-registration": {
    heading: "Set up a free consultation",
    nameMode: "split",
    question: {
      label: "Have you decided on a company name?",
      placeholder: "Select an option",
      options: YES_NO,
      required: true,
    },
    showLanguage: true,
    languageRequired: true,
    languagePlaceholder: "Select a language",
    languageOptions: ["English", "Sinhala", "Tamil"],
    showConsent: false,
    buttonLabel: "Set up a Free Consultation",
  },

  /* ---- APIT is Gravity Forms and qualifies on the company name ---- */
  "/tax/apit": {
    ...serviceForm(),
    showConsent: false,
    languageRequired: true,
    question: {
      label: "Have you already chosen a name for your company?",
      placeholder: "Select an option",
      options: YES_NO,
      required: true,
    },
  },

  /* ---- React tax pages ---- */
  "/tax/vat": taxForm({ label: "Are you VAT registered?" }),
  "/tax/corporate-tax": taxForm({ label: "Is your business registered as a Private Limited Company?" }),
  "/tax/foreign-income": taxForm({ label: "Do you earn more than USD 400 per month in foreign currency?" }),
  "/tax/sscl": taxForm({
    label: "Does your company’s turnover exceed LKR 15 million per quarter or LKR 60 million per annum?",
  }),
  "/tax/capital-gains": taxForm({
    label: "Have you sold or transferred any land, property, or investments during this year?",
  }),
  "/tax/tin-registration": taxForm({
    label: "What type of TIN registration do you need?",
    options: ["Individual TIN registration", "Corporate TIN registration"],
  }),

  /* ---- Webinar: multi-select interests, and it signs you up rather than
         booking a consultation, so the button and note differ ---- */
  "/tax/webinar": {
    heading: "Get Notified About Our Next Free Webinar",
    nameMode: "single",
    checkboxGroup: {
      label: "Areas of Interest",
      options: ["Individual Tax", "Corporate Tax", "VAT Compliance", "Foreign Income"],
      required: true,
    },
    showLanguage: true,
    languageRequired: true,
    languagePlaceholder: "Select a language",
    languageOptions: ["English", "Sinhala", "Tamil"],
    showMessage: true,
    showConsent: false,
    buttonLabel: "Sign up for Free Webinar",
    note: "We'll only send you notifications about free webinars. No spam, unsubscribe anytime.",
  },
};

/**
 * Checked on the live site and confirmed to have NO lead form. Recorded so a
 * future pass does not have to re-check, and so their absence reads as a
 * finding rather than an oversight.
 */
export const NO_FORM_ON_LIVE = [
  "/", // homepage has one, but it is the existing GetStarted section
  "/income-tax-filing",
  "/tax/income-tax",
  "/tax/ai-bot", // live /whatsapp-ai-chatbot renders no form
  "/srilanka/company-name-check",
  "/srilanka/dashboard/accounting-tool",
  "/srilanka/faq",
  "/srilanka/karma",
  "/srilanka/services",
  "/srilanka/services/value-added-tax-filling",
] as const;

export function leadFormFor(route: string): LeadFormConfig | undefined {
  return LEAD_FORMS[route];
}
