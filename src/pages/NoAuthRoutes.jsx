import React from 'react'
import { Navigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
const cookies = new Cookies()
export default function NoAuthRoutes({ children }) {
  const session = cookies.get('SESSIONID')

  if (session) {
    return <Navigate to='/' replace />
  }

  return children
}
