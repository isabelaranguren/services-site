import Button from "./components/ui/Button";
import { faqsData } from "@/data/faqs"; // Import the data
import FAQAccordion from "./components/faq/FAQAccordion";


const TransparentIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20L80 20L80 80L20 80L20 20Z"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M30 30L70 30L70 70L30 70L30 30Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M40 40L60 40L60 60L40 60L40 40Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const InnovativeIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="50,15 85,50 50,85 15,50"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
    />
    <polygon
      points="50,25 75,50 50,75 25,50"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const ClientCentricIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="25"
      y="25"
      width="50"
      height="50"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
      transform="rotate(45 50 50)"
    />
    <rect
      x="40"
      y="40"
      width="20"
      height="20"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      transform="rotate(45 50 50)"
    />
  </svg>
);

const ResponsibleIcon: React.FC = () => (
  <svg
    className="w-16 h-16 mb-6 text-white" // Added text-white for icon color
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 70L50 30L70 70L50 50L30 70Z"
      stroke="currentColor" // Use currentColor to inherit text color
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M30 30L70 30L70 70L30 70Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);


const ProfessionalsSection: React.FC = () => {
  return (
    <div className="bg-[#231f20] text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8">
              Behind Every Renovation Is A Team Of Passionate Professionals.
            </h2>
          </div>
          <div>
            <p className="text-base text-gray-300">
              With years of experience and a reputation for excellence, our team
              is dedicated to delivering renovations tailored to your unique
              style and needs.
            </p>
          </div>
          <div>
            <p className="text-base text-gray-300">
              From initial consultation to the final walkthrough, we pride
              ourselves on craftsmanship, communication, and attention to
              detail.
            </p>
          </div>
        </div>

        <div className="my-16 md:my-20 border-t border-gray-700"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <TransparentIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Transparent</h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and vision.
            </p>
          </div>
          {/* Value Item 2 */}
          <div className="flex flex-col items-center text-center">
            <InnovativeIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Innovative</h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and vision.
            </p>
          </div>
          {/* Value Item 3 */}
          <div className="flex flex-col items-center text-center">
            <ClientCentricIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Client-Centric</h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and vision.
            </p>
          </div>
          {/* Value Item 4 */}
          <div className="flex flex-col items-center text-center">
            <ResponsibleIcon />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Responsible</h3>
            <p className="text-sm text-gray-300">
              We believe your space should reflect your unique personality and vision.
            </p>
          </div>
        </div>

      </div> {/* End of inner container div */}
    </div> // End of outer full-width div
  );
};

 const UrbanOasisBox: React.FC = () => {
   return (
     <div className="bg-[#f5f2ed] text-[#231f20] p-6 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-md">
       <h3 className="font-bold text-xl mb-2">Urban Oasis</h3>
       <p className="text-sm">
         With years of experience, and a commitment to quality, we take pride in
         creating spaces that inspire.
       </p>
     </div>
   );
 };

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
          <div className="md:col-span-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
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
      <div className="relative w-full">
        <div className="absolute bottom-10 left-0 ml-6 sm:ml-12 md:ml-16 lg:ml-24 z-10">
          <UrbanOasisBox />
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 pt-12 md:pt-16">
        <div className="flex">
          <div className="bg-[#f5f2ed] text-[#231f20] p-6 w-full md:w-1/3 shadow-md">
            <h3 className="font-bold text-xl mb-2">Urban Oasis</h3>{" "}
            <p className="text-sm">
              With years of experience, and a commitment to quality, we take
              pride in creating spaces that inspire.
            </p>
          </div>
          {/* Empty div to occupy remaining space on larger screens */}
          <div className="hidden md:block md:w-2/3"></div>
        </div>
      </div>

      <ProfessionalsSection />

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <FAQAccordion faqs={faqsData} />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-3/10 px-4">
            <span className="text-gray-600">/ Our Projects /</span>
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
    </>
  );
}

