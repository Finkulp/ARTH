import React from "react";
import { useState } from "react";
import img from '../../Images/Logo.png';
import { Link } from "react-router-dom";
import Courses from "./coursesDroplist";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`absolute left-0 top-0 z-20 flex w-full items-center`} style={{ background: "white", color: "black" }}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a href="/#" className="block w-full py-5">
                            <img
                                src={img}
                                alt="logo"
                                className="w-full"
                                style={{ paddingTop: '20px' }}
                            />
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
                              <Link to='/loggedhome'> <ListItem NavLink="/#" style={{ color: "black" }}>Home</ListItem></Link> 
                                <ListItem NavLink="/#" style={{ color: "black" }}>Dashboard</ListItem>
                                <ListItem NavLink="/#" style={{ color: "black" }}>AlgoShopping</ListItem>
                                <ListItem NavLink="/#" style={{ color: "black" }}>Trades</ListItem>
                                <ListItem NavLink="/#" style={{ color: "black" }}>Add Broker</ListItem>
                                <ListItem style={{ color: "black" }}><Courses></Courses></ListItem>
                               <Link to='/faqlogged'> <ListItem NavLink="/#" style={{ color: "black" }}>FAQ</ListItem></Link>
                                <Link to="/subscription"><ListItem NavLink="/#" style={{ color: "black" }}>Subscription</ListItem></Link>
                                <ListItem NavLink="/#" style={{ color: "black" }}>Setting</ListItem>
                            </ul>
                        </nav>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <Link to='/'>
                            <a
                                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
                            >
                                Logout
                            </a>
                            </Link>
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
