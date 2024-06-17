import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function MainDashbord() {
  return (
    <div>
        <div style={{marginTop:'25px',marginBottom:'20px'}}>
    <div style={{display:'flex',gap:'1%'}}>
      <Outlet></Outlet>
    </div>
    </div>
    </div>
  )
}
