/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function CustomDropdown({ trigger, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div ref={dropdownRef} className="col-auto">
        <div onClick={handleToggle} id="dropdown-trigger">
          {trigger(isOpen)}
        </div>

        {isOpen && <div id="dropdown-content">{content}</div>}
      </div>
    </>
  );
}
