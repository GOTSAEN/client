import React from 'react'
import { ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'
import { getCookie } from '@/utils/cookie'
export default function ProtectedAdminRoutes({ children }) {
  const { user } = useAuth()
  const session =
    window.localStorage.getItem('Authorization')

  if (!user?.auth === 'advertisement' || !session) {
    return <Navigate to='/login' replace />
  }

  return children
}
