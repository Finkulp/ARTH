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
import '../../../CSS/Algoshopping.css'
import Chart from "react-apexcharts";
import { useState } from 'react';
export default function Dashboard(props) {
  const[profit,setprofit]=useState(false);
  const [value, setValue] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "Investment",
        data: [10, 30, 70, 120, 170, 225, 275, 350,500] 
      },
      {
        name: "Profit",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100] 
      }
    ]
  });
  const [profit_vlaues, setprofit_values] = useState({
    options: {

      chart: {
        id: "basic-bar1"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "Profit",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100] 
      }
    ]
  });
  return (
    <div >
      <Home name={"Arun Rathaur"}></Home>
      <div style={{display:'flex'}}>
      <div>
      <div style={{fontSize:"35px",fontWeight:'500',paddingLeft:"100px"}}>Dashboard</div>
      <div style={{display:"flex",paddingLeft:"50px",paddingRight:"100px",marginTop:"10px",}}>
      <div className='border-blue dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-blue' style={{width:"300px"}} >
        <div>Net Capital Value</div>
        <div style={{fontSize:"25px"}}>100000</div>
      </div>
      <div className='border-blue dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-blue' style={{width:"300px",marginLeft:"50px"}} >
        <div>Profit/Loss%</div>
        <div style={{fontSize:"25px"}}>+5%</div>
      </div>
      <center><div className=' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  style={{height : "50px",width:"200px",alignContent:"center",marginLeft:'20px',color:'white'}}>
        <Link to='/loggedhome/Add-Broker'><div>Add Broker</div></Link>
      </div></center>
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',paddingLeft:"50px",paddingRight:"100px",paddingTop:"20px",gap:"50px"}}>
      <div className='border-black dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-black' style={{paddingLeft:"20px",paddingRight:'20px'}}>
        <div>Trading Volume</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green'style={{paddingLeft:"20px",paddingRight:'20px'}} >
        <div>Profit/Loss</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-cyan dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-cyan'style={{paddingLeft:"20px",paddingRight:'20px'}}>
        <div>Finkulp Money Usage</div>
        <div  style={{fontSize:"25px"}}>1000</div>
      </div>
      <div className='border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green'style={{paddingLeft:"20px",paddingRight:'20px'}} >
        <div>Strategies Deployed</div>
        <div  style={{fontSize:"25px"}}>9</div>
      </div>
      <div className='border-black dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-black'style={{paddingLeft:"20px",paddingRight:'20px'}}>
        <div>Learning Credits</div>
        <div  style={{fontSize:"25px"}}>25</div>
      </div>
      </div>
      <div style={{border:'solid',width:"800px",height:'150px',marginTop:"10px",marginLeft:'100px',borderRadius:'10px',boxShadow:'1px 1px 3px blue',borderWidth:'1px',borderColor:'green',display:'flex',overflowX:'auto'}}>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
          <div style={{width:'220px',marginTop:'20px'}}><i class="fa-regular fa-circle-xmark" style={{color:'red',position:'relative',left:"50px",fontSize:'25px'}}></i></div>
        <div>Finkulp Funds Insufficient</div>
        <div style={{color:'blue'}}>click to add funds</div>
        </div>
        <div style={{marginTop:'10px'}}>
          <div style={{marginTop:'20px'}}><i class="fa-regular fa-circle-xmark" style={{color:'red',position:'relative',left:"50px",fontSize:'25px'}}></i></div>
        <div style={{width:'225px'}}>Subscription Plan Inactive</div>
        <Link to='/loggedhome/subscription'><div style={{color:'blue'}}>Subscribe a plan</div></Link>
        </div>
        <div style={{marginTop:'10px'}}>
          <div style={{marginTop:'20px'}} ><i class="fa-regular fa-circle-xmark" style={{color:'red',position:'relative',left:"50px",fontSize:'25px'}}></i></div>
        <div style={{width:'250px'}}>Broking Account not Connected</div>
        <Link to='/loggedhome/Add-Broker'><div style={{color:'blue'}}>Connect a Broking account</div></Link>
        </div>
        <div style={{marginTop:'10px'}}>
          <div style={{marginTop:'20px'}}><i class="fa-regular fa-circle-check"style={{color:'green',position:'relative',left:"50px",fontSize:'25px'}}></i></div>
        <div style={{width:'200px'}}>Portfolio Strategy Added</div>
       <Link to='/loggedhome/MarketPlace'><div style={{color:'blue'}}>Click to add more</div></Link> 
        </div>
        <div style={{marginTop:'10px'}}>
          <div style={{marginTop:'20px'}}><i class="fa-regular fa-circle-xmark" style={{color:'red',position:'relative',left:"50px",fontSize:'25px'}}></i></div>
        <div style={{width:'175px'}}>Strategy Not Running</div>
        <Link to='/loggedhome/MarketPlace/MyStrategy'><div style={{color:'blue'}}>Click to Start</div></Link>
        </div>
      </div>
      
      </div>
      <div style={{position:'relative', left:"-20px", top:"20px"}}>
      {profit &&
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setprofit(false)}
        >
          View Full Details
        </button>
        <Chart
          options={profit_vlaues.options}
          series={profit_vlaues.series} // Corrected this line to access the second series
          type="area"
          width="500"

        />
        <div style={{display:'flex'}}>
        <div style={{width:'10px',height:'10px',background:"blue",borderRadius:'50%',position:'relative',top:"-12px",left:'248px'}}></div>
          <div style={{position:'relative',top:"-20px",left:'250px'}}>Profit</div>
      </div>
      </div>
      }
      {!profit &&
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setprofit(true)}
        >
          Show Profit
        </button>
        <Chart
          options={value.options}
          series={value.series}
          type="area"
          width="500"
        />
      </div>
      }
      </div>
      </div>
      <div style={{display:'flex',gap:"30px",paddingLeft:"100px",paddingRight:"100px"}}>
            <div style={{  gap: '30px' }}>
        <div style={{ boxShadow: '1px 1px 5px blue', height: '400px', borderWidth: '1px', borderColor: 'blue', marginTop: '10px', borderRadius: '10px', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: '500', paddingTop: '20px', paddingBottom: '10px', color: 'blue' }}>My Strategies</div>
          <MyStrategies></MyStrategies>
        </div>
      </div>

        <div style={{boxShadow:"1px 1px 5px blue",height:'400px',borderWidth:"1px",borderColor:"blue",marginTop:"10px",borderRadius:"10px",overflowY: 'auto'}} >
        <div style={{textAlign:'center',fontSize:"24px",fontWeight:"500",paddingTop:"20px",paddingBottom:"10px",color:'blue'}}>More Strategies</div>
      <TradingStrategy setViewAlgo={props.setViewAlgo}></TradingStrategy>
        <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
       <Link to='/loggedhome/MarketPlace/'><button className="px-6 py-3 text-base font-medium text-white hover:bg-green-400 hover:text-black bg-blue " style={{borderRadius: "10px" }}>
    Explore More
</button></Link> 

        </div>
      </div>
      </div>
      <div style={{marginLeft:"100px",display:"flex",flexWrap:"wrap",justifyContent:'center'}}>
      <img src = {zerodha} style={{height:"100px", width:"300px"}}></img>
      <img src = {upstox} style={{height:"100px", width:"300px"}}></img>
      <img src = {kotak} style={{height:"100px", width:"200px"}}></img>
      <img src = {motilal} style={{height:"100px", width:"300px"}}></img>
      <img src = {alice} style={{height:"100px", width:"300px"}}></img>
      <img src = {hdfc} style={{height:"100px", width:"250px"}}></img>
      <img src = {paisa} style={{height:"70px", width:"250px",marginTop:"20px",marginLeft:"40px",marginRight:"20px"}}></img>
      <img src = {angel} style={{height:"100px", width:"25r0px"}}></img>
      </div>
    </div>
  )
}
