import React from "react";
import "./Switch.css";

export default function Switch() {
  return (
    <div className="Switch">
      <h3>
        <i className="fas fa-random switch"></i>
        <span>
          {" "}
          <a href=" " className="fahrenheit">
            Switch to Fahrenheit
          </a>
        </span>
      </h3>
    </div>
  );
}
