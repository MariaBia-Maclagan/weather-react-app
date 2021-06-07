import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecastday(props){

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" 
    ]

    return days[day];
}

return (
    <div>
    <div>
          <li>
            <div>
              < WeatherIcon code={props.data.weather[0].icon} size= {20}/>
              <span> {day()}</span>
            </div>
          </li>
        </div>
        <div className="col-4">
          <li>
            <strong> {Math.round(props.data.temp.min)}°</strong> <span>/ {Math.round(props.data.temp.max)}°</span>
          </li>
        </div>
        </div>
);}