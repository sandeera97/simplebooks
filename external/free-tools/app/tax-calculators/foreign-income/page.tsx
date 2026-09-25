import { Card } from "@/components/ui/card";
import ForeignCalculator from "@/components/calculators/ForeignCalculator";
import ContactAssistance from "@/components/ContactAssistance";
import { OrganizationSchema } from "@/utils/schema";

export const metadata = {
  title: "Tax Calculator for Individual Service Exporters - 2025",
  description:
    "Tax calculator for individual service exporters to calculate tax on foreign income. For foreign earnings only, excludes local income.",
};

const ApiitCalculator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Tax Calculator for Individual Service Exporters - 2025",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/tax-calculators/foreign-income/",
      description:
        "Tax calculator for individual service exporters to calculate tax on foreign income. For foreign earnings only, excludes local income.",
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
            Tax Calculator for Individual Service Exporters
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-center text-[#080A3C]">
            Tax Calculator w.e.f 01.04.2025
          </h2>

          <p className="text-center text-muted-foreground">
            This calculator is only for income earned from outside the country
            (foreign income). &quot;Profit&quot; means the money you make after
            taking away your business expenses. If you earn money inside the
            country (local income), please don&#39;t use this calculator.
          </p>
        </div>

        <Card className="p-4 md:p-6 border overflow-hidden max-w-full mb-6">
          <div className="w-full">
            <ForeignCalculator />
          </div>
        </Card>

        <ContactAssistance title="Need Expert APIT Assistance?" />
      </div>
    </section>
  );
};

export default ApiitCalculator;
