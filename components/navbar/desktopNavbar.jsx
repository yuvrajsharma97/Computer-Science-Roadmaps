import Link from "next/link";
import React from "react";
import ThemeToggle from "./themeToggle";

const DesktopNavbar = () => {
  const DesktopNavbarMenus = ["Home", "Explore", "Roadmaps", "About", "Contact"];

  return (
    <div className="menuOption p-3 rounded-full flex">
      {DesktopNavbarMenus.map((menu, index) => (
        <React.Fragment key={index}>
          <Link className="px-5" href={`/pages/${menu.toLowerCase()}`}>
            {menu}
          </Link>
          {index < DesktopNavbarMenus.length && " | "}
        </React.Fragment>
      ))}
      <div className="mx-5">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DesktopNavbar;
