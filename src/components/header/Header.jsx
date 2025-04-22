import React, { useEffect, useState } from "react";
import "../../components/header/header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer, Modal } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdEdit, MdHistory, MdOutlineHistoryToggleOff, MdVerified, MdCircleNotifications } from "react-icons/md";
import { TbHomeSearch } from "react-icons/tb";
import { VscHome, VscTools } from "react-icons/vsc";
import { GoPeople, GoUnread } from "react-icons/go";
import { IoList, IoSearchOutline } from "react-icons/io5";
import { PiGitPullRequest } from "react-icons/pi";
import { BiGitPullRequest } from "react-icons/bi";
import { CiLogout, CiSettings } from "react-icons/ci";
import { HiUsers } from "react-icons/hi2";
import { handleLogout } from "../../global/Api";
import { useDispatch, useSelector } from "react-redux";
import LoadComponents from "../componentsLoadScreen/LoadComponents";
import axios from "axios";

const Base_Url = import.meta.env.VITE_BASEURL;

const Header = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [loadLogOut, setLoadLogOut] = useState(false);
  const [notificationSideBar, setNotificationSideBar] = useState(false);
  const [openedMessageIndex, setOpenedMessageIndex] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [isFixed, setIsFixed] = useState(false);

  const isSignedIn = useSelector((state) => state?.isLoggedIn);
  const userInfo = useSelector((state) => state?.loggedInUser);
  const token = useSelector((state) => state?.token);

  const dispatch = useDispatch();
  const nav = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about" },
    { name: "How it Works", path: "/howitworks" },
  ];

  const handleSubmit = () => {
    handleLogout(Base_Url, nav, token, dispatch, setLoadLogOut, setLogoutPopUp);
  };

  const getDonorNotification = async () => {
    try {
      const res = await axios.get(`${Base_Url}/donor/notifications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotifications(res?.data?.notifications || []);
    } catch (err) {
      console.error("Notification Error:", err);
    }
  };

  const markNotificationAsRead = async (id) => {
    try {
      await axios.put(`${Base_Url}/donor/notifications/${id}/read`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getDonorNotification();
    } catch (err) {
      console.error("Mark Read Error:", err);
    }
  };

  const handleOpenedMessageToggle = (index) => {
    setOpenedMessageIndex(prev => prev === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getDonorNotification();
  }, []);

  const headerNamePrompt = userInfo?.fullName?.split(" ")?.[0];

  if (loadLogOut) {
    return <LoadComponents />;
  }





  return (
    <>
      <div className={`headerwrapper ${isFixed ? "headerwrapperfixed" : ""}`}>
        <div className="HeaderInnerWrapper">
          <div className="headerwrapperinner1">
            <img src="images/logo.png" alt="" />
          </div>
          <div className="headerwrapperinner2">
            <ul className="headerul">
              {navLinks.map((link, idx) => (
                <li
                  key={idx}
                  className={`${link.path === location.pathname &&
                    "text-black border-b-2 border-red-300"
                    } capitalize text-[14px] font-medium hover:text-red-300 transition-all`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {isSignedIn ? (
            <div className="headerProfilePic" onClick={() => nav("/dashboard")}>
              {
                userInfo?.profilePics || userInfo?.profilePicture ? <img src={userInfo?.profilePics || userInfo?.profilePicture} alt="profile Picture" className='profileAvatar' /> : <img src="/images/default profile pic.jpg" alt="profile Picture" className='profileAvatar' />
              }
            </div>
          ) : (
            <div className="headerwrapperinner3">
              <Link to={"/signup"}>
                <button className="headerbtn">Sign Up</button>
              </Link>
              <Link to={"/login"}>
                <button className="headerbtn1">Log In</button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="MobileHeader">
        <img
          src="/images/logo.png"
          alt="LifeLink Logo"
          onClick={() => nav("/")}
        />
        <div className="mobileSearchInputWrapper">
          <IoSearchOutline />
          <input type="text" placeholder="Search..." />
        </div>
        <RxHamburgerMenu size={30} onClick={() => setOpenSideDrawer(true)} />
      </div>
      <div className="mobileHeaderWrapperPusher"></div>

      <Drawer open={openSideDrawer} onClose={() => setOpenSideDrawer(false)}>
        <div className="sideDrawerNavigateHolder">
          <ul>
            {isSignedIn ? (
              <div
                className="mobileSideBarProfileNav"
                onClick={() => {
                  setOpenSideDrawer(false);
                  nav("/dashboard");
                }}
              >
                <div className="MobileSideProfilePic">
                  {
                    userInfo.profilePics || userInfo?.profilePicture ? <img src={userInfo.profilePics || userInfo?.profilePicture} alt="" /> : <img src="/images/default profile pic.jpg" alt="" />
                  }
                </div>
                <div className="MobileSideProfileName">
                  <h1>{userInfo?.fullName}</h1>
                  <span>{userInfo?.bloodType}</span>
                </div>

                <div
                  className="mobileSideBarIcon"
                  onClick={() => nav("/dashboard/settings")}
                >
                  <MdEdit />
                </div>
              </div>
            ) : (
              <div
                className="mobileSideBarProfileNav"
                onClick={() => {
                  setOpenSideDrawer(false);
                  nav("/authentry");
                }}
              >
                <div className="MobileSideProfilePic">
                  <img src="/images/default profile pic.jpg" alt="" />
                </div>
                <div className="MobileSideProfileName">
                  <h1 style={{ fontSize: 35 }}>Visitor</h1>
                </div>

                <div className="mobileSideBarIcon">
                  <MdEdit />
                </div>
              </div>
            )}

            {isSignedIn ? (
              userInfo?.role === "donor" ? (
                <>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/");
                    }}
                  >
                    <VscHome className="sideBarIocns" color="black" />
                    Home
                  </li>
                  <div className="notificationIconWrapper" onClick={() => setNotificationSideBar(true)}>
                    <MdCircleNotifications size={30} cursor='pointer' />
                    {notifications?.some(n => !n.isRead) && (
                      <span className="notificationDot"></span>
                    )}
                  </div>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/findhospital");
                    }}
                  >
                    <TbHomeSearch className="sideBarIocns" color="black" />
                    Find Hospital
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/hospitalsrequest");
                    }}
                  >
                    <BiGitPullRequest className="sideBarIocns" color="black" />
                    Requests
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/about");
                    }}
                  >
                    <GoPeople className="sideBarIocns" color="black" />
                    About Us
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/howitworks");
                    }}
                  >
                    <CiSettings className="sideBarIocns" color="black" />
                    How it works
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/history");
                    }}
                  >
                    <MdHistory className="sideBarIocns" color="black" />
                    History
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/settings");
                    }}
                  >
                    <CiSettings className="sideBarIocns" color="black" />
                    Settings
                  </li>
                  <li
                    style={{ color: "red" }}
                    onClick={() => setLogoutPopUp(true)}
                  >
                    <CiLogout />
                    Logout
                  </li>
                </>
              ) : userInfo?.role === "admin" ? (
                <>
                  {/* <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/adminblacklist");
                    }}
                  >
                    <IoIosListBox className="sideBarIocns" color="black" />
                    Black List
                  </li> */}
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/adminverification");
                    }}
                  >
                    <MdVerified className="sideBarIocns" color="black" />
                    Verification
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/allusers");
                    }}
                  >
                    <HiUsers className="sideBarIocns" color="black" />
                    Users
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/settings");
                    }}
                  >
                    <CiSettings className="sideBarIocns" color="black" />
                    Settings
                  </li>
                  <li
                    style={{ color: "red" }}
                    onClick={() => setLogoutPopUp(true)}
                  >
                    <CiLogout />
                    Logout
                  </li>
                </>) : userInfo?.role === "hospital" ? (
                  <>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/");
                      }}
                    >
                      <VscHome className="sideBarIocns" color="black" />
                      Home
                    </li>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/dashboard/request");
                      }}
                    >
                      <PiGitPullRequest className="sideBarIocns" color="black" />
                      Make Request
                    </li>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/about");
                      }}
                    >
                      <GoPeople className="sideBarIocns" color="black" />
                      About Us
                    </li>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/howitworks");
                      }}
                    >
                      <VscTools className="sideBarIocns" color="black" />
                      How it works
                    </li>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/dashboard/requesthistory");
                      }}
                    >
                      <MdHistory className="sideBarIocns" color="black" />
                      Request History
                    </li>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/dashboard/appointment");
                      }}
                    >
                      <IoList className="sideBarIocns" color="black" />
                      Appointment
                    </li>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/dashboard/records");
                      }}
                    >
                      <MdOutlineHistoryToggleOff className="sideBarIocns" color="black" />
                      Records
                    </li>
                    <li
                      onClick={() => {
                        setOpenSideDrawer(false);
                        nav("/dashboard/hospitalsettings");
                      }}
                    >
                      <CiSettings className="sideBarIocns" color="black" />
                      Settings
                    </li>
                    <li
                      style={{ color: "red" }}
                      onClick={() => setLogoutPopUp(true)}
                    >
                      <CiLogout />
                      Logout
                    </li>
                  </>
                ) : null
            ) : (
              <>
                <button onClick={() => nav("/login")}>Login</button>
                <button onClick={() => nav("/signup")}>Signup</button>
                <li
                  onClick={() => {
                    setOpenSideDrawer(false);
                    nav("/");
                  }}
                >
                  <VscHome />
                  Home
                </li>
                <li
                  onClick={() => {
                    setOpenSideDrawer(false);
                    nav("/about");
                  }}
                >
                  <GoPeople />
                  About Us
                </li>
                <li
                  onClick={() => {
                    setOpenSideDrawer(false);
                    nav("/howitworks");
                  }}
                >
                  <CiSettings />
                  How it works
                </li>
              </>
            )}
          </ul>
        </div>
      </Drawer>

      <Modal
        open={logoutPopUp}
        footer={false}
        onCancel={() => setLogoutPopUp(false)}
      >
        <div className="mobileLogoutPopUp">
          <h1>
            Are you sure you want to <br /> <b>Logout?</b>
          </h1>

          <div className="mobileLogoutWrapper">
            <button
              className="MobileLogoutBtn"
              onClick={() => setLogoutPopUp(false)}
            >
              Cancel
            </button>
            <button onClick={handleSubmit}>Logout</button>
          </div>
        </div>
      </Modal>







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
    </>
  );
};

export default Header;