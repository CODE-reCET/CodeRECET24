import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstC from "./FirstC";

function Home() {
  // State to manage membership status
  const [isMembershipActive, setMembershipActive] = useState(false);

  return (
    <div>
      <Navbar />
      <FirstC />
    </div>
  );
}

export default Home;
