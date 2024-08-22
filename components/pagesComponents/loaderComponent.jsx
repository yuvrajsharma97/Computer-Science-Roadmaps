import React, { useContext } from "react";
import "./pagesComponent.css";
import { AppContext } from "@/context/appcontextwrapper";

const LoaderComponent = () => {
  const { themeModeDark } = useContext(AppContext);

  return (
    <div className="flex justify-center my-[3rem]">
      <p
        className={`loaderQ border-2 rounded-full ${
          themeModeDark ? "border-white" : "border-third"
        }`}></p>
    </div>
  );
};

export default LoaderComponent;
