import React from "react";

const ParallaxSection = () => {
  return (
    <section
      className="relative flex items-center justify-center py-40"
      style={{
        backgroundImage: "url('/images/parallax.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.6 }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-white text-5xl sm:text-5xl lg:text-5xl font-semibold leading-tight mb-6">
          Need a Custom Solution? We're Ready to Help.
        </h2>

        <p className="text-white text-base leading-relaxed">
          If there's a service you need that isn't mentioned here, feel free to
          reach out. Our team is experienced, adaptable, and ready to help with
          custom work or special requests to make your vision a reality.
        </p>
      </div>
    </section>
  );
};

export default ParallaxSection;
