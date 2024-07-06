import Link from 'next/link';
import React from 'react'

const RoadmapCard = ({ RoadmapObject }) => {
  return (
    <Link
      href={`/pages/roadmaps/${RoadmapObject.link}`}
      className="w-80 m-5 border border-bright2 rounded-md p-4 bg-secondary transition hover:shadow-cardShadow hover:scale-95 ">
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