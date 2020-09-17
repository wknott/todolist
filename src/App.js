import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";

export default () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
        <li>
          <Link to="/autor">
            O autorze
          </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/zadania">
        <Tasks />
      </Route>
    </Switch>
  </BrowserRouter>
)