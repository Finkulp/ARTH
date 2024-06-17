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
        <header  style={{ color: "black",width:'200px' }}>
            <div>
                <div className="relative  items-center justify-between">
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
                    <div className=" w-full">
                            <div className="block " style={{gap:"30px",fontSize:"15px",fontWeight:"600",fontFamily:"poppins",paddingLeft:'20px'}}>
                            <div onClick={changeDasboard} style={{color:`${dashboard.color}`,textDecoration:`${dashboard.line}`,paddingBottom:'20px'}}> <Link to='/loggedhome/Dashboard'>Dashboard</Link></div>
                            <div onClick={changeMarketPlace} style={{color:`${marketpalce.color}`,textDecoration:`${marketpalce.line}`,paddingBottom:'20px'}}><Link  to='/loggedhome/MarketPlace'>Explore Strategies</Link></div>
                            <div onClick={changeMarketPlace} style={{paddingBottom:'20px'}}><Link  to='/loggedhome/MarketPlace'>Create Strategies</Link></div>
                            <div onClick={changeBroker} style={{color:`${broker.color}`,textDecoration:`${broker.line}`,paddingBottom:'20px'}}>   <Link to='/loggedhome/Add-Broker'>Add Broker</Link></div>
                            <div onClick={changecourses} style={{color:`${courses.color}`,textDecoration:`${courses.line}`,paddingBottom:'20px'}}>   <Link to='/loggedhome/courses'>Courses</Link></div>
                            <div  onClick={changesubscription}style={{color:`${subscription.color}`,textDecoration:`${subscription.line}`,paddingBottom:'20px'}}><Link to="/loggedhome/subscription">Subscription</Link></div>
                            <div style={{paddingBottom:'20px'}}><Link to='/loggedhome/Checkout'>Orders</Link></div>
                            <div onClick={changesetting}>Setting</div>
                            <div className="rounded-lg bg-primary  py-3 text-base font-medium text-white hover:bg-opacity-90"onClick={logout} style={{marginTop:'40px',width:'100px',textAlign:'center'}}><Link to='/'>Logout</Link></div>
                              
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
