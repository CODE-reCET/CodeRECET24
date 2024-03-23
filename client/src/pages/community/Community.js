import React from "react";
import Navbare from "../../components/Navbar";
import MembershipStatus from "./membership/Membership";

function Community() {
  return (
    <>
      <Navbare />
      <div className="container d-flex mt-5 justify-content-center">
        <MembershipStatus />
      </div>
    </>
  );
}

export default Community;
