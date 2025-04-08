import React from "react";

const MissionVision = () => {
  return (
    <div className="mission-div">
      <span
        style={{
          fontFamily: "poppins",
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "100%",
        }}
      >
        MISSION & VISION
      </span>
      <div className="text-div3-cnt">
        <div className="text-div3">
          <h3>
            A future where every patient in need of blood <br />
            has instant access to a willing donor or a nearby blood bank...
          </h3>
        </div>
        <div className="text-div4">
          <h3>
            To bridge the gap between blood donors, hospitals, and blood banks
            <br />
            by providing a seamless platform that encourages and tracks
            donations...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
