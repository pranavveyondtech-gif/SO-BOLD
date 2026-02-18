import { useState } from "react";
import { faqData } from "../utils/faqData";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq">
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2>{section.category}</h2>

          {section.items.map((faq, itemIndex) => {
            const uniqueIndex = `${sectionIndex}-${itemIndex}`;

            return (
              <div
                key={uniqueIndex}
                onClick={() =>
                  setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex)
                }
              >
                <h3>{faq.question}</h3>

                {openIndex === uniqueIndex && <p>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
