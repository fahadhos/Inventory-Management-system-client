 
import { Link, useRouteError } from 'react-router-dom';
import errorbg  from '/error.jpg'
const ErrorPage = () => {


    const error= useRouteError();

        return (
       <div className="
       overflow-hidden
       grid place-content-center
          bg-white
          text-center
          text-white h-[40rem]" >
            
          <div className='relative -top-10 text-2xl'>
    
            <h1 className='grid place-content-center text-4xl m-5'>
                <img className='  w-[33rem]' 
             src={errorbg} alt="erroranimation" />
             </h1>
            {/* <p className='m-5  '>Sorry, an unexpected error has occurred.</p> */}
            <p className='m-5  '>
              <i>{error?.statusText || error?.message}</i>
            </p>
            <Link to="/">
              <button className="
              relative  -top-24
              btn capitalize 
              text-white
              bg-gradient-to-t
              hover:from-green-400 hover:to-green-500
               from-blue-500 to-yellow-500 
              ">Go Back Home</button>
            </Link>
          </div>
        </div>
    );
};

export default ErrorPage;