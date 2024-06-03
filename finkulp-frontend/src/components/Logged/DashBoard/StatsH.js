import { fontFamily, height, textAlign, width } from "@mui/system";
import React from "react";

const MoneyStats = (props) => {
  const { details } = props;

  return (
    <>
      <section className=" pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]" style={{justifyContent: 'space-between', marginTop:"5px",marginBottom:"5px",paddingTop:"0px",justifyContent:"space-evenly",paddingBottom:"0px"}}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" style={{marginTop:"5px",marginBottom:"5px",marginInline:"3%",paddingBottom:"0px", paddingTop:"0px", alignContent:"center" }}>
            <SingleCard
              CardTitle="Dividend Yield"
              CardDescription="120%"
              styles={{
                backgroundColor: "lightblue",
                border: "solid",
                borderColor: "blue",
                fontFamily:"'Roboto', sans-serif",
                justifyContent:"center",
                height:"110px"
              }}
            />
            <SingleCard
              CardTitle="P/E ratio"
              CardDescription="5.67"
              styles={{
                backgroundColor: "lightgreen",
                border: "solid",
                fontFamily:"'Roboto', sans-serif",
                borderColor: "green",
                height:"110px"
              }}
            />
            <SingleCard
              CardTitle="Risk Level"
              CardDescription="101%"
              styles={{
                backgroundColor: "violet",
                border: "solid",
                fontFamily:"'Roboto', sans-serif",
                borderColor: "purple",
                height:"110px"
              }}
            />
            <SingleCard
              CardTitle="Account Balance"
              CardDescription="$3948769"
              styles={{
                backgroundColor:"lightyellow",
                border: "solid",
                fontFamily:"'Roboto', sans-serif",
                borderColor: "yellow",
                height:"110px"
              }}
            />
          </div>
      </section>
    </>
  );
};

export default MoneyStats;

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
