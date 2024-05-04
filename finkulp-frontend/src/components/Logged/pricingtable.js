import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';

export default function PricingTable() {
  return (
    <>

    <div style={{fontSize:'30px',fontWeight:"700",color:"blue",textAlign:'center'}}>Comparsion Table</div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableContainer component={Paper} style={{ maxWidth: '90%', marginBottom: '' }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: '600' }}>Name</TableCell>
              <TableCell align="right" style={{ fontWeight: '600' }}>Biggner</TableCell>
              <TableCell align="right" style={{ fontWeight: '600' }}>Intermediate</TableCell>
              <TableCell align="right" style={{ fontWeight: '600' }}>Expert</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Access to Free courses</TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Access to Free courses</TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Access to Free courses</TableCell>
              <TableCell align="right"><i className="fa-solid fa-x" style={{ color: 'red' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-x" style={{ color: 'red' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Access to Free courses</TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
              <TableCell align="right"><i className="fa-solid fa-check" style={{ color: 'blue' }}></i></TableCell>
            </TableRow>
            {/* Additional rows go here */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
</>
  );
}
