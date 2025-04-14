import React from 'react'
import '../../Esther/styles/adminsignin.css'
import { Link } from 'react-router'

const Adminsignin = () => {
    return (
        <div className='adminsignwrapper'>
          <img src="images/Subtract.png" alt="" className='adminsignimg'/>
          <div className='adminmobilewrap'>
            <h1>CREATE AN ACCOUNT</h1>
            <p>REGISTER AS ADMIN</p>
          </div>
          <div className='adminsigninfowrap'>
            <div className='adminsignlogohold'>
              <Link to="/">
                <img src="images/logo.png" alt="Logo" className='adminsignlogo'/>
              </Link>
            </div>
            <div className='adminsigninfo1'>
              <h1>REGISTER AS AN <br />ADMIN</h1>
              <div className='adminsigninputwrapper'>
                <p>NAME</p>
                <input type="text" placeholder='FULL NAME' className='adminsigninput' />
              </div>
              <div className='adminsigninputwrapper'>
                <p>ADDRESS</p>
                <input type="text" placeholder='ENTER ADDRESS' className='adminsigninput' />
              </div>
              <div className='adminsigninputwrapper'>
                <p>EMAIL ADDRESS</p>
                <input type="email" placeholder='ENTER EMAIL...' className='adminsigninput' />
              </div>
              <div className='adminsigninputwrapper'>
                <p>PHONE NUMBER</p>
                <input type="text" placeholder='' className='adminsigninput' />
              </div>
              <div className='adminsigninputwrapper'>
                <p>PASSWORD</p>
                <input type="password" placeholder='' className='adminsigninput' />
              </div>
              <div className='adminsigninputwrapper'>
                <p>CONFIRM PASSWORD</p>
                <input type="password" placeholder='' className='adminsigninput' />
              </div>
              
              <button className='adminbtn'>SIGN-IN</button>
              <p>ALREADY HAVE AN ACCOUNT? <a href="">LOG IN</a></p>
            </div>
          </div>
        </div>
      )
}

export default Adminsignin