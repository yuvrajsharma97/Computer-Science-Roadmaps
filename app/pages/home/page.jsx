"use client";
import React, { useContext, useEffect } from "react";
import "../style/pages.css";
import { AppContext } from "@/context/appcontextwrapper";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const HomePage = () => {
  const { themeModeDark } = useContext(AppContext);
  useEffect(() => {
    
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className={themeModeDark ? "landingpageDark" : "landingpageLight"}>
        <section className="flex flex-col md:flex-row justify-around items-center h-full">
          <div data-aos="zoom-in" className="text-center md:text-left">
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
              <section className="text-3xl md:text-4xl xs:mt-3 md:mt-0  ">
                but...
              </section>
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
        <section
          className={`w-full flex justify-around bg-fixed bg-cover bg-no-repeat py-[3rem] ${
            themeModeDark ? "bg-image2" : "bg-image3"
          }`}>
          <div className="w-5/6  shadow-lg glassEffect rounded-md p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">We can help</h1>
            <div className="text-lg">
              <p className="my-5">
                If you are a student or a professional interested in the field
                of computer science, this is a one-stop destination for you. We
                provide you with the best resources to help you learn and grow
                in the field of computer science.
              </p>
              <p className="my-5">
                There are a lot of pathways in computer science, and it can be a
                bit confusing to choose the right one. We can help you choose
                the right pathway.
              </p>
              <p className="my-5">
                Explore these pathways and find the one that suits you the best.
                Just fill a simple form and we will help you choose the right
                pathway.
              </p>
            </div>
            <div className="flex justify-center mt-[4rem] my-5">
              <Link
                href={"/pages/explore"}
                class="inline-block rounded bg-black px-7 pb-2.5 pt-3 text-sm uppercase font-sm leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-black-500 hover:shadow-primary-2 focus:bg-black-500 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-black-500 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Explore Pathways
              </Link>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
