import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import "./JobSearch.css";

const JobSearch = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Set search query on load
  useEffect(() => {
    // Parses into an object like so: { q: "search query" }
    const parsedQueryString = queryString.parse(location.search);
    const query = parsedQueryString.q;
    setSearchQuery(query);
  }, []);

  return (
    <div className="JobSearch">
      <h1>Results for {searchQuery}</h1>
      <div>
        {/* Results go here */}
      </div>
    </div>
  );
};

export default JobSearch;
