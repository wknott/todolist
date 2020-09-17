import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./features/navigation/Navigation";
import TaskPage from "./features/tasks/TaskPage";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
)