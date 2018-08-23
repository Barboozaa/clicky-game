import React from "react";
import "./Header.css";

const Header = props => (
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">Clicky Game</a>
                <ul className="right">
                <li>Score : {props.currentScore}</li>
                <li>|</li>
                <li>High Score : {props.highScore}</li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Header;
