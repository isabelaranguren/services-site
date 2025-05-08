"use client";
import React, { useState } from "react";

const imageUrls = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
];

interface PictureItemProp {
  imageUrl: string;
}

const PictureItem: React.FC<PictureItemProp> = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex h-[200px] items-center justify-center overflow-hidden sm:h-[240px] md:h-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50"></div>
      </div>

      <div
        className={`relative z-10 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Optional overlay content goes here */}
      </div>
    </div>
  );
};

const PictureGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {imageUrls.map((url, index) => (
        <PictureItem key={index} imageUrl={url} />
      ))}
    </div>
  );
};

export default PictureGrid;
