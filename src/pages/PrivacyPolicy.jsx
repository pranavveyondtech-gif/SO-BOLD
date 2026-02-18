import "../assets/css/PrivacyPolicy.css";
import { privacyPolicyData } from "../utils/PrivacyPolicyData";

const renderFormattedText = (text) => {
  if (typeof text !== "string") return text;

  const regex =
    /(https?:\/\/[^\s]+)|(\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)|(\+?\d[\d\s-]{7,}\d)/gi;

  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    // URL
    if (part.match(/^https?:\/\//i)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="policy-link"
        >
          {part}
        </a>
      );
    }

    // Email
    if (part.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      return (
        <a key={index} href={`mailto:${part}`} className="policy-link">
          {part}
        </a>
      );
    }

    // Phone
    if (part.match(/^\+?\d[\d\s-]{7,}\d$/)) {
      return (
        <a
          key={index}
          href={`tel:${part.replace(/\s/g, "")}`}
          className="policy-link"
        >
          {part}
        </a>
      );
    }

    return part;
  });
};

function PrivacyPolicy() {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-header">
        <h1 className="policy-main-title">Privacy Policy</h1>
        <p className="last-updated">Last updated on 08/04/2025 by SoBold</p>
      </div>

      {privacyPolicyData.map((section, sectionIndex) => {
        const sectionNumber = sectionIndex + 1;

        return (
          <div key={sectionIndex} className="policy-section">
            <h2 className="section-title">
              <span>{sectionNumber}.</span>
              <span>{section.title}</span>
            </h2>

            {section.items.map((item, itemIndex) => {
              const itemNumber = `${sectionNumber}.${itemIndex + 1}`;

              // STRING ITEM
              if (typeof item === "string") {
                return (
                  <p key={itemIndex} className="policy-row">
                    <strong>{itemNumber}</strong>
                    <span>{item}</span>
                  </p>
                );
              }

              // OBJECT ITEM WITH SUBITEMS
              return (
                <div key={itemIndex} className="policy-sub-block">
                  {/* Main Item */}
                  <div className="policy-row">
                    <span className="policy-number">{itemNumber}</span>
                    <span className="policy-content">
                      {renderFormattedText(item.text)}
                    </span>
                  </div>

                  {/* Sub Items */}
                  {item.subItems &&
                    item.subItems.map((subItem, subIndex) => {
                      const subNumber = `${itemNumber}.${subIndex + 1}`;

                      return (
                        <div key={subIndex} className="policy-row sub">
                          <span className="policy-number">{subNumber}</span>
                          <span className="policy-content">
                            {renderFormattedText(subItem)}
                          </span>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        );
      })}
      <div className="legal-footer">
        <p>
          This Privacy Policy is derived from the original SoBold website
          policy. The structure and legal content were referenced for
          educational purposes.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
