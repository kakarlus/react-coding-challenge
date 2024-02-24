import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home/Home.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/MainLayout.js';
import ShowsContainer from './components/shows-container/ShowsContainer.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/series",
    element: <ShowsContainer type="series" />,
  },
  {
    path: "/movies",
    element: <ShowsContainer type="movie" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeLayout>
      <RouterProvider router={router} />
    </HomeLayout>
  </React.StrictMode>
);
