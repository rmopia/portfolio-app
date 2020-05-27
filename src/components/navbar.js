import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar justify-content-center">
        <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
