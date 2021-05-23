import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 18,
    date: "Friday 10:30",
    description: "Sunny",
    humidity: 80,
    wind: 2,
    max: 13,
    min: 7
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-8">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="col-4">
          <i className="fas fa-cloud cloud-icon"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="temperature-today">
            <span> {weatherData.date}</span>
            <br />
            <span>{weatherData.description}</span>
            <br />
            <span>
              {weatherData.min}° / {weatherData.min}°
            </span>
          </p>
        </div>
        <div className="col-4">
          <h2 className="temperature-now">
            <span>{weatherData.temperature}</span>
            <span className="degree">°C</span>
          </h2>
        </div>
        <div className="col-4">
          <p className="precipitation-today">
            <br />
            Wind: <span>{weatherData.wind}</span>km/h
            <br />
            Humidity: <span>{weatherData.humidity}</span>%
          </p>
        </div>
      </div>
    </div>
  );
}
