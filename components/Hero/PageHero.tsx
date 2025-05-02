import React from "react";

interface PageHeroProps {
  title: string | React.ReactNode; 
  description: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center bg-primary-light px-4 pb-16 pt-24 sm:pb-16 sm:pt-32 md:pb-20 md:pt-36 lg:pb-32 lg:pt-44">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="max-w-[860px] text-center">
          <h1 className="mb-0 text-4xl font-bold leading-tight text-text-dark sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-base text-paragraph-gray md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
