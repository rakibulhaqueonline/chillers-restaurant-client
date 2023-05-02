import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
      path: "/blog",
      element: <Blog></Blog>,
     }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)