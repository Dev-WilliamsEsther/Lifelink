import React, { useEffect, useState } from "react";
import "../../components/header/header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Drawer, Modal } from "antd";
import { MdEdit, MdHistory } from "react-icons/md";
import { TbHomeSearch } from "react-icons/tb";
import { CiLogout, CiSettings } from "react-icons/ci";
import { VscHome } from "react-icons/vsc";
import { GoPeople } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {

  const [openSideDrawer, setOpenSideDrawer] = useState(false)
  const [logoutPopUp, setLogoutPopUp] = useState(false)
  const [userAuth] = useState(false)

  const link = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "How it Works", path: "/howitworks" },
  ];

  const location = useLocation();


  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 250;
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = useNavigate()

  return (
    <>
      <div className={`headerwrapper ${isFixed ? 'headerwrapperfixed' : ''
        }`}>
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
        <div className="headerwrapperinner3">
          <Link to={"/signup"}>
          <button className="headerbtn">Sign Up</button>
          </Link>
          <Link to={"/login"}>
          <button className="headerbtn1" >Log In</button>
          </Link>
        </div>
      </div>


      <div className="MobileHeader">
        <img src="/images/logo.png" alt="LifeLink Logo" onClick={() => nav("/")} />
        <div className="mobileSearchInputWrapper">
          <IoSearchOutline/>
          <input type="text" placeholder="Search..."/>
        </div>
        <RxHamburgerMenu size={30} onClick={() => setOpenSideDrawer(true)} />
      </div>
      <div className="mobileHeaderWrapperPusher"></div>

      <Drawer
        open={openSideDrawer}
        onClose={() => setOpenSideDrawer(false)}
      >
        <div className="sideDrawerNavigateHolder">
          <ul>
            {
              userAuth ? <div className="mobileSideBarProfileNav" onClick={() => { setOpenSideDrawer(false); nav("/dashboard") }}>
              <div className="MobileSideProfilePic">
                <img src="/images/default profile pic.jpg" alt="" />
              </div>
              <div className="MobileSideProfileName">
                <h1>Mary Patrick</h1>
                <span>A+</span>
              </div>

              <div className="mobileSideBarIcon">
                <MdEdit />
              </div>
            </div> :  <div className="mobileSideBarProfileNav" onClick={() => { setOpenSideDrawer(false); nav("/authentry") }}>
              <div className="MobileSideProfilePic">
                <img src="/images/default profile pic.jpg" alt="" />
              </div>
              <div className="MobileSideProfileName">
                <h1 style={{fontSize: 35}}>No User</h1>
              </div>

              
              <div className="mobileSideBarIcon">
                <MdEdit />
              </div>
            </div>
            }

            {
              userAuth ? <> <li onClick={() => { setOpenSideDrawer(false); nav("/") }}><VscHome />Home</li>
              <li onClick={() => { setOpenSideDrawer(false); nav("/dashboard/findhospital") }}><TbHomeSearch />Find Hospital</li>
              <li onClick={() => { setOpenSideDrawer(false); nav("/about") }}><GoPeople />About Us</li>
              <li onClick={() => { setOpenSideDrawer(false); nav("/howitworks") }}><CiSettings />How it works</li>
              <li onClick={() => { setOpenSideDrawer(false); nav("/dashboard/history") }}><MdHistory />History</li>
              <li onClick={() => { setOpenSideDrawer(false); nav("/dashboard/settings") }}><CiSettings />Settings</li>
              <li style={{ color: "red" }} onClick={() => setLogoutPopUp(true)}><CiLogout />Logout</li> </> :
              <> <button onClick={()=> nav('/login')}>Login</button> <button onClick={()=> nav('/signup')}>Signup</button> </>
            }
          </ul>
        </div>
      </Drawer>

      <Modal
        open={logoutPopUp}
        footer={false}
        onCancel={() => setLogoutPopUp(false)}
      >
        <div className="mobileLogoutPopUp">
          <h1>Are you sure you want to <br /> <b>Logout?</b></h1>

          <div className="mobileLogoutWrapper">
            <button className="MobileLogoutBtn" onClick={() => setLogoutPopUp(false)}>Cancel</button>
            <button>Logout</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;