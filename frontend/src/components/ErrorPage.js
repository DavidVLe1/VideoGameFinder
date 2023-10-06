import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page-background">
      <div className="error-content">
        <Link to="/" className="go-back-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;