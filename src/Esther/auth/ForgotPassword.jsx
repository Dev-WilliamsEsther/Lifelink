import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../Esther/styles/donorslog.css';
import FadeLoader from 'react-spinners/CircleLoader';
import { toast } from 'sonner';

const Base_Url = import.meta.env.VITE_BASEURL;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loadState, setLoadState] = useState(false)
  const nav = useNavigate();

  const handleForgotPassword = async () => {
    setLoadState(true)
    try {
      const res = await axios.post(`${Base_Url}/forgotPassword`, { email });
      console.log(res);
      toast.success(res?.data?.message)
      setLoadState(false)
      return
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message)
      setLoadState(false)
    }
  };

  return (
    <div className="donorloginwrapper">
      <div className="donorloginmobilewrap"></div>

      <img src="images/Subtract.png" alt="" className="donorslogimage" />

      <div className="donorlogininfowrap">
        <div className="donorloginlogohold">
          <Link to="/">
            <img src="images/logo.png" alt="Logo" className="donorloginlogo" />
          </Link>
        </div>

        <div className="donorlogininfo1">
          <h2>INPUT YOUR MAIL</h2>

          <div className="donorlogininputwrapper">
            <p>EMAIL ADDRESS</p>
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="donorlogininput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="donorloginbtn" onClick={handleForgotPassword}>
            {loadState? <FadeLoader color='white' size={25}/> : "Send Link"}
          </button>

          <div className="donorloginforgotwrap">
            <p
              onClick={() => nav('/donorssignup')}
              className="AuthRedirectionLinkWrap"
              style={{ cursor: 'pointer' }}
            >
              <a>DON'T HAVE AN ACCOUNT? SIGNUP</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
