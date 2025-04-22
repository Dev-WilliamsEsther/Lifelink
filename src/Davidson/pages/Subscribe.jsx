import React, { useState } from "react";
import "./subscribe.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import FadeLoader from 'react-spinners/CircleLoader'


const Base_Url = import.meta.env.VITE_BASEURL;

const Subscribe = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.loggedInUser);
  const [loadState, setLoadState] = useState(false)

  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans = [
    { label: "Monthly", value: "monthly", amount: 10000 },
    { label: "Half-Year", value: "half-year", amount: 50000 },
    { label: "Yearly", value: "yearly", amount: 90000 },
  ];

  const handleSubscribe = async () => {
    const chosen = plans.find((plan) => plan.value === selectedPlan);
    if (!chosen) {
      toast.error("Please select a plan");
      return;
    }
    setLoadState(true)
    try {
      const res = await axios.post(
        `${Base_Url}/initialize`,
        {
          email: user?.email || "Hospital@example.com",
          name: user?.fullName || "Hospital User",
          plan: chosen.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoadState(false)
      toast.success("Redirecting to payment...");
      if (res.data?.payment_url) {
        window.location.href = res.data.payment_url;
      }
    } catch (err) {
      console.error("Subscription failed:", err);
      toast.error(err?.message || "Failed to initialize subscription.");
      setLoadState(false)
    }
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-inner-container">
        <div className="welcome">
          <h1>Welcome to LifeLink for Hospitals!</h1>
        </div>

        <div className="img-cnt">
          <img src="/images/subscribe.png" alt="LifeLink Illustration" />
        </div>

        <p>
          You need to subscribe to start requesting blood, viewing, & managing
          appointments.
        </p>

        <div className="plan-selection">
          <h3>Select a Plan:</h3>
          <div className="plan-cards">
            {plans.map((plan) => (
              <div
                key={plan.value}
                className={`plan-card ${
                  selectedPlan === plan.value ? "selected" : ""
                }`}
                onClick={() => setSelectedPlan(plan.value)}
              >
                <h4>{plan.label}</h4>
                <p>₦{plan.amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button className="subscribe-button" onClick={handleSubscribe}>
          {loadState? <FadeLoader color="white" size={25}/> : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
