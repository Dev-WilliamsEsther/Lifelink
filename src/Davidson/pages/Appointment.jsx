import React, { useEffect, useState } from "react";
import "./appointment.css";
import { MdAccessTime } from "react-icons/md";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const token = userData?.data?.token;

      const response = await fetch(
        "https://lifelink-7pau.onrender.com/api/v1/appointments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch appointments");
      }

      setAppointments(data.appointments);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleAction = async (appointmentId, action) => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const token = userData?.data?.token;

      const response = await fetch(
        `https://lifelink-7pau.onrender.com/api/v1/hospital/appointments/${appointmentId}/${action}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update appointment");
      }

      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === appointmentId
            ? { ...appointment, status: action }
            : appointment
        )
      );
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  const pendingAppointments = appointments.filter(
    (app) => app.status === "pending"
  );
  const confirmedAppointments = appointments.filter(
    (app) => app.status === "confirmed"
  );

  return (
    <div className="AppointmentPageWrapper">
      <h1>Pending Appointment</h1>

      {loading && <p>Loading appointments...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="AppointmentCardsHeading">
        <div className="AppointmentInnerDiv">
          <h1 className="AppointmentInnerDivtextBox1">DONOR NAME</h1>
          <h1 className="AppointmentInnerDivtextBox2">DETAILS</h1>
          <h1 className="AppointmentInnerDivtextBox3">
            <MdAccessTime /> TIME
          </h1>
          <h1 className="AppointmentInnerDivtextBox4">
            <MdAccessTime /> DATE
          </h1>
          <h1 className="AppointmentInnerDivtextBox5"></h1>
        </div>
      </div>

      {pendingAppointments.map((appointment, index) => (
        <div className="AppointmentCardsWrapper" key={index}>
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">
              {appointment.donorName}
            </h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime /> {appointment.time}
            </h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime /> {appointment.date}
            </h3>
            <div className="AppointmentInnerDivtextBox10">
              <button
                className="confirm-btn"
                onClick={() => handleAction(appointment.id, "confirmed")}
              >
                CONFIRM
              </button>
              <button
                className="reject-btn"
                onClick={() => handleAction(appointment.id, "rejected")}
              >
                REJECT
              </button>
            </div>
          </div>
        </div>
      ))}

      <h1>Upcoming Appointment</h1>

      <div className="AppointmentCardsHeading2">
        <div className="AppointmentInnerDiv2">
          <h1 className="AppointmentInnerDivtext1">DONOR NAME</h1>
          <h1 className="AppointmentInnerDivtext2">DETAILS</h1>
          <h1 className="AppointmentInnerDivtext3">
            <MdAccessTime /> TIME
          </h1>
          <h1 className="AppointmentInnerDivtext4">
            <MdAccessTime /> DATE
          </h1>
          <h1 className="AppointmentInnerDivtext5">STATUS</h1>
        </div>
      </div>

      {confirmedAppointments.map((appointment, index) => (
        <div className="AppointmentCardsWrapper" key={index}>
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">
              {appointment.donorName}
            </h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime /> {appointment.time}
            </h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime /> {appointment.date}
            </h3>
            <h3 className="AppointmentInnerDivtext10">
              {appointment.status.toUpperCase()}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointment;
