import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstC from "./FirstC";
import MapComponent from "../map/MapComponent";
import BinTrackingDashboard from "../BinTracking/BinTrack";

function Home() {
  return (
    <>
      <Navbar />
      <FirstC />
      <MapComponent />
    </>
  );
}

export default Home;
