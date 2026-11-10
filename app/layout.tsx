import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import localFont from "next/font/local";
import AttributionCapture from "@/components/AttributionCapture";
import "./globals.css";

/* Self-hosted, not next/font/google. On Vercel, next/font/google downloads the
   font files from Google during the build, and under Turbopack that step fails
   now and then ("Can't resolve '@vercel/turbopack-next/internal/font/google/
   font'") — a failed deploy over a network hiccup, fixed only by rebuilding.

   These are the exact files Google serves, byte for byte: the Latin subset of
   Poppins v24 and Plus Jakarta Sans v12, the same six files that were being
   preloaded. The other subsets are left out because nothing on the site uses
   them; its Sinhala is outside every Google subset anyway, so it renders in
   the system's Sinhala font either way. Both fonts are SIL Open Font License;
   the licences sit beside the files in ./fonts. */
const poppins = localFont({
  src: [
    { path: "./fonts/poppins-latin-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/poppins-latin-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-latin-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-latin-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/poppins-latin-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

/* The 2026 redesign is set in Plus Jakarta Sans. Poppins stays until every
   page has been moved over. Jakarta is a variable font, so one file covers
   every weight. */
const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin.woff2",
  weight: "400 800",
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  /* Without metadataBase, Next resolves canonical and OG URLs relative to the
     deploy host, so a preview build would advertise its own vercel.app URL as
     canonical. */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Simplebooks — Business Registration, Accounting & Tax Services Sri Lanka",
    template: "%s",
  },
  description:
    "Simplebooks has helped over 4,500 businesses register and grow across Sri Lanka, Bangladesh and India. Get expert help with company registration, bookkeeping, payroll, legal and tax services.",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: SITE_URL,
    siteName: "Simplebooks",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {children}
        {/* Records utm_* / fbclid on arrival so any form can report the ad
            that produced the enquiry. Renders nothing. */}
        <AttributionCapture />
      </body>
    </html>
  );
}
