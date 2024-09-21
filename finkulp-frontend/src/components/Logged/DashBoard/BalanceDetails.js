import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid
} from '@mui/material';

const BalanceDetails = ({ balance }) => {
  if (!balance) {
    return (
      <Typography variant="body1" color="textSecondary">
        No balance information available.
      </Typography>
    ); // Fallback UI
  }

  return (
    <TableContainer component={Paper} style={{padding:'10px'}}>
      <Typography variant="h6" component="h2" gutterBottom>
        Balance Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Symbol:</strong> {balance.symbol}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Net:</strong> {balance.net}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Cash Margin Available:</strong> {balance.cashmarginavailable}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Cover Order Margin Present:</strong> {balance.coverOrderMarginPrsnt}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Collateral Value:</strong> {balance.collateralvalue}</Typography>
        </Grid>
      </Grid>
    </TableContainer>
  );
};

export default BalanceDetails;
