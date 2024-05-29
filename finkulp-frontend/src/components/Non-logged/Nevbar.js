import React from "react";
import { useState } from "react";
import img from '../../Images/Logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`absolute left-0 top-0 z-20 flex w-full items-center`} style={{ background: "white" }}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a href="/#" className="block w-full py-5">
                           <Link to='/'><img
                                src={img}
                                alt="logo"
                                className="w-full"
                                style={{ paddingTop: '20px' }}
                            /></Link> 
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
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
                            className={` ${
                                open ? "block" : "hidden"
                                } lg:block`}
                        >
                            <ul className="block lg:flex">

                              <div  className="flex py-2 text-base font-medium text-dark hover:text-primary  lg:ml-10 lg:inline-flex">Choose strategies</div>
                              <Link to='/NonLoggedFeatures'> <div  className="flex py-2 text-base font-medium text-dark hover:text-primary  lg:ml-10 lg:inline-flex">Features</div></Link>  
                                <div  className="flex py-2 text-base font-medium text-dark hover:text-primary  lg:ml-10 lg:inline-flex">Resources</div>
                            </ul>
                        </nav>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <Link to='/login'>
                            <span
                                className="px-7 py-3 text-base font-medium text-dark hover:text-primary "
                            >
                                Sign in
                            </span>
                            </Link>
                            <Link to='/signup'>
                            <a
                                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
                            >
                                Sign Up
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbar;
