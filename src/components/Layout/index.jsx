import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  return (
    <>
      <Header
        logoSrc={`${process.env.PUBLIC_URL}/images/logo.svg`}
        variant="cs_heading_color"
      />
      <Outlet />
      <Footer />
    </>
  );
}
