import React from 'react'
import Button from './ui/Button';

const PageHeroII = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pb-24 min-h-[400px] flex flex-col justify-end">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
        <div className="w-full md:w-3/5">
          <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Reflect your<br/>lifestyle, and vision.
          </h1>
        </div>
        <div className="w-full md:w-2/5">
          <p className="text-gray-700 mb-6">
            We believe your space should reflect your unique personality,
            lifestyle, and vision. Whether it's a cozy home renovation or a bold
            commercial transformation, we are dedicated to turning your ideas
            into reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Learn More</Button>
            <Button variant="outline">View Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeroII
