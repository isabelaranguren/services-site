"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 ">
      <button
        type="button"
        className="flex items-center justify-between w-full py-5 text-left focus:outline-none"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <span className="text-xl font-bold uppercase text-gray-900 ">
          {question}
        </span>
        <span className="ml-6 flex items-center">
          {isOpen ? (
            <ChevronUp
              className="h-5 w-5 text-gray-900"
              aria-hidden="true"
            />
          ) : (
            <ChevronDown
              className="h-5 w-5 text-gray-900"
              aria-hidden="true"
            />
          )}
        </span>
      </button>
      <div
        id={`faq-content-${question.replace(/\s+/g, "-").toLowerCase()}`}
        className={`${
          isOpen ? "block" : "hidden"
        } py-4 text-gray-800`}
      >
        {answer}
      </div>
    </div>
  );
}

export default FAQItem;
