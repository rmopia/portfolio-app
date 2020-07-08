import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="project-card">
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.subtitle}
          </Card.Subtitle>
          <Card.Text>{this.props.body}</Card.Text>
          <Card.Link href={this.props.rref}>Github</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default ProjectCard;