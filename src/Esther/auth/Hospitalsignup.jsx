import React, { useState } from 'react'
import '../../Esther/styles/hospitalsign.css'
import { Link, useNavigate } from 'react-router-dom'


const Hospitalsignup = () => {
  const nav = useNavigate();
  const [click,setClick] = useState(false);
  return (
    <div className='hospitalsignwrapper'>
      <div className='hossignmobilewrap'>
        <h1>CREATE AN ACCOUNT</h1>
        <p>REGISTER AS HOSPITAL/ <br /> BLOODBANK</p>
      </div>
      <div className='hospisigninfowrap'>
        <div className='hospisignlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='hospisignlogo'/>
          </Link>
        </div>
        <div className='hospisigninfo1'>
          <h1>REGISTER AS HOSPITAL/ <br /> BLOODBANK</h1>
          <div className='hossigninputwrapper'>
            <p>FACILITY NAME</p>
            <input type="text" placeholder='FULL NAME' className='hossigninput' />
          </div>
          <div className='hossigninputwrapper'>
            <p>OFFICE ADDRESS</p>
            <input type="text" placeholder='ADDRESS' className='hossigninput' />
          </div>
          <div className='hossigninputwrapper'>
            <p>CITY</p>
            <input type="text" placeholder='ADDRESS' className='hossigninput' />
          </div>
          <div className='hossigninputwrapper'>
            <p>EMAIL</p>
            <input type="email" placeholder='ENTER EMAIL...' className='hossigninput' />
          </div>
          <div className='hossigninputwrapper'>
            <p>PHONE NUMBER</p>
            <input type="text" placeholder='' className='hossigninput' />
          </div>
          <div className='hossigninputwrapper'>
            <p>CREATE PASSWORD</p>
            <input type="password" placeholder='' className='hossigninput' />
          </div>
          <div className='hossigninputwrapper'>
            <p>CONFIRM PASSWORD</p>
            <input type="password" placeholder='' className='hossigninput' />
          </div>
          <div className='checkboxwrapper'>
            <input type="checkbox" 
            isClick={click}
            onClick={()=>setClick(!click)}
            />
            
            <p>I agree to the <a href="" onClick={()=>nav("/hospiterms")} className='tandc'>TERMS AND CONDITIONS</a></p>
          </div>
          <button className='hospibtn'
          onClick={()=>nav("/kyc")}
          disabled={!click}
          >REGISTER</button>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className='hospisignimage'/>
    </div>
  )
}

export default Hospitalsignup