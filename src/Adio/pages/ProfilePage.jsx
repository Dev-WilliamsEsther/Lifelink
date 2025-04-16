
import React, { useContext } from 'react'
import './profilePage.css'
import { MdCloudUpload } from "react-icons/md";
import { useUserInfo } from '../../global/UseUser';
import { useNavigate } from 'react-router';


const ProfilePage = () => {
  const { userInfo } = useUserInfo();
  const nav = useNavigate()

  console.log(userInfo)

  return (
    <div className='ProfilePageWRapper'>
      <h1>Profile</h1>

      <div className="profilePageProfileAndNameWrapper">
        <div className="profilePageProfilePic">
          <img src="/images/default profile pic.jpg" alt="profile Picture" />
          <MdCloudUpload className='ProfileUploadIcon'/>
        </div>

        <div className="profileNameWrapper">
         <h3>{userInfo?.data?.message?.fullName}</h3>
         <p>{userInfo?.data?.message?.bloodType}</p>
        </div>
      </div>
      
      <div className="profilePageInfosCards">
        <h2>Personal Information</h2>
        <div className="infosWRapper">
          <p><b>Full Name</b> <br /> {userInfo?.data?.message?.fullName}</p>
          <p><b>Age</b> <br /> {userInfo?.data?.message?.age}</p>
          <p><b>Blood Group</b> <br /> {userInfo?.data?.message?.bloodType}</p>
          <p><b>Gender</b> <br /> Female</p>
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Contact Information</h2>
        <div className="infosWRapper">
          <p><b>Email Address</b> <br /> {userInfo?.data?.message?.email}</p>
          <p><b>Phone Number</b> <br /> 09013717091</p>
          <p><b>Home Address</b> <br /> {userInfo?.data?.message?.location}</p>
        </div>
      </div>

      <button className="editProfileButton" onClick={()=> nav('/dashboard/settings')}>Edit Profile</button>

    </div>
  )
}

export default ProfilePage