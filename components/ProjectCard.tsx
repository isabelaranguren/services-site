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
  const containerRef = useRef<HTMLDivElement>(null);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const shouldShowVideo =
    featured && project.videoUrl && !isReducedMotionPreferred();

  function isReducedMotionPreferred() {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
        } else {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px",
      }
    );

    observer.observe(containerEl);

    return () => {
      observer.unobserve(containerEl);
    };
  }, [isPlaying]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !isIntersecting || !shouldShowVideo) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      videoEl
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Video playback failed:", error);
          setIsVideoLoaded(false);
        });
    };

    const handleError = (error: unknown) => {
      console.error("Video error:", error);
      setIsVideoLoaded(false);
    };

    const isLowDataMode =
      (
        navigator as Navigator & {
          connection?: { saveData?: boolean };
        }
      )?.connection?.saveData ?? false;

    videoEl.preload = isLowDataMode ? "metadata" : "auto";

    videoEl.addEventListener("canplay", handleCanPlay);
    videoEl.addEventListener("error", handleError);

    if (videoEl.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      videoEl.removeEventListener("canplay", handleCanPlay);
      videoEl.removeEventListener("error", handleError);
    };
  }, [isIntersecting, shouldShowVideo]);

  useEffect(() => {
    const videoEl = videoRef.current;
    return () => {
      if (videoEl) {
        videoEl.pause();
        videoEl.src = "";
        videoEl.load();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative block overflow-hidden group bg-gray-900 h-full">
     
      {shouldShowVideo ? (
        <>
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
                {project.videoUrl?.endsWith(".mp4") && (
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
          className={`font-semibold text-white border-l border-[#afafaf80] pl-4 mb-2 transition-all duration-300 ease-in-out ${
            featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
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
    </div>
  );
}

export default memo(ProjectCard);
