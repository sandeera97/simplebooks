import Generator from "@/components/sections/salary-slip/Dynamics";
import { OrganizationSchema } from "@/utils/schema";

export const metadata = {
  title: "Salary Calculator Sri Lanka | EPF, ETF & Tax Deductions",
  description:
    "Use our free Sri Lanka salary calculator to get your net salary after EPF, ETF & tax. Easy, fast & accurate salary slip generator for 2025.",
};

const SalarySlipGenerator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Salary Calculator Sri Lanka | EPF, ETF & Tax Deductions",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/payroll/salary-calculator-sri-lanka/",
      description:
        "Use our free Sri Lanka salary calculator to get your net salary after EPF, ETF & tax. Easy, fast & accurate salary slip generator for 2025.",
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
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#080A3C] mb-3">
            Sri Lanka Salary Calculator – Get Your Accurate Net Salary
          </h1>
          <p className="text-gray-600">
            Generate Salary Slip After EPF, ETF & Tax Deductions
          </p>
        </div>
        <Generator />
      </div>
    </section>
  );
};

export default SalarySlipGenerator;
