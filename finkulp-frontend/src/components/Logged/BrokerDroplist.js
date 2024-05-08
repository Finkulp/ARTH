import React from "react";
import { Link } from "react-router-dom";

const Broker = () => {
  return (
    <div className="flex">
      <Link
        to="/loggedhome/Add-Broker/zerodtha"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        Zerodha
      </Link>
      <Link
        to="/loggedhome/Add-Broker/Alice-Blue"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        Alice Blue
      </Link>
      <Link
        to="/loggedhome/Add-Broker/Upstocks"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        Upstocks
      </Link>
      <Link
        to="/loggedhome/Add-Broker/Angle-One"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        Angle One
      </Link>
      <Link
        to="/loggedhome/Add-Broker/Kotak"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        Kotak
      </Link>
      <Link
        to="/loggedhome/Add-Broker/HDFC-Sky"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        HDFC Sky
      </Link>
      <Link
        to="/loggedhome/Add-Broker/Motilal"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        Motilal
      </Link>
      <Link
        to="/loggedhome/Add-Broker/5paisa"
        className="block px-4 py-2 text-black hover:bg-gray-200 mr-2 rounded"
      >
        5Paisa
      </Link>
    </div>
  );
};

export default Broker;
