import React from 'react'
import './hospitalCard.css'

const HospitalCard = () => {
  return (
    <>
      <div className='hospitalCardWRapper'>
        <img src="/images/hospital image.jpg" alt="Hospital image" />
        <div className="hospitalTextWRapper">
          <h3>St. Ives Specialist Hispital</h3>
        </div>

        <button className="viewDetailButton">
          View Details <span className="arrow-icon">{">"}</span>
        </button>
      </div>
    </>
  )
}

export default HospitalCard