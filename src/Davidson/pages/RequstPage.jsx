import { useState } from "react";
import "./requestpage.css";

const RequestPage = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    pints: "",
    preferredDate: "",
    urgencyLevel: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
          />
        </div>

        <div className="form-field">
          <label htmlFor="pints">Number of Pints</label>
          <input
            type="text"
            id="pints"
            name="pints"
            placeholder="3 Pints of blood"
            value={formData.pints}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="preferredDate">Preferred Date</label>
          <input
            type="text"
            id="preferredDate"
            name="preferredDate"
            placeholder="May 18, 2023"
            value={formData.preferredDate}
            onChange={handleChange}
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
