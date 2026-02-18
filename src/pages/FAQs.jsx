import { useState } from "react";
import { faqData } from "../utils/faqData";
import "../assets/css/FAQs.css";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-container">
      {faqData.map((section, sectionIndex) => (
        <div className="faq-section" key={sectionIndex}>
          <h2 className="faq-category">{section.category}</h2>

          {section.items.map((faq, itemIndex) => {
            const uniqueIndex = `${sectionIndex}-${itemIndex}`;

            return (
              <div
                key={uniqueIndex}
                className={`faq-item ${openIndex === uniqueIndex ? "active-faq" : ""}`}
              >
                <div
                  className="faq-question-container"
                  onClick={() =>
                    setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex)
                  }
                >
                  <h3 className="faq-question">{faq.question}</h3>
                  <i
                    className={`bi ${openIndex === uniqueIndex ? "bi-dash-square-fill" : "bi-plus-square-fill"}`}
                  ></i>
                </div>

                {openIndex === uniqueIndex && (
                  <p
                    onClick={() =>
                      setOpenIndex(
                        openIndex === uniqueIndex ? null : uniqueIndex,
                      )
                    }
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}
