import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import BlueBackground1 from '../../Animations/BlueBackground3.jpg'
export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [triggerCount, setTriggerCount] = useState(0);

  useEffect(() => {
    if (inView) {
      setTriggerCount((prevCount) => prevCount + 1);
    }
  }, [inView]);

  return (
    <div>
    <div ref={ref} >
      <section className="py-10 bg-white  ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h4
              className="text-xl font-bold text-gray-900"
              style={{ fontWeight: '600', fontSize: '25px',fontFamily:'poppins',color:"	#4285F4" ,paddingTop:'50px'}}
            >
              Numbers tell the hard works we've done so far
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold "style={{color:'	#4285F4'}}>
                      {inView && <CountUp key={triggerCount} start={0} end={10} duration={2}style={{color:'	#4285F4'}} />}+
                    </h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight" style={{color:'#34A853'}}>
                      Brokers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold "style={{color:'	#4285F4'}}>
                      {inView && <CountUp key={triggerCount} start={0} end={40} duration={2} style={{color:'	#4285F4'}}/>}+
                    </h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight " style={{color:'#34A853'}}>
                      Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold "style={{color:'	#4285F4'}}>
                      ₹{inView && <CountUp key={triggerCount} start={0} end={8} duration={2} style={{color:'	#4285F4'}}/>}Cr+
                    </h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight " style={{color:'#34A853'}}>
                      Invested
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold"style={{color:'	#4285F4'}}>
                      ₹{inView && <CountUp key={triggerCount} start={0} end={800} duration={2}style={{color:'	#4285F4'}} />}Cr+
                    </h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight " style={{color:'#34A853'}}>
                      Trading Volume
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold "style={{color:'	#4285F4'}}>
                      {inView && <CountUp key={triggerCount} start={0} end={10} duration={2} style={{color:'	#4285F4'}}/>}+
                    </h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight " style={{color:'#34A853'}}>
                      Backtested Index & Stock Based Strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
              <div className="px-4 py-6">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold" style={{color:'	#4285F4'}} >
                      {inView && <CountUp key={triggerCount} start={0} end={25} duration={2} style={{color:'	#4285F4'}} />}+
                    </h4>
                    <p className="mt-1.5 text-lg font-medium leading-tight" style={{color:'#34A853'}}>
                      Officially Vetted & Self Tested Online Courses to Choose
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
