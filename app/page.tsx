import FullWidthImage from "@/components/FullWidthImage";
import PageHeroII from "@/components/Hero/PageHeroII";
import NavBar from "@/components/layout/Navbar";
import MovingBanner from "@/components/MovingBanner";
import FourBannerSection from "@/components/sections/FourBannerSection";
import SideBySide from "@/components/sections/SideBySide";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Button from "@/components/ui/Button";
import heroImage from "@/public/hero1.webp";


export default function Home() {
  return (
    <>
      <NavBar initialStyle="white" />

      <PageHeroII
        title="Reflect your lifestyle, and vision."
        description="We believe your space should reflect your unique personality, lifestyle, and vision. Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality."
      />

      <FullWidthImage
        src={heroImage}
        alt="Beautiful scenery"
        heights={{
          base: "h-[400px]",
          sm: "sm:h-[400px]",
          md: "md:h-[400px]",
          lg: "lg:h-[500px]",
        }}
        priority
        blur
        quality={80}
      />
      <MovingBanner />
      <SideBySide />

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-3/10 px-4">
            <span className="text-gray-900">/ Our Projects /</span>
          </div>
          <div className="w-full md:w-7/10 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8 text-gray-900">
              We Believe Your Space Should Reflect Your Lifestyle, And Vision.
            </h2>
            <p className="mb-4 text-gray-800">
              We believe your space should reflect your unique personality,
              lifestyle, and vision. Whether it's a cozy home renovation or a
              bold commercial transformation, we are dedicated to turning your
              ideas into reality.
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </div>
      <FourBannerSection />
      <WhyChooseUs />

      <section className="relative py-40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0 will-change-transform"
          style={{ backgroundImage: "url(/parallax.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl sm:text-5xl lg:text-4xl font-semibold leading-tight mb-6">
            Don’t See What You’re Looking For? Just Ask.
          </h2>
          <p className="text-white text-lg sm:text-xl leading-relaxed">
            If there’s a service you need that isn’t mentioned here, feel free
            to reach out. Our team is experienced, adaptable, and ready to help
            with custom work or special requests to make your vision a reality.
          </p>
        </div>
      </section>
    </>
  );
}

