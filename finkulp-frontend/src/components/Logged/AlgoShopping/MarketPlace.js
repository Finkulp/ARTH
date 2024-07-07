import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MarketPlace() {
  return (
    <>
    <div style={{marginTop:'20px'}}>
    <Outlet></Outlet>
    </div>
    </>
  );
}
