import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Cart from './Pages/Cart.jsx'
import Order from './Pages/Order.jsx'
import Layout from './Pages/Layout.jsx'
import Register from './Pages/Register.jsx'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order",
        element: <Order/>
      }
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />)

