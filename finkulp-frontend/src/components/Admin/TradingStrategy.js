import React from "react";
import { companyInfoArray } from '../../Data/TradingStrategy';
import { Link } from "react-router-dom";
import { useState } from "react";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}
const TradingStrategyAdmin = (props) => {
  const [strategyArray, setStrategyArray] = useState(companyInfoArray);
  const deleteElement = (index) => {
    const newArray = [...strategyArray];
    newArray.splice(index, 1); 
    setStrategyArray(newArray);
  };
  return (
    <section className='bg-white dark:bg-dark py-20 lg:py-[30px]'>
      <div className='container'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full '>
            <div className='max-w-full overflow-x-auto'>
          <Link to='/adminhome/addnewstrategy'><button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New Trading Strategy</button></Link>  
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{fontSize:'23px',fontFamily:"poppins",fontcolor:'green',fontWeight:"500",paddingBottom:"10px"}}>Trading MyStrategies</div>
                </div>
              <table className='w-full table-auto'>
                <thead className='text-center bg-primary'>
                  <tr>
                    <th className={TdStyle.ThStyle}>Strategist</th>
                    <th className={TdStyle.ThStyle}>NSE Category</th>
                    <th className={TdStyle.ThStyle}>Recommended Duration</th>
                    <th className={TdStyle.ThStyle}>Fee Subscription</th>
                    <th className={TdStyle.ThStyle}>Fee Pay as you go</th>
                    <th className={TdStyle.ThStyle}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {strategyArray.map((info, index) => (
                    <tr key={index}>
                      <td className={TdStyle.TdStyle}>{info.Strategist}</td>
                      <td className={TdStyle.TdStyle2}>{info.NSE}</td>
                      <td className={TdStyle.TdStyle}>{info.Recommended_Duration}</td>
                      <td className={TdStyle.TdStyle2}>{info.Fee.Subscription}</td>
                      <td className={TdStyle.TdStyle}>{info.Fee.Pay_as_you_go}</td>
                      <td className={TdStyle.TdStyle2}>
                       <Link to='/adminhome/edit-Strategy'>
                       <span className={TdStyle.TdButton} onClick={()=>{props.settradingStrategy(info)}}>
                          Edit
                        </span>
                       </Link> 
                       <Link to=''>
                       <span className={TdStyle.TdButton} style={{color:"red",background:"#ffe6e6",borderColor:"red",marginLeft:'10px'}} onClick={()=>deleteElement(index)}>
                          Delete
                        </span>
                       </Link> 
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default TradingStrategyAdmin;
