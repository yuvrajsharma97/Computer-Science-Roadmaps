"use client";

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/appcontextwrapper";
import Questions from "@/jsonData/questions";
import QuestionsComponent from "@/components/pagesComponents/questionsComponent";
import LoaderComponent from "@/components/pagesComponents/loaderComponent";
import CustomLinkButton from "@/components/pagesComponents/linkButtonComponent";

const Explore = () => {
  const { themeModeDark, questionsStatus, setQuestionsStatus, answersArray } =
    useContext(AppContext);
  const [loader, setLoader] = useState(false);
  const [hideStart, setHideStart] = useState(false);

  const handeStart = () => {
    setHideStart(true);
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
      setQuestionsStatus(true);
    }, 2000);
  };

  return (
    <div
      className={
        "w-10/12 mx-auto mt-8 mb-[8rem] md:mb-[10rem] p-6 bg-[#ffe599] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-opacity-30 border-white text-center flex flex-col justify-around items-center min-h-screen"
      }>
      <div className="w-10/12 my-[5rem]">
        <h1 className="text-3xl font-bold text-bodyheading text-center py-8">
          Explore Your Interests
        </h1>
        <p className="text-lg text-center my-5 text-bodytext">
          Welcome! We are here to help you find a suitable path in the field of
          computer science. By answering the following questions, you will
          discover your top areas of interest with in computer science.
        </p>
        <p className="text-lg text-center">
          Please note that this is a comprehensive form, and it might take some
          time to complete as it has total of 42 questions. However, by the end
          of it, you will have a clearer understanding of your interests and be
          more confident in choosing your career pathway. Let&apos;s get started
          on this journey to find the best fit for you in the exciting world of
          technology!
        </p>
        <p className="text-end my-4 text-sm text-bodyheading">
          <span>* </span>
          If you want to re-take the test, please refresh the page.
        </p>
      </div>

      <div className="border w-full rounded-lg mb-[5rem]">
        <div className="flex justify-around">
          {!questionsStatus && answersArray.length === 0 && (
            <button
              className={`${
                hideStart ? "hidden" : "block"
              } btn btn-wide bg-[#F7B318] text-lg text-primary hover:bg-[#e6a514] border-none my-[3rem]`}
              onClick={handeStart}>
              Start
            </button>
          )}
        </div>
        {loader && <LoaderComponent />}
        {questionsStatus ? (
          <QuestionsComponent Questions={Questions} />
        ) : (
          <React.Fragment>
            {answersArray.length > 0 && (
              <>
                {" "}
                <p className="text-xl text-center my-5">
                  According to your choices we have found most suitable carrier
                  path for you.
                </p>
                <div className="flex flex-wrap justify-around w-full">
                  {answersArray.map((answer, index) => (
                    <span
                      key={index}
                      className="w-48 m-5 text-center text-white bg-gradient-to-r from-[#707CFF] to-[#FA81E8] shadow-customPink font-bold rounded-md p-4">
                      {answer}
                    </span>
                  ))}
                </div>
                <CustomLinkButton
                  href="/pages/roadmaps"
                  text="Browse Roadmaps"
                />
              </>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Explore;
