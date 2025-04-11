import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-container">
        <div className="subscribe-inner-container">
          <div className="welcome">
            <h1>Welcome to LifeLink for Hospitals!</h1>
          </div>
          <div className="img-cnt">
            <img src="" alt="LifeLink Illustration" />
          </div>
          <p>
            You need to subscribe to start requesting blood, viewing, & managing
          </p>
          <p>appointments.</p>
        </div>
        <div>
          <button className="subscribe-button" onClick={Subscribe}>
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
