"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "@/lib/hooks/MediaQuery";

interface PageHeroIIIProps {
  preTitle?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  backgroundColor?: string;
  priority?: boolean;
  videoLoadDelay?: number;
}

const PageHeroIII: React.FC<PageHeroIIIProps> = ({
  preTitle,
  title,
  description,
  imageUrl,
  videoUrl,
  backgroundColor = "bg-[#2d3c56]",
  priority = true,
  videoLoadDelay = 1000,
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const hasBackground = imageUrl || (videoUrl && isDesktop);

  const sectionBaseClasses =
    "relative pt-24 pb-12 md:pt-36 lg:pt-48 md:pb-16 overflow-hidden";
  const sectionClasses = `${sectionBaseClasses} ${
    !hasBackground ? backgroundColor : ""
  }`;

  const handleVideoLoad = () => {
    setTimeout(() => {
      setIsVideoVisible(true);
    }, 100);
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
  };

  useEffect(() => {
    if (videoUrl && isDesktop) {
      const timer = setTimeout(() => {
        setShouldLoadVideo(true);

        const preloadLink = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "video";
        preloadLink.href = videoUrl;
        document.head.appendChild(preloadLink);

        return () => {
          document.head.removeChild(preloadLink);
        };
      }, videoLoadDelay);

      return () => clearTimeout(timer);
    }
  }, [videoUrl, videoLoadDelay, isDesktop]);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [shouldLoadVideo]);

  useEffect(() => {
    if (!videoUrl || !isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.querySelector(
      `.${sectionBaseClasses.split(" ")[0]}`
    );
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => observer.disconnect();
  }, [videoUrl, isDesktop]);

  return (
    <section className={sectionClasses}>
      {hasBackground && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl || "/default-image.jpg"}
            alt={title ? `${title} background` : "Hero background image"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className={`object-cover object-center filter brightness-50 transition-opacity duration-700 ${
              isVideoVisible ? "opacity-0" : "opacity-100"
            }`}
            priority={priority}
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyZDNjNTYiIC8+PC9zdmc+" // Optional: Replace with real blur or base64 version of image
          />
          {videoUrl && shouldLoadVideo && isDesktop && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              className={`w-full h-full object-cover object-center filter brightness-50 ${
                isVideoVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.5s ease" }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2 lg:w-1/2 md:self-center">
            {preTitle && (
              <div className="flex items-center gap-2 text-white mb-3 md:mb-5">
                <h6 className="text-base font-medium uppercase tracking-wider">
                  / {preTitle} /
                </h6>
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white leading-tight">
              {title}
            </h1>
          </div>
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
