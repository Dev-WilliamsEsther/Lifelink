import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
import HistoryPage from './Adio/pages/HistoryPage'
import Appointment from './Davidson/pages/Appointment'
import RecordPage from './Davidson/pages/RecordPage'
import RequstPage from './Davidson/pages/RequstPage'
import Subscrib from './Davidson/pages/Subscribe'
import HospitalDetailsPage from './Adio/pages/HospitalDetailsPage'
import Hospitalterms from './Esther/terms/Hospitalterms'
import Donorterms from './Esther/terms/Donorterms'
import Authentry from './Esther/auth/Authentry'
import Scrolltop from './components/scroll/Scrolltop'
import Verification from './Esther/pages/Verification'
import Settings from './Esther/pages/Settings'
import Blacklist from './Esther/pages/Blacklist'
import Adminsignin from './Esther/pages/Adminsignin'
import Adminlogin from './Esther/pages/Adminlogin'
import Adminreset from './Esther/pages/Adminreset'
import PrivateRoutes from './routes/PrivateRoutes'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"",
      element:<Scrolltop/>,
      children:[
        {
      path: "",
      element: <HomeRoutes />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/howitworks", element: <Howitworks /> }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "", element: <ProfilePage /> },
        { path: "findhospital", element: <FindHospitalPage /> },
        { path: "history", element: <HistoryPage /> },
        { path: "settings", element: <SettingsPage /> },
        { path: "appointment", element: <Appointment /> },
        { path: "records", element: <RecordPage /> },
        { path: "request", element: <RequstPage /> },
        { path: "hospitaldetails", element: <HospitalDetailsPage /> },
        { path: "subscribe", element: <Subscrib /> },
        {path:"adminverification",element:<Verification/>},
        {path:"adminsettings",element:<Settings/>},
        {path:"adminblacklist",element:<Blacklist/>},
      ]
    },
    {
      path:"/private",
      element:<PrivateRoutes/>
    },
    {
      path:"/authentry",
      element:<Authentry/>
    },
    {
      path:"/signup",
      element:<Authentry type="signup"/>
    },
    {
      path:"/login",
      element:<Authentry type="login"/>
    },
    {
      path: "/hospitalsignup",
      element: <Hospitalsignup />
    },
    {
      path: "/hospitallogin",
      element: <Hospitallogin />
    },
    {
      path: "/donorslogin",
      element: <Donorslogin />
    },
    {
      path: "/donorssignup",
      element: <Donorssignup />
    },
    {
      path: "/resetpassword",
      element: <Resetpassword />
    },
    {
      path: "/kyc",
      element: <KYC />
    },
    {
      path:"/hospiterms",
      element:<Hospitalterms/>
    },
    {
      path:"/donorterms",
      element:<Donorterms/>
    },
    {
      path:"/adminsignin",
      element:<Adminsignin/>
    },
    {
      path:"/adminlogin",
      element:<Adminlogin/>
    },
    {
      path:"/adminreset",
      element:<Adminreset/>
    }
  ]
    },
    
  ])

  return <RouterProvider router={router} />
}

export default App
