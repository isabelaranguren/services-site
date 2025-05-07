import { WithContext, LocalBusiness, WebSite } from "schema-dts";
import { BASE_URL, BUSINESS_INFO } from "./constants";

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS_INFO.name, 
  image: "https://yourwebsite.com/logo.png",
  "@id": BASE_URL,
  url: BASE_URL,
  telephone: BUSINESS_INFO.phone,
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
  },
};
