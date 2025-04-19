import React, { useEffect, useState } from "react";
import "./requesthistory.css";
import axios from "axios";
import { useSelector } from "react-redux";

const RequestHistory = () => {
  const [requestData, setRequestData] = useState([]);
  // const userData = JSON.parse(localStorage.getItem("userData"));
  const userToken = useSelector((state) => state?.token);

  const Base_Url = import.meta.env.VITE_BASEURL;

  // console.log(userData);
  const headers = {
    Authorization: `Bearer ${userToken}`,
  };
  const fetchRequest = async () => {
    try {
      const res = await axios.get(`${Base_Url}/hospital/history`, { headers });
      setRequestData(res.data.requests);
      console.log(res.data.requests);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <div className="RequestHistoryCardWrapper">
      <h1 onClick={fetchRequest}>Request Historys</h1>

      <div className="RequestHistoryCardsHeading">
        <div className="RequestHistoryInnerDiv">
          <h1 className="RequestHistoryInnerDivtext1">BLOOD GROUP</h1>
          <h1 className="RequestHistoryInnerDivtext2">
            Pints <br />
            requested
          </h1>
          <h1 className="RequestHistoryInnerDivtext3">
            Date <br />
            requested
          </h1>
          <h1 className="RequestHistoryInnerDivtext4">
            Preferred <br />
            Date
          </h1>
          <h1 className="RequestHistoryInnerDivtext5">Urgency</h1>
          <h1 className="RequestHistoryInnerDivtext6">Status</h1>
          <h1 className="RequestHistoryInnerDivtext7">Action</h1>
        </div>
      </div>
      <>
        {requestData?.map((item, index) => (
          <div className="RequestHistoryCardWrapper" key={index}>
            <div className="RequestHistoryCard">
              <h3 className="RequestHistoryDivtext6">{item?.bloodGroup}</h3>
              <h3 className="RequestHistoryDivtext7">{item?.numberOfPints}</h3>
              <h3 className="RequestHistoryDivtext8">{item?.preferredDate}</h3>
              <h3 className="RequestHistoryDivtext9">{item?.urgencyLevel}</h3>
              <h3 className="RequestHistoryDivtext10">{item?.amount}</h3>
              <h3 className="RequestHistoryDivtext11">{item?.status}</h3>
              <span className="RequestHistoryDivtext12">
                {item?.bloodGroup}
              </span>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default RequestHistory;
