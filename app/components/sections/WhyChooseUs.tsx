import Image from "next/image";

function WhyChooseUs() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <div className="relative block w-full bg-gray-100">
              <Image
                src="/images/1.jpg"
                alt="Team collaborating on renovation plans"
                width={900}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="text-left">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <span className="text-lg font-light">/</span>
                <h6 className="text-base font-medium uppercase tracking-wider">
                  Why choose us
                </h6>
                <span className="text-lg font-light">/</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight">
                From Vision to Perfection, We Build Your Dreams
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                We specialize in residential and commercial renovations that
                blend functionality with beauty. With years of experience, a
                passion for design, and a commitment to quality, we take pride
                in creating spaces that inspire.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
