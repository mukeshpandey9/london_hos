import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`fixed inset-0 flex z-40 ${sidebarOpen ? "" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        ></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <nav className="mt-5 px-2 space-y-1">
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
                    isActive
                      ? "text-white bg-indigo-600"
                      : "text-gray-900 hover:text-white hover:bg-indigo-600"
                  } focus:outline-none transition ease-in-out duration-150`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/admin/blog-posts"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
                    isActive
                      ? "text-white bg-indigo-600"
                      : "text-gray-900 hover:text-white hover:bg-indigo-600"
                  } focus:outline-none transition ease-in-out duration-150`
                }
              >
                Blog Posts
              </NavLink>
              <NavLink
                to="/admin/settings"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md ${
                    isActive
                      ? "text-white bg-indigo-600"
                      : "text-gray-900 hover:text-white hover:bg-indigo-600"
                  } focus:outline-none transition ease-in-out duration-150`
                }
              >
                Settings
              </NavLink>
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <input
                className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search"
                type="search"
              />
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 border-2 border-transparent rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405M4 17h5l-1.405-1.405M7 10v2m0 4v.01M7 10a3.5 3.5 0 113.5-3.5A3.5 3.5 0 017 10zM17 16v.01M17 16a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0017 16zm0 0v-3.5A3.5 3.5 0 0114 10.5v-.01"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
