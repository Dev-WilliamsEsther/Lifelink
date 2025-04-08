import React from "react";

const Achievement = () => {
  return (
    <div className="achivement-container">
      <span
        style={{ fontFamily: "poppins", fontSize: "36px", fontWeight: "700" }}
      >
        ACHIEVEMENTS
      </span>

      <div className="ach-img-cnt">
        <div className="ach-img1">
          <div className="sec-img-con">
            <img src="public/images/aboutpics.png" alt="" />
          </div>
          <div className="third-cnt">
            <h2>10,000 + Lives Saved</h2>
            <p>Connecting patients with life-saving blood donations.</p>
          </div>
        </div>

        <div className="ach-img1">
          <div className="sec-img-con">
            <img src="public/images/roundpics5.png" alt="" />
          </div>
          <div className="third-cnt">
            <h2>5,000 + Donors Registered</h2>
            <p>Making blood donation seamless and accessible.</p>
          </div>
        </div>

        <div className="ach-img1">
          <div className="sec-img-con">
            <img src="public/images/imagepics1.png" alt="" />
          </div>
          <div className="third-cnt">
            <h2>200 + Verified Hospitals & Blood Banks</h2>
            <p>Ensuring safe and reliable donations.</p>
          </div>
        </div>

        <div className="ach-img1">
          <div className="sec-img-con">
            <img src="public/images/aboutpics2.png" alt="" />
          </div>
          <div className="third-cnt">
            <h2>Real Time Blood Availability</h2>
            <p>Helping hospitals manage blood supply efficiently.</p>
          </div>
        </div>

        <div className="ach-img1">
          <div className="sec-img-con">
            <img src="public/images/aboutpics3.png" alt="" />
          </div>
          <div className="third-cnt">
            <h2>Donor Incentives Program Launched</h2>
            <p>Health checkups and wellness perks for donors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
