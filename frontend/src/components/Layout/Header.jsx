import React, { useState } from "react";
import {
  CiFacebook,
  CiHome,
  CiInstagram,
  CiMail,
  CiMobile1,
  CiTwitter,
  CiMenuBurger,
  CiSquareRemove,
} from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top header section */}
      <header className="relative bg-white flex flex-row lg:flex-row items-center justify-between px-5 md:px-20 py-4 h-[10vh] md:h-[16vh]">
        <div className="flex flex-col md:flex-row md:items-center md:gap-5 md:w-full w-[80%]">
          <a
            href="tel:9675905075"
            className="flex gap-1 items-center text-sm md:text-sm"
          >
            <CiMobile1 />
            +00 (123) 456 7890
          </a>
          <a
            href="mailto:Info@newlondonhospitality.com"
            className="flex gap-1 items-center text-sm md:text-sm"
          >
            <CiMail />
            Info@newlondonhospitality.com
          </a>
        </div>

        <div className="hidden md:flex list-none items-center justify-between gap-3">
          <li>
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

      {/* Main navbar */}
      <nav className="sticky top-0 flex items-center justify-between w-full px-3 py-2 md:px-20 bg-black z-50">
        <img src="/images/logo1.png" className="w-24" alt="Logo" />
        <div className="flex-row items-center md:gap-8 hidden lg:flex">
          {[
            { path: "/", text: "Home" },
            { path: "/about", text: "About Us" },
            { path: "/blogs", text: "Blogs" },
            {
              path: "/technology-and-innovation",
              text: "Technology & Innovation",
            },
            { path: "/business-operations", text: "Business Operations" },
            { path: "/financial-management", text: "Financial Management" },
            { path: "/customer-relations", text: "Customer Relations" },
            { path: "/admin/login", text: "Login" },
          ].map(({ path, text }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-gray-100"
                    : "text-gray-500 hover:text-gray-400"
                }`
              }
            >
              {window.innerWidth > 640 || path !== "/blogs"
                ? text
                : "Tech & Innovation"}
            </NavLink>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle}>
            <CiMenuBurger className="text-2xl text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center lg:hidden">
          <button onClick={handleMenuToggle} className="absolute top-4 right-4">
            <CiSquareRemove className="text-2xl text-white" />
          </button>
          <div className="flex flex-col items-center gap-6">
            {[
              { path: "/", text: "Home" },
              { path: "/about", text: "About Us" },
              { path: "/blogs", text: "Blogs" },
              {
                path: "/technology-and-innovation",
                text: "Technology & Innovation",
              },
              { path: "/business-operations", text: "Business Operations" },
              { path: "/financial-management", text: "Financial Management" },
              { path: "/customer-relations", text: "Customer Relations" },
              { path: "/admin/login", text: "Login" },
            ].map(({ path, text }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? "text-gray-100"
                      : "text-gray-500 hover:text-gray-400"
                  }`
                }
                onClick={handleMenuToggle}
              >
                {text}
              </NavLink>
            ))}
            <div className="md:hidden flex list-none items-center justify-between gap-5">
              <li>
                <CiHome className="text-3xl font-bold cursor-pointer text-white" />
              </li>
              <li>
                <CiFacebook className="text-3xl font-bold cursor-pointer text-white" />
              </li>
              <li>
                <CiInstagram className="text-3xl font-bold cursor-pointer text-white" />
              </li>
              <li>
                <CiTwitter className="text-3xl font-bold cursor-pointer text-white" />
              </li>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
