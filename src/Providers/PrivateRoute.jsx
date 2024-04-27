import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";

 
const PrivateRoute = ({children}) => {

    const location = useLocation()
    console.log('page location:', location);

    const {user, loading }= useContext(AuthContext)
    if(loading){
        return toast.success('Loading...')
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;