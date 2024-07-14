"use client";
import React, { useContext, useState } from "react";
import {
  HTMLObj,
  CSSObj,
  VersionControlObj,
  JavaScriptObj,
  PackageManagersObj,
  ReactObj,
  AngularObj,
  VueObj,
  HTMLModals,
  CSSModals,
  VCModals,
  JSModals,
  ReactModals,
  AngularModals,
  VueModals,
} from "@/jsonData/roadmapData";
import RoadmapAccordian from "@/components/pagesComponents/roadmapAccordian";
import { AppContext } from "@/context/appcontextwrapper";
import Link from "next/link";
import ModalsComponent from "@/components/pagesComponents/modalsComponent";
import LoaderComponent from "@/components/pagesComponents/loaderComponent";

const FrontendRoadmap = () => {
  const { themeModeDark } = useContext(AppContext);
  const [frameworkArray, setframeworkArray] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [showFrameworkRoadmap, setShowFrameworkRoadmap] = useState(false);

  const sections = [
    {
      title: "HTML",
      accordionData: HTMLObj,
      modals: HTMLModals,
      paddingTop: "pt-[6rem]",
    },
    {
      title: "CSS",
      accordionData: CSSObj,
      modals: CSSModals,
      paddingTop: "pt-[3rem]",
    },
    {
      title: "Version Control",
      accordionData: VersionControlObj,
      modals: VCModals,
      paddingTop: "pt-[3rem]",
    },
    {
      title: "JavaScript",
      accordionData: JavaScriptObj,
      modals: JSModals,
      paddingTop: "pt-[3rem]",
    },
    {
      title: "Package Managers",
      accordionData: PackageManagersObj,
      modals: [],
      paddingTop: "pt-[3rem]",
    },
  ];
  

  const frameworks = [
    {
      title: "React",
      accordionData: ReactObj,
      modals: ReactModals,
    },
    {
      title: "Angular",
      accordionData: AngularObj,
      modals: AngularModals,
    },
    {
      title: "Vue",
      accordionData: VueObj,
      modals: VueModals,
    },
  ];

  const handleFrameworkClick = (string) => {
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
      setShowFrameworkRoadmap(true);
    }, 2000);

    if (string === "React") {
      setframeworkArray(ReactObj);
    } else if (string === "Angular") {
      setframeworkArray("AngularObj");
    } else if (string === "Vue") {
      setframeworkArray("VueObj");
    } else {
      setframeworkArray([]);
    }
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

      <div className="flex justify-evenly flex-wrap pb-[2rem]">
        {frameworks.map((framework, index) => (
          <button
            className={`btn btn-wide my-5 text-primary hover:text-fourth ${
              themeModeDark ? "bg-cardbg2 " : "bg-cardbg1"
            }`}
            onClick={() => handleFrameworkClick(framework)}
            key={index}>
            {framework.title}
          </button>
        ))}
      </div>
      <div>{showLoader && <LoaderComponent />}</div>

      {showFrameworkRoadmap && (
        <>
          {frameworks.map((framework, index) => (
            <div key={index} className={`w-full ${framework.paddingTop}`}>
              <h1 className="text-3xl font-bold text-bright1 text-center">
                {framework.title}
              </h1>
              <RoadmapAccordian accordionData={framework.accordionData} />
              <div className="md:flex">
                <ModalsComponent modals={framework.modals} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FrontendRoadmap;
