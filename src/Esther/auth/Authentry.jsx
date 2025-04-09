import React from 'react'
import '../../Esther/styles/authentry.css'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import { Link } from 'react-router'

const Authentry = ({type}) => {
    const isLogin = type === "login"
  return (
    <div className='authwrapper'>
        <img src="images/Subtract.png" alt=""className='authimage'/>
        <div className='authinfowrap'>
            <div className='authlogohold'>
            <Link to="/">
                <img src="images/logo.png" alt="" className='authlogo'/>
            </Link>
            <HiOutlineArrowCircleLeft size={50} />
            </div>
            <div className='authinfo1'>
                <h3>{isLogin ? "LOG-IN" : "SIGN-UP"}</h3>
                <p>{isLogin ? "Access your account" : "As a donor or Hospital/Bloodbank"} </p>
            </div>
            <div className='authinfo2'>
                <img src="images/authhospital.png" alt="" className='authimg' />
                <img src="images/authdonors.png" alt=""  className='authimg'/>
            </div>
            <button className='authinfo3'>{isLogin ? "LOGIN" : "SELECT"}</button>
        </div>
    </div>
  )
}

export default Authentry