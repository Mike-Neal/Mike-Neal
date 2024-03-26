import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cerulean/bootstrap.min.css';

import AboutPage from './pages/AboutPage.jsx';
import AppsPage from './pages/AppsPage.jsx';
import ErrorPage from './pages/errorPage.jsx';
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'AboutPage',
        element: <AboutPage />,
      },
      {
        path: 'AppsPage',
        element: <AppsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
