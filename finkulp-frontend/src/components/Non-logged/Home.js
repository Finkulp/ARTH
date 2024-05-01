import React, { useState } from "react";
import vid from '../../Animations/landingpage1.mp4'
import Lottie from "lottie-react";
import animationData from "../../Animations/landingpage.json";
const Home = () => {
  return (
    <>
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
        <div className="container">
          <div className="-mx-4 flex flex-wrap my-10">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
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
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Lottie animationData={animationData} loop></Lottie>
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                   </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};



