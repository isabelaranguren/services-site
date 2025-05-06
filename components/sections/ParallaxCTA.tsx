"use client";
import { useEffect, useState } from "react";

const ParallaxCTA = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set initial scroll position
    setScrollY(window.scrollY);

    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 md:px-6 py-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            You Name It, We'll Do It
          </h2>
          <p className="text-sm md:text-base text-white mb-4 max-w-md mx-auto">
            From kitchen upgrades to complete home renovations
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-stone-500 hover:bg-stone-600 text-white py-2 px-4 rounded text-sm md:text-base font-medium transition-colors">
              Get a Free Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded text-sm md:text-base font-medium transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxCTA;
