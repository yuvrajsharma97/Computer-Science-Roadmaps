"use client";
import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextWrapper = ({ children }) => {
  const [answersArray, setAnswersArray] = useState([]); 
  const [questionsStatus, setQuestionsStatus] = useState(false);
  

  return (
    <AppContext.Provider
      value={{
        answersArray,
        setAnswersArray,
        questionsStatus,
        setQuestionsStatus,
      }}>
      <div>{children}</div>
    </AppContext.Provider>
  );
};
