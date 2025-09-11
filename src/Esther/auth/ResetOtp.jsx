import React, { useState } from "react";
import "../../Esther/styles/resetotp.css";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const Base_Url = import.meta.env.VITE_BASEURL;

const ResetOtp = () => {
  const { email } = useParams();
  const [formData, setFormData] = useState({
    email: email,
    otp: "",
    newPassword: "",
  });
  const nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Base_Url}/resetPassword`, formData);
      console.log(response?.data?.status);
      if (response?.data?.status) {
        toast.success(response?.data?.message);
        setTimeout(() => {
          nav("/login");
        }, 4000);
      }
    } catch (error) {
      console.log(error?.response?.data?.status);
      if (!error?.response?.data?.status) {
        return toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <div className="otp-container">
      <div>
        <img src="images/Subtract.png" alt="" className="resetotpimage" />

        <h2 className="reset">RESET YOUR PASSWORD</h2>
      </div>
      <form onSubmit={handleSubmit} className="otp-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your emale"
            required
            disabled={true}
          />
        </div>
        <div className="form-group">
          <label>OTP</label>
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetOtp;
