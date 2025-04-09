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

        <div className="settingsInputsWrapper"></div>
      </div>

      <div className="SettingsPasswordsideWrapper"></div>
    </div>
  )
}

export default SettingsPage
