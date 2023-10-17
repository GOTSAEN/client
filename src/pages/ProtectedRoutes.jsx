import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'
import { deleteUserSession } from '@/service/login-auth'
import { getCookie } from '@/utils/cookie'
console.log(getCookie('Authorization'))
export default function ProtectedRoutes({ children }) {
  const { user, logout } = useAuth()
  const session = getCookie('Authorization')

  if (!(session && user.email)) {
    logout()
    return <Navigate to='/login' replace />
  }

  return children
}
