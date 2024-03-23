import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
  
 const router = createBrowserRouter([
   {
    path: "/",
    element: <Login />,
   },
   {
     path: "/App",
     element: <App />,
   },{
    path: "/home",
    element: <Home />,
  },
   
 ]);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);
