import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import storeRedux from './redux/Store/StoreRedux.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Login from './pages/authentication/Login.jsx';
import ResetPassword from './pages/authentication/ResetPassword.jsx';
import ChangePassword from './pages/authentication/ChangePassword.jsx';
import AcountPage from './pages/main/AccountPage.jsx';
import Register from './pages/authentication/Register.jsx';
import HomePage from './pages/HomePage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: '/account',
        element: <AcountPage />
      }
    ],

  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/change-password',
    element: <ChangePassword />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: <HomePage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeRedux}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
