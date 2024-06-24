"use client";
import React, { useContext } from "react";
import "../style/pages.css";
import { AppContext } from "@/context/appcontextwrapper";

const Explore = () => {
  const { themeModeDark } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        Explore
      </div>
    </React.Fragment>
  );
};

export default Explore;
