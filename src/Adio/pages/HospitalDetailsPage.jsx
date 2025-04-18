import React, { useState } from 'react'
import './hospitalDetailsPage.css'
import { Modal } from 'antd'
import { useParams } from 'react-router'

const HospitalDetailsPage = () => {
  const [volunteerPopUp, setVolunteerPopUp] = useState(false)


  const [isLoading, setIsLoading] = useState(false)
  const [anHospital, setAnHospital] = useState([])

  const {id} = useParams()


  const getOneHospital = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${Base_Url}/hospitals${id}`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      });
      console.log("List of Hospitals", res)
      setAnHospital(res?.data?.data);
      setIsLoading(false)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  };



  return (
    <>
    <div className='HospitalDetailsPageWrapper'>
      <h1>Hospital Details</h1>

      <div className="detailsTextAndImageWrapper">
        <div className="detailsImageWrapper">
            <img src="/images/hospital image.jpg"/>
        </div>
        <div className="detailsTextWrapper">
            <div className="innerTextWRapper">
                <p>Name : <b>{anHospital.fullName}</b></p>
                <p>Location : <b>{anHospital.location}</b></p>
                <p>Blood group needed : <b>A+</b></p>
                <p>Contact : <b>{anHospital.phone}</b></p>
                <p>OPerating Hours : <b>"Mon-Fri, 8AM - 5PM"</b></p>
            </div>
            <button onClick={()=> setVolunteerPopUp(true)}>Volunteer to Donate</button>
        </div>
      </div>
      <Modal
      open={volunteerPopUp}
      onCancel={()=> setVolunteerPopUp(false)}
      footer={null}
      >
        <div className="volunteerDateWrapper">
          <h1>Pick Date/Time</h1>

          <div className="datePickerWrapper">
            <label>Date</label>
            <p><input type="radio" name="1"/> Monday</p>
            <p><input type="radio" name="1"/> Tuesday</p>
            <p><input type="radio" name="1"/> Wednesday</p>
            <p><input type="radio" name="1"/> Thursday</p>
            <p><input type="radio" name="1"/> Friday</p>
            <p><input type="radio" name="1"/> Saturday</p>
            <p><input type="radio" name="1"/> Sunday</p>
          </div>
          <div className="datePickerWrapper">
            <label>Time</label>
            <p><input type="radio" name="2"/> 8:00AM - 10:00AM</p>
            <p><input type="radio" name="2"/> 10:00AM - 12:00AM</p>
            <p><input type="radio" name="2"/> 12:00AM - 3:00AM</p>
            <p><input type="radio" name="2"/> 3:00AM - 5:00AM</p>
          </div>
          <button>Schedule</button>
        </div>

      </Modal>
    </div>
    </>
  )
}

export default HospitalDetailsPage
