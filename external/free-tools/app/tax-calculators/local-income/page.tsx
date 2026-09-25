import { Card } from "@/components/ui/card";
import LocalCalculator from "@/components/calculators/LocalCalculator";
import ContactAssistance from "@/components/ContactAssistance";
import { OrganizationSchema } from "@/utils/schema";

export const metadata = {
  title: "Tax Calculator for Local Salaries - 2025",
  description:
    "Calculate your local salary tax for 2025 with our tax calculator using updated Sri Lanka tax rates from April 1, 2025.",
};

const ApiitCalculator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Tax Calculator for Local Salaries - 2025",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/tax-calculators/local-income/",
      description:
        "Calculate your local salary tax for 2025 with our tax calculator using updated Sri Lanka tax rates from April 1, 2025.",
      creator: {
        "@type": "Organization",
        name: "Simplebooks",
        url: "https://simplebooks.com",
      },
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "LKR",
      },
    },
  ];

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <div className="space-y-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-[#080A3C]">
            Tax Calculator effective from 01.04.2025
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-center text-[#080A3C]">
            Calculate PAYE, APIT, and Tax on Your Local Salary
          </h2>
          <p className="text-center text-muted-foreground">
            Calculate the taxable amount for income earned within Sri Lanka,
            considering the revised tax rates from 01.04.2025.
          </p>
        </div>

        <Card className="p-4 md:p-6 border overflow-hidden max-w-full mb-6">
          <div className="w-full">
            <LocalCalculator />
          </div>
        </Card>

        <ContactAssistance title="Need Expert APIT Assistance?" />
      </div>
    </section>
  );
};

export default ApiitCalculator;
