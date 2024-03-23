import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapComponent.css"; // Import CSS file for styling

class MapComponent extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "400px",
      position: "relative",
    };

    const { gpsData, google } = this.props;

    return (
      <div className="map-container">
        {" "}
        {/* Added className for styling */}
        <Map
          google={google}
          zoom={8}
          initialCenter={{ lat: 37.7749, lng: -122.4194 }}
        >
          {gpsData.map((data, index) => (
            <Marker
              key={index}
              position={{ lat: data.latitude, lng: data.longitude }}
            />
          ))}
        </Map>
      </div>
    );
  }
}

class App extends Component {
  state = {
    gpsData: [
      { latitude: 37.7749, longitude: -122.4194 },
      { latitude: 37.785, longitude: -122.402 },
    ],
  };

  render() {
    return (
      <div>
        <h1>GPS Data Map</h1>
        <MapComponent gpsData={this.state.gpsData} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "GOOGLE_MAPS_API_KEY",
})(App);
