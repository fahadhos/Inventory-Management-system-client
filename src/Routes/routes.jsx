import {
    createBrowserRouter,
  
  } from "react-router-dom";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import Main from './../layout/Main';
import Login from './../pages/Login';
import Register from './../pages/Register';




  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
{
// path: "/",
    // element: <Home></Home>,
},
{
    path:"/login",
    element: <Login></Login>,

},
{
    path:"/register",
    
    element: <Register></Register>
}

      ]
    },
  ]);

  export default router