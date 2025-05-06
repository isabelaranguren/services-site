"use client";
import Link from "next/link";
import { useEffect, useRef, useState, memo } from "react";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  imageUrl?: string;
  videoUrl?: string;
  posterImage?: string;
  description: string;
  imageAlt?: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if we should show video based on props and device
  const shouldShowVideo =
    featured && project.videoUrl && !isReducedMotionPreferred();

  // Detect reduced motion preference
  function isReducedMotionPreferred() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  useEffect(() => {
    // Setup Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
        } else {
          // Pause video when out of view to save resources
          if (isPlaying && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px", // Start loading 200px before element comes into view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isPlaying]);

  // Handle video loading and playback
  useEffect(() => {
    if (!videoRef.current || !isIntersecting || !shouldShowVideo) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      videoRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Video playback failed:", error);
          // Fallback to showing the poster image
          setIsVideoLoaded(false);
        });
    };

    const handleError = (error: any) => {
      console.error("Video error:", error);
      setIsVideoLoaded(false);
    };

    const video = videoRef.current;
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    const isLowDataMode = (navigator as any).connection?.saveData || false;

    video.preload = isLowDataMode ? "metadata" : "auto";

    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [isIntersecting, shouldShowVideo]);

  // Clean up video resources
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
        videoRef.current.load();
      }
    };
  }, []);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="relative block overflow-hidden group bg-gray-900 h-full"
      ref={containerRef}
    >
      {/* Background Media - Either Video or Image */}
      {shouldShowVideo ? (
        <>
          {/* Poster image shown until video is loaded */}
          {!isVideoLoaded && project.posterImage && (
            <Image
              src={project.posterImage}
              alt={project.imageAlt || `Image of ${project.title}`}
              fill
              className="object-cover z-0"
              sizes={featured ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
              priority={featured}
            />
          )}

          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 z-0 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            poster={project.posterImage}
            preload="metadata"
          >
            {isIntersecting && (
              <>
                <source src={project.videoUrl} type="video/mp4" />
                {/* Add WebM source if available for better performance */}
                {project.videoUrl.replace(".mp4", ".webm") && (
                  <source
                    src={project.videoUrl.replace(".mp4", ".webm")}
                    type="video/webm"
                  />
                )}
              </>
            )}
          </video>
        </>
      ) : (
        <Image
          src={project.imageUrl || project.posterImage || ""}
          alt={project.imageAlt || `Image of ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 z-0"
          sizes={featured ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
          priority={featured}
        />
      )}

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="absolute bottom-0 left-0 z-20 mb-10 ml-10 mr-10 max-w-xl">
        <h3
          className={`font-semibold text-white
                     border-l border-[#afafaf80]
                     pl-4
                     mb-2
                     transition-all duration-300 ease-in-out
                     ${
                       featured
                         ? "text-3xl md:text-4xl"
                         : "text-2xl md:text-3xl"
                     }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-gray-300 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 ${
            featured ? "md:text-base" : ""
          }`}
        >
          {project.description}
        </p>
      </div>

      <div
        className="absolute inset-0 flex justify-center items-center z-30
                      opacity-0 group-hover:opacity-100
                      scale-90 group-hover:scale-100
                      transition-all duration-300 ease-in-out"
      >
        <div className="inline-block border border-white/50 rounded-full p-3 bg-black/20 group-hover:bg-white/20">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default memo(ProjectCard);