import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo (props){
    return (<div>
        <div className="row">
        <div className="col-8">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-4 weather" >
          < WeatherIcon code={props.data.icon} alt={props.data.description} size={60}/>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="temperature-today">
            <span> <FormatDate date={props.data.date}/> </span>
            <span>{props.data.description}</span>
            <br />
            <span>
              {Math.round(props.data.min)}° / {Math.round(props.data.max)}°
            </span>
          </div>
        </div>
        <div className="col-4">
          <h2 className="temperature-now">
            <span>{Math.round(props.data.temperature)}</span>
            <span className="degree">°C </span>
          </h2>
        </div>
        <div className="col-4">
          <p className="precipitation-today">
            <br />
            Wind: <span>{Math.round(props.data.wind)}</span>km/h
            <br />
            Humidity: <span>{props.data.humidity}</span>%
          </p>
        </div>
      </div>
      </div>
    )
}