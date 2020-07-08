import React, { Component } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="jumbotron j-tron">
          <h1 class="display-4">System.out.println( "Hello, there!" );</h1>
          <p className="lead l-1">
            Hi, I'm Robert and I'm a newly graduated computer science student
            whose passion is creating something out of nothing.
          </p>
          <hr className="my-4" />
          <p className="l-2">
            Whether it's programming, testing, graphic design, video-editing or
            even fashion. I'm all ears.
          </p>
          <p className="lead">
            <Link to="/about">
              <button className="btn btn-primary btn-lg j-btn">
                Learn More
              </button>
            </Link>
          </p>
        </div>

        <GitHubCalendar
          username="rmopia"
          color="hsl(203, 82%, 33%)"
          fontSize={16}
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
        <p className="lead">
          <Link to="/projects">
            <button className="btn btn-primary btn-lg p-btn">Projects</button>
          </Link>
          <a href="https://github.com/rmopia">
            <button className="btn btn-primary btn-lg git-btn">Github</button>
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
