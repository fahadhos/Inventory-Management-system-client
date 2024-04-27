 
import { Helmet } from 'react-helmet-async'
import loginimage from '/loginFrame.png'
import rectangle from '/Rectangle37.png'

import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth'; 
import { AiFillEyeInvisible ,AiFillEye} from 'react-icons/ai';
 
const Register = () => {


  const [hidepass, setHidePass] = useState (true);
  // 
  const [errorMsg, setErrorMsg] = useState (null)
  const [errorCapitalMsg, setErrorCapitalMsg] = useState (null)
  const [specialErrorMsg, setSpecialErrorMsg] = useState (null)
  
  const {
    signUp,signUpGoogle
  }= useContext(AuthContext)

const location = useLocation()

const navigate = useNavigate()

// normal registration functionality


const handleRegister = e =>{
    e.preventDefault()

    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
   
console.log(firstname, lastname, email,phone,password);
 



setErrorMsg('')
setErrorCapitalMsg('')
setSpecialErrorMsg('')


if(password.length<6){
    return  setErrorMsg('Password must be at least 6 characters')
} 


if(!/[A-Z]/.test(password)){
    return setErrorCapitalMsg('Password must be at least one capital letters')
    
}
if(!/[!@#$%^&*_+;<>,.?~\\-]/.test(password)){
    return  setSpecialErrorMsg('Password must have one special characters eg:$,#')
}

{
    signUp(  email,password)
    .then( result=>{
        
        console.log(result.user)
        updateProfile(result?.user,{
            displayName: firstname, 
            photoURL: 'https://i.ibb.co/60y05cV/user.png'
        }).then(
            r=>{
                console.log(r.user);
                
            }
            ).catch(e=>{
                console.error(e.message)
            }) 
            toast.success('Account Has Successfully Created')
            
            
            setTimeout(()=>{
                navigate( location?.state ? location.state : '/'     )
            },1000) 
        })
        .catch(err => {
            console.error(err.message)
        })
        
    }
}
// end of  normal registration functionality

// google signup function
const handleGoogleLogin =()=>{
    
    signUpGoogle()    .then(result=>{
        
    console.log(result.user);
    toast.success('Account Has Successfully Created')
    
    navigate( location?.state ? location?.state : '/')

  })
  .catch((error)=>{
    toast.success(error.message)
    
    console.log(error);
  })
  }

    return (<>

        <div>
        <Helmet> <title> InventoHub | Register </title></Helmet>

       
       <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row-reverse">
 <div className="card  shadow-2xl bg-base-100">
 
 
   
          
  <form onSubmit={handleRegister}className="card-body">

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
      <input type="name" name='firstname' placeholder="Enter your first name" className="input input-bordered" required />
    </div>
    <div className="form-control relative -right-8  lg:w-[21rem]">
      <label className="label">
        <span className="label-text">Last name</span>    
      </label>
      <input type="name" name='lastname' placeholder="Enter your last name" className="input input-bordered" required />
    </div>
  
</div>
{/* second group field */}
<div className="join join-vertical lg:join-horizontal">
<div className="form-control  lg:w-[21rem] ">
      <label className="label">
        <span className="label-text">Email*</span>    
      </label>
      <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
    </div>
    <div className="form-control relative -right-8  lg:w-[21rem] ">
      <label className="  label">
        <span className="label-text ">Phone no</span>    
      </label>
      <input type="tel" name='phone' placeholder="Enter your phone no" className="input input-bordered" required />
    </div>
  
</div>
     
     </div>
    </div>
  
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password*</span>
      </label>
      <input type=
      {hidepass? `password`:`text`} name='password' placeholder="minimum 8 characters"
       className="input input-bordered w-[44rem]" required />
         <p className="relative -top-8 text-xl left-[42rem]
                  max-sm:left-[16rem]"     
                   onClick={() => setHidePass (!hidepass)}
                >                    
                  {hidepass ? <AiFillEye /> : <AiFillEyeInvisible />}  
                </p>
                {/* <p className= ' bg-slate-300 text-red-600 text-sm font-bold absolute top-[33rem] ' >
               
               {passErrorMsg ? passErrorMsg : ''}                 
                  </p> */}
      <label className="label">
      <input type="checkbox" defaultChecked className="checkbox w-[1rem] h-[1rem]" required/>
     
        <a href="#" className="label-text-alt link link-hover relative -left-[33rem]">I agree to all terms, privacy policies, and conditions</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn rounded-2xl text-white bg-[#101540]">Sign Up</button>

      <p className='top-4 relative '>Already have an account? <Link to='/login'> <span className='text-red-500'>Log in</span> </Link> </p>
    </div>
  </form>
{/* google button */}
   <p className="py-6 px-40 divider"> or </p>
   <div className="grid place-content-center pb-10">

      <button onClick={handleGoogleLogin}
          className='bg-white border-black border-2 p-5 
          rounded-full justify-center relative items-center text-center grid place-content-center w-[20rem]'> 
         <div className='  text-sm flex  text-center relative justify-center'>
   
    <p className='relative top-1'>Sign up with google</p>  
  
            <FcGoogle className=' text-3xl   left-[1rem] relative '></FcGoogle>    
            </div>
             </button>
   </div>
          {/* end of  google button */}
</div>   
<div className="text-center lg:text-left">
 <img className='w-[504px] h-[781px]' src={loginimage} alt={loginimage} /> 
   </div>


</div>
</div> 
   </div>
   </>
    );
};

export default Register;