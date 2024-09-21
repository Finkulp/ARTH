import React, { useState, useEffect, useContext } from 'react';
import DetailContext from '../../../Context/Details/DetailsContext';

export default function Output() {
  const { brokerDetails, getAliceBlueBrokerDetails } = useContext(DetailContext);
  const [counter, setCounter] = useState(0); // Counter for tracking number of updates

  // Fetch broker details and log every 10 seconds
  useEffect(() => {
    const fetchBrokerDetails = async () => {
      await getAliceBlueBrokerDetails();
      console.log('Broker Details Fetched:', brokerDetails);
    };
    
    // Initial fetch
    fetchBrokerDetails();

    // Set interval to fetch every 10 seconds
    const interval = setInterval(async () => {
      await fetchBrokerDetails();
      setCounter((prevCounter) => prevCounter + 1); // Increment the counter
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [getAliceBlueBrokerDetails, brokerDetails]);

  const BrokerDetailsGUI = ({ brokerDetails }) => {
    const BalanceDetails = ({ balance }) => (
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

    const HoldingPosition = ({ holdings }) => (
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

    const OrderHistory = ({ orderHistory }) => (
      <div className="order-history">
        <h2>Order History</h2>
        <p><strong>Status:</strong> {orderHistory.stat}</p>
        <p><strong>Message:</strong> {orderHistory.emsg}</p>
        <p><strong>EncKey:</strong> {orderHistory.encKey || 'None'}</p>
      </div>
    );

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

  return (
    <div>
      <BrokerDetailsGUI brokerDetails={brokerDetails} />
    </div>
  );
}
