import React from 'react';
import AlgoshoppingTemplate from './AlgoshoppingTemplate';

export default function Algoshopping() {
  const Algos = [
    {
        index:1,
        Strategist: "Finkulp",
        NSE: "NIFTY 50",
        Category: "Retail",
        Recommended_Duration: "180 Days",
        Fee: {
            Subscription: "0%",
            Pay_as_you_go: "3%"
        },
        description:`Entry
        MIS/Intraday orders are pushed to the broker on the generation of Buy/Sell signals.
        Order Quantity - [Roundown(capital/(LTP * Lot Size)]
        Order Code - Intraday
        Order type - Buy
        Order Variety - SL-Limit, if LTP < Order Price; Limit, if LTP > Order Price; Limit
        Order Price - [Close * (1 + Trigger price/100]
        Instrument - Call option for buy signal/ Put option for sell signal.
        Exit
        Target: NA
        Stoploss:
        Condition - as soon as entry orders are complete
        Order Quantity - main order quantity
        Order Code - Intraday
        Order Variety - SL-Limit
        Order Price - [Close * (1 - (SL%/100))]
        Initial Trailing Stoploss:
        Condition - As soon as the latest close closes above: [EntryPrice * (1 + Trailingthreshold / 100)]
        Order Quantity - main order quantity
        Order Code - Intraday
        Order Variety - SL-Limit
        Order Price - Entry Price
        Note: Stop-loss gets trailed until the position is squared off. All further trailing to be done on Trailing stop-loss Percentage basis.
        Profit Desired: NA
        Risk Appetite: NA"`
    },
    {
        index:1,
        Strategist: "Finkulp",
        NSE: "NIFTY 50",
        Category: "Retail",
        Recommended_Duration: "200 Days",
        Fee: {
            Subscription: "10%",
            Pay_as_you_go: "33%"
        },
        description:`Entry
        MIS/Intraday orders are pushed to the broker on the generation of Buy/Sell signals.
        Order Quantity - [Roundown(capital/(LTP * Lot Size)]
        Order Code - Intraday
        Order type - Buy
        Order Variety - SL-Limit, if LTP < Order Price; Limit, if LTP > Order Price; Limit
        Order Price - [Close * (1 + Trigger price/100]
        Instrument - Call option for buy signal/ Put option for sell signal.
        Exit
        Target: NA
        Stoploss:
        Condition - as soon as entry orders are complete
        Order Quantity - main order quantity
        Order Code - Intraday
        Order Variety - SL-Limit
        Order Price - [Close * (1 - (SL%/100))]
        Initial Trailing Stoploss:
        Condition - As soon as the latest close closes above: [EntryPrice * (1 + Trailingthreshold / 100)]
        Order Quantity - main order quantity
        Order Code - Intraday
        Order Variety - SL-Limit
        Order Price - Entry Price
        Note: Stop-loss gets trailed until the position is squared off. All further trailing to be done on Trailing stop-loss Percentage basis.
        Profit Desired: NA
        Risk Appetite: NA"`
    }
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', paddingTop: "175px", fontSize: "30px", fontWeight: "600" }}>Algoshopping</div>
      <form class="max-w-md mx-auto" style={{marginTop:"50px"}}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search an Algo..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
      <div style={{marginTop:"80px"}}>
      {Algos.map((Algos, index) => (
        <AlgoshoppingTemplate Algos={Algos}/>
      ))}
    </div>
    </div>
  );
}
