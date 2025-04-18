import React from 'react'
import './hospitalCard.css'
import { useNavigate } from 'react-router'

const HospitalCard = ({hospital, id}) => {

  const nav = useNavigate()
  return (
    <>
      <div className='hospitalCardWRapper'>
        <img src="/images/hospital image.jpg" alt="Hospital image" />
        <div className="hospitalTextWRapper">
          <h3>{hospital.fullName}</h3>
        </div>

        <button className="viewDetailButton" onClick={()=> nav(`/hospitaldetails${id}`)}>
          View Details <span className="arrow-icon">{">"}</span>
        </button>
      </div>
    </>
  )
}

export default HospitalCard