import { useState } from "react";
import "./requestpage.css";
import axios from "axios";

const RequestPage = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    numberOfPints: null,
    preferredDate: "",
    urgencyLevel: "",
    amount: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData?.data?.token;

    const url =
      "https://lifelink-7pau.onrender.com/api/v1/hospital/request-blood";

    try {
      const res = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Request submitted:", res);
      if (res.status === 201) {
        alert("Blood request successfully posted!");

        setFormData({
          bloodGroup: "",
          numberOfPints: null,
          preferredDate: "",
          urgencyLevel: "",
          amount: null,
        });
      }
    } catch (err) {
      console.error(
        "Error submitting request:",
        err.response?.data || err.message
      );
      alert("Failed to submit request. Please try again.");
    }
  };
  5;
  return (
    <div className="request-form-container">
      <h2 className="form-title">Request Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="bloodGroup">Blood Group Needed</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            placeholder="A+, A-, B+, B-, AB+, AB-, O+, O-"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="record-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="pints">Number of Pints</label>
          <input
            type="number"
            id="pints"
            name="numberOfPints"
            placeholder="3 Pints of blood"
            value={formData.numberOfPints}
            onChange={handleChange}
            className="record-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="preferredDate">Preferred Date</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            placeholder="May 18, 2025"
            value={formData.preferredDate}
            onChange={handleChange}
            className="record-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="urgencyLevel">Urgency Level</label>
          <input
            type="text"
            id="urgencyLevel"
            name="urgencyLevel"
            placeholder="Low, Medium, High"
            value={formData.urgencyLevel}
            onChange={handleChange}
            className="record-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="amount">
            What amount are you willing to offer a donor?
          </label>
          <div className="currency-input">
            <span className="currency-symbol"></span>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="₦0000"
              value={formData.amount}
              onChange={handleChange}
              className="record-input"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Post Request
        </button>
      </form>
    </div>
  );
};

export default RequestPage;
