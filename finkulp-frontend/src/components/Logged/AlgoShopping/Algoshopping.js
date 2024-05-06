import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Algos } from '../../../Data/Agloshopping';
import { MenuItem, TextField, duration } from '@mui/material';
import {Link} from 'react-router-dom';
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

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
            label="Search by Strategist"
            variant="outlined"
            onChange={handleStrategistFilterChange}
            style={{marginRight:"30px",width:"400px"}}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper} style={{ maxWidth: '90%', marginBottom: '',paddingBottom:"20px" }}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Strategy Name</TableCell>
                <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Recommended Duration</TableCell>
                <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>NSE</TableCell>
                <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Category</TableCell>
                <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Fee(Subscription)</TableCell>
                <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Fee(Without Subscription)</TableCell>
                <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAlgos.map((algo, index) => (
                <TableRow key={index} className='hover:bg-blue' style={{ fontSize: '15px',marginTop:"20px", height: '100px',borderRadius:"20px", backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F3F6FF' }}>
                  <TableCell style={{ padding: '8px' }}>{algo.Strategist}</TableCell>
                  <TableCell align="center" style={{ padding: '8px' }}>{algo.Recommended_Duration}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.NSE}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.Category}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.Fee.Subscription}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>{algo.Fee.Pay_as_you_go}</TableCell>
                  <TableCell align="right" style={{ padding: '8px' }}>
                  <Link to='/loggedhome/MarketPlace/AlgoDescription'><button className='bg-blue dark:bg-dark-2  dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-4 text-center text-sm font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' style={{borderRadius:"10px"}} onClick={()=>{props.setViewAlgo(algo)}}>
                      Know More
                    </button></Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
