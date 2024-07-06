"use client";
import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [themeModeDark, setThemeModeDark] = useState(true);
  const [answersArray, setAnswersArray] = useState([]); 
  const [questionsStatus, setQuestionsStatus] = useState(false);
  

  return (
    <AppContext.Provider
      value={{
        themeModeDark,
        setThemeModeDark,
        answersArray,
        setAnswersArray,
        questionsStatus,
        setQuestionsStatus,
      }}>
      <div>{children}</div>
    </AppContext.Provider>
  );
};
