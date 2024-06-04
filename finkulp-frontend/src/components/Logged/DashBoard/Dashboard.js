import React, { useEffect, useState, useContext } from 'react';
import Home from '../Home';
import lLoading from '../../../Animations/loadingAnimation.json';
import TradingStrategy from '../TradingStrategy';
import MyStrategies from './MyStrategies';
import { Link } from 'react-router-dom';
import zerodha from '../../../Images/ZerodhaIcon.png';
import upstox from '../../../Images/UpstoxIcon.png';
import hdfc from '../../../Images/HDFCSKy.png';
import angel from '../../../Images/angelone.png';
import paisa from '../../../Images/5paisalogo.png';
import alice from '../../../Images/aliceblue.png';
import motilal from '../../../Images/motilal.jpg';
import kotak from '../../../Images/kotak.png';
import '../../../CSS/Algoshopping.css';
import Chart from 'react-apexcharts';
import DetailContext from '../../../Context/Details/DetailsContext';
import Lottie from 'lottie-react';
import '../../../CSS/Algoshopping.css';

export default function Dashboard(props) {
  const [profit, setprofit] = useState(false);
  const { getDetails, userDetails, loading, setLoading } = useContext(DetailContext);
  const [value, setValue] = useState({
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'Investment',
        data: [10, 30, 70, 120, 170, 225, 275, 350, 500],
      },
      {
        name: 'Profit',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
      },
    ],
  });
  const [profit_vlaues, setProfitValues] = useState({
    options: {
      chart: {
        id: 'basic-bar1',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'Profit',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
      },
    ],
  });

  useEffect(() => {
    console.log('Component mounted');
    setLoading(true);
    getDetails().finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading?<div style={{width:'100%',height:'400px',display:"flex",justifyContent:"center",alignItems:'centero'}}><Lottie animationData={lLoading} style={{width:"20%"}}/></div>:
        <div>
      <Home name={userDetails.name}></Home>
      <div style={{display:'flex'}}>
      <div>
      <div style={{fontSize:"35px",fontWeight:'500',paddingLeft:"100px",marginTop:'20px'}}>Dashboard</div>
      <div style={{display:"flex",paddingLeft:"50px",paddingRight:"100px",marginTop:"30px",gap:'30px'}}>
      <div className='DashboardDetails border-blue dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-blue ' style={{width:"300px"}} >
        <div>Net Capital Value</div>
        <div style={{fontSize:"25px"}}>{userDetails.netCaptialValue}</div>
      </div>
      <div className=' DashboardDetails border-blue dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-blue' style={{width:"300px",marginLeft:"50px"}} >
        <div>Profit/Loss%</div>
        <div style={{fontSize:"25px"}}>{userDetails.PandL}</div>
      </div>
      {/* <center><div className=' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'  style={{height : "50px",width:"200px",alignContent:"center",marginLeft:'20px',color:'white'}}>
        <Link to='/loggedhome/Add-Broker'><div>Add Broker</div></Link>
      </div></center> */}
      </div>
      <div style={{display:'flex',paddingLeft:"50px",paddingRight:"100px",paddingTop:"20px",gap:"40px",marginBottom:'50px',marginTop:'20px',flexWrap:'wrap',width:'900px'}}>
      <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
        <div>Trading Volume</div>
        <div  style={{fontSize:"25px"}}>{userDetails.TradingVolume}</div>
      </div>
      <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green'style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}} >
        <div>Profit/Loss</div>
        <div  style={{fontSize:"25px"}}>{userDetails.PandL}</div>
      </div>
      <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green'style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
        <div>Finkulp Money Usage</div>
        <div  style={{fontSize:"25px"}}>{userDetails.finkulpMoneyUsage}</div>
      </div>
      <div className='DashboardDetails2 border-cyan dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-cyan'style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}} >
        <div>Strategies Deployed</div>
        <div  style={{fontSize:"25px"}}>{userDetails.StrategiesDeployed}</div>
      </div>
      <div className='DashboardDetails2 border-cyan dark:pink border rounded-md  py-3 px-7 text-center text-base font-medium text-cyan'style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
        <div>Learning Credits</div>
        <div  style={{fontSize:"25px"}}>{userDetails.LearningCredits?userDetails.LearningCredits:0}</div>
      </div>
      </div>
      <div style={{border:'solid',width:"100%",height:'150px',marginTop:"100px",marginLeft:'50px',borderRadius:'10px',boxShadow:'1px 1px 5px black',borderWidth:'1px',borderColor:'green',display:'flex',overflowX:'auto',marginBottom:'50px'}}>
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
      <div style={{position:'relative', left:"-300px", top:"50px"}}>
      {profit &&
      <div>
        <div style={{display:'flex',justifyContent:'right'}}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setprofit(false)}
        >
          View Full Details
        </button>
        </div>
        <Chart
          options={profit_vlaues.options}
          series={profit_vlaues.series} // Corrected this line to access the second series
          type="area"
          width="600"

        />
        <div style={{display:'flex'}}>
        <div style={{width:'10px',height:'10px',background:"blue",borderRadius:'50%',position:'relative',top:"-12px",left:'248px'}}></div>
          <div style={{position:'relative',top:"-20px",left:'250px'}}>Profit</div>
      </div>
      </div>
      }
      {!profit &&
      <div>
        <div style={{display:'flex',justifyContent:'right'}}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setprofit(true)}
        >
          Show Profit
        </button>
        </div>
        <Chart
          options={value.options}
          series={value.series}
          type="area"
          width="600"
        />
      </div>
      }
      </div>
      </div>
      <div style={{display:'flex',gap:"30px",paddingLeft:"50px",paddingRight:"100px"}}>
            <div style={{  gap: '30px' }}>
        <div style={{  height: '600px', borderWidth: '1px', borderColor: 'blue', marginTop: '10px', borderRadius: '10px', overflowY: 'auto' }}>
          <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: '500', paddingTop: '20px', paddingBottom: '10px', color: 'blue' }}>My Strategies</div>
          <MyStrategies Strategies={userDetails.addedStrategies}></MyStrategies>
        </div>
      </div>

        <div style={{height:'600px',borderWidth:"1px",borderColor:"blue",marginTop:"10px",borderRadius:"10px",overflowY: 'auto'}} >
        <div style={{textAlign:'center',fontSize:"24px",fontWeight:"500",paddingTop:"20px",paddingBottom:"10px",color:'blue'}}>More Strategies</div>
      <TradingStrategy setViewAlgo={props.setViewAlgo}></TradingStrategy>
        <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}}>
       <Link to='/loggedhome/MarketPlace/'><button className="px-6 py-3 text-base font-medium text-white hover:bg-green-400 hover:text-black bg-blue " style={{borderRadius: "10px" }}>
    Explore More
</button></Link> 

        </div>
      </div>
      </div>
      <div className="overflow-hidden w-full">
      <div className="carousel flex">
        <img src={zerodha} className="h-24 w-72" alt="Zerodha" />
        <img src={upstox} className="h-24 w-72" alt="Upstox" />
        <img src={kotak} className="h-24 w-48" alt="Kotak" />
        <img src={motilal} className="h-24 w-72" alt="Motilal" />
        <img src={alice} className="h-24 w-72" alt="Alice Blue" />
        <img src={hdfc} className="h-12 w-64 mt-8 relative top-8" alt="HDFC" />
        <img src={paisa} className="h-10 w-48 mt-5 mx-10 relative top-4" alt="5Paisa" />
        <img src={angel} className="h-12 w-64 relative top-8" alt="Angel One" />
      </div>
    </div>
      </div>
      }
    </div>
  );
}
