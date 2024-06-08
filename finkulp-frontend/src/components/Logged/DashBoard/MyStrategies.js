import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Algos } from '../../../Data/MyStrategy';
import { MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MyStrategy(props) {
  const [strategistFilter, setStrategistFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [Duration, setDuration] = useState('');
  const [instrumentFilter, setInstrumentFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const filteredAlgos = Algos.filter((algo) =>
    algo.Strategist.toLowerCase().includes(strategistFilter.toLowerCase()) &&
    (categoryFilter === '' || algo.Category.toLowerCase() === categoryFilter.toLowerCase()) &&
    (Duration === '' || algo.duration.toLowerCase() === Duration.toLowerCase()) &&
    (instrumentFilter === '' || algo.instrument.toLowerCase() === instrumentFilter.toLowerCase()) &&
    (statusFilter === '' || algo.status.toLowerCase() === statusFilter.toLowerCase())
  );

  return (
    <>
    <div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
      <div style={{color:'green',fontfamily:"poppins"}}>My Strategies</div>
    </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TableContainer component={Paper} style={{ maxWidth: '100%', marginBottom: '' }}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: '600', fontSize: '14px'}}>Strategy Name</TableCell>
                <TableCell align="center" style={{ fontWeight: '600', fontSize: '14px', }}>Status</TableCell>
                <TableCell align="right" style={{ fontWeight: '600', fontSize: '14px', padding: '8px' }}>Amount Invested</TableCell>
                <TableCell align="center" style={{ fontWeight: '600', fontSize: '14px', }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {props.userDetails.addedStrategies&& props.userDetails.addedStrategies.slice(0, 3).map((algo, index) => (

              <TableRow key={index} style={{ fontSize: '12px', height: '40px', backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F3F6FF' }}>
                <TableCell >{algo.Strategist}</TableCell>
                <TableCell align="center">{algo.status}</TableCell>
                <TableCell align="center">{algo.amount_Invested}</TableCell>
                <TableCell align="center" >
                  {(algo.status === 'stopped') && (
                    <>
                      <Link >
                        <button className='bg-blue dark:bg-dark-2 dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-4 text-center text-sm font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' style={{ borderRadius: '10px' }} onClick={() => { props.setViewMyAlog(algo) }}>
                          Start
                        </button>
                      </Link>
                    </>
                  )}
                  {(algo.status === 'started') && (
                    <>
                      <Link  >
                        <button className='bg-red dark:bg-dark-2 dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-2 px-4 text-center text-sm font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5' style={{ borderRadius: '10px' }} onClick={() => { props.setViewMyAlog(algo) }}>
                          Stop
                        </button>
                      </Link>
                    </>
                  )}
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          </Table>
        </TableContainer>
      </div>
      <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View All</button>
        </div>
        </div>
    </>
  );
}
