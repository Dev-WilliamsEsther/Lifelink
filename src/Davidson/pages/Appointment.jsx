import React from "react";
import "./appointment.css";
import { MdAccessTime } from "react-icons/md";

const Appointment = () => {
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

        <div className="AppointmentCardsWrapper">
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">DONOR NAME</h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime />
              10:00PM
            </h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime />
              MAy 23, 2025
            </h3>
            <div className="AppointmentInnerDivtextBox10">
              <button className="confirm-btn">CONFIRM</button>
              <button className="reject-btn">REJECT</button>
            </div>
          </div>
        </div>
        <div className="AppointmentCardsWrapper">
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">DONOR NAME</h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime />
              10:00PM
            </h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime />
              MAy 23, 2025
            </h3>
            <div className="AppointmentInnerDivtextBox10">
              <button className="confirm-btn">CONFIRM</button>
              <button className="reject-btn">REJECT</button>
            </div>
          </div>
        </div>
        <div className="AppointmentCardsWrapper">
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">DONOR NAME</h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime />
              10:00PM
            </h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime />
              MAy 23, 2025
            </h3>
            <div className="AppointmentInnerDivtextBox10">
              <button className="confirm-btn">CONFIRM</button>
              <button className="reject-btn">REJECT</button>
            </div>
          </div>
        </div>
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
        <div className="AppointmentCardsWrapper">
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">DONOR NAME</h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime />
              10:00PM
            </h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime />
              MAy 23, 2025
            </h3>
            <h3 className="AppointmentInnerDivtext10">CONFIRMED</h3>
          </div>
        </div>
        <div className="AppointmentCardsWrapper">
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">DONOR NAME</h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime />
              10:00PM
            </h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime />
              MAy 23, 2025
            </h3>
            <h3 className="AppointmentInnerDivtext10">CONFIRMED</h3>
          </div>
        </div>
        <div className="AppointmentCardsWrapper">
          <div className="AppointmentCards2">
            <h3 className="AppointmentInnerDivtextBox6">DONOR NAME</h3>
            <h3 className="AppointmentInnerDivtextBox7">VIEW DETAILS</h3>
            <h3 className="AppointmentInnerDivtextBox8">
              <MdAccessTime />
              10:00PM
            </h3>
            <h3 className="AppointmentInnerDivtextBox9">
              <MdAccessTime />
              MAy 23, 2025
            </h3>
            <h3 className="AppointmentInnerDivtext10">CONFIRMED</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
