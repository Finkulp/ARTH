import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import img from '../../Images/Logo.png';
import Courses from "./coursesDroplist";
import Broker from './BrokerDroplist';

const Navbar = () => {
    const [dashboard, setDashboard] = useState({
        color:'black',
        line:""
    });
    const [marketpalce, setMarketPlace] = useState({
        color:'black',
        line:""
    });
    const [broker, setbroker] = useState({
        color:'black',
        line:""
    });
    const [courses, setCourses] = useState({
        color:'black',
        line:""
    });
    const [faq, setfaq] = useState({
        color:'black',
        line:""
    });
    const [setting, setsetting] = useState({
        color:'black',
        line:""
    });
    const [subscription, setsubscription] = useState({
        color:'black',
        line:""
    });
    function changeDasboard(){
       setDashboard({
        color:"blue",
        line:"underline"
       });
       setCourses({
        color:"black",
        line:""
       })
       setMarketPlace({
        color:"black",
        line:""
       })
       setbroker({
        color:"black",
        line:""
       })
       setsubscription({
        color:"black",
        line:""
       })
       setsetting({
        color:"black",
        line:""
       })
       setfaq({
        color:"black",
        line:""
       })
    }
     function changeMarketPlace(){
        setDashboard({
            color:"black",
            line:""
        })
        setMarketPlace({
            color:"blue",
            line:"underline"
        })
        setCourses({
            color:"black",
            line:""
        })
        setbroker({
            color:"black",
            line:""
        })
        setfaq({
            color:"black",
            line:""
        })
        setsubscription({
            color:"black",
            line:""
        })
        setsetting({
            color:"black",
            line:""
        })
     }
     function changeBroker(){
        setDashboard({
            color:"black",
            line:""
        })
        setMarketPlace({
            color:"black",
            line:""
        })
        setCourses({
            color:"black",
            line:""
        })
        setbroker({
            color:"blue",
            line:"underline"
        })
        setfaq({
            color:"black",
            line:""
        })
        setsubscription({
            color:"black",
            line:""
        })
        setsetting({
            color:"black",
            line:""
        })
     }
     function changecourses(){
        setDashboard({
            color:"black",
            line:""
        })
        setMarketPlace({
            color:"black",
            line:""
        })
        setCourses({
            color:"blue",
            line:"underline"
        })
        setbroker({
            color:"black",
            line:""
        })
        setfaq({
            color:"black",
            line:""
        })
        setsubscription({
            color:"black",
            line:""
        })
        setsetting({
            color:"black",
            line:""
        })
     }
     function changeFAQ(){
        setDashboard({
            color:"black",
            line:""
        })
        setMarketPlace({
            color:"black",
            line:""
        })
        setCourses({
            color:"black",
            line:""
        })
        setbroker({
            color:"black",
            line:""
        })
        setfaq({
            color:"blue",
            line:"underline"
        })
        setsubscription({
            color:"black",
            line:""
        })
        setsetting({
            color:"black",
            line:""
        })
     }
     function changesubscription(){
        setDashboard({
            color:"black",
            line:""
        })
        setMarketPlace({
            color:"black",
            line:""
        })
        setCourses({
            color:"black",
            line:""
        })
        setbroker({
            color:"black",
            line:""
        })
        setfaq({
            color:"black",
            line:""
        })
        setsubscription({
            color:"blue",
            line:"underline"
        })
        setsetting({
            color:"black",
            line:""
        })
     }
     function changesetting(){
        setDashboard({
            color:"black",
            line:""
        })
        setMarketPlace({
            color:"black",
            line:""
        })
        setCourses({
            color:"black",
            line:""
        })
        setbroker({
            color:"black",
            line:""
        })
        setfaq({
            color:"black",
            line:""
        })
        setsubscription({
            color:"black",
            line:""
        })
        setsetting({
            color:"blue",
            line:"underline"
        })
     }
     function logout(){
        document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        console.log('Logged out, token deleted'); 
     }
    return (
        <header className="absolute left-0 top-0 z-20 flex w-full items-center" style={{ background: "white", color: "black", paddingLeft: "100px" }}>
            <div>
                <div className="relative  flex items-center justify-between">
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
                    <div className="flex w-full items-center justify-between px-4 " style={{gap:"100px"}}>
                        <nav className="lg:block">
                            <ul className="block lg:flex" style={{gap:"30px",fontSize:"15px",fontWeight:"600",fontFamily:"poppins"}}>
                               <Link to='/loggedhome/Dashboard'><span onClick={changeDasboard} style={{color:`${dashboard.color}`,textDecoration:`${dashboard.line}`}}>Dashboard</span></Link>
                                <Link  to='/loggedhome/MarketPlace'><span onClick={changeMarketPlace} style={{color:`${marketpalce.color}`,textDecoration:`${marketpalce.line}`}}>Market Place</span></Link>
                                <Link to='/loggedhome/Add-Broker'><span onClick={changeBroker} style={{color:`${broker.color}`,textDecoration:`${broker.line}`}}>Add Broker</span></Link>
                                <Link to='/loggedhome/courses'><span onClick={changecourses} style={{color:`${courses.color}`,textDecoration:`${courses.line}`}}>Courses</span></Link>
                                <Link to='/loggedhome/faqlogged'><span  onClick={changeFAQ} style={{color:`${faq.color}`,textDecoration:`${faq.line}`}}>FAQ</span></Link>
                                <Link to="/loggedhome/subscription"><span  onClick={changesubscription}style={{color:`${subscription.color}`,textDecoration:`${subscription.line}`}}>Subscription</span></Link>
                                <Link> <span onClick={changesetting}>Setting</span> </Link>

                                <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer"/>
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
                                </label>
                              
                            </ul>
                        </nav>
                        <div className="justify-end pr-16 sm:flex lg:pr-0">
                        <Link to='/loggedhome/Checkout'><i class="fa-solid fa-cart-shopping" style={{color:'green',fontSize:'25px'}}></i></Link>
                            <Link to='/'>
                                <span className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90" style={{ position: 'relative', right: "-20px" }} onClick={logout}>
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

const ListItem = ({ children, to, activeTab, handleTabClick }) => {

    return (
        <li>
            <NavLink
                exact
                to={to}
                className={`flex py-2 text-base font-medium   lg:ml-10 lg:inline-flex`}
                
            >
                {children}
            </NavLink>
        </li>
    );
};

export default Navbar;
