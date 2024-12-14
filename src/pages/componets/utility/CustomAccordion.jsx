/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CustomAccordion({ isActive, trigger, content }) {
  const [isOpen, setIsOpen] = useState(isActive ?? false);

  function ToggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="col-auto" role="button" onClick={() => ToggleAccordion()}>
        {trigger(isOpen)}
      </div>

      {isOpen && content}
    </>
  );
}
