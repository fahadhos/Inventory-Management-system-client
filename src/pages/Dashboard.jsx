import React, { useEffect, useState } from 'react';
import Container from './../container/Container';
import { RiFileList3Line } from "react-icons/ri";
import { FaBoxOpen } from 'react-icons/fa';
import { TbTrashOff } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import Constants from '../Constants';
const Dashboard = () => {


  const [items, setItems]=useState([])

  useEffect(()=>{

    fetch(`${Constants.BASE_URL}/items`)
    .then(res=>res.json())
    .then(data=>{
      const filtered =  data.data
//  console.log(filtered,'useeffect');
      setItems(filtered);

      // const write = data.filter(write=> write.userId == user.uid)
      // setWritereview(write)
    })
},[])

console.log(items,'from state');
  
    return (
        <Container>
              <div className='fixed  '>
            <>
            
<div className="grid grid-cols-4 gap-4">


     <div className="stats bg-primary text-primary-content ">
  {/* items */}
  <div className="stat">
    <div className="stat-title text-white">Total Items</div>
    <div className="stat-value flex gap-2">
        <RiFileList3Line></RiFileList3Line>
        {items.length}
        
        </div>
    <div className="stat-actions">
      {/* <button className="btn btn-sm btn-success">Add funds</button> */}
    </div>
  </div>
 
</div>
          
          {/* inventory display */}
            <div className="stats bg-secondary text-secondary-content">
  
  <div className="stat">
    <div className="stat-title text-white">Total Inventorys</div>
    <div className="stat-value flex gap-2">
        <FaBoxOpen></FaBoxOpen>
        8
        
        </div>
    <div className="stat-actions">
      {/* <button className="btn btn-sm btn-success">Add funds</button> */}
    </div>
  </div>
 
</div>
</div>


<div className="stock-items">

<div className="overflow-x-auto   ">
  <table className="table  w-[15rem] rounded-2xl  ">
    {/* head */}
    <thead className='rounded-2xl'>
        <tr>
            <th className='font-bold text-black border-b-4'>Stock Items</th>
        </tr>
      <tr className='text-center '>
        <th>S/N.</th>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Qty.</th>
        <th>Actions.</th>
      </tr>
    </thead>
    { items.map(item => 
   <>  <tbody className='rounded-2xl'>      
      <tr className="">
  <th className='text-center'>
           {item.id}
        </th>
        <td>    {item.name}</td>
        <td className='overflow   text-pretty'>  
        {item.description}
          </td>
        <td><img className='overflow w-[53px] ' src="https://i.pinimg.com/564x/b2/83/83/b2838357f087a8e8b2c07951c3e5ee1a.jpg" alt="" /></td>
        <td className='text-center'>
        {item.qty}
         </td> 
 <td>
  <button>
  <TbTrashOff className='text-2xl text-red-600'/>
  <FaRegEdit className='text-2xl text-green-600' />
  </button>
  </td>  
      </tr>
       
       
    </tbody> </>  
     )
        }
  </table>
</div>
</div>
            </>
        </div>  
        </Container>
    
    );
};

export default Dashboard;