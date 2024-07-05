import React from "react";
import { CiFacebook, CiHome, CiInstagram, CiMail, CiMobile1, CiTwitter } from "react-icons/ci";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      {/* Top header section */}
      <header className="relative bg-white flex flex-col lg:flex-row items-center justify-between px-1 md:px-20 py-4 ">
        <div className="flex flex-col md:flex-row md:items-center md:gap-5 md:w-full w-[80%]">
          <a href="tel:9675905075" className="flex gap-1 items-center text-sm md:text-sm">
            <CiMobile1 />
            +00 (123) 456 7890
          </a>
          <a href="mailto:Info@newlondonhospitality.com" className="flex gap-1 items-center text-sm md:text-sm">
            <CiMail />
            Info@newlondonhospitality.com
          </a>
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
      <nav className="sticky top-0 flex items-center justify-between w-full px-3 py-2 md:px-20 bg-black z-50">
        <img src="/images/logo1.png" className="w-24" alt="" />
        <div className="flex items-center md:gap-8">
          {[
            { path: "/", text: "Home" },
            { path: "/about", text: "About Us" },
            { path: "/blogs", text: "Blogs" },
            { path: "/technology-and-innovation", text: "Technology & Innovation" },
            { path: "/business-operations", text: "Business Operations" },
            { path: "/financial-management", text: "Financial Management" },
            { path: "/customer-relations", text: "Customer Relations" },
            { path: "/admin/login", text: "Login" },
          ].map(({ path, text }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm  font-medium  
                ${isActive ? "text-gray-100" : "text-gray-500 hover:text-gray-400 "}
              `
              }
            >
              {window.innerWidth > 640 || path !== "/blogs" ? text : "Tech & Innovation"}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};
