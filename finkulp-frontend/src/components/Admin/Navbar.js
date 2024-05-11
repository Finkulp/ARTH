import React, { useState } from "react";
import logo from '../../Images/Logo.png'
import { Link } from "react-router-dom";
const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
              <img src={logo}/>
            </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <Link to='/adminhome/'><ListItem>Trading Strategy</ListItem></Link>
                  <ListItem >courses</ListItem>
                  <ListItem NavLink="/#">Members</ListItem>
                  <Link to='/adminhome/updatingAlgo'> <ListItem >Algo</ListItem></Link>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <div
                
                className="px-7 py-3 text-base font-medium  text-green-500 hover:text-blue dark:text-white"
                style={{border:'solid',borderWidth:'1px',borderRadius:"5px",marginRight:'10px'}}
              >
                +Algo
              </div>
              <div
            
                className="px-7 py-3 text-base font-medium text-green-500 hover:text-primary dark:text-white"
                style={{border:'solid',borderWidth:'1px',borderRadius:"5px",marginRight:'10px'}}
              >
                +course
              </div>

              <a
                href="/#"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
