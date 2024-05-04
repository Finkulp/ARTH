import React from 'react'
import NevBar from './NevBar'
import {Outlet } from 'react-router-dom'
export default function Loggedin() {
  return (
    <>
    <NevBar></NevBar>
    <Outlet></Outlet>
    </>
  )
}
