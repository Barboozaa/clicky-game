import React from "react";
import "./Header.css";

const Header = props => (
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                <li>Score : {props.currentScore}</li>
                <li>High Score : {props.highScore}</li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Header;
