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
      <div style={{display:'flex',justifyContent:'center',gap:"10px",flexWrap:"wrap",marginBottom:'20px'}}>
      <div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px',height:"250px",background:"rgb(227, 244, 250)"}}><img src={PaisaIcon} style={{width:"200px",height:'80px',borderRadius:'3px',background:"rgb(227, 244, 250)"}}></img></div>
            <div style={{paddingLeft:'40px',paddingRight:'30px'}}>
            <div style={{fontSize:'25px',fontFamily:"Lato",fontWeight:'600',paddingTop:'25px',height:"70px"}}>5Paisa</div>
            <div style={{paddingTop:'20px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>5paisa is a popular discount brokerage firm in India, offering a range of investment services including stocks, mutual funds, and insurance with low brokerage fees. </div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:"relative",top:'50px'}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/5paisa'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',position:'relative',top:'50px'}}>Click to setup</button></Link></div>
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
        <div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px',height:"250px",background:"rgb(227, 244, 250)"}}><img src={aliceblueIcon} style={{width:"200px",height:'80px',borderRadius:'3px'}}></img></div>
            <div style={{paddingLeft:'40px',paddingRight:'30px'}}>
            <div style={{fontSize:'25px',fontFamily:"Lato",fontWeight:'600',paddingTop:'25px',height:"70px"}}>Alice Blue</div>
            <div style={{paddingTop:'20px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>
            Alice Blue is a prominent Indian brokerage firm known for its competitive brokerage plans and advanced trading platforms. </div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:"relative",top:'50px'}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/Alice-Blue'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',position:'relative',top:'50px'}}>Click to setup</button></Link></div>
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
 <div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px',height:"250px",background:"rgb(227, 244, 250)"}}><img src={angleoneIcon} style={{width:"200px",height:'80px',borderRadius:'3px'}}></img></div>
            <div style={{paddingLeft:'40px',paddingRight:'30px'}}>
            <div style={{fontSize:'25px',fontFamily:"Lato",fontWeight:'600',paddingTop:'25px',height:"70px"}}>Angle One</div>
            <div style={{paddingTop:'20px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>
           
Angel One is a leading full-service brokerage firm in India, offering a comprehensive suite of financial services including stock trading. </div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:"relative",top:'50px'}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/Angle-One'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',position:'relative',top:'50px'}}>Click to setup</button></Link></div>
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

<div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px',height:"250px",background:"rgb(227, 244, 250)"}}><img src={KotakIcon} style={{width:"200px",height:'80px',borderRadius:'3px'}}></img></div>
            <div style={{paddingLeft:'40px',paddingRight:'30px'}}>
            <div style={{fontSize:'25px',fontFamily:"Lato",fontWeight:'600',paddingTop:'25px',height:"70px"}}>Kotak</div>
            <div style={{paddingTop:'20px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>
           
            Kotak Securities is a well-established brokerage firm in India, providing a wide range of investment services including equity trading, mutual funds, and IPOs. </div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:"relative",top:'50px'}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/Kotak'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',position:'relative',top:'50px'}}>Click to setup</button></Link></div>
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

<div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px',height:"250px",background:"rgb(227, 244, 250)"}}><img src={motilalIcon} style={{width:"200px",height:'80px',borderRadius:'3px'}}></img></div>
            <div style={{paddingLeft:'30px',paddingRight:'30px'}}>
            <div style={{fontSize:'25px',fontFamily:"Lato",fontWeight:'600',paddingTop:'25px',height:"70px"}}>Motilal</div>
            <div style={{paddingTop:'20px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>
            Motilal Oswal is a leading financial services company in India, offering a diverse range of investment options including equities, mutual funds, and portfolio management services. </div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:"relative",top:'50px'}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/Motilal'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',position:'relative',top:'50px'}}>Click to setup</button></Link></div>
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

<div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px',height:"250px",background:"rgb(227, 244, 250)"}}><img src={upstocksIcon} style={{width:"200px",height:'80px',borderRadius:'3px'}}></img></div>
            <div style={{paddingLeft:'30px',paddingRight:'30px'}}>
            <div style={{fontSize:'25px',fontFamily:"Lato",fontWeight:'600',paddingTop:'25px',height:"70px"}}>Upstox</div>
            <div style={{paddingTop:'20px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>
            Upstox is a popular Indian discount brokerage firm known for its low-cost trading and advanced technology-driven trading platforms.</div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:"relative",top:'50px'}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/Upstocks'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',position:'relative',top:'50px'}}>Click to setup</button></Link></div>
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

        
<div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'350px',height:"250px",background:"rgb(227, 244, 250)"}}><img src={ZerodthaIcon} style={{width:"200px",height:'80px',borderRadius:'3px'}}></img></div>
            <div style={{paddingLeft:'30px',paddingRight:'30px'}}>
            <div style={{fontSize:'25px',fontFamily:"Lato",fontWeight:'600',paddingTop:'25px',height:"70px"}}>Zerodtha</div>
            <div style={{paddingTop:'20px',paddingBottom:'20px',height:'100px',fontFamily:"Lato",color:'gray'}}>
            Zerodha is India's largest discount brokerage firm, celebrated for its low-cost trading and user-friendly platforms like Kite and Coin. </div>
            </div>
            <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:"relative",top:'50px'}}></hr>
            <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
            <div><Link to='/loggedhome/zerodtha'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',position:'relative',top:'50px'}}>Click to setup</button></Link></div>
            </div>
            </div>
      </div>
      </div>
  );
}
