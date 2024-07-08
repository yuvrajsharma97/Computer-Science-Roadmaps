import Link from 'next/link';
import React from 'react'
import "./pagesComponent.css"

const RoadmapCard = ({ RoadmapObject }) => {
  return (
    <Link
      href={`/pages/roadmaps/${RoadmapObject.link}`}
      className="w-80 m-5 rounded-md p-4 bg-secondary hvr-outline-out ">
      <div className="p-6">
        <h2 className="text-xl font-bold text-bright1">
          {RoadmapObject.title}
        </h2>
        <p className="mt-2 text-white text-md">{RoadmapObject.description}</p>
      </div>
    </Link>
  );
};

export default RoadmapCard