import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../index";
import "./JobPage.css";

const JobPage = () => {
  const location = useLocation();

  // Component State
  const [jobId, setJobId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [hasErrored, setHasErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [jobData, setJobData] = useState({
    // HINT: Get the job data from the backend and set the received object here using setJobData()
  });

  // This "useEffect" hook runs when the component (in this case, the entire page) loads.
  useEffect(() => {
    // Compute Job ID
    const jobId = location.pathname.split("/")[2];

    // TODO: Get jobs from the backend API
    fetch(`${API_URL}/job/${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        // TODO: Do stuff with the data here and set the data in jobData
      })
      .catch((err) => {
        setHasErrored(true);
        setErrorMessage(err.toString());

        setIsLoading(false);
      });
  }, []);

  // The component (page, in this case) contents.
  return (
    <div className="JobSearch">
      {/* Render all the created job components after creating all the jobs */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Set all this data in state and dynamically display it */}
          {/* HINT: After setting the job data, use {jobdata['Business Title']} between HTML tags to get data from the object */}
          <h2>Job Title (Business Title)</h2>
          <h3>Agency</h3>
          <p>Location</p>
          <p>Full Time/Part Time</p>
          <p>Hours/Shift</p>
          <p>Posting Date</p>

          <p>Job Description</p>
          <p>Minimum Qual Requirements</p>
          <p>Preferred Skills</p>
          <p>Additional Information</p>

          <p>Recruitment Contact</p>
          <p>To Apply</p>
        </div>
      )}
      {hasErrored && (
        <p style={{ color: "red", fontSize: "2rem" }}>
          Could not get job data!
          <br />
          <strong>{errorMessage}</strong>
        </p>
      )}
    </div>
  );
};

export default JobPage;
