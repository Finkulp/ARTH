import React from 'react'
import Navbar from '../Nevbar'
import '../../../CSS/Algoshopping.css'
import Bluebackground from '../../../Animations/BlueBackground1.jpg'
import { useState } from 'react'
import Featurespage1 from './Featurespage1'
import Story from './Stroy'
import ResourcesHome from '../Resources/ResourcesHome'
export default function FeaturesHome() {
  const[list,setlist]=useState(false);
  return (
    <>
    <div>
    {list&&
        <div style={{position:'absolute', zIndex:"10001",left:'715px',top:'50px'}}>
        <ResourcesHome></ResourcesHome>
        </div>}
        <Navbar list={list}setlist={setlist}></Navbar>
        <div style={{marginTop:'100px',height:"400px",display:"flex",justifyContent:'center',alignItems:"center",background:`url(${Bluebackground})`,backgroundSize:'cover'}}>
            <div>
            <div class="flex justify-center">
            <div 
             style={{fontFamily:"poppins",fontSize:'26px',fontWeight:'600'}}>
              <span style={{color:"blue"}}
               data-aos="fade-up"
               data-aos-offset="50"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="center" >Features</span>  
                </div>

            </div>
            <div style={{display:'flex',justifyContent:'center',textAlign:'center',marginTop:'-25px'}}>
            <div style={{width:"80%",textAlign:'center',paddingTop:'40px',fontFamily:'poppins',fontSize:'20',fontWeight:'500',color:'seagreen'}}
             data-aos="fade-up"
             data-aos-offset="50"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="center" >Navigating the intricate realm of capital trading becomes effortless with our groundbreaking AI-powered features, designed to serve both businesses and individuals.</div>
            
            </div>
            <div class="flex justify-center" style={{marginTop:'20px'}}>
            <div class="Featuresbutton" style={{color:'white'}}>
              <span>Expore MarketPlace</span>  
                </div>
            </div>
            </div>
        </div>
    </div>
    <div style={{justifyContent:'center'}}> 
   <Featurespage1></Featurespage1>
   <Story></Story>
   </div>
   </>
  )
}
