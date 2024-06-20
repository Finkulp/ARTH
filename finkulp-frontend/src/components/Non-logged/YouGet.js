import React from "react";
import AlogorithmicTrading from '../../Animations/AlgorithmicTrading.json'
import RealTime from '../../Animations/RealTime.json'
import LearningProgram from '../../Animations/LearningProgram.json';
import Lottie from "lottie-react";
import BlueBackground3 from '../../Animations/BlueBackground2.jpg'
const YouGet = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <h1 style={{fontWeight:"700",fontSize:"26px",textAlign:"center",paddingBottom:"50px", color:'blue',fontFamily:'poppins'}}>With FINKULP you get ...</h1>
        <h1 style={{fontWeight:"300",fontSize:"26px",textAlign:"center",paddingBottom:"50px",color:'seagreen',fontFamily:'poppins'}}>Revolutionary features unseen in the trading realm, now consolidated under one roof!</h1>
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
            className="text-base "
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center"
            style={{position:"relative",left:'50px',top:"50px",zIndex:'1',color:"black"}}>
            <SingleCard
              color='#a5ccff'
              animation={AlogorithmicTrading}
              CardTitle="Real Time Execution"
              CardDescription="Harness the potential of technology-driven trading algorithms, impervious to emotional impulses, laying the groundwork for disciplined and profitable trading strategies."
            />
            </div>
            <div className="mb-10 overflow-hidden rounded-lg  shadow-1 duration-300 hover:shadow-3 text-base "
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center"
            style={{zIndex:"2",color:"white",background:'#3d85c6'}}
               >
            <SingleCard
              animation={RealTime}
              color="#3d85c6"
              CardTitle="Algorithmic Strategies"
              CardDescription="Unlock Automated Trading Excellence with Algo Shopping!
              Effortlessly Execute Winning Strategies on Your Terms!"
            /></div>
            <div
            className="text-base "
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="center"
            style={{position:'relative',left:"-50px",top:"50px",zIndex:"1",color:'black'}}>
            <SingleCard
              animation={LearningProgram}
              color='#a5ccff'
              CardTitle="Learning Programs"
              CardDescription="Empower yourself with essential trading knowledge through our comprehensive courses. Learn, practice, and master the art of trading at your own pace."
            />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YouGet;

const SingleCard = ({
  animation,
  Button,
  CardDescription,
  CardTitle,
  color,
  btnHref,
  Color
}) => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg bg-white  duration-300 hover:shadow-3  " style={{background:`${color}`}}>
        <Lottie animationData={animation} style={{height:"270px"}}/>
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              className={`mb-4 block text-xl font-semibold text-${Color} hover:text-dark  sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]`}
            >
              {CardTitle}
            </a>
          </h3>
          <p className={`mb-7 text-base leading-relaxed text-${Color} 6`}>
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </>
  );
};
