import React, { useContext, useState } from "react";
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
import { useUserInfo } from "../../global/UseUser";
import { handleLogout } from "../../global/Api";

const DashboardSideBar = () => {
  const nav = useNavigate();
  const [deletePopup, setDeletePopup] = useState(false);
  const location = useLocation();

  const Base_Url = import.meta.env.VITE_BASEURL;

  const { userInfo } = useUserInfo();
  const token = userInfo?.data?.token;
  const user = JSON.parse(localStorage.getItem("userData"));

  const logOut = () => {
    handleLogout(Base_Url, nav, token);
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

          {user?.data?.data?.role === "donor" ? (
            <ul>
              <li
                onClick={() => {
                  nav("");
                }}
                className={`${
                  location.pathname === "/dashboard" ? "activeBar" : ""
                }`}
              >
                <FaUser className="sideBarIocns" color="black" />
                Profile
              </li>
              <li
                onClick={() => {
                  nav("findhospital");
                }}
                className={`${
                  location.pathname === "/dashboard/findhospital"
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
                className={`${
                  location.pathname === "/dashboard/history" ? "activeBar" : ""
                }`}
              >
                <MdHistory className="sideBarIocns" color="black" />
                History
              </li>
              <li
                onClick={() => {
                  nav("settings");
                }}
                className={`${
                  location.pathname === "/dashboard/settings" ? "activeBar" : ""
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

          {user?.data?.data?.role === "hospital" ? (
            <ul>
              <li
                onClick={() => {
                  nav("");
                }}
                className={`${
                  location.pathname === "/dashboard" ? "activeBar" : ""
                }`}
              >
                <FaUser className="sideBarIocns" color="black" />
                Profile
              </li>
              <li
                onClick={() => {
                  nav("request");
                }}
                className={`${
                  location.pathname === "/dashboard/request" ? "activeBar" : ""
                }`}
              >
                <SlNote className="sideBarIocns" color="black" />
                Make Request
              </li>
              <li
                onClick={() => {
                  nav("/dashboard/requesthistory");
                }}
                className={`${
                  location.pathname === "/dashboard/requesthistory"
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
                className={`${
                  location.pathname === "/dashboard/appointment"
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
                className={`${
                  location.pathname === "/dashboard/records" ? "activeBar" : ""
                }`}
              >
                <PiFilesLight className="sideBarIocns" color="black" />
                Records
              </li>
              <li
                onClick={() => {
                  nav("settings");
                }}
                className={`${
                  location.pathname === "/dashboard/settings" ? "activeBar" : ""
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

              <button onClick={logOut}>Logout</button>
            </div>
          </div>
        </div>
      )}

      <div className="SideBArWrapperPusher"></div>
    </>
  );
};

export default DashboardSideBar;
