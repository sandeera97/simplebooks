/**
 * Blog data shared between the server page and the client archive.
 *
 * It lives outside BlogArchive.tsx because that file is a client module, and a
 * server component cannot import plain values across the "use client"
 * boundary — only components come through.
 */

export interface ArchivePost {
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  category: string;
}

export const CATEGORIES = [
  "All Categories",
  "Secretarial Service",
  "Payroll Management",
  "Business Registration",
  "Tax",
  "Other",
] as const;

/** The two posts that predate the CMS; they own their own URLs and pages. */
export const LEGACY_POSTS = [
  {
    title: "New update to company registration law: Beneficial Ownership",
    excerpt:
      "From 30th March 2026, all newly incorporated companies in Sri Lanka must disclose their beneficial ownership details.",
    href: "/srilanka/new-update-to-company-registration-law-beneficial-ownership",
    image: "/blog/beneficial-ownership-thumbnail.png",
    category: "Business Registration",
  },
  {
    title: "TIN Registration in Sri Lanka (2026): Everything You Need to Know",
    excerpt:
      "Sri Lanka’s tax landscape has undergone a major transformation in recent years. Here is what you need to know about TIN registration.",
    href: "/srilanka/tin-registration-in-sri-lanka-latest-update",
    image: "/blog/tin-registration-thumbnail.jpg",
    category: "Tax",
  },
] as const satisfies readonly ArchivePost[];
