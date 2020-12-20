import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FloatingBack from "../../components/FloatingBack/FloatingBack";
import { API_URL } from "../../index";
import "./PostJob.css";

const PostJob = () => {
  const history = useHistory();

  const [jobDetails, setJobDetails] = useState({
    businessTitle: "",
    agency: "",
    location: "",
    fpTime: "",
    hours: "",
    postDate: "",
    jobDesc: "",
    miniQual: "",
    prefSkill: "",
    addInfo: "",
    rContact: "",
  });
  const onChange = (event) => {
    const value = event.target.value;
    setJobDetails({
      ...jobDetails,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    //prevents the page from refreshing
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(jobDetails);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${API_URL}/jobs`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        history.push(`/job/${result}`);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="Postjob">
      <FloatingBack />

      <h1>Post a Job</h1>
      <form className="postForm" onSubmit={handleSubmit}>
        <div>
          <label className="labeName" htmlFor="businessTitle">
            Business Title*:{" "}
          </label>
          <input
            id="businessTitle"
            name="businessTitle"
            type="text"
            placeholder="Enter business title"
            onChange={onChange}
            required
            value={jobDetails.businessTitle}
          />
        </div>
        <div>
          <label className="labeName" htmlFor="Agency">
            Agency*:{" "}
          </label>
          <input
            id="agency"
            name="agency"
            type="text"
            placeholder="Enter Agency"
            onChange={onChange}
            required
            value={jobDetails.agency}
          />
        </div>
        <div>
          <label className="labeName" htmlFor="location">
            Location*:{" "}
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Enter location"
            onChange={onChange}
            required
            value={jobDetails.location}
          />
        </div>
        <div>
          <label className="labeName" htmlFor="fpTime">
            Full/Part Time*:{" "}
          </label>
          <input
            id="fpTime"
            name="fpTime"
            type="text"
            placeholder="F or P"
            onChange={onChange}
            required
            value={jobDetails.fpTime}
          />
        </div>
        <div>
          <label className="labeName" htmlFor="hours">
            Hours:{" "}
          </label>
          <input
            id="hours"
            name="hours"
            type="text"
            placeholder="Enter Hours"
            onChange={onChange}
            value={jobDetails.hours}
          />
        </div>
        <div>
          <label className="labeName" htmlFor="postDate">
            Today&apos;s Date*:{" "}
          </label>
          <input
            id="postDate"
            name="postDate"
            type="text"
            placeholder="Enter today's date"
            onChange={onChange}
            required
            value={jobDetails.postDate}
          />
        </div>
        <div>
          <label className="labeName" htmlFor="jobDesc">
            Job Description*:{" "}
          </label>
          <input
            id="jobDesc"
            name="jobDesc"
            type="text"
            placeholder="Enter Job Description"
            onChange={onChange}
            required
            value={jobDetails.jobDesc}
          />
        </div>

        <div>
          <label className="labeName" htmlFor="miniQual">
            Minimal Qualifications*:{" "}
          </label>
          <input
            id="miniQual"
            name="miniQual"
            type="text"
            placeholder="Enter Minimal Requirements"
            onChange={onChange}
            required
            value={jobDetails.miniQual}
          />
        </div>

        <div>
          <label className="labeName" htmlFor="prefSkill">
            Preferred Skills*:{" "}
          </label>
          <input
            id="prefSkill"
            name="prefSkill"
            type="text"
            placeholder="Enter Preferred Skills"
            onChange={onChange}
            required
            value={jobDetails.prefSkill}
          />
        </div>

        <div>
          <label className="labeName" htmlFor="addInfo">
            Additional Information*:{" "}
          </label>
          <input
            id="addInfo"
            name="addInfo"
            type="text"
            placeholder="Enter Additonal Information"
            onChange={onChange}
            required
            value={jobDetails.addInfo}
          />
        </div>
        <div>
          <label className="labeName" htmlFor="rContact">
            Contact Info:{" "}
          </label>
          <input
            id="rContact"
            name="rContact"
            type="text"
            placeholder="Enter Contact Info"
            onChange={onChange}
            value={jobDetails.rContact}
          />
        </div>
        <div>
          <p>*-Required</p>
        </div>

        <div>
          <button
            type="submit"
            className="postButton"
            style={{ margin: "2rem auto 0", fontSize: "1.25rem" }}
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
