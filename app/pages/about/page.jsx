"use client";
import React, { useContext } from "react";
import "../style/pages.css";
import { AppContext } from "@/context/appcontextwrapper";

const About = () => {
  const { themeModeDark } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        About
      </div>
    </React.Fragment>
  );
};

export default About;
