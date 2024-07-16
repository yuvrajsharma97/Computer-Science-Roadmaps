"use client";
import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext, useState } from "react";
import { backendLanguages } from "@/jsonData/roadmapData";
import LoaderComponent from "@/components/pagesComponents/loaderComponent";
import ModalsComponent from "@/components/pagesComponents/modalsComponent";
import RoadmapAccordian from "@/components/pagesComponents/roadmapAccordian";

const BackendRoadmap = () => {
  const { themeModeDark } = useContext(AppContext);
  const [showLoader, setShowLoader] = useState(false);
  const [showBackendFrameworks, setShowBackendFrameworks] = useState(false);
  const [backendFrameworkArray, setBackendFrameworkArray] = useState({});

  const handleBackendLanguageClick = (passedFramework) => {
    setShowLoader(true);
    setShowBackendFrameworks(false);
    setBackendFrameworkArray(passedFramework);
    setTimeout(() => {
      setShowLoader(false);
      setShowBackendFrameworks(true);
    }, 1500);
  };

  return (
    <div
      className={`h-full ${
        themeModeDark ? "bg-primary text-white" : "bg-lightbg text-black"
      }`}>
      <div className="flex justify-around w-full pt-[6rem] px-4 md:px-0">
        <h3 className="text-xl md:text-xl font-bold text-bright2">
          To learn backend you should pick a language to begin with. Here are
          some popular backend languages:
        </h3>
      </div>
      <div
        className={`flex flex-wrap justify-center md:flex-row w-full mt-[4rem] ${
          showBackendFrameworks ? "h-full" : "h-[55vh]"
        }`}>
        {backendLanguages.map((language, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 lg:w-1/4 flex justify-center my-3 px-2">
            <button
              className="btn bg-bright1 border-none text-white btn-wide"
              onClick={() => handleBackendLanguageClick(language)}>
              {language.title}
            </button>
          </div>
        ))}
        {showLoader && (
          <div className="w-full">
            <LoaderComponent />
          </div>
        )}
      </div>

      {showBackendFrameworks && (
        <>
          <div className="w-full py-[5rem] px-4 md:px-0">
            <h1 className="text-2xl md:text-3xl font-bold text-bright1 text-center">
              {backendFrameworkArray.title}
            </h1>
            <RoadmapAccordian
              accordionData={backendFrameworkArray.accordionData}
            />
            <div className="md:flex justify-center">
              <ModalsComponent modals={backendFrameworkArray.modals} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BackendRoadmap;
