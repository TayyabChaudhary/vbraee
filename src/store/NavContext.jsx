/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

// Create the NavContext
export const NavContext = createContext();

// Create the NavProvider component
export const NavProvider = ({ children }) => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    // Function to open the side menu
    function OpenSideMenu() {
        setIsSideMenuOpen(true);
    }

    // Function to close the side menu
    function CloseSideMenu() {
        setIsSideMenuOpen(false);
    }

    return (
        <NavContext.Provider value={{ isSideMenuOpen, OpenSideMenu, CloseSideMenu }}>
            {children}
        </NavContext.Provider>
    );
};

