import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TradeData } from '../../../../Data/Trades';
import { MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Trades(props) {
  const [strategistFilter, setStrategistFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [tradeTypeFilter, setTradeTypeFilter] = useState('');

  const handleStrategistFilterChange = (event) => {
    setStrategistFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleTradeTypeFilterChange = (event) => {
    setTradeTypeFilter(event.target.value);
  };

  const filteredAlgos = TradeData.filter((algo) =>
    algo.Strategist.toLowerCase().includes(strategistFilter.toLowerCase()) &&
    (categoryFilter === '' || algo.Category.toLowerCase() === categoryFilter.toLowerCase()) &&
    (tradeTypeFilter === '' || algo.tradeType.toLowerCase() === tradeTypeFilter.toLowerCase())
  );

  return (
    <>
    <div style={{width:'100%',paddingBottom:'20px',boxShadow:'1px 1px 10px black',marginRight:'20px',paddingTop:'20px',height:'700px',overflowY:'auto'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '25px',fontFamily:'poppins', fontWeight: '400', color: 'green', textAlign: 'center', width: '100%' }}>Trade History</div>
        <div style={{ display: 'flex', alignItems: 'center' ,height:"30px",border:'10px'}}>
          <TextField 
            label="Search by Strategist"
            variant="outlined"
            onChange={handleStrategistFilterChange}
            InputProps={{
              style: { height: '40px' ,borderRadius:'10px' }
            }}
            style={{ marginRight: '30px', width: '200px',height:'40px',borderRadius:'10px'}}
          />
          
          <TextField
            select
            label="Filter by Trade Type"
            value={tradeTypeFilter}
            onChange={handleTradeTypeFilterChange}
            variant="outlined"
            InputProps={{
              style: { height: '40px' ,borderRadius:'10px' }
            }}
            style={{ marginRight: '20px', width: '200px'}}
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
              {filteredAlgos.map((algo, index) => (
                <TableRow key={index} style={{ fontSize: '12px', height: '40px', backgroundColor: (algo.tradeType==='Buy')? '#e6ffff' : '#ccffe6' }}>
                  <TableCell style={{ padding: '8px' }}>{algo.Strategist}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.tradeType}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.entryPrice}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.exitPrice}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.dateTime}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.capitalInvested}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.profitLoss}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
    </>
  );
}
