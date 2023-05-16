import React from "react";
import "../styles/errorpage.css";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="page-wrapper error-page-1">
        <div className="text-wrapper">
          <h1 className="header">It seems like you're lost.</h1>
          <p className="subheader">Lets take you back.</p>
          <button className="button" onClick={goBack}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
