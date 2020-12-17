import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { API_URL } from "../../index";
import "./JobSearch.css";

const JobSearch = () => {
  const location = useLocation();

  // Component State
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [hasErrored, setHasErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [jobsComponents] = useState([]);

  // This "useEffect" hook runs when the component (in this case, the entire page) loads.
  useEffect(() => {
    // Parses into an object like so: { q: "search query" }
    const parsedQueryString = queryString.parse(location.search);
    const query = parsedQueryString.q;
    setSearchQuery(query);

    // Get jobs from the backend API
    fetch(`${API_URL}/jobs/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        // Create a new component for each job and add it to the array of jobs components state
        data.forEach((job) => {
          jobsComponents.push(
            <li>
              <Link to={`/job/${job["Job ID"]}`}>
                <article className="job">
                  <h3>{job["Business Title"]}</h3>
                  <p>{job["Agency"]}</p>
                  <p>Job ID: {job["Job ID"]}</p>
                </article>
              </Link>
            </li>
          );
        });

        setIsLoading(false);
      })
      .catch((err) => {
        setHasErrored(true);
        setErrorMessage(err.toString());
      });
  }, []);

  // The component (page, in this case) contents.
  return (
    <div className="JobSearch">
      <div id="backtop"><a href="#">TOP</a></div>
      
      <h1>Results for &quot;{searchQuery}&quot;</h1>
      <div>
        <ul className="JobList">
          {/* Render all the created job components after creating all the jobs */}
          {isLoading ? (
            <p>Searching for jobs...</p>
          ) : jobsComponents.length > 0 ? (
            jobsComponents
          ) : (
            `No jobs were found in the database for "${searchQuery}".`
          )}
          {hasErrored && (
            <p style={{ color: "red", fontSize: "2rem" }}>
              Could not search for jobs!
              <br />
              <strong>{errorMessage}</strong>
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default JobSearch;
