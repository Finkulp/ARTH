import React from 'react'
import Chart from 'react-apexcharts';
import { useState,useEffect } from 'react';
import Trades from './Trades';
import MyStrategy from './MyStrategies';
import DetailContext from '../../../Context/Details/DetailsContext';
import { useContext } from 'react';
import Lottie from 'lottie-react';
import lLoading from '../../../Animations/loadingAnimation.json';
export default function DashboardH() {
  const { getDetails, userDetails, loading, setLoading } = useContext(DetailContext);
    const [value, setValue] = useState({
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,2000,2001,2002,2003,2004,2005,2006,2007,2008],
        },
      },
      series: [
        {
          name: 'Investment',
          data: [10, 30, 70, 120, 170, 225, 275, 350, 500,400,300,600,400,200,500,300,100,700],
        },
      ],
    });
    const [profit, setprofit] = useState(false);
    const [value1, setValue1] = useState({
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
      setLoading(true);
      console.log('Component mounted');
      // setLoading(true); // This line is redundant as setLoading(true) is already called above.
      getDetails().finally(() => setLoading(false));
    }, []);
  return (
    <div style={{background:"rgb(252,252,255)",width:'95%',position:'relative',left:'20px'}}>
          {loading?<div style={{width:'90%',height:'400px',display:"flex",justifyContent:"center",alignItems:'center'}}><Lottie animationData={lLoading} style={{width:"20%"}}/></div>:
      <div>
            <div style={{display:'flex',gap:'1%',width:'100%'}}>
                <div style={{width:"65%",boxShadow:'1px 1px 10px black',border:'solid',borderWidth:'1px',background:'white'}}>
                    <div style={{display:'flex',gap:"20px"}}>
                        <div style={{overflowY:"auto",height:"400px",width:'230px',overflowX:'hidden'}}>
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px',background:'cyan'}}>
                                  <div>Strategy1</div>
                              </div>
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy2</div>
                              </div>    
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy3</div>
                              </div>  
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy4</div>
                              </div>
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy5</div>
                              </div>   
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy6</div>
                              </div> 
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy7</div>
                              </div> 
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy8</div>
                              </div> 
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy9</div>
                              </div> 
                              <div className='DashboardDetails1 border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{paddingLeft:"20px",paddingRight:'20px',width:'200px'}}>
                              <div>Strategy10</div>
                              </div> 
                        </div>
                        <div >
                            <Chart
                            options={value.options}
                            series={value.series} // Corrected this line to access the second series
                            type="bar"
                            width="630"
                            height="300"
                            />
                            <div style={{display:'flex'}}>
                            <div style={{width:'10px',height:'10px',background:"blue",borderRadius:'50%',position:'relative',top:"-12px",left:'248px'}}></div>
                            <div style={{position:'relative',top:"-20px",left:'250px'}}>Profit</div>
                            </div>
                            <div style={{display:"flex", overflowX:'auto',gap:'10px'}}>
                            <div className=' border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{width:'145px'}}>
                                  <div>Information1</div>
                              </div>  
                              <div className=' border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{width:'145px'}}>
                                  <div>Information2</div>
                              </div>
                              <div className=' border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{width:'145px'}}>
                                  <div>Information3</div>
                              </div>
                              <div className=' border-green dark:border-dark-2 border rounded-md  py-3 px-7 text-center text-base font-medium text-green' style={{width:'145px'}}>
                                  <div>Information4</div>
                              </div>     
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:'35%',boxShadow:'1px 1px 10px black',background:'white',paddingTop:'20px'}}>
                {profit &&
                      <div >
                        
                        <Chart
                          options={profit_vlaues.options}
                          series={profit_vlaues.series} // Corrected this line to access the second series
                          type="area"
                          width="450"
                          height={300}
                        />
                        <div style={{display:'flex',justifyContent:'center',position:'relative',top:'25px'}}>
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          onClick={() => setprofit(false)}
                        >
                          View Full Details
                        </button>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',position:'relative',top:'-30px'}}>
                        <div style={{width:'10px',height:'10px',background:"blue",borderRadius:'50%',position:'relative',top:"-12px"}}></div>
                          <div style={{position:'relative',top:"-20px"}}>Profit</div>
                      </div>
                      </div>
                      }
                      {!profit &&
                      <div>
                        
                        <Chart
                          options={value1.options}
                          series={value1.series}
                          type="area"
                          width="450"
                          height='325'
                        />
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <button
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          onClick={() => setprofit(true)}
                        >
                          Show Profit
                        </button>
                        </div>
                      </div>
                      }
                </div>
            </div>
            <div style={{width:"100%",marginTop:'20px',marginBottom:'20px',display:'flex',gap:'13px',background:'white',paddingTop:'13px',paddingBottom:'13px',borderRadius:'5px'}}>
      <div className='DashboardDetails1 border-cyan dark:border-dark-2 border rounded-md  py-3 px-3 text-center text-base font-medium text-cyan' style={{paddingLeft:"10px",boxShadow:'1px 1px 10px black',paddingRight:'10px',width:'180px'}}>
        <div>Net Capital</div>
        <div  style={{fontSize:"25px"}}>{userDetails.netCaptialValue}</div>
      </div>
      <div className='DashboardDetails1 border-cyan dark:border-dark-2 border rounded-md  py-3 px-3 text-center text-base font-medium text-cyan' style={{paddingLeft:"10px",boxShadow:'1px 1px 10px black',paddingRight:'10px',width:'180px'}}>
        <div>Profit Loss</div>
        <div  style={{fontSize:"25px"}}>{userDetails.PandL}</div>
      </div>
      <div className='DashboardDetails1 border-cyan dark:border-dark-2 border rounded-md  py-3 px-3 text-center text-base font-medium text-cyan' style={{paddingLeft:"10px",boxShadow:'1px 1px 10px black',paddingRight:'10px',width:'180px'}}>
        <div>Trading Volume</div>
        <div  style={{fontSize:"25px"}}>{userDetails.TradingVolume}</div>
      </div>
      <div className='DashboardDetails1 border-cyan dark:border-dark-2 border rounded-md  py-3 px-3 text-center text-base font-medium text-cyan' style={{paddingLeft:"10px",boxShadow:'1px 1px 10px black',paddingRight:'10px',width:'180px'}}>
        <div>Profit/Loss%</div>
        <div  style={{fontSize:"25px"}}>{userDetails.PandL}</div>
      </div>
      </div>
            <div style={{display:'flex',gap:"1%"}}>
                <div style={{width:'35%',boxShadow:'1px 1px 10px black',background:'white'}}>
                   <MyStrategy userDetails={userDetails}></MyStrategy>
                </div>
                <div style={{width:'65%',boxShadow:'1px 1px 10px black',background:'white'}}>
                      <Trades></Trades>
                </div>
            </div>
      </div>}
      </div>
  )
}

