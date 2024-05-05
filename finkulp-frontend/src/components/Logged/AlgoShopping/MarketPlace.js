import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function MarketPlace() {
  return (
    <>
    <div style={{paddingTop:"125px"}}>
      <div style={{paddingBottom:"100px"}}>
    <Navbar ></Navbar>
    </div>
    <div style={{marginTop:"-100px"}}>
    <Outlet></Outlet>
    </div>
    </div>
    </>
  );
}
