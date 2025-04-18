import React, { useState } from 'react'
import '../../Esther/styles/donorslog.css'
import { Link } from 'react-router-dom'
import FadeLoader from 'react-spinners/CircleLoader'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
  return (
    <div className='donorloginwrapper'>
      <div className='donorloginmobilewrap'>
      </div>
      <img src="images/Subtract.png" alt="" className='donorslogimage'/>
      <div className='donorlogininfowrap'>
      <div className='donorloginlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='donorloginlogo'/>
          </Link>
        </div>
        <div className='donorlogininfo1'>
          <h2>INPUT YOUR MAIL</h2>
          <div className='donorlogininputwrapper'>
            <p>EMAIL ADDRESS</p>
            <input type="email" placeholder='ENTER EMAIL' className='donorlogininput'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <button className='donorloginbtn'>Send Link</button>
          <div className='donorloginforgotwrap'>
            <p onClick={()=>nav("/donorssignup")} className='AuthRedirectionLinkWrap'><a style={{cursor: "pointer"}}>DON'T HAVE AN ACCOUNT? SIGNUP</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword