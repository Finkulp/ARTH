import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function MainDashbord() {
  return (
    <div>
        <div style={{marginTop:'150px',marginBottom:'20px'}}>
    <div style={{display:'flex',gap:'1%'}}>
    <div style={{boxShadow:"1px 1px 10px black",width:'10%',paddingLeft:'10px',background:'white',height:'700px',position:'sticky',top:'0px'}}>
        <div style={{border:'soldi',width:'150px'}}></div>
        <Link to='/loggedhome/Dashboard'><div style={{fontFamily:"poppins",color:'		#FBBC05',fontWeight:'400',marginBottom:'20px',marginTop:'30px'}}>Dashboard</div></Link>   
        <Link to='/loggedhome/Dashboard/MyStrategy'><div style={{width:'100%',paddingRight:"1px",fontFamily:"poppins",color:'	#4285F4',fontWeight:'400',marginBottom:'20px'}}>My Strategies</div></Link>      
        <Link to='/loggedhome/Dashboard/my-courses'><div style={{fontFamily:"poppins",color:'	#4285F4',fontWeight:'400',marginBottom:'20px'}}>My Courses</div></Link>      
        <Link to='/loggedhome/Dashboard/Trade'> <div style={{fontFamily:"poppins",color:'	#4285F4',fontWeight:'400',marginBottom:'20px'}}>Trade Hisotry</div></Link>     
      </div>
      <Outlet></Outlet>
    </div>
    </div>
    </div>
  )
}
