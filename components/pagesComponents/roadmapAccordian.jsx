"use client";
import React, { useState } from "react";

const RoadmapAccordian = ({ accordionData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <React.Fragment>
      <div className="h-full py-5 w-full">
        {accordionData.map((data, index) => (
          <div
            key={index}
            className="collapse bg-fourth border border-fourth my-5 w-4/6 mx-auto text-primary">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-lg font-medium text-center">
              <p>{data.title}</p>
            </div>
            <div className="collapse-content">
              <ol className="px-5">
                {data.subtopics.map((data, index) => (
                  <li key={index} className="list-disc">
                    {data}
                  </li>
                ))}
              </ol>
            </div>{" "}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default RoadmapAccordian;
