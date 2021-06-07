import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Forecastday from "./Forecastday";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady (false);
  }, [props.coordinates]);
  
  function handleResponse(response) {
setForecastData (response.data.daily);
setReady (true);

}
if (ready){
  return (
    <div className="Forecast">
      <div className="row">
{forecastData.map(function (dailyForecast, index){
  if (index <5 ) {
return (
      <div className="col-8" key={index}>
      <Forecastday data= {dailyForecast} />
    </div>
);
}
})}
    </div>
    </div>
  );
} else {
  let apiKey = "bb872f49cc68a55123bc66fe7274548f"
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let url =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;;
  
  axios.get(url).then(handleResponse);
  return (null);
}
}
