import React from "react";
// import Navbar from "../components/navbar/navbar";
// import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* ALL PAGES LOAD HERE */}
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;