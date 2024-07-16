"use client";
import React, { useContext, useState } from "react";
import { sections, frameworks } from "@/jsonData/roadmapData";
import RoadmapAccordian from "@/components/pagesComponents/roadmapAccordian";
import { AppContext } from "@/context/appcontextwrapper";
import Link from "next/link";
import ModalsComponent from "@/components/pagesComponents/modalsComponent";
import LoaderComponent from "@/components/pagesComponents/loaderComponent";

const FrontendRoadmap = () => {
  const { themeModeDark } = useContext(AppContext);
  const [frameworkArray, setframeworkArray] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [showFrameworkRoadmap, setShowFrameworkRoadmap] = useState(false);

  const handleFrameworkClick = (passedFramework) => {
    setShowLoader(true);
    setShowFrameworkRoadmap(false);
    setframeworkArray(passedFramework);

    setTimeout(() => {
      setShowLoader(false);
      setShowFrameworkRoadmap(true);
    }, 1000);
  };

  return (
    <div
      className={`items-center ${
        themeModeDark ? "bg-primary text-white" : "bg-lightbg text-black"
      }`}>
      {sections.map((section, index) => (
        <div key={index} className={`w-full ${section.paddingTop}`}>
          <h1 className="text-3xl font-bold text-bright1 text-center">
            {section.title}
          </h1>
          <RoadmapAccordian accordionData={section.accordionData} />
          <div className="md:flex">
            <ModalsComponent modals={section.modals} />
          </div>
        </div>
      ))}

      <p className="text-lg text-center text-bright2 underline">
        After learning basics of frontend developement, you can start learning
        frameworks like React, Angular, Vue etc.
      </p>

      <div className="flex justify-evenly flex-wrap py-[2rem]">
        {frameworks.map((framework, index) => (
          <button
            className="btn bg-bright1 border-none text-white btn-wide"
            onClick={() => handleFrameworkClick(framework)}
            key={index}>
            {framework.title}
          </button>
        ))}
      </div>
      <div className="pb-[2rem]">{showLoader && <LoaderComponent />}</div>

      {showFrameworkRoadmap && (
        <>
          <div className="w-full pb-[5rem]">
            <h1 className="text-3xl font-bold text-bright1 text-center">
              {frameworkArray.title}
            </h1>
            <RoadmapAccordian accordionData={frameworkArray.accordionData} />
            <div className="md:flex">
              <ModalsComponent modals={frameworkArray.modals} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FrontendRoadmap;
