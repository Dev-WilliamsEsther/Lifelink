import React, { useState } from 'react'
import '../../Esther/styles/donorslog.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import FadeLoader from 'react-spinners/CircleLoader'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { toast } from "sonner";
import { logIn, saveToken } from "../../global/Slice";
const Base_Url = import.meta.env.VITE_BASEURL;



const Donorslogin = () => {
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);


  const nav = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${Base_Url}/login`, userLoginData);
      toast.success(res?.data?.message);
      dispatch(logIn(res?.data?.data))
      dispatch(saveToken(res?.data?.token))
      setTimeout(() => {
        nav("/");
      }, 1000);
      return res.message;
    } catch (err) {
      console.error("Login error:", err?.response?.damessageta || err);
      toast.error(
        err?.response?.data?.message || "Something went wrong during registration."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userLoginData.email || !userLoginData.password) {
      setRess("Please input all field")
      return
    }

    handleLogin(userLoginData, Base_Url, setIsLoading, nav);
  };



  return (
    <div className='donorloginwrapper'>
      <div className='donorloginmobilewrap'>
        <h2>LOG IN</h2>
      </div>
      <img src="images/Subtract.png" alt="" className='donorslogimage' />
      <div className='donorlogininfowrap'>
        <div className='donorloginlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='donorloginlogo' />
          </Link>
          <HiOutlineArrowCircleLeft size={50} onClick={()=> nav(-1)} />
        </div>
        <div className='donorlogininfo1'>
          <h2>LOG IN</h2>
          <div className='donorlogininputwrapper'>
            <p>EMAIL ADDRESS</p>
            <input type="email" placeholder='ENTER EMAIL' className='donorlogininput'
              value={userLoginData.email}
              onChange={(e) => setUserLoginData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div className='donorlogininputwrapper'>
            <p>ENTER PASSWORD</p>
            <input type="password" placeholder='PASSWORD' className='donorlogininput'
              value={userLoginData.password}
              onChange={(e) => setUserLoginData(prev => ({ ...prev, password: e.target.value }))}
            />
          </div>
          <button className='donorloginbtn' onClick={handleSubmit}>{isLoading ? <FadeLoader color="white" size={25} /> : "LOG-IN"}</button>
          <div className='donorloginforgotwrap'>
            <p onClick={() => nav("/donorssignup")} className='AuthRedirectionLinkWrap'>DON'T HAVE AN ACCOUNT? SIGNUP</p>
            <a onClick={() => nav("/forgotpassword")}>FORGOT PASSWORD</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donorslogin