import React from 'react'
import MoneyTemplate from './MoneyTemplate'
import MyStrategies from './MyStrategies';
const details = {
  dividendYield: "3.50%",
  peRatio: 20,
  fiftyTwoWeekHigh: 180,
  eps: 8,
  riskLevel: "Moderate",
  accountBalance: "Rs.4,35,945",
};

export default function Dashboard() {
  return (
    <div>
         <div className="-mx-4 flex flex-wrap" style={{marginTop:"175px"}}>
            <div className="w-full px-4">
              <div className="mx-auto mb-30 max-w-400 text-center lg:mb-10">
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Dashboard
                </h2>
              </div>
            </div>
          </div>
      <MoneyTemplate details={details}></MoneyTemplate>
      <div style={{textAlign:'center',fontWeight:'700',fontSize:"25px",paddingTop:"50px"}}>MY MyStrategies</div>
      <MyStrategies ></MyStrategies>
    </div>
  )
}
