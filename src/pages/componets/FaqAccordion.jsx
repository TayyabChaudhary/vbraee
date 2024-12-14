/* eslint-disable react/prop-types */
import { useState } from "react";

export default function FaqAccordion({ isActive, triggerText, contentText }) {
  const [isOpen, setIsOpen] = useState(isActive ?? false);

  function ToggleAccordion() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="vb_faq_cont mb-2">
        <div
          className="col d-flex justify-content-between align-items-center"
          role="button"
          onClick={() => ToggleAccordion()}>
          <p className={"vb_faq_head " + (isOpen ? "active" : "")}>
            {triggerText}
          </p>
          <span className={"vb_faq_icon " + (isOpen ? "active" : "")}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11M8.818 7.403L12 10.586l3.182-3.182l1.414 1.414L13.414 12l3.182 3.182l-1.415 1.414L12 13.414l-3.182 3.182l-1.415-1.414L10.586 12L7.403 8.818z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
                />
              </svg>
            )}
          </span>
        </div>

        {isOpen && <p className="vb_faq_text text-start mt-2">{contentText}</p>}
      </div>
    </>
  );
}
