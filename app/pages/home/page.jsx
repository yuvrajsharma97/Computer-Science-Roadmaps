"use client";
import React, { useContext, useEffect } from "react";
import "../style/pages.css";
import { AppContext } from "@/context/appcontextwrapper";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const { themeModeDark } = useContext(AppContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        <section className="flex flex-col md:flex-row justify-around items-center h-full">
          <div
            data-aos="zoom-in"
            className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl">Computer Science</h1>
            <div className="mt-4 md:mt-[2rem] text-2xl flex flex-col md:flex-row justify-center md:justify-start">
              <section className="text-4xl">is</section>
              <section
                className={`animation xs:text-4xl xs:mt-5 md:mt-0 md:text-4xl border-b-2 ${
                  themeModeDark ? "border-white" : "border-black"
                }`}>
                <div className="first">
                  <div>Vast</div>
                </div>
                <div className="second">
                  <div>Confusing</div>
                </div>
                <div className="third">
                  <div>Disperse</div>
                </div>
              </section>
              <section className="text-3xl md:text-4xl xs:mt-3 md:mt-0  ">but...</section>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="mt-6 md:mt-0 hidden md:inline-block">
            <Image
              src="/assets/heronobg.gif"
              alt="Hero Image"
              width={400}
              height={150}
              className="shadow-lg bg-[#E0EAFC] rounded-lg md:w-500 md:h-300"
              layout="intrinsic"
            />
          </div>
        </section>
        <section className="w-full">
          <div className="w-5/6">
          <p>
            alsnkd
          </p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
