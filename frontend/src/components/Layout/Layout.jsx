import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
