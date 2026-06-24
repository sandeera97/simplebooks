import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simplebooks — Business Registration, Accounting & Tax Services Sri Lanka",
  description:
    "Simplebooks has helped over 4,500 businesses register and grow across Sri Lanka, Bangladesh and India. Get expert help with company registration, bookkeeping, payroll, legal and tax services.",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://simplebooks.com",
    siteName: "Simplebooks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
