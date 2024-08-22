"use client";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Link from "next/link";
import csrLogoImg from "@/public/assets/logo.jpg";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [MenuToggle, setMenuToggle] = useState(false);

  const NavbarMenus = ["Home", "Explore", "Roadmaps", "About", "Contact"];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
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
      className={`{ rounded-lg navbar py-4 px-10 w-11/12 md:w-8/12 mt-3 fixed bg-[#ffffff] bg-opacity-20 backdrop-filter backdrop-blur-lg z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}>
      <Link href="/pages/home">
        <Image
          src={csrLogoImg}
          alt="Computer Science Roadmap"
          className="bg-white rounded-lg"
          data-tip="hello"
          width={45}
          height={25}
        />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NavbarMenus.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] py-auto ${
              active === nav ? "text-bodyheading" : "text-dimWhite"
            } ${index === NavbarMenus.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav)}>
            <Link
              className="py-1 block hover:text-bodyheading"
              href={`/pages/${nav.toLowerCase()}`}>
              {nav}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button className="text-2xl" onClick={() => setMenuToggle(!MenuToggle)}>
          {MenuToggle ? <IoMdClose /> : <IoMdMenu />}
        </button>

        <div
          className={`${
            !MenuToggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {NavbarMenus.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-medium cursor-pointer text-[16px] py-auto ${
                  active === nav ? "text-bodyheading" : "text-dimWhite"
                } ${index === NavbarMenus.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav);
                  setMenuToggle(!MenuToggle);
                }}>
                <Link
                  className="py-1 block hover:text-bodyheading"
                  href={`/pages/${nav.toLowerCase()}`}>
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
