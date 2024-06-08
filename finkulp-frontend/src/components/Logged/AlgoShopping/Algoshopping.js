import React, { useState } from 'react';
import { Algos } from '../../../Data/Agloshopping';
import { MenuItem, TextField, duration } from '@mui/material';
import {Link} from 'react-router-dom';
import '../../../CSS/Algoshopping.css';
import Chart from "react-apexcharts";
import { useContext } from 'react';
import DetailContext from '../../../Context/Details/DetailsContext';
export default function Algoshopping(props) {
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
  const filteredAlgos = Algos.filter((algo) =>
    algo.Strategist.toLowerCase().includes(strategistFilter.toLowerCase()) &&
    (categoryFilter === '' || algo.Category.toLowerCase() === categoryFilter.toLowerCase())
  );
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
    console.log(data1);
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <div style={{position:'absolute',top:'110px',right:"50px"}}>
          <TextField
            label="Search by Strategist"
            variant="outlined"
            onChange={handleStrategistFilterChange}
            style={{marginRight:"30px",width:"200px",height:'20px'}}
          />
        </div>
      </div>
      <div style={{display:'flex',gap:'30px',flexWrap:"wrap",paddingLeft:'30px',paddingRight:'20px',paddingBottom:'20px'}}>
      {filteredAlgos.map((algo,index)=>(
           <div className='hover:scale-105  transition-transform duration-500 ease-in-out explorecourescard'style={{boxShadow:'1px 1px 10px black'}}>
           <div style={{width:'340px',border:"solid",height:'450px',borderWidth:'1px',borderColor:"rgb(204, 205, 207",borderRadius:'3px'}}>
           <div style={{paddingTop:'10px'}}>
           {algo.graph && algo.graph.year && algo.graph.profit&&<Chart
              type="area"
              height={150}
              width="340"
              options={{
                chart: {
                  id: "basic-bar1"
                },
                xaxis: {
                  categories: algo.graph.year
                }
              }}
              series={[
                {
                  name: "Profit",
                  data:algo.graph.profit
                }
              ]}
              
            />}
           </div>
            <div style={{display:'flex',justifyContent:'center',paddingLeft:'20px'}}>
            <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
              <div>
            <div style={{paddingTop:'10px',position:'relative',top:'18px',fontFamily:"Lato",color:'#023e8a'}}>Name</div>
           <div style={{fontSize:'20px',fontFamily:"Lato",fontWeight:'400',paddingTop:'22px',color:"#0a9396"}}>{algo. Strategist}</div>
           </div>
           <div>
           <div style={{paddingTop:'10px',position:'relative',top:'18px',fontFamily:"Lato",color:'#023e8a'}}>NSE</div>
           <div style={{paddingTop:'10px',position:'relative',top:'18px',fontFamily:"Lato",color:"#0a9396"}}>{algo.NSE}</div>
           </div>
           <div>
           <div style={{paddingTop:'10px',paddingBottom:'20px',fontFamily:"Lato",color:'#023e8a',position:'relative',top:'20px'}}>Category</div>
           <div style={{paddingTop:'10px',paddingBottom:'20px',fontFamily:"Lato",color:"#0a9396"}}>{algo.Category}</div>
           </div>
           <div style={{position:'relative',top:'-60px'}}>
           <div style={{paddingTop:'10px',paddingBottom:'20px',fontFamily:"Lato",color:'#023e8a'}}>Recommended Duration</div>
           <div style={{paddingTop:'10px',paddingBottom:'20px',fontFamily:"Lato",color:"#0a9396",position:'relative',top:'-20px'}}>{algo.Recommended_Duration}</div>
           </div>
           <div style={{position:'relative',top:'-60px'}}>
           <div style={{paddingTop:'10px',paddingBottom:'20px',fontFamily:"Lato",color:'#023e8a'}}>Price</div>
           <div style={{paddingTop:'10px',paddingBottom:'20px',fontFamily:"Lato",color:"#0a9396",position:'relative',top:'-20px'}}>{algo.price}</div>
           </div>
           </div>
           </div>
           <hr style={{color:'gray',paddingBottom:'20px',width:"100%",marginTop:'-80px'}}></hr>
           <div style={{display:'flex',justifyContent:'right',marginRight:'20px',paddingTop:"13px",gap:'50px'}}>
           <div><Link to='/loggedhome/MarketPlace/AlgoDescription'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}onClick={()=>{props.setViewAlgo(algo)}}>Open</button></Link></div>
           <div>
          <button
            style={{
              padding: '10px',
              fontFamily: 'Lato',
              color: 'white',
              background: "rgb(44, 90, 163)",
              fontSize: '15px',
              fontWeight: '350',
              paddingLeft: '20px',
              paddingRight: '20px',
              borderRadius: '3px'
            }}
            onClick={() => buyStrategy(algo)}
          >
            Buy
          </button>
        </div>
          </div>
           </div> 
           </div>
      ))}
      </div>
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