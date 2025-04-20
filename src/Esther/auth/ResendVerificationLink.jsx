import React, { useState } from 'react';
import '../styles/checkmail.css';
import axios from 'axios';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'; // Optional for back nav or redirect

const Base_Url = import.meta.env.VITE_BASEURL;

const ResendVerificationLink = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const resendVerificationLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const reverifyRes = await axios.post(`${Base_Url}/re-verify`, { email });
      console.log("Re-verification email sent:", reverifyRes);
      setStatus('success');
    } catch (err) {
      console.error("Error sending re-verification email:", err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resend-wrapper">
      <div className="resend-card">
        <img src="/mail-verify.svg" alt="Mail illustration" className="resend-img" />
        <HiOutlineArrowCircleLeft
          className="back-icon"
          onClick={() => nav(-1)}
          style={{ cursor: 'pointer', fontSize: '1.8rem', marginBottom: '10px' }}
        />

        <h1>Resend Verification Email</h1>
        <p>Enter the email address you used to sign up, and we’ll send you another verification link.</p>

        <form onSubmit={resendVerificationLink}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Resend Link"}
          </button>
        </form>

        {status === 'success' && <p className="success-text">Verification link sent! Check your email 📩</p>}
        {status === 'error' && <p className="error-text">Failed to send verification. Try again.</p>}
      </div>
    </div>
  );
};

export default ResendVerificationLink;
