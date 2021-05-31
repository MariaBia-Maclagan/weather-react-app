import React from "react";

import Weather from "./Weather";
import Forecast from "./Forecast";
import Switch from "./Switch";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather defaultCity="London"/>
            <Forecast />
            <br />
            <Switch />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
