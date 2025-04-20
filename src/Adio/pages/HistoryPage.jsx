import React, { useEffect, useState } from 'react';
import './historyPage.css';
import { SlCalender } from "react-icons/sl";
import { Modal } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Base_Url = import.meta.env.VITE_BASEURL;

const HistoryPage = () => {
  const token = useSelector((state) => state.token);
  const [donations, setDonations] = useState([]);
  const [viewDetailsPopUp, setViewDetailsPopUp] = useState(null);
  const [status, setStatus] = useState("pending"); // 👈 this drives the filter

  const getDonationsByStatus = async (status) => {
    try {
      const res = await axios.get(`${Base_Url}/donations/${status}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDonations(res?.data?.donations || []);
    } catch (err) {
      console.error("Error fetching donations:", err);
    }
  };

  useEffect(() => {
    if (token && status) {
      getDonationsByStatus(status);
    }
  }, [status, token]);

  return (
    <>
      <div className='HistoryPageWrapper'>
        <h1>Donation History</h1>


        <div className="filter-buttons" style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {["pending", "confirmed", "cancelled"].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              style={{
                padding: "10px 20px",
                backgroundColor: status === s ? "#c0392b" : "#f0f0f0",
                color: status === s ? "white" : "black",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

    
        <div className="DonationsHistoryCardsHeading">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h1>Facilitity Name</h1>
            <h1>VIEW DETAILS</h1>
            <h1><SlCalender />DATE</h1>
            <h1>LOCATION</h1>
            <h1>STATUS</h1>
          </div>
        </div>


        <div className="DonationsHistoryCardsWrapper">
          {donations.length > 0 ? (
            donations.map((donation, index) => (
              <div className="DonationsHistoryCards" key={index}>
                <div className="DonationsHistoryCardsInnerWrapper">
                  <h3>{donation.hospital?.fullName || "N/A"}</h3>
                  <h3
                    onClick={() => setViewDetailsPopUp(donation)}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    VIEW DETAILS
                  </h3>
                  <h3><SlCalender />{new Date(donation.date).toLocaleDateString()}</h3>
                  <h3>{donation.hospital?.location || "N/A"}</h3>
                  <h3>{donation.status}</h3>
                </div>
              </div>
            ))
          ) : (
            <p>No {status} donations yet.</p>
          )}
        </div>
      </div>


      <Modal
        open={!!viewDetailsPopUp}
        onCancel={() => setViewDetailsPopUp(null)}
        footer={null}
      >
        {viewDetailsPopUp && (
          <div className="viewDetailsPopUpWrapper">
            <h1>Details</h1>
            <p>Name: <b>{viewDetailsPopUp.hospital?.fullName}</b></p>
            <p>Location: <b>{viewDetailsPopUp.hospital?.location}</b></p>
            <p>Date: <b>{new Date(viewDetailsPopUp.date).toLocaleDateString()}</b></p>
            <p>Status: <b>{viewDetailsPopUp.status}</b></p>
            <img src="/images/hospital image.jpg" alt="Hospital image" />
            <button>Cancel Request</button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default HistoryPage;
