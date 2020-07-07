import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
          About Me
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
        <a
          href="https://www.linkedin.com/in/robert-mopia/"
          class="btn btn-link"
          role="button"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.google.com" class="btn btn-link" role="button">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://github.com/rmopia" class="btn btn-link" role="button">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </nav>
    );
  }
}

export default Navbar;
