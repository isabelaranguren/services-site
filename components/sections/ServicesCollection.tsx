"use client"
import { useState } from "react";
import CollectionItemCard from "../CollectionItemCard";

const servicesData = [
  {
    slug: "interior-design",
    name: "Interior & Exterior Design",
    description:
      "Create a cohesive and stylish home with personalized design services. We tailor each space to reflect your vision, optimizing layout, lighting, and décor.",
    imageUrl: "/images/interior-design.jpg",
    imageAlt: "Modern living room with thoughtfully arranged furniture",
    order: "01",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    description:
      "Transform your bathroom into a serene and modern retreat with expert tilework, elegant countertops, and high-end finishes. We handle every detail for a clean, functional, and beautiful upgrade.",
    imageUrl: "/images/bathroom-1.jpg",
    imageAlt: "Tile and countertop installation in a modern bathroom",
    order: "02",
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    description:
      "Give your kitchen a fresh look with custom layouts, updated cabinetry, premium surfaces, and designer backsplashes. We blend functionality and style to craft your dream cooking space.",
    imageUrl: "/images/kitchen.jpg",
    imageAlt: "Custom backsplash installed in a stylish kitchen",
    order: "03",
  },
  {
    slug: "painting",
    name: "Painting Services",
    description:
      "Revitalize your interior or exterior with professional painting services. Using high-quality materials and precise techniques, we ensure smooth, vibrant, and long-lasting results.",
    imageUrl: "/images/painting.jpg",
    imageAlt: "Freshly painted interior with modern color palette",
    order: "04",
  },
  {
    slug: "flooring",
    name: "Floor Installation",
    description:
      "Upgrade your space with durable and stylish flooring—from hardwood to luxury vinyl. Our expert installation ensures a flawless finish that enhances your home’s look and feel.",
    imageUrl: "/floors.jpg",
    imageAlt: "New wood flooring being installed in a living room",
    order: "05",
  },

  {
    slug: "more-services",
    name: "More Services",
    description:
      "Looking for something else? We offer a variety of home improvement services tailored to your needs—from carpentry to custom builds. Let us bring your ideas to life.",
    imageUrl: "/images/exterior.jpg",
    imageAlt: "Beautifully designed home exterior with modern landscaping",
    order: "06",
  },
];

export default function ServicesCollection() {
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
          <CollectionItemCard service={service} />
        </div>
      ))}
    </section>
  );
}
