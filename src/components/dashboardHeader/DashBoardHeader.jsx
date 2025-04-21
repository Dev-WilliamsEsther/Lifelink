import React, { useEffect, useState } from 'react'
import './dashboardHeader.css'
import { MdCircleNotifications } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Drawer } from 'antd';
import { GoUnread } from "react-icons/go";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Base_Url = import.meta.env.VITE_BASEURL

const DashBoardHeader = () => {

  const loggedInUser= useSelector((state)=> state?.loggedInUser)

  const [notificationSideBar, setNotificationSideBar] = useState(false);
  const [openedMessageIndex, setOpenedMessageIndex] = useState(null);
  const [notifications, setNotifications] = useState([])

  const handleOpenedMessageToggle = (index) => {
    setOpenedMessageIndex(prev => prev === index ? null : index);
  };

  const nav = useNavigate()

  const headerNameSplit = loggedInUser?.fullName?.split(" ");
  const headerNamePrompt = headerNameSplit?.slice(0);

  const hospitalHeaderNameSplit = loggedInUser?.fullName?.split(" ");
  const hospitalHeaderNamePrompt = hospitalHeaderNameSplit?.slice(0);
  const token = useSelector((state)=> state?.token)

  const getDonorNotification = async () => {
    try {
      const ress = await axios.get(`${Base_Url}/donor/notifications`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setNotifications(ress?.data?.notifications)
    } catch (err) {
      console.log("Message", err)
    }
  }

  useEffect(() => {
    getDonorNotification()
  }, [])
  

  return (
    <div className='dashboardHeaderWrapper'>
      <div className="dashboardHeaderName">
      <h1>Hello {headerNamePrompt?.[0] || hospitalHeaderNamePrompt?.[0] || 'Visitor'} <p style={{ fontSize: '15px' }}>&#128522;</p></h1>
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
          {
            loggedInUser?.profilePics ? <img src={loggedInUser?.profilePics} alt="profile Picture" className='profileAvatar'/> : <img src="/images/default profile pic.jpg" alt="profile Picture" className='profileAvatar'/> 
          }
        </div>
      </div>

      <Drawer
        open={notificationSideBar}
        onClose={() => setNotificationSideBar(false)}
        title="Notifications"
      >
        <div className="notificationsWrapper">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div
                key={index}
                className="notificationsCardsWrap"
                onClick={() => handleOpenedMessageToggle(index)}
              >
                <h1>{notification.from} <GoUnread /></h1>
                {openedMessageIndex === index && (
                  <>
                    <span>{notification.message}</span>
                    <button
                      onClick={() => {
                        nav('/dashboard/hospitaldetails');
                        setNotificationSideBar(false);
                      }}
                    >
                      View Hospital
                    </button>

                    <p>{notification.date}</p>
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No notifications yet 📭</p>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default DashBoardHeader;
