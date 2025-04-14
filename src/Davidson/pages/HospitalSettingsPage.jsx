import React from "react";
import "./hospitalsettingspage.css";
import { TiCloudStorage } from "react-icons/ti";

const HospitalSettingsPage = () => {
  return (
    <div className="HospitalSettingsPageWrapper">
      <h1>Settings</h1>

      <div className="HospitalSettingssideWrapper">
        <div className="HospitalSettingsprofilePageProflePicWrapper">
          <div className="HospitalprofilePicture">
            <TiCloudStorage size={24} className="UploadIcon" />
          </div>

          <button>Delete</button>
        </div>

        <div className="HospitalSettingsInputsWrapper">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="hospitalsettingInputs"
          />
          <label>Gender</label>
          <input
            type="text"
            placeholder="Gender"
            className="hospitalsettingInputs"
          />
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            className="hospitalsettingInputs"
          />
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="+234*********"
            className="hospitalsettingInputs"
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Example@gmail.com"
            className="hospitalsettingInputs"
          />
          <label>Blood Type</label>
          <input
            type="text"
            placeholder="A+"
            className="hospitalsettingInputs"
          />
        </div>
        <button className="editProfileButton">Edit Profile</button>
      </div>

      <div className="HospitalSettingsPasswordsideWrapper">
        <div className="HospitalSettingsInputsWrapper">
          <label>Current Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            className="hospitalsettingInputs"
          />
          <label>New Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            className="hospitalsettingInputs"
          />
          <label>Confrm Password</label>
          <input
            type="text"
            placeholder="Enter Password"
            className="hospitalsettingInputs"
          />
        </div>
        <button className="editProfileButton">Change Password</button>
      </div>
    </div>
  );
};

export default HospitalSettingsPage;
