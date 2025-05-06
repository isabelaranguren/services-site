import React from "react";
import Button from "../ui/Button";

interface PageHeroIIProps {
  preTitle?: string;     
  title: string;         
  description: string;   
  primaryButton?: {
    text: string;
    variant?: "primary" | "secondary" | "outline";
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    variant?: "primary" | "secondary" | "outline";
    onClick?: () => void;
  };
}

const PageHeroII: React.FC<PageHeroIIProps> = ({
  preTitle,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pb-24 min-h-[400px] flex flex-col justify-end">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
        <div className="w-full md:w-3/5">
          {preTitle && (
            <p className="text-sm text-red-700 font-semibold uppercase tracking-wider mb-2">
              {preTitle}
            </p>
          )}
          <h2 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight whitespace-pre-line">
            {title}
          </h2>
        </div>
        <div className="w-full md:w-2/5">
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="flex flex-wrap gap-4">
            {primaryButton && (
              <Button
                variant={primaryButton.variant || "primary"}
                onClick={primaryButton.onClick}
              >
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant={secondaryButton.variant || "outline"}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default PageHeroII;
