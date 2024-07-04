"use client";

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/appcontextwrapper";
import Questions from "@/jsonData/questions";
import "../style/pages.css";
import QuestionsComponent from "@/components/pagesComponents/questionsComponent";


const Explore = () => {
  const { themeModeDark } = useContext(AppContext);
  const [showQuestion, setShowQuestion] = useState(false);
  const [loader, setLoader] = useState(false);
  const [hideStart, setHideStart] = useState(false);

  const handeStart = () => {
    setHideStart(true);
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      setShowQuestion(true);
    }, 2000);
  };


  return (
    <div
      className={`w-full flex flex-col justify-around items-center h-full ${
        themeModeDark ? "bg-primary text-white" : "bg-light text-black"
      }`}>
      <div className="w-10/12 my-[5rem]">
        <h1 className="text-3xl font-bold text-bright1 text-center py-8">
          Explore Your Interests
        </h1>
        <p className="text-lg text-center my-5">
          Welcome! We are here to help you find a suitable path in the field of
          computer science. By answering the following questions, you will
          discover your top areas of interest with in computer science.
        </p>
        <p className="text-lg text-center">
          Please note that this is a comprehensive form, and it might take some
          time to complete. However, by the end of it, you will have a clearer
          understanding of your interests and be more confident in choosing your
          career pathway. Let's get started on this journey to find the best fit
          for you in the exciting world of technology!
        </p>
      </div>

      <div className="border w-10/12 rounded-lg mb-[5rem]">
        <div className="flex justify-around">
          <button
            className={`${
              hideStart ? "hidden" : "block"
            } bg-bright1 text-white px-6 py-2 rounded-lg my-4`}
            onClick={handeStart}>
            Start
          </button>
        </div>
        {loader && (
          <div className="flex justify-center items-center h-48">
            <div className="loader"></div>
          </div>
        )}
        {showQuestion && (
          <QuestionsComponent Questions={Questions} />
        )}
      </div>
    </div>
  );
};

export default Explore;
