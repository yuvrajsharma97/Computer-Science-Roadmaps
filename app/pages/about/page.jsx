import React from "react";
import Image from "next/image";
import aboutImage from "@/public/assets/about-image.jpg"; // Replace with your image path

const About = () => {
  return (
    <section className="">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center parallax w-11/12 rounded-lg my-5 mx-auto"
          style={{ backgroundImage: `url(${aboutImage.src})` }}></div>
        <div className="py-[6rem]  relative z-10 flex flex-col justify-center items-center p-6 text-white h-full bg-primary bg-opacity-75 roumded-lg">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-6 text-bodyheading">
              About Computer Science Roadmaps
            </h1>

            <p className="text-lg mb-4">
              Welcome to Computer Science Roadmaps, your trusted resource for
              navigating the dynamic and expansive field of computer science.
              Whether you&apos;re a high school student exploring your options
              or a professional seeking to transition into tech, my platform is
              designed to empower you with the knowledge and tools necessary to
              make informed decisions about your educational and career path.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-bodyheading">
              My Mission
            </h2>
            <p className="text-lg mb-4">
              Mission of the platform is to break down the complexities of
              computer science, providing beginners with clear, actionable
              guidance to advance in this ever-evolving field. I offer
              meticulously curated roadmaps tailored to a variety of roles
              within the tech industry, including backend development, frontend
              development, and full-stack engineering. Each roadmap is crafted
              to equip you with the essential skills and knowledge needed to
              excel in your chosen career.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-bodyheading">
              Who I Am
            </h2>
            <p className="text-lg mb-4">
              I am a software engineer with a deep passion for learning and a
              strong desire to help others succeed in the field of computer
              science. Drawing from my experience in the tech industry, I am
              committed to creating accurate, up-to-date resources that are
              accessible to everyone, regardless of their background or
              experience level.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-bodyheading">
              Why Choose this platform?
            </h2>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>
                Expertly designed roadmaps that adhere to industry best
                practices.
              </li>
              <li>
                Resources and guidance tailored to various levels of experience,
                ensuring relevance and practicality.
              </li>
              <li>
                A platform that is regularly updated with new content and the
                latest industry insights.
              </li>
            </ul>

            <p className="text-lg">
              The platform is committed to your success in the field of computer
              science. Whether you&apos;re at the beginning of your journey or
              aiming to deepen your expertise in a specific area, Computer
              Science Roadmaps is here to provide the support and direction you
              need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
