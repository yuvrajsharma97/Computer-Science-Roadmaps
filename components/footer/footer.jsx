"use client";
import React, { useContext } from "react";
import { AppContext } from "@/context/appcontextwrapper";
import Link from "next/link";

const Footer = () => {
  const { themeModeDark } = useContext(AppContext);

  return (
    <footer className={"py-8 px-4 bg-primary border-t-[3px] text-bodytext"}>
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Computer Science Roadmaps</h2>
          <p className="text-sm mt-2">
            Your guide to a successful career in tech.
          </p>
        </div>
        <div className="flex justify-center md:justify-end space-x-6">
          <Link href="/pages/home" className="hover:underline">
            Home
          </Link>
          <Link href="/pages/explore" className="hover:underline">
            Explore
          </Link>
          <Link href="/pages/roadmaps" className="hover:underline">
            Roadmaps
          </Link>
          <Link href="/pages/about" className="hover:underline">
            About
          </Link>
          <Link href="/pages/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-bodyheading">
          &copy; 2024 Computer Science Roadmaps. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
