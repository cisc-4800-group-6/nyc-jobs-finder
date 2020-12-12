import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { hasAValue } from "../../Helper";
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
        setJobData(data);
        
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
          {/* If it has a value from data then display the data but if not then display N/A */}
          <h2>Job Title (Business Title): {hasAValue(jobData["Business Title"]) ? jobData["Business Title"] : 'N/A'}</h2>
          <h3>Agency: {hasAValue(jobData.Agency) ? jobData.Agency : 'N/A'}</h3>
          <p>Location: {hasAValue(jobData["Work Location"]) ? jobData["Work Location"] : 'N/A'}</p>
          <p>Full Time/Part Time: {hasAValue(jobData["Full-Time/Part-Time indicator"]) ? jobData["Full-Time/Part-Time indicator"] : 'N/A'}</p>
          <p>Hours/Shift: {hasAValue(jobData.["Hours/Shift"]) ? jobData.["Hours/Shift"] : 'N/A'}</p>
          <p>Posting Date: {hasAValue(jobData["Posting Date"]) ? jobData["Posting Date"] : 'N/A'}</p>

          <p>Job Description: Posting Date: {hasAValue(jobData["Job Description"]) ? jobData["Job Description"] : 'N/A'}</p>
          <p>Minimum Qual Requirements: Posting Date: {hasAValue(jobData["Minimum Qual Requirements"]) ? jobData["Minimum Qual Requirements"] : 'N/A'}</p>
          <p>Preferred Skills: {hasAValue(jobData["Preferred Skills"]) ? jobData["Preferred Skills"] : 'N/A'}</p>
          <p>Additional Information: {hasAValue(jobData["Additional Information"]) ? jobData["Additional Information"] : 'N/A'}</p>

          <p>Recruitment Contact: {hasAValue(jobData["Recruitment Contact"]) ? jobData["Recruitment Contact"] : 'N/A'}</p>
          <p>To Apply: {hasAValue(jobData["To Apply"]) ? jobData["To Apply"] : 'N/A'}</p>
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
