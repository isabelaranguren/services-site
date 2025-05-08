import { WithContext, LocalBusiness, Service } from "schema-dts";
import { BASE_URL, BUSINESS_INFO } from "./constants";

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS_INFO.name, 
  image: `${BASE_URL}${BUSINESS_INFO.brand.logo}`,
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

export const servicesSchema: WithContext<Service>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kitchen Remodeling",
    description:
      "Custom kitchen remodeling in Houston with cabinetry, countertops, and modern finishes.",
    areaServed: {
      "@type": "Place",
      name: "Houston, TX",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      url: BASE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bathroom Remodeling",
    description:
      "Bathroom renovations including tiling, vanities, and shower upgrades in Houston.",
    areaServed: {
      "@type": "Place",
      name: "Houston, TX",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      url: BASE_URL,
    },
  },
];



export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a wide range of remodeling services including kitchen renovations, bathroom remodels, whole home renovations, and commercial space transformations.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary depending on scope and complexity. A typical kitchen remodel takes 4-6 weeks, while bathroom remodels usually take 2-3 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide free consultations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer free initial consultations to discuss your project needs, budget, and timeline.",
      },
    },
  ],
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_INFO.phone,
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
};