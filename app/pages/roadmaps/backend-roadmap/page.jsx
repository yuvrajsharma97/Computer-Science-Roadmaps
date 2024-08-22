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
      className={"h-full w-full"}>
      <div className="flex justify-around w-full pt-[6rem] px-4 md:px-0">
        <h3 className="text-xl md:text-2xl font-bold text-bright2">
          To learn backend, you should pick a language to begin with. Here are
          some popular backend languages:
        </h3>
      </div>
      <div className={`${showBackendFrameworks ? "h-full" : "h-[55vh]"}`}>
        <div className="flex flex-col md:flex-row w-full mt-[4rem] ">
          {backendLanguages.map((language, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex justify-center my-3 px-2">
              <button
                className="btn border-none text-white btn-wide"
                onClick={() => handleBackendLanguageClick(language)}>
                {language.title}
              </button>
            </div>
          ))}
        </div>
        {showLoader && (
          <div className="w-full pb-[2rem]">
            <LoaderComponent />
          </div>
        )}
      </div>

      {showBackendFrameworks && (
        <>
          <div className="w-full py-[5rem]">
            <h1 className="text-3xl font-bold text-yellow text-center">
              {backendFrameworkArray.title}
            </h1>
            <RoadmapAccordian
              accordionData={backendFrameworkArray.accordionData}
            />
            <div className="md:flex">
              <ModalsComponent modals={backendFrameworkArray.modals} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BackendRoadmap;
