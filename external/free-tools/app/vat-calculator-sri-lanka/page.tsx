import ContactAssistance from "@/components/ContactAssistance"
import Calculator from "@/components/sections/VAT/Dynamics"
import { OrganizationSchema } from "@/utils/schema"

export const metadata = {
  title: "VAT Calculator Sri Lanka 2025 – Accurate VAT Calculation Made Easy",
  description:
    "Calculate VAT in Sri Lanka easily with our 2025 VAT calculator. Get precise VAT amounts for your business or purchases fast and accurate.",
}

const VatCalculator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "VAT Calculator Sri Lanka 2025 – Accurate VAT Calculation Made Easy",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/vat-calculator-sri-lanka/",
      description:
        "Calculate VAT in Sri Lanka easily with our 2025 VAT calculator. Get precise VAT amounts for your business or purchases fast and accurate.",
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
            VAT Calculator for Sri Lanka – Updated for 2025
          </h1>
          <p className="text-gray-600">
            Calculate VAT in Sri Lanka easily with our 2025 VAT calculator.
          </p>
        </div>

        <Calculator />

        <ContactAssistance title="Need Expert VAT Assistance?" />
      </div>
    </section>
  )
}

export default VatCalculator
