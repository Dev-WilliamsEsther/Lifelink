import React from 'react'
import "./dashboardLayout.css"
import DashBoardHeader from '../components/dashboardHeader/DashBoardHeader'
import DashboardSideBar from '../components/dashboardSideBar/DashboardSideBar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div className='DonordashboardWrapper'>
      <DashboardSideBar/>
      <div className="DonordashboardLeftSideWrapper">
        <DashBoardHeader/>
        <div className="outletWRapper">   
         <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout