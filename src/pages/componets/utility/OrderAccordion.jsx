/* eslint-disable react/prop-types */
import { useState } from "react";

export default function OrderAccordion({ isActive, trigger, content }) {
  const [isOpen, setIsOpen] = useState(isActive ?? false);

  function ToggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="col-auto">{trigger({ isOpen, ToggleAccordion })}</div>

      {isOpen && content}
    </>
  );
}
