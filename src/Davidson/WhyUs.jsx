import React from "react";

const WhyUs = () => {
  return (
    <div className="what-makes-us-cnt">
      <span
        style={{ fontFamily: "poppins", fontSize: "36px", fontWeight: "700" }}
      >
        WHAT MAKES US THE BEST
      </span>

      <div className="step-box-cnt">
        <div className="step-box">
          <div className="icon">
            <img src="/images/Group.png" alt="" />
          </div>
          <h3>Verified & Trusted Network</h3>
          <p>We partner only with accredited hospital and blood banks...</p>
        </div>

        <div className="step-box">
          <div className="icon">
            <img src="/images/Group.png" alt="" />
          </div>
          <h3>Real Time Donor Availability</h3>
          <p>Hospitals can instantly see where donors are available...</p>
        </div>

        <div className="step-box">
          <div className="icon">
            <img src="/images/Group.png" alt="" />
          </div>
          <h3>Seamless Donor Experience</h3>
          <p>From easy registration to tracking donation history...</p>
        </div>

        <div className="step-box">
          <div className="icon">
            <img src="/images/Group.png" alt="" />
          </div>
          <h3>Incentives for Donors</h3>
          <p>Health checkups & wellness perks for donors.</p>
        </div>

        <div className="step-box">
          <div className="icon">
            <img src="/images/Group.png" alt="" />
          </div>
          <h3>Impact-Driven Mission</h3>
          <p>Every donation directly saves lives...</p>
        </div>
      </div>

      <div className="btn">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#C0392B",
            fontSize: "20px",
            fontWeight: "600",
            color: "#FFFFFF",
            borderRadius: "20px",
            border: "none",
          }}
        >
          Get Listed
        </button>
      </div>
    </div>
  );
};

export default WhyUs;
