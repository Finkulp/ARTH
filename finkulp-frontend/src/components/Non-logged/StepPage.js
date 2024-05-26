import React from 'react';
import Lottie from "lottie-react";
import LoginAnimation from '../../Animations/LoginAnimation.json';
import LearnEarn from '../../Animations/LearnEarn.json';
import AddBroker from '../../Animations/AddBroker.png'
import selectInvest from '../../Animations/selectInvest.json';
import Grow from '../../Animations/Grow.json';

const StepPage = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{fontSize:'30px',paddingTop:'270px',fontWeight:'600', fontFamily:'poppins'}}>Step-by-Step Guide to Wealth Creation!</div>
      </div>
      <div className="container mx-auto">
        {/* Login/Register Section */}
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between" style={{marginTop:'-100px'}}>
          <div className="md:w-1/2">
            <Lottie animationData={LoginAnimation} style={{ width: '60%',paddingTop:"100px" }} />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">Login/Register</h1>
            <p className="text-base"
               data-aos="fade-up"
               data-aos-offset="50"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center">
              Create an account on our platform by signing up or logging in if you already have an account. Provide basic information and set up your profile securely.
            </p>
          </div>
        </div>

        {/* Learn and Earn Section */}
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8" style={{marginTop:"-320px"}}>
          <div className="md:w-1/2 order-last md:order-first mt-4 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">Learn and Earn</h1>
            <p className="text-base"   data-aos="fade-up"
               data-aos-offset="50"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center">
            We are the pioneers of the Indian Financial Markets offering both learning & earning opportunities under one roof. Explore our wide range of online/offline courses on Financial Literacy, Trading & Investment, Money Management, Risk Management and Mind, Body & Spirit - Necessary Trinity for Stock Market
            </p>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <Lottie animationData={LearnEarn} />
          </div>
        </div>

        {/* Add Broker Section */}
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8" style={{marginTop:"-400px"}}>
          <div className="md:w-1/2">
            <div className="w-full h-64 md:h-auto" style={{width:'500px',height:"500px",paddingTop:"20px"}}>
              <img src={AddBroker} style={{height:'300px',marginTop:"120px",marginLeft:'100px'}} />
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">Add Broker and Explore Resources</h1>
            <p className="text-base"
               data-aos="fade-up"
               data-aos-offset="50"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center">
            Connect to your preferred or existing brokers and get started. Choose from a wide range of resources pertaining with Financial Markets
            </p>
          </div>
        </div>

        {/* Select Strategies and Invest Section */}
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8" style={{marginTop:"-150px",padding:'0px'}}>
          <div className="md:w-1/2 order-last md:order-first mt-4 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">Select Strategies and Invest</h1>
            <p className="text-base"
               data-aos="fade-up"
               data-aos-offset="50"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center">
              Use our tools to create personalized trading strategies and make informed investment decisions.
            </p>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <Lottie animationData={selectInvest} style={{width:"60%"}} />
          </div>
        </div>

        {/* Grow Your Portfolio Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between " style={{marginTop:"0px",padding:"0px"}}>
          <div className="md:w-1/2">
            <div className="w-full h-64 md:h-auto">
              <Lottie animationData={Grow} style={{width:"60%"}}/>
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-2xl font-bold mb-4">Grow Your Portfolio</h1>
            <p className="text-base"
               data-aos="fade-up"
               data-aos-offset="50"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center">
              Begin investing confidently, monitor performance, and adjust strategies for optimal returns.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepPage;
