import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function MarketPlace() {
  return (
    <>
    <div style={{paddingTop:"125px"}}>
    <span style={{textAlign:'center',fontSize:"25px",fontWeight:'600',color:'blue',paddingLeft:'110px',position:"relative",top:"-20px"}}></span>
      <div style={{paddingBottom:"100px",marginTop:"-70px",paddingLeft:"300px"}}>
     
    <Navbar ></Navbar>
  
    </div>
    <div style={{width:"95%"}}>
    
    </div>
    <div style={{marginTop:"-100px"}}>
    <Outlet></Outlet>
    </div>
    </div>
    </>
  );
}
