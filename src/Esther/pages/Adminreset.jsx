import React from 'react'
import '../../Esther/styles/adminreset.css'
import { Link } from 'react-router'

const Adminreset = () => {
    return (
        <div className='adminresetwrapper'>
            <img src="images/Subtract.png" alt="" className='adminresetimage'/>
          <div className='adminresetmobilewrap'>
            <h2>RESET PASSWORD</h2>
          </div>
          <div className='adminresetinfowrap'>
            <div className='adminresetlogohold'>
              <Link to="/">
                <img src="images/logo.png" alt="Logo" className='adminresetlogo'/>
              </Link>
            </div>
            <div className='adminresetinfo1'>
              <h2>RESET PASSWORD</h2>
              <div className='adminresetinputwrapper'>
                <p>PASSWORD</p>
                <input type="password" className='adminresetinput'/>
              </div>
              <div className='adminresetinputwrapper'>
                <p>CONFIRM PASSWORD</p>
                <input type="password" className='adminresetinput'/>
              </div>
              <button className='adminresetbtn'>RESET</button>
            </div>
          </div>
        </div>
      )
}

export default Adminreset