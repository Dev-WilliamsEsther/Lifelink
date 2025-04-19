import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ children }) => {
  const user = useSelector((state) => state?.loggedInUser);
  const token = user?.token || user?.data?.token;

  console.log("Our user token:", token);

  return token ? children : <Navigate to="/authentry" replace />;
};

export default PrivateRoutes;
