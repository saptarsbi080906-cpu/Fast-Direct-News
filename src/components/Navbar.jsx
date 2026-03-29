import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// import PropTypes from "prop-types";

export class Navbar extends Component {
  render() {
    const linkActive = (event) => {
      const links = document.querySelectorAll(".nav-link");
      links.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand active" to="/">
              F&D News
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    aria-current="page"
                    to="/"
                    onClick={linkActive}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/about"
                    onClick={linkActive}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
