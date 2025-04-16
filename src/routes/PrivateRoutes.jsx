import React from 'react';
import { useUser } from '../global/UseUser';
import { Navigate } from 'react-router-dom';
import DashboardLayout from '../Adio/DashboardLayout';

const PrivateRoutes = () => {
  const { user } = useUser();

  return user ? <DashboardLayout /> : <Navigate to="/authentry" />;
};

export default PrivateRoutes;
