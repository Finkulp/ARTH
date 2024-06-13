import React from "react";

const AgloshoppingTemplateStats = (props) => {
  return (
    <div className="pb-10 pt-10 md:pt-20 dark:bg-dark" style={{ width: "95%", margin: "0 auto" }}>
      <div className="container mx-auto" style={{position:'relative',marginBottom:"-100px"}}>
        <div className="flex flex-wrap " style={{alignContent:"center",alignItems:'center'}} icons="fa-brands fa-font-awesome" >
          <TeamCard value="Name" title={props.VeiwAlgoAdmin.Strategist} colorname={"#ccddff"} bordercolor={"#004de6"} icons={'fa-solid fa-lightbulb'}/>
          <TeamCard value="NSE" title={props.VeiwAlgoAdmin.NSE} colorname={"#e6ffff"}  bordercolor={"#00e6e6"} icons={"fa-solid fa-boxes-stacked"}/>
          <TeamCard value="Category" title={props.VeiwAlgoAdmin.Category} colorname={"#eee6ff"} bordercolor={"#661aff"}icons={"fa-solid fa-calendar-day"}/>
          <TeamCard value="Recommended Duration" title={props.VeiwAlgoAdmin.Recommended_Duration} colorname={"#e6ffee"} bordercolor={"#00ff55"} icons={"fa-regular fa-clock"}/>
          <TeamCard value="Subscription Fee" title={props.VeiwAlgoAdmin.Fee.Subscription} colorname={"#ffffe6"} bordercolor={"#ffff00"} icons={"fa-solid fa-wallet"}/>
          <TeamCard value="Pay-as-you-go Fee" title={props.VeiwAlgoAdmin.Fee.Pay_as_you_go} colorname={"#ffe6f3"}  bordercolor={"#e60077"} icons={"fa-solid fa-wallet"}/>
        </div>
      </div>
    </div>
  );
};

export default AgloshoppingTemplateStats;


const TeamCard = ({ title, value ,colorname,bordercolor,icons}) => {
  return (
    <>
      <div className="w-full " style={{marginTop:"30px", height:"80px",width:"240px"}}>
        <div className=" mb-10 w-full">
          <div className="relative  rounded-lg">
            <div className="absolute bottom-5  w-full ">
              <div className="relative  rounded-lg  " style={{width:"230px",height:"80px" ,background:`${colorname}`,paddingTop:"10px",border:'solid',borderColor:`${bordercolor}`}}>
                <div style={{display:"flex"}}>
                  <div style={{paddingLeft:"20px",paddingRight:"20px"}}>
                  <i className={`${icons}`} style={{fontSize:"50px", color:`${bordercolor}`}} ></i>
                  </div>
                  <div>
                <h3 className="text-base font-semibold  " style={{fontSize:'25px',color:`${bordercolor}`}}>
                  {title}
                </h3>
                <p className="text-xs text-body-color dark:text-dark-6" style={{fontSize:'15px',paddingTop:'5px'}}>
                  {value}
                </p>
                </div>
                </div>
                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={16}
                        cy={45}
                        r={45}
                        fill="white"
                        fillOpacity="0.0"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-0 top-0">
                    <svg
                      width={20}
                      height={25}
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="0.706257"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 0.706257 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 6.39669 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 12.0881 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 17.7785 24.3533)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 0.706257 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 6.39669 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 12.0881 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 17.7785 18.6624)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 0.706257 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 6.39669 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 12.0881 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 17.7785 12.9717)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 0.706257 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 6.39669 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 12.0881 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 17.7785 7.28077)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="0.706257"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 0.706257 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="6.39669"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 6.39669 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="12.0881"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 12.0881 1.58989)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="17.7785"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 17.7785 1.58989)"
                        fill="#3056D3"
                      />
                    </svg>
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
