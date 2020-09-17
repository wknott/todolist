import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import Author from "./features/author/Author";
import Navigation from "./features/navigation/Navigation";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
    </Switch>
  </HashRouter>
)