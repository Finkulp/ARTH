import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Broker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOutsideClick = (event) => {
    if (!event.target.closest('.relative')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <span
        className="  rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        Add Broker
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
      {isOpen && (
        <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
          <li>
            <Link
              to="/loggedhome/Add-Broker/zerodtha"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Zerodha
            </Link>
          </li>
          <li>
            <Link
              to="/loggedhome/Add-Broker/Alice-Blue"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Alice Blue
            </Link>
          </li>
          <li>
            <Link
              to="/loggedhome/Add-Broker/Upstocks"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Upstocks
            </Link>
          </li>
          <li>
            <Link
              to="/loggedhome/Add-Broker/Angle-One"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Angle One
            </Link>
          </li>
          <li>
            <Link
              to="/loggedhome/Add-Broker/Kotak"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Kotak
            </Link>
          </li>
          <li>
            <Link
              to="/loggedhome/Add-Broker/HDFC-Sky"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              HDFC Sky
            </Link>
          </li>
          <li>
            <Link
              to="/loggedhome/Add-Broker/Motilal"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Motilal
            </Link>
          </li>
          <li>
            <Link
              to="/loggedhome/Add-Broker/5paisa"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              5Paisa
            </Link>
          </li>
          
        </ul>
      )}
    </div>
  );
};

export default Broker;
