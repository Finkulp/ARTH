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
              <nav>
               <ul className="block lg:flex" style={{position:'relative',left:'325px',top:'100px',background:'white',paddingLeft:'100px',paddingRight:'500px',marginLeft:'400px',width:'657px',padding:'10px'}}>
                 <Link to='/loggedhome/courses/' onClick={makebluealgo} > <span style={{color:`${algo.color}`,textDecoration:`${algo.line}`,fontSize:"15px",fontWeight:"500"}} >Explore Courses</span></Link>
                 <Link to='/loggedhome/courses/my-courses'><span onClick={makebluetrade} style={{color:`${Tade.color}`,textDecoration:`${Tade.line}`,paddingLeft:"50px",fontSize:"15px",fontWeight:"500"}} >My Courses</span></Link>
                </ul>
              </nav>
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
