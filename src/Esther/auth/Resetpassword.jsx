import React from 'react'
import '../../Esther/styles/reset.css'
import { Link } from 'react-router-dom'

const Resetpassword = () => {
  return (
    <div className='resetwrapper'>
      <div className='resetmobilewrap'>
        <h2>RESET PASSWORD</h2>
      </div>
      <div className='resetinfowrap'>
        <div className='resetlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='resetlogo'/>
          </Link>
        </div>
        <div className='resetinfo1'>
          <h2>RESET PASSWORD</h2>
          <div className='resetinputwrapper'>
            <p>PASSWORD</p>
            <input type="password" className='resetinput'/>
          </div>
          <div className='resetinputwrapper'>
            <p>CONFIRM PASSWORD</p>
            <input type="password" className='resetinput'/>
          </div>
          <button className='resetbtn'>RESET</button>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className='resetimage'/>
    </div>
  )
}

export default Resetpassword