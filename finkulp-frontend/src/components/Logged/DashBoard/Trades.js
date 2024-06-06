import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TradeData } from '../../../Data/Trades';
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
    <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{color:'blue',fontFamily:'poppins'}}>Trade History</div>
    </div>
      <div style={{ display: 'flex', justifyContent: 'center',marginBottom:'20px',}}>
        <TableContainer component={Paper} style={{ maxWidth: '100%', marginBottom: '' }}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
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
              {filteredAlgos.slice(0, 5).map((algo, index) => (
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
      <div style={{display:'flex',justifyContent:'center'}}>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View All</button>
        </div>
    </>
  );
}
