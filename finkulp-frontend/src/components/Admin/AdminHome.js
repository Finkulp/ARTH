import React from 'react'
import AdminNavbar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function AdminHome() {
  return (
    <div>
      <AdminNavbar/>
      <Outlet></Outlet>
    </div>
  )
}
