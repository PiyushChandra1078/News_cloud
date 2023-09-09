import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/PiyushChandra1078">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://piyushchandra1078.github.io/Portfolio/">
          Piyush Chandra
        </a>{" "}
        {/* | Powered by{" "}
        <a target="_blank" href="">
          HTML HINTS
        </a> */}
      </div>
    </React.Fragment>
  );
}

export default App;
