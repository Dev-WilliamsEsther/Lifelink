import React, { useEffect, useState } from 'react'
import './dashboardHeader.css'
import { MdCircleNotifications } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Drawer } from 'antd';
import { GoUnread } from "react-icons/go";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Base_Url = import.meta.env.VITE_BASEURL;

const DashBoardHeader = () => {

  const loggedInUser = useSelector((state) => state?.loggedInUser);
  const token = useSelector((state) => state?.token);

  const [notificationSideBar, setNotificationSideBar] = useState(false);
  const [openedMessageIndex, setOpenedMessageIndex] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const nav = useNavigate();

  const headerNameSplit = loggedInUser?.fullName?.split(" ");
  const headerNamePrompt = headerNameSplit?.[0];

  const getDonorNotification = async () => {
    try {
      const ress = await axios.get(`${Base_Url}/donor/notifications`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setNotifications(ress?.data?.notifications);
    } catch (err) {
      console.log("Message", err);
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      await axios.put(`${Base_Url}/donor/notifications/${notificationId}/read`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      getDonorNotification(); // Refresh list
    } catch (err) {
      console.error("Failed to mark notification as read", err);
    }
  };

  const handleOpenedMessageToggle = (index) => {
    setOpenedMessageIndex(prev => prev === index ? null : index);
  };

  useEffect(() => {
    getDonorNotification();
  }, []);

  return (
    <div className='dashboardHeaderWrapper'>
      <div className="dashboardHeaderName">
        <h1>Hello {headerNamePrompt || 'Visitor'} <p style={{ fontSize: '15px' }}>&#128522;</p></h1>
        <span>“save a life today”</span>
      </div>

      <div className="dashboardHeaderSearchWrapper">
        <IoSearchOutline />
        <input type="text" placeholder='Search...' />
      </div>

      <div className="profilePicAndNotification">
        <div className="notificationIconWrapper" onClick={() => setNotificationSideBar(true)}>
          <MdCircleNotifications size={30} cursor='pointer' />
          {notifications?.some(n => !n.isRead) && (
            <span className="notificationDot"></span>
          )}
        </div>
        <div className="profilePicture">
          {
            loggedInUser?.profilePics || loggedInUser?.profilePicture
              ? <img src={loggedInUser?.profilePics || loggedInUser?.profilePicture} alt="profile" className='profileAvatar' />
              : <img src="/images/default profile pic.jpg" alt="default" className='profileAvatar' />
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
                <h1>{notification.from} {!notification.isRead && <GoUnread />}</h1>
                {openedMessageIndex === index && (
                  <>
                    <span>{notification.message}</span>
                    <button
                      onClick={() => {
                        markNotificationAsRead(notification._id);
                        nav(`hospitalsrequestdetails/${notification?._id}`);
                        setNotificationSideBar(false);
                      }}
                    >
                      View Hospital
                    </button>
                    <p>{new Date(notification.date).toLocaleString()}</p>
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
