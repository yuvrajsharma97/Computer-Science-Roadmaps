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

const FrontendRoadmap = () => {
  const { themeModeDark } = useContext(AppContext);

  return (
    <div
      className={`w-full min-h-screen ${
        themeModeDark ? "bg-primary text-white" : "bg-light text-black"
      }`}>
      <div className="w-full">
        <h1 className="text-3xl font-bold text-bright1 text-center">
          HTML
        </h1>
        <RoadmapAccordian accordionData={HTMLObj} />
      </div>
    </div>
  );
};

export default FrontendRoadmap;
