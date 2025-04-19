import React, { useState } from 'react'
import '../../Esther/styles/hospitalsign.css'
import { Link, useNavigate } from 'react-router-dom'
import FadeLoader from 'react-spinners/CircleLoader'
// import { handleHospitalSignup } from '../../global/Api';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { toast } from 'sonner';
import axios from 'axios';


const Base_Url = import.meta.env.VITE_BASEURL;

const Hospitalsignup = () => {
  const [click,setClick] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [hospitalRess, setHospitalRess] = useState("")
  const nav = useNavigate();
  
  
  
  const [showPassword1, setShowPassword1] = useState(true)
  const [showPassword2, setShowPassword2] = useState(true)
  const [confirmPassword,setConfirmPassword] = useState("")
  const [hospitalInput, setHospitalInput] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
    city: "",
    phone: "",
    role: "hospital",
  });

  const handleSubmit = async()=>{
    console.log("first")
    if(hospitalInput.password !== confirmPassword) {
      // setRess('Password do not match');
      return toast.error('please input all fields');
    }if( !hospitalInput.fullName || !hospitalInput.email || !hospitalInput.password || !hospitalInput.location || !hospitalInput.city || !hospitalInput.phone) {
      // setRess('please input all field!')
      return toast.error('please input all fields')
    }
   
      setIsLoading(true);
      try {
        const res = await axios.post(`${Base_Url}/hospital/register`, hospitalInput);
        // console.log("signup successful:", res?.data?.message);
        // console.log(res);
        // setHospitalRess(res?.data?.message);
        // setTimeout(() => {
        //   nav("/hospitallogin");
        // }, 1000);
        if(res?.data?.status ===201) toast.success(res?.data?.message)
        return res.data.message;
      } catch (err) {
        // console.error("Login error:", err?.response?.damessageta || err);
        console.log(err)
        toast.error(err?.response?.data?.message)
      } finally {
        setIsLoading(false);
      }
    
  }

  return (
    <div className='hospitalsignwrapper'>
      <div className='hossignmobilewrap'>
        <h1>CREATE AN ACCOUNT</h1>
        <p>REGISTER AS HOSPITAL/ <br /> BLOODBANK</p>
      </div>
      <div className='hospisigninfowrap'>
        <div className='hospisignlogohold'>
        <HiOutlineArrowCircleLeft size={50} onClick={()=> nav(-1)} />
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
            <input type="text" placeholder='+234**********' className='hossigninput' 
            value={hospitalInput.phone}
            onChange={(e)=>setHospitalInput((prev)=> ({...prev, phone:e.target.value}))}
            />
          </div>
          <div className='hossigninputwrapper'>
            <p>CREATE PASSWORD</p>
            <div className="inputAndIcon">
            <input
              type={showPassword1? "password" : "text"}
              className='donorssignpasswordinput'
              placeholder='Confirm Password'
              value={hospitalInput.password}
              onChange={(e) => setHospitalInput(prev => ({...prev, password: e.target.value}))}
            />
            {showPassword1? <LuEyeClosed onClick={()=> setShowPassword1(false)}/> : <LuEye onClick={()=> setShowPassword1(true)}/>}
            </div>
          </div>
          <div className='hossigninputwrapper'>
            <p>CONFIRM PASSWORD</p>
            <div className="inputAndIcon">
            <input
              type={showPassword2? "password" : "text"}
              className='donorssignpasswordinput'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {showPassword2? <LuEyeClosed onClick={()=> setShowPassword2(false)}/> : <LuEye onClick={()=> setShowPassword2(true)}/>}
            </div>
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
            {isLoading ? <FadeLoader color="white" size={25}/> : "REGISTER"}
          </button>
          <div className='hosloginforgotwrap'>
            <p onClick={()=>nav("/hospitallogin")}>ALREADY HAVE AN ACCOUNT?  LOGIN</p>
          </div>
        </div>
      </div>
      <img src="images/Subtract.png" alt="" className='hospisignimage'/>
    </div>
  )
}

export default Hospitalsignup