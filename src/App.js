import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Contact">
          <p>I will be the sign in page</p>
        </Route>
        <Route path="/Projects">
          <p>I will be the sign up page</p>
        </Route>
        <Route path="/About">
          <p>I will be the browse page</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
