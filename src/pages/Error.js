import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="conatiner">
      <h1>404!</h1>
      <h3>Sorry, page not found</h3>
      <br />

      <Link to="/home">Back to Dashboard</Link>
    </div>
  );
};

export default Error;
