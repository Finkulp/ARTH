import React from 'react';
import '../../../CSS/Reports.css'

const generateRandomData = (numRows) => {
  const data = [];
  for (let i = 0; i < numRows; i++) {
    data.push({
      date: new Date(2023, 0, i + 1).toLocaleDateString(),
      symbol: `SYM${Math.floor(Math.random() * 100)}`,
      price: (Math.random() * 1000).toFixed(2),
      volume: Math.floor(Math.random() * 10000),
      profitLoss: (Math.random() * 200 - 100).toFixed(2),
    });
  }
  return data;
};

const TradingReport = () => {
  const reportData = generateRandomData(10);

  return (
    <div className="report-trading-report">
      <h1 className="report-h1">Algorithmic Trading Report</h1>
      <h2 className="report-h2">Overview</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th className="report-th">Date</th>
            <th className="report-th">Symbol</th>
            <th className="report-th">Price</th>
            <th className="report-th">Volume</th>
            <th className="report-th">Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((row, index) => (
            <tr key={index}>
              <td className="report-td">{row.date}</td>
              <td className="report-td">{row.symbol}</td>
              <td className="report-td">${row.price}</td>
              <td className="report-td">{row.volume}</td>
              <td className={`report-td ${row.profitLoss >= 0 ? 'report-profit' : 'report-loss'}`}>
                ${row.profitLoss}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradingReport;
