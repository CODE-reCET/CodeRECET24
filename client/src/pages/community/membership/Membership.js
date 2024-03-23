// MembershipStatus.js

import React from "react";

const MembershipStatus = ({ isMembershipActive, setMembershipActive }) => {
  return (
    <div>
      <h2>Membership Status</h2>
      <p>
        Your membership is currently{" "}
        {isMembershipActive ? "active" : "inactive"}.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => setMembershipActive(!isMembershipActive)}
      >
        {isMembershipActive ? "Deactivate Membership" : "Activate Membership"}
      </button>
    </div>
  );
};

export default MembershipStatus;
