import FullWidthImage from "@/components/FullWidthImage";
import PageHeroII from "@/components/Hero/PageHeroII";
import NavBar from "@/components/layout/Navbar";
import MovingBanner from "@/components/MovingBanner";
import SideBySide from "@/components/sections/SideBySide";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Button from "@/components/ui/Button";
import heroImage from "@/public/hero1.webp";
import ServicesCollection from "@/components/sections/ServicesCollection";


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
            <span className="text-red-700 uppercase">/ Our Services /</span>
          </div>
          <div className="w-full md:w-7/10 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8 text-gray-900">
              We Believe Your Space Should Reflect Your Lifestyle, And Vision.
            </h2>
            <p className="mb-4 text-gray-800">
              Let&apos;s shape a space that tells your story. Whether it&apos;s a
              cozy home renovation or a bold commercial transformation, we are
              dedicated to turning your ideas into reality.
            </p>
            <Button href="/contact" variant="primary">Contact Us</Button>
          </div>
        </div>
      </div>
      <ServicesCollection />
      <WhyChooseUs />
    </>
  );
}

