import React from "react";
import Navbare from "../../components/Navbar";
import MembershipStatus from "./membership/Membership";
import Donation from "./donation/Donation";

function Community() {
  return (
    <>
      <Navbare />
      <div className="container d-flex mt-5 justify-content-center">
        <MembershipStatus />
        <Donation/>
      </div>
    </>
  );
}

export default Community;
