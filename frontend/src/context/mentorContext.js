import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserDataContext = createContext();

// Create a provider component
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

// Custom hook to use the user data context
export const useUserData = () => useContext(UserDataContext);
