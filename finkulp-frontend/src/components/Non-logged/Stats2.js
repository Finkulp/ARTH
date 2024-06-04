import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import BlueBackground from '../../Animations/BlueBackground2.jpg'

export default function Stats2() {
  return (
    <div style={{paddingTop:'50px'}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-4 md:mt-8"style={{marginTop:'20px',marginBottom:"50px"}}>
        <div className="md:w-1/2 order-last md:order-first mt-4 md:mt-0" style={{height:"300px"}}
            data-aos="fade-right"
            data-aos-offset="150"
            data-aos-delay="1"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center">
          <h1 className="text-2xl font-bold mb-4" style={{color:"#4285F4",fontFamily:"poppins",paddingTop:"70px"}}>Any location, any nation, any gadget - Conduct transactions from wherever you desire.</h1>
          <p className="text-base" style={{color:'	#34A853',fontFamily:'poppins'}}>
          Why invest years deciphering the intricacies of capital markets when our ready-to-use trading algorithms can achieve the same results in mere seconds?
          </p>
        </div>
        <div className="md:w-1/2 order-first md:order-last">
          <div style={{ width: "600px", height: "300px" }}
           data-aos="fade-left"
           data-aos-offset="150"
           data-aos-delay="1"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="center"
          >
            <VectorMap
              map={worldMill}
              containerStyle={{
                width: "600px",
                height: "300px"
              }}
              zoomOnScroll={false}
              zoomOnScrollSpeed={false}
              zoomOnScrollSpace={false}
              zoomOnClick={false}
              series={{
                regions: [
                  {
                    values: { IN: '#34A853' }, 
                    attribute: 'fill'
                  }
                ]
              }}
              backgroundColor='white'
              regionStyle={{
                initial: {
                  fill: '#4285F4' // Set default fill color for other regions to blue
                }
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "300px", background: `url(${BlueBackground})`, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"  }}>
        <h3 style={{ textAlign: "center", fontWeight: "400", fontSize: "23px", paddingBottom: "40px" }}
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="1"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center"
        >Looking to start your algorithmic trading journey?</h3>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        data-aos="fade-down"
        data-aos-offset="150"
        data-aos-delay="1"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center">Get Started</button>
      </div>
    </div>
  );
}
