import React, { useState } from 'react'
import '../../Esther/styles/donorslog.css'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogin } from '../../global/Api'
import FadeLoader from 'react-spinners/CircleLoader'
import NotificationWrap from '../../components/notificatonPopWrap/NotificationWrap'
const Base_Url = import.meta.env.VITE_BASEURL;


const Donorslogin = () => {
  const [userLoginData, setUserLoginData] = useState({
    email : "",
    password : ""
  })

  const [isLoading, setIsLoading] = useState(false);
  const [ress, setRess] = useState("")


  const [confirmPassword, setConfirmPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!userLoginData.email ||!userLoginData.password){
      setRess("Please input all field")
      return
    }
  
    handleLogin(userLoginData, Base_Url, setIsLoading, setRess, nav);
  };
  


  return (
    <div className='donorloginwrapper'>
       {
        ress && <NotificationWrap>{ress}</NotificationWrap>
      }
      <div className='donorloginmobilewrap'>
        <h2>LOG IN</h2>
      </div>
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
            <input type="email" placeholder='ENTER EMAIL' className='donorlogininput'
            value={userLoginData.email}
            onChange={(e)=> setUserLoginData(prev => ({...prev, email: e.target.value}))}
            />
          </div>
          <div className='donorlogininputwrapper'>
            <p>ENTER PASSWORD</p>
            <input type="password" placeholder='PASSWORD' className='donorlogininput' 
            value={userLoginData.password}
            onChange={(e)=> setUserLoginData(prev => ({...prev, password: e.target.value}))}
            />
          </div>
          <button className='donorloginbtn' onClick={handleSubmit}>{isLoading? <FadeLoader color="white" /> : "LOG-IN"}</button>
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