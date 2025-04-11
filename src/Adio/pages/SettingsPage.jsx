import React from 'react'
import './settingsPage.css'

const SettingsPage = () => {
  return (
    <div className='SettingsPageWrapper'>
      <h1>Profile Settings</h1>

      <div className="SettingssideWrapper">

        <div className="profilePageProflePicWrapper">
          <div className="profilePicture"></div>
          <button>UpLoad New Photo</button>
          <button>Delete</button>
        </div>

        <div className="settingsInputsWrapper">
          <label>Full Name</label>
          <input type="text" placeholder='Full Name' className='settingInputs'/>
          <label>Gender</label>
          <input type="text" placeholder='Gender' className='settingInputs'/>
          <label>Location</label>
          <input type="text" placeholder='Location' className='settingInputs'/>
          <label>Phone Number</label>
          <input type="text" placeholder='+234*********' className='settingInputs'/>
          <label>Email</label>
          <input type="text" placeholder='Example@gmail.com' className='settingInputs'/>
          <label>Blood Type</label>
          <input type="text" placeholder='A+' className='settingInputs'/>
          <button className="editProfileButton">Edit Profile</button>
        </div>
      </div>

      <div className="SettingsPasswordsideWrapper">
      <div className="settingsInputsWrapper">
          <label>Current Password</label>
          <input type="text" placeholder='Enter Password' className='settingInputs'/>
          <label>New Password</label>
          <input type="text" placeholder='Enter Password' className='settingInputs'/>
          <label>Confrm Password</label>
          <input type="text" placeholder='Enter Password' className='settingInputs'/>
          <button className="editProfileButton">Change Password</button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage