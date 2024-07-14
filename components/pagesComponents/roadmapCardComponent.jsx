import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "@/context/appcontextwrapper";

const RoadmapCard = ({ RoadmapObject }) => {
  const { themeModeDark } = useContext(AppContext);

  return (
    <Link
      href={`/pages/roadmaps/${RoadmapObject.link}`}
      className={`items-center w-80 m-5 rounded-[2rem] px-2 border-2 hover:scale-90 transition-all ${
        themeModeDark
          ? "bg-cardbg2 border-bright2 text-white"
          : "bg-cardbg1 border-bright1 text-black"
      }`}>
      <div className="p-6 text-primary">
        <h2 className="text-lg font-bold ">{RoadmapObject.title}</h2>
        <p className="mt-2 text-md">{RoadmapObject.description}</p>
      </div>
    </Link>
  );
};

export default RoadmapCard;
