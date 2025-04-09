import React from "react";

const Team = () => {
  return (
    <div className="the-team-cnt">
      <span
        style={{ fontFamily: "poppins", fontSize: "36px", fontWeight: "700" }}
      >
        THE TEAM
      </span>
      <p>
        A group of young, passionate, and driven individuals <br /> dedicated to
        creating impactful solutions
      </p>

      <div className="team-card-one">
        <div className="first-team-card">
          <div className="team-card-img">
            <img src="" alt="Mary Patrick" />
          </div>
          <div className="team-card-title">
            <h2>Mary Patrick</h2>
            <p>Product Designer</p>
            <a href="#">Link</a>
          </div>
        </div>

        <div className="first-team-card">
          <div className="team-card-img">
            <img src="" alt="Sarah Emojoro" />
          </div>
          <div className="team-card-title">
            <h2>Sarah Emojoro</h2>
            <p>Product Designer</p>
            <a href="#">Link</a>
          </div>
        </div>

        <div className="first-team-card">
          <div className="team-card-img">
            <img src="/images/image(41).png" alt="Willams Esther" />
          </div>
          <div className="team-card-title">
            <h2>Willams Esther</h2>
            <p>Frontend</p>
            <a href="#">Link</a>
          </div>
        </div>

        <div className="first-team-card">
          <div className="team-card-img">
            <img src="" alt="Ekah Davidson" />
          </div>
          <div className="team-card-title">
            <h2>Ekah Davidson</h2>
            <p>Frontend</p>
            <a href="#">Link</a>
          </div>
        </div>

        <div className="first-team-card">
          <div className="team-card-img">
            <img src="/images/image(51).png" alt="Kingsley Adio" />
          </div>
          <div className="team-card-title">
            <h2>Kingsley Adio</h2>
            <p>Frontend</p>
            <a href="#">Link</a>
          </div>
        </div>

        <div className="first-team-card">
          <div className="team-card-img">
            <img src="/images/Frame 91.png" alt="Jeffery Abiuwa" />
          </div>
          <div className="team-card-title">
            <h2>Jeffery Abiuwa</h2>
            <p>Backend</p>
            <a href="#">Link</a>
          </div>
        </div>

        <div className="first-team-card">
          <div className="team-card-img">
            <img src="" alt="Obadina Azeez" />
          </div>
          <div className="team-card-title">
            <h2>Obadina Azeez</h2>
            <p>Backend</p>
            <a href="#">Link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
