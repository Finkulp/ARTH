import React, { useState } from 'react';
import { Algos } from '../../../Data/Agloshopping';
import { MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../CSS/Algoshopping.css';

export default function UpdatingAlgo(props) {
  const [strategistFilter, setStrategistFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [strategies, setStrategies] = useState(Algos);

  const handleStrategistFilterChange = (event) => {
    setStrategistFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredStrategies = strategies.filter((strategy) =>
    strategy.Strategist.toLowerCase().includes(strategistFilter.toLowerCase()) &&
    (categoryFilter === '' || strategy.Category.toLowerCase() === categoryFilter.toLowerCase())
  );

  const deleteElement = (index) => {
    const updatedStrategies = strategies.filter((_, i) => i !== index); // Use filter to remove the item
    setStrategies(updatedStrategies);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
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
      {filteredStrategies.map((algo,index)=>(
          <div style={{ display: 'flex', justifyContent: 'center',fontFamily:"poppins" }}>
          <div className='Algoshoppingmain'  style={{  borderWidth: '1px', borderColor: 'blue', padding: '10px',height:"150px",marginTop:'8px',borderRadius:"10px" }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '125px', height: '125px', boxShadow:"1px 1px 5px green",borderRadius:'5px' }}></div>
            <div>
              <p style={{ fontSize: '16px', fontWeight: 400, color: 'gray', paddingLeft: '50px', fontFamily:"poppins"  }}>Created:9 months ago | live deployment : 146</p>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'black', paddingLeft: '50px', fontFamily:"poppins"  }}>{algo.Strategist}</div>
              <div style={{ paddingLeft: '50px', fontSize: '16px', fontFamily:"poppins"  }}>by:<span style={{ color: 'blue', paddingLeft: '20px', fontSize: '18px' }}>Market Start</span> </div>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', paddingLeft: '50px' }}>
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
                    <div className='hover-blue' style={{ color: 'blue',  borderRadius: '50px', textAlign: 'center', width: '80px', height: '30px' }}>NFO</div>
                    <div className='hover-blue' style={{ color: 'blue',  borderRadius: '50px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px', height: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>NonDirectional</div>
                    <div className='hover-blue' style={{ color: 'blue', borderRadius: '50px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px', height: '30px' }}>Volatility</div>
                    <div  className='Algoshopping-share-button'><i class="fa-solid fa-share"></i></div>
                    <div className='Algoshopping-share-button'><i class="fa-solid fa-star"></i></div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '-50px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Total/Costs</div>
                    <div style={{ fontSize: '18px' }}>146(2.9k)</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Drawdown Min</div>
                    <div style={{ fontSize: '18px' }}>11.1K(6%)</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Drawdown Min</div>
                    <div style={{ fontSize: '18px' }}>11.1K(6%)</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 900, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Drawdown Min</div>
                    <div style={{ fontSize: '18px' }}>11.1K(6%)</div>
                  </div>
                </div>
                <div style={{ marginTop: '-60px', paddingLeft: '20px' }}>
                  <Link ><div><button className='hover-green' style={{ fontSize: '16px', fontWeight: 700, color: 'red', border: 'none', textDecoration: 'none', padding: '10px', borderRadius: '10px',background:'#ffe6e6' }} onClick={()=>{deleteElement(index)}}>Delete Algo</button></div></Link>
                  <Link to='/adminhome/UpdateAlgo' ><div><button onClick={()=>{props.seteditAlgo(algo)}} className='hover-blue' style={{ fontSize: '16px', fontWeight: 700, color: 'blue',border: 'none', textDecoration: 'none', padding: '10px', borderRadius: '10px', marginTop: '20px' }}>Update Details</button></div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
      ))}
      
    </>
  );
}