import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import MyStrategiesStats from './MyStrategiesStats';
import {myStrategies} from '../../../Data/MyStrategy_Dashboard';
export default function MyStrategies() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedStrategy, setSelectedStrategy] = React.useState({overview:""});

  const handleRowClick = (strategy) => {
    setSelectedStrategy(strategy);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper} style={{ paddingRight: "20px", paddingLeft: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "600" }}>Strategy Name</TableCell>
              <TableCell align="right" style={{ fontWeight: "600" }}>Category</TableCell>
              <TableCell align="right" style={{ fontWeight: "600" }}>Type</TableCell>
              <TableCell align="right" style={{ fontWeight: "600" }}>BenchMark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myStrategies.map((strategy) => (
              <TableRow
                key={strategy.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className='hover:bg-blue'
                onClick={() => handleRowClick(strategy)}
              >
                <TableCell>{strategy.name}</TableCell>
                <TableCell align="right">{strategy.riskLevel}</TableCell>
                <TableCell align="right">{strategy.earningPotential}</TableCell>
                <TableCell align="right">{strategy.benchmark}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          width: '90%',
          maxWidth: '1000px', // Adjust this value based on your design
          maxHeight: '80%', // Adjust this value based on your design
          overflowY: 'auto', // Enable vertical scrolling if needed
          padding: '20px',
        }}>
          <MyStrategiesStats strategy={selectedStrategy} />
          <div style={{marginTop:"-150px"}}>{selectedStrategy.overview}</div>
          <button onClick={handleCloseModal} style={{paddingTop:"100px"}}>Close</button>
        </div>
      </Modal>
    </>
  );
}
