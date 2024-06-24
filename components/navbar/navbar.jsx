"use client";
import { AppContext } from "@/context/appcontextwrapper";
import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
  const { themeModeDark, setThemeModeDark } = useContext(AppContext);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth();

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
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
      className={`fixed top-0 left-0 w-full py-2 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      } ${themeModeDark ? "text-white" : "text-black"}`}>
      <section className="hidden md:flex items-center justify-center">
        <DesktopNavbar />
      </section>
      <section className="flex items-center justify-end md:hidden">
        <MobileNavbar />
      </section>
    </nav>
  );
};

export default Navbar;
