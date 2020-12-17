import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FloatingBack from "../../components/FloatingBack/FloatingBack";
import { API_URL } from "../../index";
import "./SavedJobs.css";

const SavedJobs = () => {
  const [jobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Get featured jobs from the server when the page loads
  useEffect(() => {
    fetch(`${API_URL}/jobs/saved`)
      .then((res) => res.json())
      .then((data) => {
        // Create a new component for each job and add it to the array of jobs components state
        data.forEach((job) => {
          jobs.push(
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

  return (
    <div className="JobView">
      <FloatingBack />

      <h1>Saved Jobs</h1>

      {/* Load jobs once the API responds */}
      {isLoading ? (
        <p>Loading...</p>
      ) : jobs.length > 0 ? (
        <ul className="JobList">{jobs}</ul>
      ) : (
        <p>
          No saved jobs were found. Visit a job page to save a job for later!
        </p>
      )}

      {/* Display error message if an error occurred */}
      {hasErrored && (
        <p style={{ color: "red", fontSize: "2rem" }}>
          Could not load saved jobs!
          <br />
          <strong>{errorMessage}</strong>
        </p>
      )}
    </div>
  );
};

export default SavedJobs;
