
import React, { useContext } from 'react'
import './profilePage.css'
import { MdCloudUpload } from "react-icons/md";
import { useUser } from '../../global/UseUser';
import { useNavigate } from 'react-router';


const ProfilePage = () => {
  const { user } = useUser();
  const nav = useNavigate()

  return (
    <div className='ProfilePageWRapper'>
      <h1>Profile</h1>

      <div className="profilePageProfileAndNameWrapper">
        <div className="profilePageProfilePic">
          <img src="/images/default profile pic.jpg" alt="profile Picture" />
          <MdCloudUpload className='ProfileUploadIcon'/>
        </div>

        <div className="profileNameWrapper">
         <h3>{user?.fullName}</h3>
         <p>{user?.bloodType}</p>
        </div>
      </div>
      
      <div className="profilePageInfosCards">
        <h2>Personal Information</h2>
        <div className="infosWRapper">
          <p><b>Full Name</b> <br /> {user?.fullName}</p>
          <p><b>Age</b> <br /> {user?.age}</p>
          <p><b>Blood Group</b> <br /> {user?.bloodType}</p>
          <p><b>Gender</b> <br /> Female</p>
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Contact Information</h2>
        <div className="infosWRapper">
          <p><b>Email Address</b> <br /> {user?.email}</p>
          <p><b>Phone Number</b> <br /> 09013717091</p>
          <p><b>Home Address</b> <br /> {user?.location}</p>
        </div>
      </div>

      <button className="editProfileButton" onClick={()=> nav('/dashboard/settings')}>Edit Profile</button>

    </div>
  )
}

export default ProfilePage