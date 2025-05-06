"use client"
import { useState } from "react";
import CollectionItemBanner from "../CollectionItemBanner";
const servicesData = [
  {
    slug: "bathroon-remodeling",
    name: "Bathroom Remodeling",
    description:
      "Upgrade your bathroom into a relaxing and modern retreat with expert tilework, sleek countertops, and stylish finishes. We handle every detail to ensure a clean, functional, and elegant transformation.",
    imageUrl: "/images/bathroom-1.jpg",
    imageAlt: "Tile and countertop installation in a modern bathroom",
    order: "01",
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    description:
      "Revamp your kitchen with tailored layouts, updated cabinetry, premium surfaces, and beautiful backsplashes. Our remodeling services blend function and flair to create your dream cooking space.",
    imageUrl: "/images/kitchen.jpg",
    imageAlt: "Custom backsplash installed in a stylish kitchen",
    order: "02",
  },
  {
    slug: "Painting",
    name: "Painting",
    description:
      "Refresh your interiors or exteriors with professional painting services. We use high-quality paints and expert techniques to deliver smooth, lasting finishes that elevate your space.",
    imageUrl: "/images/painting.jpg",
    imageAlt: "Freshly painted interior with modern color palette",
    order: "03",
  },
  {
    slug: "Flooring",
    name: "Flooring",
    description:
      "Enhance your home with durable and beautiful flooring options—from hardwood to luxury vinyl. We ensure flawless installation that complements your interior design and stands the test of time.",
    imageUrl: "/images/floors.jpg",
    imageAlt: "New wood flooring being installed in a living room",
    order: "04",
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    description:
      "Bring your vision to life with personalized interior design services. We create stylish, cohesive spaces that reflect your taste and optimize comfort, lighting, and layout.",
    imageUrl: "/images/interior-design.jpg",
    imageAlt: "Modern living room with thoughtfully arranged furniture",
    order: "05",
  },
  {
    slug: "exteior-design",
    name: "Exterior Design",
    description:
      "Boost curb appeal with exterior design services that balance beauty and function. From landscaping to facade updates, we transform your exterior into a welcoming, well-designed space.",
    imageUrl: "/images/exterior.jpg",
    imageAlt: "Beautifully designed home exterior with modern landscaping",
    order: "06",
  },
];
export default function FourBannerSection() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const getBasis = (index: number) => {
    if (hoveredIndex === -1) {
      return "basis-1/4";
    } else if (hoveredIndex === index) {
      return "basis-[70%]"; 
    } else {
      return "basis-[10%]";
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch h-[610px] mx-auto relative overflow-hidden">
      {servicesData.map((service, index) => (
        <div
          key={service.slug}
          className={`
            group 
            h-full
            transition-all duration-500 ease-in-out 
            ${getBasis(index)} // Dynamically set flex-basis
          `}
          onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on enter
          onMouseLeave={() => setHoveredIndex(-1)} // Reset on leave
        >
          <CollectionItemBanner service={service} />
        </div>
      ))}
    </section>
  );
}
