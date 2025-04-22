import React, { useEffect, useState } from "react";
import "../../components/header/header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer, Modal } from "antd";
import { MdEdit, MdHistory, MdOutlineHistoryToggleOff, MdVerified } from "react-icons/md";
import { TbHomeSearch } from "react-icons/tb";
import { CiLogout, CiSettings } from "react-icons/ci";
import { VscHome, VscTools } from "react-icons/vsc";
import { GoPeople } from "react-icons/go";
import { IoList, IoSearchOutline } from "react-icons/io5";
import { handleLogout } from "../../global/Api";
import { useDispatch, useSelector } from "react-redux";
import LoadComponents from "../componentsLoadScreen/LoadComponents";
import { IoIosListBox } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { PiGitPullRequest } from "react-icons/pi";
import { BiGitPullRequest } from "react-icons/bi";

const Base_Url = import.meta.env.VITE_BASEURL;

const Header = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [loadLogOut, setLoadLogOut] = useState(false);

  const isSignedIn = useSelector((state)=> state?.isLoggedIn)
  const userInfo = useSelector((state)=> state?.loggedInUser)
  const token = useSelector((state)=> state?.token )

  const dispatch = useDispatch()

  const link = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about" },
    { name: "How it Works", path: "/howitworks" },
  ];

  const location = useLocation();

  const [isFixed, setIsFixed] = useState(false);
  const nav = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 250;
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleSubmit = () => {
    handleLogout(Base_Url, nav, token, dispatch, setLoadLogOut, setLogoutPopUp);
  };

  if(loadLogOut){
    return <LoadComponents/>
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
              {link.map((link, idx) => (
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
                    <VscHome className="sideBarIocns" color="black"/>
                    Home
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/findhospital");
                    }}
                  >
                    <TbHomeSearch className="sideBarIocns" color="black"/>
                    Find Hospital
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/hospitalsrequest");
                    }}
                  >
                    <BiGitPullRequest className="sideBarIocns" color="black"/>
                    Requests
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/about");
                    }}
                  >
                    <GoPeople className="sideBarIocns" color="black"/>
                    About Us
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/howitworks");
                    }}
                  >
                    <CiSettings className="sideBarIocns" color="black"/>
                    How it works
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/history");
                    }}
                  >
                    <MdHistory className="sideBarIocns" color="black"/>
                    History
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/settings");
                    }}
                  >
                    <CiSettings className="sideBarIocns" color="black"/>
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
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/adminblacklist");
                    }}
                  >
                    <IoIosListBox className="sideBarIocns" color="black" />
                    Black List
                  </li>
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
                    <CiSettings className="sideBarIocns" color="black"/>
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
                    <VscHome className="sideBarIocns" color="black"/>
                    Home
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/request");
                    }}
                  >
                    <PiGitPullRequest className="sideBarIocns" color="black"/>
                    Make Request
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/about");
                    }}
                  >
                    <GoPeople className="sideBarIocns" color="black"/>
                    About Us
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/howitworks");
                    }}
                  >
                    <VscTools className="sideBarIocns" color="black"/>
                    How it works
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/requesthistory");
                    }}
                  >
                    <MdHistory className="sideBarIocns" color="black"/>
                    Request History
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/appointment");
                    }}
                  >
                    <IoList className="sideBarIocns" color="black"/>
                    Appointment
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/records");
                    }}
                  >
                    <MdOutlineHistoryToggleOff className="sideBarIocns" color="black"/>
                    Records
                  </li>
                  <li
                    onClick={() => {
                      setOpenSideDrawer(false);
                      nav("/dashboard/hospitalsettings");
                    }}
                  >
                    <CiSettings className="sideBarIocns" color="black"/>
                    Settings
                  </li>
                  <li
                    style={{ color: "red" }}
                    onClick={() => setLogoutPopUp(true)}
                  >
                    <CiLogout/>
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
    </>
  );
};

export default Header;