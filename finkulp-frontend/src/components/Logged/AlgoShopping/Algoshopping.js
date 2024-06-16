import React, { useState, useEffect, useContext } from 'react';
import Lottie from 'lottie-react';
import { MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../CSS/Algoshopping.css';
import loadingAnimation from '../../../Animations/loadingAnimation.json';

export default function Algoshopping(props) {
  const [loading, setLoading] = useState(false);
  const [strategies, setStrategies] = useState([]);
  const [strategistFilter, setStrategistFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleStrategistFilterChange = (event) => {
    setStrategistFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

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

  useEffect(() => {
    async function getDetails() {
      setLoading(true);
      const url = "http://localhost:5000/notes/getAllStrategyInfo";
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
        setStrategies(parsedStrategies);
      } catch (err) {
        console.error('Error fetching user details:', err);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, []);

  const filteredStrategies = strategies.filter(strategy =>
    strategy.StrategyDescription?.Strategist?.toLowerCase().includes(strategistFilter.toLowerCase()) &&
    (categoryFilter === '' || strategy.StrategyDescription?.Category?.toLowerCase() === categoryFilter.toLowerCase())
  );
  function description(algo){
    props.setViewAlgo(algo.StrategyDescription);
    props.setimage(algo.image);
  }
  return (
    <>
      {loading && <div style={{ display: "flex", justifyContent: 'center' }}>
        <Lottie animationData={loadingAnimation} style={{ width: '300px' }}></Lottie>
      </div>}
      {!loading && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'right', position: 'relative', top: '-50px' }}>
            <TextField
              label="Search by Strategist"
              variant="outlined"
              onChange={handleStrategistFilterChange}
              style={{ marginRight: "30px", width: "300px", height: '10px' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '15px', flexWrap: "wrap", paddingLeft: '30px', paddingRight: '20px', paddingBottom: '25px' }}>
            {filteredStrategies.map((algo, index) => (
              <div key={index} style={{ width: '350px', border: "solid", height: '575px', borderWidth: '1px', borderColor: "rgb(204, 205, 207)", borderRadius: '3px', marginBottom: '10px' }} className='hover:scale-105 transition-transform duration-500 ease-in-out explorecourescard'>
                <div>
                  <img src={algo.image} style={{ width: "400px", height: '300px' }} alt="strategy" />
                </div>
                <div>
                  <div style={{ fontSize: '23px', fontFamily: "Lato", fontWeight: '400', paddingTop: '22px', height: "70px", paddingLeft: '20px', color: '' }}>
                    {algo.StrategyDescription?.Strategist}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ paddingLeft: '20px' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '100px', color: "#0047AB", textAlign: 'center' }}>NSE</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: "130px", paddingLeft: '20px', color: 'gray' }}>
                        {algo.StrategyDescription?.NSE}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '180px', color: '#0047AB' }}>Recommended Duration</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '160px', color: 'gray' }}>
                        {algo.StrategyDescription?.Recommended_Duration}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '150px', color: "#0047AB" }}>Category</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '150px', color: 'gray' }}>
                        {algo.StrategyDescription?.Category}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '150px', color: "#0047AB" }}>Price</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '150px', color: 'gray' }}>
                        {algo.StrategyDescription?.price}
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{ color: 'gray', paddingBottom: '20px', width: "100%", position: 'relative', top: '20px' }}></hr>
                <div style={{ display: 'flex', justifyContent: 'right', marginRight: '20px', paddingTop: "13px" }}>
                  <div>
                    <Link to='/loggedhome/MarketPlace/AlgoDescription'>
                      <button style={{ padding: '10px', fontFamily: 'Lato', color: 'white', background: "rgb(44, 90, 163)", fontSize: '15px', fontWeight: '350', paddingLeft: '20px', paddingRight: '20px', borderRadius: '3px', marginRight: '30px' }} onClick={() =>description(algo)}>
                        Details
                      </button>
                    </Link>
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
