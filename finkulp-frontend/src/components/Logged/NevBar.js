import React from "react";
import { useState } from "react";
import img from '../../Images/Logo.png';
import { Link } from "react-router-dom";
import Courses from "./coursesDroplist";
import Broker from './BrokerDroplist';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`absolute left-0 top-0 z-20 flex w-full items-center`} style={{ background: "white", color: "black" }}>
            <div >
                <div className="relative  flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <span  className="block w-full py-5">
                            <img
                                src={img}
                                alt="logo"
                                className="w-full"
                                style={{ paddingTop: '20px' }}
                            />
                        </span>
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
                              <Link to='/loggedhome/tradingStrategy'> <ListItem NavLink="/#" style={{ color: "black" }}>Home</ListItem></Link> 
                             <Link to='/loggedhome/Dashboard'><ListItem  style={{ color: "black" }}>Dashboard</ListItem></Link>   
                              <Link to='/loggedhome/MarketPlace'> <ListItem  style={{ color: "black" }}>Market Place</ListItem></Link> 
                               <Link to='/loggedhome/Trade'><ListItem  style={{ color: "black" }}>Trades</ListItem></Link> 
                                <ListItem  style={{ color: "black" }}><Broker></Broker></ListItem>
                                <ListItem style={{ color: "black" }}><Courses></Courses></ListItem>
                               <Link to='/loggedhome/faqlogged'> <ListItem NavLink="/#" style={{ color: "black" }}>FAQ</ListItem></Link>
                                <Link to="/loggedhome/subscription"><ListItem NavLink="/#" style={{ color: "black" }}>Subscription</ListItem></Link>
                                <ListItem NavLink="/#" style={{ color: "black" }}>Setting</ListItem>
                            </ul>
                        </nav>
                        <div className=" justify-end pr-16 sm:flex lg:pr-0">
                            <Link to='/'>
                            <span
                                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
                            >
                                Logout
                            </span>
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
