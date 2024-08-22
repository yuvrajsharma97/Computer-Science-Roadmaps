"use client";
import React from "react";
import Image from "next/image";
import styles from "../style/styles";
import "../style/styles.css";
import { FaLaptopCode } from "react-icons/fa";
import fill1 from "@/public/assets/fill1.png";
import CustomLinkButton from "@/components/pagesComponents/linkButtonComponent";

const HomePage = () => {
  return (
    <React.Fragment>
      <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 order-2 md:order-1`}>
          <div className="flex flex-row items-center py-[6px] px-4 bg-tranparent-gradient1 rounded-[10px] mb-2">
            <FaLaptopCode className="text-[#F7B318] text-[18px]" />
            <p className={`${styles.paragraph} ml-5`}>
              <span className="text-white">
                {" "}
                Ultimate guide for Computer Science
              </span>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[80px] leading-[60px]">
              Computer Science is
              <br className="block" />{" "}
              <span className="text-gradient">Vast and Dispersed</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0"></div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[80px] leading-[60px] w-full">
            <span>but.....</span> <br />
            We can help.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Lost in the CS maze? We've got your back. Our roadmaps light the way
            through the complex world of computer science, helping students and
            pros find their path.
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative order-1 md:order-2`}>
          <Image
            src={fill1}
            alt="Fill1"
            width={"100%"}
            height={"100%"}
            className=" relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}></div>
      </section>
      <section className="my-[8rem] md:my-[10rem]">
        <div className="w-10/12 mx-auto my-10 p-6 bg-[#ffe599] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-opacity-30 border-white text-center">
          <h2 className="text-4xl font-bold text-bodyheading mb-4">
            Explore Computer Science Roadmaps
          </h2>
          <p className="text-bodytext text-lg px-5">
            If you are a student or a professional interested in the field of
            computer science, this is a one-stop destination for you. We provide
            you with the best resources to help you learn and grow in the field
            of computer science. There are a lot of pathways in computer
            science, and it can be a bit confusing to choose the right one. We
            can help you choose the right pathway. Explore these pathways and
            find the one that suits you the best. Just choose yes or no for a
            couple of questions and we will help you choose the right pathway.
          </p>

          <CustomLinkButton text="Explore" href="/pages/explore" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
