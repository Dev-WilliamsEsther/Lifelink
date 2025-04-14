import React, { useState } from 'react'
import './hospitalDetailsPage.css'
import { Modal } from 'antd'
import NotificationWrap from '../../components/notificatonPopWrap/NotificationWrap'

const HospitalDetailsPage = () => {
  const [volunteerPopUp, setVolunteerPopUp] = useState(false)

  return (
    <>
    <NotificationWrap>You've sucessfully scheduled</NotificationWrap>
    <div className='HospitalDetailsPageWrapper'>
      <h1>Hospital Details</h1>

      <div className="detailsTextAndImageWrapper">
        <div className="detailsImageWrapper">
            <img src="/images/hospital image.jpg"/>
        </div>
        <div className="detailsTextWrapper">
            <div className="innerTextWRapper">
                <p>Name : <b>Kings Hospital</b></p>
                <p>Location : <b>Oja Orile bustop, Lagos</b></p>
                <p>Blood group needed : <b>A+</b></p>
                <p>Contact : <b>09013717091</b></p>
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
