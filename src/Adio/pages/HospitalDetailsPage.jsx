import React, { useEffect, useState } from 'react';
import './hospitalDetailsPage.css';
import { Modal } from 'antd';
import { useParams } from 'react-router';
import axios from 'axios';
import LoadComponents from '../../components/componentsLoadScreen/LoadComponents';
import { toast } from 'sonner';
import FadeLoader from 'react-spinners/CircleLoader'


const Base_Url = import.meta.env.VITE_BASEURL;

const HospitalDetailsPage = () => {
  const [volunteerPopUp, setVolunteerPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [anHospital, setAnHospital] = useState([]);


  const { hospitalId } = useParams();
  const token = JSON.parse(localStorage.getItem("userData"))?.data?.token;
  const [scheduleData, setScheduleData] = useState({
    date: "",
    hospitalId: ""
  })


  const getOneHospital = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${Base_Url}/hospital/${hospitalId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnHospital(res?.data?.hospital);
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
    setIsScheduleLoading(true)
    setScheduleData(prev => ({ ...prev, hospitalId }));
    const updated = { ...scheduleData, hospitalId };
    try {
      const res = await axios.post(`${Base_Url}/schedule`, updated, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setIsScheduleLoading(false)
      toast.success(res?.data?.message)
      setScheduleData("")
      setVolunteerPopUp(false)
    }catch(err){
      toast.error(err?.response?.data?.message)
      setIsScheduleLoading(false)
    }
  }


  if (isLoading) return <LoadComponents />
  return (
    <div className='HospitalDetailsPageWrapper'>
      <h1>Hospital Details</h1>

      <div className="detailsTextAndImageWrapper">
        <div className="detailsImageWrapper">
          <img src="/images/hospital image.jpg" alt="Hospital" />
        </div>

        <div className="detailsTextWrapper">
          <div className="innerTextWRapper">
            <p>Name: <b>{anHospital?.fullName}</b></p>
            <p>Location: <b>{anHospital?.location}</b></p>
            <p>Blood group needed: <b>{anHospital?.bloodGroupNeeded || 'A+'}</b></p>
            <p>Contact: <b>{anHospital?.phone}</b></p>
            <p>Operating Hours: <b>{anHospital?.operatingHours || 'Mon-Fri, 8AM - 5PM'}</b></p>
          </div>
          <button onClick={() => setVolunteerPopUp(true)}>Volunteer to Donate</button>
        </div>
      </div>

      <Modal
        open={volunteerPopUp}
        onCancel={() => setVolunteerPopUp(false)}
        footer={null}
      >
        <div className="volunteerDateWrapper">
          <h1>Pick Date/Time</h1>

          <input type="date" name="date" className='scheduleDatePicker'
            value={scheduleData.date}
            onChange={(e) => setScheduleData(prev => ({ ...prev, date: e.target.value }))}
          />

          {/* <div className="datePickerWrapper">
            <label>Date</label>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, idx) => (
              <p key={idx}><input type="radio" name="date" /> {day}</p>
            ))}
          </div>

          <div className="datePickerWrapper">
            <label>Time</label>
            {["8:00AM - 10:00AM", "10:00AM - 12:00PM", "12:00PM - 3:00PM", "3:00PM - 5:00PM"].map((time, idx) => (
              <p key={idx}><input type="radio" name="time" /> {time}</p>
            ))}
          </div> */}

          <button onClick={handleSchedule}>{isScheduleLoading? <FadeLoader color="white" size={25} /> : "Schedule"}</button>
        </div>
      </Modal>
    </div>
  );
};

export default HospitalDetailsPage;
