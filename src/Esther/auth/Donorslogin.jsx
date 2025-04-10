import React from 'react'
import '../../Esther/styles/donorslog.css'
import { Link, useNavigate } from 'react-router-dom'

const Donorslogin = () => {
  const nav = useNavigate()
  return (
    <div className='donorloginwrapper'>
      <img src="images/Subtract.png" alt="" className='donorslogimage'/>
      <div className='donorlogininfowrap'>
      <div className='donorloginlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='donorloginlogo'/>
          </Link>
        </div>
        <div className='donorlogininfo1'>
          <h2>LOG IN</h2>
          <div className='donorlogininputwrapper'>
            <p>EMAIL ADDRESS</p>
            <input type="email" placeholder='ENTER EMAIL' className='donorlogininput'/>
          </div>
          <div className='donorlogininputwrapper'>
            <p>ENTER PASSWORD</p>
            <input type="password" placeholder='PASSWORD' className='donorlogininput' />
          </div>
          <button className='donorloginbtn'>LOG-IN</button>
          <div className='donorloginforgotwrap'>
            <p onClick={()=>nav("/donorssignup")}>DON'T HAVE AN ACCOUNT?SIGNUP</p>
            <p>FORGOT PASSWORD</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donorslogin