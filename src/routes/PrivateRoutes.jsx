import React from 'react';
import { useUser } from '../global/UseUser';
import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from '../Adio/DashboardLayout';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({children}) => {
  // const { user } = useUser();
  const token = useSelector((state)=>state.loggedInUser.token)
  console.log("Our user", token)

  return token ? children : <Navigate to="/authentry" replace/>;
};

export default PrivateRoutes;
