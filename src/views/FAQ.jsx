import React from "react";
import "../styles/faq.css";
import { useNavigate } from "react-router";

const FAQ = () => {
  const navigate = useNavigate();

  const goToPage = (url) => {
    navigate(url);
  };

  return (
    <div className="page-wrapper faq-page-1">
      <h1 className="page-header">FAQ</h1>
      <div className="question">
        <p className="title">Why self-driving?</p>
        <p className="answer">
          <ul>
            <li>More secure</li>
            <li>Eco-friendly</li>
            <li>Ease of use</li>
          </ul>
          <span className="link" onClick={() => goToPage("/#page-3")}>
            Click here for more information.
          </span>
        </p>
      </div>
      <div className="question">
        <p className="title">How much do the cars cost?</p>
        <p className="answer">
          They can be priced from a range of USD 75,000 to 88,000 for a normal
          car, then for extra customisation/paint jobs it can cost an extra USD
          10,000 to 25,000.
        </p>
      </div>
      <div className="question">
        <p className="title">Do they come in different colors?</p>
        <p className="answer">
          Yes, though there are default colors, there is free color
          customisation until a point. For non-solid colors, it can cost an
          extra USD 25,000. For company brands to be imprinted on the cars,{" "}
          <span className="link">please contact our staff.</span> The LEDs can
          be controlled through the dashboard.
        </p>
      </div>
      <div className="question">
        <p className="title">Is there a warranty?</p>
        <p className="answer">
          Yes, there is a warranty for 2 years. For minor accidents, all the costs will be covered while for major accidents 50% of the costs will be covered.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
