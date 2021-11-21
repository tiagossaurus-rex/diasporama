import React from "react";

import Shuffle from "./components/shuffle";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Review } from "./pages/review";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Contact">
          <p>I will be the contact page</p>
        </Route>
        <Route path="/Projects">
          <p>I will be the projects page </p>
        </Route>
        <Route path="/Reviews">
          <Review />
        </Route>
        <Route path="/:slug">
          <Shuffle />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
