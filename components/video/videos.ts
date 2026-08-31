/* YouTube video IDs collected from the live simplebooks.com site.
   Keyed by page so each page pulls its own video(s). */
export const VIDEOS = {
  invoicing:        { id: "bzvATnyftHs", title: "Invoicing Tool Dashboard Demo Video" },
  payrollTool:      { id: "CB39k25jqmY", title: "Simplebooks Payroll Management Tool For Small Business" },
  taxTool:          { id: "umw1TPEk5LA", title: "Easy Guide to Using the Simplebooks Tax Tool for Tax Filing" },
  tinRegistration:  { id: "PxvI0ZAn-4Y", title: "2025 updates TIN Number registration guide" },
  apit:             { id: "GDJlVbT7oVs", title: "APIT Tax Update 2025" },
  registerCompany:  { id: "ab49Ucu6Nr4", title: "How registration works through the dashboard" },
  businessRegistration: { id: "I-nmcacevn0", title: "How Registration Works - Simplebooks" },
} as const;

/** "Previous Webinars" list, in live-site order. */
export const WEBINARS = [
  { id: "u5EX9H1MBWo", title: "Complete Guide to Filing APIT Returns" },
  { id: "2i--WADDvTM", title: "A-Z Guide to Simplebooks Tax Tool" },
  { id: "jgXm421B5N8", title: "Filing 2024 Income Tax Returns: Companies & Individuals" },
  { id: "VnCkAukxwg4", title: "Complete overview of the Individual Income Tax" },
  { id: "msgKLNwRR9g", title: "VAT & SSCL Updates" },
  { id: "uP55cOAKvic", title: "Registering a Business Made Simple" },
] as const;
