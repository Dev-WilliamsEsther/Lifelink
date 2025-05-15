import React from 'react'
import '../../components/footer/footer.css'
import { PiUserCircleDashedThin } from 'react-icons/pi'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='footerwrapper'>
      <div className='footerlogo'>
        <img src="images/alifenobg.png" alt=""  />
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
          <li>
          <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
          <Link to="/howitworks">How it works</Link>
            </li>
          <li>Partners</li>
          <li>Privacy Policy</li>
          <li>Sponsors</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer