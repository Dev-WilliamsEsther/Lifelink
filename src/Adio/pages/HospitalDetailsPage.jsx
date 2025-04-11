import React from 'react'
import './hospitalDetailsPage.css'

const HospitalDetailsPage = () => {
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
                <p>Blood goup needed : <b>A+</b></p>
                <p>Contact : <b>09013717091</b></p>
                <p>OPerating Hours : <b>"Mon-Fri, 8AM - 5PM"</b></p>
            </div>
            <button>Volunteer to Donate</button>
        </div>
      </div>
    </div>
  )
}

export default HospitalDetailsPage
