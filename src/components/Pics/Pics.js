import React from "react";
import "./Pics.css";

const Pics = props => (
  <div className="card">
    <div className="card-image">
        {/* <a href="#"> */}
            <img className="img" alt={props.name} src={props.image} onClick={props.func} />
        {/* </a> */}
    </div>
  </div>
);

export default Pics;
