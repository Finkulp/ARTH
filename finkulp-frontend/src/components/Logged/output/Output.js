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
    }, 1200000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Dependency array

  // Dynamically render any data from brokerDetails object
  const renderData = (data) => {
    if (!data) return <p>No data available</p>;

    return (
      <div>
        {Object.keys(data).map((key) => (
          <div key={key} className="data-section">
            <h2>{key}</h2>
            {Array.isArray(data[key]) ? (
              <table border="1" cellPadding="10">
                <thead>
                  <tr>
                    {Object.keys(data[key][0] || {}).map((subKey) => (
                      <th key={subKey}>{subKey}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data[key].map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((value, subIndex) => (
                        <td key={subIndex}>{value !== null ? value : 'N/A'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : typeof data[key] === 'object' ? (
              <table border="1" cellPadding="10">
                <tbody>
                  {Object.keys(data[key]).map((subKey) => (
                    <tr key={subKey}>
                      <td><strong>{subKey}</strong></td>
                      <td>{data[key][subKey] !== null ? data[key][subKey] : 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>{data[key]}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>Broker Details</h1>
      {brokerDetails ? renderData(brokerDetails) : <p>Loading broker details...</p>}
    </div>
  );
}
