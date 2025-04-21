import React, { useEffect, useState } from "react";
import "../../Adio/pages/hospitalDetailsPage.css";
import { DatePicker, Modal } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import LoadComponents from "../../components/componentsLoadScreen/LoadComponents";
import { toast } from "sonner";
import FadeLoader from "react-spinners/CircleLoader";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const Base_Url = import.meta.env.VITE_BASEURL;

const HospitalRequestDetails = () => {
  const [volunteerPopUp, setVolunteerPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [anHospital, setAnHospital] = useState([]);

  const token = useSelector((state) => state?.token);
  const { hospitalId } = useParams();
  const [scheduleData, setScheduleData] = useState({
    date: "",
    time: "",
    hospitalId
  });

  console.log(scheduleData)

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handleChange = (e) => {
    setScheduleData((prev) => ({
      ...prev,
      date: e.format("YYYY-MM-DD"),
    }));
  };

  const time = [
    { label: "8:00 AM - 10:00 AM", value: "8:00 AM" },
    { label: "10:00 AM - 12:00 PM", value: "10:00 AM" },
    { label: "12:00 PM - 3:00 PM", value: "12:00 PM" },
    { label: "3:00 PM - 5:00 PM", value: "3:00 PM" },
  ];
  

  const getOneHospital = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${Base_Url}/blood-request/${hospitalId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnHospital(res?.data?.data);
      console.log(res)
    } catch (err) {
      console.error("Error fetching hospital details:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOneHospital();
  }, [hospitalId]);

  const handleSchedule = async () => {
    setIsScheduleLoading(true);
    try {
      const res = await axios.post(`${Base_Url}/bookAppointment`, {scheduleData}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Scheduled:", res);
      toast.success(res?.data?.message);
      setScheduleData({
        date: "",
        time: "",
        id,
      });
      setVolunteerPopUp(false);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to schedule.");
    } finally {
      setIsScheduleLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (isLoading) return <LoadComponents />;
  return (
    <div className="HospitalDetailsPageWrapper">
      <h1>{anHospital?.hospital?.fullName} Request Details</h1>
      <span>This post was made on {formatDate(anHospital?.updatedAt)}</span>

      <div className="detailsTextAndImageWrapper">
        <div className="detailsImageWrapper">
          <img src="/images/hospital image.jpg" alt="Hospital" />
        </div>

        <div className="detailsTextWrapper">
          <div className="innerTextWRapper">
            <p>
              Name: <b>{anHospital?.hospital?.fullName || "-"}</b>
            </p>
            <p>
              Blood group needed: <b>{anHospital?.bloodGroup || "-"}</b>
            </p>
            <p>
              number Of Pints: <b>{anHospital?.numberOfPints || "-"}</b>
            </p>
            <p>
              urgency Level: <b>{anHospital?.urgencyLevel || "-"}</b>
            </p>
            <p>
             preferred Date: <b>{formatDate(anHospital?.preferredDate) || "-"}</b>
            </p>
            <p>
              Address: <b>{anHospital?.hospital?.location || "-"}</b>
            </p>
            <p>
              LGM: <b>{anHospital?.hospital?.city || "-"}</b>
            </p>
            <p>
              Contact: <b>{anHospital?.hospital?.email || "-"}</b>
            </p>
            <p>
              Contact: <b>{anHospital?.hospital?.phone || "-"}</b>
            </p>
            <p>
              Operating Hours: <b>{"Mon-Fri, 8AM - 5PM"}</b>
            </p>
          </div>
          <button onClick={() => setVolunteerPopUp(true)}>
            Volunteer to Donate
          </button>
        </div>
      </div>

      <Modal
        open={volunteerPopUp}
        onCancel={() => setVolunteerPopUp(false)}
        footer={null}
      >
        <div className="volunteerDateWrapper">
          <h1>Pick Date/Time</h1>

          <div className="datePickerWrapper">
            <label>Date</label>
            <DatePicker
              onChange={handleChange}
              disabledDate={disabledDate}
              id="preferredDate"
              name="preferredDate"
              className="w-80 border h-10 border-gray-300 rounded text-sm text-gray-600 px-2 pl-2"
            />
          </div>

          <div className="datePickerWrapper">
            <label>Time</label>
            {time?.map((time, idx) => (
              <p key={idx}>
                <input
                  type="radio"
                  name="time"
                  value={time.value}
                  onChange={(e) =>
                    setScheduleData((prev) => ({
                      ...prev,
                      time: e.target.value,
                    }))
                  }
                />{" "}
                {time.label}
              </p>
            ))}
          </div>

          <button onClick={handleSchedule} disabled={isScheduleLoading}>
            {isScheduleLoading ? (
              <FadeLoader color="white" size={25} />
            ) : (
              "Schedule"
            )}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HospitalRequestDetails;
