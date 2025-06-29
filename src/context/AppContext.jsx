import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showSideBar,
        setShowSideBar,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useAppContext = () => useContext(ModalContext);
