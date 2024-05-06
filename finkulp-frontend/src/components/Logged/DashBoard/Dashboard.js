import React from 'react'
import Home from '../Home';
import TradingStrategy from '../TradingStrategy';
import MyStrategies from './MyStrategies';
import { Link } from 'react-router-dom';
export default function Dashboard(props) {
  return (
    <div >
      <Home name={"Arun Rathaur"}></Home>
      <div style={{fontSize:"25px",fontWeight:'500',paddingLeft:"100px"}}>Dashboard</div>
      <div className='border-blue dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-blue' style={{width:"510px",marginLeft:"100px"}} >
        <div>Finkulp Money</div>
        <div style={{fontSize:"25px"}}>100000</div>
      </div>
      <div style={{display:'flex',justifyContent:'left',paddingLeft:"100px",paddingTop:"20px",gap:"10px"}}>
     
      <div className='border-black dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-black' >
        <div>Trading Volume</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' >
        <div>Profit/Loss</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-cyan dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-cyan' >
        <div>Finkulp Money Usage</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      </div>
      <div className='border-black dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-black'  style={{width:"200px",position:"absolute",right:"100px",top:'300px'}}>
        <div>Add Broker</div>
      </div>
      <div style={{display:'flex',gap:"50px",paddingLeft:"60px"}}>
        <div>
          <div style={{textAlign:'center',fontSize:"24px",fontWeight:"500",paddingTop:"20px",paddingBottom:"10px",color:'blue',textDecoration:'underline'}}>Strategy Subscribed</div>
        <MyStrategies></MyStrategies>
        </div>
        <div>
        <div style={{textAlign:'center',fontSize:"24px",fontWeight:"500",paddingTop:"20px",paddingBottom:"10px",color:'blue',textDecoration:'underline'}}>Trading Strategies</div>
      <TradingStrategy setViewAlgo={props.setViewAlgo}></TradingStrategy>
        <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
       <Link to='/loggedhome/MarketPlace/'><button className="px-6 py-3 text-base font-medium text-white hover:bg-green-400 hover:text-black bg-blue " style={{borderRadius: "10px" }}>
    Explore More
</button></Link> 

        </div>
      </div>
      </div>
    </div>
  )
}
