import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <ul className="Forecast">
      <div className="row">
        <div className="col-8">
          <li>
            <div>
              <i className="far fa-sun icon"></i>
              <span> Saturday</span>
            </div>
          </li>
        </div>
        <div className="col-4">
          <li>
            <strong>7°</strong> <span>/ 13°</span>
          </li>
        </div>
        <div className="col-8">
          <li>
            <div>
              <i className="far fa-sun icon"></i>
              <span> Sunday</span>
            </div>
          </li>
        </div>
        <div className="col-4">
          <li>
            <strong>7°</strong> <span>/ 13°</span>
          </li>
        </div>
        <div className="col-8">
          <li>
            <div>
              <i className="far fa-sun icon"></i>
              <span> Monday</span>
            </div>
          </li>
        </div>
        <div className="col-4">
          <li>
            <strong>7°</strong> <span>/ 13°</span>
          </li>
        </div>
        <div className="col-8">
          <li>
            <div>
              <i className="far fa-sun icon"></i>
              <span> Tuesday</span>
            </div>
          </li>
        </div>
        <div className="col-4">
          <li>
            <strong>7°</strong> <span>/ 13°</span>
          </li>
        </div>
        <div className="col-8">
          <li>
            <div>
              <i className="far fa-sun icon"></i>
              <span> Wednesday</span>
            </div>
          </li>
        </div>
        <div className="col-4">
          <li>
            <strong>7°</strong> <span>/ 13°</span>
          </li>
        </div>
      </div>
    </ul>
  );
}
