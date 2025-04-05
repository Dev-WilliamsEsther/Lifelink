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
import Resetpassword from './Esther/auth/resetpassword'
import KYC from './Esther/auth/KYC'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"",
      element:<HomeRoutes/>,
      children:[
        {
          path:"",
          element:<LandingPage/>
        },
        {
          path:"",
          element:<AboutUs/>
        },
        {
          path:"",
          element:<Howitworks/>
        }
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