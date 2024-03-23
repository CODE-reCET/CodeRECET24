import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstC from "./FirstC";
import MapComponent from "../map/MapComponent";

function Home() {
  return (
    <>
      <Navbar />
      <FirstC />
    </>
  );
}

export default Home;
