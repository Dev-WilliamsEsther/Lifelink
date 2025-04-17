import { useEffect } from 'react'
import "./dashboardLayout.css"
import DashBoardHeader from '../components/dashboardHeader/DashBoardHeader'
import DashboardSideBar from '../components/dashboardSideBar/DashboardSideBar'
import { Outlet, useNavigate } from 'react-router'
import Header from '../components/header/Header'

const DashboardLayout = () => {
  const nav = useNavigate()
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("userData"))){
      return
    }else{
      nav("/")
    }
  })
  return (
    <div className='DonordashboardWrapper'>
      <DashboardSideBar/>
      <div className="DonordashboardLeftSideWrapper">
        <DashBoardHeader/>
        <Header/>
        <div className="outletWRapper">   
         <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout

