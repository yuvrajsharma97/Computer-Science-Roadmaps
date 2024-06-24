'use client';
import React, { useContext } from "react";
import "../style/pages.css";
import { AppContext } from "@/context/appcontextwrapper";

const HomePage = () => {
  const { themeModeDark } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        Home
      </div>
    </React.Fragment>
  );
};

export default HomePage;
