import React from "react";
import { useState } from "react";
import img from '../../Images/Logo.png'
const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <header className={`absolute left-0 top-0 z-20 flex w-full items-center`} style={{background:"white",color:"black"}}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full py-5">
                <img
                  src={img}
                  alt="logo"
                  className="w-full "
                  style={{paddingTop:'20px'}}
                />
                <img
                  src={img}
                  alt="logo"
                  className="w-full hidden "
                />
              </a>
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
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                </button>
                <nav
                  id="navbarCollapse"
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/#" style={{color:"black"}}>Choose strategies</ListItem>
                    <ListItem NavLink="/#" style={{color:"black"}}>Features</ListItem>
                    <ListItem NavLink="/#" style={{color:"black"}}>Resources</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a
                  href="/#"
                  className="px-7 py-3 text-base font-medium text-dark hover:text-primary "
                >
                  Sign in
                </a>
  
                <a
                  href="/#"
                  className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  const ListItem = ({ children, NavLink }) => {
    return (
      <>
        <li>
          <a
            href={NavLink}
            className="flex py-2 text-base font-medium text-dark hover:text-primary  lg:ml-10 lg:inline-flex"
          >
            {children}
          </a>
        </li>
      </>
    );
  };
export default Navbar;  