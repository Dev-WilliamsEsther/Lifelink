import React, { useState } from "react";
import "./dashboardSideBar.css";
import { FaUser } from "react-icons/fa";
import { TbHomeSearch } from "react-icons/tb";
import { MdHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router";
import { CiCircleRemove } from "react-icons/ci";
import { SlNote } from "react-icons/sl";
import { RiFirstAidKitLine } from "react-icons/ri";
import { PiFilesLight } from "react-icons/pi";
import { handleLogout } from "../../global/Api";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../global/Slice";
import { IoIosListBox } from "react-icons/io";
import { MdVerified } from "react-icons/md";

const DashboardSideBar = () => {
  const nav = useNavigate();
  const [deletePopup, setDeletePopup] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch()

  const Base_Url = import.meta.env.VITE_BASEURL;

  const userData = useSelector((state) => state?.loggedInUser)
  const token = useSelector((state) => state?.token)


  const logOutFunc = () => {
    handleLogout(Base_Url, nav, token);
    dispatch(logOut())
  };

  return (
    <>
      <div className="SideBArWrapper">
        <div className="innerSideBArWrapper">
          <img
            src="/images/logo.png"
            alt="LifeLink Logo"
            className="sideBarLogo"
            onClick={() => nav("/")}
          />

          {userData?.role === "donor" ? (
            <ul>
              <li
                onClick={() => {
                  nav("");
                }}
                className={`${location.pathname === "/dashboard" ? "activeBar" : ""
                  }`}
              >
                <FaUser className="sideBarIocns" color="black" />
                Profile
              </li>
              <li
                onClick={() => {
                  nav("findhospital");
                }}
                className={`${location.pathname === "/dashboard/findhospital"
                    ? "activeBar"
                    : ""
                  }`}
              >
                <TbHomeSearch className="sideBarIocns" color="black" />
                Find Hospital
              </li>
              <li
                onClick={() => {
                  nav("history");
                }}
                className={`${location.pathname === "/dashboard/history" ? "activeBar" : ""
                  }`}
              >
                <MdHistory className="sideBarIocns" color="black" />
                History
              </li>
              <li
                onClick={() => {
                  nav("settings");
                }}
                className={`${location.pathname === "/dashboard/settings" ? "activeBar" : ""
                  }`}
              >
                <IoSettingsOutline className="sideBarIocns" color="black" />
                Settings
              </li>
              <li onClick={() => setDeletePopup(true)} className="logoutBtn">
                <CiLogout className="sideBarIocns" />
                Logout
              </li>
            </ul>
          ) : null}

          {userData?.role === "hospital" ? (
            <ul>
              <li
                onClick={() => {
                  nav("");
                }}
                className={`${location.pathname === "/dashboard" ? "activeBar" : ""
                  }`}
              >
                <FaUser className="sideBarIocns" color="black" />
                Profile
              </li>
              <li
                onClick={() => {
                  nav("request");
                }}
                className={`${location.pathname === "/dashboard/request" ? "activeBar" : ""
                  }`}
              >
                <SlNote className="sideBarIocns" color="black" />
                Make Request
              </li>
              <li
                onClick={() => {
                  nav("/dashboard/requesthistory");
                }}
                className={`${location.pathname === "/dashboard/requesthistory"
                    ? "activeBar"
                    : ""
                  }`}
              >
                <MdHistory className="sideBarIocns" color="black" />
                Request History
              </li>
              <li
                onClick={() => {
                  nav("appointment");
                }}
                className={`${location.pathname === "/dashboard/appointment"
                    ? "activeBar"
                    : ""
                  }`}
              >
                <RiFirstAidKitLine className="sideBarIocns" color="black" />
                Appointments
              </li>
              <li
                onClick={() => {
                  nav("records");
                }}
                className={`${location.pathname === "/dashboard/records" ? "activeBar" : ""
                  }`}
              >
                <PiFilesLight className="sideBarIocns" color="black" />
                Records
              </li>
              <li
                onClick={() => {
                  nav("/dashboard/hospitalsettings");
                }}
                className={`${location.pathname === "/dashboard/settings" ? "activeBar" : ""
                  }`}
              >
                <IoSettingsOutline className="sideBarIocns" color="black" />
                Settings
              </li>
              <li onClick={() => setDeletePopup(true)} className="logoutBtn">
                <CiLogout className="sideBarIocns" />
                Logout
              </li>
            </ul>
          ) : null}

            {userData?.role === "admin" ? (
            <ul>
              <li
                onClick={() => {
                  nav("");
                }}
                className={`${location.pathname === "/dashboard" ? "activeBar" : ""
                  }`}
              >
                <FaUser className="sideBarIocns" color="black" />
                Profile
              </li>
              <li
                onClick={() => {
                  nav("adminblacklist");
                }}
                className={`${location.pathname === "/dashboard/adminblacklist"
                    ? "activeBar"
                    : ""
                  }`}
              >
                <IoIosListBox className="sideBarIocns" color="black" />
                Black List
              </li>
              <li
                onClick={() => {
                  nav("adminverification");
                }}
                className={`${location.pathname === "/dashboard/adminverification" ? "activeBar" : ""
                  }`}
              >
                <MdVerified className="sideBarIocns" color="black" />
                Verification
              </li>
              <li
                onClick={() => {
                  nav("adminsettings");
                }}
                className={`${location.pathname === "/dashboard/adminsettings" ? "activeBar" : ""
                  }`}
              >
                <IoSettingsOutline className="sideBarIocns" color="black" />
                Settings
              </li>
              <li onClick={() => setDeletePopup(true)} className="logoutBtn">
                <CiLogout className="sideBarIocns" />
                Logout
              </li>
            </ul>
          ) : null}
        </div>
      </div>

      {deletePopup && (
        <div className="popUpWrapper" onClick={() => setDeletePopup(false)}>
          <div className="logoutPopUp">
            <div className="logoutPopUpHeader">
              <CiCircleRemove
                cursor="pointer"
                size={25}
                onClick={() => setDeletePopup(false)}
              />
            </div>

            <h1>
              Are you sure you want to <br /> <b>Log Out?</b>
            </h1>

            <div className="logoutbButtonHolder">
              <button
                className="cancelBtn"
                onClick={() => setDeletePopup(false)}
              >
                Cancel
              </button>

              <button onClick={logOutFunc}>Logout</button>
            </div>
          </div>
        </div>
      )}

      <div className="SideBArWrapperPusher"></div>
    </>
  );
};

export default DashboardSideBar;
