import React from 'react';
import './profilePage.css';
import { MdCloudUpload } from "react-icons/md";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const loggedInUser= useSelector((state)=> state?.loggedInUser?.data)

  const nav = useNavigate();

  return (
    <div className="ProfilePageWRapper">
      {loggedInUser?.role==="hospital" && !loggedInUser?.kycCompleted && (
        <div className="kycCompleteMessage">Please complete your KYC</div>
      )}

      <h1>Profile</h1>

      <div className="profilePageProfileAndNameWrapper">
        <div className="profilePageProfilePic">
          {
            loggedInUser?.profilePics ? <img src={loggedInUser?.data?.profilePics} alt="profile Picture" /> : <img src="/images/default profile pic.jpg" alt="profile Picture" /> 
          }
          <MdCloudUpload className="ProfileUploadIcon" />
        </div>

        <div className="profileNameWrapper">
          <h3>{loggedInUser?.data?.fullName}</h3>
          <p>{loggedInUser?.data?.bloodType}</p>
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Personal Information</h2>
        <div className="infosWRapper">
          <p><b>Full Name</b><br /> {loggedInUser?.role==="hospital" ? loggedInUser?.fullName : loggedInUser?.fullName}</p>
          {loggedInUser?.role==="hospital" ? (
            <>
              <p><b>Type</b><br /> {loggedInUser?.role}</p>
              <p><b>City</b><br /> {loggedInUser?.city}</p>
              <p><b>Town</b><br /> {loggedInUser?.location}</p>
            </>
          ) : (
            <>
              <p><b>Age</b><br /> {loggedInUser?.age}</p>
              <p><b>Blood Group</b><br /> {loggedInUser?.bloodType}</p>
              <p><b>Gender</b><br /> Female</p> 
            </>
          )}
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Contact Information</h2>
        <div className="infosWRapper">
          <p><b>Email Address</b><br /> {loggedInUser?.role==="hospital" ? loggedInUser?.email : loggedInUser?.email}</p>
          <p><b>Phone Number</b><br />{loggedInUser?.role==="hospital" ? loggedInUser?.phone || "-" : loggedInUser?.phoneNumber || "-"}</p>
          {!loggedInUser?.role==="hospital" && (
            <p><b>Home Address</b><br /> {loggedInUser?.location}</p>
          )}
        </div>
      </div>

      {
        loggedInUser ? <button className="editProfileButton" onClick={() => nav('/dashboard/hospitalsettings')}>
        Edit Profile
      </button>  :  <button className="editProfileButton" onClick={() => nav('/dashboard/settings')}>
        Edit Profile
      </button>
      }
      
    </div>
  );
};

export default ProfilePage;