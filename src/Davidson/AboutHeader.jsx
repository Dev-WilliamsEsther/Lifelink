import React from "react";

const AboutHeader = () => {
  return (
    <>
      <div className="hilight-text">
        <div style={{ marginTop: "20px" }}>
          <span className="highlight">About </span>
          <span
            style={{
              fontWeight: "700",
              fontFamily: "poppins",
              fontSize: "36px",
            }}
          >
            us
          </span>
        </div>

        <div className="text-div">
          <h3>
            Nigeria face a critical blood shortage, endangering countless lives.
            <br />
            LifeLink connects donors hospitals and blood banks, ensuring a
            <br />
            steady, life-saving blood supply.
          </h3>
        </div>
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
    </>
  );
};

export default AboutHeader;
