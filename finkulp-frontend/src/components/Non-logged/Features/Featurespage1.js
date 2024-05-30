import React from 'react'
import TradingStrategy from '../../../Animations/ExploreStratey.png'
import PaperTrading from './PaperTrading'
import cyan1 from '../../../Animations/cyan7.jpg'
export default function Featurespage1() {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',paddingTop:'50px',background:`url(${cyan1})`,paddingBottom:'50px',backgroundSize:"100%"}}>
      <div style={{textAlign:'center'}}>
        <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-solid fa-chart-line" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>AI Control Trading</div>
        <div style={{display:'flex',justifyContent:"center"}}>
        <div style={{width:'60%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px'}}>
      AI Control Trading harnesses the power of artificial intelligence to autonomously manage and optimize trading decisions, enhancing efficiency and profitability in financial markets.</div>
    </div>
    <div style={{display:'flex',marginTop:'50px',gap:'100px',marginLeft:'50px'}}>
      <div>
      <img src={TradingStrategy} style={{width:'2700px',marginTop:'150px',boxShadow:"1px 1px 10px black",borderRadius:'10px'}}></img>
      </div>
      <div style={{marginTop:'50px'}}>
        <div  style={{display:'flex'}}>
        <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"style={{height:'45px'}}>
        <i class="fa-solid fa-chart-bar"  style={{fontSize:'30px',color:'blue'}}></i>
        </button>
        <div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:'left',fontWeight:"600"}}>All inclusive</div>
        <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',paddingBottom:'50px',textAlign:'left'}}>Be it Nasdaq or NSE, Indian or global markets, we offer multi-exchange, multi-broker, and multi-country trading modules, all under one roof</div>
        </div>
        </div>
        <div  style={{textAlign:'center',display:'flex'}}>
        <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{height:'45px'}}>
        <i class="fa-solid fa-lines-leaning"  style={{fontSize:'30px',color:'blue'}}></i>
        </button>
        <div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:'left',fontWeight:"600"}}>Support multi formats</div>
        <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',textAlign:'left',paddingBottom:'50px'}}>From 150+ technical indicators to diverse candlestick patterns to every category of order (Regular, Bracket, Cover, Market, Limit, SL, SL-M) and more, we accommodate for any and every format of trading possible on our platform</div>
        </div>
        </div>
        <div style={{textAlign:'center',display:'flex'}}>
        <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{height:"45px"}}>
        <i class="fa-solid fa-money-bill-wave"  style={{fontSize:'30px',color:'blue'}}></i>
        </button>
        <div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"left",fontWeight:"600"}}>
        Flexible pricing</div>
        <div style={{display:'flex'}}>
        <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',paddingRight:'40px',textAlign:'left'}}>You have the option to choose from two payment modules, Pay-as-you-go or buy a Monthly Subscription from us, whatever suits you the best</div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <PaperTrading></PaperTrading>
    </>
  )
}
