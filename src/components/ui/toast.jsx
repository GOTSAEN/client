import { useDarkMode } from '@/context/DarkModeContext'
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function AlertToast({ status, message }) {
  const { darkMode } = useDarkMode()

  return (
    <ToastContainer
      toastClassName={'pretendard'}
      position='bottom-center'
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme={darkMode ? 'dark' : 'light'}
      limit={1}
    />
  )
}
