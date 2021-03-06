import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Weather defaultCity="London"/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
