import React, { useState } from 'react';
import { Algos } from '../../../Data/Agloshopping';
import { MenuItem, TextField, duration } from '@mui/material';
import {Link} from 'react-router-dom';
import '../../../CSS/Algoshopping.css';
import Chart from "react-apexcharts";
export default function Algoshopping(props) {
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
  // const [profit_vlaues, setprofit_values] = useState({
  // });
//  const  graph={
//     year: [2011, 2012, 2013, 2014, 2015, 2016],
//     profit: [500, 600, 700, 800, 900, 1000]
//   }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <div style={{position:'absolute',top:'110px',right:"50px"}}>
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
            <div style={{display:'flex',gap:'50px',flexWrap:'wrap'}}>
              <div>
            <div style={{paddingTop:'10px',position:'relative',top:'18px',fontFamily:"Lato",color:'#023e8a'}}>Strategist</div>
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
           <div><Link to='/loggedhome/MarketPlace/AlgoDescription'><button style={{padding:'10px',fontFamily:'Lato',color:'white',background:"rgb(44, 90, 163)",fontSize:'15px',fontWeight:'350',paddingLeft:'20px',paddingRight:'20px',borderRadius:'3px'}}>Buy</button></Link></div>
          </div>
           </div> 
           </div>
      ))}
      </div>
    </>
  );
}
