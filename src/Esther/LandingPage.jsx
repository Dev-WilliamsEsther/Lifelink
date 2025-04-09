import React from "react";
import "../Esther/styles/landing.css";
import Benefit from "../components/Benefit/Benefit";
import Sponsors from "../components/Sponsors/Sponsors";


const LandingPage = () => {
  return (
    <div className="landingmainwrapper">
      <div className="landingwrapper">
        <div className="landingpagecenter">
          <h1>
            Every Drop Counts,
            <br /> Be the Life-Line Someone Needs
          </h1>
          <p>
            Every day, thousands of Nigerians need blood to survive accidents,
            surgeries, and medical conditions. <br /> Yet, blood shortages
            remain a challenge. LifeLink connects willing donors to hospitals
            and blood <br /> banks, making it easier to save lives while
            ensuring you get rewarded for your generosity.
          </p>
          <button className="landingbutton">Donate</button>
        </div>
      </div>
      <Benefit />
      <Sponsors/>
    </div>
  );
};

export default LandingPage;
