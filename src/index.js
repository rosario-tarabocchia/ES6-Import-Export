import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math";
// import * as pi from "./math"; *discouraged*

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
