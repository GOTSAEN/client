import React from 'react'
import { ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'
import { getCookie } from '@/utils/cookie'
export default function ProtectedRoutes({ children }) {
  const { user } = useAuth()
  const session =
    window.localStorage.getItem('Authorization')

  if (!(user?.auth === 'youtuber' && session)) {
    return <Navigate to='/login' replace />
  }

  return children
}
