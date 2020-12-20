import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./FloatingBack.css";

const FloatingBack = (props) => {
  return (
    <div className="FloatingBack">
      <button
        className="button"
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1.1rem",
        }}
        onClick={() => {
          window.history.back();
        }}
      >
        <span className="FloatingBack-content">
          <ArrowBackIcon /> Back
        </span>
      </button>
    </div>
  );
};

export default FloatingBack;
