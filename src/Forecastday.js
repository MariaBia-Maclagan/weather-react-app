import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecastday(props){
    function maxTemp (){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}•`
    }
function minTemp(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}•`
}
function day(){
    let date = new Date (props.day.dt *1000);
    let day = date.getday();

    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday" 
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
            <strong>{minTemp}</strong> <span>/ {maxTemp}</span>
          </li>
        </div>
        </div>
);}