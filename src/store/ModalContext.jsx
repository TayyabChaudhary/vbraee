/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Create the context
export const ModalContext = createContext();

// Provider component to manage global modal state
export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null); // Null means no modal is active
  const [userInfo, setUserInfo] = useState(null); // Hold registered user info
  function OpenModal(modal) {
    setActiveModal(modal);
  }
  function CloseModal() {
    setActiveModal(null);
  }

  const setUser = (result) => {
    const user = result.user; // Extract the user object
    if (user?.token) {
      setUserInfo(user); // Save user info in context
      localStorage.setItem("token", JSON.stringify(user.token)); // Save JWT token in local storage
      localStorage.setItem('user', JSON.stringify(user)); // Save user info in localStorage
    } else {
      console.error("User or token missing in result:", result);
    }
  };


  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        setUserInfo((prev) => ({ ...prev, token })); // Update state with token
      }
    } catch (error) {
      console.error("Error retrieving token from localStorage:", error);
      localStorage.removeItem("token"); // Clear corrupted token
    }
  }, []);
  
  return (
    <ModalContext.Provider
      value={{
        activeModal,
        OpenModal,
        CloseModal,
        userInfo,
        setUser,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
