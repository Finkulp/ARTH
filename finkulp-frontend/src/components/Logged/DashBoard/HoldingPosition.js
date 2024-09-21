import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper
} from '@mui/material';

const HoldingPosition = ({ holdings }) => {
  return (
    <TableContainer component={Paper} style={{padding:"10px"}}>
      <Typography variant="h6" component="h2" gutterBottom>
        Holding Position
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>BSE Holding Value</strong></TableCell>
            <TableCell><strong>HU Quantity</strong></TableCell>
            <TableCell><strong>Price</strong></TableCell>
            <TableCell><strong>NSE Holding Value</strong></TableCell>
            <TableCell><strong>LTP</strong></TableCell>
            <TableCell><strong>Sellable Quantity</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {holdings.slice(0, 7).map((holding, index) => (
        <TableRow key={index}>
          <TableCell>{holding.BSEHOldingValue || 'N/A'}</TableCell>
          <TableCell>{holding.HUqty}</TableCell>
          <TableCell>{holding.Price}</TableCell>
          <TableCell>{holding.NSEHOldingValue || 'N/A'}</TableCell>
          <TableCell>{holding.Ltp}</TableCell>
          <TableCell>{holding.SellableQty}</TableCell>
        </TableRow>
      ))}
    </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HoldingPosition;
