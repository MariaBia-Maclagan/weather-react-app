import React, { useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState (false);
  const [WeatherData, setWeatherData] = useState ({});
  function handleResponse(response){
    setWeatherData ({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city:  response.data.name,
      description: response.data.weather[0].description,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max
    });
    setReady (true);
  }

  if (ready){
    return (
      <div className="Weather">
      <div className="row">
        <div className="col-8">
          <h1>{WeatherData.city}</h1>
        </div>
        <div className="col-4">
          <i className="fas fa-cloud cloud-icon"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="temperature-today">
            <span> <FormatDate date={WeatherData.date}/> </span>
            <br />
            <span>{WeatherData.description}</span>
            <br />
            <span>
              {Math.round(WeatherData.min)}° / {Math.round(WeatherData.max)}°
            </span>
          </p>
        </div>
        <div className="col-4">
          <h2 className="temperature-now">
            <span>{Math.round(WeatherData.temperature)}</span>
            <span className="degree">°C</span>
          </h2>
        </div>
        <div className="col-4">
          <p className="precipitation-today">
            <br />
            Wind: <span>{Math.round(WeatherData.wind)}</span>km/h
            <br />
            Humidity: <span>{WeatherData.humidity}</span>%
          </p>
        </div>
      </div>
    </div>
    );
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=bb872f49cc68a55123bc66fe7274548f&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
