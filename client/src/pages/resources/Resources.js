import React from "react";
import Navbare from "../../components/Navbar.js";
import ECards from "./Ecards.js";
import "./resources.css";

function Resources() {
  return (
    <>
      <Navbare />
      <div className="page-container"></div>
      <div className="space"></div>
      <ECards />
      <div className="space"></div>
    </>
  );
}

export default Resources;
