import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import AttributionCapture from "@/components/AttributionCapture";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

/* The 2026 redesign is set in Plus Jakarta Sans. Poppins stays until every
   page has been moved over. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
