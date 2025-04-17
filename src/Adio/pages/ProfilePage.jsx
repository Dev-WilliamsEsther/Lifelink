
import React, { useContext } from 'react'
import './profilePage.css'
import { MdCloudUpload } from "react-icons/md";
import { useHospitalInfo, useprofileLoadState, useUserInfo } from '../../global/UseUser';
import { useNavigate } from 'react-router';
import LoadComponents from '../../components/componentsLoadScreen/LoadComponents';


const ProfilePage = () => {
  const { userInfo } = useUserInfo();
  const { hospitalInfo } = useHospitalInfo();
  const { profileLoadState } = useprofileLoadState();
  const nav = useNavigate()


  return (
    <>
    {
      profileLoadState ? <LoadComponents/> :
    <div className='ProfilePageWRapper'>
      {
        !hospitalInfo?.data?.hospital?.kycCompleted && <div className="kycCompleteMessage">Please complete your KYC</div>
      }
      
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
      
      { userInfo?.data?.message?.role === "hospital" ? <><div className="profilePageInfosCards">
        <h2>Personal Information</h2>
        <div className="infosWRapper">
          <p><b>Full Name</b> <br /> {hospitalInfo?.data?.hospital?.fullName}</p>
          <p><b>Type</b> <br /> {hospitalInfo?.data?.hospital?.role}</p>
          <p><b>City</b> <br /> {hospitalInfo?.data?.hospital?.city}</p>
          <p><b>Town</b> <br /> {hospitalInfo?.data?.hospital?.location}</p>
        </div>
      </div>

      <div className="profilePageInfosCards">
        <h2>Contact Information</h2>
        <div className="infosWRapper">
          <p><b>Email Address</b> <br /> {hospitalInfo?.data?.hospital?.email}</p>
          <p><b>Phone Number</b> <br /> {hospitalInfo?.data?.hospital?.phone ? userInfo?.data?.message?.phone : "-"}</p>
        </div>
      </div> </> : <><div className="profilePageInfosCards">
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
          <p><b>Phone Number</b> <br /> {userInfo?.data?.message?.phone ? userInfo?.data?.message?.phone : "-"}</p>
          <p><b>Home Address</b> <br /> {userInfo?.data?.message?.location}</p>
        </div>
      </div> </>}

      <button className="editProfileButton" onClick={()=> nav('/dashboard/settings')}>Edit Profile</button>

    </div>
    }
    </>
    
  )
}

export default ProfilePage