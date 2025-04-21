import React, { useEffect, useState } from "react";
import "./appointment.css";
import { MdAccessTime } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const userToken = useSelector((state) => state?.token);
  const Base_Url = import.meta.env.VITE_BASEURL;

  const fetchAppointment = async () => {
    try {
      const res = await axios.get(`${Base_Url}/appointments`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setAppointmentData(res?.data?.appointments);
    } catch (err) {
      console.log(err);
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

  return (
    <div className="AppointmentContainer">

      <h2 className="AppointmentTitle">Upcoming Appointments</h2>

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

      {appointmentData?.map((item, index) => (
        <div className="AppointmentItem" key={index}>
          <div>{item?.donorName}</div>
          <div>View Details</div>
          <div>
            <MdAccessTime /> {item?.time}
          </div>
          <div>
            <MdAccessTime /> {formatDate(item?.date)}
          </div>
          <div className={`status ${item?.status?.toLowerCase()}`}>{item?.status}</div>
        </div>
      ))}
    </div>
  );
};

export default Appointment;
