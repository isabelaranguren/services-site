import FullWidthImage from "./components/FullWidthImage";
import Button from "./components/ui/Button";
import heroImage from "@/public/hero.jpg";
import { faqsData } from '@/data/faqs'; // Import the data
import FAQAccordion from "./components/faq/FAQAccordion";


export default function Home() {
  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
          <div className="md:col-span-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Reflect your lifestyle, and vision.
            </h1>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-800 mb-4 text-sm">
              We believe your space should reflect your unique personality,
              lifestyle, and vision. Whether it's a cozy home renovation or a
              bold commercial transformation, we are dedicated to bringing your
              ideas into reality.
            </p>
            <Button variant="primary">Learn More</Button>
            <Button variant="outline">View Projects</Button>
          </div>
        </div>
      </div>
      <FullWidthImage
        src={heroImage}
        alt="Beautiful scenery"
        heights={{
          base: "h-[400px]",
          sm: "sm:h-[500px]",
          md: "md:h-[600px]",
          lg: "lg:h-[700px]",
        }}
        priority
        blur
        quality={80}
      />
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <FAQAccordion faqs={faqsData} />
      </div>
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-3/10 px-4">
            <span>/ Our Projects /</span>
          </div>
          <div className="w-full md:w-7/10 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8">
              We Believe Your Space Should Reflect Your Lifestyle, And Vision.
            </h2>
            <p>
              We believe your space should reflect your unique personality,
              lifestyle, and vision. Whether it's a cozy home renovation or a
              bold commercial transformation, we are dedicated to turning your
              ideas into reality.
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
}
