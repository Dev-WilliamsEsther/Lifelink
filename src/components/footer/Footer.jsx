import React from 'react'
import '../../components/footer/footer.css'
import { PiUserCircleDashedThin } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className='footerwrapper'>
      <div className='footerlogo'>
        <img src="/images/logo.png" alt=""  />
        <h1>ALIFE</h1>
      </div>
      <div className='footernewsletter'>
        <h1>Join the mission to save lives through <br />blood donation.</h1>
        <div className='footerinput'>
          <div className='footeremail'>
            <PiUserCircleDashedThin  size={22}/>
          <input type="text" placeholder='Enter your email'  />
          </div>
            <button>Subscribe</button>
        </div>
        
      </div>
      <div className='footerfeatures'>
        <ul className='featureslist'>
          <li>Home</li>
          <li>About Us</li>
          <li>How it works</li>
          <li>Partners</li>
          <li>Privacy Policy</li>
          <li>Sponsors</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer