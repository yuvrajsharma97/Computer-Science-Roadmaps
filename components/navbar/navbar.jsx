"use client";
import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import DesktopNavbar from "./desktopNavbar";

const Navbar = () => {
  const { themeModeDark, setThemeModeDark } = useContext(AppContext);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
        setIsScrolled(currentScrollPos)
      console.log(isScrolled);
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      style={{
        backgroundColor: isScrolled >= 50 ? "transparent !important" : "",
      }}
      className={`fixed top-0 left-0 w-full py-2 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${themeModeDark ? "navbarDark" : "navbarLight"} ${
        isScrolled >= 50 ? "bg-transparent" : "bg-inherit"
      }`}>
      <DesktopNavbar />
    </nav>
  );
};

export default Navbar;
