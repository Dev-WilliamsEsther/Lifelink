import React, { useEffect, useState } from "react";
import "../../Adio/pages/hospitalDetailsPage.css";
import { DatePicker, Modal } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadComponents from "../../components/componentsLoadScreen/LoadComponents";
import { toast } from "sonner";
import FadeLoader from "react-spinners/CircleLoader";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
// import RequestNotAvailable from "./RequestNotAvailable";


// const VITE_BASEURL = import.meta.env.VITE_BASEURL;
const VITE_BASEURL_REN = import.meta.env.VITE_BASEURL_REN;

const HospitalRequestDetails = () => {
  const [volunteerPopUp, setVolunteerPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [anHospital, setAnHospital] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const token = useSelector((state) => state?.token);
  const { bloodRequestId } = useParams();

  const [scheduleData, setScheduleData] = useState({
    date: "",
    time: "",
    hospitalId: ""
  });

  const disabledDate = (current) => {
    if (!anHospital?.preferredDate) return current && current < dayjs().endOf("day");
    const preferred = dayjs(anHospital.preferredDate);
    return current < dayjs().endOf("day") || current > preferred.endOf("day");
  };

  const handleChange = (e) => {
    if (!e) return;
    setScheduleData((prev) => ({
      ...prev,
      date: dayjs(e).toISOString(),
    }));
  };

  const time = [
    { label: "8:00 AM - 10:00 AM", value: "8:00 AM" },
    { label: "10:00 AM - 12:00 PM", value: "10:00 AM" },
    { label: "12:00 PM - 3:00 PM", value: "12:00 PM" },
    { label: "3:00 PM - 5:00 PM", value: "3:00 PM" },
  ];

  const getOneHospital = async () => {
    if (!bloodRequestId) {
      setNotFound(true);
      return;
    }

    setIsLoading(true);
    try {
      // 🟩 Fixed endpoint to singular route based on working backend
      const url = `${VITE_BASEURL_REN}/-request/${bloodRequestId}`;
      console.log("Fetching from:", url);

      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await axios.get(url, { headers });

      console.debug("GET Response:", res?.data);

      const data = res?.data?.data ?? res?.data;
      if (!data) {
        console.warn("No data returned for blood request", bloodRequestId);
        setNotFound(true);
        return;
      }

      setAnHospital(data);

      if (data?.preferredDate && dayjs().isAfter(dayjs(data.preferredDate), "day")) {
        setIsExpired(true);
      }
    } catch (err) {
      console.error("Error fetching hospital details:", err?.response ?? err);
      if (err?.response?.status === 404) {
        setNotFound(true);
      } else {
        toast.error(err?.response?.data?.message || "Failed to fetch request details.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOneHospital();
  }, [bloodRequestId]);

  const handleSchedule = async () => {
    // Basic client-side validation before sending
    console.log("Schedule data sent:", scheduleData);
    if (!scheduleData.date || !scheduleData.time) {
      toast.error("Please choose a date and time before scheduling.");
      return;
    }

    // Build payload; include hospitalId (try multiple places) and bloodRequestId if available
    const derivedHospitalId =
      scheduleData.hospitalId ||
      anHospital?.hospital?._id ||
      anHospital?.hospitalId ||
      anHospital?._id ||
      null;

    const payload = {
      date: dayjs(scheduleData.date).format("YYYY-MM-DD"),
      time: scheduleData.time,
    };
    if (derivedHospitalId) payload.hospitalId = derivedHospitalId;
    if (bloodRequestId) payload.bloodRequestId = bloodRequestId;

    setIsScheduleLoading(true);
    try {
      console.debug("Booking payload:", payload);
      // validate required fields server expects
      if (!payload.hospitalId || !payload.date || !payload.time) {
        toast.error("hospitalId, date and time are required.");
        setIsScheduleLoading(false);
        return;
      }

      const res = await axios.post(`${VITE_BASEURL_REN}/bookAppointment`, payload, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      console.debug("bookAppointment response:", res?.data);
      toast.success(res?.data?.message || "Scheduled successfully.");
      setScheduleData({ date: "", time: "", hospitalId: scheduleData.hospitalId || "" });
      setVolunteerPopUp(false);
    } catch (err) {
      console.error("Booking error:", err?.response ?? err);
      const serverMessage = err?.response?.data?.message || err?.response?.data || err.message;
      toast.error(serverMessage || "Failed to schedule.");
    } finally {
      setIsScheduleLoading(false);
    }
  };

  useEffect(() => {
    // try multiple possible shapes from the API to derive a hospital id
    const derivedHospitalId =
      anHospital?.hospital?._id || anHospital?.hospitalId || anHospital?._id || null;
    if (derivedHospitalId) {
      setScheduleData((prev) => ({
        ...prev,
        hospitalId: derivedHospitalId,
      }));
    }
  }, [anHospital]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "-";
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // if (notFound) return <RequestNotAvailable />;
  if (isLoading) return <LoadComponents />;

  return (
    <div className="HospitalDetailsPageWrapper">
      <h1>{anHospital?.hospital?.fullName || "-"} Request Details</h1>
      <span>This post was made on {formatDate(anHospital?.updatedAt)}</span>

      <div className="detailsTextAndImageWrapper">
        <div className="detailsImageWrapper">
          <img src="/images/hospital image.jpg" alt="Hospital" />
        </div>

        <div className="detailsTextWrapper">
          <div className="innerTextWRapper">
            <p>Name: <b>{anHospital?.hospital?.fullName || "-"}</b></p>
            <p>Blood group needed: <b>{anHospital?.bloodGroup || "-"}</b></p>
            <p>Number Of Pints: <b>{anHospital?.numberOfPints || "-"}</b></p>
            <p>Urgency Level: <b>{anHospital?.urgencyLevel || "-"}</b></p>
            <p>Offer: <b>{anHospital?.amount ? anHospital.amount.toLocaleString() : "-"}</b></p>
            <p>Preferred Date: <b>{formatDate(anHospital?.preferredDate)}</b></p>
            <p>Address: <b>{anHospital?.hospital?.location || "-"}</b></p>
            <p>LGA: <b>{anHospital?.hospital?.city || "-"}</b></p>
            <p>Email: <b>{anHospital?.hospital?.email || "-"}</b></p>
            <p>Contact: <b>{anHospital?.hospital?.phone || "-"}</b></p>
            <p>Operating Hours: <b>{"Mon-Fri, 8AM - 5PM"}</b></p>
          </div>

          {isExpired ? (
            <button disabled className="expiredButton">Request Expired</button>
          ) : (
            <button onClick={() => setVolunteerPopUp(true)}>Volunteer to Donate</button>
          )}
        </div>
      </div>

      {isExpired && (
        <div className="expiredNotice">
          ⚠️ This blood request has expired. <br />Please contact the hospital for updates.
        </div>
      )}

      <Modal open={volunteerPopUp} onCancel={() => setVolunteerPopUp(false)} footer={null}>
        <div className="volunteerDateWrapper">
          <h1>Pick Date/Time</h1>

          <div className="datePickerWrapper">
            <label>Date</label>
            <DatePicker
              onChange={handleChange}
              disabledDate={disabledDate}
              id="preferredDate"
              name="preferredDate"
              className="lg:w-80 border h-10 border-gray-300 rounded text-sm text-gray-600 px-2 pl-2 sm:w-35"
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
            {isScheduleLoading ? <FadeLoader color="white" size={25} /> : "Schedule"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HospitalRequestDetails;
