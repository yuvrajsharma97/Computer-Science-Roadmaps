"use client";
import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [themeModeDark, setThemeModeDark] = useState(true);

  return (
    <AppContext.Provider value={{ themeModeDark, setThemeModeDark }}>
      <div>{children}</div>
    </AppContext.Provider>
  );
};
