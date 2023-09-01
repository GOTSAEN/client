import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
)
