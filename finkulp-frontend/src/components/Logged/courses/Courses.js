import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function Courses() {
  return (
    <>
    {/* <div style={{position:"relative",left:'190px',top:'10px'}}><span > <Navbar></Navbar></span> */}
    {/* </div> */}
       <Outlet></Outlet>
       </>
  )
}
