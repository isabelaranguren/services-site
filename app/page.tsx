import FullWidthImage from "@/components/FullWidthImage";
import PageHeroII from "@/components/Hero/PageHeroII";
import NavBar from "@/components/layout/Navbar";
import MovingBanner from "@/components/MovingBanner";
import FourBannerSection from "@/components/sections/FourBannerSection";
import ParallaxCTA from "@/components/sections/ParallaxCTA";
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
      <section className="pt-40 pb-32 relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
          style={{ backgroundImage: "url(https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg)" }}
        ></div>
        <h2 className="text-white display-2 text-center relative">
          Parallax Header
        </h2>
      </section>
    </>
  );
}

