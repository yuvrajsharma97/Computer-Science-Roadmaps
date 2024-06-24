"use client";
import React, { useContext } from "react";
import "../style/pages.css";
import { AppContext } from "@/context/appcontextwrapper";

const Roadmaps = () => {
  const { themeModeDark } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        Roadmaps
      </div>
    </React.Fragment>
  );
};

export default Roadmaps;
