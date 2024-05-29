import React from 'react'
import Navbar from '../Nevbar'
import '../../../CSS/Algoshopping.css'
import Bluebackground from '../../../Animations/BlueBackground1.jpg'
export default function FeaturesHome() {
  return (
    <div>
        <Navbar></Navbar>
        <div style={{marginTop:'100px',height:"400px",display:"flex",justifyContent:'center',alignItems:"center",background:`url(${Bluebackground})`,backgroundSize:'cover'}}>
            <div>
            <div class="flex justify-center">
            <div 
             style={{fontFamily:"poppins",fontSize:'26px',fontWeight:'600'}}>
              <span style={{color:"blue"}}>Features</span>  
                </div>

            </div>
            <div style={{display:'flex',justifyContent:'center',textAlign:'center',marginTop:'-25px'}}>
            <div style={{width:"80%",textAlign:'center',paddingTop:'40px',fontFamily:'poppins',fontSize:'20',fontWeight:'500',color:'seagreen'}}>Navigating the intricate realm of capital trading becomes effortless with our groundbreaking AI-powered features, designed to serve both businesses and individuals.</div>
            
            </div>
            <div class="flex justify-center" style={{marginTop:'20px'}}>
            <div class="Featuresbutton" style={{color:'white'}}>
              <span>Expore MarketPlace</span>  
                </div>

            </div></div>
        </div>
    </div>
  )
}
