import React, { useEffect, useState } from "react";
import "./appointment.css";
import { MdAccessTime } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState([]);

  const userToken = useSelector((state) => state?.loggedInUser?.token);

  const Base_Url = import.meta.env.VITE_BASEURL;

  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const fetchAppointment = async () => {
    try {
      const res = await axios.get(`${Base_Url}/appointments`, { headers });
      setAppointmentData(res?.data?.appointments);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <div>
      <div className="AppointmentPageWrapper">
        <h1>Pending Appointment</h1>

        <div className="AppointmentCardsHeading">
          <div className="AppointmentInnerDiv">
            <h1 className="AppointmentInnerDivtextBox1">DONOR NAME</h1>
            <h1 className="AppointmentInnerDivtextBox2">DETAILS</h1>
            <h1 className="AppointmentInnerDivtextBox3">
              <MdAccessTime />
              TIME
            </h1>
            <h1 className="AppointmentInnerDivtextBox4">
              <MdAccessTime />
              DATE
            </h1>
            <h1 className="AppointmentInnerDivtextBox5"></h1>
          </div>
        </div>
        {appointmentData?.map((item, index) => (
          <div className="AppointmentCardsWrapper" key={index}>
            <div className="AppointmentCards2">
              <h3 className="AppointmentInnerDivtextBox6">{item?.donorName}</h3>
              <h3 className="AppointmentInnerDivtextBox7"></h3>
              <h3 className="AppointmentInnerDivtextBox9">
                <MdAccessTime />
                {item?.time}
              </h3>
              <h3 className="AppointmentInnerDivtextBox8">
                <MdAccessTime />
                {item?.date}
              </h3>
              <div className="AppointmentInnerDivtextBox10">
                <button className="confirm-btn">CONFIRM</button>
                <button className="reject-btn">REJECT</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="AppointmentPageWrapper">
        <h1>Upcomming Appointment</h1>

        <div className="AppointmentCardsHeading2">
          <div className="AppointmentInnerDiv2">
            <h1 className="AppointmentInnerDivtext1">DONOR NAME</h1>
            <h1 className="AppointmentInnerDivtext2">DETAILS</h1>
            <h1 className="AppointmentInnerDivtext3">
              <MdAccessTime />
              TIME
            </h1>
            <h1 className="AppointmentInnerDivtext4">
              <MdAccessTime />
              DATE
            </h1>
            <h1 className="AppointmentInnerDivtext5">STATUS</h1>
          </div>
        </div>
        {
          appointmentData?.map((item, index) => (
            <div className="AppointmentCardsWrapper" key={index}>
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">{item?.donorName}</h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime />
              {item?.time}
            </h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime />
              {item?.date}
            </h3>
            <h3 className="AppointmentInnerDivtext10">{item?.status}</h3>
          </div>
        </div>
          ))
        }
        
   
      
      </div>
    </div>
  );
};

export default Appointment;
