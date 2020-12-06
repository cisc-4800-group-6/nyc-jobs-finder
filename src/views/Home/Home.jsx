import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import queryString from "query-string";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="Home">
      <h1>Job Search NYC</h1>
      <div>
        <h2>Search Jobs</h2>
        <div className="Home-search">
          <input
            type="text"
            name="search-jobs"
            id="search-jobs"
            placeholder="Type to search..."
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button
            type="submit"
            className="button"
            onClick={() => {
              // Parse search query into query string for url
              const qsValue = queryString.stringify({
                q: searchQuery,
              });

              // Send search query to job search page
              history.push(`/jobs/${qsValue}?${qsValue}`);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="Home-buttons">
        <Link to="/jobs/create" className="button">
          Post a Job
        </Link>
        <Link to="/jobs/saved" className="button">
          Saved Jobs
        </Link>
      </div>
    </div>
  );
};

export default Home;
