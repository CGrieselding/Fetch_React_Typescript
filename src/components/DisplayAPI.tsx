// Functional Component
import React from "react";

const DisplayAPI = (props: any) => {
  const { lat, lng, temp, desc, feel, low, high, humid, wind } = props;

  return (
    <div>
      <h1 className="mainTitle">Geolocation App</h1>
      <div>
        <p>Your Latitude: {lat}</p>
        <p>Your Longitude: {lng}</p>
      </div>
      <h2 className="mainTitleTwo"> Today's Weather! </h2>
      <h4>Description: {desc}</h4>
      <h4>Current Temperature: {Math.round((temp - 273.15) * 1.8 + 32)}°F</h4>
      <h4>Real Feel: {Math.round((feel - 273.15) * 1.8 + 32)}°F</h4>
      <h4>Low Temperature: {Math.round((low - 273.15) * 1.8 + 32)}°F</h4>
      <h4>High Temperature: {Math.round((high - 273.15) * 1.8 + 32)}°F</h4>
      <h4>Humidity: {humid}%</h4>
      <h4>Wind Speed: {wind} m/s</h4>
    </div>
  );
};

export default DisplayAPI;
