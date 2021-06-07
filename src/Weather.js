import React, { useState} from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState (props.defaultCity);
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
      max: response.data.main.temp_max,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord
    });
    setReady (true);
  }
function search (){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb872f49cc68a55123bc66fe7274548f&units=metric`;
  axios.get(url).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault ();
    search();
  }
function handleCityType (event) {
setCity (event.target.value);
}

  if (ready){
    return (
      <div className="Weather">
         <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        id="enter-city-input"
        className="cityName"
        onChange={handleCityType}
      />
      <span>
        {" "}
        <input type="submit" value="search" className="btn btn-info button" />
      </span>
      <span>
        {" "}
        <a href=" ">
          <i className="fas fa-map-marker-alt current-location-icon"></i>
        </a>
      </span>
    </form>
      < Weatherinfo data={WeatherData}/>
      < Forecast coordinates={WeatherData.coordinates}/>
    </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
