import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="openSource">
        <a
          href="https://github.com/MariaBia-Maclagan/weather-app"
          target="_blank"
          rel="noreferrer"
          className="code"
        >
          Open source-code,
        </a>
        by M. F. Maclagan
      </p>
    </div>
  );
}
