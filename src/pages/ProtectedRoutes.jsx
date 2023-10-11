import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'
import { deleteUserSession } from '@/service/login-auth'
export default function ProtectedRoutes({ children }) {
  const { user, logout } = useAuth()
  const session =
    window.localStorage.getItem('Authorization')

  if (!(session && user.email)) {
    return <Navigate to='/login' replace />
  }

  return children
}
