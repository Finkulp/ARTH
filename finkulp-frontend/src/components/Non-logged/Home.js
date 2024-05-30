import React, { useEffect } from "react";
import vid from '../../Animations/landingpage1.mp4'
import TradingLaptop from '../../Animations/TradingLaptop.png'
import TradingPhone from '../../Animations/TradingPhone.png'
import YouGet from './YouGet'
import StepPage from "./StepPage";
import Stats from "./Stats";
import Stats2 from "./Stats2";
import WhatPeopleSay from "./whatPeopleSay";
import Code from '../../Animations/codetyping.mp4'
import FAQ from './FAQ'
import Navbar from "./Nevbar";
import { useState } from "react";
import '../../CSS/Algoshopping.css'
import ResourcesHome from "./Resources/ResourcesHome";
const Home = () => {
  const words = ["Hello!", "Welcome to Finkulp!"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const[list,setlist]=useState(false);
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(prev => 
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 0);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed, words]);
  return (
    <>
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#fff', width: '100%' }}>
        {list&&
        <div style={{position:'absolute', zIndex:"10001",left:'715px',top:'50px'}}>
        <ResourcesHome></ResourcesHome>
        </div>}
        
      <Navbar setlist={setlist} list={list}></Navbar>
    </nav>
    <div style={{position:"absolute",top:"60px",zIndex:"100",left:"500px"}}>
        <div className="w-full h-full flex justify-center items-center" style={{ marginTop: '100px' }}>
          <h1 id="typewriter" className="text-4xl font-bold"></h1>
        </div>
      </div>
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
                <div className=" text-4xl font-bold text-white dark:text-white  xl:text-5xl "style={{marginBottom:"30px",height:"30px"}}>
                {currentWord}
                </div>
                <div className="text-white "style={{marginBottom:"30px"}}>
                One Stop Shop for All Your Learning Needs
                </div>
                    <a
                      href="/#"
                      className="Featuresbutton inline-flex items-center justify-center rounded-md  px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7" style={{color:"white"}}
                    >
                      Get Started
                    </a>
              </div>
            </div>
            </div>
            <div className="w-full " style={{position:'relative',paddingTop:"-130px",display:'flex',justifyContent:'center',marginTop:'-55px'}}>
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <div style={{display:'flex', gap:'50px'}}>
                  <img src={TradingLaptop} style={{marginTop:'30px',height:'500px'}}></img>  
                  <img src={TradingPhone} style={{marginTop:'30px',height:'500px'}}></img>  
                  </div>
                  <video
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: '115%',
                    left: '50%',
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



