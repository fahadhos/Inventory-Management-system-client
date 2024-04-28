import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import router from './Routes/routes';
import AuthProvider from './Providers/AuthProvider';
import { 
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
<AuthProvider>

{/* for creating auto title of webpage using helmet */}
<HelmetProvider>
  {/* it will provide routing */}
  <Toaster></Toaster>
<RouterProvider router={router}></RouterProvider>
</HelmetProvider>
</AuthProvider>



  </React.StrictMode>,
)
