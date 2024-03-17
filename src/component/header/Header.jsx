import React from "react";
import log from "./../../img/Group 1.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="hed-img">
              <img style={{ width: "18px" }} src={log} alt="" />
              <h1>Todo</h1>
            </div>
            <div className="hed-text">
              <Link to="/">
                <h2>Home</h2>
              </Link>
              <Link>
                <h2>Favorite</h2>
              </Link>
              <Link to="/admin">
                <h2>Admin</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
