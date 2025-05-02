import Image from "next/image";
import Link from "next/link";

interface Service {
  imageUrl?: string;
  imageAlt?: string;
  slug: string;
  name: string;
  description: string;
  order: string;
}

const CollectionItemBanner = ({ service }: { service: Service }) => {
  const currentService = service;
  const isValidImageUrl =
    typeof currentService?.imageUrl === "string" &&
    currentService.imageUrl.startsWith("/");
  const serviceUrl = `/services/${currentService?.slug}`;

  return (
    <div className="relative w-full h-full overflow-hidden">
 
      {isValidImageUrl && (
        <Image
          src={currentService.imageUrl!}
          alt={currentService.imageAlt || "Service image"}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover -z-10"
          loading="lazy"
        />
      )}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center p-10 md:p-15 lg:p-[60px] bg-black/50 group-hover:bg-black/60 transition-colors duration-300 ease-in-out"
      >
        <div
          className="
            flex flex-col items-center text-center max-w-md lg:max-w-[400px]
            opacity-0 group-hover:opacity-100  
            transform translate-y-3 group-hover:translate-y-0 
            transition-all duration-300 ease-in-out 
          "
        >
          <Link href={serviceUrl} legacyBehavior>
            <a className="text-white text-3xl lg:text-4xl font-semibold mb-4 inline-block hover:text-primary transition-colors duration-300">
              {currentService.name}
            </a>
          </Link>
          <p className="text-white leading-relaxed">
            {currentService.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-5 justify-center items-center">
            <Link href={serviceUrl} legacyBehavior>
              <a
                className={`
                  inline-flex items-center justify-center px-7 py-2.5 
                  border border-white/20 bg-white/20 backdrop-blur-sm text-white
                  transition-all duration-350 hover:bg-white hover:text-black
                  relative group/button overflow-hidden
                  pr-[54px]
                `}
              >
                Learn more
              </a>
            </Link>
          </div>
        </div>

        <div className="absolute top-[4%] right-[30px] text-white text-right tracking-widest min-w-[340px] h-5 transform -rotate-90 origin-top-right hidden lg:block">
          {currentService.name} / {currentService.order} /
        </div>
      </div>
    </div>
  );
};

export default CollectionItemBanner;
