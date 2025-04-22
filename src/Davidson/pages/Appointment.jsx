import React, { useEffect, useState } from "react";
import "./appointment.css";
import { MdAccessTime } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";
import { Modal, Button, message } from "antd";

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [accepting, setAccepting] = useState(false);
  const userToken = useSelector((state) => state?.token);
  const Base_Url = import.meta.env.VITE_BASEURL;

  console.log(selectedAppointment)

  const fetchAppointment = async () => {
    try {
      const res = await axios.get(`${Base_Url}/appointments`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setAppointmentData(res?.data?.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const showDetails = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const handleAccept = async () => {
    if (!selectedAppointment?._id) return;
    setAccepting(true);
    try {
      await axios.put(
        `${Base_Url}/appointments/${selectedAppointment._id}/respond`,
        { status: "accepted" },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      message.success("Appointment accepted successfully");
      handleClose();
      fetchAppointment();
    } catch (err) {
      console.error(err);
      message.error("Failed to accept appointment");
    } finally {
      setAccepting(false);
    }
  };


  const handleDecline = async () => {
    if (!selectedAppointment?._id) return;
    try {
      await axios.put(
        `${Base_Url}/appointments/${selectedAppointment._id}/respond`,
        { status: "declined" },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      message.success("Appointment declined successfully");
      handleClose();
      fetchAppointment();
    } catch (err) {
      console.error(err);
      message.error("Failed to decline appointment");
    }
  };
  
  

  return (
    <div className="AppointmentContainer">
      <h2 className="AppointmentTitle">Upcoming Appointments</h2>

      {loading ? (
        <p className="loading">Loading appointments...</p>
      ) : appointmentData.length === 0 ? (
        <p className="empty">No upcoming appointments.</p>
      ) : (
        <>
          <div className="AppointmentHeader">
            <div>Donor Name</div>
            <div>Details</div>
            <div>
              <MdAccessTime /> Time
            </div>
            <div>
              <MdAccessTime /> Date
            </div>
            <div>Status</div>
          </div>

          {appointmentData.map((item, index) => (
            <div className="AppointmentItem" key={index}>
              <div>{item?.donor?.fullName}</div>
              <div>
                <button className="view-btn" onClick={() => showDetails(item)}>
                  View Details
                </button>
              </div>
              <div>
                <MdAccessTime /> {item?.time}
              </div>
              <div>
                <MdAccessTime /> {formatDate(item?.date)}
              </div>
              <div className={`status ${item?.status?.toLowerCase()}`}>
                {item?.status}
              </div>
            </div>
          ))}
        </>
      )}

      {/* AntD Modal */}
      <Modal
        title="Appointment Details"
        open={isModalOpen}
        onCancel={handleClose}
        footer={[
          <Button key="close" onClick={handleClose}>
            Close
          </Button>,
          <Button
            key="accept"
            type="primary"
            loading={accepting}
            onClick={handleAccept}
            disabled={selectedAppointment?.status?.toLowerCase() === "accepted"}
          >
            Accept Appointment
          </Button>,
          <Button
          key="decline"
          danger
          onClick={handleDecline}
        >
          Decline
        </Button>
        
        ]}
      >
        {selectedAppointment && (
          <div className="appointment-details">
            <p><strong>Donor Name:</strong> {selectedAppointment?.donor?.fullName}</p>
            <p><strong>Email:</strong> {selectedAppointment?.donor?.email}</p>
            <p><strong>Blood Type:</strong> {selectedAppointment?.donor?.bloodType}</p>
            <p><strong>Appointment Time:</strong> {selectedAppointment?.time}</p>
            <p><strong>Date:</strong> {formatDate(selectedAppointment?.date)}</p>
            <p><strong>Status:</strong> {selectedAppointment?.status}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Appointment;
