import React from "react";
import "./subscribe.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";

const Base_Url = import.meta.env.VITE_BASEURL;

const Subscribe = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.loggedInUser);

  const handleSubscribe = async () => {
    try {
      const res = await axios.post(
        `${Base_Url}/initialize`,
        {
          email: user?.email || "Hospital@example.com",
          name: user?.fullName || "Hospital User",
          amount: 10000,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Redirecting to payment...");
      if (res.data?.payment_url) {
        window.location.href = res.data.payment_url;
      }
    } catch (err) {
      console.error("Subscription failed:", err);
      toast.error(err?.message || "Failed to initialize subscription.");
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
      </div>
      <div>
        <button className="subscribe-button" onClick={handleSubscribe}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
