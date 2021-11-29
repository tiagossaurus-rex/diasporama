import React from "react";
import Shuffle from "./components/shuffle";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Review } from "./pages/review";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";
import { DotRing } from "./components/dotRing/dotRing";

export function App() {
  return (
    <Router>
      <DotRing />

      <Switch>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route path="/Reviews">
          <Review />
        </Route>
        <Route path="/Projects/:slug">
          <Shuffle />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
