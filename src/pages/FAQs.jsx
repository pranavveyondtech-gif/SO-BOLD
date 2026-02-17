import { useState } from "react";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What is SO-BOLD?",
        answer:
          "SO-BOLD is a digital agency focused on building modern, scalable, and high-performance web applications for startups and growing businesses.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with startups, small businesses, and established brands across technology, e-commerce, education, and service-based industries.",
      },
      {
        question: "Where is SO-BOLD located?",
        answer:
          "We operate remotely and collaborate with clients globally, ensuring flexibility and efficient communication.",
      },
    ],
  },

  {
    category: "Services",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "We offer web development, UI/UX design, API integration, performance optimization, and custom web application development.",
      },
      {
        question: "Do you build custom websites?",
        answer:
          "Yes. We primarily build fully custom, scalable solutions tailored specifically to client requirements instead of relying on generic templates.",
      },
      {
        question: "Do you provide responsive and mobile-friendly designs?",
        answer:
          "Absolutely. Every project we build is fully responsive and optimized for mobile, tablet, and desktop devices.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can modernize your existing website with improved design, better performance, and enhanced user experience.",
      },
    ],
  },

  {
    category: "Projects & Process",
    items: [
      {
        question: "What is your project process?",
        answer:
          "Our process includes discovery, planning, design, development, testing, and deployment. We ensure transparency and regular updates throughout the project.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines depend on scope and complexity. Most standard websites take between 2–6 weeks.",
      },
      {
        question: "Will I be involved during the development process?",
        answer:
          "Yes. We maintain clear communication and involve clients at every major milestone to ensure expectations are met.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes. We offer maintenance, updates, and performance monitoring services after project delivery.",
      },
    ],
  },

  {
    category: "Pricing & Payments",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "Pricing varies depending on the scope, features, and complexity of the project. Contact us for a custom quote tailored to your needs.",
      },
      {
        question: "Do you offer flexible payment plans?",
        answer:
          "Yes. We provide milestone-based payment structures for larger projects to ensure smooth collaboration.",
      },
      {
        question: "Is there any upfront payment required?",
        answer:
          "Typically, we require an initial deposit before beginning the project to secure timelines and resources.",
      },
    ],
  },

  {
    category: "Careers",
    items: [
      {
        question: "How can I apply to work at SO-BOLD?",
        answer:
          "Visit our Careers page to explore open roles and submit your application.",
      },
      {
        question: "Do you offer internships?",
        answer:
          "Yes. We occasionally offer internship opportunities for passionate learners and aspiring developers.",
      },
    ],
  },
];

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
