import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function Courses() {
  return (
    <>
    <div style={{marginTop:"90px",position:'relative',left:"-300px"}}><Navbar></Navbar></div>
       <Outlet></Outlet>
       </>
  )
}
