import React, { useState, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem, TextField } from '@mui/material';
import loadingAnimation from '../../../../Animations/loadingAnimation.json';
import Lottie from 'lottie-react';
import DetailContext from '../../../../Context/Details/DetailsContext';
import { useEffect } from 'react';
export default function Trades(props) {
  const { getDetails, userDetails } = useContext(DetailContext);
  const [strategistFilter, setStrategistFilter] = useState('');
  const [mystrategyloading, setmystrategyloading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [tradeTypeFilter, setTradeTypeFilter] = useState('');
  useEffect(() => {
    console.log('Component mounted');
    async function callstrategy() {
      setmystrategyloading(true);
      await getDetails();
      setmystrategyloading(false);
    }
    callstrategy();
  }, []);
  const handleStrategistFilterChange = (event) => {
    setStrategistFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleTradeTypeFilterChange = (event) => {
    setTradeTypeFilter(event.target.value);
  };

  const filteredAlgos =(userDetails.trades) 
    ? userDetails.trades.filter((algo) =>
        (algo.Strategist || "").toLowerCase().includes(strategistFilter.toLowerCase()) &&
        (categoryFilter === '' || (algo.Category || "").toLowerCase() === categoryFilter.toLowerCase()) &&
        (tradeTypeFilter === '' || (algo.tradeType || "").toLowerCase() === tradeTypeFilter.toLowerCase())
      ) 
    : [];
    console.log(userDetails.trades)
      console.log(filteredAlgos)
  return (
    <>
    {mystrategyloading && (
        <div style={{ display: "flex", justifyContent: 'center', width: "1300px", height: '500px', alignItems: 'center' }}>
          <Lottie animationData={loadingAnimation} style={{ width: '300px' }}></Lottie>
        </div>
      )}
      {!mystrategyloading&&(
          <div style={{ width: '100%', paddingBottom: '20px', marginRight: '20px', paddingTop: '20px', height: '100vh',marginLeft:'15px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '23px',  color: 'green', textAlign: 'center', width: '100%' }}>Trade History</div>
              <div style={{ display: 'flex', alignItems: 'center', height: "30px", border: '10px' }}>
                <TextField
                  label="Search by Strategist"
                  variant="outlined"
                  onChange={handleStrategistFilterChange}
                  InputProps={{
                    style: { height: '40px', borderRadius: '10px' }
                  }}
                  style={{ marginRight: '30px', width: '200px', height: '40px', borderRadius: '10px' }}
                />
                <TextField
                  select
                  label="Filter by Trade Type"
                  value={tradeTypeFilter}
                  onChange={handleTradeTypeFilterChange}
                  variant="outlined"
                  InputProps={{
                    style: { height: '40px', borderRadius: '10px' }
                  }}
                  style={{ marginRight: '20px', width: '200px' }}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Buy">Buy</MenuItem>
                  <MenuItem value="Sell">Sell</MenuItem>
                </TextField>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <TableContainer component={Paper} style={{ maxWidth: '97%', marginBottom: '' }}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Strategy Name</TableCell>
                      <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Trade Type</TableCell>
                      <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Entry Price</TableCell>
                      <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Exit Price</TableCell>
                      <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Date & Time</TableCell>
                      <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Capital Invested</TableCell>
                      <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Profit/Loss</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredAlgos.length !== 0 ? (
                      filteredAlgos.map((algo, index) => (
                        <TableRow key={index} style={{ fontSize: '12px', height: '40px', backgroundColor: (algo.tradeType === 'Buy') ? '#e6ffff' : '#ccffe6' }}>
                          <TableCell style={{ padding: '8px' }}>{algo.strategyName}</TableCell>
                          <TableCell align="right" style={{ padding: '8px' }}>{algo.tradeType}</TableCell>
                          <TableCell align="right" style={{ padding: '8px' }}>{algo.entryPrice}</TableCell>
                          <TableCell align="right" style={{ padding: '8px' }}>{algo.exitPrice}</TableCell>
                          <TableCell align="right" style={{ padding: '8px' }}>{algo.dateTime}</TableCell>
                          <TableCell align="right" style={{ padding: '8px' }}>{algo.capitalInvested}</TableCell>
                          <TableCell align="right" style={{ padding: '8px' }}>{algo.profitLoss}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7} style={{ textAlign: 'center' }}>No Trades to show</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          
      )}
    </>
  );
}
