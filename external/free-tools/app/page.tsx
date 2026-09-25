import {
  LocalBusinessSchema,
  OrganizationSchema,
  WebsiteSchema,
} from "@/utils/schema"

export const metadata = {
  title: "Simplebooks Tools",
  description:
    "Use our free tools to calculate taxes and other financial calculations as well as generate various documents",
}

const Index = () => {
  const jsonLd = [WebsiteSchema, OrganizationSchema, LocalBusinessSchema]

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Welcome to Simplebooks Tools
          </h1>
          <h2 className="text-lg md:text-xl font-bold text-center text-[#080A3C]">
            Use our free tools to calculate taxes and other financial
            calculations as well as generate various documents
          </h2>
          <p className="text-gray-600">
            Please select a tool from the sidebar to get started.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Index
