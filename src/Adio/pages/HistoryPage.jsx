import React, { useEffect, useState } from 'react';
import './historyPage.css';
import { SlCalender } from "react-icons/sl";
import { Modal } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import LoadComponents from '../../components/componentsLoadScreen/LoadComponents';
import { toast } from 'react-toastify';

const Base_Url = import.meta.env.VITE_BASEURL;

const HistoryPage = () => {
  const token = useSelector((state) => state.token);

  const [donations, setDonations] = useState([]);
  const [viewDetailsPopUp, setViewDetailsPopUp] = useState(null);
  const [status, setStatus] = useState("pending");
  const [loadingState, setLoadingState] = useState(false);

  const getDonationsByStatus = async (status) => {
    setLoadingState(true);
    try {
      const res = await axios.get(`${Base_Url}/donations/${status}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const sortedDonations = (res?.data?.donations || []).sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setDonations(sortedDonations);
    } catch (err) {
      console.error("Error fetching donations:", err);
      toast.error("Failed to fetch donation history.");
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    if (token && status) {
      getDonationsByStatus(status);
    }
  }, [status, token]);

  const cancelAppointment = async (appointmentId) => {
    try {
      await axios.put(
        `${Base_Url}/donor/appointments/${appointmentId}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Appointment cancelled successfully");
      setViewDetailsPopUp(null);
      getDonationsByStatus(status); 
    } catch (error) {
      console.error("Cancel appointment error:", error);
      toast.error("Failed to cancel appointment.");
    }
  };

  const [appointmentsHistory, setAppointmentHistory] = useState([])


  const getAppointments = async (status) => {
    setLoadingState(true);
    try {
      const res = await axios.get(`${Base_Url}/donor/appointments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAppointmentHistory(res?.data?.appointments);
      console.log(res)
    } catch (err) {
      console.error("Error fetching donations:", err);
      toast.error("Failed to fetch donation history.");
    } finally {
      setLoadingState(false);
    }
  };


  useEffect(()=>{
    getAppointments()
  }, [])

  if (loadingState) {
    return <LoadComponents />;
  }

  return (
    <>
      <div className='HistoryPageWrapper'>
        <h1>Appointment History</h1>

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
            <h1>Facility Name</h1>
            <h1>VIEW DETAILS</h1>
            <h1><SlCalender /> DATE</h1>
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
                  <h3><SlCalender /> {new Date(donation.date).toLocaleDateString()}</h3>
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

     







      <div className='HistoryPageWrapper'>
        <h1>Schedule History</h1>

        <div className="DonationsHistoryCardsHeading">
          <div className="DonationsHistoryCardsInnerWrapper">
            <h1>Facility Name</h1>
            <h1>VIEW DETAILS</h1>
            <h1><SlCalender /> DATE</h1>
            <h1>LOCATION</h1>
            <h1>STATUS</h1>
          </div>
        </div>

        <div className="DonationsHistoryCardsWrapper">
          {appointmentsHistory.length > 0 ? (
            appointmentsHistory.map((donation, index) => (
              <div className="DonationsHistoryCards" key={index}>
                <div className="DonationsHistoryCardsInnerWrapper">
                  <h3>{donation.hospital?.email || "N/A"}</h3>
                  <h3>
                    {}
                  </h3>
                  <h3><SlCalender /> {new Date(donation.date).toLocaleDateString()}</h3>
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
            <p>Time: <b>{viewDetailsPopUp.time || "No time specified"}</b></p>
            <p>Status: <b>{viewDetailsPopUp.status}</b></p>
            <img src="/images/hospital image.jpg" alt="Hospital image" />

            {viewDetailsPopUp.status === "pending" && (
              <button
                style={{
                  backgroundColor: "#c0392b",
                  color: "white",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  marginTop: "15px",
                  cursor: "pointer",
                  border: "none"
                }}
                onClick={() => cancelAppointment(viewDetailsPopUp._id)}
              >
                Cancel Request
              </button>
            )}
          </div>
        )}
      </Modal>


    </>
  );
};

export default HistoryPage;
