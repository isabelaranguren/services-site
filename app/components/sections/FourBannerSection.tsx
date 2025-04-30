"use client"
import { useState } from "react";
import CollectionItemBanner from "../CollectionItemBanner";

const servicesData = [
  {
    slug: "commercial-transformation",
    name: "Commercial Transformation",
    description: "We believe your space should reflect your unique personality, lifestyle, and vision. Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality.",
    imageUrl: "/images/1.jpg", // Correct: Starts with '/'
    imageAlt: "",
    order: "01",
  },
  {
    slug: "home-renovation",
    name: "Home Renovation",
    description: "We believe your space should reflect your unique personality, lifestyle, and vision. Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality.",
    imageUrl: "/images/2.jpg", // Correct: Starts with '/'
    imageAlt: "",
    order: "02",
  },
  {
    slug: "backyard-makeovers",
    name: "Backyard Makeovers",
    description: "...",
    imageUrl: "/images/3.jpg", // Correct: Starts with '/'
    imageAlt: "...",
    order: "03",
  },
  {
    slug: "customised-projects",
    name: "Customised Projects",
    description: "...",
    imageUrl: "/images/4.jpg", // Correct: Starts with '/'
    imageAlt: "...",
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
