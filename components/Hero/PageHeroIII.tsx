import Image from "next/image";
import React from "react";

interface PageHeroIIIProps {
  preTitle?: string;
  title: string;
  description?: string;
  imageUrl?: string; // Optional image URL prop
  backgroundColor?: string; // Optional background color class (Tailwind)
}

const PageHeroIII: React.FC<PageHeroIIIProps> = ({
  preTitle,
  title,
  description,
  imageUrl,
  backgroundColor = "bg-[#2d3c56]",
}) => {
  // Determine the base classes for the section
  const sectionBaseClasses =
    "relative pt-24 pb-12 md:pt-36 lg:pt-48 md:pb-16 overflow-hidden";
  // Conditionally add the background color class if no imageUrl is provided
  const sectionClasses = `${sectionBaseClasses} ${
    !imageUrl ? backgroundColor : ""
  }`;

  return (
    <section className={sectionClasses}>
      {/* Conditionally render Background Image only if imageUrl exists */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl} // Use the dynamic imageUrl
            alt={title ? `${title} background` : "Hero background image"} // Dynamic alt text
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-50" // Keep filter for image
            priority // Keep priority if it's likely LCP
          />
        </div>
      )}

      {/* Content Container - z-10 ensures it's above the background image/color */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex wrapper for two columns */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
          {/* Left Column (Subheading & Heading) */}
          <div className="w-full md:w-1/2 lg:w-1/2 md:self-center">
            {preTitle && (
              <div
                className={`flex items-center gap-2 text-white mb-3 md:mb-5`}
              >
                <h6 className="text-base font-medium uppercase tracking-wider">
                  / {preTitle} /
                </h6>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white leading-tight">
              {title}
            </h1>
          </div>

          {/* Right column for description - with correct alignment */}
          <div className="w-full md:w-1/2 lg:w-1/2 md:self-center">
            {description && (
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeroIII;
