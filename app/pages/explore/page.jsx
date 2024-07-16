"use client";

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/appcontextwrapper";
import Questions from "@/jsonData/questions";
import QuestionsComponent from "@/components/pagesComponents/questionsComponent";
import LoaderComponent from "@/components/pagesComponents/loaderComponent";
import Link from "next/link";

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
      className={`w-full flex flex-col justify-around items-center min-h-screen ${
        themeModeDark ? "bg-primary text-white" : "bg-lightbg text-black"
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
          time to complete as it has total of 42 questions. However, by the end
          of it, you will have a clearer understanding of your interests and be
          more confident in choosing your career pathway. Let&apos;s get started
          on this journey to find the best fit for you in the exciting world of
          technology!
        </p>
        <p className="text-end my-4 text-sm">
          <span className="text-bright2">* </span>
          If you want to re-take the test, please refresh the page.
        </p>
      </div>

      <div className="border w-10/12 rounded-lg mb-[5rem]">
        <div className="flex justify-around">
          {!questionsStatus && answersArray.length === 0 && (
            <button
              className={`${
                hideStart ? "hidden" : "block"
              } btn bg-bright1 border-none text-white btn-wide my-5`}
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
                      className="w-48 m-5 text-center bg-gradient-to-r from-bright2 to-bright1 font-bold rounded-sm p-4">
                      {answer}
                    </span>
                  ))}
                </div>
                <div className="flex justify-around mt-[3rem] border-t ">
                  <Link
                    href={"/pages/roadmaps"}
                    className="btn bg-bright1 border-none text-white btn-wide m-5">
                    Browse Roadmaps
                  </Link>
                </div>
              </>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Explore;
