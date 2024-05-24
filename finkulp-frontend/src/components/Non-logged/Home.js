import React from "react";
import vid from '../../Animations/landingpage1.mp4'
import graph from '../../Animations/Trading.webp'
import YouGet from './YouGet'
import StepPage from "./StepPage";
import Stats from "./Stats";
import Stats2 from "./Stats2";
import WhatPeopleSay from "./whatPeopleSay";
import Code from '../../Animations/codetyping.mp4'
import FAQ from './FAQ'
import Navbar from "./Nevbar";
const Home = () => {
  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#fff', width: '100%' }}>
      <Navbar style={{}}></Navbar>
    </nav>
   
      <div className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]" style={{position:"relative",zIndex:1}}>
      <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'cover',
                    zIndex:-1,
                }}
            >
                <source src={vid} type="video/mp4" />
            </video>
        <div className="container " style={{marginTop:"-50px"}} >
          <div style={{display:'flex',justifyContent:"center"}}>
            <div style={{width:"70%"}}>
              <div className=" my-10" style={{textAlign:'center'}}>
                <div className="mb-5 text-4xl font-bold !leading-[1.208] text-white dark:text-white  xl:text-5xl my-10" style={{marginTop:"100px"}}>
                Innvoating Algorithms to Fuel Your Trading Success
                </div>
                <div className="mb-8   text-white ">
                One Stop Shop for All Your Learning Needs
                </div>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Get Started
                    </a>
              </div>
            </div>
            </div>
            <div className="w-full " style={{position:'relative',paddingTop:"-100px",display:'flex',justifyContent:'center'}}>
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img src={graph} style={{background:"white",marginTop:'30px',height:'400px'}}></img>  
                  <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: '115%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    width:'500px',
                    objectFit: 'cover',
                }}
            >
                <source src={Code} type="video/mp4" className="hover:scale-110 transition-transform duration-300" />
            </video>
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                   </span>
                </div>
              </div>
        </div>
      </div>
      <StepPage></StepPage>
      <YouGet></YouGet>
      <Stats></Stats>
      <Stats2></Stats2>
      <WhatPeopleSay></WhatPeopleSay>
      <FAQ></FAQ>
    </>
  );
};

export default Home;



