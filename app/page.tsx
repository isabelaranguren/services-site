import Button from "./components/ui/Button";
import { faqsData } from "@/data/faqs"; // Import the data
import FAQAccordion from "./components/faq/FAQAccordion";
import FullWidthImage from "./components/FullWidthImage";
import heroImage from "@/public/hero.jpg";
import FourBannerSection from "./components/sections/FourBannerSection";
import PageHeroII from "./components/PageHeroII";
import MovingBanner from "./components/MovingBanner";
import SideBySide from "./components/sections/SideBySide";
import ProjectCardsSection from "./components/sections/ProjectCardsSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <PageHeroII />
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
     <ProjectCardsSection/>
      <FourBannerSection />
      <WhyChooseUs/>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-3/10 px-4">
            <span className="text-gray-900">/ FAQS /</span>
          </div>
          <div className="w-full md:w-7/10 px-4">
            <FAQAccordion faqs={faqsData} />
          </div>
        </div>
      </div>
    </>
  );
}

