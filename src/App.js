import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/homePage';

const Layout = () => (
  <>
    {/* <Navbar /> */}
    <Outlet />
  </>
);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

const App = () => (
  <div className="app" data-testid="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
