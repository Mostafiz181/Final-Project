import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";








export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"menu",
        element:<Menu></Menu>
      },
      {
        path: "order/:category",
        element:<Order></Order>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"secret",
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
      }
 
    ],
  },
  {
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:"mycart",
        element:<MyCart></MyCart>
      },
      {
        path:"allusers",
        element:<AllUsers></AllUsers>
      },
      {
        path:"addItems",
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      }

    ]
  }
]);
