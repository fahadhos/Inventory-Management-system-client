import React from 'react';
import Container from './../container/Container';
import { RiFileList3Line } from "react-icons/ri";
import { FaBoxOpen } from 'react-icons/fa';
const Dashboard = () => {
    return (
        <div>
            <Container>
<div className="grid grid-cols-4 gap-4">


            <div className="stats bg-primary text-primary-content ">
  {/* items */}
  <div className="stat">
    <div className="stat-title text-white">Total Items</div>
    <div className="stat-value flex gap-2">
        <RiFileList3Line></RiFileList3Line>
        800
        
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
            </Container>
        </div>
    );
};

export default Dashboard;