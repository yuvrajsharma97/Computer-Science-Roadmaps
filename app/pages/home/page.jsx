'use client';
import React, { useContext } from "react";
import "./home.css";
import { AppContext } from "@/context/appcontextwrapper";

const HomePage = () => {
  const { themeModeDark } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        page
      </div>
    </React.Fragment>
  );
};

export default HomePage;
