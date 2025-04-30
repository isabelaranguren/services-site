import FullWidthImage from "../components/FullWidthImage";
import PictureGrid from "../components/PictureGrid";
import AboutSection from "../components/sections/AboutSection";
import heroImage from "@/public/hero.jpg";


export const metadata = {
  title: "About Us",
  description: "Learn more about our company.",
};

export default function About() {
  return (
    <>
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
      <PictureGrid />
    </>
  );
}
