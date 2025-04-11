import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importing pages and components
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
import Hospitalterms from './Esther/terms/Hospitalterms'
import Donorterms from './Esther/terms/Donorterms'
import Authentry from './Esther/auth/Authentry'

const App = () => {
  const router = createBrowserRouter([
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
        { path: "subscribe", element: <Subscrib /> }
      ]
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
    }
  ])

  return <RouterProvider router={router} />
}

export default App
