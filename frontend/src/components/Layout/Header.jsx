import React from "react";
import {
  CiFacebook,
  CiHome,
  CiInstagram,
  CiMail,
  CiMobile1,
  CiTwitter,
} from "react-icons/ci";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      {/* Top header section */}
      <header className="relative bg-white flex flex-col lg:flex-row items-center justify-between px-1 md:px-20 py-4 h-[10vh] md:h-[12vh]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-5 md:w-full w-[80%]">
          <a
            href="tel:9675905075"
            className="flex gap-1 items-center text-sm md:text-lg"
          >
            <CiMobile1 />
            +00 (123) 456 7890
          </a>
          <a
            href="mailto:Info@newlondonhospitality.com"
            className="flex gap-1 items-center text-sm md:text-lg"
          >
            <CiMail />
            Info@newlondonhospitality.com
          </a>
        </div>
        <div className="w-10 scale-[1.75] absolute right-5 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <img src="/images/logo.jpeg" className="w-fit" alt="" />
        </div>
        <div className="hidden md:flex list-none items-center justify-between gap-3">
          <li className="">
            <CiHome className="text-2xl font-bold cursor-pointer" />
          </li>
          <li>
            <CiFacebook className="text-2xl font-bold cursor-pointer" />
          </li>
          <li>
            <CiInstagram className="text-2xl font-bold cursor-pointer" />
          </li>
          <li>
            <CiTwitter className="text-2xl font-bold cursor-pointer" />
          </li>
        </div>
      </header>
      <nav className="sticky top-0 flex items-center justify-between w-full px-3 py-4 md:px-20 bg-dark z-50">
        <div className="text-xl font-semibold text-center text-zinc-100">
          NLH
        </div>
        <div className="flex items-center gap-2 md:gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm md:text-[1rem] font-semibold  
              ${isActive ? "text-white" : "text-gray-400 hover:text-gray-100 "}
            `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm md:text-[1rem] font-semibold  
              ${
                isActive
                  ? "text-gray-100"
                  : "text-gray-400 hover:text-gray-100 "
              }
            `
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-sm md:text-[1rem] font-semibold  
              ${isActive ? "text-white" : "text-gray-400 hover:text-gray-100 "}
            `
            }
          >
            Technology & Innovation
          </NavLink>
        </div>
      </nav>
    </>
  );
};
