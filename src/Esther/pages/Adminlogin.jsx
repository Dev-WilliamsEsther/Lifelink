import React from 'react'
import '../../Esther/styles/adminlogin.css'
import { Link, useNavigate } from 'react-router'

const Adminlogin = () => {
    const nav = useNavigate();
    return (
        <div className='admindonorloginwrapper'>
          <div className='admindonorloginmobilewrap'>
            <h2>LOG IN</h2>
          </div>
          <img src="images/Subtract.png" alt="" className='admindonorslogimage'/>
          <div className='admindonorlogininfowrap'>
          <div className='admindonorloginlogohold'>
              <Link to="/">
                <img src="images/logo.png" alt="Logo" className='admindonorloginlogo'/>
              </Link>
            </div>
            <div className='admindonorlogininfo1'>
              <h2>LOG IN</h2>
              <div className='admindonorlogininputwrapper'>
                <p>EMAIL ADDRESS</p>
                <input type="email" placeholder='ENTER EMAIL' className='admindonorlogininput'/>
              </div>
              <div className='admindonorlogininputwrapper'>
                <p>ENTER PASSWORD</p>
                <input type="password" placeholder='PASSWORD' className='admindonorlogininput' />
              </div>
              <button className='admindonorloginbtn' onClick={()=>nav("/dashboard/adminverification")}>LOG-IN</button>
              <div className='admindonorloginforgotwrap'>
                <p onClick={()=>nav("/admindonorssignup")}>DON'T HAVE AN ACCOUNT?SIGNUP</p>
                <p>FORGOT PASSWORD</p>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Adminlogin