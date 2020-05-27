import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Projects from "../pages/projects";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  );
};

export default Main;
