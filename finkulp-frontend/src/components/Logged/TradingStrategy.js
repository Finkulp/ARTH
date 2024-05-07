import React from 'react';
import { Link } from 'react-router-dom';
import {companyInfoArray} from '../../Data/TradingStrategy';
 
export default function TradingStrategy(props) {
    return (
        <>
        {/* <div style={{alignItems:'center',fontWeight:"600",fontSize:"25px",textAlign:'center',padding:"20px"}}>Trading Strategy</div> */}
        <div style={{display:'flex',justifyContent:"center"}}>
        <div style={{display:"flex", gap:"15px",flexWrap:'wrap',width:"90%"}}>
            {companyInfoArray.map((companyInfo, index) => (
             <div>
             <div className="card bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden" style={{ width: "245px", height:"290px",paddingLeft: "10px", paddingTop: "10px", paddingRight: '10px' }}>
                 <div className="card-body">
                     <h5 className="card-title ">Name</h5>
                     <h4 className="card-title  font-bold mb-2">{companyInfo.Strategist}</h4>
                     <h5 className="card-title ">Risk Level</h5>
                     <h4 className="card-title font-bold mb-2">{companyInfo.Category}</h4>
                     <div>
                         <h5 className='font-bold'>Description</h5>
                         <h6>{companyInfo.smalloverview}</h6>
                     </div>
                     <div style={{marginTop:"-75px",paddingLeft:"50px"}}>
                     <Link to='/loggedhome/MarketPlace/AlgoDescription' ><button className="px-6 py-3 text-base font-medium text-black hover:bg-green-900 hover:text-white bg-green-400" style={{borderRadius: "10px",position:'relative',top:"-20px" }} onClick={()=>{props.setViewAlgo(companyInfo)}}>
                           Know More
                        </button></Link> 
                     </div>
                 </div>
             </div>
         </div>
            ))}
        </div>
        </div>
      
        </>
    );
}
