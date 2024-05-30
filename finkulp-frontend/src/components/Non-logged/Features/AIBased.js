import React from 'react'
import blueBackground from '../../../Animations/BlueBackground1.jpg'
export default function AIBased() {
  return (
    <div style={{paddingTop:"100px",background:`url(${blueBackground})`,backgroundSize:"100%",paddingBottom:'150px'}}>
      <div class="d-flex flex-column" style={{display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
      <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-solid fa-microchip" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>AI Based Strategy Generation</div>
        <div style={{display:'flex',justifyContent:"center"}}>
            <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}
             data-aos="fade-up"
             data-aos-offset="50"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
             data-aos-anchor-placement="center" >
           
In our marketplace, you'll find automated trading algorithms crafted through meticulous mathematical modeling and rigorous scientific methods. These algorithms operate with absolute precision, eliminating human errors, and excel in handling trade volumes reaching into the millions.</div>
        </div>
    </div>
  )
}
