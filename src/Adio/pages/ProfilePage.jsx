
import React from 'react'
import './profilePage.css'
import { MdCloudUpload } from "react-icons/md";

const ProfilePage = () => {
  return (
    <div className='ProfilePageWRapper'>
      <h1>Profile</h1>

      <div className="profilePageProfileAndNameWrapper">
        <div className="profilePageProfilePic">
          <img src="/images/default profile pic.jpg" alt="profile Picture" />
          <MdCloudUpload className='ProfileUploadIcon'/>
        </div>

        <div className="profileNameWrapper">
         <h3>Mary Patrick</h3>
         <p>A+</p>
        </div>
      </div>
      
      <div className="profilePageInfosCards">
        <h2>Personal Information</h2>
        <div className="infosWRapper">
          <p><b>Full Name</b> <br /> Mary Patrick</p>
          <p><b>Age</b> <br /> 25</p>
          <p><b>Blood Group</b> <br /> A+</p>
          <p><b>Gender</b> <br /> Female</p>
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Contact Information</h2>
        <div className="infosWRapper">
          <p><b>Email Address</b> <br /> Mayriepatrick@gmail.com</p>
          <p><b>Phone Number</b> <br /> 09013717091</p>
          <p><b>Home Address</b> <br /> Oja Orile, Lagos</p>
        </div>
      </div>

      <button className="editProfileButton">Edit Profile</button>

    </div>
  )
}

export default ProfilePage