import React from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function AlertToast({ status, message }) {
  const notify = () =>
    toast[status](message, {
      icon: false,
    })

  return (
    <>
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='light'
        limit={1}
      />
    </>
  )
}
