import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function Courses() {
  return (
    <>
    <div><span style={{position:'relative',top:'10px',left:'120px',width:'500px'}}> <Navbar></Navbar></span>
    </div>
       <Outlet></Outlet>
       </>
  )
}
