import React from 'react'
import './dashboardSideBar.css'
import { FaUser } from "react-icons/fa";

const DashboardSideBar = () => {
  return (
    <div className='SideBArWrapper'>
      <div className="innerSideBArWrapper">
        <ul>
          <li>
            <FaUser/>
            Profile
          </li>
          <li>
            Find Hospital
          </li>
          <li>History</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardSideBar
