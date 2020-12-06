import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import JobSearch from "./views/JobSearch/JobSearch";

const Routes = () => {
  return (
    <Switch>
      <Route path="/jobs">
        <JobSearch />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
