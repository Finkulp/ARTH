import React from 'react'
import AIBased from './AIBased'
import cyan from '../../../Animations/cyan7.jpg'
export default function BackTesting() {
  return (
    <>
    <div style={{paddingTop:'100px',background:`url(${cyan})`, backgroundSize:'100%',paddingBottom:'50px'}}>
      <div class="d-flex flex-column" style={{display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
      <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-regular fa-file" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>Back Testing</div>
        <div style={{display:'flex',justifyContent:"center"}}>
            <div style={{width:'50%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}>
            Our fully automated predictive trading algorithms analyze historical data to offer precise insights into the performance of specific trading strategies. With our advanced technology, you can rely on error-free results.</div>
        </div>
        <div style={{display:'flex',marginTop:'100px'}}>
            <div>
                <div style={{display:'flex',justifyContent:'center'}}>
            <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-solid fa-lock" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>Authentic Data</div>
                <div style={{display:'flex',justifyContent:"center"}}>
                <div style={{width:'90%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}>
We provide the most crucial element of backtesting: a comprehensive set of authentic historical data. Sourced exclusively from licensed data vendors, this data is essential for generating reliable backtesting insights.</div>
                </div>
            </div>
            <div >
                <div style={{display:'flex',justifyContent:'center'}}>
            <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-solid fa-server" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>Testing</div>
                <div style={{display:'flex',justifyContent:"center"}}>
                <div style={{width:'85%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}>Utilize this dataset to experiment with different trading strategies on our platform. Gain a holistic understanding of which trading algorithms suit you best, all without risking real money in live </div>
                </div>
            </div>
            <div>
                <div style={{display:'flex',justifyContent:'center'}}>
            <button type="button" class="text-white bg-blue-100  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <i class="fa-solid fa-indian-rupee-sign" style={{fontSize:'50px',color:'blue'}}></i>
        </button>
        </div>
        <div style={{fontSize:'23px',fontFamily:"poppins",color:'blue',textAlign:"center",fontWeight:"600"}}>Easy pricing</div>
                <div style={{display:'flex',justifyContent:"center"}}>
                <div style={{width:'90%',fontSize:'18',fontFamily:'poppins',color:'green',marginTop:'30px',textAlign:'center'}}>
You have the flexibility to opt for either a full subscription package or a pay-per-minute model (for AlgoBulls server usage) when conducting backtesting—it's entirely your choice.</div>
                </div>
            </div>
        </div>
    </div>
    <AIBased></AIBased>
    </>
  )
}