import React from "react";
import Navbar from "./NevBar";

const Home = (props) => {
  return (
    <>
    <Navbar></Navbar>
      <section className="relative z-10 bg-primary py-[120px]">
        <div >
        
              <div className=" " style={{paddingLeft:'50px',marginTop:"20px"}}>
              <h1 className=" text-white" style={{fontSize:"35px",fontWeight:'600'}}>
                 Hello, {props.name}
                </h1>
                <h4 className=" font-semibold leading-tight text-white" style={{width:"100%",fontSize:"27px",fontWeight:"400",paddingTop:"40px"}}>
                  Welcome to Finkulp, Unlock automated strategies and trading courses to master the stock market
                </h4>
               
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
