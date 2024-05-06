import React from "react";
import "./Body.css";
import Mainf from "./Mainf";
import Maine from "./Maine";
import Mainb from "./Mainb";
import Maina from "./Maina";

function Body() {
  return (
    <div className="Body">
      <div className="cardhead"></div>

      <Maina />

      <Mainb />
      <Maine />

      <Mainf />
    </div>
  );
}

export default Body;
