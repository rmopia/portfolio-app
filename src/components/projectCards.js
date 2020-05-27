import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ProjectCards extends Component {
  state = {};
  render() {
    return (
      <div>
        <Card style={{ width: "20rem" }} className="mx-auto">
          <Card.Body>
            <Card.Title>Movie Reviewing Website</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              PHP MySQL site
            </Card.Subtitle>
            <Card.Text>
              PHP website connected to a MySQL backend. Used to rate and review
              movies and tv shows. Decorated with HTML and Bootstrap.
            </Card.Text>
            <Card.Link href="https://github.com/rmopia/php-mysql-review-website">
              Github
            </Card.Link>
          </Card.Body>
        </Card>
        <p></p>
        <Card style={{ width: "20rem" }} className="mx-auto">
          <Card.Body>
            <Card.Title>Weather Forecast App</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Python Flask designed app
            </Card.Subtitle>
            <Card.Text>
              Basic Python application utilizing Flask microframework. Predicted
              and updated weather via a forecasting API.
            </Card.Text>
            <Card.Link href="https://github.com/rmopia/python-flask-weather-app">
              Github
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCards;
