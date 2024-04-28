import React, { useContext, useState } from 'react';
import {FcMenu} from 'react-icons/fc';
import icon from '/icon.png';
import { IoMdSearch } from "react-icons/io";
import { GrPowerShutdown,GrLogin } from "react-icons/gr";
import { AiFillHome, AiOutlineDownCircle } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import './NavStyle.css';
import { MdNotificationsActive } from "react-icons/md";
import { AiOutlineCloseSquare ,AiOutlineMenu} from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Dashboard from '../pages/Dashboard';
const NavBar = () => {


const {loading ,user, logOut}= useContext(AuthContext)

console.log('isloading',loading);
    const navlinks = <>
      <li >
        <NavLink to='/dashboard'>
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
    
    <section className='flex   '> 
 
 {/*sidebar  */}
 {/* <div className={ menu ?`drawer lg:drawer-open  `:` lg:drawer-open drawer -left-[10rem]   relative` }> */}
 <div className="drawer lg:drawer-open">

  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  
  
    <label htmlFor="my-drawer-2" className="btn btn-primary text-black text-3xl bg-transparent drawer-button border-none left-10 relative lg:hidden">  <AiOutlineMenu className='top-3'/>
 {/*   <AiOutlineMenu onClick={()=>openmenu(setMenu(!true))} 
          className={ menu && `text-3xl -top-[7rem] left-[18rem] z-10 text-black relative 
         visible` || `z-10 text-3xl -top-[7rem]  left-[18rem] text-black relative 
         visible `}></AiOutlineMenu> 
           <AiOutlineMenu onClick={()=>openmenu(setMenu(!true))} 
          className={ menu && `text-3xl -top-[7rem] left-[18rem] z-10 text-black relative 
         visible` || `z-10 text-3xl -top-[7rem]  left-[18rem] text-black relative 
         visible `}></AiOutlineMenu> */}
          </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu  
     min-h-full 
    relative   p-4 
    w-[15rem]   
     text-white 
    bg-gradient-to-r from-sky-400 via-sky-400 to-blue-500
    backdrop:  ">
      {/* Sidebar content here */}
      
  <img className='relative  pb-[5rem]  border-b-1  ' src={icon} alt="" />

  {/* <AiOutlineCloseSquare onClick={()=>openmenu(setMenu(false))}   
         className={menu? ` border-b-2 -top-[6rem] text-red-200 relative left-[11rem] 
          text-3xl  `:` border-b-2 -top-[6rem] text-red-200 relative left-[11rem] 
          text-3xl hidden `  }>
         </AiOutlineCloseSquare>
         <AiOutlineMenu onClick={()=>openmenu(setMenu(!true))} 
          className={ menu && `text-3xl -top-[7rem] left-[18rem] z-10 text-black relative 
         visible` || `z-10 text-3xl -top-[7rem]  left-[18rem] text-black relative 
         visible `}></AiOutlineMenu> */}


  {/* auto navlinks will appear  */}
  <p className='relative mt-10 text-2xl '>

{navlinks}
  </p>
  
    </ul>
  
  </div>
</div>
 {/* ------------------------------------------------- */}

   
{/* nav head */}
<div className="navbar-center h-[6rem]  justify-center items-center text-center relative    grid place-content-center border-b-2 w-[70rem] pb-[4rem]">
 <div>

<a className="btn btn-ghost text-xl top-[4rem] -left-[18rem] relative ">InventoHub</a> 
 </div>
 <div className="navbar-center relative left-[9rem] ">
    <button className="btn btn-ghost btn-circle">
  <IoMdSearch className='text-2xl'/>
       
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <MdNotificationsActive className='text-2xl'/>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
     
{    loading ? 
    <>
<span className="loading loading-infinity loading-xs"></span>
    </> 
    :     
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
{     user ?   
             <img  src={user?.photoURL} alt="user photo"/>:
       <> </>
       
     }
  </div>
  </div>
}

{/* profile name here */}

{
user ? <> 
<div className="dropdown  dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">{'Welcome, '+user?.email  }<AiOutlineDownCircle></AiOutlineDownCircle></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
  <p className='p-4 text-left -left-[2rem] relative mx-auto text-blue-600'>
  {user?.displayName} 
</p>
<li className='border-none text-left items-start justify-start'><button onClick={logOut} className='backdrop-blur-sm relative left-5 pt-5 bg-white/30 border-none hover:bg-sky-200'>
   Log Out 
<GrPowerShutdown className='text-red-600'></GrPowerShutdown> </button>
</li>
  </ul>
</div>

</>: <>
<Link to='/login'  
className="btn rounded-2xl relative -left-10 text-white bg-[#101540]">
<GrLogin/>
Login</Link>

</>
}
 </div>
 </div>
 
  


  </section> 
  
  );
};

export default NavBar;