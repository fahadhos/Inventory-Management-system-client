 
import { Helmet } from 'react-helmet-async'
import loginimage from '/loginFrame.png'
import rectangle from '/Rectangle37.png'

import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <Helmet> <title> InventoHub | Register </title></Helmet>
       <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse">
 <div className="card  shadow-2xl bg-base-100">

  <form className="card-body">

    <div className='text-left space-y-4'>

    <img  src={rectangle} alt={rectangle} /> 
     <h1 className='font-bold text-2xl'>Register</h1>
     <p className='font-bold text-sm'>Manage all your inventory efficiently</p>
<p className='text-sm'>Let’s get you all set up so you can verify your personal account and begin setting up your work profile</p>
   
   {/* input border */}
     <div className='min-w-fit'>
  {/*first group input field  */}


     <div className="join join-vertical lg:join-horizontal relative   ">
<div className="form-control  lg:w-[21rem] ">
      <label className="label">
        <span className="label-text">First name</span>    
      </label>
      <input type="name" placeholder="Enter your first name" className="input input-bordered" required />
    </div>
    <div className="form-control relative -right-8  lg:w-[21rem]">
      <label className="label">
        <span className="label-text">Last name</span>    
      </label>
      <input type="name" placeholder="Enter your last name" className="input input-bordered" required />
    </div>
  
</div>
{/* second group field */}
<div className="join join-vertical lg:join-horizontal">
<div className="form-control  lg:w-[21rem] ">
      <label className="label">
        <span className="label-text">Email*</span>    
      </label>
      <input type="email" placeholder="Enter your email" className="input input-bordered" required />
    </div>
    <div className="form-control relative -right-8  lg:w-[21rem] ">
      <label className="  label">
        <span className="label-text ">Phone no</span>    
      </label>
      <input type="tel" placeholder="Enter your phone no" className="input input-bordered" required />
    </div>
  
</div>
     
     </div>
    </div>
  
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password*</span>
      </label>
      <input type="password" placeholder="minimum 8 characters" className="input input-bordered" required />
      <label className="label">
      <input type="checkbox" defaultChecked className="checkbox w-[1rem] h-[1rem]" />
     
        <a href="#" className="label-text-alt link link-hover">I agree to all terms, privacy policies, and conditions</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn rounded-2xl text-white bg-[#101540]">Sign Up</button>

      <p>Already have an account? <Link to='/login'> Log in</Link> </p>
    </div>
  </form>
</div>   
<div className="text-center lg:text-left">
 <img className='w-[504px] h-[781px]' src={loginimage} alt={loginimage} /> 
   </div>


</div>
</div> 
    </div>
    );
};

export default Register;