import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../../CSS/Algoshopping.css";

const BrokingDetails = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };
  return (
    <>
      <div className="container mx-auto py-20 " style={{zIndex:'3'}}>
       
        <div>
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Add Broker
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
          style={{zIndex:'200',width:"700px",position:"relative",left:'-720px',top:'-45px'}}
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
              style={{display:"flex"}}
            >
              <li>
                <Link to='/loggedhome/5paisa'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  5Paisa
                </span>
                </Link>
              </li>
              <li>
                <Link to='/loggedhome/Alice-Blue'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Alice Blue
                </span>
                </Link>
              </li>
              <li>
                <Link to='/loggedhome/Angle-One'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  AngleOne
                </span>
                </Link>
              </li>
              <li>
                <Link to='/loggedhome/Kotak'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Kotak
                </span>
                </Link>
              </li>
              <li>
                <Link to='/loggedhome/Motilal'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Motilal
                </span>
                </Link>
              </li>
              <li>
                <Link to='/loggedhome/Upstocks'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Upstock
                </span>
                </Link>
              </li>
              <li>
                <Link to='/loggedhome/zerodtha'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Zerodtha
                </span>
                </Link>
              </li>
              <li>
                <Link to='/loggedhome/'>
                <span
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  HDFC
                </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default BrokingDetails;
