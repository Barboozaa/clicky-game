import React from "react";
import "./Pics.css";

const Pics = props => (
  <div className="card">
    <img className="img" alt={props.name} src={props.image} id={props.id} onClick={props.func} />
  </div>
);

export default Pics;
