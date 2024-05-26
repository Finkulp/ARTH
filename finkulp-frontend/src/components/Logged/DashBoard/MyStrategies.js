import  React from 'react';
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
import { Link } from 'react-router-dom';
export default function MyStrategies(props) {
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
        
          {(props.Strategies && props.Strategies.length > 0) ? (
            (props.Strategies).map((strategy) => (
              <TableBody>
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
              </TableBody>
            ))
          ) : (
            <div style={{position:'relative',left:"180px"}}>
              <div style={{paddingTop:"50px",marginBottom:'50px',textAlign:'center',width:'100%'}}>No Strategies are added yet</div>
              <Link to='/loggedhome/MarketPlace/'>
                <button className="py-3 text-base font-medium text-white hover:bg-green-400 hover:text-black bg-blue" style={{borderRadius: "10px",marginLeft:'50px',width:'200px',marginBottom:'300px'}}>
                  Explore Strategies
                </button>
              </Link>
            </div>
          )}
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
