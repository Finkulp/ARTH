import React, { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <span
        className="  rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        Courses
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
              to="/my-courses"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              My Courses
            </Link>
          </li>
          <li>
            <Link
              to="/explore-courses"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              Explore Courses
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Courses;
