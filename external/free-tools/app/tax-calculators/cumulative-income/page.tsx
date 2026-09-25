import React from "react"
import { Card } from "@/components/ui/card"
import ContactAssistance from "@/components/ContactAssistance"
import CumulativeCalculator from "@/components/calculators/CumulativeCalculator"
import { OrganizationSchema } from "@/utils/schema"

export const metadata = {
  title: "Tax Calculator for Foreign Salaries - 2025",
  description:
    "Calculate tax on foreign salaries for Sri Lankan residents working remotely. Freelancers use the foreign income tax calculator.",
}

const CumulativeApitCalculator = () => {
  const jsonLd = [
    OrganizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Tax Calculator for Foreign Salaries - 2025",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://simplebooks.com/tools/tax-calculators/cumulative-income/",
      description:
        "Calculate tax on foreign salaries for Sri Lankan residents working remotely.",
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
            Employment income received from foreign employer
          </h1>

          <h1 className="text-lg md:text-xl font-bold text-center text-[#080A3C]">
            Tax Calculator w.e.f 01.04.2025
          </h1>

          <p className="text-center text-muted-foreground">
            This table is for{" "}
            <span className="font-semibold">
              {" "}
              people who live in Sri Lanka and are physically here, but work
              from home for a company outside Sri Lanka.
            </span>{" "}
            It does not apply to independent service providers and freelancers.
          </p>
          <p className="text-center text-muted-foreground">
            If you are a freelancer or independent worker, please use this
            calculator instead:{" "}
            <a
              href="https://simplebooks.com/tools/tax-calculators/income-foreign/"
              className="text-blue-600 hover:underline text-sm">
              Foreign Income Tax Calculator
            </a>
          </p>
        </div>

        <div className="my-4 p-3 border-l-4 border-blue-500 bg-blue-50 text-sm rounded-md">
          <p className="text-blue-800">
            <span className="font-semibold">Important:</span> Enter your income
            for each month of the tax year (April to March). The calculator will
            compute the cumulative tax and monthly payable amount according to
            IRD regulations.
          </p>
        </div>

        <Card className="p-4 md:p-6 border overflow-hidden max-w-full mb-6">
          <div className="w-full">
            <CumulativeCalculator />
          </div>
        </Card>

        <ContactAssistance title="Need Expert APIT Tax Assistance?" />
      </div>
    </section>
  )
}

export default CumulativeApitCalculator
