import React from "react";

const MoneyTemplate = (props) => {
  const { details } = props;

  return (
    <>
      <section className=" pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6"style={{marginTop:"-100px",marginBottom:"-100px"}}>
            <SingleCard
              CardTitle={details.dividendYield}
              CardDescription="Dividend Yield"
              styles={{
                backgroundColor: "lightblue",
                border: "solid",
                borderColor: "blue",
              }}
            />
            <SingleCard
              CardTitle={details.peRatio}
              CardDescription="P/E Ratio"
              styles={{
                backgroundColor: "lightgreen",
                border: "solid",
                borderColor: "green",
              }}
            />
            <SingleCard
              CardTitle={details.fiftyTwoWeekHigh}
              CardDescription="52-Week High"
              styles={{
                backgroundColor: "skyblue",
                border: "solid",
                borderColor: "lightblue",
              }}
            />
            <SingleCard
              CardTitle={details.eps}
              CardDescription="EPS (Earnings per Share)"
              styles={{
                backgroundColor: "lightpink",
                border: "solid",
                borderColor: "pink",
              }}
            />
            <SingleCard
              CardTitle={details.riskLevel}
              CardDescription="Risk Level"
              styles={{
                backgroundColor: "lightbrown",
                border: "solid",
                borderColor: "brown",
              }}
            />
            <SingleCard
              CardTitle={details.accountBalance}
              CardDescription="Account Balance"
              styles={{
                backgroundColor:"lightyellow",
                border: "solid",
                borderColor: "yellow",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MoneyTemplate;

const SingleCard = ({ CardDescription, CardTitle, styles }) => {
  return (
    <>
      <div
        className="mb-5 overflow-hidden rounded-lg shadow-md duration-300 hover:shadow-xl"
        style={styles}
      >
        <div className="text-center sm:p-9 md:p-7">
          <h3>{CardTitle}</h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </div>
    </>
  );
};
