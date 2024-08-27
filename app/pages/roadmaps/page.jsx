"use client";
import React from "react";
import "../style/styles.css";
import RoadmapCard from "@/components/pagesComponents/roadmapCardComponent";

const Roadmaps = () => {
  const RoadmapObject = [
    {
      title: "Frontend Roadmap",
      description:
        "Frontend Development involves using HTML, CSS, and JavaScript to create responsive and appealing web interfaces.",
      link: "frontend-roadmap",
    },
    {
      title: "Backend Roadmap",
      description:
        "Backend Development involves creating databases, and APIs using technologies like Node.js, SQL, and MongoDB.",
      link: "backend-roadmap",
    },
    {
      title: "Fullstack Roadmap",
      description:
        "Fullstack Development combines both frontend and backend development to create complete web applications.",
      link: "fullstack-roadmap",
    },
  ];

  return (
    <React.Fragment>
      <div className={"flex items-center"}>
        <div className="flex flex-wrap justify-around w-full my-[12rem]">
          {RoadmapObject.map((roadmap, index) => (
            <RoadmapCard key={index} RoadmapObject={roadmap} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mb-[5rem]">
        <h3 className="w-10/12 text-lg md:text-xl text-bodytext">
          This platform gets constant updates to ensure that you have the most
          accurate and up-to-date information. New resources, guides, and
          roadmaps are added regularly, so check back often to stay informed!
        </h3>
      </div>
    </React.Fragment>
  );
};

export default Roadmaps;
