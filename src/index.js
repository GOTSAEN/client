import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import NotFound from '@pages/NotFound'
import Home from '@pages/Home'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
    ],
  },
])
root.render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
)
