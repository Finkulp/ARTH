import React, { useState ,useEffect} from 'react';
import { Algos } from '../../../Data/Agloshopping';
import Lottie from 'lottie-react';
import { MenuItem, TextField, duration } from '@mui/material';
import {Link} from 'react-router-dom';
import '../../../CSS/Algoshopping.css';
import Chart from "react-apexcharts";
import { useContext } from 'react';
import DetailContext from '../../../Context/Details/DetailsContext';
import loadingAnimation from '../../../Animations/loadingAnimation.json'
export default function Algoshopping(props) {
  const [loading, setLoading] = useState(false);
  // const [Algos, setAlgos] = useState([]);
  // const [strategies, setStrategies] = useState([]);
  const { id } = useContext(DetailContext);
  const [strategistFilter, setStrategistFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [Duration,setduration]=useState("");

  const handleStrategistFilterChange = (event) => {
    setStrategistFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };
  const handleDurationFilterChange=(event)=>{
    setduration(event.target.value);
  }
function getTokenFromCookie() {
  const cookies = document.cookie.split(';');
  let authToken = null;
  cookies.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name === 'authToken') {
          authToken = value;
      }
  });
  return authToken;
}

// useEffect(() => {
//   function getTokenFromCookie() {
//     const cookies = document.cookie.split(';');
//     let authToken = null;
//     cookies.forEach(cookie => {
//       const [name, value] = cookie.trim().split('=');
//       if (name === 'authToken') {
//         authToken = value;
//       }
//     });
//     return authToken;
//   }

//   async function getDetails() {
//     setLoading(true);
//     const url = "http://localhost:5000/notes/getAllStrategyInfo";
//     const authToken = getTokenFromCookie();
//     try {
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "authorization": `${authToken}`
//         }
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setAlgos(data);
      
//       const parsedStrategies = data.map(item => {
//         if (typeof item.StrategyDescription === 'string') {
//           try {
//             return { ...item, StrategyDescription: JSON.parse(item.StrategyDescription) };
//           } catch (e) {
//             console.error('Error parsing StrategyDescription:', e);
//             return item;
//           }
//         }
//         return item;
//       });
//       console.log(parsedStrategies);
//       setStrategies(parsedStrategies);
//     } catch (err) {
//       console.error('Error fetching user details:', err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   getDetails();
// }, []);

const filteredStrategies = Algos.filter((strategy) =>
  strategy.Strategist.toLowerCase().includes(strategistFilter.toLowerCase()) &&
  (categoryFilter === '' || strategy.Category.toLowerCase() === categoryFilter.toLowerCase())
);

async function buyStrategy(algo) {
  try {
    const authToken=getTokenFromCookie();
    const response = await fetch("http://localhost:5000/notes/addStrategy", {
      method: "POST",
      body: JSON.stringify({
        strategy_name:algo.Strategist,
        user_id: id,
      }),
      headers: {
        "authorization":`${authToken}`,
        "Content-type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data1 = await response.json();
  } catch (err) {
    console.error('Error fetching user details:', err);
  }
  try {
    const authToken=getTokenFromCookie();
    const response = await fetch("http://localhost:5000/notes//addStrategytouser", {
      method: "POST",
      body: JSON.stringify({
        addedStrategy:{
          ...algo,
          status: 'started', // Add your specific value here
          amount_Invested: '10000'  // Add your specific value here
        }
      }),
      headers: {
        "authorization":`${authToken}`,
        "Content-type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data1 = await response.json();
    console.log(data1);
  } catch (err) {
    console.error('Error fetching user details:', err);
  }
}

  return (
    <>

      {loading && <div style={{display:"flex",justifyContent:'center'}}><Lottie animationData={loadingAnimation} style={{width:'300px'}}></Lottie></div>}
      {!loading && (
        <div >
          <div style={{display:'flex',justifyContent:'right',position:'relative',top:'-50px' }}>
          {/* <TextField
              select
              label="Filter by Category"
              value={categoryFilter}
              onChange={handleCategoryFilterChange}
              variant="outlined"
              style={{ marginRight: '20px', width: "200px" }}
              InputProps={{
                style: { height: '40px' },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="Premium">Premium</MenuItem>
              <MenuItem value="HNI">HNI</MenuItem>
            </TextField> */}

            {/* <TextField
              label="Search by Strategist"
              variant="outlined"
              onChange={handleStrategistFilterChange}
              style={{ marginRight: "30px", width: "100px",height:'10px' }}
            /> */}
            <div className="relative" style={{width:'500px'}}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search in online library..."
            onChange={handleStrategistFilterChange}
            required
            style={{height:'40px',width:'400px'}}
          />
        </div>
          </div>
          <div style={{ display: 'flex', gap: '15px', flexWrap: "wrap", paddingLeft: '30px', paddingRight: '20px', paddingBottom: '25px' }}>
            {filteredStrategies.map((algo, index) => (
              <div style={{width:'350px',border:"solid",height:'575px',borderWidth:'1px',borderColor:"rgb(204, 205, 207)",borderRadius:'3px',marginBottom:'10px'}}className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'>
              <div ><img src={algo.image}style={{width:"400px",height:'300px'}}/></div>
              <div>
              <div style={{fontSize:'23px',fontFamily:"Lato",fontWeight:'400',paddingTop:'22px',height:"70px",paddingLeft:'20px',color:''}}>{algo.Strategist}</div>
              <div style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
                <div style={{paddingLeft:'20px'}}> 
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:'100px',color:"#0047AB",textAlign:'center'}}>NSE</div>
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:"130px",paddingLeft:'20px',color:'gray'}}>{algo.NSE}</div>
              </div>
              <div style={{textAlign:'center'}}>
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:'180px',color:'#0047AB'}}>Recommended Duration</div>
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:'160px',color:'gray'}}>{algo.Recommended_Duration}</div>
              </div>
              <div style={{textAlign:'center'}}>
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:'150px',color:"#0047AB"}}>Category</div>
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:'150px',color:'gray'}}>{algo.Category}</div>
              </div>
              <div style={{textAlign:'center'}}>
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:'150px',color:"#0047AB"}}>Price</div>
              <div style={{fontSize:'15px',fontFamily:"Lato",fontWeight:'400',width:'150px',color:'gray'}}>{algo.price}</div>
              </div>
                </div>
              </div>
              <hr style={{color:'gray',paddingBottom:'20px',width:"100%",position:'relative',top:'20px'}}></hr>
              <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px"}}>
              <div><Link to='/loggedhome/MarketPlace/AlgoDescription'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px',marginRight:'30px'}} onClick={props.setViewAlgo(algo)}>View Algo</button></Link></div>
              <div><Link><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Buy Algo</button></Link></div>
              </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </>
  );
}
{/* <TextField
            select
            label="Filter by Category"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            variant="outlined"
            style={{ marginRight: '20px',width:"200px" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Retail">Retail</MenuItem>
            <MenuItem value="Premium">Premium</MenuItem>
            <MenuItem value="HNI">HNI</MenuItem>
          </TextField>
          <TextField
            select
            label="Filter by Category"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            variant="outlined"
            style={{ marginRight: '20px',width:"200px" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Retail">Retail</MenuItem>
            <MenuItem value="Premium">Premium</MenuItem>
            <MenuItem value="HNI">HNI</MenuItem>
          </TextField>
          <TextField
            select
            label="Filter by Category"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            variant="outlined"
            style={{ marginRight: '20px',width:"200px" }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Retail">Retail</MenuItem>
            <MenuItem value="Premium">Premium</MenuItem>
            <MenuItem value="HNI">HNI</MenuItem>
          </TextField> */}