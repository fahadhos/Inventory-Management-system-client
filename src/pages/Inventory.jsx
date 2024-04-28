 
import Container from './../container/Container';
import  { useContext, useState } from 'react';
import {FcMenu} from 'react-icons/fc';
import icon from '/icon.png';
import { GrPowerShutdown,GrLogin } from "react-icons/gr";
import { AiFillHome, AiOutlineDownCircle } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
 
import { AiOutlineCloseSquare ,AiOutlineMenu} from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider'; 
  
import { Helmet } from 'react-helmet-async';

const Inventory = () => {

    const {user,logOut}
=useContext(AuthContext)

return (
        <div> 
            <Helmet><title>InventoHub | Inventory </title></Helmet>
            <Container><p>inventory
      
                </p></Container>
        </div>
    );
};

export default Inventory;