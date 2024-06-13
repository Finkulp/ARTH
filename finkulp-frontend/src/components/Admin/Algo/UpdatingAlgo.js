import React, { useState, useEffect } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../CSS/Algoshopping.css';
import Chart from "react-apexcharts";
import loadingAnimation from '../../../Animations/loadingAnimation.json'
import Lottie from 'lottie-react';
export default function UpdatingAlgo(props) {
  const [loading, setLoading] = useState(false);
  const [Algos, setAlgos] = useState([]);
  const [strategistFilter, setStrategistFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [strategies, setStrategies] = useState([]);

  const handleStrategistFilterChange = (event) => {
    setStrategistFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  useEffect(() => {
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

    async function getDetails() {
      setLoading(true);
      const url = "http://localhost:5000/admin/getAllStrategyInfo";
      const authToken = getTokenFromCookie();
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": `${authToken}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAlgos(data);
        
        const parsedStrategies = data.map(item => {
          if (typeof item.StrategyDescription === 'string') {
            try {
              return { ...item, StrategyDescription: JSON.parse(item.StrategyDescription) };
            } catch (e) {
              console.error('Error parsing StrategyDescription:', e);
              return item;
            }
          }
          return item;
        });
        console.log(parsedStrategies);
        setStrategies(parsedStrategies);
      } catch (err) {
        console.error('Error fetching user details:', err);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, []);

  const filteredStrategies = strategies.filter((strategy) =>
    strategy.StrategyDescription.Strategist.toLowerCase().includes(strategistFilter.toLowerCase()) &&
    (categoryFilter === '' || strategy.StrategyDescription.Category.toLowerCase() === categoryFilter.toLowerCase())
  );


  return (
    <>
      {loading && <div style={{display:"flex",justifyContent:'center'}}><Lottie animationData={loadingAnimation} style={{width:'300px'}}></Lottie></div>}
      {!loading && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <TextField
              select
              label="Filter by Category"
              value={categoryFilter}
              onChange={handleCategoryFilterChange}
              variant="outlined"
              style={{ marginRight: '20px', width: "200px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="Premium">Premium</MenuItem>
              <MenuItem value="HNI">HNI</MenuItem>
            </TextField>

            <TextField
              label="Search by Strategist"
              variant="outlined"
              onChange={handleStrategistFilterChange}
              style={{ marginRight: "30px", width: "400px" }}
            />
          </div>
          <div style={{ display: 'flex', gap: '30px', flexWrap: "wrap", paddingLeft: '30px', paddingRight: '20px', paddingBottom: '20px' }}>
            {filteredStrategies.map((algo, index) => (
              <div className='hover:scale-105 transition-transform duration-500 ease-in-out explorecourescard' style={{ boxShadow: '1px 1px 10px black' }} key={index}>
                <div style={{ width: '340px', border: "solid", height: '450px', borderWidth: '1px', borderColor: "rgb(204, 205, 207)", borderRadius: '3px' }}>
                  <div style={{ paddingTop: '10px' ,border:'solid',borderWidth:'1px',height:'180px'}}>
                    {algo.StrategyDescription.graph && algo.StrategyDescription.graph.year && algo.StrategyDescription.graph.profit && <Chart
                      type="area"
                      height={150}
                      width="340"
                      options={{
                        chart: {
                          id: "basic-bar1"
                        },
                        xaxis: {
                          categories: algo.StrategyDescription.graph.year
                        }
                      }}
                      series={[
                        {
                          name: "Profit",
                          data: algo.StrategyDescription.graph.profit
                        }
                      ]}
                    />}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: '20px' }}>
                    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ paddingTop: '10px', position: 'relative', top: '18px', fontFamily: "Lato", color: '#023e8a' }}>Name</div>
                        <div style={{ fontSize: '20px', fontFamily: "Lato", fontWeight: '400', paddingTop: '22px', color: "#0a9396" }}>{algo.StrategyDescription.Strategist}</div>
                      </div>
                      <div>
                        <div style={{ paddingTop: '10px', position: 'relative', top: '18px', fontFamily: "Lato", color: '#023e8a' }}>NSE</div>
                        <div style={{ paddingTop: '10px', position: 'relative', top: '18px', fontFamily: "Lato", color: "#0a9396" }}>{algo.StrategyDescription.NSE}</div>
                      </div>
                      <div>
                        <div style={{ paddingTop: '10px', paddingBottom: '20px', fontFamily: "Lato", color: '#023e8a', position: 'relative', top: '20px' }}>Category</div>
                        <div style={{ paddingTop: '10px', paddingBottom: '20px', fontFamily: "Lato", color: "#0a9396" }}>{algo.StrategyDescription.Category}</div>
                      </div>
                      <div style={{ position: 'relative', top: '-60px' }}>
                        <div style={{ paddingTop: '10px', paddingBottom: '20px', fontFamily: "Lato", color: '#023e8a' }}>Recommended Duration</div>
                        <div style={{ paddingTop: '10px', paddingBottom: '20px', fontFamily: "Lato", color: "#0a9396", position: 'relative', top: '-20px' }}>{algo.StrategyDescription.Recommended_Duration}</div>
                      </div>
                      <div style={{ position: 'relative', top: '-60px' }}>
                        <div style={{ paddingTop: '10px', paddingBottom: '20px', fontFamily: "Lato", color: '#023e8a' }}>Price</div>
                        <div style={{ paddingTop: '10px', paddingBottom: '20px', fontFamily: "Lato", color: "#0a9396", position: 'relative', top: '-20px' }}>{algo.StrategyDescription.price}</div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: 'gray', paddingBottom: '20px', width: "100%", marginTop: '-80px' }}></hr>
                  <div style={{ display: 'flex', justifyContent: 'right', marginRight: '20px', paddingTop: "13px", gap: '50px' }}>
                    <div><Link to='/loggedhome/MarketPlace/AlgoDescription'><button style={{ padding: '10px', fontFamily: 'Lato', color: 'white', background: "rgb(44, 90, 163)", fontSize: '15px', fontWeight: '350', paddingLeft: '20px', paddingRight: '20px', borderRadius: '3px' }} onClick={() => { props.setViewAlgo(algo) }}>Open</button></Link></div>
                    <div>
                      <Link to='/adminhome/UpdateAlgo'>
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
                          onClick={() => { props.seteditAlgo(algo.StrategyDescription)}}
                        >
                          Edit
                        </button></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
