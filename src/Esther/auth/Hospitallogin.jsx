import React, { useState } from "react";
import "../../Esther/styles/hospitalslog.css";
import { Link, useNavigate } from "react-router-dom";
import FadeLoader from "react-spinners/CircleLoader";
import {useDispatch} from 'react-redux'
import { logIn } from "../../global/Slice";
import axios from "axios";

const Base_Url = import.meta.env.VITE_BASEURL;

const Hospitallogin = () => {
  const nav = useNavigate();
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [hospitalLoginData, setHospitalLoginData] = useState({
    email: "",
    password: ""
  })

  console.log(hospitalLoginData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hospitalLoginData.email || !hospitalLoginData.password) {
      setRess("please fill all field");
      return;
    }

      setIsLoading(true);
      try {
        const res = await axios.post(
          `${Base_Url}/hospital/login`,
          hospitalLoginData
        );
    
        const message = res?.data?.data?.message || "Login successful";
        console.log("Login successful:", message);
        console.log("hospital ress", res)
        dispatch(logIn(res?.data))
    
        setTimeout(() => {
          nav("/dashboard");
        }, 1000);
    
        return message;
      } catch (err) {
        const errorMsg =
          err?.response?.data?.message || "Something went wrong during login.";
        console.error("Login error:", errorMsg);
        console.log(err?.response?.data?.message )
    
      } finally {
        setIsLoading(false);
      }
    
  };
  return (
    <div className="hosloginwrapper">
      <div className="hoslogmobilewrap">
        <h2>LOG IN</h2>
      </div>
      <div className="hoslogininfowrap">
        <div className="hosloginlogohold">
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className="hosloginlogo" />
          </Link>
        </div>
        <div className="hoslogininfo1">
          <h2>LOG IN</h2>
          <div className="hoslogininputwrapper">
            <p>EMAIL ADDRESS</p>
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="hoslogininput"
              value={hospitalLoginData.email}
              onChange={(e) =>
                setHospitalLoginData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="hoslogininputwrapper">
            <p>ENTER PASSWORD</p>
            <input type="password" placeholder='PASSWORD' className='hoslogininput' 
            value={hospitalLoginData.password}
            onChange={(e)=> setHospitalLoginData(prev => ({...prev, password: e.target.value}))}/>
          </div>

          <button className="hosloginbtn" onClick={handleSubmit}>
            {isLoading ? <FadeLoader color="white" size={25} /> : "LOG-IN"}
          </button>
          <div className="hosloginforgotwrap">
            <p onClick={() => nav("/hospitalsignup")}>
              DON'T HAVE AN ACCOUNT? SIGNUP
            </p>
            <p onClick={()=> nav('/forgotpassword')}>FORGOT PASSWORD</p>
          </div>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className="hospiloginimage" />
    </div>
  );
};

export default Hospitallogin;