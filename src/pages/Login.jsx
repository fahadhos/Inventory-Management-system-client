 
import { Helmet } from 'react-helmet-async'
import loginimage from '/loginFrame.png'
import rectangle from '/Rectangle37.png'

import { FcGoogle } from "react-icons/fc";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from './../Providers/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {



    const [hidepass, setHidePass]=useState(true)

    const [passErrorMsg, setPassErrorMsg] = useState ()

    const {
        signUpGoogle,
    signIn
}=useContext(AuthContext)

const navigate = useNavigate()
// Normal login fuction

const handleLogin = e =>{

e.preventDefault();
const email = e.target.email.value
const password = e.target.password.value
    console.log(email,password);
 signIn(email,password).then(result=>{
    console.log(result?.user);
    
toast.success('Successfully signed in')
navigate( location?.state ? location.state : '/')
 })
 .catch(error=>{
      console.log(error?.message);
  toast.error('Your Email/Password is wrong')
 })

    }

//end of  Normal login fuction

    // google login function
const handleGoogleLogin= ()=>{

signUpGoogle().then(result=>{
    console.log(result?.user);
    toast.success('Login successful')
    setTimeout(()=>{
        Navigate(location?.state ? location.state :'/')
    },1000)
}).catch((error)=>{
    toast.error('Invalid meail/password')
    console.log(error.message);
})
}

    return (
        <div className=' '>
            <Helmet> <title> InventoHub | Login </title></Helmet>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img className='w-[630px] h-[481px]' src={loginimage} alt={loginimage} /> 
       </div>
    <div className="card shrink-0    shadow-xl  ">

        <div className='text-left space-y-4'>

        <img  src={rectangle} alt={rectangle} /> 
         <h1 className='font-bold'>Login</h1>
         <p>See your growth and get support!</p>
{/* google button */}
         <button onClick={handleGoogleLogin}
          className='bg-white border-black border-2 p-3 
       rounded-full  w-[20rem]'> 
         <div className='  text-sm flex  text-center relative justify-center'>
   
    <p className='relative top-1'>Sign in with google</p>  
 
            <FcGoogle className=' text-3xl   left-[1rem] relative '></FcGoogle>    
            </div>
             </button>
        </div>
        <p className="py-6 divider"> or </p>
       

       <form onSubmit={handleLogin} className="card-body  ">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password*</span>
          </label>
          <input   type={hidepass ? 'password' : 'text'}
            name='password' 
          placeholder="minimum 8 characters" 
          className="input input-bordered" required />
             <p
                  className="relative -top-8 text-xl left-[16rem]
                  max-sm:left-[16rem]
                  "      onClick={() => setHidePass (!hidepass)}
                >
                   
                  {hidepass ? <AiFillEye /> : <AiFillEyeInvisible />}    {' '}
                </p>
                <p className= ' bg-slate-300 text-red-600 text-sm font-bold absolute top-[33rem] ' >
               
               {passErrorMsg ? passErrorMsg : ''}  
               
                  </p>
          <label className="label">
          <input type="checkbox"   className="checkbox w-[1rem] h-[1rem]" />
         <p className='text-sm relative left-1'> Remember me </p> 
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

       
        <div className="form-control mt-6">
          <button   className="btn rounded-2xl text-white bg-[#101540]">Login</button>

          <p  className='top-4 relative '>Not regestered yet? <Link to='/register'> <span className='text-blue-600'> Create a new account
          </span> </Link>
           </p>
        </div>
     </form>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Login;