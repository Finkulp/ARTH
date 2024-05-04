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

const myStrategies = [
  {
      name: "ABC Corp",
      riskLevel: "Moderate",
      creator: "John",
      earningPotential: "High",
      benchmark: "NASDAQ-100 Index",
      recommendedDuration: "Long-term",
      overview: "ABC Corp is a leading technology company specializing in cloud computing solutions, artificial intelligence, and software development. With a strong focus on innovation, the company has established itself as a market leader, catering to businesses across various industries. ABC Corp's cloud infrastructure and scalable solutions have contributed to its consistent revenue growth and market expansion. Investors can expect steady performance and potential for long-term growth with this stock."
  },
  // Add more entries as needed
  {
      name: "XYZ Inc",
      riskLevel: "Moderate",
      creator: "Sarah",
      earningPotential: "Medium",
      benchmark: "S&P 500 Index",
      recommendedDuration: "Medium-term",
      overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
  },
  {
      name: "XYZ Inc",
      riskLevel: "Moderate",
      creator: "Sarah",
      earningPotential: "Medium",
      benchmark: "S&P 500 Index",
      recommendedDuration: "Medium-term",
      overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
  },
  {
      name: "XYZ Inc",
      riskLevel: "Moderate",
      creator: "Sarah",
      earningPotential: "Medium",
      benchmark: "S&P 500 Index",
      recommendedDuration: "Medium-term",
      overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
  },
  {
      name: "XYZ Inc",
      riskLevel: "Moderate",
      creator: "Sarah",
      earningPotential: "Medium",
      benchmark: "S&P 500 Index",
      recommendedDuration: "Medium-term",
      overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
  },
  {
      name: "XYZ Inc",
      riskLevel: "Moderate",
      creator: "Sarah",
      earningPotential: "Medium",
      benchmark: "S&P 500 Index",
      recommendedDuration: "Medium-term",
      overview: "XYZ Inc is a leading manufacturer of consumer electronics, known for innovative product designs and global distribution. The company is known for its high-quality consumer electronics and global brand recognition, maintaining a competitive edge in the electronics market through innovation and customer satisfaction. Investors seeking exposure to the consumer electronics sector with moderate risk and growth potential may consider XYZ Inc as a viable investment option."
  }
];
export default function BasicTable() {
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
      <TableContainer component={Paper} style={{ paddingRight: "50px", paddingLeft: '50px' }}>
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
