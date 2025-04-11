import React, { useState } from 'react'
import './dashboardSideBar.css'
import { FaUser } from "react-icons/fa";
import { TbHomeSearch } from "react-icons/tb";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router';
import { CiCircleRemove } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { RiFirstAidKitLine } from "react-icons/ri";
import { PiFilesLight } from "react-icons/pi";

const DashboardSideBar = () => {
  const nav = useNavigate()
  const [deletePopup, setDeletePopup] = useState(false)

  const [activeBAr, setActiveBar] = useState(0)

  const donorsSideBar = true;


  return (
    <>
      <div className='SideBArWrapper'>
        <div className="innerSideBArWrapper">
          <img src="/images/logo.png" alt="LifeLink Logo" className='sideBarLogo' onClick={() => nav("/")} />

          {
            donorsSideBar ?  <ul>
            <li onClick={() => {setActiveBar(1); nav(""); }} className={`${activeBAr === 1 ? "activeBar" : ""}`}>
              <FaUser className='sideBarIocns' color='black' />
              Profile
            </li>
            <li  onClick={() => {setActiveBar(2); nav("findhospital"); }} className={`${activeBAr === 2 ? "activeBar" : ""}`}>
              <TbHomeSearch className='sideBarIocns' color='black' />
              Find Hospital
            </li>
            <li onClick={() => {setActiveBar(3); nav("history"); }} className={`${activeBAr === 3 ? "activeBar" : ""}`}>
              <MdHistory className='sideBarIocns' color='black' />
              History
            </li>
            <li onClick={() => {setActiveBar(4); nav("settings"); }} className={`${activeBAr === 4 ? "activeBar" : ""}`}>
              <IoSettingsOutline className='sideBarIocns' color='black' />
              Settings
            </li>
            <li onClick={()=> setDeletePopup(true)} className='logoutBtn'>
              <CiLogout className='sideBarIocns' />
              Logout
            </li>
          </ul> :  <ul>
            <li onClick={() => {setActiveBar(1); nav(""); }} className={`${activeBAr === 1 ? "activeBar" : ""}`}>
              <FaUser className='sideBarIocns' color='black' />
              Profile
            </li>
            <li onClick={() => {setActiveBar(2); nav("request"); }} className={`${activeBAr === 2 ? "activeBar" : ""}`}>
              <SlNote className='sideBarIocns' color='black' />
              Make Request
            </li>
            <li onClick={() => {setActiveBar(3); nav("history"); }} className={`${activeBAr === 3 ? "activeBar" : ""}`}>
              <MdHistory className='sideBarIocns' color='black' />
              Request History
            </li>
            <li  onClick={() => {setActiveBar(4); nav("appointment"); }} className={`${activeBAr === 4 ? "activeBar" : ""}`}>
              <RiFirstAidKitLine className='sideBarIocns' color='black' />
              Appointments
            </li>
            <li  onClick={() => {setActiveBar(5); nav("records"); }} className={`${activeBAr === 5 ? "activeBar" : ""}`}>
              <PiFilesLight className='sideBarIocns' color='black' />
              Records
            </li>
            <li onClick={() => {setActiveBar(6); nav("settings"); }} className={`${activeBAr === 6 ? "activeBar" : ""}`}>
              <IoSettingsOutline className='sideBarIocns' color='black' />
              Settings
            </li>
            <li onClick={()=> setDeletePopup(true)} className='logoutBtn'>
              <CiLogout className='sideBarIocns' />
              Logout
            </li>
          </ul>
          }

        </div>
      </div>


      {
        deletePopup && <div className="popUpWrapper" onClick={() => setDeletePopup(false)}>
          <div className="logoutPopUp">
            <div className="logoutPopUpHeader"><CiCircleRemove cursor="pointer" size={25} onClick={() => setDeletePopup(false)} /></div>

            <h1>Are you sure you want to <br /> <b>Log Out?</b></h1>

            <div className="logoutbButtonHolder">
              <button className='cancelBtn' onClick={() => setDeletePopup(false)}>Cancel</button>
              <button>Logout</button>
            </div>
          </div>
        </div>
      }

        <div className='SideBArWrapperPusher'></div>

    </>
  )
}

export default DashboardSideBar
