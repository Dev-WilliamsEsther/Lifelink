import React, { useState } from 'react'
import './dashboardHeader.css'
import { MdCircleNotifications } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Drawer } from 'antd';
import { GoUnread } from "react-icons/go";
import { useNavigate } from 'react-router';

const DashBoardHeader = () => {
  const [notificationSideBar, setNotificationSideBar] = useState(false);
  const [openedMessageIndex, setOpenedMessageIndex] = useState(null);

  const handleOpenedMessageToggle = (index) => {
    setOpenedMessageIndex(prev => prev === index ? null : index);
  };

  const notifications = [
    { title: 'Kings Hospital', message: 'We need an A+ blood type' },
    { title: 'Hope Clinic', message: 'Urgent O- donors needed' },
  ];

  const nav = useNavigate()

  return (
    <div className='dashboardHeaderWrapper'>
      <div className="dashboardHeaderName">
        <h1>Hello Mary <p style={{ fontSize: '15px' }}>&#128522;</p></h1>
        <span>“save a life today”</span>
      </div>

      <div className="dashboardHeaderSearchWrapper">
        <IoSearchOutline />
        <input type="text" placeholder='Search...' />
      </div>

      <div className="profilePicAndNotification">
        <MdCircleNotifications
          size={30}
          cursor='pointer'
          onClick={() => setNotificationSideBar(true)}
        />
        <div className="profilePicture">
          <img src="/images/default profile pic.jpg" alt="profile" className='profileAvater' />
        </div>
      </div>

      <Drawer
        open={notificationSideBar}
        onClose={() => setNotificationSideBar(false)}
        title="Notifications"
      >
        <div className="notificationsWrapper">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="notificationsCardsWrap"
              onClick={() => handleOpenedMessageToggle(index)}
            >
              <h1>{notification.title} <GoUnread /></h1>
              {openedMessageIndex === index && (
                <>
                  <span>{notification.message}</span>
                  <button onClick={()=> {nav('/dashboard/hospitaldetails'); setNotificationSideBar(false)}}>View Hospital</button>
                </>
              )}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default DashBoardHeader;
