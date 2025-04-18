import React from 'react';
import './profilePage.css';
import { MdCloudUpload } from "react-icons/md";
import { useHospitalInfo, useProfileLoadState, useUserInfo } from '../../global/UseUser';
import { useNavigate } from 'react-router';
import LoadComponents from '../../components/componentsLoadScreen/LoadComponents';

const ProfilePage = () => {
  const { userInfo } = useUserInfo();
  const { hospitalInfo } = useHospitalInfo();
  const { profileLoadState } = useProfileLoadState();
  const nav = useNavigate();

  const user = userInfo;
  console.log(user,"user profile page")
  const hospital = hospitalInfo?.data?.hospital;


  const isHospital = hospital?.role === "hospital";


  console.log("King holes",hospitalInfo?.profilePics)
  

  if (profileLoadState) return <LoadComponents />;

  return (
    <div className="ProfilePageWRapper">
      {isHospital && !hospital?.kycCompleted && (
        <div className="kycCompleteMessage">Please complete your KYC</div>
      )}

      <h1>Profile</h1>

      <div className="profilePageProfileAndNameWrapper">
        <div className="profilePageProfilePic">
          {
            user?.profilePics ? <img src={user?.profilePics} alt="profile Picture" /> : <img src="/images/default profile pic.jpg" alt="profile Picture" /> 
          }
          <MdCloudUpload className="ProfileUploadIcon" />
        </div>

        <div className="profileNameWrapper">
          <h3>{user?.fullName}</h3>
          <p>{user?.bloodType}</p>
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Personal Information</h2>
        <div className="infosWRapper">
          <p><b>Full Name</b><br /> {isHospital ? hospital?.fullName : user?.fullName}</p>
          {isHospital ? (
            <>
              <p><b>Type</b><br /> {hospital?.role}</p>
              <p><b>City</b><br /> {hospital?.city}</p>
              <p><b>Town</b><br /> {hospital?.location}</p>
            </>
          ) : (
            <>
              <p><b>Age</b><br /> {user?.age}</p>
              <p><b>Blood Group</b><br /> {user?.bloodType}</p>
              <p><b>Gender</b><br /> Female</p> 
            </>
          )}
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Contact Information</h2>
        <div className="infosWRapper">
          <p><b>Email Address</b><br /> {isHospital ? hospital?.email : user?.email}</p>
          <p><b>Phone Number</b><br />{isHospital ? hospital?.phone || "-" : user?.phoneNumber || "-"}</p>
          {!isHospital && (
            <p><b>Home Address</b><br /> {user?.location}</p>
          )}
        </div>
      </div>

      {
        isHospital ? <button className="editProfileButton" onClick={() => nav('/dashboard/hospitalsettings')}>
        Edit Profile
      </button>  :  <button className="editProfileButton" onClick={() => nav('/dashboard/settings')}>
        Edit Profile
      </button>
      }
      
    </div>
  );
};

export default ProfilePage;