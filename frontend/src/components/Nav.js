import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navStyle = {
  width: "100%",
};

export default function Nav({ isAuthenticated }) {
  console.log("NavBar says authentication is currently: "+isAuthenticated);
  return (
    <div className="container-fluid" style={navStyle}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            {isAuthenticated ? (
              <>
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
                  <NavLink className="nav-link vt323-font" to="/recommend">
                    Recommend Game
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link vt323-font" to="/configure">
                    Configure
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link vt323-font" to="/logout">
                    Logout
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link vt323-font" to="/internals">
                    Internals Demo
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link vt323-font" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link vt323-font" to="/signin">
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}