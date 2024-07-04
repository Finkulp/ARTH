import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, amountInvested, profitLoss, timeSpent, status) {
  return { name, amountInvested, profitLoss, timeSpent, status };
}

const initialRows = [
  createData('John Doe', 1000, 200, '2 years', 'Active'),
  createData('Jane Smith', 5000, -300, '1 year', 'Active'),
  createData('Alice Johnson', 3000, 500, '3 years', 'Active'),
  createData('Bob Brown', 2000, 150, '6 months', 'Active'),
  createData('Charlie Davis', 4000, -50, '1.5 years', 'Active'),
];

export default function CustomizedTables() {
  const [rows, setRows] = React.useState(initialRows);
  const [filterStatus, setFilterStatus] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleBlock = (name) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.name === name ? { ...row, status: row.status === 'Active' ? 'Blocked' : 'Active' } : row
      )
    );
  };

  const handleTerminate = (name) => {
    setRows((prevRows) => prevRows.filter((row) => row.name !== name));
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    const matchesStatus =
      filterStatus === 'All' ||
      (filterStatus === 'Active' && row.status === 'Active') ||
      (filterStatus === 'Blocked' && row.status === 'Blocked');
    const matchesSearch = row.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent:'right',gap:"30px", width: '95%', marginBottom: '10px',postion:'absolute',top:'50px' }}>
        <TextField
          label="Search by name"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <TextField
          select
          label="Filter by status"
          value={filterStatus}
          onChange={handleFilterChange}
          variant="outlined"
          style={{width:"150px"}}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Blocked">Blocked</MenuItem>
        </TextField>
      </div>
      <div style={{textAlign:'center',fontSize:'23px',color:'skyblue',postion:'absolute',paddingBottom:"30px"}}>MEMBERS DATA</div>
      <TableContainer component={Paper} style={{ width: '95%' }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Amount Invested</StyledTableCell>
              <StyledTableCell align="right">Profit/Loss</StyledTableCell>
              <StyledTableCell align="right">Time Spent</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.amountInvested}</StyledTableCell>
                <StyledTableCell align="right">{row.profitLoss}</StyledTableCell>
                <StyledTableCell align="right">{row.timeSpent}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color={row.status === 'Active' ? 'secondary' : 'primary'}
                    onClick={() => handleBlock(row.name)}
                    style={{ width: '150px' }}
                  >
                    {row.status === 'Active' ? 'Block' : 'Activate'}
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleTerminate(row.name)}
                    style={{ marginLeft: '10px', width: '150px' }}
                  >
                    Terminate
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
