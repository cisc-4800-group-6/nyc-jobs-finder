import React from "react";
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
        {`<-- Back`}
      </button>
    </div>
  );
};

export default FloatingBack;
