"use client";
import React, { useState } from "react";
import { fullStackTracks } from "@/jsonData/roadmapData";
import LoaderComponent from "@/components/pagesComponents/loaderComponent";
import ModalsComponent from "@/components/pagesComponents/modalsComponent";
import RoadmapAccordian from "@/components/pagesComponents/roadmapAccordian";

const FullStackRoadmap = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showFullStackFrameworks, setShowFullStackFrameworks] = useState(false);
  const [fullStackFrameworkArray, setFullStackFrameworkArray] = useState({});

  const handleFullStackTrackClick = (selectedTrack) => {
    setShowLoader(true);
    setShowFullStackFrameworks(false);
    setFullStackFrameworkArray(selectedTrack);
    setTimeout(() => {
      setShowLoader(false);
      setShowFullStackFrameworks(true);
    }, 1500);
  };

  return (
    <div className="h-full w-full">
      <div className="flex justify-around w-full pt-[6rem] px-4 md:px-0">
        <h3 className="text-xl md:text-2xl font-bold text-bright2">
          To learn full-stack development, you should pick a track to begin
          with. Here are some popular full-stack tracks:
        </h3>
      </div>
      <div className={`${showFullStackFrameworks ? "h-full" : "h-[55vh]"}`}>
        <div className="flex flex-col md:flex-row w-full mt-[4rem]">
          {fullStackTracks.map((track, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 flex justify-center my-3 px-2">
              <button
                className="btn border-none text-white btn-wide"
                onClick={() => handleFullStackTrackClick(track)}>
                {track.title}
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

      {showFullStackFrameworks && (
        <>
          <div className="w-full py-[5rem]">
            <h1 className="text-3xl font-bold text-yellow text-center">
              {fullStackFrameworkArray.title}
            </h1>
            <RoadmapAccordian
              accordionData={fullStackFrameworkArray.accordionData}
            />
            <div className="md:flex">
              <ModalsComponent modals={fullStackFrameworkArray.modals} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FullStackRoadmap;
