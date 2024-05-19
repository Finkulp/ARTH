export const Algos = [
    {
        index:1,
        Strategist: "Finkulp",
        NSE: "NIFTY 50",
        Category: "Retail",
        Recommended_Duration: "180 Days",
        Fee: {
            Subscription: "0%",
            Pay_as_you_go: "3%"
        },price:3000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [500, 600, 700, 800, 900, 1000]
          }
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
        },price:5000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [600, 600, 100, 200, 800, 1000]
          }
    },
    {
        index:1,
        Strategist: "Finkulp",
        NSE: "NIFTY 50",
        Category: "Retail",
        Recommended_Duration: "180 Days",
        Fee: {
            Subscription: "0%",
            Pay_as_you_go: "3%"
        },price:2000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [40, 60, 500, 800, 300, 100]
          }
    },
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
        price:7000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [40, 60, 500, 800, 300, 100]
          }
    },
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
        price:1000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [600, 600, 100, 200, 800, 1000]
          }
    },
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
        price:7000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [600, 100, 150, 300, 800, 1000]
          }
    },
    {
        index:1,
        Strategist: "Cevent",
        NSE: "NIFTY 50",
        Category: "Retail",
        Recommended_Duration: "180 Days",
        Fee: {
            Subscription: "0%",
            Pay_as_you_go: "3%"
        },
        price:9000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [600, 700, 100, 200, 400, 90]
          }
    },
    {
        index:1,
        Strategist: "AlgoBulls",
        NSE: "NIFTY 50",
        Category: "HNI",
        Recommended_Duration: "180 Days",
        Fee: {
            Subscription: "0%",
            Pay_as_you_go: "3%"
        },
        price:10000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [10, 100, 100, 600, 300, 800]
          }
    },
    {
        index:1,
        Strategist: "Finkulp",
        NSE: "NIFTY 50",
        Category: "Premium",
        Recommended_Duration: "180 Days",
        Fee: {
            Subscription: "0%",
            Pay_as_you_go: "3%"
        },
        price:3000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [100, 200, 600, 300, 200, 100]
          }
    },
    {
        index:1,
        Strategist: "Finkulp",
        NSE: "NIFTY 50",
        Category: "Premium",
        Recommended_Duration: "180 Days",
        Fee: {
            Subscription: "0%",
            Pay_as_you_go: "3%"
        },
        price:3000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [100, 400, 300, 800, 100, 1300]
          },
    },
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
        price:2000,
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
        Risk Appetite: NA"`,
        graph:{
            year: [2011, 2012, 2013, 2014, 2015, 2016],
            profit: [800, 100, 100, 300, 100, 100]
          }
    },
  ];
