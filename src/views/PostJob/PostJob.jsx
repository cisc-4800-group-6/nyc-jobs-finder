import React, { useState } from 'react';
import "./PostJob.css";
import { API_URL } from "../../index";
const PostJob = () => {
    const [state, setState] = useState({
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
        rContact: ""
    })
    const onChange = (event) => {
        const value = event.target.value
        setState({
            ...state, [event.target.name]: value
        });
    }


    const submitForm = (e) => {
        //prevents the page from refreshing
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(state);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,

        };

        fetch(`${API_URL}/jobs`, requestOptions)
            .then(response => response.text())
            .then(result => {

                window.location.href = '/'
            })
            .catch(error => console.log('error', error));
    }


    return (
        <div className="Postjob">
            <h1>Post a Job</h1>
            <form className="postForm">
                <div>
                    <label className="labeName" htmlFor="businessTitle">Business Title*: </label>
                    <input
                        id="businessTitle"
                        name="businessTitle"
                        type="text"
                        placeholder="Enter business title"
                        onChange={onChange}
                        required
                        value={state.businessTitle}
                    />
                </div>
                <div>
                    <label className="labeName" htmlFor="Agency">Agency*: </label>
                    <input
                        id="agency"
                        name="agency"
                        type="text"
                        placeholder="Enter Agency"
                        onChange={onChange}
                        required
                        value={state.agency}
                    />
                </div>
                <div>
                    <label className="labeName" htmlFor="location">Location*: </label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Enter location"
                        onChange={onChange}
                        required
                        value={state.location}
                    />
                </div>
                <div>
                    <label className="labeName" htmlFor="fpTime">Full/part Time*: </label>
                    <input
                        id="fpTime"
                        name="fpTime"
                        type="text"
                        placeholder="F or P"
                        onChange={onChange}
                        required
                        value={state.fpTime}
                    />
                </div>
                <div>
                    <label className="labeName" htmlFor="hours">Hours: </label>
                    <input
                        id="hours"
                        name="hours"
                        type="text"
                        placeholder="Enter Hours"
                        onChange={onChange}
                        value={state.hours}
                    />
                </div>
                <div>
                    <label className="labeName" htmlFor="postDate">Today&apos;s Date*: </label>
                    <input
                        id="postDate"
                        name="postDate"
                        type="text"
                        placeholder="Enter today's date"
                        onChange={onChange}
                        required
                        value={state.postDate}
                    />
                </div>
                <div>
                    <label className="labeName" htmlFor="jobDesc">Job Description*: </label>
                    <input
                        id="jobDesc"
                        name="jobDesc"
                        type="text"
                        placeholder="Enter Job Description"
                        onChange={onChange}
                        required
                        value={state.jobDesc}
                    />
                </div>

                <div>
                    <label className="labeName" htmlFor="miniQual">Minimal Qualifications*: </label>
                    <input
                        id="miniQual"
                        name="miniQual"
                        type="text"
                        placeholder="Enter Minimal Requirements"
                        onChange={onChange}
                        required
                        value={state.miniQual}
                    />
                </div>

                <div>
                    <label className="labeName" htmlFor="prefSkill">Preferred Skills*: </label>
                    <input
                        id="prefSkill"
                        name="prefSkill"
                        type="text"
                        placeholder="Enter Preferred Skills"
                        onChange={onChange}
                        required
                        value={state.prefSkill}
                    />
                </div>

                <div>
                    <label className="labeName" htmlFor="addInfo">Additional Information*: </label>
                    <input
                        id="addInfo"
                        name="addInfo"
                        type="text"
                        placeholder="Enter Additonal Information"
                        onChange={onChange}
                        required
                        value={state.addInfo}
                    />
                </div>
                <div>
                    <label className="labeName" htmlFor="rContact">Enter Contact Info: </label>
                    <input
                        id="rContact"
                        name="rContact"
                        type="text"
                        placeholder="Enter Contact Info"
                        onChange={onChange}
                        value={state.rContact}
                    />
                </div>
                <div>
                    <p>*-Required</p>
                </div>

                <div>
                    <button className="postButton" type="submit" onClick={submitForm}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostJob
