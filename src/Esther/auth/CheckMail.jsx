import axios from 'axios';
import '../styles/checkmail.css';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';


const Base_Url = import.meta.env.VITE_BASEURL

export default function CheckMail() {
const nav = useNavigate()
  return (
   <>  <div className="checkmail-wrapper">
      <div className="checkmail-card">
        <img src="/images/checkmail.png" alt="Check mail" className="mail-img" />

        <h1>Verification Link Sent</h1>
        <p>
          You’re one step away from joining our life-saving community 🩸.  
          Please check your email and click the verification link to continue.
        </p>

        <button onClick={() => (window.location.href = 'https://mail.google.com')}>
          Open Email App
        </button>

        <p className="resend-text">
          Didn’t get it? <span className="resend-link" onClick={()=> nav('/resendVerificationMail')}>Resend Email</span>
        </p>
      </div>
    </div> </>
  );
}
