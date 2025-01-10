import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h3>Route Not Found</h3>,
      children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'register',
        element:<Register></Register>
      }
      ]
    },
  ]);

  export default router;