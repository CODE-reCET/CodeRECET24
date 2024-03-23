import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Resources from './pages/resources/Resources';
import Community from './pages/community/Community';
import Bin from './pages/about/About';

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
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/bin",
    element: <Bin />,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);
