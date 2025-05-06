import Image from "next/image";
import FAQAccordion from "../faq/FAQAccordion";
import { faqsData } from "@/data/faqs";

function WhyChooseUs() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Text Section */}
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="text-left">
            <div className="flex items-center gap-2 text-red-700 mb-4">
              <h6 className="text-base font-medium uppercase tracking-wider">
                / Why Choose Us /
              </h6>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight">
              From Vision to Perfection, We Build Your Dreams
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              We specialize in residential and commercial renovations that blend
              functionality with beauty. With years of experience, a passion for
              design, and a commitment to quality, we take pride in creating
              spaces that inspire.
            </p>
            <FAQAccordion faqs={faqsData} />
          </div>
        </div>

        {/* Image Section (on the right) */}
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="aspect-[4/3] w-full">
            <Image
              src="/images/1.jpg"
              width={800}
              height={600}
              alt="Modern living room renovation"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
