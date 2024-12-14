import { createContext, useState } from 'react';

export const UserContext = createContext(); // Create the context

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store user info

  if (!children) {
    throw new Error("UserProvider requires 'children' to be passed.");
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
