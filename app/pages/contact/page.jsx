"use client";
import React, { useContext } from "react";
import "../style/styles.css";
import { AppContext } from "@/context/appcontextwrapper";

const Contact = () => {
  const { themeModeDark } = useContext(AppContext);
  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        Contact
      </div>
    </React.Fragment>
  );
};

export default Contact;
