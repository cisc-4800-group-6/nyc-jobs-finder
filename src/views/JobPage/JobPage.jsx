import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FloatingBack from "../../components/FloatingBack/FloatingBack";
import { hasAValue } from "../../Helper";
import { API_URL } from "../../index";
import "./JobPage.css";

const JobPage = () => {
  const history = useHistory();
  const location = useLocation();

  // Component State
  const [isLoading, setIsLoading] = useState(true);

  const [hasErrored, setHasErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [jobData, setJobData] = useState({});
  const [jobSaved, setJobSaved] = useState(true);

  // This "useEffect" hook runs when the component (in this case, the entire page) loads.
  useEffect(() => {
    // Compute Job ID
    const jobId = location.pathname.split("/")[2];

    fetch(`${API_URL}/job/${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        setJobData(data);

        // Check if job is saved
        fetch(`${API_URL}/job/${jobId}/saved`)
          .then((res) => res.json())
          .then((jobIsSaved) => {
            console.log(jobIsSaved);
            setJobSaved(jobIsSaved);
            setIsLoading(false);
          })
          .catch((err) => {
            setHasErrored(true);
            setErrorMessage(err.toString());
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setHasErrored(true);
        setErrorMessage(err.toString());
        setIsLoading(false);
      });
  }, []);

  // The component (page, in this case) contents.
  return (
    <div className="JobDetail">
      <div className="btn">
        <FloatingBack style={{ marginTop: "1.3rem" }} />
      </div>

      <section className="detail">
        {/* Render all the created job components after creating all the jobs */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {/* Set all this data in state and dynamically display it */}
            {/* HINT: After setting the job data, use {jobdata['Business Title']} between HTML tags to get data from the object */}
            {/* If it has a value from data then display the data but if not then display N/A */}
            <h2 style={{ fontSize: "2rem", marginBottom: 0 }}>
              {hasAValue(jobData["Business Title"])
                ? jobData["Business Title"]
                : "N/A"}
            </h2>
            <h3 style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>
              {hasAValue(jobData.Agency) ? jobData.Agency : "N/A"}
            </h3>

            <p>
              <strong>Location: </strong>
              {hasAValue(jobData["Work Location"])
                ? jobData["Work Location"]
                : "N/A"}
            </p>
            <p>
              <strong>Full Time/Part Time: </strong>
              {hasAValue(jobData["Full-Time/Part-Time indicator"])
                ? jobData["Full-Time/Part-Time indicator"]
                : "N/A"}
            </p>
            <p>
              <strong>Hours/Shift: </strong>
              {hasAValue(jobData["Hours/Shift"])
                ? jobData["Hours/Shift"]
                : "N/A"}
            </p>
            <p>
              <strong>Posting Date: </strong>
              {hasAValue(jobData["Posting Date"])
                ? jobData["Posting Date"]
                : "N/A"}
            </p>
            <p>
              <strong>Recruitment Contact: </strong>
              {hasAValue(jobData["Recruitment Contact"])
                ? jobData["Recruitment Contact"]
                : "N/A"}
            </p>

            <br />

            <p>
              <strong>Apply: </strong>
              {hasAValue(jobData["To Apply"]) ? jobData["To Apply"] : "N/A"}
              <br />
              <em style={{ display: "block", marginTop: "0.25rem" }}>
                If there is no link or button here, please search for the
                position online.
              </em>
            </p>

            <br />

            <h3>Job Description:</h3>
            <p style={{ textAlign: "left" }}>
              {hasAValue(jobData["Job Description"])
                ? jobData["Job Description"]
                : "N/A"}
            </p>

            <br />

            <h3>Minimum Qual Requirements:</h3>
            <p style={{ textAlign: "left" }}>
              {hasAValue(jobData["Minimum Qual Requirements"])
                ? jobData["Minimum Qual Requirements"]
                : "N/A"}
            </p>

            <br />

            <h3>Preferred Skills:</h3>
            <p style={{ textAlign: "left" }}>
              {hasAValue(jobData["Preferred Skills"])
                ? jobData["Preferred Skills"]
                : "N/A"}
            </p>

            <br />

            <h3>Additional Information:</h3>
            <p style={{ textAlign: "left" }}>
              {hasAValue(jobData["Additional Information"])
                ? jobData["Additional Information"]
                : "N/A"}
            </p>

            {/* Job Post Actions */}
            {/*
              Unfortunately, creating a stateful React form to pre-fill large amounts
              of form data to update a job posting is extremely complicated and 
              would probably require the use of an external library like Formik
              to handle and would not be possible with the limited time we have left.
              We hope you understand!
          */}
            <div>
              {jobSaved ? (
                // Unsave Job Button
                <button
                  className="button"
                  style={{
                    margin: "3rem auto 0",
                    padding: "1rem 2rem",
                    fontSize: "1.25rem",
                    backgroundColor: "orange",
                    border: "1px solid orange",
                  }}
                  onClick={() => {
                    fetch(`${API_URL}/job/${jobData["Job ID"]}/save`, {
                      method: "DELETE",
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          setJobSaved(false);
                          alert("Unsaved job successfully.");
                        } else {
                          setHasErrored(true);
                          setErrorMessage("Could not save job.");
                        }
                      })
                      .catch((err) => {
                        setHasErrored(true);
                        setErrorMessage(err.toString());
                      });
                  }}
                >
                  Unsave Job
                </button>
              ) : (
                // Save Job Button
                <button
                  className="button"
                  style={{
                    margin: "3rem auto 0",
                    padding: "1rem 2rem",
                    fontSize: "1.25rem",
                  }}
                  onClick={() => {
                    fetch(`${API_URL}/job/${jobData["Job ID"]}/save`, {
                      method: "POST",
                      body: JSON.stringify(jobData),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          setJobSaved(true);
                          alert("Saved job successfully.");
                        } else {
                          setHasErrored(true);
                          setErrorMessage("Could not save job.");
                        }
                      })
                      .catch((err) => {
                        setHasErrored(true);
                        setErrorMessage(err.toString());
                      });
                  }}
                >
                  Save Job
                </button>
              )}

              <br />

              {/* Delete Job Button */}
              <button
                className="button"
                style={{
                  margin: "1rem auto 5rem",
                  maxWidth: "25rem",
                  padding: "1rem 2rem",
                  fontSize: "1.25rem",
                  backgroundColor: "lightcoral",
                  border: "1px solid lightcoral",
                }}
                onClick={() => {
                  fetch(`${API_URL}/job/${jobData["Job ID"]}`, {
                    method: "DELETE",
                  })
                    .then((res) => {
                      if (res.status === 200) {
                        history.push("/");
                      } else {
                        setHasErrored(true);
                        setErrorMessage("Could not delete job posting.");
                      }
                    })
                    .catch((err) => {
                      setHasErrored(true);
                      setErrorMessage(err.toString());
                    });
                }}
              >
                Delete Job Posting
              </button>
            </div>
          </div>
        )}

        {hasErrored && (
          <p style={{ color: "red", fontSize: "2rem" }}>
            Error:
            <br />
            <strong>{errorMessage}</strong>
          </p>
        )}
      </section>
    </div>
  );
};

export default JobPage;
