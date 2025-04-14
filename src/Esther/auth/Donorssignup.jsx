import React from 'react'
import '../../Esther/styles/donorssign.css'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

const Base_Url = import.meta.env.VITE_BASEURL;



const Donorssignup = () => {
  

  const handleSignup = async() =>{
    try{
      const ress = await axios.post(userData, Base_Url)
    }catch(error){

    }
  }





  const nav = useNavigate();
  return (
    <div className='donorsignwrapper'>
      <img src="images/Subtract.png" alt="" className='donorsignimage'/>
      <div className='donsignmobilewrap'>
        <h1>CREATE AN ACCOUNT</h1>
        <p>REGISTER AS A DONOR</p>
      </div>
      <div className='donorsigninfowrap'>
        <div className='donorsignlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='donorsignlogo'/>
          </Link>
        </div>
        <div className='donorsigninfo1'>
          <h1>REGISTER AS A DONOR</h1>
          <div className='donorsigninputwrapper'>
            <p>NAME</p>
            <input type="text" placeholder='FULL NAME' className='donorssigninput'/>
          </div>
          <div className='donorsigninputwrapper'>
            <p>AGE</p>
            <input type="text" placeholder='AGE' className='donorssigninput'/>
          </div>
          <div className='donorsigninputwrapper'>
            <p>HOME ADDRESS</p>
            <input type="text" placeholder='ADDRESS' className='donorssigninput'/>
          </div>
          <div className='donorsigninputwrapper'>
            <p>ENTER EMAIL</p>
            <input type="email" placeholder='ENTER EMAIL' className='donorssigninput'/>
          </div>
          <div className='donorclick'>
            <p>HAVE YOU DONATED BEFORE?</p>
            <div className='donorclickinner'>
              <div className='clickinner'>
                <input type="radio" />
                <p>YES</p>
              </div>
              <div className='clickinner'>
                <input type="radio" />
                <p>NO</p>
              </div>
            </div>
          </div>

          <div className='donorbloodclick'>
            <h2>BLOOD GROUP</h2>
            <div className='bloodgrouphold'>
              <p>
                <input type="radio" />
                A+</p>
              <p>
                <input type="radio" />
                B+</p>
              <p>
                <input type="radio" />
                AB+</p>
              <p>
                <input type="radio" />
                O-</p>
              <p>
                <input type="radio" />
                Unknown</p>
              <p>
                <input type="radio" />
                A+</p>
              <p>
                <input type="radio" />
                B-</p>
              <p>
                <input type="radio" />
                O+</p>
            </div>
          </div>
          <div className='donorsigninputwrapper'>
            <p>CREATE PASSWORD</p>
            <input type="text" className='donorssigninput'/>
          </div>
          <div className='donorsigninputwrapper'>
            <p>CONFIRM PASSWORD</p>
            <input type="text" className='donorssigninput'/>
          </div>
          <div className='checkboxwrapper'>
            <input type="checkbox" />
            <p>I agree to the <a href="" onClick={()=>nav("/donorterms")} className='tandc'>TERMS AND CONDITIONS</a></p>
          </div>
          <button className='donsignbtn'>REGISTER</button>
        </div>
      </div>
    </div>
  )
}

export default Donorssignup