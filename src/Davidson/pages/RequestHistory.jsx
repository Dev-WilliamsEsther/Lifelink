import React from "react";
import "./requesthistory.css";

const RequestHistory = () => {
  return (
    <div className="RequestHistoryCardWrapper">
      <h1>Request History</h1>

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
      <div className="RequestHistoryCardWrapper">
        <div className="RequestHistoryCard">
          <h3 className="RequestHistoryDivtext6">A-</h3>
          <h3 className="RequestHistoryDivtext7">3 Pints</h3>
          <h3 className="RequestHistoryDivtext8">April 4, 2025</h3>
          <h3 className="RequestHistoryDivtext9">April 7, 2025</h3>
          <h3 className="RequestHistoryDivtext10">Low</h3>
          <h3 className="RequestHistoryDivtext11">Pending</h3>
          <span className="RequestHistoryDivtext12">View Details</span>
        </div>
      </div>
      <div className="RequestHistoryCardWrapper">
        <div className="RequestHistoryCard">
          <h3 className="RequestHistoryDivtext6">A-</h3>
          <h3 className="RequestHistoryDivtext7">3 Pints</h3>
          <h3 className="RequestHistoryDivtext8">April 4, 2025</h3>
          <h3 className="RequestHistoryDivtext9">May 7, 2025</h3>
          <h3 className="RequestHistoryDivtext10">Low</h3>
          <h3 className="RequestHistoryDivtext11">Confirmed</h3>
          <span className="RequestHistoryDivtext12">View Details</span>
        </div>
      </div>
      <div className="RequestHistoryCardWrapper">
        <div className="RequestHistoryCard">
          <h3 className="RequestHistoryDivtext6">0+</h3>
          <h3 className="RequestHistoryDivtext7">3 Pints</h3>
          <h3 className="RequestHistoryDivtext8">May 4, 2025</h3>
          <h3 className="RequestHistoryDivtext9">April 7, 2025</h3>
          <h3 className="RequestHistoryDivtext10">Low</h3>
          <h3 className="RequestHistoryDivtext11">Pending</h3>
          <span className="RequestHistoryDivtext12">View Details</span>
        </div>
      </div>
      <div className="RequestHistoryCardWrapper">
        <div className="RequestHistoryCard">
          <h3 className="RequestHistoryDivtext6">0-</h3>
          <h3 className="RequestHistoryDivtext7">3 Pints</h3>
          <h3 className="RequestHistoryDivtext8">May 4, 2025</h3>
          <h3 className="RequestHistoryDivtext9">April 7, 2025</h3>
          <h3 className="RequestHistoryDivtext10">Low</h3>
          <h3 className="RequestHistoryDivtext11">Pending</h3>
          <span className="RequestHistoryDivtext12">View Details</span>
        </div>
      </div>
    </div>
  );
};

export default RequestHistory;
