import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import Forecastday from "./Forecastday";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
setForecastData (response.data.daily);
setReady (true);

}
if (ready){
  console.log(forecastData);
  return (
    <div className="Forecast">
      <div className="row">

      <div className="col-8" >
      <Forecastday data= {forecastData[0]} />
    </div>
    </div>
    </div>
    
  );
  
} else {
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let url =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=bb872f49cc68a55123bc66fe7274548&units=metric`;
  
  axios.get(url).then(handleResponse);
  return null;
}
}
