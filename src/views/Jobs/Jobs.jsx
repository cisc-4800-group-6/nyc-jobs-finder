import React, { useEffect, useState } from "react";
import { API_URL } from "../../index";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Get featured jobs from the server when the page loads
  useEffect(() => {
    fetch(`${API_URL}/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasErrored(true);
        setErrorMessage(err.toString());
      });
  }, []);

  return (
    <div className="JobSearch">
      <h1>Featured Jobs</h1>

      {/* Load jobs once the API responds */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* TODO: Display 10 jobs here from fetched data */}

          {/* Hint: The jobs array contains an array of objects containing featured jobs. */}
          {/* How can we parse them? */}
        </div>
      )}

      {/* Display error message if an error occurred */}
      {hasErrored && (
        <p style={{ color: "red", fontSize: "2rem" }}>
          Could not load featured jobs!
          <br />
          <strong>{errorMessage}</strong>
        </p>
      )}
    </div>
  );
};

export default Jobs;
