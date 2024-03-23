// MembershipStatus.js

import React from "react";
import "./Membership.css";

const MembershipStatus = ({ isMembershipActive, setMembershipActive }) => {
  return (
    <div>
      {/* Membership Status Card */}
      <div className="membership-status">
        <h2>Membership Status</h2>
        <p>
          Your membership is currently{" "}
          {isMembershipActive ? "active" : "inactive"}.<br /> Renew your memberships to continue developing your career, accessing essential networking opportunities,<br />
          and receiving other exclusive open-source benefits—including funding etc.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => setMembershipActive(!isMembershipActive)}
        >
          {isMembershipActive ? "Deactivate Membership" : "Renew Membership"}
        </button>
      </div>

      {/* Donation Card */}
      <div className="donation-card">
        <h2>Support Our Community</h2>
        <p>
          Help us strengthen our community by making a donation. Your support allows us to continue providing <br/>valuable resources and services to our members.
        </p>
        <button className="btn btn-primary">Donate</button>
      </div>
    </div>
  );
};

export default MembershipStatus;
