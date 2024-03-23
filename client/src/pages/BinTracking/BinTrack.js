import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";
import "./bintrack.css";

const firebaseConfig = {
  apiKey: "AIzaSyAJ05WTJ4x7pQdFnsWHyomXENf0h15hIJc",
  authDomain: "bmw3-1bdc7.firebaseapp.com",
  projectId: "bmw3-1bdc7",
  storageBucket: "bmw3-1bdc7.appspot.com",
  messagingSenderId: "882416356913",
  appId: "1:882416356913:web:4a1c9e6bca1ce73b91cf10",
  measurementId: "G-M50VZWDN1T",
  databaseURL: "https://bmw3-1bdc7-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const BinTrackingDashboard = () => {
  const [bins, setBins] = useState([]);

  useEffect(() => {
    // Reference to bins in Firebase database
    const binsRef = ref(getDatabase(app), "bins");

    const listener = onValue(binsRef, (snapshot) => {
      const binsData = snapshot.val();
      if (binsData) {
        // Convert bins data to array
        const binsArray = Object.keys(binsData).map((binKey) => {
          const bin = binsData[binKey];
          // Access latitude and longitude data for each bin
          const latitudeData = bin.latitude;
          const longitudeData = bin.longitude;
          return {
            id: binKey, // Include id property
            latitudeData,
            longitudeData,
          };
        });
        setBins(binsArray);
      } else {
        setBins([]);
      }
    });

    // Cleanup function to unsubscribe from Firebase listener
    return () => {
      off(binsRef, "value", listener);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="bin-tracking-dashboard">
      <h2>Bin Tracking Dashboard</h2>
      <div>
        {bins.length === 0 ? (
          <p>No bins found</p>
        ) : (
          <ul className="bin-list">
            {bins.map((bin) => (
              <li key={bin.id} className="bin-item">
                <span className="bin-id">Bin ID: {bin.id}</span>
                <span className="latitude">Latitude: {bin.latitudeData}</span>
                <span className="longitude">
                  Longitude: {bin.longitudeData}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BinTrackingDashboard;
