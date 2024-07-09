"use client";
import React, { useContext } from "react";
import {
  HTMLObj,
  CSSObj,
  VersionControlObj,
  JavaScriptBasicObj,
  JavaScriptAdvancedObj,
  PackageManagersObj,
  AdvancedCSSObj,
} from "@/jsonData/roadmapData";
import RoadmapAccordian from "@/components/pagesComponents/roadmapAccordian";
import { AppContext } from "@/context/appcontextwrapper";
import Link from "next/link";
import ModalsComponent from "@/components/pagesComponents/modalsComponent";

const FrontendRoadmap = () => {
  const { themeModeDark } = useContext(AppContext);

  const HTMLModals = [
    {
      id: "my_modal_1",
      buttonText: "Resources",
      content: {
        title: "Online resources for Learning HTML",
        links: [
          {
            href: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
            text: "MDN Web Docs",
          },
          { href: "https://www.w3schools.com/html/", text: "W3 Schools" },
          { href: "https://www.freecodecamp.org/", text: "Free Code Camp" },
        ],
      },
    },
    {
      id: "my_modal_2",
      buttonText: "Video Lecture",
      content: {
        videoSrc:
          "https://www.youtube.com/embed/kUMe1FH4CHE?si=0LzbA5DPD0CfmzRI",
        videoTitle: "YouTube video player",
      },
    },
  ];

  return (
    <div
      className={`w-full min-h-screen ${
        themeModeDark ? "bg-primary text-white" : "bg-light text-black"
      }`}>
      <div className="w-full pt-[6rem]">
        <h1 className="text-3xl font-bold text-bright1 text-center">HTML</h1>
        <RoadmapAccordian accordionData={HTMLObj} />

        <div className="md:flex">
          <ModalsComponent modals={HTMLModals} />
        </div>
      </div>

      <div className="w-full pt-[3rem]">
        <h1 className="text-3xl font-bold text-bright1 text-center">CSS</h1>
        <RoadmapAccordian accordionData={CSSObj} />
      </div>

      <div className="w-full pt-[3rem]">
        <h1 className="text-3xl font-bold text-bright1 text-center">
          Version Control
        </h1>
        <RoadmapAccordian accordionData={VersionControlObj} />
      </div>
    </div>
  );
};

export default FrontendRoadmap;
