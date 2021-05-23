import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Enter city"
        id="enter-city-input"
        className="cityName"
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
  );
}
