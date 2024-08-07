import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../src/pages/Login'
import Homepage from '../src/pages/Homepage'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/homepage',
    element: <Homepage />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
