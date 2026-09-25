import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Users, DollarSign, ShieldCheck } from "lucide-react";
import Calculator from "@/components/sections/epf-etf/Dynamics";
import { OrganizationSchema } from "@/utils/schema";

export const metadata = {
  title: "EPF Calculator - 2025",
  description:
    "Use our 2025 EPF calculator to quickly estimate your Employee Provident Fund contributions with updated Sri Lankan rates.",
};

const EpfEtfCalculator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "EPF Calculator - 2025",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/payroll/epf-calculator/",
      description:
        "Use our 2025 EPF calculator to quickly estimate your Employee Provident Fund contributions with updated Sri Lankan rates.",
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
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#080A3C] mb-2">
            EPF Calculator Effective from 2025
          </h1>
          <p className="text-muted-foreground">
            Calculate EPF, ETF, and net salary on your income quickly and
            accurately with our 2025 EPF/ETF calculator. Stay compliant with Sri
            Lanka’s latest rates.
          </p>
        </div>

        <Calculator />

        {/* About Section - Always visible */}
        <Card className="border-gray-300 shadow-md rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-[#080A3C] text-center font-semibold tracking-wide">
              About EPF and ETF
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              {/* Employee Contribution */}
              <div className="flex items-start space-x-4">
                <div className="p-1.5 bg-[#FF612F] rounded-full text-white">
                  <UserCheck size={16} strokeWidth={1.5} />
                </div>
                <p>
                  <strong className="text-[#FF612F]">
                    Employee Contribution of EPF:
                  </strong>{" "}
                  Employees contribute <span className="font-semibold">8%</span>{" "}
                  of their monthly salary to EPF.
                </p>
              </div>

              {/* Employer Contribution */}
              <div className="flex items-start space-x-4">
                <div className="p-1.5 bg-[#FF612F] rounded-full text-white">
                  <Users size={16} strokeWidth={1.5} />
                </div>
                <p>
                  <strong className="text-[#FF612F]">
                    Employer Contribution:
                  </strong>{" "}
                  Employers contribute{" "}
                  <span className="font-semibold">12%</span> to EPF and{" "}
                  <span className="font-semibold">3%</span> to ETF, totaling{" "}
                  <span className="font-semibold">15%</span> of the
                  employee&#39;s monthly salary.
                </p>
              </div>

              {/* Net Salary */}
              <div className="flex items-start space-x-4">
                <div className="p-1.5 bg-[#FF612F] rounded-full text-white">
                  <DollarSign size={16} strokeWidth={1.5} />
                </div>
                <p>
                  <strong className="text-[#FF612F]">Net Salary:</strong> After
                  EPF deductions, the net salary is{" "}
                  <span className="font-semibold">92%</span> of the basic
                  salary.
                </p>
              </div>

              {/* About EPF */}
              <div className="flex items-start space-x-4">
                <div className="p-1.5 bg-[#FF612F] rounded-full text-white">
                  <ShieldCheck size={16} strokeWidth={1.5} />
                </div>
                <p>
                  The Employees Provident Fund is a social security scheme
                  established by the government of Sri Lanka. It provides
                  retirement benefits and financial security to employees in the
                  formal sector.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EpfEtfCalculator;
