import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import HomeRoutes from './routes/HomeRoutes'
import LandingPage from './Esther/LandingPage'
import Howitworks from './Adio/Howitworks'
import AboutUs from './Davidson/AboutUs'
import Hospitalsignup from './Esther/auth/Hospitalsignup'
import Hospitallogin from './Esther/auth/Hospitallogin'
import Donorslogin from './Esther/auth/Donorslogin'
import Donorssignup from './Esther/auth/Donorssignup'
import KYC from './Esther/auth/KYC'
import Resetpassword from './Esther/auth/Resetpassword'
import ProfilePage from './Adio/pages/ProfilePage'
import FindHospitalPage from './Adio/pages/FindHospitalPage'
import SettingsPage from './Adio/pages/SettingsPage'
import DashboardLayout from './Adio/DashboardLayout'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"",
      element:<HomeRoutes/>,
      children:[
        {
          path:"/",
          element:<LandingPage/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/works",
          element:<Howitworks/>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children:[
        {
          path: "",
          element: <ProfilePage/>
        },
        {
          path: "findhospital",
          element: <FindHospitalPage/>
        },
        {
          path: "history",
          element: <History/>
        },
        {
          path: "settings",
          element: <SettingsPage/>
        },
      ]
    },
    {
      path:"/hospitalsignup",
      element:<Hospitalsignup/>
    },
    {
      path:"/hospitallogin",
      element:<Hospitallogin/>
    },
    {
      path:"/donorslogin",
      element:<Donorslogin/>
    },
    {
      path:"/donorssignup",
      element:<Donorssignup/>
    },
    {
      path:"/resetpassword",
      element:<Resetpassword/>
    },
    {
      path:"/kyc",
      element:<KYC/>
    },
    
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App