export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Simplebooks",
  url: "https://simplebooks.com",
  logo: "https://simplebooks.com/wp-content/uploads/2023/06/cropped-simplebooks-new-favicon-1.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94-117-555-878",
    contactType: "Customer Support",
    areaServed: "LK",
    availableLanguage: ["English", "Sinhala", "Tamil"],
  },
  sameAs: [
    "https://www.facebook.com/teamsimplebooks",
    "https://www.linkedin.com/company/simplebooks-ltd",
    "https://twitter.com/teamsimplebooks",
    "https://www.instagram.com/teamsimplebooks",
    "https://www.youtube.com/c/Simplebooks",
  ],
}

export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Simplebooks",
  image:
    "https://simplebooks.com/wp-content/uploads/2023/06/cropped-simplebooks-new-favicon-1.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Millennium Tower, 2nd Floor, 345 Galle Road",
    addressLocality: "Colombo 03",
    addressRegion: "Western",
    postalCode: "00300",
    addressCountry: "LK",
  },
  telephone: "+94-117-555-878",
  url: "https://simplebooks.com",
}

export const WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Simplebooks Tools",
  url: "https://simplebooks.com/tools/",
}
