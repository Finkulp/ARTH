import React, { useState } from 'react';
import PaisaIcon from '../../../Images/5paisalogo.png';
import aliceblueIcon from '../../../Images/aliceblue.png';
import angleoneIcon from '../../../Images/angelone.png'
import HDFCSKYIcon from '../../../Images/HDFCSKy.png';
import KotakIcon from '../../../Images/kotak.png';
import motilalIcon from '../../../Images/motilal.jpg';
import upstocksIcon from '../../../Images/UpstoxIcon.png';
import ZerodthaIcon from '../../../Images/ZerodhaIcon.png'
import { Link } from 'react-router-dom';
import Motilal from './Motilal';
export default function AddedBroker() {
  return (
    <div>
      <div style={{ paddingTop: "120px" }}></div>
      <div style={{ fontSize:'20px', fontWeight:"600", fontFamily:"poppins", marginLeft:"100px",paddingBottom:'20px',color:'gray' }}>Select Broker</div>
      <div style={{display:'flex',justifyContent:'center',gap:"30px",flexWrap:"wrap",marginBottom:'20px'}}>
      <div style={{ display:'flex', justifyContent:'center',border:'1px', borderColor:'gray'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200 " style={{width:'250px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={PaisaIcon} style={{width:'90%',marginTop:"30px"}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',paddingTop:'50px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"Lato"}}>5Paisa</div>
        </div>
          <div style={{display:'flex',gap:'0px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'#0047AB',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px',fontFamily:"Lato",fontWeight:'300'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'#0047AB',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px',fontFamily:'Lato',fontWeight:'300'}}>BSE</button>
        </div>
        <hr style={{width:'250px',position:'relative',left:'-24px',color:'blue',marginTop:'30px',paddingBottom:'30px'}}></hr>
        <div style={{display:'flex',justifyContent:'right'}}>
        <div><Link to='/loggedhome/5paisa'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Click to Setup</button></Link></div>
          </div>
          </div>
      </div>

      {/* <div style={{ display:'flex', justifyContent:'center',boxShadow:'1px 1px 10px black',borderRadius:'10px'}}>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{borderRadius:'10px',width:'200px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={aliceblueIcon} style={{width:'80%'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'0px',marginTop:'25px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#9614d0',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#088F8F',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px'}}>BSE</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"poppins",color:"rgb(110, 109, 109)"}}>Alice Blue</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
       <Link to='/loggedhome/Alice-Blue'><button type="button" class="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{borderRadius:'5px',background:"	#4285F4"}}>Setup</button></Link> 
          </div>
          </div>
        </div> */}
         <div style={{ display:'flex', justifyContent:'center',border:'1px', borderColor:'gray'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{width:'250px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={aliceblueIcon} style={{width:'200px',height:'100px',marginTop:'-20px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',paddingTop:'50px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"Lato"}}>Alice Blue</div>
        </div>
          <div style={{display:'flex',gap:'0px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px',fontFamily:"Lato",fontWeight:'300'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px',fontFamily:'Lato',fontWeight:'300'}}>BSE</button>
        </div>
        <hr style={{width:'250px',position:'relative',left:'-24px',color:'blue',marginTop:'30px',paddingBottom:'30px'}}></hr>
        <div style={{display:'flex',justifyContent:'right'}}>
        <div><Link to='/loggedhome/Alice-Blue'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Click to Setup</button></Link></div>
          </div>
          </div>
      </div>
      {/* <div style={{ display:'flex', justifyContent:'center',boxShadow:'1px 1px 10px black',borderRadius:'10px'}}>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{borderRadius:'10px',width:'200px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={angleoneIcon} style={{width:'100%',marginTop:'-20px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'0px',marginTop:'20px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#9614d0',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#088F8F',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px'}}>BSE</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"poppins",color:"rgb(110, 109, 109)"}}>Angle One</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <Link to='/loggedhome/Angle-One'><button type="button" class="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{borderRadius:'5px',background:"	#4285F4"}}>Setup</button></Link>
          </div>
          </div>
          
      </div> */}

<div style={{ display:'flex', justifyContent:'center',border:'1px', borderColor:'gray'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{width:'250px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={angleoneIcon}style={{width:'200px',height:'100px',position:'relative',top:'-10px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',paddingTop:'30px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"Lato"}}>Angle One</div>
        </div>
          <div style={{display:'flex',gap:'0px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px',fontFamily:"Lato",fontWeight:'300'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px',fontFamily:'Lato',fontWeight:'300'}}>BSE</button>
        </div>
        <hr style={{width:'250px',position:'relative',left:'-24px',color:'blue',marginTop:'30px',paddingBottom:'30px'}}></hr>
        <div style={{display:'flex',justifyContent:'right'}}>
        <div><Link to='/loggedhome/Angle-One'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Click to Setup</button></Link></div>
          </div>
          </div>
      </div>
      {/* <div style={{ display:'flex', justifyContent:'center',boxShadow:'1px 1px 10px black',borderRadius:'10px'}}>
       
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{borderRadius:'10px',width:'200px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={HDFCSKYIcon} style={{width:'90%'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'0px',marginTop:'30px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#9614d0',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#088F8F',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px'}}>BSE</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"poppins",color:"rgb(110, 109, 109)"}}>HDFC SKY</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <button type="button" class="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{borderRadius:'5px',background:"	#4285F4"}}>Setup</button>
          </div>
          </div>
        </div> */}
      {/* <div style={{ display:'flex', justifyContent:'center',boxShadow:'1px 1px 10px black',borderRadius:'10px'}}>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{borderRadius:'10px',width:'200px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={KotakIcon} style={{width:'90%',marginTop:'15px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'0px',marginTop:'30px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#9614d0',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#088F8F',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px'}}>BSE</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"poppins",color:"rgb(110, 109, 109)"}}>Kotak</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <Link to='/loggedhome/Kotak'><button type="button" class="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{borderRadius:'5px',background:"	#4285F4"}}>Setup</button></Link>
          </div>
          </div>
          
      </div> */}

<div style={{ display:'flex', justifyContent:'center',border:'1px', borderColor:'gray'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{width:'250px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={KotakIcon}style={{width:'200px',height:'80px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',paddingTop:'50px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"Lato"}}>Kotak</div>
        </div>
          <div style={{display:'flex',gap:'0px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px',fontFamily:"Lato",fontWeight:'300'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px',fontFamily:'Lato',fontWeight:'300'}}>BSE</button>
        </div>
        <hr style={{width:'250px',position:'relative',left:'-24px',color:'blue',marginTop:'30px',paddingBottom:'30px'}}></hr>
        <div style={{display:'flex',justifyContent:'right'}}>
        <div><Link to='/loggedhome/kotak'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Click to Setup</button></Link></div>
          </div>
          </div>
      </div>
      {/* <div style={{ display:'flex', justifyContent:'center',boxShadow:'1px 1px 10px black',borderRadius:'10px'}}>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{borderRadius:'10px',width:'200px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={motilalIcon} style={{width:'90%',marginTop:'15px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'0px',marginTop:'30px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#9614d0',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#088F8F',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px'}}>BSE</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"poppins",color:"rgb(110, 109, 109)"}}>Motilal</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <Link to='/loggedhome/Motilal'><button type="button" class="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{borderRadius:'5px',background:"	#4285F4"}}>Setup</button></Link>
          </div>
          </div>
          
      </div> */}

<div style={{ display:'flex', justifyContent:'center',border:'1px', borderColor:'gray'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{width:'250px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={motilalIcon}style={{width:'200px',height:'80px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',paddingTop:'50px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"Lato"}}>Motilal</div>
        </div>
          <div style={{display:'flex',gap:'0px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px',fontFamily:"Lato",fontWeight:'300'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px',fontFamily:'Lato',fontWeight:'300'}}>BSE</button>
        </div>
        <hr style={{width:'250px',position:'relative',left:'-24px',color:'blue',marginTop:'30px',paddingBottom:'30px'}}></hr>
        <div style={{display:'flex',justifyContent:'right'}}>
        <div><Link to='/loggedhome/Motilal'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Click to Setup</button></Link></div>
          </div>
          </div>
      </div>
      {/* <div style={{ display:'flex', justifyContent:'center',boxShadow:'1px 1px 10px black',borderRadius:'10px'}}>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{borderRadius:'10px',width:'200px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={upstocksIcon} style={{width:'90%',marginTop:'15px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'0px',marginTop:'30px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#9614d0',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#088F8F',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px'}}>BSE</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"poppins",color:"rgb(110, 109, 109)"}}>Upstox</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <Link to='/loggedhome/Upstocks'><button type="button" class="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{borderRadius:'5px',background:"	#4285F4"}}>Setup</button></Link>
          </div>
          </div>
      </div> */}

<div style={{ display:'flex', justifyContent:'center',border:'1px', borderColor:'gray'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{width:'250px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={upstocksIcon}style={{width:'200px',height:'80px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',paddingTop:'50px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"Lato"}}>Upstox</div>
        </div>
          <div style={{display:'flex',gap:'0px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px',fontFamily:"Lato",fontWeight:'300'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px',fontFamily:'Lato',fontWeight:'300'}}>BSE</button>
        </div>
        <hr style={{width:'250px',position:'relative',left:'-24px',color:'blue',marginTop:'30px',paddingBottom:'30px'}}></hr>
        <div style={{display:'flex',justifyContent:'right'}}>
        <div><Link to='/loggedhome/upstocks'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Click to Setup</button></Link></div>
          </div>
          </div>
      </div>
      {/* <div style={{ display:'flex', justifyContent:'center',boxShadow:'1px 1px 10px black',borderRadius:'10px'}}>

          <div class="block max-w-sm  bg-white border border-gray-200" style={{borderRadius:'10px',width:'200px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={ZerodthaIcon} style={{width:'90%',marginTop:'15px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:'0px',marginTop:'30px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#9614d0',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#088F8F',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px'}}>BSE</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"poppins",color:"rgb(110, 109, 109)"}}>Zerodha</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
       <Link to='/loggedhome/zerodtha'><button type="button" class="text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{borderRadius:'5px',background:"	#4285F4"}}>Setup</button></Link> 
          </div>
          </div>
        </div> */}

        
<div style={{ display:'flex', justifyContent:'center',border:'1px', borderColor:'gray'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
          
          <div class="block max-w-sm p-6 bg-white border border-gray-200" style={{width:'250px'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
          <img src={ZerodthaIcon}style={{width:'200px',height:'80px'}}></img>
          </div>
          <div style={{display:'flex',justifyContent:'left',marginTop:'10px',paddingTop:'50px'}}>
        <div style={{ fontSize:'22px', fontWeight:"600", fontFamily:"Lato"}}>Zerodha</div>
        </div>
          <div style={{display:'flex',gap:'0px'}}>
        <button type="button" class="text-white  focus:ring-blue-300 font-medium  text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px',paddingRight:'20px',fontSize:'15px',paddingTop:'5px',paddingBottom:'5px',fontFamily:"Lato",fontWeight:'300'}}>NSE</button>
        <button type="button" class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  me-2 mb-2" style={{background:'	#0047AB',borderRadius:'2px',paddingLeft:'20px ',paddingRight:'20px',paddingTop:'5px',paddingBottom:'5px',fontSize:'15px',fontFamily:'Lato',fontWeight:'300'}}>BSE</button>
        </div>
        <hr style={{width:'250px',position:'relative',left:'-24px',color:'blue',marginTop:'30px',paddingBottom:'30px'}}></hr>
        <div style={{display:'flex',justifyContent:'right'}}>
        <div><Link to='/loggedhome/zerodtha'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Click to Setup</button></Link></div>
          </div>
          </div>
      </div>
      </div>
      </div>
  );
}
