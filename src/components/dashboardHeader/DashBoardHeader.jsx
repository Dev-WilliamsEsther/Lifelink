import React from 'react'
import './dashboardHeader.css'
import { MdCircleNotifications } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const DashBoardHeader = () => {
  return (
    <div className='dashboardHeaderWrapper'>
      <div className="dashboardHeaderName">
        <h1>Hello Mary <p style={{fontSize: '15px'}}>&#128522;</p></h1>
        <span>“save a life today”</span>
      </div>

      <div className="dashboardHeaderSearchWrapper">
        <IoSearchOutline/>
        <input type="text" placeholder='Search...'/>
      </div>


      <div className="profilePicAndNotification">
        <MdCircleNotifications size={30}/>
        <div className="profilePicture">
          <img src="" alt="profile picture" className='profileAvater'/>
        </div>
      </div>
    </div>
  )
}

export default DashBoardHeader
