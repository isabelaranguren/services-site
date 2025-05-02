"use client"
import { useState } from "react";
import CollectionItemBanner from "../CollectionItemBanner";

const servicesData = [
  {
    slug: "specialty-installations",
    name: "Tile and Countertop Installation",
    description:
      "Transform your space with high-quality tile and countertop installations. Whether you're updating a kitchen or upgrading a commercial space, we deliver clean, precise, and long-lasting results.",
    imageUrl: "/images/1.jpg",
    imageAlt: "Tile and countertop installation in a modern kitchen",
    order: "01",
  },
  {
    slug: "specialty-installations",
    name: "Backsplash Design and Installation",
    description:
      "Add a custom touch to your kitchen or bathroom with our backsplash design and installation services. We combine creativity and attention to detail to match your personal style.",
    imageUrl: "/images/2.jpg",
    imageAlt: "Custom backsplash installed in a stylish kitchen",
    order: "02",
  },
  {
    slug: "specialty-installations",
    name: "Window and Door Replacements",
    description:
      "Replace outdated windows and doors with modern, energy-efficient options. We focus on quality craftsmanship and secure installation to enhance both comfort and curb appeal.",
    imageUrl: "/images/3.jpg",
    imageAlt: "Newly installed modern front door and window",
    order: "03",
  },
  {
    slug: "specialty-installations",
    name: "Carpentry",
    description:
      "From framing to finishing touches, our carpentry services cover it all. We build custom features that are both functional and visually appealing, tailored to your space.",
    imageUrl: "/images/4.jpg",
    imageAlt: "Woodworker crafting custom shelving",
    order: "04",
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
