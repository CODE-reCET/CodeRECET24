import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import MembershipStatus from "../../pages/membership/Membership"; // Import your MembershipStatus component
import "bootstrap/dist/css/bootstrap.min.css";
import FirstC from "./FirstC";

function Home() {
  // State to manage membership status
  const [isMembershipActive, setMembershipActive] = useState(false);

  return (
    <div>
      <Navbar />
      <MembershipStatus />
      <FirstC />
    </div>
  );
}

export default Home;
