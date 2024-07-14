"use client";
import React, { useContext } from "react";
import "../style/pages.css";
import { AppContext } from "@/context/appcontextwrapper";
import RoadmapCard from "@/components/pagesComponents/roadmapCardComponent";

const Roadmaps = () => {
  const { themeModeDark } = useContext(AppContext);
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
      <div
        className={`min-h-screen flex items-center ${
          themeModeDark ? "bg-primary text-white" : "bg-lightbg text-black"
        }`}>
        <div className="flex flex-wrap justify-around w-full my-[6rem]">
          {RoadmapObject.map((roadmap, index) => (
            <RoadmapCard key={index} RoadmapObject={roadmap} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Roadmaps;
