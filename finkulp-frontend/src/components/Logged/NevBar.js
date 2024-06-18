import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import img from '../../Images/Logo.png';

const Navbar = () => {
    const location = useLocation();
    const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        paddingBottom: '10px',
        paddingTop:'10px',
        fontSize: '15px',
        fontWeight: '600',
        fontFamily: 'Poppins',
        paddingLeft: '20px' 
    };

    const activeLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        paddingBottom: '20px',
        fontSize: '15px',
        paddingTop:'10px',
        fontWeight: '600',
        fontFamily: 'Poppins',
        background:"blue",
        paddingLeft: '20px' 
    };

    const getLinkStyle = (path) => {
        return location.pathname === path ? activeLinkStyle : linkStyle;
    };

    const toggleDashboardDropdown = () => {
        setIsDashboardDropdownOpen(!isDashboardDropdownOpen);
    };

    const logout = () => {
        document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        console.log('Logged out, token deleted'); 
    };

    return (
        <header style={{ color: "black", width: '200px',paddingBottom:'50px' }}>
            <div>
                <div className="relative items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <span className="block w-full py-5">
                            <img
                                src={img}
                                alt="logo"
                                className="w-full"
                                style={{ paddingTop: '20px' }}
                            />
                        </span>
                    </div>
                    <div className="w-full">
                        <div className="block" style={{ gap: "30px" }}>
                            <div onClick={toggleDashboardDropdown} style={getLinkStyle('/loggedhome/Dashboard')}>
                                <Link to='/loggedhome/Dashboard' style={getLinkStyle('/loggedhome/Dashboard')}>Dashboard<span style={{paddingLeft:'10px'}}><i class="fa-solid fa-square-caret-down"></i></span></Link>
                            </div>
                            {isDashboardDropdownOpen && (
                                <div style={{ paddingLeft: '30px' }}>
                                    <div style={getLinkStyle('/loggedhome/Dashboard/MyStrategy')}>
                                        <Link to='/loggedhome/Dashboard/MyStrategy' style={getLinkStyle('/loggedhome/Dashboard/MyStrategy')}>My Strategies</Link>
                                    </div>
                                    <div style={getLinkStyle('/loggedhome/Dashboard/Trade')}>
                                        <Link to='/loggedhome/Dashboard/Trade' style={getLinkStyle('/loggedhome/Dashboard/Trade')}>Trade History</Link>
                                    </div>
                                    <div style={getLinkStyle('/loggedhome/Dashboard')}>
                                        <Link to='/loggedhome/Dashboard' style={getLinkStyle('/loggedhome/Dashboard')}>Details</Link>
                                    </div>
                                    <div style={getLinkStyle('/loggedhome/Dashboard/my-courses')}>
                                        <Link to='/loggedhome/Dashboard/my-courses' style={getLinkStyle('/loggedhome/Dashboard/my-courses')}>My Courses</Link>
                                    </div>
                                </div>
                            )}
                            <div style={getLinkStyle('/loggedhome/MarketPlace')}>
                                <Link to='/loggedhome/MarketPlace' style={getLinkStyle('/loggedhome/MarketPlace')}>MarketPlace</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/Add-Broker')}>
                                <Link to='/loggedhome/Add-Broker' style={getLinkStyle('/loggedhome/Add-Broker')}>Broking Partner</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/my_profile')}>
                                <Link to='/loggedhome/my_profile' style={getLinkStyle('/loggedhome/my_profile')}>My Portfolio</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/Reports')}>
                                <Link to='/loggedhome/Reports' style={getLinkStyle('/loggedhome/Reports')}>Reports</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/MySubscriptions')}>
                                <Link to='/loggedhome/MySubscriptions' style={getLinkStyle('/loggedhome/MySubscriptions')}>My Subscriptions</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/courses')}>
                                <Link to='/loggedhome/courses' style={getLinkStyle('/loggedhome/courses')}>Courses</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/Resources')}>
                                <Link to='/loggedhome/Resources' style={getLinkStyle('/loggedhome/Resources')}>Resources</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/subscription')}>
                                <Link to='/loggedhome/subscription' style={getLinkStyle('/loggedhome/subscription')}>Subscription</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/Checkout')}>
                                <Link to='/loggedhome/Checkout' style={getLinkStyle('/loggedhome/Checkout')}>Orders</Link>
                            </div>
                            <div style={getLinkStyle('/loggedhome/Setting')}>
                                <Link to='/loggedhome/Setting' style={getLinkStyle('/loggedhome/Setting')}>Setting</Link>
                            </div>
                            <div className="rounded-lg bg-primary py-3 text-base font-medium text-white hover:bg-opacity-90" onClick={logout} style={{ marginTop: '40px', width: '100px', textAlign: 'center',marginLeft:'20px' }}>
                                <Link to='/'>Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
