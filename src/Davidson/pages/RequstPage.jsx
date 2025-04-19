import { useState } from "react";
import "./requestpage.css";
import axios from "axios";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const RequestPage = () => {
  const bloodGroups = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const [dateString, setDateString] = useState("");
  const onChangeDate = (date) => {
    if (date) {
      setDateString(date.format("YYYY-MM-DD")); 
    } else {
      console.log(null); 
    }
  };

  const disabledDate = (current) => {
    
    return current && current < dayjs().endOf("day");
  };
  const [formData, setFormData] = useState({
    bloodGroup: "",
    numberOfPints: null,
    preferredDate: dateString,
    urgencyLevel: "",
    amount: null,
  });
  const userToken = useSelector((state) => state?.loggedInUser?.token);

  console.log(formData);

  const handleChange = (e) => {
    
    if (e.$isDayjsObject) {
      setFormData((prev) => ({
        ...prev,
        preferredDate: e.format("YYYY-MM-DD"),
      }));
    }
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.amount &&
      !formData.bloodGroup &&
      !formData.numberOfPints &&
      !formData.urgencyLevel &&
      !formData.preferredDate
    ) {
      return toast.error("Please fill a fields");
    }
 

    const url =
      "https://lifelink-7pau.onrender.com/api/v1/hospital/request-blood";
    toast.loading("Requesting...");
    try {
      const res = await axios.post(url, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });

      console.log(res);
      if (res.status === 201) {
        toast.dismiss()
        toast.success(res?.data?.message)

        setFormData({
          bloodGroup: "",
          numberOfPints: null,
          preferredDate: "",
          urgencyLevel: "",
          amount: null,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };
  5;
  return (
    <div className="request-form-container">
      <h2 className="form-title">Request Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="bloodGroup">Blood Group Needed</label>

          <select
            className="w-80 border h-10 border-gray-300 rounded text-sm text-gray-600 px-2"
            onChange={handleChange}
            id="bloodGroup"
            name="bloodGroup"
          >
            <option value="">Select your blood group</option>
            {bloodGroups.map((item, index) => (
              <option value={item.value}>{item?.value}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="pints">Number of Pints</label>
          <input
            type="number"
            id="pints"
            min={1}
            name="numberOfPints"
            placeholder="3 Pints of blood"
            value={formData.numberOfPints}
            onChange={handleChange}
            className="record-input w-80 border h-10 border-gray-300 rounded text-sm text-gray-600 px-2 pl-2"
          />
        </div>

        <div className="form-field">
          <label htmlFor="preferredDate">Preferred Date</label>
          <DatePicker
            onChange={handleChange}
            disabledDate={disabledDate}
            id="preferredDate"
            name="preferredDate"
            className="w-80 border h-10 border-gray-300 rounded text-sm text-gray-600 px-2 pl-2"
          />
        </div>

        <div className="form-field">
          <label htmlFor="urgencyLevel">Urgency Level</label>
          <select
            id="urgencyLevel"
            name="urgencyLevel"
            onChange={handleChange}
            className="w-80 border h-10 border-gray-300 rounded text-sm text-gray-600 px-2 pl-2"
          >
            <option value="">Select Low, Medium, High</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="amount">
            What amount are you willing to offer a donor?
          </label>
          <div className="currency-input">
            <span className="currency-symbol"></span>
            <input
              type="number"
              id="amount"
              name="amount"
              min={0}
              placeholder="₦0000"
              value={formData.amount}
              onChange={handleChange}
              className="record-input w-80 border h-10 border-gray-300 rounded text-sm text-gray-600 px-2 pl-2"
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
