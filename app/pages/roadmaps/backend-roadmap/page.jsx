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
      <div className="flex justify-around w-full pt-[6rem]">
        <h3 className="text-xl font-bold text-bright2">
          {" "}
          To learn backend you should pick a language to begin with. Here are
          some popular backend languages:
        </h3>
      </div>
      <div className="flex justify-around w-full pt-5">
        {backendLanguages.map((language, index) => (
          <button
            className="btn bg-bright1 border-none text-white btn-wide"
            key={index}
            onClick={() => handleBackendLanguageClick(language)}>
            {language.title}
          </button>
        ))}
      </div>

      {showLoader && (
        <div className="pb-[2rem]">
          {" "}
          <LoaderComponent />{" "}
        </div>
      )}
      {showBackendFrameworks && (
        <>
          <div className="w-full py-[5rem]">
            <h1 className="text-3xl font-bold text-bright1 text-center">
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
