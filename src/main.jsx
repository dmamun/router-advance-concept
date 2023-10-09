import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout.jsx';
import Home from './Home.jsx';
import Favorite from './Favorite.jsx';
import Login from './Login.jsx';
import Phone from './Phone';
import ErrorPage from './ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader : ()=> fetch('/Phones.json')
      },
      {
        path:"/favorite",
        element:<Favorite></Favorite>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/phones/:id",
        element:<Phone></Phone>,
        loader:()=>fetch("/Phones.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
