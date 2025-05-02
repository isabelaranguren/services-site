import FaqItem from "./FAQItem";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="bg-white">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQAccordion;
