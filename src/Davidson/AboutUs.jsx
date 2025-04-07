import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="aboutus-cnt-body">
      <div className="main-cnt">
        <div className="about-content">
          <span className="highlight">About</span>
          <span
            style={{
              fontWeight: "700",
              fontFamily: "poppins",
              fontSize: "36px",
            }}
          >
            us
          </span>
          <div className="text-div">
            <h3>
              Nigeria face a critical blood shortage, endangering countless
              lives.
              <br />
              LifeLink connects donors hospitals and blood banks, ensuring a
              <br />
              steady, life-saving blood supply.
            </h3>
          </div>
          <div className="image-div">
            <div className="img1">
              <img src="" alt="" />
            </div>
            <div className="img2">
              <img src="" alt="" />
            </div>
            <div className="img3">
              <img src="" alt="" />
            </div>
            <div className="img4">
              <img src="" alt="" />
            </div>
          </div>
          <div className="text-div2-cnt">
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "100%",
                marginTop: "50px",
              }}
            >
              Bridging the Blood Supply Gap
            </span>
            <div className="bridging">
              <p>
                We streamline the process with real-time blood availability
                updates, transparency, and <br />
                exclusive benefits like free health checkups. For hospitals and
                blood banks, we provide <br /> an efficient way to request and
                manage blood supplies. By leveraging technology, we <br />
                create a trusted network where donate is easier, faster, and
                more impactful because <br />
                every drop saves a life.
              </p>
            </div>
          </div>
          <div className="mission-div">
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "100%",
              }}
            >
              MISSION & VISSION
            </span>
            <div className="text-div3-cnt">
              <div className="text-div3">
                <h3>
                  A future where every patient in need of blood <br />
                  has instant access to a willing donor or a <br />
                  nearby blood bank, ensuring no life is lost due <br />
                  to a lack of blood availability.
                </h3>
              </div>
              <div className="text-div4">
                <h3>
                  To bridge the gap between blood donors, <br />
                  hospitals, and blood bank by providing a <br />
                  seamless platform that encourages and <br />
                  tracks blood donations, ultimately saving <br />
                  lives.
                </h3>
              </div>
            </div>
          </div>
          <div className="achivement-container">
            <span
              style={{
                fontFamily: "poppins",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "100%",
              }}
            >
              ACHIVEMENT
            </span>
            <div className="ach-img-cnt">
              <div className="ach-img1">
                <img src="" alt="" />
                <div className="sec-img-con"></div>
                <div className="third-cnt">
                  <h2>10,000 + Lives Saved</h2>
                  <p>Connecting patients with life-savings blood donations.</p>
                </div>
              </div>
              <div className="ach-img1">
                <img src="" alt="" />
                <div className="sec-img-con"></div>
                <div className="third-cnt">
                  <h2>5,000 + Domors Registerd</h2>
                  <p>Making blood donation seamless and assisable.</p>
                </div>
              </div>
              <div className="ach-img1">
                <img src="" alt="" />
                <div className="sec-img-con"></div>
                <div className="third-cnt">
                  <h2>
                    200 + Verified Hospitals & <br />
                    Blood Banks
                  </h2>
                  <p>
                    Ensuring safe and reliable <br />
                    donations.
                  </p>
                </div>
              </div>
              <div className="ach-img1">
                <img src="" alt="" />
                <div className="sec-img-con"></div>
                <div className="third-cnt">
                  <h2>Real Time Blood Availability</h2>
                  <p>
                    Helping hospitals manage and <br />
                    update their blood supply efficiently.
                  </p>
                </div>
              </div>
              <div className="ach-img1">
                <img src="" alt="" />
                <div className="sec-img-con"></div>
                <div className="third-cnt">
                  <h2>
                    Donor incentives <br /> Program Launched
                  </h2>
                  <p>
                    Encourage more donors
                    <br /> through health checkups <br />
                    and wellness perks.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
