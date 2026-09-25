import Calculator from "@/components/sections/WHT/Dynamics"
import ContactAssistance from "@/components/ContactAssistance"
import { OrganizationSchema } from "@/utils/schema"

export const metadata = {
  title: "WHT Tax Calculator 2025 – Calculate Withholding Tax Easily",
  description:
    "Use our 2025 WHT tax calculator to quickly estimate your withholding tax liability accurately for Sri Lanka’s updated tax rates.",
}

const WhtCalculator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "WHT Tax Calculator 2025 – Calculate Withholding Tax Easily",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/wht-calculator/",
      description:
        "Use our 2025 WHT tax calculator to quickly estimate your withholding tax liability accurately for Sri Lanka’s updated tax rates.",
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
  ]
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
            WHT Tax Calculator Effective for 2025
          </h1>
          <p className="text-gray-600">
            Generate Your WHT Certificate in 3 Minutes
          </p>
        </div>
        <Calculator />
        <ContactAssistance title="Need Expert WHT Assistance?" />
      </div>
    </section>
  )
}

export default WhtCalculator
