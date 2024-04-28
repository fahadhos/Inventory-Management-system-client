import { Outlet } from "react-router-dom";
import NavBar from './../shared/NavBar';
import Container from './../container/Container';
import Dashboard from './../pages/Dashboard';

 
const Main = () => {
    return (
        <div>
             <NavBar></NavBar> 
       
          
                 <Outlet></Outlet>
         
        </div>
    );
};

export default Main;