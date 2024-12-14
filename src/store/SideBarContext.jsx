/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create the SideBarContext
export const SideBarContext = createContext();

// Create the SideBarProvider component
export const SideBarProvider = ({ children }) => {
  const [isLeftSideMenuCollaped, setIsLeftSideMenuCollaped] = useState(false);
  const [isRightSideMenuCollaped, setIsRightSideMenuCollaped] = useState(false);

  // Function to collapes the left side menu
  function ToggleLeftSideMenu() {
    setIsLeftSideMenuCollaped(!isLeftSideMenuCollaped);
  }
  // Function to collapes the right side menu
  function ToggleRightSideMenu() {
    setIsRightSideMenuCollaped(!isRightSideMenuCollaped);
  }

  return (
    <SideBarContext.Provider
      value={{
        isLeftSideMenuCollaped,
        ToggleLeftSideMenu,
        isRightSideMenuCollaped,
        ToggleRightSideMenu,
      }}>
      {children}
    </SideBarContext.Provider>
  );
};
