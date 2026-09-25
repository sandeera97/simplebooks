import Calculator from "@/components/sections/bonus/Dynamics"
import ContactAssistance from "@/components/ContactAssistance"
import { OrganizationSchema } from "@/utils/schema"

export const metadata = {
  title: "Bonus Tax Calculator - 2025",
  description:
    "Calculate your bonus tax for 2025 quickly and accurately with our easy-to-use Bonus Tax Calculator based on updated Sri Lankan tax rules.",
}

const BonusApitCalculator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Bonus Tax Calculator - 2025",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/tax-calculators/bonus-tax-calculator/",
      description:
        "Calculate your bonus tax for 2025 quickly and accurately with our easy-to-use Bonus Tax Calculator based on updated Sri Lankan tax rules",
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
      <div className="container mx-auto px-4 w-full max-w-4xl">
        <div className="space-y-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-[#080A3C]">
            Bonus Tax Calculator Effective from April 2025
          </h1>
          <p className="text-center text-muted-foreground">
            Calculate APIT tax on bonus and lump-sum payments for the current
            tax year (April 2025 - March 2026)
          </p>
        </div>

        <div className="w-full">
          <Calculator />
        </div>

        <ContactAssistance title="Need Expert APIT Tax Assistance?" />
      </div>
    </section>
  )
}

export default BonusApitCalculator
