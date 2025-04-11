import React, { useState } from 'react'
import './hospitalDetailsPage.css'
import { Modal } from 'antd'

const HospitalDetailsPage = () => {
  const [volunteerPopUp, setVolunteerPopUp] = useState(false)

  return (
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
          <label>Date</label>
          <input type="date" />
          <label>Time</label>
          <input type="time" />
          <button>Schedule</button>
        </div>

      </Modal>
    </div>
  )
}

export default HospitalDetailsPage
