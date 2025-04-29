import Image, { StaticImageData } from "next/image";

interface FullWidthImageProps {
  src: string | StaticImageData;
  alt: string;
  heights?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
  };
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  priority?: boolean;
  loading?: "lazy" | "eager";
  blur?: boolean;
  blurDataURL?: string;
  quality?: number;
}

export default function FullWidthImage({
  src,
  alt,
  heights,
  objectFit = "cover",
  priority = false,
  loading,
  blur = false,
  blurDataURL,
  quality = 75,
}: FullWidthImageProps) {
  const baseHeight = heights?.base || "h-[300px]";
  const smHeight = heights?.sm || "sm:h-[400px]";
  const mdHeight = heights?.md || "md:h-[500px]";
  const lgHeight = heights?.lg || "lg:h-[600px]";

  return (
    <div className="w-full">
      <div
        className={`relative w-full ${baseHeight} ${smHeight} ${mdHeight} ${lgHeight}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-${objectFit}`}
          priority={priority}
          loading={loading}
          placeholder={blur ? "blur" : undefined}
          blurDataURL={blurDataURL}
          quality={quality}
        />
      </div>
    </div>
  );
}
