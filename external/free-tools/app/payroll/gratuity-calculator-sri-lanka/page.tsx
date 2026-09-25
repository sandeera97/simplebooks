import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Calculator from "@/components/sections/gratuity/Dynamics";
import { OrganizationSchema } from "@/utils/schema";

export const metadata = {
  title:
    "Gratuity Calculator Sri Lanka 2025 – Calculate Your Gratuity Entitlement",
  description:
    "Calculate your gratuity entitlement in Sri Lanka with our 2025 gratuity calculator. Get accurate calculations based on your years of service and salary.",
};

const GratuityCalculator = () => {
  const faqData = [
    {
      question: "What is gratuity?",
      answer:
        "Gratuity is a lump sum payment made by an employer to an employee as a token of appreciation for the years of service. In Sri Lanka, it's a mandatory payment for eligible employees under the Payment of Gratuity Act No. 12 of 1983.",
    },
    {
      question: "Who is eligible for gratuity in Sri Lanka?",
      answer:
        "To be eligible for gratuity in Sri Lanka, an employee must have completed at least 5 years of continuous service with the same employer. The employer must also have 15 or more employees during the 12 months preceding the termination date.",
    },
    {
      question: "How is gratuity calculated in Sri Lanka?",
      answer:
        "In Sri Lanka, gratuity is calculated as half a month's salary for each completed year of service. The formula is: (Last drawn monthly salary/2) × Number of completed years worked. Only full years are considered; partial years or additional months are not included in the calculation.",
    },
    {
      question: "When should gratuity be paid?",
      answer:
        "Employers are required to pay gratuity to eligible employees within 30 days of the termination of their service.",
    },
    {
      question: "Is gratuity taxable in Sri Lanka?",
      answer:
        "Yes, gratuity payments are subject to income tax in Sri Lanka. However, the first Rs. 2 million of gratuity received by an employee is tax-exempt.",
    },
  ];

  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Gratuity Calculator Sri Lanka 2025 – Calculate Your Gratuity Entitlement",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/payroll/gratuity-calculator-sri-lanka/",
      description:
        "Calculate your gratuity entitlement in Sri Lanka with our 2025 gratuity calculator. Get accurate calculations based on your years of service and salary.",
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
            Gratuity Calculator for Sri Lanka – Updated for 2025
          </h1>
          <p className="text-muted-foreground">
            Quickly calculate your gratuity entitlement in Sri Lanka with our
            2025 Gratuity Calculator. Get accurate results based on your years
            of service and final salary.
          </p>
        </div>

        {/* Calculator Section */}
        <Calculator />

        {/* FAQ Section */}
        <Card className="border-gray-300 shadow-md rounded-lg mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-[#080A3C] text-center font-semibold tracking-wide">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-medium text-[#080A3C] hover:text-[#FF612F] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-4 p-3 border-l-4 border-red-500 bg-red-50 text-sm rounded-md">
          <p className="text-red-800">
            <span className="font-semibold">DISCLAIMER:</span> This calculator
            provides an estimate based on Sri Lankan labor law. For specific
            legal advice, please consult with a legal professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GratuityCalculator;
