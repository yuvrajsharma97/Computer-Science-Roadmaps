"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./themeToggle";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileNavbar = () => {
  const MobileNavbarMenus = ["Home", "Explore", "Roadmaps", "About", "Contact"];

  const [MenuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [MenuToggle]);
  
  return (
    <React.Fragment>
      {/* Position the toggle button at the top right of the screen */}
      <div className="fixed top-0 right-0 z-50 p-4">
        <button onClick={() => setMenuToggle(!MenuToggle)}>
          {MenuToggle ? (
            <span className="transition duration-1000 ease-in-out">
              <IoMdClose />
            </span>
          ) : (
            <span className="transition duration-1000 ease-in-out">
              <IoMdMenu />
            </span>
          )}
        </button>
      </div>
      {/* Conditionally render the menu options under the toggle button */}
      {MenuToggle && (
        <div
          data-aos="zoom-in-left"
          className="fixed top-12 right-0 z-40 p-5 mr-4 rounded-lg flex flex-col menuOption shadow-lg">
          <div className="mb-3">
            <ThemeToggle />
          </div>
          {MobileNavbarMenus.map((menu, index) => (
            <React.Fragment key={index}>
              <Link
                className="py-1 block hover:text-blue-500"
                href={`/pages/${menu.toLowerCase()}`}>
                {menu}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default MobileNavbar;
