import React, { useEffect, useState } from "react";
import "./findHospitalPage.css";
import HospitalCard from "../../components/hospitalCard/HospitalCard";
import LoadComponents from "../../components/componentsLoadScreen/LoadComponents";
import { useSelector } from "react-redux";
import axios from "axios";

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


  const token = useSelector((state)=> state?.token)


 const getListOfHospitals = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${Base_Url}/hospitals`, {
          headers : {
            Authorization : `Bearer ${token}`
          }
        });
        setListOfHospitals(res?.data?.data);
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    };

  useEffect(() => {
    getListOfHospitals()
  }, [])


  if(isLoading){
    return <LoadComponents/>
  }

  return (
    <div className="FindHospitalPageWrapper">
      <h1>List of Hospitals to Visit</h1>

      <div className="hospitalCardsWRapper">
        {
          listOfHospitals && listOfHospitals.length > 0 ? (
            listOfHospitals.map((hospital, index) => (
              <HospitalCard key={index} hospital={hospital} index={index}/>
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
