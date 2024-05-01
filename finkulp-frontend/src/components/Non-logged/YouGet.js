import React from "react";
import AlogorithmicTrading from '../../Animations/AlgorithmicTrading.json'
import RealTime from '../../Animations/RealTime.json'
import LearningProgram from '../../Animations/LearningProgram.json';
import Lottie from "lottie-react";

const YouGet = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <h1 style={{fontWeight:"700",fontSize:"26px",textAlign:"center",paddingBottom:"50px"}}>With FINKULP you get ...</h1>
        <h1 style={{fontWeight:"300",fontSize:"26px",textAlign:"center",paddingBottom:"50px"}}>Revolutionary features unseen in the trading realm, now consolidated under one roof!</h1>
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              animation={AlogorithmicTrading}
              CardTitle="Real Time Execution"
              CardDescription="Harness the potential of technology-driven trading algorithms, impervious to emotional impulses, laying the groundwork for disciplined and profitable trading strategies."
            />
            <SingleCard
              animation={RealTime}
              CardTitle="Algorithmic Strategies"
              CardDescription="Unlock Automated Trading Excellence with Algo Shopping!
              Effortlessly Execute Winning Strategies on Your Terms!"
            />
            <SingleCard
              animation={LearningProgram}
              CardTitle="Learning Programs"
              CardDescription="Empower yourself with essential trading knowledge through our comprehensive courses. Learn, practice, and master the art of trading at your own pace."
            />
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
  titleHref,
  btnHref,
}) => {
  return (
    <>
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3  ">
        <Lottie animationData={animation} />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary  sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color 6">
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
