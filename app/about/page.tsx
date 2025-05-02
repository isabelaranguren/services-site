import heroImage from "@/public/hero.jpg";
import { faqsData } from "@/data/faqs";
import NavBar from "@/components/layout/Navbar";
import PageHeroIII from "@/components/Hero/PageHeroIII";
import AboutSection from "@/components/sections/AboutSection";
import FullWidthImage from "@/components/FullWidthImage";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQAccordion from "@/components/faq/FAQAccordion";
import PictureGrid from "@/components/PictureGrid";

export const metadata = {
  title: "About Us",
  description: "Learn more about our company.",
};

export default function About() {
  return (
    <>
      <NavBar initialStyle="colored" />
      <PageHeroIII
        preTitle="About Us"
        title="Redefine Your Life"
        description="We believe your space should reflect your unique personality, lifestyle, and vision. Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality."
      />
      <AboutSection />
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
      <WhyChooseUs />
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-3/10 px-4">
            <span className="text-gray-900">/ FAQS /</span>
          </div>
          <div className="w-full md:w-7/10 px-4">
            <FAQAccordion faqs={faqsData} />
          </div>
        </div>
      </div>
      <PictureGrid />
    </>
  );
}
