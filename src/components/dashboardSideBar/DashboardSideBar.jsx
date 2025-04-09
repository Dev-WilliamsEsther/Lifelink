import React, { useState } from 'react'
import './dashboardSideBar.css'
import { FaUser } from "react-icons/fa";
import { TbHomeSearch } from "react-icons/tb";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { CiCircleRemove } from "react-icons/ci";

const DashboardSideBar = () => {
  const nav = useNavigate()
  const [deletePopup, setDeletePopup] = useState(false)
  return (
    <>
    <div className='SideBArWrapper'>
      <div className="innerSideBArWrapper">
        <img src="/images/logo.png" alt="LifeLink Logo" className='sideBarLogo' onClick={()=> nav("/")}/>
        <ul>
          <li onClick={()=> nav("")}>
            <FaUser className='sideBarIocns'color='black'/>
            Profile
          </li>
          <li onClick={()=> nav("findhospital")}>
            <TbHomeSearch className='sideBarIocns' color='black'/>
            Find Hospital
          </li>
          <li onClick={()=> nav("history")}>
            <MdHistory className='sideBarIocns' color='black'/>
            History
          </li>
          <li onClick={()=> nav("settings")}>
            <IoSettingsOutline className='sideBarIocns' color='black'/>
            Settings
          </li>
          <li onClick={()=> setDeletePopup(true)} className='logoutBtn'>
            <CiLogout className='sideBarIocns'/>
            Logout
          </li>
        </ul>
      </div>
    </div>


    {
      deletePopup && <div className="popUpWrapper" onClick={()=> setDeletePopup(false)}>
      <div className="logoutPopUp">
        <div className="logoutPopUpHeader"><CiCircleRemove cursor="pointer" size={25} onClick={()=> setDeletePopup(false)}/></div>

        <h1>Are you sure you want to <br /> <b>Log Out?</b></h1>

        <div className="logoutbButtonHolder">
          <button className='cancelBtn' onClick={()=> setDeletePopup(false)}>Cancel</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default DashboardSideBar
