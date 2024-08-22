import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "@/context/appcontextwrapper";

const RoadmapCard = ({ RoadmapObject }) => {
  const { themeModeDark } = useContext(AppContext);

  return (
    <Link
      href={`/pages/roadmaps/${RoadmapObject.link}`}
      className={
        "w-80 m-5 px-2 hover:scale-110 transition-all text-center bg-[#ffe599] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-yellow"
      }>
      <div className="p-6">
        <h2 className="text-xl font-bold text-yellow">{RoadmapObject.title}</h2>
        <p className="mt-2 text-md">{RoadmapObject.description}</p>
      </div>
    </Link>
  );
};

export default RoadmapCard;
