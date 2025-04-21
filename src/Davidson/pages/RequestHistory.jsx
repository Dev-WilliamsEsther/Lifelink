import React, { useEffect, useState } from "react";
import "./requesthistory.css";
import axios from "axios";
import { useSelector } from "react-redux";

const RequestHistory = () => {
  const [requestData, setRequestData] = useState([]);
  const userToken = useSelector((state) => state?.token);

  const Base_Url = import.meta.env.VITE_BASEURL;

  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const fetchRequest = async () => {
    try {
      const res = await axios.get(`${Base_Url}/re-hospital/history`, { headers });
      setRequestData(res.data.requests);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="RequestHistoryContainer">
      <h2 className="RequestHistoryTitle">Request History</h2>

      <div className="RequestHistoryHeader">
        <div>Blood Group</div>
        <div>Pints Requested</div>
        <div>Date Requested</div>
        <div>Preferred Date</div>
        <div>Urgency</div>
        <div>Status</div>
      </div>

      {requestData?.length > 0 ? (
        requestData.map((item, index) => (
          <div className="RequestHistoryItem" key={index}>
            <div>{item?.bloodGroup}</div>
            <div>{item?.numberOfPints}</div>
            <div>{formatDate(item?.createdAt)}</div>
            <div>{formatDate(item?.preferredDate)}</div>
            <div>{item?.urgencyLevel}</div>
            <div className={`status ${item?.status.toLowerCase()}`}>{item?.status}</div>
          </div>
        ))
      ) : (
        <p className="RequestHistoryEmpty">No requests found.</p>
      )}
    </div>
  );
};

export default RequestHistory;
