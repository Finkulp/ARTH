import { useTheme } from "@emotion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const[algo,setalgo]=useState({
    color:"blue",
    line:"underline"
  });
  const[Tade,settrade]=useState({
    color:"black",
    line:""
  });
  const[mstrategy,setmstrategy]=useState({
    color:"black",
    line:""
  })
  const[cstrategy,setcstrategy]=useState({
    color:"black",
    line:""
  })
  function makebluetrade(){
    settrade({
      color:"blue",
      line:"underline"
    })
    setalgo({
      color:"black",
      line:""
    })
    setmstrategy({
      color:"black",
      line:""
    })
    setcstrategy({
      color:"black",
      line:""
    })
  }
  function makebluealgo(){
    setalgo({
      color:"blue",
      line:"underline"
    })
    settrade({
      color:"black",
      line:""
    })
    setmstrategy({
      color:"black",
      line:""
    })
    setcstrategy({
      color:"black",
      line:""
    })
  }
  function makemstrategyblue(){
    setalgo({
      color:"black",
      line:""
    })
    settrade({
      color:"black",
      line:""
    })
    setmstrategy({
      color:"blue",
      line:"underline"
    })
    setcstrategy({
      color:"black",
      line:""
    })
  }
  function makecstratgeyblue(){
    setalgo({
      color:"black",
      line:""
    })
    settrade({
      color:"black",
      line:""
    })
    setmstrategy({
      color:"black",
      line:""
    })
    setcstrategy({
      color:"blue",
      line:"underline"
    })
  }
  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
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
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                 <Link to='/loggedhome/MarketPlace/' onClick={makebluealgo} > <span style={{color:`${algo.color}`,textDecoration:`${algo.line}`,fontSize:"20px",fontWeight:"500"}} >Explore Strategies</span></Link>
                 <Link to='/loggedhome/MarketPlace/Trade'><span onClick={makebluetrade} style={{color:`${Tade.color}`,textDecoration:`${Tade.line}`,paddingLeft:"100px",fontSize:"20px",fontWeight:"500"}} >Trade</span></Link>
                 <Link to='/loggedhome/MarketPlace/MyStrategy'><span onClick={makemstrategyblue} style={{color:`${mstrategy.color}`,textDecoration:`${mstrategy.line}`,paddingLeft:"100px",fontSize:"20px",fontWeight:"500"}} >My Strategies</span></Link> 
                  <span onClick={makecstratgeyblue} style={{color:`${cstrategy.color}`,textDecoration:`${cstrategy.line}`,paddingLeft:"100px",fontSize:"20px",fontWeight:"500"}} >Create Strategies</span>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

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
