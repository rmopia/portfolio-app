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
          title: "Bartending Chat Bot",
          subtitle: "Python Regex & Algorithm Chat Bot",
          body:
            "Responsive chat bot that uses regex in one version and algorithms in another version. Built on python.",
          rref: "https://github.com/rmopia/bartender-chat-bot",
        },
        {
          title: "SIC XE Simulator",
          subtitle: "Python SIC XE Simulator App",
          body:
            "Responsive input based SIC XE simulator. Takes in most arguments between forms 1 through 4. Built to understand the machine language better.",
          rref: "https://github.com/rmopia/sic-xe-simulator",
        },
        {
          title: "Movie Reviewing Website",
          subtitle: "PHP MySQL Site",
          body:
            "PHP website connected to a MySQL backend. Used to rate and review. movies and tv shows. Decorated with HTML and Bootstrap.",
          rref: "https://www.github.com/rmopia/php-mysql-review-website",
        },
        {
          title: "Semaphore Conveyor Belt",
          subtitle: "C++ Semaphore Project",
          body:
            "Operating systems project that practices looping between sempahores and multiple producers, consumers and objects.",
          rref: "https://github.com/rmopia/semaphore-conveyor-belt",
        },
        {
          title: "Shoe Bot",
          subtitle: "Python Purchasing Bot",
          body:
            "Basic prototype of a shoe purchasing bot. Uses Webscraping, JSON & Selenium to automatically checkout items.",
          rref: "https://github.com/rmopia/purchase-bot",
        },
        {
          title: "Personal Portfolio",
          subtitle: "React Native Portfolio App",
          body:
            "Github hosted single page application. Displays my professional and personal honors, achievements & goals.",
          rref: "https://github.com/rmopia/portfolio-app",
        },
      ],
    };
  }
  render() {
    const { cardContent } = this.state;
    return (
      <div>
        <h1 className="project-h1">My Projects</h1>
        <CardDeck className="p-deck mx-auto w-75">
          <ProjectCard
            title={cardContent[5].title}
            subtitle={cardContent[5].subtitle}
            body={cardContent[5].body}
            rref={cardContent[5].rref}
          />
          <ProjectCard
            title={cardContent[4].title}
            subtitle={cardContent[4].subtitle}
            body={cardContent[4].body}
            rref={cardContent[4].rref}
          />
          <ProjectCard
            title={cardContent[3].title}
            subtitle={cardContent[3].subtitle}
            body={cardContent[3].body}
            rref={cardContent[3].rref}
          />
        </CardDeck>
        <CardDeck className="p-deck mx-auto w-75">
          <ProjectCard
            title={cardContent[2].title}
            subtitle={cardContent[2].subtitle}
            body={cardContent[2].body}
            rref={cardContent[2].rref}
          />
          <ProjectCard
            title={cardContent[1].title}
            subtitle={cardContent[1].subtitle}
            body={cardContent[1].body}
            rref={cardContent[1].rref}
          />
          <ProjectCard
            title={cardContent[0].title}
            subtitle={cardContent[0].subtitle}
            body={cardContent[0].body}
            rref={cardContent[0].rref}
          />
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
