import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simplebooks — Business Registration, Accounting & Tax Services Sri Lanka",
  description:
    "Simplebooks has helped over 5,000 businesses register and grow across Sri Lanka, Bangladesh and India. Get expert help with company registration, bookkeeping, payroll, legal and tax services.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
