import React, { Component } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </div>

        <GitHubCalendar
          username="rmopia"
          color="hsl(203, 82%, 33%)"
          fontSize={16}
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </div>
    );
  }
}

export default Home;
