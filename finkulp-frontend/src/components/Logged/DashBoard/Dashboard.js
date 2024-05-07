import React from 'react'
import Home from '../Home';
import TradingStrategy from '../TradingStrategy';
import MyStrategies from './MyStrategies';
import { Link } from 'react-router-dom';
import zerodha from '../../../Images/ZerodhaIcon.jpg';
import upstox from '../../../Images/UpstoxIcon.png';
import hdfc from '../../../Images/HDFCSKy.jpg';
import angel from '../../../Images/angelone.png';
import paisa from '../../../Images/5paisalogo.png';
import alice from '../../../Images/aliceblue.jpg';
import motilal from '../../../Images/motilal.jpg';
import kotak from '../../../Images/kotak.png';
export default function Dashboard(props) {
  return (
    <div >
      <Home name={"Arun Rathaur"}></Home>
      <div style={{fontSize:"35px",fontWeight:'500',paddingLeft:"100px"}}>Dashboard</div>
      <div style={{display:"flex",paddingLeft:"100px",paddingRight:"100px"}}>
      <div className='border-blue dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-blue' style={{width:"650px"}} >
        <div>Net Capital Value</div>
        <div style={{fontSize:"25px"}}>100000</div>
      </div>
      <div className='border-blue dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-blue' style={{width:"650px",marginLeft:"50px"}} >
        <div>Profit/Loss%</div>
        <div style={{fontSize:"25px"}}>+5%</div>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',paddingLeft:"100px",paddingRight:"100px",paddingTop:"20px",gap:"10px"}}>
      <div className='border-black dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-black' style={{width:"300px"}}>
        <div>Trading Volume</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green'style={{width:"300px"}} >
        <div>Profit/Loss</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-cyan dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-cyan'style={{width:"300px"}} >
        <div>Finkulp Money Usage</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green'style={{width:"300px"}} >
        <div>Strategies Deployed</div>
        <div  style={{fontSize:"25px"}}>9</div>
      </div>
      <div className='border-black dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-black'style={{width:"300px"}} >
        <div>Learning Credits</div>
        <div  style={{fontSize:"25px"}}>25</div>
      </div>
      </div>
      <div style={{display:'flex',gap:"30px",paddingLeft:"100px",paddingRight:"100px"}}>
        <div >
          <div style={{textAlign:'center',fontSize:"24px",fontWeight:"500",paddingTop:"20px",paddingBottom:"10px",color:'blue'}}>My Strategies</div>
        <MyStrategies></MyStrategies>
        </div>
        <div>
        <div style={{textAlign:'center',fontSize:"24px",fontWeight:"500",paddingTop:"20px",paddingBottom:"10px",color:'blue'}}>More Strategies</div>
      <TradingStrategy setViewAlgo={props.setViewAlgo}></TradingStrategy>
        <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
       <Link to='/loggedhome/MarketPlace/'><button className="px-6 py-3 text-base font-medium text-white hover:bg-green-400 hover:text-black bg-blue " style={{borderRadius: "10px" }}>
    Explore More
</button></Link> 

        </div>
      </div>
      </div>
      <div style={{marginLeft:"100px",display:"flex"}}>
      <img src = {zerodha} style={{heigth:"200px", width:"150px"}}></img>
      <img src = {upstox} style={{heigth:"200px", width:"150px"}}></img>
      <img src = {kotak} style={{heigth:"100px", width:"150px"}}></img>
      <img src = {motilal} style={{heigth:"100px", width:"150px"}}></img>
      <img src = {alice} style={{heigth:"100px", width:"150px"}}></img>
      <img src = {hdfc} style={{heigth:"100px", width:"150px"}}></img>
      <img src = {paisa} style={{heigth:"30px", width:"200px"}}></img>
      <img src = {angel} style={{heigth:"30px", width:"200px"}}></img>
      </div>
      <center><div className='border-black dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-black'  style={{height : "50px",width:"200px",alignContent:"center"}}>
        <div>Add Broker</div>
      </div></center>
    </div>
  )
}
