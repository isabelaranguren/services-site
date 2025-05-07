import React from 'react'
import Image from 'next/image';
import Button from '../ui/Button';

const SideBySide = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="w-full h-full bg-white flex items-center">
          <div className="w-full aspect-[4/3] pr-8 lg:pr-12 py-8 lg:py-12">
            <Image
              src="/homes.jpg"
              width={800}
              height={600}
              alt="Modern living room renovation"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
          <div className="text-left">
            <div className="flex items-center gap-2 text-red-700 mb-4">
              <h6 className="text-base font-medium uppercase tracking-wider">
                / About /
              </h6>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight">
              Turning Houses into Homes
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              We specialize in residential and commercial renovations that blend
              functionality with beauty. With years of experience, a passion for
              design, and a commitment to quality, we take pride in creating
              spaces that inspire.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button>About Us</Button>
              <Button variant="outline">View Projects</Button>
            </div>

            {/* Numbers Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <span className="block text-4xl lg:text-5xl font-semibold text-gray-900">
                  17+
                </span>
                <span className="mt-1 block text-base text-gray-600">
                  Years of Experience
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-4xl lg:text-5xl font-semibold text-gray-900">
                  465+
                </span>
                <span className="mt-1 block text-base text-gray-600">
                  Successful Renovations
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-4xl lg:text-5xl font-semibold text-gray-900">
                  10
                </span>
                <span className="mt-1 block text-base text-gray-600">
                  Year Warranty
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBySide
