// SideBySideComponent.tsx
import React from "react";
import Image from "next/image";

interface SideBySideProps {
  mediaType: "image" | "video";
  mediaUrl: string;
  mediaAlt: string;
  videoThumbnail?: string;
  videoAutoplay?: boolean;
  videoControls?: boolean;
  videoMuted?: boolean;
  videoLoop?: boolean;
  pretitle: string;
  title: string;
  description: string;
  mediaOnLeft?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const SideBySideComponent: React.FC<SideBySideProps> = ({
  mediaType,
  mediaUrl,
  mediaAlt,
  videoThumbnail,
  videoAutoplay = false,
  videoControls = true,
  videoMuted = true,
  videoLoop = false,
  pretitle,
  title,
  description,
  mediaOnLeft = true,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 mt-6">
      {/* Flex container that reverses order based on mediaOnLeft prop */}
      <div
        className={`flex flex-col ${
          mediaOnLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8 md:gap-16`}
      >
        {/* Media container - takes full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-lg">
            {mediaType === "image" ? (
              <Image
                src={mediaUrl}
                alt={mediaAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <video
                src={mediaUrl}
                poster={videoThumbnail}
                controls={videoControls}
                autoPlay={videoAutoplay}
                muted={videoMuted}
                loop={videoLoop}
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        {/* Text container - takes full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2">
          {/* Optional pretitle */}
          {pretitle && (
            <div className="text-red-700 mb-4">
              <h6 className="text-base font-medium uppercase tracking-wider"> 
                / {pretitle} /
              </h6>
            </div>
          )}
          <h2 className="text-5xl font-bold mb-4 text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>

          {/* Optional CTA button */}
          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className="inline-block px-6 py-3 bg-black text-white font-medium transition-colors hover:bg-stone-700"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBySideComponent;
