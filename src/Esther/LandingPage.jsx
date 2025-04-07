import React from 'react'
import '../Esther/styles/landing.css'

const LandingPage = () => {
  return (
    <div className='landingmainwrapper'>
      <div className='landingwrapper'>
        <div className='landingpagecenter'>
          <h1>Every Drop Counts,<br /> Be the Life-Line Someone Needs</h1>
          <p>Every day, thousands of Nigerians need blood to survive accidents, surgeries, and medical conditions. <br /> Yet, blood shortages remain a challenge. LifeLink connects willing donors to hospitals and blood <br /> banks, making it easier to save lives while ensuring you get rewarded for your generosity.</p>
          <button className='landingbutton'>Donate</button>
        </div>
      </div>
      <div className='landingpagebenefits'>
        <h1>KEY BENEFITS FOR DONORS</h1>
        <div className='landingbenefitsinner' >
          <div className='landingbenefitsinner1'>
            <h2>Saves lives while <br />gaining valuable <br />benefits.</h2>
            <p>When you donate blood, you’re not just saving lives you’re also gaining valuable benefits. Make an impact while taking care of your own well-being.</p>
          </div>
          <div className='landingbenefitsinner2'></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage