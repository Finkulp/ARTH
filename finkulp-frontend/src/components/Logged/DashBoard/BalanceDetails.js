import React from 'react';
import {
  Typography,
  TableContainer,
  Paper,
  Box,
  Grid,
  Button
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
    <TableContainer
      component={Paper}
      style={{
        padding: '10px',
        maxWidth: '100%', // Ensure the container stretches to full width
        overflowX: 'auto' // Enable horizontal scrolling if content exceeds width
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        Balance Information
      </Typography>
      <Grid
        container
        spacing={2}
        direction="row" // Arrange the boxes in a row
        style={{
          display: 'flex',
          flexWrap: 'nowrap' // Prevent items from wrapping to the next row
        }}
      >
        {/* Each item is placed inside a box with heading and content */}
        <Grid item >
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '10px',
              minWidth: '200px', // Minimum width for each box
              textAlign: 'center'
            }}
          >
            <Typography variant="subtitle1">
              <strong>Symbol:</strong>
            </Typography>
            <Typography>{balance.symbol}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '10px',
              minWidth: '200px',
              textAlign: 'center'
            }}
          >
            <Typography variant="subtitle1">
            <strong>NET:</strong>
            </Typography>
            <Typography>{balance.net}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '10px',
              minWidth: '200px',
              textAlign: 'center'
            }}
          >
            <Typography variant="subtitle1">
              <strong>Cash Margin Available:</strong>
            </Typography>
            <Typography>{balance.cashmarginavailable}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '10px',
              minWidth: '200px',
              textAlign: 'center'
            }}
          >
            <Typography variant="subtitle1">
              <strong>Cover Order Margin Present:</strong>
            </Typography>
            <Typography>{balance.coverOrderMarginPrsnt}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '10px',
              minWidth: '200px',
              textAlign: 'center'
            }}
          >
            <Typography variant="subtitle1">
              <strong>Collateral Value:</strong>
            </Typography>
            <Typography>{balance.collateralvalue}</Typography>
          </Box>
        </Grid>
      </Grid>
    </TableContainer>
  );
};

export default BalanceDetails;
