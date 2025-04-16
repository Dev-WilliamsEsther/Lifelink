import React, { useState } from 'react'
import '../../Esther/styles/hospitalsign.css'
import { Link, useNavigate } from 'react-router-dom'
import FadeLoader from 'react-spinners/CircleLoader'
import { handleHospitalSignup } from '../../global/Api';
import NotificationWrap from '../../components/notificatonPopWrap/NotificationWrap';

const Base_Url = import.meta.env.VITE_BASEURL;

const Hospitalsignup = () => {
  const [click,setClick] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [ress, setRess] = useState("")
  const nav = useNavigate();
  
  
  
  
  const [confirmPassword,setConfirmPassword] = useState()
  const [hospitalInput, setHospitalInput] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
    city: "",
    phone: "",
    role: "hospital",
  });

  const handleSubmit =()=>{
    if(hospitalInput.password !== confirmPassword) {
      setRess('Oga put wetin correct jor');
      return;
    }if( !hospitalInput.fullName || !hospitalInput.email || !hospitalInput.password || !hospitalInput.location || !hospitalInput.city || !hospitalInput.phone) {
      setRess('please input all field!')
      return
    }
    handleHospitalSignup(hospitalInput, Base_Url, setIsLoading, setRess, nav)
  }

  return (
    <div className='hospitalsignwrapper'>
      <NotificationWrap>{ress}</NotificationWrap>
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
            <input type="text" placeholder='FULL NAME' className='hossigninput' 
            value={hospitalInput.fullName}
            onChange={(e)=>setHospitalInput((prev) => ({ ...prev, fullName: e.target.value }))}
            />
          </div>
          <div className='hossigninputwrapper'>
            <p>OFFICE ADDRESS</p>
            <input type="text" placeholder='ADDRESS' className='hossigninput'
            value={hospitalInput.location} 
            onChange={(e)=>setHospitalInput((prev)=> ({...prev,location:e.target.value}))} 
            />
          </div>
          <div className='hossigninputwrapper'>
            <p>CITY</p>
            <input type="text" placeholder='ADDRESS' className='hossigninput' 
            value={hospitalInput.city}
            onChange={(e)=>setHospitalInput((prev)=> ({...prev, city:e.target.value}))}
            />
          </div>
          <div className='hossigninputwrapper'>
            <p>EMAIL</p>
            <input type="email" placeholder='ENTER EMAIL...' className='hossigninput'
            value={hospitalInput.email}
            onChange={(e)=>setHospitalInput((prev)=> ({...prev,email:e.target.value}))}
            />
          </div>
          <div className='hossigninputwrapper'>
            <p>PHONE NUMBER</p>
            <input type="text" placeholder='' className='hossigninput' 
            value={hospitalInput.phone}
            onChange={(e)=>setHospitalInput((prev)=> ({...prev, phone:e.target.value}))}
            />
          </div>
          <div className='hossigninputwrapper'>
            <p>CREATE PASSWORD</p>
            <input type="password" placeholder='' className='hossigninput'
            value={hospitalInput.password}
            onChange={(e)=>setHospitalInput((prev)=> ({...prev,password:e.target.value}))}
            />
          </div>
          <div className='hossigninputwrapper'>
            <p>CONFIRM PASSWORD</p>
            <input type="password" placeholder='' className='hossigninput'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='checkboxwrapper'>
            <input type="checkbox" 
            onClick={()=>setClick(!click)}
            />
            
            <p>I agree to the <a href="" onClick={()=>nav("/hospiterms")} className='tandc'>TERMS AND CONDITIONS</a></p>
          </div>
          <button className='hospibtn'
          onClick={handleSubmit}
          disabled={!click || isLoading}
          >
            {isLoading ? <FadeLoader color="white"/> : "REGISTER"}
          </button>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className='hospisignimage'/>
    </div>
  )
}

export default Hospitalsignup