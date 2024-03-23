import React from "react";
import Navbare from "../../components/Navbar";
import MembershipStatus from "./membership/Membership";
import Donation from "./donation/Donation";
import './Community.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Community() {
  return (
    <>
      <Navbare />
      <div className="community community-container">
        <div>
          <MembershipStatus />
        </div>
        <div>
          <Donation />
        </div>
      </div>
    </>
  );
}

export default Community;
