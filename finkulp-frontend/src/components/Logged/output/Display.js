import React from 'react';

// Component for displaying balance details
const BalanceDetails = ({ balance }) => {
  return (
    <div className="balance-details">
      <h2>Balance Information</h2>
      <table border="1" cellPadding="10">
        <tbody>
          <tr><td><strong>Symbol</strong></td><td>{balance.symbol}</td></tr>
          <tr><td><strong>Net</strong></td><td>{balance.net}</td></tr>
          <tr><td><strong>Cash Margin Available</strong></td><td>{balance.cashmarginavailable}</td></tr>
          <tr><td><strong>Cover Order Margin Present</strong></td><td>{balance.coverOrderMarginPrsnt}</td></tr>
          <tr><td><strong>Collateral Value</strong></td><td>{balance.collateralvalue}</td></tr>
        </tbody>
      </table>
    </div>
  );
};

// Component for displaying holding positions
const HoldingPosition = ({ holdings }) => {
  return (
    <div className="holding-position">
      <h2>Holding Position</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>BSE Holding Value</th>
            <th>HU Quantity</th>
            <th>Price</th>
            <th>NSE Holding Value</th>
            <th>LTP</th>
            <th>Sellable Quantity</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding, index) => (
            <tr key={index}>
              <td>{holding.BSEHOldingValue || 'N/A'}</td>
              <td>{holding.HUqty}</td>
              <td>{holding.Price}</td>
              <td>{holding.NSEHOldingValue || 'N/A'}</td>
              <td>{holding.Ltp}</td>
              <td>{holding.SellableQty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Component for displaying order history
const OrderHistory = ({ orderHistory }) => {
  return (
    <div className="order-history">
      <h2>Order History</h2>
      <p><strong>Status:</strong> {orderHistory.stat}</p>
      <p><strong>Message:</strong> {orderHistory.emsg}</p>
      <p><strong>EncKey:</strong> {orderHistory.encKey || 'None'}</p>
    </div>
  );
};

// Main component to display all data
const BrokerDetailsGUI = ({ brokerDetails }) => {
  return (
    <div className="broker-details-gui">
      <h1>Broker Details</h1>
      {brokerDetails ? (
        <>
          <BalanceDetails balance={brokerDetails.Balance} />
          <HoldingPosition holdings={brokerDetails['Holding Position']} />
          <OrderHistory orderHistory={brokerDetails.Order_History} />
        </>
      ) : (
        <p>Loading broker details...</p>
      )}
    </div>
  );
};
export default BrokerDetailsGUI
