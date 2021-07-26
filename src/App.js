import React from "react";
import Header from "./components/header";
import Shuffle from "./components/shuffle";
import { HashRouter as Router, Switch, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/home";

export function App() {
  // function Dumie() {
  //   const { slug } = useParams();
  //   return <div>This my slug:{slug}</div>;
  // }
  return (
    <Router>
      <Switch>
        <Route path="/Contact">
          <p>I will be the contact page</p>
        </Route>
        <Route path="/Projects">
          <p>I will be the projects page </p>
        </Route>
        <Route path="/:slug">
          <Shuffle />
        </Route>
        <Route path="/About">
          <p>I will be the About page</p>
        </Route>
        <Route path="/">
          <Home />
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}
