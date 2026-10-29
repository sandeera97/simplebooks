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
  /** Publish date, so every source can be merged into one newest-first list. */
  date?: string;
}

/* Ordered by how much of the archive each one holds, so the filters people
   actually use are the ones they reach first. */
export const CATEGORIES = [
  "All Categories",
  "Tax",
  "Business Registration",
  "Legal Services",
  "Secretarial Service",
  "Bookkeeping",
  "Payroll Management",
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
    date: "2026-04-20T00:00:00",
  },
  {
    title: "TIN Registration in Sri Lanka (2026): Everything You Need to Know",
    excerpt:
      "Sri Lanka’s tax landscape has undergone a major transformation in recent years. Here is what you need to know about TIN registration.",
    href: "/srilanka/tin-registration-in-sri-lanka-latest-update",
    image: "/blog/tin-registration-thumbnail.jpg",
    category: "Tax",
    date: "2026-09-20T00:00:00",
  },
] as const satisfies readonly ArchivePost[];
