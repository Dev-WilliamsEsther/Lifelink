import React from "react";
import "./findHospitalPage.css";
import HospitalCard from "../../components/hospitalCard/HospitalCard";

const tips = [
  "One blood donation can save up to 3 lives",
  "Donating blood can lower stress and improve heart rate",
  "O-negative blood donors can be used for anyone",
  "One blood donation can save up to 3 lives",
  "Donating blood can lower stress and improve heart rate",
  "O-negative blood donors can be used for anyone",
  "One blood donation can save up to 3 lives",
  "One blood donation can save up to 3 lives"
];

const FindHospitalPage = () => {
  return (
    <div className="FindHospitalPageWrapper">
      <h1>List of Hospitals to Visit</h1>

      <div className="hospitalCardsWRapper">
        {Array.from({ length: 12 }).map((_, idx) => (
          <HospitalCard key={idx} />
        ))}
      </div>

      <div className="quickTipsAndFunFactWrapper">
        <h1>Quick Tips & Fun Facts</h1>

        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="landingincentives"
            style={{
              width: "268px",
              height: "153px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="incentiveheader" style={{ width: "100%" }}>
              <img src="/images/Group.png" alt="" style={{ width: "41px" }} />
            </div>
            <h2 style={{ fontSize: "16px", width: "80%", textAlign: "center" }}>
              {tip}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindHospitalPage;
