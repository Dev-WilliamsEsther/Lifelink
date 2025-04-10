import React from 'react'
import '../../Esther/styles/hospitalslog.css'
import { Link, useNavigate } from 'react-router-dom'

const Hospitallogin = () => {
  const nav = useNavigate()
  return (
    <div className='hosloginwrapper'>
      <div className='hoslogininfowrap'>
      <div className='hosloginlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='hosloginlogo'/>
          </Link>
        </div>
        <div className='hoslogininfo1'>
          <h2>LOG IN</h2>
          <div className='hoslogininputwrapper'>
            <p>EMAIL ADDRESS</p>
            <input type="email" placeholder='ENTER EMAIL' className='hoslogininput'/>
          </div>
          <div className='hoslogininputwrapper'>
            <p>ENTER PASSWORD</p>
            <input type="password" placeholder='PASSWORD' className='hoslogininput' />
          </div>
          <button className='hosloginbtn'>LOG-IN</button>
          <div className='hosloginforgotwrap'>
            <p onClick={()=>nav("/hospitalsignup")}>DON'T HAVE AN ACCOUNT?SIGNUP</p>
            <p>FORGOT PASSWORD</p>
          </div>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className='hospiloginimage'/>
    </div>
  )
}

export default Hospitallogin