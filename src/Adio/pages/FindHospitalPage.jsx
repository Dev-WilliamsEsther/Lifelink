import React from 'react'
import './FindHospitalPage.css'
import HospitalCard from '../../components/hospitalCard/HospitalCard'

const FindHospitalPage = () => {
  return (
    <div className='FindHospitalPageWrapper'>
      <h1>List of Hospitals to Visit</h1>

      <div className="hospitalCardsWRapper">
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
        <HospitalCard />
      </div>

      <div className="quickTipsAndFunFactWrapper">
      <h1>Quick Tips & Fun Facts</h1>

        <div className="step-box">
          <div className="icon"><img src="/public/cryptocurrency-color_gold.png" /></div>
          <h3>Receive Donors</h3>
          <p>Accept donors who visit with their unique LifeLink codes & confirm their donations.</p>
        </div>

      </div>
    </div>
  )
}

export default FindHospitalPage
