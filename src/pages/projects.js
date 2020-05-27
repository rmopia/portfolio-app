import React, { Component } from "react";
import ProjectCards from "../components/projectCards";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <ProjectCards />
      </div>
    );
  }
}

export default Projects;
