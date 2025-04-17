import React, { useEffect, useState } from "react";
import "./findHospitalPage.css";
import HospitalCard from "../../components/hospitalCard/HospitalCard";
import { getListOfHospitals } from "../../global/Api";

const Base_Url = import.meta.env.VITE_BASEURL;

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
  const [isLoading, setIsLoading] = useState(false)
  const [listOfHospitals, setListOfHospitals] = useState([])

  console.log("hospitals",listOfHospitals)

  useEffect(() => {
    const getHospitals = () => {
      getListOfHospitals(setIsLoading, Base_Url, setListOfHospitals)
    }
    getHospitals()
  }, [])

  return (
    <div className="FindHospitalPageWrapper">
      <h1>List of Hospitals to Visit</h1>

      <div className="hospitalCardsWRapper">
        {
          listOfHospitals && listOfHospitals.length > 0 ? (
            listOfHospitals.map((hospital, index) => (
              <HospitalCard key={index} hospital={hospital} index={index} />
            ))
          ) : (
            <>No Hospital</>
          )
        }

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
