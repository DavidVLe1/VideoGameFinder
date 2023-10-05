import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand vt323-font" to="/">
          VideoGameFinder
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link vt323-font" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vt323-font" to="/library">
                Library
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vt323-font" to="/preferences">
                Game Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vt323-font" to="/signup">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vt323-font" to="/signin">
                Sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link vt323-font" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
