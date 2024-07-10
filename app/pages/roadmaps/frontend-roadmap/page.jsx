"use client";
import React, { useContext } from "react";
import {
  HTMLObj,
  CSSObj,
  VersionControlObj,
  JavaScriptBasicObj,
  JavaScriptAdvancedObj,
  PackageManagersObj,
  HTMLModals,
  CSSModals,
  VCModals,
} from "@/jsonData/roadmapData";
import RoadmapAccordian from "@/components/pagesComponents/roadmapAccordian";
import { AppContext } from "@/context/appcontextwrapper";
import Link from "next/link";
import ModalsComponent from "@/components/pagesComponents/modalsComponent";

const FrontendRoadmap = () => {
  const { themeModeDark } = useContext(AppContext);

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
  ];

  return (
    <>
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
    </>
  );
};

export default FrontendRoadmap;
