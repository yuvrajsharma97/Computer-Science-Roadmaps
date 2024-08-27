"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import csrLogoImg from "@/public/assets/logo.jpg";


const Footer = () => {
  return (
    <footer className={"py-8 px-2 bg-primary border-t-[3px]"}>
      <div className="w-full container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between text-center md:text-left mb-4 md:mb-0">
          <Image
            src={csrLogoImg}
            alt="Computer Science Roadmap"
            className="bg-white rounded-lg mx-5 mb-4 md:mb-0"
            data-tip="hello"
            width={85}
            height={35}
          />
          <div className="my-auto">
            <h2 className="text-2xl font-bold">Computer Science Roadmaps</h2>
            <p className="text-sm mt-2">
              Your guide to a successful career in tech.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end space-x-6">
          <Link href="/pages/about">
            <span className="hover:underline">About Us</span>
          </Link>
          <Link href="/pages/contact">
            <span className="hover:underline">Contact Us</span>
          </Link>
          <Link href="/pages/privacyPolicy">
            <span className="hover:underline">Privacy Policy</span>
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-bodyheading">
          &copy; 2024 Computer Science Roadmaps. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Proudly built with modern technologies to empower the next generation
          of developers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
