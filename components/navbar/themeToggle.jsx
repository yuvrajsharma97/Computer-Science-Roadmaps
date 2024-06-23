"use client";
import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle = () => {
  const { themeModeDark, setThemeModeDark } = useContext(AppContext);

  return (
    <button
      className={`p-1 border rounded-full border-1 ${
        themeModeDark ? " border-white shadow-light bg-white text-black" : " border-black shadow-dark bg-black text-white"
      }`}
      onClick={() => setThemeModeDark(!themeModeDark)}>
      {themeModeDark ? <CiLight /> : <CiDark />}
    </button>
  );
};

export default ThemeToggle;
