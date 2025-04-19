import React, { useEffect, useState } from 'react';
import '../styles/verifyMail.css';
import { useNavigate, useParams } from 'react-router';

export default function VerifyMail() {
  const [status, setStatus] = useState('loading');

  const {token} = useParams()

  const verifyEmail = async()=>{
    try{
    }catch(err){
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('success');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const nav = useNavigate()

  return (
    <div className="verify-container">
      <div className="verify-card">
        <img src="/images/logo.png" alt="Logo" className="Verifinglogo" />

        {status === 'loading' && (
          <>
            <div className="spinner"></div>
            <h2>Verifying your email...</h2>
            <p>Please wait while we confirm your email address.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="checkmark">&#10004;</div>
            <h2>Email Verified!</h2>
            <p>Your email has been successfully verified.</p>
            <button onClick={()=> nav('/login')}>Go to Login</button>
          </>
        )}
      </div>
    </div>
  );
}
