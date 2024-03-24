import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class MapComponent extends Component {
  render() {
    const { gpsData } = this.props;

    return (
      <MapContainer
        center={[37.7749, -122.4194]} // Default center coordinates
        zoom={8}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {gpsData.map((data, index) => (
          <Marker key={index} position={[data.latitude, data.longitude]}>
            <Popup>{`Latitude: ${data.latitude}, Longitude: ${data.longitude}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
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
        <h1>GPS Data Map with OpenStreetMap (OSM) using react-leaflet</h1>
        <MapComponent gpsData={this.state.gpsData} />
      </div>
    );
  }
}

export default App;
