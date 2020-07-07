import React, { Component } from "react";
import SlideShow from "../components/slides";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="home-h1">Home</h1>
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
