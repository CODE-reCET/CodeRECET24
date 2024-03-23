// DonationCard.js

import React from "react";
import "./Donation.css"; // Import your CSS file
import donationThumbnail from "../../../assets/donate.jpg"; // Import the image

const Donation = () => {
  return (
    <div className="donation-card">
      <div className="thumbnail-container">
        <img src={donationThumbnail} alt="Donation" className="thumbnail" />
      </div>
      <div className="donation-details">
        <h2>Donate to Support Our Community</h2>
        <p>
          Your donation helps us strengthen our community, develop new
          initiatives, and support our members.
        </p>
        <button className="btn btn-primary">Donate Now</button>
      </div>
    </div>
  );
};

export default Donation;
