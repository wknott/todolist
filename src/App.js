import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import Navigation from "./features/navigation/Navigation";

export default () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
    </Switch>
  </BrowserRouter>
)