import React, { useContext, useState } from 'react';
import {FcMenu} from 'react-icons/fc';
import icon from '/icon.png';
import { GrPowerShutdown,GrLogin } from "react-icons/gr";
import { AiFillHome, AiOutlineDownCircle } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import './NavStyle.css';
import { AiOutlineCloseSquare ,AiOutlineMenu} from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const NavBar = () => {


const {loading ,user, logOut}= useContext(AuthContext)

console.log(user);
    const navlinks = <>
      <li >
        <NavLink to=''>
        <span className='flex gap-1 justify-center items-center text-center'> 
        <AiFillHome ></AiFillHome>Dashboard
        </span>
        </NavLink>
        </li>

  <li>
    <NavLink to='/inventory'>  
    <span className='flex gap-1 justify-center items-center text-center'> <FaBoxOpen></FaBoxOpen> Inventory 
    </span></NavLink>
    </li>
  <li >
    <NavLink to='/items'>
         <span className='flex gap-1 justify-center items-center text-center'>
        <LiaClipboardListSolid></LiaClipboardListSolid> Items 
        </span>
        </NavLink>
    
    </li>
    </>
    const [menu, setMenu]=useState(true);

    
  const [isOpen, setIsOpen] = useState(false)
    const [closeMenu, setCloseMenu] = useState(true);
const closemenu = () => {
    setMenu(false);
    console.log('close menu',menu);
}
    const openmenu=()=>{
        setMenu(!menu)
        console.log('clicked',menu);
    }
    return ( 
    
    <section className='flex '> 
 
 {/*sidebar  */}
 <div className="drawer-content  relative z-10 ">
    {/* Page content here
   
    */}
    <label htmlFor="my-drawer" 
    className="    drawer-button">
    {
        menu &&<>
         <AiOutlineMenu onClick={()=>openmenu(setMenu(!true))} 
          className={ menu && `text-2xl relative left-10 mt-5 ` || `text-2xl hidden`}></AiOutlineMenu>
 
        </> ||<>
        <div className={ menu &&`drawer-side  hidden  ` &&  `drawer-side   ` }>

<label htmlFor="my-drawer" aria-label="close sidebar"
 className="  "></label>
<ul className="menu relative h-[100vh] p-4 w-[15rem] min-h-full text-white 
bg-gradient-to-r from-sky-400 via-sky-400 to-blue-500
">

  {/* Sidebar content here */}
 

  <img className='relative   border-b-8  ' src={icon} alt="" />
 
<AiOutlineCloseSquare onClick={()=>openmenu(setMenu(false))}   
         className={ ` border-b-4 -top-5 text-red-200 relative left-[11rem] 
          z-10 text-3xl  `  }>
         </AiOutlineCloseSquare>
  {/* auto navlinks will appear  */}
  <p className='relative mt-10 text-2xl '>

{navlinks}
  </p>
  
  
</ul>
</div>
       
        </>
    }    
    
    </label>
  </div> 
   
{/* nav head */}
 <div className="navbar bg-base-100 shadow  fixed -z-20    ">
        <div className="navbar-start">
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />


</div>
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div> */}
        </div>
       <>


       <div className="navbar-center   relative">

        
          <a className="btn btn-ghost text-xl">InventoHub</a>
        </div>
        <div className="navbar-end">
            {/* search button */}
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          {/* notification icon */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
{/* profile image */}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            {
                user ?
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />:<>
                </>
            }
        </div>
      </div>
{/* profile name here */}

{
    user ? <p>
        <details className=" justify-start text-left relative items-start  dropdown">
    <summary className="m-1 btn">Welcome, {user?.email}<AiOutlineDownCircle></AiOutlineDownCircle></summary>
    <ul className="p-2 justify-start text-left relative items-start   menu dropdown-content z-[1]  backdrop-blur-sm bg-white/30  w-52">
      <p className='p-4 text-left -left-[10rem] relative mx-auto'><span className='text-blue-600'>{user?.displayName} </span>
      </p>
      <li className='border-none text-left items-start justify-start'><button onClick={logOut} className='backdrop-blur-sm relative left-5 pt-5 bg-white/30 border-none hover:bg-sky-200'> Log Out 
      <GrPowerShutdown className='text-red-600'></GrPowerShutdown> </button>
      </li>
    </ul>
  </details></p>: <>
  <Link to='/login'  
   className="btn rounded-2xl relative -left-10 text-white bg-[#101540]">
   <GrLogin/>
    Login</Link>

    </>
}
        </div>

       </>
      </div>

  </section> 
  
  );
};

export default NavBar;