import React from "react";
import Navbare from "../../components/Navbar.js";
import BinTrackingDashboard from "../BinTracking/BinTrack.js";
import MapComponent from "../map/MapComponent.js";

function Bin() {
  return (
    <>
      <Navbare />
      <BinTrackingDashboard />
      <MapComponent />
    </>
  );
}

export default Bin;
