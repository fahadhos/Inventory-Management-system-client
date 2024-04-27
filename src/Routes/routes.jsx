import {
    createBrowserRouter,
  
  } from "react-router-dom";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import Main from './../layout/Main';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Dashboard from './../pages/Dashboard';
import Items from './../pages/Items';
import Inventory from './../pages/Inventory';




  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
    

  children:[
{
path: "/dashboard",
    element: <Dashboard></Dashboard>,
},
{
path: "/items",
    element: <Items></Items>,
},
{
path: "/inventory",
    element: <Inventory></Inventory>,
},
      ]
    },{
    path:"/login",
    element: <Login></Login>,

},
{
    path:"/register",
    
    element: <Register></Register>,
},
  ]);

  export default router