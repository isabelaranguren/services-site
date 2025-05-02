"use client"
import React, { useState } from "react";
import Link from "next/link";

const imageUrls = [
  "/images/1.jpg", 
  "/images/2.jpg", 
  "/images/3.jpg", 
  "/images/4.jpg", 
];

interface PictureItemProp {
  imageUrl: string;
  href?: string;
}

const PictureItem: React.FC<PictureItemProp> = ({
  imageUrl,
  href = "#",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-[200px] items-center justify-center overflow-hidden sm:h-[240px] md:h-[300px]" // .instagram-links - adjusted height for responsiveness
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110" // .background + hover scale
        style={{ backgroundImage: `url(${imageUrl})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50"></div>{" "}
      </div>

      <div
        className={`relative z-10 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`} 
      >
      
      </div>
    </Link>
  );
};

const PictureGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">

      {imageUrls.map((url, index) => (
        <PictureItem
          key={index}
          imageUrl={url}
          href="https://www.instagram.com/"
        />
      ))}
    </div>
  );
};

export default PictureGrid;
