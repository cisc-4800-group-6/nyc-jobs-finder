import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import Jobs from "./views/Jobs/Jobs";
import JobSearch from "./views/JobSearch/JobSearch";
import SavedJobs from "./views/SavedJobs/SavedJobs";
import JobPage from "./views/JobPage/JobPage";
import PostJob from "./views/PostJob/PostJob";

const Routes = () => {
  return (
    <Switch>
      <Route path="/job/:id">
        <JobPage />
      </Route>

      <Route path="/jobs/post">
        <PostJob />
      </Route>

      <Route path="/jobs/saved">
        <SavedJobs />
      </Route>

      <Route path="/jobs/search">
        <JobSearch />
      </Route>

      <Route path="/jobs">
        <Jobs />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
