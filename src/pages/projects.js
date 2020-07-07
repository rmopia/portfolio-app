import React, { Component } from "react";
import ProjectCard from "../components/projectCard";
import CardDeck from "react-bootstrap/CardDeck";
import "./projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: [
        {
          title: "Movie Reviewing Website",
          subtitle: "PHP MySQL site",
          body:
            "PHP website connected to a MySQL backend. Used to rate and review. movies and tv shows. Decorated with HTML and Bootstrap.",
          rref: "https://www.github.com/rmopia/php-mysql-review-website",
        },
      ],
    };
  }
  render() {
    const { cardContent } = this.state;
    return (
      <div>
        <h1 className="project-h1">My Projects</h1>
        <CardDeck className="project-cards mx-auto w-75">
          <ProjectCard
            title={cardContent[0].title}
            subtitle={cardContent[0].subtitle}
            body={cardContent[0].body}
            rref={cardContent[0].rref}
          />
          <ProjectCard />
          <ProjectCard />
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
