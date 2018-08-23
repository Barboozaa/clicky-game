import React from "react";
import "./Pics.css";

const Pics = props => (
  <div className="card" onClick={props.func}>
    <img className="img" alt={props.name} src={props.image} />
  </div>
);

export default Pics;
