import React, { useEffect, useState } from 'react';
import '../../Esther/styles/donorssign.css';
import { Link, useNavigate } from 'react-router';
import { handleSignup } from '../../global/Api';
import FadeLoader from 'react-spinners/CircleLoader'

const Base_Url = import.meta.env.VITE_BASEURL;

const Donorssignup = () => {
  const [click,setClick] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [ress, setRess] = useState("")
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    bloodType: "",
    location: "",
    age: 0,
  });

  console.log(userData)

  const [confirmPassword, setConfirmPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== confirmPassword) {
      setRess('Passwords do not match!');
      return;
    } if (!userData.fullName || !userData.email || !userData.location || !userData.password || !userData.age || !userData.bloodType) {
      setRess("Please input all field")
      return
    }

    handleSignup(userData, Base_Url, setIsLoading, setRess, nav);
  };






  return (
    <div className='donorsignwrapper'>
      <img src="images/Subtract.png" alt="" className='donorsignimage' />
      <div className='donsignmobilewrap'>
        <h1>CREATE AN ACCOUNT</h1>
        <p>REGISTER AS A DONOR</p>
      </div>
      <div className='donorsigninfowrap'>
        <div className='donorsignlogohold'>
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className='donorsignlogo' />
          </Link>
        </div>
        <div className='donorsigninfo1'>
          <h1>REGISTER AS A DONOR</h1>

          <div className='donorsigninputwrapper'>
            <p>NAME</p>
            <input
              type="text"
              placeholder='FULL NAME'
              className='donorssigninput'
              value={userData.fullName}
              onChange={(e) => setUserData((prev) => ({ ...prev, fullName: e.target.value }))}
            />
          </div>

          <div className='donorsigninputwrapper'>
            <p>AGE</p>
            <input
              type="number"
              placeholder='AGE'
              className='donorssigninput'
              value={userData.age}
              onChange={(e) => setUserData((prev) => ({ ...prev, age: parseInt(e.target.value) || 0 }))}
            />
          </div>

          <div className='donorsigninputwrapper'>
            <p>HOME ADDRESS</p>
            <input
              type="text"
              placeholder='ADDRESS'
              className='donorssigninput'
              value={userData.location}
              onChange={(e) => setUserData((prev) => ({ ...prev, location: e.target.value }))}
            />
          </div>

          <div className='donorsigninputwrapper'>
            <p>ENTER EMAIL</p>
            <input
              type="email"
              placeholder='ENTER EMAIL'
              className='donorssigninput'
              value={userData.email}
              onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div className='donorclick'>
            <p>HAVE YOU DONATED BEFORE?</p>
            <div className='donorclickinner'>
              <div className='clickinner'>
                <input type="radio" name='donatedBefore' />
                <p>YES</p>
              </div>
              <div className='clickinner'>
                <input type="radio" name='donatedBefore' />
                <p>NO</p>
              </div>
            </div>
          </div>

          <div className='donorbloodclick'>
            <h2>BLOOD GROUP</h2>
            <div className='bloodgrouphold'>
              {["A+", "B+", "AB+", "O-", "Unknown", "A-", "B-", "O+"].map((type) => (
                <p key={type}>
                  <input
                    type="radio"
                    name="bloodType"
                    value={type}
                    checked={userData.bloodType === type}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, bloodType: e.target.value }))
                    }
                  />
                  {type}
                </p>
              ))}
            </div>
          </div>

          <div className='donorsigninputwrapper'>
            <p>CREATE PASSWORD</p>
            <input
              type="password"
              className='donorssigninput'
              value={userData.password}
              onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
            />
          </div>

          <div className='donorsigninputwrapper'>
            <p>CONFIRM PASSWORD</p>
            <input
              type="password"
              className='donorssigninput'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className='checkboxwrapper'>
            <input type="checkbox" 
            isClick={click}
            onClick={()=>setClick(!click)}
            required={true} />
            <p>
              I agree to the{" "}
              <a href="" onClick={() => nav("/donorterms")} className='tandc'>
                TERMS AND CONDITIONS
              </a>
            </p>
          </div>

          <button className='donsignbtn'
          disabled={!click || isLoading}
          onClick={handleSubmit} 
          >
            {isLoading ? <FadeLoader color="white" size={25}/> : "REGISTER"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donorssignup;
