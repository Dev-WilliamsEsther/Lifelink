import React, { useEffect, useState } from 'react';
import './settingsPage.css';
import { donorSettings } from '../../global/Api';

const Base_Url = import.meta.env.VITE_BASEURL;

const SettingsPage = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    gender: '',
    location: '',
    phoneNumber: '',
    email: '',
    age: '',
    bloodType: ''
  });

  console.log(userData.phoneNumber)
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [ress, setRess] = useState("")
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("userData"))?.data?.token;


  const handleUpdateProfile =  () => {
    donorSettings(Base_Url, token, userData, setLoading, setRess)
  };

  


  return (
    <div className='SettingsPageWrapper'>
      <h1>Profile Settings</h1>

      <div className="SettingssideWrapper">
        <div className="profilePageProflePicWrapper">
          <div className="settingsProfilePicture">
            <img src="/images/default profile pic.jpg"/>
          </div>
          <button>Upload New Photo</button>
          <button>Delete</button>
        </div>

        <div className="settingsInputsWrapper">
          <label>Full Name</label>
          <input type="text" className='settingInputs'
            placeholder='Full Name'
            value={userData.fullName}
            onChange={e => setUserData({ ...userData, fullName: e.target.value })}
          />
          <label>Gender</label>
          <input type="text" className='settingInputs'
            placeholder='Male/Female'
            value={userData.gender}
            onChange={e => setUserData({ ...userData, gender: e.target.value })}
          />
          <label>Location</label>
          <input type="text" className='settingInputs'
            placeholder='Location'
            value={userData.location}
            onChange={e => setUserData({ ...userData, location: e.target.value })}
          />
          <label>Phone Number</label>
          <input type="text" className='settingInputs'
            placeholder='+234***********'
            value={userData.phoneNumber}
            onChange={e => setUserData({ ...userData, phoneNumber: e.target.value })}
          />
          <label>Email</label>
          <input type="text" className='settingInputs'
            placeholder='Email'
            value={userData.email}
            onChange={e => setUserData({ ...userData, email: e.target.value })}
          />
          <label>Age</label>
          <input type="text" className='settingInputs'
            placeholder='Age'
            value={userData.age}
            onChange={e => setUserData({ ...userData, age: e.target.value })}
          />
          <label>Blood Type</label>
          <input type="text" className='settingInputs'
            placeholder='A+'
            value={userData.bloodType}
            onChange={e => setUserData({ ...userData, bloodType: e.target.value })}
          />

          <button className="editProfileButton" onClick={handleUpdateProfile} disabled={loading}>
            {loading ? "Updating..." : "Edit Profile"}
          </button>
        </div>
      </div>

      <div className="SettingsPasswordsideWrapper">
        <div className="settingsInputsWrapper">
          <label>Current Password</label>
          <input type="password" className='settingInputs'
            value={passwords.currentPassword}
            onChange={e => setPasswords({ ...passwords, currentPassword: e.target.value })}
          />
          <label>New Password</label>
          <input type="password" className='settingInputs'
            value={passwords.newPassword}
            onChange={e => setPasswords({ ...passwords, newPassword: e.target.value })}
          />
          <label>Confirm Password</label>
          <input type="password" className='settingInputs'
            value={passwords.confirmPassword}
            onChange={e => setPasswords({ ...passwords, confirmPassword: e.target.value })}
          />
          <button className="editProfileButton">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
