import React from "react";
import BlueBackground4 from '../../Animations/BlueBackground2.jpg'
export default function FAQ() {
  return (
    <div style={{background:`url(${BlueBackground4})`, backgroundSize:'cover',paddingTop:'50px',marginTop:'-30px',paddingBottom:"100px"}}>
    <div className="container mx-auto px-4" >
      <section className="mt-10">
        <h3 className="text-center mb-4 pb-2 text-primary font-bold text-3xl">
          Frequently Asked Questions
        </h3>
        <p className="text-center mb-5" style={{color:'seagreen'}}>
          What is Finkulp, and how does it work?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <h6 className="mb-3 text-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 11.08V12a10 10 0 11-5.93-9.14"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M22 4L12 14.01l-3-3"
                />
              </svg>
              What is Finkulp, and how does it work?
            </h6>
            <p style={{color:'seagreen'}}>
              Finkulp is a user-friendly trading platform that connects users with global financial markets.
            </p>
          </div>
          <div className="mb-4">
            <h6 className="mb-3 text-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Do I need any prior experience to start trading on Finkulp?
            </h6>
            <p style={{color:'seagreen'}}>
              No prior trading experience is required. Finkulp offers educational resources like courses to help beginners understand trading basics and use the platform effectively.
            </p>
          </div>
          <div className="mb-4">
            <h6 className="mb-3 text-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4-4m4 0l-4 4"
                />
              </svg>
              How secure is my personal and financial information on Finkulp?
            </h6>
            <p style={{color:'seagreen'}}>
              Finkulp prioritizes security with encryption, secure servers, and authentication protocols to protect user data and ensure a safe trading environment.
            </p>
          </div>
          <div className="mb-4">
            <h6 className="mb-3 text-primary flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v14m0-14a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              Are there any fees or commissions associated with trading on Finkulp?
            </h6>
            <p style={{color:'seagreen'}}>
              Finkulp's fee structure is transparent and based on the type of instrument traded, trade size, and account type. Users can review the fee schedule before trading.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
