import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Contact from "../pages/contact";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  );
};

export default Main;
