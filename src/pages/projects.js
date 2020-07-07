import React, { Component } from "react";
import ProjectCards from "../components/projectCards";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <br />
        <h1>My Projects</h1>
        <br />
        <ProjectCards />
      </div>
    );
  }
}

export default Projects;
