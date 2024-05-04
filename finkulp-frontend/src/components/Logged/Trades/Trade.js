import React from 'react';
import Tradestemplate from './Tradestemplate';

export default function Trade() {
  const tradeData = [
    {
      strategy: "Capital Growth Strategy",
      tradeType: "Buy",
      entryPrice: 150.5,
      exitPrice: 170.75,
      exitTime: "2024-03-30 9:15 AM",
      moneyEarnedLoss: 51500,
      profitLoss: 1500,
      profitLossPercentage: 3,
      moneyInvested: 50000,
    },
    {
      strategy: "Market Momentum Mastery",
      tradeType: "Sell",
      entryPrice: 200.25,
      exitPrice: 190.8,
      exitTime: "2024-03-31 11:30 AM",
      moneyEarnedLoss: 73500,
      profitLoss: -1500,
      profitLossPercentage: -2,
      moneyInvested: 75000,
    },
    {
      strategy: "Capital Growth Strategy",
      tradeType: "Buy",
      entryPrice: 150.5,
      exitPrice: 170.75,
      exitTime: "2024-03-30 9:15 AM",
      moneyEarnedLoss: 51500,
      profitLoss: 1500,
      profitLossPercentage: 3,
      moneyInvested: 50000,
    },
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', paddingTop: "175px", fontSize: "30px", fontWeight: "600" }}>Trades</div>
      <div style={{ textAlign: 'center',  fontSize: "20px", fontWeight: "300" }}>Represents information about Trades</div>
      <form class="max-w-md mx-auto" style={{marginTop:"50px"}}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a Trade..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
      <div style={{marginTop:"80px"}}>
      {tradeData.map((trade, index) => (
        <Tradestemplate
          key={index}
          strategy={trade.strategy}
          tradeType={trade.tradeType}
          entryPrice={trade.entryPrice}
          exitPrice={trade.exitPrice}
          exitTime={trade.exitTime}
          moneyEarnedLoss={trade.moneyEarnedLoss}
          profitLoss={trade.profitLoss}
          profitLossPercentage={trade.profitLossPercentage}
          moneyInvested={trade.moneyInvested}
        />
      ))}
    </div>
    </div>
  );
}
