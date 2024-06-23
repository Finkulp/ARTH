import React, { useState, useEffect, useContext } from 'react';
import Lottie from 'lottie-react';
import { MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../CSS/Algoshopping.css';
import TradingBackground from '../../../Animations/TradingBackground.jpg'
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
    <div style={{background:'rgb(252, 252, 255)'}}>
      <div style={{height:'300px',overflow:'hidden'}}><img src={TradingBackground} style={{width:'100%'}}></img></div>
      {loading && <div style={{ display: "flex", justifyContent: 'center' ,width:"1300px",height:'500px',alignItems:'center'}}>
        <Lottie animationData={loadingAnimation} style={{ width: '300px' }}></Lottie>
      </div>}
      {!loading && (
        <div>
          <div style={{ display: 'flex', marginBottom: '50px',position:'absolute',top:"30px",left:'75%' }}>
          <TextField
            label="Search by Strategy name"
            variant="outlined"
            onChange={handleStrategistFilterChange}
            style={{ marginRight: '30px', width: '300px',borderRadius:'5px' }}
            InputProps={{ style: { height: '40px',borderRadius:'10px',background:'white' } }} // Adjust the height as needed
          />
        </div>
        <div style={{position:"absolute",top:'100px',left:"15%",width:'50%',textAlign:'left'}}>
          <div style={{fontFamily: "Lato",fontSize:'25px',paddingBottom:'30px',fontWeight:'700px',color:'white'}}>Empowering your investments with intelligent, automated precision.</div>
          <div style={{fontFamily: "Lato",fontSize:'20px',paddingBottom:'30px',fontWeight:'600px',color:'white'}}>Automated trading strategies designed to maximize your investment returns with precision and efficiency, leveraging advanced algorithms to make informed decisions in real-time.</div>
        </div>
          <div style={{textAlign:'center',fontFamily: "Lato",fontSize:'30px',paddingTop:'20px',paddingBottom:'30px',fontWeight:'900px'}}>Explore Strategies</div>
          <div style={{ display: 'flex',justifyContent:'center', gap: '10px', flexWrap: "wrap", paddingLeft: '30px', paddingBottom: '20px' }}>
            {filteredStrategies.map((algo, index) => (
              <div key={index} style={{ width: '400px', background:'white',border: "solid", height: '700px', borderWidth: '1px', borderColor: "rgb(204, 205, 207)", borderRadius: '3px', marginBottom: '10px' }} className='hover:scale-105 transition-transform duration-500 ease-in-out explorecourescard'>
                <div>
                  <img src={algo.image} style={{ width: "400px", height: '300px' }} alt="strategy" />
                </div>
                <div>
                  <div style={{ fontSize: '23px', fontFamily: "Lato", fontWeight: '400', paddingTop: '22px', height: "70px", paddingLeft: '20px', color: '' }}>
                    {algo.StrategyDescription?.Strategist}
                  </div>
                  <div style={{ display: 'flex',flexWrap: 'wrap',lineHeight:'30px' }}>
                    <div style={{ paddingLeft: '20px' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '100px', color: "#0047AB", textAlign: 'center' }}>NSE</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: "100px",  color: 'gray' ,justifyContent:'center',display:'flex'}}>
                        {algo.StrategyDescription?.NSE}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: '#0047AB' }}>Recommended Duration</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '140px', color: 'gray' }}>
                        {algo.StrategyDescription?.Recommended_Duration}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: "#0047AB" }}>Category</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: 'gray' }}>
                        {algo.StrategyDescription?.Category}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: "#0047AB" }}>Fee With subscription</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: 'gray' }}>
                        {algo.StrategyDescription?.Fee.Subscription}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: "#0047AB" }}>Fee Without subscription</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: 'gray' }}>
                        {algo.StrategyDescription?.Fee.Pay }
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: "#0047AB" }}>NSE</div>
                      <div style={{ fontSize: '15px', fontFamily: "Lato", fontWeight: '400', width: '130px', color: 'gray' }}>
                        {algo.StrategyDescription?.NSE}
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{ color: 'gray', paddingBottom: '50px', width: "100%", position: 'relative', top: '40px' }}></hr>
                <div style={{ display: 'flex', justifyContent: 'right', marginRight: '50px', paddingTop: "30px" }}>
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
      </div>
    </>
  );
}
