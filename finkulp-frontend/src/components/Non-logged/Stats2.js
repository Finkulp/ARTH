import React from 'react'
import Lottie from 'lottie-react'
import selectInvest from '../../Animations/selectInvest.json'
export default function Stats2() {
  return (
    <div>
       <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8">
          <div className="md:w-1/2 order-last md:order-first mt-4 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">Select Strategies and Invest</h1>
            <p className="text-base">
              Use our tools to create personalized trading strategies and make informed investment decisions.
            </p>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <Lottie animationData={selectInvest} style={{width:"80%"}} />
          </div>
        </div>
        <div style={{ width: "100%", height: "300px", background: "rgb(187, 242, 239)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  <h3 style={{ textAlign: "center", fontWeight: "400", fontSize: "23px" ,paddingBottom:"40px"}}>Looking to start your algorithmic trading journey?</h3>
  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
</div>
    </div>
  )
}
