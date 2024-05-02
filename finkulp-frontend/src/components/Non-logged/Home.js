import React from "react";
import vid from '../../Animations/landingpage1.mp4'
import Lottie from "lottie-react";
import animationData from "../../Animations/landingpage.json";
import YouGet from './YouGet'
import StepPage from "./StepPage";
import Stats from "./Stats";
import Stats2 from "./Stats2";
import WhatPeopleSay from "./whatPeopleSay";
import FAQ from './FAQ'
import Navbar from "./Nevbar";
const Home = () => {
  return (
    <>
     <Navbar></Navbar>
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
        <div className="container " style={{marginTop:"-50px"}}>
          <div className="-mx-4 flex flex-wrap my-5">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content my-10">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl my-10" style={{marginTop:"100px"}}>
                Innovative Algorithms Fuel Your Trading Success!
                </h1>
                <p className="mb-8 max-w-[480px] text-base ">
                Revolutionizing Trading with State-of-the-Art Algorithms for Unmatched Profitability and Strategic Success!
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12" style={{position:'relative',paddingTop:"-100px"}}>
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Lottie animationData={animationData} loop ></Lottie>
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                   </span>
                </div>
              </div>
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



