"use client";
import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext } from "react";
import "./navbar.css";
import DesktopNavbar from "./desktopNavbar";

const Navbar = () => {
  const { themeModeDark, setThemeModeDark } = useContext(AppContext);
  return (
    <div className={themeModeDark ? "navbarDark" : "navbarLight"}>
      <DesktopNavbar />
    </div>
  );
};

export default Navbar;
