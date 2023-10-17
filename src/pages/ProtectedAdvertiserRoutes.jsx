import React from 'react'
import { ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'
import { getCookie } from '@/utils/cookie'
import { deleteUserSession } from '@/service/login-auth'
console.log(getCookie('Authorization'))
export default function ProtectedAdminRoutes({ children }) {
  const { user, logout } = useAuth()
  const session = getCookie('Authorization')

  if (!(user?.auth === 'advertisement' && session)) {
    logout()
    return <Navigate to='/login' replace />
  }

  return children
}
