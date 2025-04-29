import { WithContext, LocalBusiness, WebSite } from "schema-dts";

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Best Remodelers Inc.",
  image: "https://yourwebsite.com/logo.png",
  "@id": "https://yourwebsite.com/",
  url: "https://yourwebsite.com/",
  telephone: "+1-800-555-1234",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77002",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.7604",
    longitude: "-95.3698",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/bestremodelers",
    "https://www.instagram.com/bestremodelers",
  ],
};

export const websiteSchema: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://yourwebsite.com/",
  name: "Best Remodelers",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://yourwebsite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
