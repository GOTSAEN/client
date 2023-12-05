import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
export default function ProtectedRoutes({ children }) {
  const { user, logout } = useAuth();
  const session = cookies.get('SESSIONID');

  if (!session || !user) {
    logout();
    return <Navigate to="/login" replace />;
  }

  return children;
}
