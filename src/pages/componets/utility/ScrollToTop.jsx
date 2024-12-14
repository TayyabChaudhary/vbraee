import { useEffect, useState } from "react";

export default function ScrollToTop() {
  // State to manage the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the element with class "main_section"
  const scrollToTop = () => {
    const element = document.getElementsByClassName("main_section")[0]; // Access the first element in the collection

    if (element) {
      element.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  // Function to toggle button visibility based on scroll position of the element
  const toggleVisibility = () => {
    const element = document.getElementsByClassName("main_section")[0]; // Access the first element
    if (element) {
      if (element.scrollTop > 300) {
        setIsVisible(true); // Show button when scrolled down more than 300px
      } else {
        setIsVisible(false); // Hide button when scrolled back to the top
      }
    }
  };

  // useEffect to add the scroll listener to the specific element with class
  useEffect(() => {
    const element = document.getElementsByClassName("main_section")[0]; // Access the first element
    if (element) {
      element.addEventListener("scroll", toggleVisibility);

      // Clean up event listener when component unmounts
      return () => {
        element.removeEventListener("scroll", toggleVisibility);
      };
    }
  }, []);

  return (
    <>
      {isVisible && (
        <span
          className="scroll_top_btn d-flex d-lg-none justify-content-center align-items-center position-fixed"
          role="button"
          onClick={() => scrollToTop()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.57em"
            height="1em"
            viewBox="0 0 9 16">
            <path
              fill="currentColor"
              d="M4.5 14c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"></path>
            <path
              fill="currentColor"
              d="M8 7.5a.47.47 0 0 1-.35-.15L4.5 4.2L1.35 7.35c-.2.2-.51.2-.71 0s-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15"></path>
          </svg>
        </span>
      )}
    </>
  );
}
