import React, { useState } from 'react'
import './dashboardHeader.css'
import { MdCircleNotifications } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Drawer } from 'antd';
import { GoUnread } from "react-icons/go";

const DashBoardHeader = () => {
  const [notificationSideBar, setNotificationSideBar] = useState(false)
  const [openedMessage, setOPenedMessage] = useState(false)

  const handleOPenedMessageToggle = () =>{
    setOPenedMessage(!openedMessage)
  }

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
        <MdCircleNotifications size={30} cursor='pointer' onClick={()=> setNotificationSideBar(true)}/>
        <div className="profilePicture">
          <img src="/images/default profile pic.jpg" alt="profile picture" className='profileAvater'/>
        </div>
      </div>

      <Drawer
      open={notificationSideBar}
      onClose={()=> setNotificationSideBar(false)}
      title="Notifications"
      >
        <div className="notificationsWrapper">
          <div className="notificationsCardsWrap" onClick={handleOPenedMessageToggle}>
            <h1>Kings Hospital <GoUnread/></h1>
            {
              openedMessage && <> <span>
              We need an A+ blood type
            </span>
            <button>View Hospital</button>
            </>}
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default DashBoardHeader
